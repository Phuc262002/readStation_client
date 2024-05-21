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
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <!-- <a>Invite — {{ record.name }}</a>
          <a-divider type="vertical" /> -->
          <a>Delete</a>
          <a>Delete</a>
          <a>Delete</a>
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
    key: 'status',
    dataIndex: 'status',
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
    status: 'Hoàn thành',
    total:'200k',
    extend:'thời gian',
    tags: ['nice', 'developer'],
  },
];


const pagination = {
  total: data.length, 
  pageSize: 2,
  // showTotal: (total, range) => `Đang hiển thị ${range[1] - range[0] + 1} trên ${total} sản phẩm`,
  // position: ['bottomCenter'],
};
</script>

