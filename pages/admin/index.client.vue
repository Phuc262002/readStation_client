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
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-03 text-tag-text-03">
              <UIcon class="text-lg w-10 h-10" name="i-grommet-icons-cubes"
            /></a-tag>

            <div class="text-tag-text-03">
              <p class="font-normal text-base">Doanh thu</p>
              <p class="font-bold text-xl">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(dashboardStore?.dashboardAdmin?.revenue)
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-04 text-tag-text-04">
              <UIcon class="text-lg w-10 h-10" name="i-bi-box-arrow-in-down"
            /></a-tag>

            <div class="text-tag-text-04">
              <p class="font-normal text-base">Nhập hàng</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.invoiceEnter }} đơn hàng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-01 text-tag-text-01">
              <UIcon class="text-lg w-10 h-10" name="i-iconoir-user"
            /></a-tag>

            <div class="text-tag-text-01">
              <p class="font-normal text-base">Tổng khách hàng</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.user }} khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-03 text-tag-text-03">
              <UIcon
                class="text-lg w-10 h-10"
                name="i-ph-user-circle-check-thin"
            /></a-tag>

            <div class="text-tag-text-03">
              <p class="font-normal text-base">Khách hàng đã kích hoạt</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.user }} khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-10 text-tag-text-10">
              <UIcon class="text-lg w-10 h-10" name="i-bi-bookshelf"
            /></a-tag>

            <div class="text-tag-text-10">
              <p class="font-normal text-base">Số lượng tủ sách</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.bookcase }} tủ sách
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-11 text-tag-text-11">
              <UIcon
                class="text-lg w-10 h-10"
                name="i-material-symbols-light-book-4-outline"
            /></a-tag>

            <div class="text-tag-text-11">
              <p class="font-normal text-base">Số lượng kệ sách</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.shelve }} kệ sách
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-05 text-tag-text-05">
              <UIcon class="text-lg w-10 h-10" name="i-ion-book-outline"
            /></a-tag>

            <div class="text-tag-text-05">
              <p class="font-normal text-base">Số lượng sách</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.book }} sách
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-06 text-tag-text-06">
              <UIcon
                class="text-lg w-10 h-10"
                name="i-hugeicons-quill-write-02"
            /></a-tag>

            <div class="text-tag-text-06">
              <p class="font-normal text-base">Số lượng bài viết</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.post }} bài viết
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="w-full min-h-[360px] bg-[white] rounded-lg p-5">
      <div class="flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <div class="w-1/4 md:block hidden">
            <div class="flex">
              <a-input placeholder="Nhập mã kệ để tìm kiếm" class="h-10">
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
            @click="handleCheckStatus('out_of_date')"
          >
            <UIcon name="i-ph-warning-light" />
            <span>Quá hạn</span>
          </a-button>
        </div>
        <div>
          <a-table
            :columns="columns"
            :data-source="orderStore?.getAllOrderAdmin?.orders"
            :isLoading="orderStore.isLoading"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'user'">
                <div class="flex justify-start gap-2">
                  <div>
                    <a-avatar :src="record.user.avatar" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <span>{{ record.user.fullname }}</span>
                    <span>{{ record.user.phone }}</span>
                  </div>
                </div>
              </template>
              <template v-else-if="column.dataIndex === 'order_details'">
                <span>{{ record.order_details.length }} quyển</span>
              </template>
              <template v-else-if="column.dataIndex === 'receipt_date'">
                <span>{{
                  $dayjs(record.receipt_date).format("DD/MM/YYYY")
                }}</span>
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
                    v-else-if="record.status === 'out_of_date'"
                    class="bg-tag-bg-06 text-tag-text-06"
                  >
                    Quá hạn
                  </a-tag>
                </span>
              </template>
              <template v-else-if="column.key === 'action'">
                <div class="flex text-[16px] gap-4">
                  <NuxtLink
                    class="hover:text-black"
                    :to="`/admin/product-manager/${record.id}`"
                  >
                    <a-tooltip placement="top" color="black">
                      <template #title>
                        <span>Xem chi tiết</span>
                      </template>
                      <button
                        class="hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                      >
                        <div class="flex items-center">
                          <UIcon name="i-icon-park-outline-eyes" />
                        </div>
                      </button>
                    </a-tooltip>
                  </NuxtLink>

                  <a-dropdown :trigger="['click']" placement="bottom">
                    <button
                      class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                    >
                      <UIcon class="text-lg" name="i-solar-menu-dots-bold" />
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
        </div>
      </div>
    </div> -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <DashboardBill
            v-for="bill in dashboardStore.dashboardInvoice"
            :key="bill.id"
            :dashboard="bill"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const dashboardStore = useDashboardStore();
const orderStore = useOrderStore();
const filter = ref("pending");
useAsyncData(
  async () => {
    await orderStore.getAllOrder({
      status: filter.value,
    });
  },
  {
    immediate: true,
    watch: filter,
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
