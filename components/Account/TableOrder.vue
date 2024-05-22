<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    bordered
    :scroll="{ x: 1200, y: 300 }"
  >
    <!-- <a-table :columns="columns" :data-source="data" :pagination="pagination" bordered > -->
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span> Mã đơn hàng </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'status'">
        <span>
          <a-tag
            v-for="tag in record.status"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'green'
                : 'geekblue'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>

      <template v-else-if="column.key === 'payment_method'">
        <span class="flex justify-center">
          <a-tag
            :color="record.payment_method === 'active' ? 'volcano' : 'green'"
          >
            {{ record.payment_method }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'extend'">
        <span class="flex space-x-2">
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </a>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span class="flex space-x-2">
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </a>
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </a>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "order_code",
    key: "order_code",
    width: 150,
  },
  {
    title: "Ngày đặt",
    dataIndex: "created_at",
    key: "created_at",
    width: 110,
  },
  {
    title: "Ngày nhận",
    dataIndex: "receipt_date",
    key: "receipt_date",
    width: 110,
  },
  {
    title: "Phương thức thanh toán",
    key: "payment_method",
    dataIndex: "payment_method",
    width: 190,
  },
  {
    title: "Trạng thái đơn",
    key: "status",
    dataIndex: "status",
    width: 130,
  },
  {
    title: "Gia hạn",
    key: "extension_dates",
    dataIndex: "extension_dates",
    width: 120,
  },
  {
    title: "Số lần gia hạn",
    key: "current_extensions",
    dataIndex: "current_extensions",
    width: 130,
  },
  {
    title: "Tổng tiền",
    key: "total_fee",
    dataIndex: "total_fee",
    width: 100,
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 120,
  },
];

const data = [
  {
    key: "1",
    order_code: "2683242197997",
    created_at: "20/5/2024",
    receipt_date: "22/5/2024",
    payment_method: "Thanh Toán Ví ",
    current_extensions: "123",
    total_fee: "200k",
    extension_dates: "thêm 3 ngày",
    status: ["Hoàn thành"],
  },
];

const pagination = {
  total: data.length,
  pageSize: 3,
  // showTotal: (total, range) => `Đang hiển thị ${range[1] - range[0] + 1} trên ${total} sản phẩm`,
  // position: ['bottomCenter'],
};
</script>
