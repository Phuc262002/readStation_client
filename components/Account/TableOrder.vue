<template>
  <a-table :columns="columns" :data-source="data" :pagination="pagination" bordered >
    <!-- <a-table :columns="columns" :data-source="data" :pagination="pagination" bordered > -->
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          Mã đơn hàng
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'green' : 'geekblue'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'extend'">
        <span class="flex space-x-2">         
          <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>          
          </a>
          
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span class="flex space-x-2">
          <!-- <a>Invite — {{ record.name }}</a>
          <a-divider type="vertical" /> -->
          <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </a>
          <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          </a>
          <!-- <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a> -->
        </span>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'order_id',
    key: 'order_id',
    width: 120,
  },
  {
    title: 'Ngày đặt',
    dataIndex: 'book_date',
    key: 'book_date',
  },
  {
    title: 'Ngày nhận',
    dataIndex: 'book_receipt_date',
    key: 'book_receipt_date',
  },
  {
    title: 'Thời gian trả sách',
    key: 'book_return',
    dataIndex: 'book_return',
  },
  {
    title: 'Phương thức thanh toán',
    key: 'payment_methods',
    dataIndex: 'payment_methods',
  },
  {
    title: 'Trạng thái đơn',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Tổng tiền',
    key: 'total',
    dataIndex: 'total',
  },
  {
    title: 'Gia hạn',
    key: 'extend',
    dataIndex: 'extend',
  },
  {
    title: 'Action',
    key: 'action',
  },
];

const data = [
  {
    key: '1',
    order_id: '2683242197997',
    book_date: '20/5/2024',
    book_receipt_date: '22/5/2024',
    book_return: '22/8/2024',
    payment_methods: 'credit',
    // status: 'Hoàn thành',
    total:'200k',
    extend:'thời gian',
    tags: ['Hoàn thành'],
  },
];


const pagination = {
  total: data.length, 
  pageSize: 2,
  // showTotal: (total, range) => `Đang hiển thị ${range[1] - range[0] + 1} trên ${total} sản phẩm`,
  // position: ['bottomCenter'],
};
</script>

<style scoped>
.ant-table-row{
  text-align: center !important;
}
</style>