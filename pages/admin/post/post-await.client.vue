<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Tất cả bài viết chờ duyệt
        </h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <input
              type="text"
              class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
              placeholder="Tìm kiếm..."
            />
          </div>
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
      </div>

      <a-table
        :columns="columns"
        :loading="postStore.isLoading"
        :data-source="postStore?.postsAdmin.posts"
        :pagination="false"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Tên bài viết </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.title }}
            </a>
          </template>
          <template v-if="column.key === 'category_id'">
            <span>
              {{ record.category.name }}
            </span>
          </template>
          <template v-else-if="column.key === 'image'">
            <a-image
              class="rounded-md"
              :width="100"
              :height="100"
              :src="record.image"
            />
          </template>
          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.WATING_APPROVE"
              class="bg-tag-bg-01 text-tag-text-01"
            >
              Chờ duyệt
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.DRAFT"
              class="bg-tag-bg-08 text-tag-text-08"
            >
              Bản nháp
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.PUBLISHED"
              class="bg-tag-bg-09 text-tag-text-09"
            >
              Đang hoạt động
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.HIDDEN"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đã ẩn
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.DELETED"
              class="bg-tag-bg-06 text-tag-text-06"
            >
              Đã xóa
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.APPROVE_CANCELED"
              class="bg-tag-bg-11 text-tag-text-11"
            >
              Từ chối
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-2">
              <a-tooltip placement="top" color="black">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModalDetail(record.id)"
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                >
                  <UIcon class="text-lg" name="i-icon-park-outline-eyes" />
                </button>
              </a-tooltip>
              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#131313]"
                    name="i-solar-menu-dots-bold"
                  />
                </button>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="2" class="p-4">
                      <button
                        @click="showRecoverConfirm(record.id)"
                        class="flex items-center gap-2"
                      >
                        <UIcon
                          class="group-hover:text-[green]"
                          name="i-teenyicons-tick-outline"
                        />
                        <span>Chấp nhận</span>
                      </button>
                    </a-menu-item>

                    <a-menu-item key="3" class="p-4">
                      <button
                        @click="showCancelConfirm(record.id)"
                        class="flex items-center gap-1"
                      >
                        <UIcon
                          class="group-hover:text-[red] text-lg"
                          name="i-material-symbols-close"
                        />
                        <span>Từ chối</span>
                      </button>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
        </template>
      </a-table>
      <PostAdminConfirm
        :openModalConfirm="openModalConfirm"
        :openModal="CloseModalConfirm"
        :status="status"
        :id="postAwaitId"
      />
      <PostAdminDetail
        :openModalDetail="openModalDetail"
        :openModal="CloseModalDetail"
        :postDetailId="postDetailId"
      />
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="postStore?.postsAdmin?.totalResults"
          :pageSize="postStore?.postsAdmin?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Modal } from "ant-design-vue";
import { PostStatus } from "~/types/admin/post";
const postStore = usePostStore();
const openModalConfirm = ref(false);
const openModalDetail = ref(false);
const postAwaitId = ref("");
const postDetailId = ref();
const status = ref("");
const current = ref(1);
useAsyncData(
  async () => {
    await postStore.getAllPost({
      page: current.value,
      status: "wating_approve",
    });
  },
  {
    immediate: true,
    watch: [current],
  }
);

const onRecover = async (id) => {
  await postStore.updatePost({ id: id, post: { status: "published" } });
  await postStore.getAllPost({
    page: current.value,
    status: "wating_approve",
  });
};
const showRecoverConfirm = (id) => {
  Modal.confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onRecover(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

const showCancelConfirm = (id) => {
  openModalConfirm.value = true;
  postAwaitId.value = id;
  status.value = "approve_canceled";
};
const CloseModalConfirm = () => {
  openModalConfirm.value = false;
};

const columns = [
  {
    name: "title",
    dataIndex: "name",
    key: "name",
    width: "250px",
  },
  {
    title: "Danh mục",
    dataIndex: "category_id",
    key: "category_id",
  },
  {
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Nội dung ngắn",
    dataIndex: "summary",
    key: "summary",
  },

  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Action",
    key: "action",
  },
];
const CloseModalDetail = () => {
  openModalDetail.value = false;
 
};
const showModalDetail = (id) => {
  openModalDetail.value = true;
  postDetailId.value = id;

};
</script>
