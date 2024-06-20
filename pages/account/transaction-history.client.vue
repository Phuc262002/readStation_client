<template>
  <div>
    <h3 class="font-bold pb-5">Lịch sử giao dịch</h3>
    <NuxtLink
      to="/account/credit-manager"
      class="flex justify-end text-blue-600 text-sm"
      >Trở về</NuxtLink
    >
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <a-table
        :columns="columns"
        :data-source="walletStore?.transactions?.transactions"
        class="mt-5"
        :pagination="false"
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
          <!--  -->
          <template v-if="column.key === 'created_at'">
            <span>
              {{ $dayjs(record?.created_at).format("DD/MM/YYYY - HH:MM") }}
            </span>
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
const walletStore = useWalletStore();
const current = ref(1);
// render transaction
useAsyncData(
  async () => {
    try {
      await walletStore.getAllTransaction({
        page: current.value,
      });
    } catch (error) {
      console.log(error);
    }
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
    title: "Hình thức",
    dataIndex: "transaction_method",
    key: "transaction_method",
  },
  {
    title: "Thời gian",
    key: "created_at",
    dataIndex: "created_at",
  },
];
</script>
