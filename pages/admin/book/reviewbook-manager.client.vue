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
          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item>Tất cả</a-menu-item>
                <a-menu-item>Hoạt động</a-menu-item>
                <a-menu-item>Không hoạt
                  động</a-menu-item>
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              Số sao
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </div>
        <NuxtLink to="/admin/book/create-book" class="">
          <a-button type="primary" size="large">Thêm sách</a-button>
        </NuxtLink>
      </div>

      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'title'">
            <span>Tên sách</span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'Assessor'">
            <div class="flex flex-col gap-2">
              <span>{{ record.Assessor }}</span>
              <span>{{ record.phone }}</span>
              <span>{{ record.email }}</span>
            </div>
          </template>
          <template v-if="column.key === 'rating'">
            <span>
              <CommonRating :rating="record.rating" />
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button @click="showModal"
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <Icon icon="heroicons:eye" class="group-hover:text-[#212122]" />
                </button>
              </a-tooltip>
              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <UIcon class="group-hover:text-[#131313]" name="i-solar-menu-dots-bold" />
                </button>
                <template #overlay>
                  <a-menu class="space-y-1">
                    <NuxtLink>
                      <a-menu-item key="1" class="p-4 hover:!bg-tag-bg-02">
                        <button class="flex items-center gap-2">
                          <Icon icon="fluent:edit-48-regular" class="text-lg text-tag-text-02" />
                          <span class="text-tag-text-02 font-bold">Sửa</span>
                        </button>
                      </a-menu-item>
                    </NuxtLink>

                    <a-menu-item key="2" class="p-4">
                      <button @click="showDeleteConfirm(record?.id)" class="flex items-center gap-2">
                        <Icon icon="hugeicons:delete-01" class="text-lg text-tag-text-06" />
                        <span class="text-tag-text-06 font-bold">Xóa</span>
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