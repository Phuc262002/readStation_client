<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả tủ sách</h5>
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
          <a-button type="primary">Thêm tủ sách</a-button>
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
              <span><UIcon name="i-icon-park-outline-eyes" /></span>
              <span><UIcon name="i-material-symbols-edit-outline" /></span>
              <span><UIcon name="i-material-symbols-delete-outline" /></span>
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
    title: "Danh mục",
    dataIndex: "category",
    key: "category",
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
    category: "New York No. 1 Lake Park",
  },
];
</script>
