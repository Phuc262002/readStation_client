<template>
  <div class="space-y-5 pt-4">
    <div class="flex flex-col gap-2 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Thông tin chung</h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="md:col-span-1">
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col">
            <div
              class="flex items-center text-base bg-white shadow-md rounded-md"
            >
              <div class="flex items-center gap-5 text-sm font-medium p-4">
                <UIcon
                  class="text-lg w-10 bg-tag-bg-06 text-tag-bg-06"
                  name="i-material-symbols-edit-outline"
                />
                <div>
                  <p class="">Doanh thu</p>
                  <p>100.100</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="flex items-center text-base bg-white shadow-md rounded-md"
            >
              <div class="flex items-center gap-5 text-sm font-medium p-4">
                <UIcon
                  class="text-lg w-10 bg-tag-bg-06 text-tag-bg-06"
                  name="i-material-symbols-edit-outline"
                />
                <div>
                  <p class="">Nhập hàng</p>
                  <p>2 đơn hàng</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="flex items-center text-base bg-white shadow-md rounded-md"
            >
              <div class="flex items-center gap-5 text-sm font-medium p-4">
                <UIcon
                  class="text-lg w-10 bg-tag-bg-06 text-tag-bg-06"
                  name="i-material-symbols-edit-outline"
                />
                <div>
                  <p class="">Doanh thu</p>
                  <p>100.100</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="flex items-center text-base bg-white shadow-md rounded-md"
            >
              <div class="flex items-center gap-5 text-sm font-medium p-4">
                <UIcon
                  class="text-lg w-10 bg-tag-bg-06 text-tag-bg-06"
                  name="i-material-symbols-edit-outline"
                />
                <div>
                  <p class="">Doanh thu</p>
                  <p>100.100</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="flex items-center text-base bg-white shadow-md rounded-md"
            >
              <div class="flex items-center gap-5 text-sm font-medium p-4">
                <UIcon
                  class="text-lg w-10 bg-tag-bg-06 text-tag-bg-06"
                  name="i-material-symbols-edit-outline"
                />
                <div>
                  <p class="">Doanh thu</p>
                  <p>100.100</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="flex items-center text-base bg-white shadow-md rounded-md"
            >
              <div class="flex items-center gap-5 text-sm font-medium p-4">
                <UIcon
                  class="text-lg w-10 bg-tag-bg-06 text-tag-bg-06"
                  name="i-material-symbols-edit-outline"
                />
                <div>
                  <p class="">Doanh thu</p>
                  <p>100.100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-2">
        <div class="bg-white p-4">2313213</div>
      </div>
    </div>
    <div class="w-full min-h-[360px] bg-[white] rounded-lg p-5 shadow-md">
      <div class="flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <div class="relative w-1/4 md:block hidden">
            <div class="flex">
              <a-input placeholder="Nhập mã kệ để tìm kiếm" class="h-10">
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
            </div>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <UIcon class="text-gray-500" name="i-material-symbols-search" />
            </div>
          </div>
          <div>
            <a-button type="primary" size="large">Thêm đơn hàng</a-button>
          </div>
        </div>
        <div>
          <a-table :columns="columns" :data-source="data">
            <template #bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'user'">
                <a>{{ record.user }}</a>
              </template>
              <template v-if="column.dataIndex === 'status'">
                <span>
                  <a-tag>
                    {{ record.status }}
                  </a-tag>
                </span>
              </template>
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
                          <UIcon
                            class="group-hover:text-[#212122]"
                            name="i-icon-park-outline-eyes"
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
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white w-full shadow-md rounded-md space-y-2 p-5">
        <div class="text-xl font-semibold">Sách được thuê nhiều</div>
        <div class="flex justify-between">
          <div class="flex justify-center">
            <img
              class="w-20 h-20 object-cover rounded-md"
              src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244875805.jpg"
              alt=""
            />
            <div class="items-start">
              <p>Cho tôi xin một vé đi tuổi thơ</p>
              <p>4.8</p>
            </div>
          </div>
          <p class="flex items-start">200 lượt thuê</p>
        </div>
      </div>

      <div class="bg-white w-full shadow-md rounded-md space-y-2 p-5">
        <div class="text-xl font-semibold">Bài viết nổi bật</div>
        <div class="flex justify-between">
          <div class="flex justify-center">
            <img
              class="w-20 h-20 object-cover rounded-md"
              src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244875805.jpg"
              alt=""
            />
            <p class="flex items-start">
              Hành Trình Đầy Nước Mắt: 'Một Lít Nước Mắt
            </p>
          </div>
          <p class="flex items-start">200 lượt thuê</p>
        </div>
      </div>
      <div class="bg-white w-full shadow-md rounded-md space-y-2 p-5">
        <div class="text-xl font-semibold">Hóa đơn nhập hàng</div>
        <div class="space-y-2">
          <div class="flex justify-between shadow-sm">
            <p>#TW15090251</p>
            <p>Đã thanh toán</p>
          </div>
          <div class="flex justify-center items-center gap-1 text-sm">
            <p>Người nhận: An Khương</p>
            <p>Tổng tiền: 1.500.000đ</p>
            <p>10/05/2034</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
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
    dataIndex: "quantity",
    key: "quantity",
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
const data = [
  {
    id: 1,
    order_code: "33BSA2f8",
    user: "John Brown",
    address: "161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM",
    receipt_date: "2021-09-01",
    quantity: 2,
    payment_method: "Thanh toán khi nhận hàng",
    status: "Đang xử lý",
  },
  {
    id: 2,
    order_code: "33BSA2f8",
    user: "John Brown",
    address: "161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM",
    receipt_date: "2021-09-01",
    quantity: 2,
    payment_method: "Thanh toán khi nhận hàng",
    status: "Đang thuê",
  },
  {
    id: 3,
    order_code: "33BSA2f8",
    user: "John Brown",
    address: "161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM",
    receipt_date: "2021-09-01",
    quantity: 2,
    payment_method: "Thanh toán khi nhận hàng",
    status: "Đã hủy",
  },
  {
    id: 4,
    order_code: "33BSA2f8",
    user: "John Brown",
    address: "161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM",
    receipt_date: "2021-09-01",
    quantity: 2,
    payment_method: "Thanh toán khi nhận hàng",
    status: "Hoàn thành",
  },
  {
    id: 5,
    order_code: "33BSA2f8",
    user: "John Brown",
    address: "161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM",
    receipt_date: "2021-09-01",
    quantity: 2,
    payment_method: "Thanh toán khi nhận hàng",
    status: "Đã xác nhận",
  },
  {
    id: 6,
    order_code: "33BSA2f8",
    user: "John Brown",
    address: "161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM",
    receipt_date: "2021-09-01",
    quantity: 2,
    payment_method: "Thanh toán khi nhận hàng",
    status: "Đang giao",
  },
  {
    id: 7,
    order_code: "33BSA2f8",
    user: "John Brown",
    address: "161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM",
    receipt_date: "2021-09-01",
    quantity: 2,
    payment_method: "Thanh toán khi nhận hàng",
    status: "Quá hạn",
  },
];
</script>
