import dayjs from 'dayjs';
<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Phiếu trả sách</h5>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex flex-col gap-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <a-input placeholder="Nhập mã đơn hàng để tìm kiếm" class="h-10">
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
        <a-table
          :columns="columns"
          :data-source="returnHistoryStore?.ReturnHistoryAdmin?.returnHistory"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'sku'">
              <a>{{ record.loan_order_detail?.loan_order?.order_code }}</a>
            </template>
            <template v-if="column.key === 'loan_order_detail'">
              <div class="flex justify-start gap-4 items-center">
                <a-avatar
                  :src="record.loan_order_detail?.loan_order?.user?.avatar"
                  :size="40"
                />
                <div class="flex flex-col gap-1">
                  <span class="text-base">
                    {{ record.loan_order_detail?.loan_order?.user?.fullname }}
                  </span>
                  <span class="text-base">
                    {{
                      record.loan_order_detail?.loan_order?.user?.phone
                        ? record.loan_order_detail?.loan_order?.user?.phone
                        : ""
                    }}</span
                  >
                </div>
              </div>
            </template>
            <template v-if="column.key === 'return_date'">
              <span>{{ $dayjs(record.return_date).format("DD/MM/YYYY") }}</span>
            </template>
            <template v-if="column.key === 'return_method'">
              <span v-if="record?.return_method === 'library'"
                >Giao trả tại thư viện</span
              >
              <span v-if="record?.return_method === 'pickup'"
                >Giao trả đến thư viện</span
              >
            </template>
            <template v-if="column.key === 'processed_by'">
                <span>{{ record?.processed_by?.fullname ? record?.processed_by?.fullname : 'Chưa được xử lý'}}</span>
            </template>
            <template v-if="column.key === 'status'">
              <span v-if="record?.status === 'completed'">
                <a-tag :bordered="false"  class="bg-tag-bg-05 text-tag-text-05">Hoàn thành</a-tag>
              </span>
              <span v-if="record?.status === 'pending'">
                <a-tag :bordered="false" class="bg-tag-bg-01 text-tag-text-01"
                  >Đang xử lý</a-tag
                >
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <NuxtLink class="hover:text-[black]" :to="`/admin/product-manager/slip/${record?.id}`">
                <a-tooltip placement="top" color="black">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                  >
                    <Icon
                      icon="heroicons:eye"
                      class="group-hover:text-[#212122]"
                    />
                  </button>
                </a-tooltip>
              </NuxtLink>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";

const returnHistoryStore = useReturnHistoryStore();
useAsyncData(async () => {
  try {
    await returnHistoryStore.getAllReturnHistory({});
  } catch (error) {
    console.error(error);
  }
});

const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "sku",
    key: "sku",
  },
  {
    title: "Thông tin cá nhân",
    dataIndex: "loan_order_detail",
    key: "loan_order_detail",
  },
  {
    title: "Ngày tạo phiếu",
    dataIndex: "return_date",
    key: "return_date",
  },
  {
    title: "Hình thức trả sách",
    dataIndex: "return_method",
    key: "return_method",
  },
  {
    title: "Người xử lý",
    dataIndex: "processed_by",
    key: "processed_by",
  },
  {
    title: "Trạng thái phiếu",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
  },
];
</script>
