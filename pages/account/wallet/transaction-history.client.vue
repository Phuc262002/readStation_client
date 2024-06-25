<template>
  <div>
    <h3 class="font-bold">Lịch sử giao dịch</h3>
    <NuxtLink
      to="/account/wallet"
      class="flex justify-end text-blue-600 text-sm"
      >Trở về</NuxtLink
    >
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <span class="py-5">Các giao dịch bạn đã thực hiện</span>
      <a-table
        :columns="columns"
        :data-source="walletStore?.transactions?.transactions"
        class="mt-5"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'amount'">
            <span
              v-if="
                column.key === 'amount' && record.transaction_type === 'deposit'
              "
              class="text-tag-text-09 font-bold"
            >
              +
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(record?.amount)
              }}
            </span>
            <span
              v-else-if="
                column.key === 'amount' &&
                record.transaction_type === 'withdraw'
              "
              class="text-tag-text-06 font-bold"
            >
              -
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(record?.amount)
              }}
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'transaction_type'">
            <span
              v-if="record.transaction_type === 'deposit'"
              class="text-tag-text-09"
            >
              Nạp tiền
            </span>
            <span
              v-else-if="record.transaction_type === 'withdraw'"
              class="text-tag-text-06"
            >
              Rút tiền
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'status'">
            <a-tag
              v-if="record.status === 'pending'"
              class="text-tag-text-01 bg-tag-bg-01 border-none px-3 py-1"
            >
              Đang xử lý
            </a-tag>
            <a-tag
              v-else-if="record.status === 'completed'"
              class="text-tag-text-09 bg-tag-bg-09 border-none px-3 py-1"
            >
              Thành công
            </a-tag>
            <a-tag
              v-if="record.status === 'failed'"
              class="text-tag-text-06 bg-tag-bg-06 border-none px-3 py-1"
            >
              Thất bại
            </a-tag>
            <a-tag
              v-else-if="record.status === 'canceled'"
              class="text-tag-text-07 bg-tag-bg-07 border-none px-3 py-1"
            >
              Đã hủy
            </a-tag>
          </template>
          <!--  -->
          <template v-if="column.key === 'transaction_method'">
            <span v-if="record.transaction_method === 'offline'">
              Tiền mặt
            </span>
            <span v-else-if="record.transaction_method === 'online'">
              Chuyển khoản
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'created_at'">
            <span>
              {{ $dayjs(record?.created_at).format("DD/MM/YYYY - HH:MM") }}
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'action'">
            <div class="flex gap-2">
              <a-tooltip placement="top">
                <template #title>
                  <span>Thanh toán ngay</span>
                </template>
                <button
                  @click="() => getLinkPayment(record.transaction_code)"
                  class="bg-rtgray-50 p-2 rounded-lg flex items-center justify-center"
                >
                  <UIcon
                    class="group-hover:text-black"
                    name="i-charm-arrow-up-right"
                  />
                </button>
              </a-tooltip>

              <a-tooltip placement="top">
                <template #title>
                  <span>Hủy</span>
                </template>
                <button
                  @click="showCancelConfirm(record.transaction_code)"
                  class="bg-rtgray-50 p-2 rounded-lg flex items-center justify-center"
                >
                  <UIcon
                    class="group-hover:text-black"
                    name="i-material-symbols-close-rounded"
                  />
                </button>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="walletStore?.transactions?.totalResults"
          :pageSize="walletStore?.transactions?.pageSize"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const walletStore = useWalletClientStore();
const current = ref(1);
const data = ref(null);
// Update Transaction Status
const updateStatus = async (id) => {
  const resData = await walletStore.updateTransactionStatus(id);
};

// Cancel Transaction
const cancelTransaction = async (id: any) => {
  await walletStore.cancelTransaction(id);
  getData();
};
const showCancelConfirm = (id: any) => {
  Modal.confirm({
    title: "Bạn đang muốn hủy giao dịch?",
    content: "Sau khi hủy sẽ không khôi phục lại",
    okText: "Đồng ý",
    okType: "danger",
    cancelText: "Hủy",
    onOk() {
      cancelTransaction(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

// Get link Payment
const getLinkPayment = async (id) => {
  const resData = await walletStore.getPaymentLink(id);

  window.location.href =
    "https://pay.payos.vn/web/" + resData?.data?._rawValue?.data.id;
};
// render transaction
const getData = async () => {
  await walletStore.getAllTransaction({
    page: current.value,
    pageSize: 5,
  });
};
useAsyncData(
  async () => {
    await getData();
  },
  {
    immediate: true,
    watch: [current],
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
    title: "Loại giao dịch",
    dataIndex: "transaction_type",
    key: "transaction_type",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Hình thức",
    dataIndex: "transaction_method",
    key: "transaction_method",
  },
  {
    title: "Thời gian",
    key: "created_at",
    dataIndex: "created_at",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];
</script>
