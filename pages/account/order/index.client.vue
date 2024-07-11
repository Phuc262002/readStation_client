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
          :class="[
            'flex items-center gap-2 h-10 rounded-lg border-none shadow-none',
            filter === null ? 'bg-orange-500 !text-white' : '',
          ]"
          @click="handleCheckStatus(null)"
        >
          <img src="../../../assets/images/icon-blog.svg" alt="" />
          <span>Tất cả đơn hàng</span>
        </a-button>
        <a-button
          :class="[
            'flex items-center gap-2 h-10 rounded-lg border-none shadow-none',
            filter === 'pending' ? 'bg-orange-500 !text-white' : '',
          ]"
          @click="handleCheckStatus('pending')"
        >
          <img src="../../../assets/images/icon-shipping.svg" alt="" />
          <span>Chờ xử lý</span>
        </a-button>
        <a-button
          :class="[
            'flex items-center gap-2 h-10 rounded-lg border-none shadow-none',
            filter === 'active' ? 'bg-orange-500 !text-white' : '',
          ]"
          @click="handleCheckStatus('active')"
        >
          <img src="../../../assets/images/icon-rent.svg" alt="" />
          <span>Đang thuê</span>
        </a-button>
        <a-button
          :class="[
            'flex items-center gap-2 h-10 rounded-lg border-none shadow-none',
            filter === 'completed' ? 'bg-orange-500 !text-white' : '',
          ]"
          @click="handleCheckStatus('completed')"
        >
          <img src="../../../assets/images/icon-return.svg" alt="" />
          <span>Đã giao</span>
        </a-button>
        <a-button
          :class="[
            'flex items-center gap-2 h-10 rounded-lg border-none shadow-none',
            filter === 'canceled' ? 'bg-orange-500 !text-white' : '',
          ]"
          @click="handleCheckStatus('canceled')"
        >
          <img src="../../../assets/images/icon-cancel.svg" alt="" />
          <span>Đã hủy</span>
        </a-button>
      </div>
      <!--  -->
      <a-table
        :columns="columns"
        :data-source="orderStore?.orders?.orders"
        :pagination="false"
      >
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
              {{ $dayjs(record?.created_at).format("DD/MM/YYYY") }}
            </span>
          </template>
          <template v-if="column.key === 'expired_date'">
            <span>
              {{ $dayjs(record?.expired_date).format("DD/MM/YYYY") }}
            </span>
          </template>

          <!--  -->
          <template v-if="column.key === 'payment_method'">
            <span
              class="flex justify-center"
              v-if="record?.payment_method === 'online'"
            >
              Chuyển khoản
            </span>
            <span
              class="flex justify-center"
              v-else-if="record?.payment_method === 'cash'"
            >
              Tiền mặt
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'status'">
            <span class="flex justify-center">
              <a-tag
                v-if="record?.status === 'wating_payment'"
                class="text-tag-text-01 bg-tag-bg-01 border-none py-1 px-3 rounded-lg"
              >
                Chờ thanh toán
              </a-tag>
              <a-tag
                v-if="record?.status === 'pending'"
                class="text-tag-text-01 bg-tag-bg-01 border-none py-1 px-3 rounded-lg"
              >
                Đang xử lý
              </a-tag>
              <a-tag
                v-else-if="record?.status === 'approved'"
                class="text-tag-text-02 bg-tag-bg-02 border-none py-1 px-3 rounded-lg"
              >
                Đã xác nhận
              </a-tag>
              <a-tag
                v-else-if="
                  orderStore?.order?.status === 'ready_for_pickup' &&
                  orderStore?.order?.delivery_method === 'pickup'
                "
                class="text-tag-text-14 bg-tag-bg-14 border-none py-1 px-3 rounded-lg"
              >
                Đơn hàng sẵn sàng
              </a-tag>
              <a-tag
                v-else-if="
                  orderStore?.order?.status === 'preparing_shipment' &&
                  orderStore?.order?.delivery_method === 'shipper'
                "
                class="text-tag-text-15 bg-tag-bg-15 border-none py-1 px-3 rounded-lg"
              >
                Chờ giao hàng
              </a-tag>
              <a-tag
                v-else-if="record?.status === 'in_transit'"
                class="text-tag-text-03 bg-tag-bg-03 border-none py-1 px-3 rounded-lg"
              >
                Đang giao
              </a-tag>
              <a-tag
                v-else-if="record?.status === 'extended'"
                class="text-tag-text-06 bg-tag-bg-06 border-none py-1 px-3 rounded-lg"
              >
                Quá hạn
              </a-tag>
              <a-tag
                v-else-if="record?.status === 'active'"
                class="text-tag-text-04 bg-tag-bg-04 border-none py-1 px-3 rounded-lg"
              >
                Đang thuê
              </a-tag>
              <a-tag
                v-else-if="record?.status === 'returning'"
                class="text-tag-text-13 bg-tag-bg-13 border-none py-1 px-3 rounded-lg"
              >
                Đang gia hạn
              </a-tag>
              <a-tag
                v-else-if="record?.status === 'completed'"
                class="text-tag-text-05 bg-tag-bg-05 border-none py-1 px-3 rounded-lg"
              >
                Hoàn thành
              </a-tag>
              <a-tag
                v-else-if="record?.status === 'canceled'"
                class="text-tag-text-07 bg-tag-bg-07 border-none py-1 px-3 rounded-lg"
              >
                Từ chối
              </a-tag>
              <a-tag
                v-else-if="record?.status === 'overdue'"
                class="text-tag-text-06 bg-tag-bg-06 border-none py-1 px-3 rounded-lg"
              >
                Quá hạn
              </a-tag>
            </span>
          </template>
          <template v-if="column.key === 'extension_dates'">
            <span class="flex justify-center">
              {{ record?.extension_dates }}
            </span>
          </template>
          <template v-if="column.key === 'total_deposit_fee'">
            <span class="flex justify-center">
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(record?.total_deposit_fee)
              }}
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'max_extensions'">
            <span class="flex justify-center">
              {{ record?.current_extensions }} / {{ record?.max_extensions }}
            </span>
          </template>
          <template v-if="column.key === 'action'">
            <div class="flex gap-2">
              <NuxtLink :to="`/account/order/${record.id}`">
                <a-tooltip placement="top">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    class="bg-rtgray-50 p-2 rounded-lg flex items-center justify-center"
                  >
                    <UIcon
                      class="group-hover:text-black"
                      name="i-icon-park-outline-eyes"
                    />
                  </button>
                </a-tooltip>
              </NuxtLink>

              <a-tooltip placement="top">
                <template #title>
                  <span>Hủy</span>
                </template>
                <button
                  @click="showCancelConfirm(record.id)"
                  v-if="
                    record.status === 'pending' ||
                    record.status === 'wating_payment'
                  "
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
      <div class="mt-4 flex justify-between items-center">
        <span class="text-sm text-orange-600">
          Lưu ý: Tiền cọc thuê sách sẽ được hoàn trả 100% nếu không có phụ phí
          phát sinh</span
        >
        <a-pagination
          v-model:current="current"
          :total="orderStore?.orders?.totalResults"
          :pageSize="orderStore?.orders?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const orderStore = useOrderClientStore();
const current = ref(1);
const filter = ref(null);
const onCancelOrder = async (id: any) => {
  await orderStore.cancelOrder(id);
  getDataOrder();
};
const showCancelConfirm = (id: any) => {
  Modal.confirm({
    title: "Bạn đang muốn hủy đơn hàng?",
    content: "Sau khi hủy sẽ không khôi phục lại",
    okText: "Đồng ý",
    okType: "danger",
    cancelText: "Hủy",
    onOk() {
      onCancelOrder(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
// Get All Order
const getDataOrder = async () => {
  try {
    await orderStore.getAllOrder({
      page: current.value,
      status: filter.value,
    });
  } catch (error) {
    console.error(error);
  }
};
useAsyncData(
  async () => {
    await getDataOrder();
  },
  {
    immediate: true,
    watch: [current, filter],
  }
);

// handle check Status Order
const handleCheckStatus = (status) => {
  filter.value = status;
};

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
    title: "Tiền cọc thuê sách",
    dataIndex: "total_deposit_fee",
    key: "total_deposit_fee",
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
