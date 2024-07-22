<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Quản lý đánh giá</h5>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="w-1/2 flex items-center gap-2">
          <div class="relative w-2/3 md:block hidden">
            <div class="flex">
              <a-input placeholder="Nhập tên sách để tìm kiếm" class="h-10">
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
            </div>
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UIcon class="text-gray-500" name="i-material-symbols-search" />
            </div>
          </div>
          <NuxtLink to="/admin/book/create-book" class="">
            <a-button type="primary">Thêm sách</a-button>
          </NuxtLink>
        </div>
  
        <a-table :columns="columns" :data-source="data">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'sku'">
              <span> Mã sách</span>
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
                <a-tooltip placement="top" color="gold">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <span
                    class="hover:bg-[#faad14]/20 flex items-center justify-center w-6 h-6 rounded-md"
                    ><UIcon
                      class="hover:text-[#faad14]"
                      name="i-icon-park-outline-eyes"
                  /></span>
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
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
const columns = [
  {
    name: "Tên sách",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Người đánh giá",
    dataIndex: "Assessor",
    key: "Assessor",
  },
  {
    title: "Thời gian",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Số sao đánh giá",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Nội dung đánh giá",
    dataIndex: "dicription",
    key: "dicription",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];

const data = [
  {
    title: "Doraemon tập 31 ",
    Assessor: "Trung Tran Quang",
    phone: "0123456789",
    email: "trung190579@gmail.com",
    date: "20/7/2024 - 11:00",
    rating: 5,
    dicription: "Sách rất hay",
  },
  {
    title: "Trò Chơi Tâm Lý",
    Assessor: "Ton That An Khuong (FPL HCM)",
    phone: "0123456789",
    email: "khuongttaps26697@fpt.edu.vn",
    date: "19/07/2024 - 19:05",
    rating: 4,
    dicription: "Sách rất hay",
  },
];
</script>