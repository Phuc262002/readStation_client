<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả kệ sách</h5>
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
            <SearchOutlined class="text-gray-500" />
          </div>
        </div>
        <NuxtLink to="/admin/book-case/add-bookcase" class="">
          <a-button type="primary">Thêm kệ sách</a-button>
        </NuxtLink>
      </div>

      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Mã tủ sách </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top"  color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <span class="hover:bg-[#faad14]/20 flex items-center justify-center w-6 h-6 rounded-md"><UIcon class="hover:text-[#faad14]" name="i-icon-park-outline-eyes" /></span>
              </a-tooltip>
              <a-tooltip placement="top" color="green" >
                <template #title>
                  <span>Sửa</span>
                </template>
                <span class="hover:bg-[green]/20 flex items-center justify-center w-6 h-6 rounded-md"><UIcon class=" hover:text-[green]" name="i-material-symbols-edit-outline" /></span>
              </a-tooltip>
              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <span class="hover:bg-[red]/20 flex items-center justify-center w-6 h-6 rounded-md"><UIcon class=" hover:text-[red]" name="i-material-symbols-delete-outline" /></span>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
const columns = [
  {
    name: "Name",
    dataIndex: "Name",
    key: "name",
  },
  {
    title: "Mã kệ sách",
    dataIndex: "bookshelf_code",
    key: "bookshelf_code",
  },
  {
    title: "Danh mục",
    dataIndex: "category_id",
    key: "category_id",
  },
  {
    title: "Action",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "123",
    bookshelf_code: "123",
    category_id: "New York No. 1 Lake Park",
  },
];
</script>
