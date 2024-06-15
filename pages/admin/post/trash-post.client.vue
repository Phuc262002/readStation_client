<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Tất cả bài viết đã xóa
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
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.title }}
            </a>
          </template>
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
          <template v-if="column.key === 'user_id'">
            <span>
              {{ record.user.fullname }}
            </span>
          </template>
          <template v-if="column.key === 'view'">
            <span> {{ record.view }} lượt xem </span>
          </template>
          <template v-else-if="column.key === 'image'">
            <a-image
              class="rounded-md"
              :width="70"
              :height="70"
              :src="record.image"
            />
          </template>
          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === 'wating_approve'"
              color="yellow"
            >
              Đang chờ duyệt
            </a-tag>

            <a-tag
              :bordered="false"
              v-else-if="record.status === 'draft'"
              color="black"
            >
              Bản nháp
            </a-tag>
            <a-tag
              :bordered="false"
              v-else-if="record.status === 'published'"
              color="green"
            >
              Công khai
            </a-tag>

            <a-tag
              :bordered="false"
              v-else-if="record.status === 'hidden'"
              color="#B2B6BB"
            >
              Đã ẩn
            </a-tag>

            <a-tag
              :bordered="false"
              v-else-if="record.status === 'deleted'"
              color="red"
            >
              Đã xóa
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-2">
              <a-tooltip placement="top">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModal"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <div class="flex">
                    <UIcon
                      class="group-hover:text-[#212122]"
                      name="i-icon-park-outline-eyes"
                    />

                    <a-modal v-model:open="open" title="Sửa" width="70%">
                      <div class="flex justify-between gap-4">
                        <div class="grow">
                          <h1 class="font-bold text-xl">Bài viết số 1</h1>
                        </div>
                      </div>
                      <div
                        class="flex border border-transparent border-b-gray-300 pb-2"
                      >
                        <div class="w-1/5">
                          <h4 class="font-bold">Tên người viết</h4>
                        </div>
                        <div class="w-4/5">Huỳnh Tuấn Kiệt</div>
                      </div>
                    </a-modal>
                  </div>
                </button>
              </a-tooltip>

              <a-tooltip placement="top" color="black ">
                <template #title>
                  <span>Khôi phục</span>
                </template>
                <button
                  @click="showRecoverConfirm(record.id)"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="text-lg"
                    name="i-material-symbols-autorenew-rounded"
                  />
                </button>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
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
<script lang="ts" setup>
import { Modal } from "ant-design-vue";
const postStore = usePostStore();
const current = ref(1);
useAsyncData(
  async () => {
    await postStore.getAllPost({
      page: current.value,
      status: "deleted",
    });
  },
  {
    immediate: true,
    watch: [current],
  }
);

const onRecover = async (id: string) => {
  await postStore.updatePost({ id: id, post: { status: "published" } });
  await postStore.getAllPost({
    page: current.value,
    status: "deleted",
  });
};
const showRecoverConfirm = (id: string) => {
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

const columns = [
  {
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Tên bài viết",
    dataIndex: "title",
    key: "title",
    width: "300px",
  },
  {
    title: "Tiêu đề",
    dataIndex: "summary",
    key: "summary",
    width: "200px",
  },
  {
    title: "Người đăng",
    dataIndex: "user_id",
    key: "user_id",
    width: "200px",
  },

  {
    title: "Danh mục",
    dataIndex: "category_id",
    key: "category_id",
  },
  {
    title: "Lượt xem",
    dataIndex: "view",
    key: "view",
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

const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
</script>
