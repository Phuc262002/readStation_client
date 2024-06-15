<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả bài viết</h5>
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
            <span>
              <a-tag
                :bordered="false"
                :color="record.status === 'active' ? 'green' : 'volcano'"
              >
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-2">
              <a-tooltip placement="top">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModalDetail(record.id)"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <div>
                    <UIcon
                      class="group-hover:text-[#212122]"
                      name="i-icon-park-outline-eyes"
                    />
                  </div>
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
                      <span class="flex items-center gap-2 text-blue-400">
                        <!-- <UIcon
                            class="group-hover:text-[green]"
                            name="i-material-symbols-edit-outline"
                          /> -->
                        <span>Chấp nhận</span>
                      </span>
                    </a-menu-item>

                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button class="flex items-center gap-1 text-blue-400">
                          <!-- <UIcon
                            class="group-hover:text-[red] text-lg"
                            name="i-material-symbols-delete-outline"
                          /> -->
                          <span>Từ chối</span>
                        </button>
                      </span>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
        </template>
      </a-table>
      <PostAdminDetail
        :postDetailId="postDetailId"
        :openModalDetail="openModalDetail"
        :openModal="CloseModalDetail"
      />
      <!-- <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="postStore?.postsAdmin?.totalResults"
          :pageSize="postStore?.postsAdmin?.pageSize"
          show-less-items
        />
      </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Modal } from "ant-design-vue";
const postStore = usePostStore();
const openModalDetail = ref(false);
const postDetailId = ref("");
const current = ref(1);
useAsyncData(async () => {
  await postStore.getAllPost({
    status: "wating_approve",
  });
});

const onDelete = async (id: string) => {
  await postStore.deletePost(id);
  await postStore.getAllPost({});
};
const showDeleteConfirm = (id: string) => {
  Modal.confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onDelete(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
const columns = [
  {
    name: "title",
    dataIndex: "name",
    key: "name",
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
    title: "Slug",
    dataIndex: "slug",
    key: "slug",
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
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
</script>
