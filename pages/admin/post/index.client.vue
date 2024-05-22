
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

      <a-table :columns="columns" :data-source="data">
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
          <template v-else-if="column.key === 'tags'">
            <span>
              <a-tag
                v-for="tag in record.tags"
                :key="tag"
                :color="
                  tag === 'loser'
                    ? 'volcano'
                    : tag.length > 5
                    ? 'geekblue'
                    : 'green'
                "
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top"  color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <span class="hover:bg-[#faad14]/20 flex items-center justify-center w-6 h-6 rounded-md"><UIcon class="hover:text-[#faad14]" name="i-icon-park-outline-eyes" /></span>
              </a-tooltip>
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <span
                  class="hover:bg-[green]/20 flex items-center justify-center w-6 h-6 rounded-md"
                >
                  <div>
                    <button @click="showModal">
                      <UIcon
                        class="hover:text-[green]"
                        name="i-material-symbols-edit-outline"
                      />
                    </button>
                    <a-modal v-model:open="open" title="Sửa" >
                      <div class="">
                        <div class="bg-white py-2">
                          <div class="pb-4">
                            <label
                              for="email"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Tên danh mục
                            </label>
                            <div class="mt-1">
                              <a-input
                                class="w-[450px] h-[45px]"
                                placeholder="Nhập tên danh mục"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              for="email"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Nội dụng
                            </label>
                            <div class="mt-1">
                              <a-input
                                class="w-[450px] h-[45px]"
                                placeholder="Nhập nội dung"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a-modal>
                  </div>
                </span>
              </a-tooltip>
              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <span
                  class="hover:bg-[red]/20 flex items-center justify-center w-6 h-6 rounded-md"
                >
                  <a-popconfirm
                    title="Are you sure delete this task?"
                    placement="right"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="confirm"
                    @cancel="cancel"
                  >
                    <a href="#">
                      <UIcon
                        class="hover:text-[red]"
                        name="i-material-symbols-delete-outline"
                    /></a>
                  </a-popconfirm>
                </span>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
const confirm = (e: MouseEvent) => {
  console.log(e);
  message.success("Xóa thành công");
};

const cancel = (e: MouseEvent) => {
  console.log(e);
  message.error("Xóa thất bại");
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
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    category: "New York No. 1 Lake Park",
    title: 32,
    summary: "New York No. 1 Lake Park",
    image: 32,
    Slug: "asdasd",
    tags: ["nice", "developer"],
  },
];
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};


</script>
