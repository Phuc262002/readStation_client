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
        <NuxtLink to="/admin/post/add-post" class="">
          <a-button type="primary">Thêm bài viết</a-button>
        </NuxtLink>
      </div>

      <a-table :columns="columns" :data-source="postStore?.posts.posts">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Tên người viết </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <span
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <div>
                    <button class="flex items-center" @click="showModal">
                      <UIcon
                        class="group-hover:text-[green]"
                        name="i-icon-park-outline-eyes"
                      />
                    </button>
                    <a-modal v-model:open="open" title="Sửa" width="70%">
                      <div class="flex justify-between gap-4">
                        <div class="grow">
                          <h1 class="font-bold text-xl">Bài viết số 1</h1>
                        </div>
                        <!-- <div class="flex gap-4">
                          <a-tooltip placement="top" color="red">
                            <template #title>
                              <span>Hủy</span>
                            </template>
                            <span
                              class="group hover:bg-[red]/20 flex items-center justify-center w-10 h-10 rounded-md"
                            >
                              <UIcon
                                class="group-hover:text-[red] text-2xl"
                                name="i-material-symbols-close-small-outline"
                              />
                            </span>
                          </a-tooltip>
                          <a-tooltip placement="top" color="gold">
                            <template #title>
                              <span>Sửa</span>
                            </template>
                            <span
                              class="group hover:bg-[#faad14]/20 flex items-center justify-center w-10 h-10 rounded-md"
                              ><UIcon
                                class="group-hover:text-[#faad14]"
                                name="i-material-symbols-edit-rounded"
                            /></span>
                          </a-tooltip>
                        </div> -->
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
                  </div></span
                >
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
                    <NuxtLink to="/admin/post/edit/1">
                      <a-menu-item key="2" class="p-4">
                        <span class="flex items-center gap-2 text-blue-400">
                          <UIcon
                            class="group-hover:text-[green]"
                            name="i-material-symbols-edit-outline"
                          />
                          <span>Sửa</span>
                        </span>
                      </a-menu-item>
                    </NuxtLink>

                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button
                          @click="showDeleteConfirm(record?.id)"
                          class="flex items-center gap-1 text-blue-400"
                        >
                          <UIcon
                            class="group-hover:text-[red] text-lg"
                            name="i-material-symbols-delete-outline"
                          />
                          <span>Xóa</span>
                        </button>
                      </span>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>

              <!-- <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <span
                  class="group hover:bg-[red]/20 flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <a-popconfirm
                    title="Are you sure delete this task?"
                    placement="right"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="confirm"
                    @cancel="cancel"
                  >
                    <UIcon
                      class="group-hover:text-[red] text-lg"
                      name="i-material-symbols-delete-outline"
                    />
                  </a-popconfirm>
                </span>
              </a-tooltip> -->
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Modal } from "ant-design-vue";
const postStore = usePostStore();

useAsyncData(async () => {
  await postStore.getPost({});
});

const onDelete = async (id: string) => {
  await postStore.deletePost(id);
  await postStore.getPost({});
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
    name: "Name",
    dataIndex: "Name",
    key: "name",
  },
  {
    title: "Danh mục",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Tên bài viết",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Nội dung ngắn",
    dataIndex: "summary",
    key: "summary",
  },
  {
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
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


const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
</script>
