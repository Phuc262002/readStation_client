<template>
  <div>
    <h2 class="text-sm font-bold pb-5">Danh sách đơn hàng</h2>
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div class="relative w-1/4 md:block hidden">
        <div class="flex">
          <input
            type="text"
            class="w-full h-10 border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
            placeholder="Tìm kiếm..."
          />
        </div>
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <UIcon class="text-gray-500" name="i-material-symbols-search" />
        </div>
      </div>
      <!--  -->
      <div class="flex gap-3 text-white py-5">
        <a-button
          class="flex items-center gap-2 h-10 bg-orange-500 !text-white"
        >
          <img src="../../assets/images/icon-blog.svg" alt="" />
          <span>Tất cả đơn hàng</span>
        </a-button>
        <a-button class="flex items-center gap-2 h-10 border-none">
          <img src="../../assets/images/icon-shipping.svg" alt="" />
          <span>Đang giao</span>
        </a-button>
        <a-button class="flex items-center gap-2 h-10 border-none">
          <img src="../../assets/images/icon-rent.svg" alt="" />
          <span>Đang thuê</span>
        </a-button>
        <a-button class="flex items-center gap-2 h-10 border-none">
          <img src="../../assets/images/icon-return.svg" alt="" />
          <span>Đã hoàn trả</span>
        </a-button>
        <a-button class="flex items-center gap-2 h-10 border-none">
          <img src="../../assets/images/icon-cancel.svg" alt="" />
          <span>Đã hủy</span>
        </a-button>
      </div>
      <!--  -->
      <a-table :columns="columns" :data-source="data">
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
          <template v-if="column.key === 'order_code'">
            <span>
              {{ record?.order_code }}
            </span>
          </template>

          <template v-if="column.key === 'created_at'">
            <span>
              {{ record?.created_at }}
            </span>
          </template>

          <template v-if="column.key === 'payment_method'">
            <span>
              {{ record?.payment_method }}
            </span>
          </template>

          <template v-if="column.key === 'status'">
            <span>
              {{ record?.status }}
            </span>
          </template>
          <template v-if="column.key === 'extension_dates'">
            <span>
              {{ record?.extension_dates }}
            </span>
          </template>
          <template v-if="column.key === 'max_extensions'">
            <span>
              {{ record?.max_extensions }}
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script setup lang="ts">
const authStore = useAuthStore();
const dataOrder = ref({});
const current = ref(1);
useAsyncData(
  async () => {
    try {
      await authStore.getAllOrder({
        page: current.value,
        pageSize: 10,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // {
  //   immediate: true,
  //   watch: [page],
  // }
);
const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "order_code",
    key: "order_code",
  },
  {
    title: "Ngày đặt",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Ngày nhận",
    dataIndex: "expired_date",
    key: "expired_date",
  },
  {
    title: "Phương thức thanh toán",
    key: "payment_method",
    dataIndex: "payment_method",
  },
  {
    title: "Trạng thái đơn",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Gia hạn",
    dataIndex: "extension_dates",
    key: "extension_dates",
  },
  {
    title: "Số lần gia hạn",
    key: "max_extensions",
    dataIndex: "max_extensions",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];
</script>
