<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-xl text-[#1e293b] font-semibold pb-3">
      Quản lý đơn hàng
    </h1>
    <div class="grid gird-row-2 w-full gap-5">
      <div class="grid grid-cols-4 gap-4">
        <div class="w-full bg-[white] rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-7">
              <button class=" bg-[#fff2ea] w-14 h-14 rounded-lg flex items-center justify-center">
                <UIcon name="i-tabler-packages" class="text-4xl text-orange-500" />
              </button>
              <h1 class="text-base text-orange-500">Tổng đơn</h1>
            </div>
            <h1 class="text-base text-orange-500 font-bold">{{ orderStore?.statistic?.orders }}</h1>
          </div>
        </div>
        <div class="w-full bg-[white] rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-7">
              <button class="bg-[#F5E9F7] w-14 h-14 rounded-lg flex items-center justify-center">
                <UIcon name="i-ph-book-open" class="text-4xl text-[#9C27B0]" />
              </button>
              <h1 class="text-base text-[#9C27B0]">Đang thuê</h1>
            </div>
            <h1 class="text-base text-[#9C27B0] font-bold">{{ orderStore?.statistic?.ordersHiring }}</h1>
          </div>
        </div>
        <div class="w-full bg-[white] rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-7">
              <button class="bg-[#E5F4F3] w-14 h-14 rounded-lg flex items-center justify-center">
                <UIcon name="i-material-symbols-light-check-circle-outline" class="text-4xl text-[#009688]" />
              </button>
              <h1 class="text-base text-[#009688]">Hoàn thành</h1>
            </div>
            <h1 class="text-base text-[#009688] font-bold">{{ orderStore?.statistic?.ordersCompleted }}</h1>
          </div>
        </div>
        <div class="w-full bg-[white] rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-7">
              <button class="bg-[#FEECEB] w-14 h-14 rounded-lg flex justify-center items-center">
                <UIcon name="i-ph-warning-light" class="text-4xl text-[#F44336]" />
              </button>
              <h1 class="text-base text-[#F44336]">Quá hạn</h1>
            </div>
            <h1 class="text-base text-[#F44336] font-bold">{{ orderStore?.statistic?.ordersOutOfDate }}</h1>
          </div>
        </div>
        <div class="w-full bg-[white] rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-7">
              <button class="bg-[#FFFBE5] w-14 h-14 rounded-lg flex justify-center items-center">
                <UIcon name="i-ep-loading" class="text-4xl text-[#FFD700]" />
              </button>
              <h1 class="text-base text-[#FFD700]">Đang xử lý</h1>
            </div>
            <h1 class="text-base text-[#FFD700] font-bold">{{ orderStore?.statistic?.ordersPending }}</h1>
          </div>
        </div>
        <div class="w-full bg-[white] rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-7">
              <button class="bg-[#E9F4FE] w-14 h-14 rounded-lg flex justify-center items-center">
                <UIcon name="i-clarity-shield-check-line" class="text-4xl text-[#2196F3]" />
              </button>
              <h1 class="text-base text-[#2196F3]">Đã xác nhận</h1>
            </div>
            <h1 class="text-base text-[#2196F3] font-bold">{{ orderStore?.statistic?.ordersApproved }}</h1>
          </div>
        </div>
        <div class="w-full bg-[white] rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-7">
              <button class="bg-[#FFF8ED] w-14 h-14 rounded-lg flex justify-center items-center">
                <UIcon name="i-hugeicons-shipping-truck-02" class="text-4xl text-[#FFB74D]" />
              </button>
              <h1 class="text-base text-[#FFB74D]">Đang giao</h1>
            </div>
            <h1 class="text-base text-[#FFB74D] font-bold">{{ orderStore?.statistic?.ordersWatingTakeBook }}</h1>
          </div>
        </div>
        <div class="w-full bg-[white] rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-7">
              <button class="bg-[#F5F5F5] w-14 h-14 rounded-lg flex justify-center items-center">
                <UIcon name="i-hugeicons-cancel-circle" class="text-4xl text-[#9E9E9E]" />
              </button>
              <h1 class="text-base text-[#9E9E9E]">Đã hủy</h1>
            </div>
            <h1 class="text-base text-[#9E9E9E] font-bold">{{ orderStore?.statistic?.ordersCanceled }}</h1>
          </div>
        </div>
      </div>
      <div class="w-full min-h-[360px] bg-[white] rounded-lg p-5">
        <div class="flex flex-col gap-5">
          <div class="flex justify-between items-center">
            <div class="w-1/2 flex items-center gap-2">
              <div class="relative w-2/3 md:block hidden">
                <div class="flex">
                  <a-input placeholder="Nhập thông tin cá nhân" class="h-10" v-model:value="valueSearch"  allow-clear>
                    <template #prefix>
                      <SearchOutlined />
                    </template>
                  </a-input>
                </div>
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UIcon class="text-gray-500" name="i-material-symbols-search" />
                </div>
              </div>

                <a-dropdown :trigger="['click']">
                  <template #overlay>
                    <a-menu>
                      <a-menu-item @click="statusValue({ value: '', label: 'Tất cả' })">Tất cả</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'pending', label: 'Đang xử lý' })">Đang xử
                        lý</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'approved', label: 'Đã xác nhận' })">Đã xác
                        nhận</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'ready_for_pickup', label: 'Đơn hàng sẵn sàn' })">Đơn hàng
                        sẵn sàng</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'preparing_shipment', label: 'Chuẩn bị giao hàng' })">Chuẩn
                        bị giao hàng</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'in_transit', label: 'Đang giao' })">Đang
                        giao</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'extended', label: 'Gia hạn' })">Gia hạn</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'active', label: 'Đang thuê' })">Đang thuê</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'returning', label: ' Đang trả sách' })">Đang trả
                        sách</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'completed', label: 'Hoàn thành' })">Hoàn
                        thành</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'canceled', label: 'Đã hủy' })">Đã hủy</a-menu-item>
                      <a-menu-item @click="statusValue({ value: 'overdue', label: 'Quá hạn' })">Quá hạn</a-menu-item>
                    </a-menu>
                  </template>
                  <a-button size="large" class="flex gap-3 items-center">
                    {{ queryStatus.label ? queryStatus.label : "Tất cả" }}
                    <DownOutlined />
                  </a-button>
                </a-dropdown>
            </div>
            <div>
              <a-button type="primary" size="large">Thêm đơn hàng</a-button>
            </div>
          </div>
          <div>
            <a-table :columns="columns" :data-source="orderStore?.getAllOrderAdmin?.orders"
              :loading="orderStore.isLoading" :pagination="false">
              <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'user'">
                  <div class="flex justify-start gap-2">
                    <div>
                      <a-avatar :src="record.user.avatar" />
                    </div>
                    <div class="flex flex-col gap-1">
                      <span>{{ record.user.fullname }}</span>
                    </div>
                  </div>
                </template>
                <template v-else-if="column.dataIndex === 'order_details'">
                  <span>{{ record.loan_order_details.length }} quyển</span>
                </template>
                <template v-else-if="column.dataIndex === 'receipt_date'">
                  <span>{{ $dayjs(record.loan_date).format("DD/MM/YYYY") }}</span>
                </template>
                <template v-if="column.dataIndex === 'status'">
                  <span>
                    <a-tag :bordered="false" v-if="record.status === 'pending'" class="bg-tag-bg-01 text-tag-text-01">
                      Đang xử lý
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'approved'"
                      class="bg-tag-bg-02 text-tag-text-02">
                      Đã xác nhận
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'ready_for_pickup'"
                      class="bg-tag-bg-14 text-tag-text-14">
                      Đơn hàng sẵn sàng
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'preparing_shipment'"
                      class="bg-tag-bg-15 text-tag-text-15">
                      Chuẩn bị giao hàng
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'in_transit'"
                      class="bg-tag-bg-03 text-tag-text-03">
                      Đang giao
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'extended'"
                      class="bg-tag-bg-12 text-tag-text-12">
                      Gia hạn
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'active'"
                      class="bg-tag-bg-04 text-tag-text-04">
                      Đang thuê
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'returning'"
                      class="bg-tag-bg-13 text-tag-text-13">
                      Đang trả sách
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'completed'"
                      class="bg-tag-bg-05 text-tag-text-05">
                      Hoàn thành
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'canceled'"
                      class="bg-tag-bg-07 text-tag-text-07">
                      Đã hủy
                    </a-tag>
                    <a-tag :bordered="false" v-else-if="record.status === 'overdue'"
                      class="bg-tag-bg-06 text-tag-text-06">
                      Quá hạn
                    </a-tag>
                  </span>
                </template>
                <temolate v-else-if="column.dataIndex === 'payment_method'">
                  <div v-if="record.payment_method === 'cash'">
                    <span>Tiền mặt</span>
                  </div>
                  <div v-else-if="record.payment_method === 'online'">
                    <span>Chuyển khoản</span>
                  </div>
                </temolate>
                <template v-else-if="column.key === 'action'">
                  <div class="flex text-[16px] gap-4">
                    <NuxtLink :to="`/admin/product-manager/${record.id}`">
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
                    <a-dropdown :trigger="['click']" placement="bottom">
                      <button
                        class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                        <UIcon class="group-hover:text-[#131313]" name="i-solar-menu-dots-bold" />
                      </button>
                      <template #overlay>
                        <a-menu>
                          <NuxtLink>
                            <a-menu-item key="2" class="p-4">
                              <button class="flex items-center gap-1 text-blue-400">
                                <UIcon class="group-hover:text-[green]" name="i-material-symbols-edit-outline" />
                                <span>Sửa</span>
                              </button>
                            </a-menu-item>
                          </NuxtLink>
                          <a-menu-item key="3" class="p-4">
                            <span>
                              <button class="flex items-center gap-1 text-blue-400">
                                <UIcon class="group-hover:text-[red] text-lg"
                                  name="i-material-symbols-delete-outline" />
                                <span>Xóa</span>
                              </button>
                            </span>
                          </a-menu-item>
                        </a-menu>
                      </template>
                    </a-dropdown>
                  </div>
                </template>
              </template>
            </a-table>
            <div class="mt-4 flex justify-end">
              <a-pagination v-model:current="current" :total="orderStore?.getAllOrderAdmin?.totalResults"
                :pageSize="orderStore?.getAllOrderAdmin?.pageSize" show-less-items />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
