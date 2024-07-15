import dayjs from 'dayjs';
<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Phiếu trả sách</h5>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex flex-col gap-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <a-input placeholder="Nhập mã kệ để tìm kiếm" class="h-10">
              <template #prefix>
                <SearchOutlined />
              </template>
            </a-input>
          </div>
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <a-table :columns="columns" :data-source="returnHistoryStore?.ReturnHistoryAdmin?.returnHistory">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'sku'">
              <a>{{ record.loan_order_detail?.loan_order?.order_code }}</a>
            </template>
            <template v-if="column.key === 'loan_order_detail'">
              <div class="flex justify-start gap-4 items-center">
                <a-avatar :src="record.loan_order_detail?.loan_order?.user?.avatar" :size="40" />
                <div class="flex flex-col gap-1">
                  <span class="text-base">
                    {{ record.loan_order_detail?.loan_order?.user?.fullname }}
                  </span>
                  <span class="text-base"> {{ record.loan_order_detail?.loan_order?.user?.phone ?
                    record.loan_order_detail?.loan_order?.user?.phone : '' }}</span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'return_date'">
              <span>{{ $dayjs(record.return_date).format('DD/MM/YYYY') }}</span>
            </template>
            <template v-if="column.key === 'return_method'">
              <span v-if="record?.return_method === 'library'">Giao trả tại thư viện</span>
              <span v-if="record?.return_method === 'pickup'">Giao trả đến thư viện</span>
            </template>
            <template v-if="column.key === 'action'">
              <NuxtLink :to="`/admin/product-manager/slip/${record?.id}`">
                <a-tooltip placement="top">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                    <div>
                      <UIcon class="group-hover:text-[#212122]" name="i-icon-park-outline-eyes" />
                    </div>
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
const returnHistoryStore = useReturnHistoryStore();
useAsyncData(async () => {
  await returnHistoryStore.getAllReturnHistory({});
});

const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'sku',
    key: 'sku',
  },
  {
    title: 'Thông tin cá nhân',
    dataIndex: 'loan_order_detail',
    key: 'loan_order_detail',
  },
  {
    title: 'Ngày thuê',
    dataIndex: 'return_date',
    key: 'return_date',
  },
  {
    title: 'Hình thức trả sách',
    dataIndex: 'return_method',
    key: 'return_method',
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
  }
];
const data = [
  {
    id: 1,
    sku: '#0488D7D3C7',
    user: 'Nguyễn Văn A',
    return_date: '20/10/2021',
    return_method: 'Giao trả sách',
  },
];
</script>