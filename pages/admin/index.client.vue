<template>
  <div class="space-y-5 pt-4">
    <div class="flex flex-col gap-2 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Thông tin chung</h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="grid grid-cols-4 gap-4">
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
              <p class="font-bold text-xl">100.100 đ</p>
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
              <p class="font-bold text-xl">2 đơn hàng</p>
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
              <p class="font-bold text-xl">1000 khách hàng</p>
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
              <p class="font-bold text-xl">500 khách hàng </p>
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
              <p class="font-bold text-xl">30 tủ sách</p>
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
              <p class="font-bold text-xl">80 kệ sách</p>
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
              <p class="font-bold text-xl">3000 sách</p>
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
              <p class="font-bold text-xl">20 bài viết</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full min-h-[360px] bg-[white] rounded-lg p-5 shadow-md">
      <div class="flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <div class="relative w-1/4 md:block hidden">
            <div class="flex">
              <a-input placeholder="Nhập mã đơn hàng để tìm kiếm" class="h-10">
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
          <a-tag :bordered="false" class="bg-tag-bg-01 text-tag-text-01"
            >Đang xử lý</a-tag
          >
          <a-tag :bordered="false" class="bg-tag-bg-06 text-tag-text-06"
            >Quá hạn</a-tag
          >
        </div>
        <div>
          <a-table :columns="columns" :data-source="data">
            <template #bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'user'">
                <a>{{ record.user }}</a>
              </template>
              <template v-if="column.dataIndex === 'status'">
                <a-tag
                  :bordered="false"
                  v-if="record.status === 'active'"
                  class="bg-tag-bg-09 text-tag-text-09"
                >
                  Công khai
                </a-tag>
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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white w-full shadow-md rounded-md space-y-2 p-5">
        <div class="text-xl font-semibold">Sách được thuê nhiều</div>
        <div class="max-h-[400px] overflow-auto pr-4">
          <div
            class="flex justify-between cursor-pointer hover:bg-[#212122]/10"
          >
            <div class="flex justify-center items-start">
              <img
                class="w-20 h-20 object-cover rounded-md"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244875805.jpg"
                alt=""
              />
              <div class=" ">
                <p>Cho tôi xin một vé đi tuổi thơ</p>
                <p>phiên bản 2024 -<span> Tác giả: Nguyễn Nhật Ánh</span></p>
                <p class="flex items-center">
                  <span>4.8</span> <span><IconYellowStar /></span>
                </p>
              </div>
            </div>
            <p class="flex items-start">200 lượt thuê</p>
          </div>
          <hr class="my-2" />
          <div class="flex justify-between cursor-pointer">
            <div class="flex justify-center items-start">
              <img
                class="w-20 h-20 object-cover rounded-md"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244875805.jpg"
                alt=""
              />
              <div class=" ">
                <p>Cho tôi xin một vé đi tuổi thơ</p>
                <p>phiên bản 2024 -<span> Tác giả: Nguyễn Nhật Ánh</span></p>
                <p class="flex items-center">
                  <span>4.8</span> <span><IconYellowStar /></span>
                </p>
              </div>
            </div>
            <p class="flex items-start">200 lượt thuê</p>
          </div>
          <hr class="my-2" />
          <div class="flex justify-between cursor-pointer">
            <div class="flex justify-center items-start">
              <img
                class="w-20 h-20 object-cover rounded-md"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244875805.jpg"
                alt=""
              />
              <div class=" ">
                <p>Cho tôi xin một vé đi tuổi thơ</p>
                <p>phiên bản 2024 -<span> Tác giả: Nguyễn Nhật Ánh</span></p>
                <p class="flex items-center">
                  <span>4.8</span> <span><IconYellowStar /></span>
                </p>
              </div>
            </div>
            <p class="flex items-start">200 lượt thuê</p>
          </div>
          <hr class="my-2" />
          <div class="flex justify-between cursor-pointer">
            <div class="flex justify-center items-start">
              <img
                class="w-20 h-20 object-cover rounded-md"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244875805.jpg"
                alt=""
              />
              <div class=" ">
                <p>Cho tôi xin một vé đi tuổi thơ</p>
                <p>phiên bản 2024 -<span> Tác giả: Nguyễn Nhật Ánh</span></p>
                <p class="flex items-center">
                  <span>4.8</span> <span><IconYellowStar /></span>
                </p>
              </div>
            </div>
            <p class="flex items-start">200 lượt thuê</p>
          </div>
          <hr class="my-2" />
          <div class="flex justify-between cursor-pointer">
            <div class="flex justify-center items-start">
              <img
                class="w-20 h-20 object-cover rounded-md"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244875805.jpg"
                alt=""
              />
              <div class=" ">
                <p>Cho tôi xin một vé đi tuổi thơ</p>
                <p>phiên bản 2024 -<span> Tác giả: Nguyễn Nhật Ánh</span></p>
                <p class="flex items-center">
                  <span>4.8</span> <span><IconYellowStar /></span>
                </p>
              </div>
            </div>
            <p class="flex items-start">200 lượt thuê</p>
          </div>
          <hr class="my-2" />
        </div>
      </div>

      <div class="bg-white w-full shadow-md rounded-md space-y-2 p-5">
        <div class="text-xl font-semibold space-y-2">Hóa đơn nhập hàng</div>
        <div class="max-h-[400px] overflow-auto pr-4">
          <div class="space-y-1 cursor-pointer">
            <div class="flex justify-between">
              <p>#TW15090251</p>
              <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09"
                >Đã thanh toán</a-tag
              >
            </div>
            <div class="flex justify-between items-center text-sm">
              <p>Người nhận: An Khương</p>
              <p>Tổng tiền: 1.500.000đ</p>
              <p>10/05/2034</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="space-y-1 cursor-pointer">
            <div class="flex justify-between">
              <p>#TW15090251</p>
              <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09"
                >Đã thanh toán</a-tag
              >
            </div>
            <div class="flex justify-between items-center text-sm">
              <p>Người nhận: An Khương</p>
              <p>Tổng tiền: 1.500.000đ</p>
              <p>10/05/2034</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="space-y-1 cursor-pointer">
            <div class="flex justify-between">
              <p>#TW15090251</p>
              <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09"
                >Đã thanh toán</a-tag
              >
            </div>
            <div class="flex justify-between items-center text-sm">
              <p>Người nhận: An Khương</p>
              <p>Tổng tiền: 1.500.000đ</p>
              <p>10/05/2034</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="space-y-1 cursor-pointer">
            <div class="flex justify-between">
              <p>#TW15090251</p>
              <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09"
                >Đã thanh toán</a-tag
              >
            </div>
            <div class="flex justify-between items-center text-sm">
              <p>Người nhận: An Khương</p>
              <p>Tổng tiền: 1.500.000đ</p>
              <p>10/05/2034</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="space-y-1 cursor-pointer">
            <div class="flex justify-between">
              <p>#TW15090251</p>
              <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09"
                >Đã thanh toán</a-tag
              >
            </div>
            <div class="flex justify-between items-center text-sm">
              <p>Người nhận: An Khương</p>
              <p>Tổng tiền: 1.500.000đ</p>
              <p>10/05/2034</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="space-y-1 cursor-pointer">
            <div class="flex justify-between">
              <p>#TW15090251</p>
              <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09"
                >Đã thanh toán</a-tag
              >
            </div>
            <div class="flex justify-between items-center text-sm">
              <p>Người nhận: An Khương</p>
              <p>Tổng tiền: 1.500.000đ</p>
              <p>10/05/2034</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="space-y-1 cursor-pointer">
            <div class="flex justify-between">
              <p>#TW15090251</p>
              <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09"
                >Đã thanh toán</a-tag
              >
            </div>
            <div class="flex justify-between items-center text-sm">
              <p>Người nhận: An Khương</p>
              <p>Tổng tiền: 1.500.000đ</p>
              <p>10/05/2034</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="space-y-1 cursor-pointer">
            <div class="flex justify-between">
              <p>#TW15090251</p>
              <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09"
                >Đã thanh toán</a-tag
              >
            </div>
            <div class="flex justify-between items-center text-sm">
              <p>Người nhận: An Khương</p>
              <p>Tổng tiền: 1.500.000đ</p>
              <p>10/05/2034</p>
            </div>
          </div>
          <hr class="my-2" />
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