const orderStore = useOrderStore();
const current = ref(1);
const valueSearch = ref('');
const queryStatus = ref({
  value: "",
  label: "",
});
const statusValue = ({ value, label }) => {
  queryStatus.value.value = value;
  queryStatus.value.label = label;
}
useAsyncData(async () => {
  try {
    await orderStore.getAllOrder({
      page: current.value,
      search: valueSearch.value,
      status: queryStatus.value.value,
    });
  } catch (error) {

  }

}, {
  immediate: true,
  watch: [current, valueSearch, queryStatus.value],
});
useAsyncData(async () => {
  await orderStore.statisticOrder();
});
const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'order_code',
    key: 'order_code',
    width: 120
  },
  {
    title: 'Thông tin cá nhân',
    dataIndex: 'user',
    key: 'user',
    width: 270
  },
  {
    title: 'Ngày thuê',
    dataIndex: 'receipt_date',
    key: 'receipt_date',
    width: 120

  },
  {
    title: 'Số lượng sách',
    dataIndex: 'order_details',
    key: 'order_details',
  },
  {
    title: 'Phương thức thanh toán',
    dataIndex: 'payment_method',
    key: 'payment_method',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
  }
];

// const data = [
//   {
//     id: 1,
//     order_code: '33BSA2f8',
//     user: 'John Brown',
//     address: '161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM',
//     receipt_date: '2021-09-01',
//     quantity: 2,
//     payment_method: 'Thanh toán khi nhận hàng',
//     status: 'Đang xử lý',
//   },
//   {
//     id: 2,
//     order_code: '33BSA2f8',
//     user: 'John Brown',
//     address: '161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM',
//     receipt_date: '2021-09-01',
//     quantity: 2,
//     payment_method: 'Thanh toán khi nhận hàng',
//     status: 'Đang thuê',
//   },
//   {
//     id: 3,
//     order_code: '33BSA2f8',
//     user: 'John Brown',
//     address: '161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM',
//     receipt_date: '2021-09-01',
//     quantity: 2,
//     payment_method: 'Thanh toán khi nhận hàng',
//     status: 'Đã hủy',
//   },
//   {
//     id: 4,
//     order_code: '33BSA2f8',
//     user: 'John Brown',
//     address: '161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM',
//     receipt_date: '2021-09-01',
//     quantity: 2,
//     payment_method: 'Thanh toán khi nhận hàng',
//     status: 'Hoàn thành',
//   },
//   {
//     id: 5,
//     order_code: '33BSA2f8',
//     user: 'John Brown',
//     address: '161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM',
//     receipt_date: '2021-09-01',
//     quantity: 2,
//     payment_method: 'Thanh toán khi nhận hàng',
//     status: 'Đã xác nhận',
//   },
//   {
//     id: 6,
//     order_code: '33BSA2f8',
//     user: 'John Brown',
//     address: '161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM',
//     receipt_date: '2021-09-01',
//     quantity: 2,
//     payment_method: 'Thanh toán khi nhận hàng',
//     status: 'Đang giao',
//   },
//   {
//     id: 7,
//     order_code: '33BSA2f8',
//     user: 'John Brown',
//     address: '161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM',
//     receipt_date: '2021-09-01',
//     quantity: 2,
//     payment_method: 'Thanh toán khi nhận hàng',
//     status: 'Quá hạn',
//   },
// ];
</script>