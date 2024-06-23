<template>
  <div>
    <h2 class="font-bold pb-5">
      Chi tiết đơn hàng <span>{{ orderStore?.order?.order_code }}</span>
    </h2>
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div>
        <h3 class="font-bold border-b border-rtgray-50 pb-5">
          Thông tin của bạn
        </h3>
        <div class="flex py-5 text-sm">
          <div class="w-1/2 border-r border-rtgray-50 space-y-3">
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Tên khách hàng:</span>
              <span class="col-span-3">Tôn Thất An Khương</span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Email:</span>
              <span class="col-span-3">trung.tranquanggg@gmail.com</span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Số điện thoại:</span>
              <span class="col-span-3">{{ orderStore?.order?.phone }}</span>
            </div>
          </div>
          <div class="w-1/2 pl-5 space-y-3">
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Địa chỉ nhận sách:</span>
              <span class="col-span-2"> {{ orderStore?.order?.address }} </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Phương thức thanh toán:</span>
              <span class="col-span-2">
                {{ orderStore?.order?.payment_method }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5 my-5"
    >
      <div>
        <h3 class="font-bold border-b border-rtgray-50 pb-5 flex gap-5">
          Thông tin đơn hàng
          <a-tag color="yellow">Đang xử lý</a-tag>
        </h3>
        <div class="flex py-5 text-sm">
          <div class="w-1/2 border-r border-rtgray-50 space-y-3">
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Số sách thuê:</span>
              <span class="col-span-3">
                {{ orderStore?.order?.order_details?.length }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Ngày đặt sách:</span>
              <span class="col-span-3">
                {{ $dayjs(orderStore?.order?.created_at).format("DD/MM/YYYY") }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Ngày nhận sách:</span>
              <span class="col-span-3">N/A</span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Ngày trả dự kiến:</span>
              <span class="col-span-3">
                {{
                  $dayjs(orderStore?.order?.expired_date).format("DD/MM/YYYY")
                }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Ngày trả thực tế:</span>
              <span class="col-span-3">N/A</span>
            </div>
          </div>
          <!--  -->
          <div class="w-1/2 border-r border-rtgray-50 space-y-3 pl-5">
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Tiền cọc:</span>
              <span class="col-span-3">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(orderStore?.order?.deposit_fee)
                }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Phí dịch vụ:</span>
              <span class="col-span-3">10/06/2024</span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Phí trễ hạn:</span>
              <span class="col-span-3">N/A</span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Số lần gia hạn:</span>
              <span class="col-span-3">
                {{ orderStore?.order?.current_extensions }} /
                {{ orderStore?.order?.max_extensions }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Phí gia hạn:</span>
              <span class="col-span-3">N/A</span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Tổng tiền:</span>
              <span class="col-span-3">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(orderStore?.order?.total_fee)
                }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div>
        <h3 class="font-bold border-b border-rtgray-50 pb-5">
          Thông tin sách thuê
        </h3>
        <!--  -->
        <div class="">
          <div
            class="pt-5 pb-8 border-b border-rtgray-50"
            v-for="(order, index) in orderStore?.order?.order_details"
          >
            <h3 class="font-bold">
              {{ order?.book_detail?.book?.title }} -
              {{ order?.book_detail?.book_version }}
            </h3>
            <div class="grid grid-cols-6 mt-3">
              <div class="col-span-1">
                <img
                  src="../../assets/images/bookshop.jpg"
                  alt=""
                  class="w-[114px] h-[176px] shadow-lg shadow-gray-500"
                />
              </div>
              <div class="col-span-5">
                <div class="grid grid-cols-6">
                  <span class="col-span-1">Tác giả:</span>
                  <span class="col-span-5">Nguyễn Nhật Ánh</span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-1">Danh mục:</span>
                  <span class="col-span-5">Văn học</span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-1">Số lần gia hạn:</span>
                  <span class="col-span-5">
                    {{ orderStore?.order?.current_extensions }} /
                    {{ orderStore?.order?.max_extensions }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="flex justify-end pt-4 gap-2">
        <NuxtLink to="/account/order">
          <a-button class="h-10"> Trở về </a-button>
        </NuxtLink>
        <a-button class="h-10 bg-orange-500 !text-white border-none">
          Hủy đơn
        </a-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const orderStore = useOrderClientStore();
const route = useRoute();
const id = route.params.id;
// console.log("id", id);
useAsyncData(async () => {
  try {
    await orderStore.getOneOrder(id);
  } catch (error) {
    console.log("error", error);
  }
});
</script>
