<template>
  <div class="space-y-5 pt-4">
    <div class="flex flex-col gap-2 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Thông tin chung</h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div class="flex flex-col">
        <div class="flex items-center text-base h-[90px] bg-white rounded-md">
          <div class="flex items-center text-sm font-medium w-full p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-03 text-tag-text-03"
            >
              <Icon icon="ion:business-outline" class="text-lg w-10 h-10" />
            </a-tag>
            <div class="flex-1 text-tag-text-03">
              <p class="font-semibold text-base">Doanh thu</p>
              <p class="font-bold text-2xl float-right">
                <Icon
                  v-if="dashboardStore.isLoading"
                  icon="svg-spinners:3-dots-scale"
                  class="text-3xl"
                />
                <span v-else>{{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(dashboardStore?.dashboardAdmin?.revenue)
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-base h-[90px] bg-white rounded-md">
          <div class="flex items-center text-sm font-medium w-full p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-04 text-tag-text-04"
            >
              <Icon icon="bi:box-arrow-in-down" class="text-lg w-10 h-10" />
            </a-tag>

            <div class="flex-1 text-tag-text-04">
              <p class="font-semibold text-base">Nhập hàng</p>
              <p class="font-bold text-2xl float-right">
                <Icon
                  v-if="dashboardStore.isLoading"
                  icon="svg-spinners:3-dots-scale"
                  class="text-3xl"
                />
                <span v-else>
                  {{
                    new Intl.NumberFormat().format(
                      dashboardStore?.dashboardAdmin?.invoiceEnter
                    )
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-base h-[90px] bg-white rounded-md">
          <div class="flex items-center text-sm font-medium w-full p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-01 text-tag-text-01"
            >
              <Icon icon="iconoir-user" class="text-lg w-10 h-10" />
            </a-tag>

            <div class="flex-1 text-tag-text-01">
              <p class="font-semibold text-base">Tổng khách hàng</p>
              <p class="font-bold text-2xl float-right">
                <Icon
                  v-if="dashboardStore.isLoading"
                  icon="svg-spinners:3-dots-scale"
                  class="text-3xl"
                />
                <span v-else>
                  {{
                    new Intl.NumberFormat().format(
                      dashboardStore?.dashboardAdmin?.user
                    )
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-base h-[90px] bg-white rounded-md">
          <div class="flex items-center text-sm w-full font-medium p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-03 text-tag-text-03"
            >
              <Icon
                icon="ph-user-circle-check-thin"
                class="text-lg w-10 h-10"
              />
            </a-tag>

            <div class="flex-1 text-tag-text-03">
              <p class="font-semibold text-base">Khách hàng đã kích hoạt</p>
              <p class="font-bold text-2xl float-right">
                <Icon
                  v-if="dashboardStore.isLoading"
                  icon="svg-spinners:3-dots-scale"
                  class="text-3xl"
                />
                <span v-else>
                  {{
                    new Intl.NumberFormat().format(
                      dashboardStore?.dashboardAdmin?.userActiveWallet
                    )
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-base h-[90px] bg-white rounded-md">
          <div class="flex items-center text-sm w-full font-medium p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-10 text-tag-text-10"
            >
              <Icon icon="streamline:shelf" class="text-lg w-10 h-10" />
            </a-tag>

            <div class="flex-1 text-tag-text-10">
              <p class="font-semibold text-base">Số lượng tủ sách</p>
              <p class="font-bold text-2xl float-right">
                <Icon
                  v-if="dashboardStore.isLoading"
                  icon="svg-spinners:3-dots-scale"
                  class="text-3xl"
                />
                <span v-else>
                  {{
                    new Intl.NumberFormat().format(
                      dashboardStore?.dashboardAdmin?.bookcase
                    )
                  }}</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-base h-[90px] bg-white rounded-md">
          <div class="flex items-center text-sm w-full font-medium p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-11 text-tag-text-11"
            >
              <Icon icon="bi-bookshelf" class="text-lg w-10 h-10" />
            </a-tag>

            <div class="flex-1 text-tag-text-11">
              <p class="font-semibold text-base">Số lượng kệ sách</p>
              <p class="font-bold text-2xl float-right">
                <Icon
                  v-if="dashboardStore.isLoading"
                  icon="svg-spinners:3-dots-scale"
                  class="text-3xl"
                />
                <span v-else>
                  {{
                    new Intl.NumberFormat().format(
                      dashboardStore?.dashboardAdmin?.shelve
                    )
                  }}</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-base h-[90px] bg-white rounded-md">
          <div class="flex items-center text-sm w-full font-medium p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-05 text-tag-text-05"
            >
              <Icon
                icon="solar:book-minimalistic-line-duotone"
                class="text-lg w-10 h-10"
              />
            </a-tag>

            <div class="flex-1 text-tag-text-05">
              <p class="font-semibold text-base">Số lượng sách</p>
              <p class="font-bold text-2xl float-right">
                <Icon
                  v-if="dashboardStore.isLoading"
                  icon="svg-spinners:3-dots-scale"
                  class="text-3xl"
                />
                <span v-else
                  >{{
                    new Intl.NumberFormat().format(
                      dashboardStore?.dashboardAdmin?.book
                    )
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-base h-[90px] bg-white rounded-md">
          <div class="flex items-center text-sm w-full font-medium p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-06 text-tag-text-06"
            >
              <Icon icon="hugeicons-quill-write-02" class="text-lg w-10 h-10" />
            </a-tag>

            <div class="flex-1 text-tag-text-06">
              <p class="font-semibold text-base">Số lượng bài viết</p>
              <p class="font-bold text-2xl float-right">
                <Icon
                  v-if="dashboardStore.isLoading"
                  icon="svg-spinners:3-dots-scale"
                  class="text-3xl"
                />
                <span v-else>
                  {{
                    new Intl.NumberFormat().format(
                      dashboardStore?.dashboardAdmin?.post
                    )
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5">
          <a-space class="flex" direction="vertical" :size="12">
            <a-range-picker v-model:value="value1" />
          </a-space>
          <HighchartHigh />
        </div>
    <div class="w-full min-h-[360px] bg-[white] rounded-lg p-5">
      <div class="flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <div class="w-1/4 md:block hidden">
            <div class="flex">
              <a-input
                placeholder="Nhập thông tin cá nhân"
                class="h-10"
                v-model:value="valueSearch"
              >
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
            </div>
          </div>
          <div>
            <a-button type="primary" size="large">Thêm đơn hàng</a-button>
          </div>
        </div>
        
        <div class="flex gap-4 text-white">
          <a-button
            :class="[
              'flex justify-center items-center gap-2 h-10 border-none shadow-none',
              filter === 'pending' ? 'bg-orange-500 !text-white' : '',
            ]"
            @click="handleCheckStatus('pending')"
          >
            <UIcon class="" name="i-nonicons-loading-16" />
            <span>Đang xử lý</span>
          </a-button>
          <a-button
            :class="[
              'flex justify-center items-center gap-2  h-10 border-none shadow-none',
              filter === 'out_of_date' ? 'bg-orange-500 !text-white' : '',
            ]"
            @click="handleCheckStatus('overdue')"
          >
            <UIcon name="i-ph-warning-light" />
            <span>Quá hạn</span>
          </a-button>
        </div>
        
        <div>
          <a-table
            :columns="columns"
            :data-source="orderStore?.getAllOrderAdmin?.orders"
            :loading="orderStore.isLoading"
            :pagination="false"
          >
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
                  <a-tag
                    :bordered="false"
                    v-if="record.status === 'pending'"
                    class="bg-tag-bg-01 text-tag-text-01"
                  >
                    Đang xử lý
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'approved'"
                    class="bg-tag-bg-02 text-tag-text-02"
                  >
                    Đã xác nhận
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'ready_for_pickup'"
                    class="bg-tag-bg-14 text-tag-text-14"
                  >
                    Đơn hàng sẵn sàng
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'preparing_shipment'"
                    class="bg-tag-bg-15 text-tag-text-15"
                  >
                    Chuẩn bị giao hàng
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'in_transit'"
                    class="bg-tag-bg-03 text-tag-text-03"
                  >
                    Đang giao
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'extended'"
                    class="bg-tag-bg-12 text-tag-text-12"
                  >
                    Gia hạn
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'active'"
                    class="bg-tag-bg-04 text-tag-text-04"
                  >
                    Đang thuê
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'returning'"
                    class="bg-tag-bg-13 text-tag-text-13"
                  >
                    Đang trả sách
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'completed'"
                    class="bg-tag-bg-05 text-tag-text-05"
                  >
                    Hoàn thành
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'canceled'"
                    class="bg-tag-bg-07 text-tag-text-07"
                  >
                    Đã hủy
                  </a-tag>
                  <a-tag
                    :bordered="false"
                    v-else-if="record.status === 'overdue'"
                    class="bg-tag-bg-06 text-tag-text-06"
                  >
                    Quá hạn
                  </a-tag>
                </span>
              </template>
              <temolate v-else-if="column.dataIndex === 'payment_method'">
                <div v-if="record.payment_method === 'cash'">
                  <span>Tiền mặt</span>
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
                        class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                      >
                        <div>
                          <Icon
                            icon="solar:eye-outline"
                            class="group-hover:text-[#212122]"
                          />
                        </div>
                      </button>
                    </a-tooltip>
                  </NuxtLink>
                  <a-dropdown :trigger="['click']" placement="bottom">
                    <button
                      class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                    >
                      <UIcon
                        class="group-hover:text-[#131313]"
                        name="i-solar-menu-dots-bold"
                      />
                    </button>
                    <template #overlay>
                      <a-menu>
                        <NuxtLink>
                          <a-menu-item key="2" class="p-4">
                            <button
                              class="flex items-center gap-1 text-blue-400"
                            >
                              <UIcon
                                class="group-hover:text-[green]"
                                name="i-material-symbols-edit-outline"
                              />
                              <span>Sửa</span>
                            </button>
                          </a-menu-item>
                        </NuxtLink>
                        <a-menu-item key="3" class="p-4">
                          <span>
                            <button
                              class="flex items-center gap-1 text-blue-400"
                            >
                              <UIcon
                                class="group-hover:text-[red] text-lg"
                                name="i-material-symbols-delete-outline"
                              />
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
            <a-pagination
              v-model:current="current"
              :total="orderStore?.getAllOrderAdmin?.totalResults"
              :pageSize="orderStore?.getAllOrderAdmin?.pageSize"
              show-less-items
            />
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white w-full shadow-md rounded-md space-y-2 p-5">
        <div class="text-xl font-semibold">Sách được thuê nhiều</div>
        <div class="max-h-[400px] overflow-auto pr-4">
          <DashboardBook
            v-for="book in dashboardStore.dashboardBook"
            :key="book.id"
            :dashboard="book"
          />
        </div>
      </div>

      <div class="bg-white w-full shadow-md rounded-md space-y-2 p-5">
        <div class="text-xl font-semibold space-y-2">Hóa đơn nhập hàng</div>
        <div class="max-h-[400px] overflow-auto pr-4">
          <NuxtLink to="/admin/manager-bill/">
            <DashboardBill
              v-for="bill in dashboardStore.dashboardInvoice"
              :key="bill.id"
              :dashboard="bill"
            />
          </NuxtLink>
        </div>
      </div>

      <div class="bg-white w-full shadow-md rounded-md space-y-2 p-5">
        <div class="flex justify-between items-end font-semibold">
          <div class="text-xl">Lịch sử giao dịch gần đây</div>
          <NuxtLink to="/admin/history-transaction">
            <div class="underline text-sm cursor-pointer hover:text-orange-400">
              Xem tất cả
            </div>
          </NuxtLink>
        </div>
        <div class="max-h-[400px] overflow-auto pr-4">
          <TransactionHistory
            v-for="history in transactionAdminStore.transactionAdmin
              .transactions"
            :key="history.id"
            :transactions="history"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
const dashboardStore = useDashboardStore();
const orderStore = useOrderStore();
const transactionAdminStore = useTransactionAdminStore();
const filter = ref("pending");
const valueSearch = ref("");
useAsyncData(
  async () => {
    await orderStore.getAllOrder({
      status: filter.value,
      search: valueSearch.value,
    });
  },
  {
    immediate: true,
    watch: [filter, valueSearch],
  }
);
useAsyncData(async () => {
  await dashboardStore.getAllDashboard();
});

useAsyncData(async () => {
  await dashboardStore.getBookDashboard();
});

useAsyncData(async () => {
  await dashboardStore.getInvoiceDashboard();
});
useAsyncData(async () => {
  await transactionAdminStore.getAllTransaction({
    sort: "inMonth",
  });
});
const handleCheckStatus = (status) => {
  filter.value = status;
  console.log(status);
};

const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "order_code",
    key: "order_code",
    width: 120,
  },
  {
    title: "Thông tin cá nhân",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Nơi nhận hàng",
    dataIndex: "address",
    key: "address",
    width: 200,
  },
  {
    title: "Ngày thuê",
    dataIndex: "receipt_date",
    key: "receipt_date",
    width: 120,
  },
  {
    title: "Số lượng sách",
    dataIndex: "order_details",
    key: "order_details",
  },
  {
    title: "Phương thức thanh toán",
    dataIndex: "payment_method",
    key: "payment_method",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
  },
];
</script>
