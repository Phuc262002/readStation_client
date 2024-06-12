<template>
  <div>
    <h3 class="font-bold pb-5">Lịch sử giao dịch</h3>
    <NuxtLink
      to="/account/credit-manager"
      class="flex justify-end text-blue-600"
      >Trở về</NuxtLink
    >
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <a-table
        :columns="columns"
        :data-source="data"
        class="mt-5"
        :pagination="false"
      >
      </a-table>
    </div>
  </div>
</template>
<script setup lang="ts">
const columns = [
  {
    title: "Mã giao dịch",
    dataIndex: "transactionCode",
    key: "transactionCode",
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Hình thức",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "Thời gian",
    key: "time",
    dataIndex: "time",
  },
];

const data = [
  {
    key: "1",
    transactionCode: "2683242197997",
    amount: "500.000 đ",
    method: "Chuyển khoản",
    time: "31/05/2024 - 23:50",
  },
  {
    key: "2",
    transactionCode: "2683242197997",
    amount: "500.000 đ",
    method: "Chuyển khoản",
    time: "31/05/2024 - 23:50",
  },
  {
    key: "3",
    transactionCode: "2683242197997",
    amount: "500.000 đ",
    method: "Chuyển khoản",
    time: "31/05/2024 - 23:50",
  },
];
</script>
