<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl font-bold">
          Tất cả lịch sử giao dịch
        </h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <a-table
        :columns="columns"
        :data-source="transactionAdminStore?.transactionAdmin?.transactions"
        class="mt-5"
        :pagination="false"
        :loading="transactionAdminStore?.isLoading"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'amount'">
            <span>
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(record?.amount)
              }}
            </span>
          </template>
          <template v-if="column.key === 'transaction_type'">
            <a-tag
              :bordered="false"
              v-if="record.transaction_type === 'payment'"
              class="text-tag-text-09 bg-tag-bg-09"
            >
              Thanh toán
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.transaction_type === 'refund'"
              class="text-tag-text-06 bg-tag-bg-06"
            >
              Hoàn tiền
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.transaction_type === 'extend'"
              class="text-tag-text-06 bg-tag-bg-06"
            >
              Gia hạn
            </a-tag>
          </template>

          <template v-if="column.key === 'transaction_method'">
            <span v-if="record.transaction_method === 'offline'">
              Tiền mặt
            </span>
            <span v-else-if="record.transaction_method === 'online'">
              Chuyển khoản
            </span>
          </template>

          <template v-if="column.key === 'created_at'">
            <span>
              {{ $dayjs(record?.created_at).format("DD/MM/YYYY - HH:MM") }}
            </span>
          </template>
          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === 'pending'"
              class="bg-tag-bg-01 text-tag-text-01"
            >
              Đang chờ
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === 'holding'"
              class="bg-tag-bg-06 text-tag-text-06"
            >
              Đang giữ
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === 'completed'"
              class="bg-tag-bg-09 text-tag-text-09"
            >
              Hoàn thành
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === 'failed'"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Thất bại
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === 'canceled'"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đã hủy
            </a-tag>
          </template>
        </template>
      </a-table>
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="transactionAdminStore?.transactionAdmin?.totalResults"
          :pageSize="transactionAdminStore?.transactionAdmin?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const current = ref(1);
const transactionAdminStore = useTransactionAdminStore();
useAsyncData(
  async () => {
    await transactionAdminStore.getAllTransaction({
      page: current.value,
    });
  },
  {
    immediate: true,
    watch: current,
  }
);
const columns = [
  {
    title: "Mã giao dịch",
    dataIndex: "transaction_code",
    key: "transaction_code",
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Mô tả",
    key: "description",
    dataIndex: "description",
  },
  {
    title: "Loại giao dịch",
    dataIndex: "transaction_type",
    key: "transaction_type",
  },
  {
    title: "Hình thức ",
    dataIndex: "transaction_method",
    key: "transaction_method",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },

  {
    title: "Thời gian",
    key: "created_at",
    dataIndex: "created_at",
  },
];
</script>
