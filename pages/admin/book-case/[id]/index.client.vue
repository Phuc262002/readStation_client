<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          <h5 class="text-xl text-[#1e293b] font-bold uppercase">
            Chi tiết tủ sách {{ bookCaseStore.bookCase?.name }}
          </h5>
        </h5>
      </div>
    </div>
    <div class="bg-[white] h-24 rounded-lg">
      <div class="p-5 flex justify-between">
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-bold">
            {{ bookCaseStore.bookCase?.name }}
          </h1>
          <p class="text-orange-400">
            {{ bookCaseStore.bookCase?.name }} -
            {{ bookCaseStore.bookCase?.shelves.length }} kệ sách -
            {{ bookCaseStore.bookCase?.books.length }} cuốn sách
          </p>
        </div>
        <div>
          <a-button type="primary">Đổi tên tủ</a-button>
        </div>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <a-input
              v-model:value="filter.search"
              @pressEnter="handleSearch"
              placeholder="Nhập mã kệ để tìm kiếm"
              class="h-10"
            >
              <template #prefix>
                <SearchOutlined />
              </template>
            </a-input>
          </div>
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <div class="">
          <a-button type="primary">Thêm sách</a-button>
        </div>
      </div>

      <a-table
        :columns="columns"
        :data-source="bookCaseStore.bookCase?.shelves"
        :loading="bookCaseStore.isLoading"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'bookshelf_code'">
            <span> Mã tủ sách </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-if="column.key === 'books'">
            <span class="flex justify-start gap-2">
              {{ record.books.length }}
              <p>cuốn sách</p>
            </span>
          </template>
          <template v-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <NuxtLink :to="`book-case/detail-case/${record.id}`">
                <a-tooltip placement="top" color="yellow">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                  >
                    <UIcon
                      class="group-hover:text-[#212122]"
                      name="i-icon-park-outline-eyes"
                    />
                  </button>
                </a-tooltip>
              </NuxtLink>
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <button
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#212122]"
                    name="i-material-symbols-edit-outline"
                  />
                </button>
              </a-tooltip>
              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <button
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#212122]"
                    name="i-material-symbols-delete-outline"
                  />
                </button>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Modal } from "ant-design-vue";
import { ref } from "vue";
const route = useRoute();
const detailBookCaseId = route.params.id;
const bookCaseStore = useBookcaseStore();

useAsyncData(async () => {
  if (detailBookCaseId !== undefined) {
    await bookCaseStore.getOneBookcase(detailBookCaseId);
  }
});
const filter = ref({
  search: "",
});
const handleSearch = () => {};
const columns = [
  {
    name: "Mã kệ",
    dataIndex: "bookshelf_code",
    key: "bookshelf_code",
  },
  {
    title: "Tên tủ sách",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Số lượng sách",
    dataIndex: "books",
    key: "books",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
  },
];


</script>
