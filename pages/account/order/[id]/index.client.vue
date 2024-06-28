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
              <span class="col-span-3">
                {{ authStore?.authUser?.user?.fullname }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Email:</span>
              <span class="col-span-3">
                {{ authStore?.authUser?.user?.email }}
              </span>
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
              <span
                class="col-span-2"
                v-if="orderStore?.order?.payment_method === 'wallet'"
              >
                Chuyển khoản
              </span>
              <span
                class="col-span-2"
                v-else-if="orderStore?.order?.payment_method === 'cash'"
              >
                Tiền mặt
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
          <span class="flex justify-center">
            <a-tag
              v-if="orderStore?.order?.status === 'pending'"
              class="text-tag-text-01 bg-tag-bg-01 border-none py-1 px-3 rounded-lg"
              >Đang xử lý</a-tag
            >
            <a-tag
              v-else-if="orderStore?.order?.status === 'hiring'"
              class="text-tag-text-04 bg-tag-bg-04 border-none py-1 px-3 rounded-lg"
              >Đang thuê</a-tag
            >
            <a-tag
              v-else-if="orderStore?.order?.status === 'completed'"
              class="text-tag-text-05 bg-tag-bg-05 border-none py-1 px-3 rounded-lg"
              >Hoàn thành</a-tag
            >
            <a-tag
              v-else-if="orderStore?.order?.status === 'canceled'"
              class="text-tag-text-07 bg-tag-bg-07 border-none py-1 px-3 rounded-lg"
              >Đã hủy</a-tag
            >
            <a-tag
              v-else-if="orderStore?.order?.status === 'out_of_date'"
              class="text-tag-text-06 bg-tag-bg-06 border-none py-1 px-3 rounded-lg"
              >Quá hạn</a-tag
            >
          </span>
        </h3>
        <div class="flex py-5 text-sm">
          <div class="w-1/2 border-r border-rtgray-50 space-y-3">
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Số sách thuê:</span>
              <span class="col-span-2">
                {{ orderStore?.order?.order_details?.length }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Ngày đặt sách:</span>
              <span class="col-span-2">
                {{ $dayjs(orderStore?.order?.created_at).format("DD/MM/YYYY") }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Ngày nhận sách:</span>
              <span class="col-span-2">Chưa có thông tin</span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Ngày trả dự kiến:</span>
              <span class="col-span-2"> Chưa có thông tin </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Ngày trả thực tế:</span>
              <span class="col-span-2">Chưa có thông tin</span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Số lần gia hạn:</span>
              <span class="col-span-2">
                {{ orderStore?.order?.current_extensions }} /
                {{ orderStore?.order?.max_extensions }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Hình thức vận chuyển:</span>
              <span class="col-span-2">Chưa có thông tin</span>
            </div>
          </div>
          <!--  -->
          <div class="w-1/2 space-y-3 pl-5">
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Tiền cọc:</span>
              <span class="col-span-2">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(orderStore?.order?.total_deposit_fee)
                }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Phí vận chuyển:</span>
              <span class="col-span-2">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(orderStore?.order?.total_service_fee)
                }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Phí dịch vụ:</span>
              <span class="col-span-2">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(orderStore?.order?.total_service_fee)
                }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Tổng tiền nhận:</span>
              <span class="col-span-2">
                {{ orderStore?.order?.total_fine_fee }}
              </span>
            </div>

            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Tổng cộng:</span>
              <span class="col-span-2">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(orderStore?.order?.total_all_fee)
                }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Số tiền trả lại:</span>
              <span class="col-span-2"> Chưa cập nhật </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-end pt-4 gap-2"
        v-if="orderStore?.order?.status === 'hiring'"
      >
        <NuxtLink to="/account/order">
          <a-button class="h-10"> Trả sách </a-button>
        </NuxtLink>
        <a-button class="h-10 bg-orange-500 !text-white border-none">
          Gia hạn toàn bộ
        </a-button>
      </div>
    </div>
    <!--  -->
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div>
        <div class="border-b border-rtgray-50 pb-3">
          <h3 class="font-bold mb-1">Thông tin sách thuê</h3>
          <span
            class="text-xs text-tag-text-06"
            v-if="orderStore?.order?.status === 'hiring'"
          >
            Lưu ý: Gia hạn riêng lẻ từng sách sẽ tính là 1 lần gia hạn. Nếu bạn
            muốn gia hạn toàn bộ trong 1 lần hãy chọn “ Gia hạn toàn bộ ” ở trên
          </span>
        </div>

        <!-- <div class="">
          <div
            class="pt-5 pb-8 border-b border-rtgray-50"
            v-for="(order, index) in orderStore?.order?.order_details"
            :key="index"
          >
            <h3 class="font-bold">
              {{ order?.book_detail?.book?.title }} -
              {{ order?.book_detail?.book_version }}
            </h3>
            <div class="grid grid-cols-6 mt-3">
              <div class="col-span-1">
                <img
                  :src="order?.book_detail?.poster"
                  alt=""
                  class="w-[114px] h-[176px] shadow-lg shadow-gray-500"
                />
              </div>
              <div class="col-span-5">
                <div class="grid grid-cols-6">
                  <span class="col-span-1">Tác giả:</span>
                  <span class="col-span-5">
                    {{ order?.book_detail?.book?.author?.author }}
                  </span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-1">Danh mục:</span>
                  <span class="col-span-5">
                    {{ order?.book_detail?.book?.category?.name }}
                  </span>
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
          
        </div> -->

        <div class="pt-5 pb-8 border-b border-rtgray-50">
          <h3 class="font-bold">The Mountain Is You:</h3>
          <div class="flex mt-3">
            <div class="w-1/2 grid grid-cols-12 border-r border-rtgray-50">
              <div class="col-span-4">
                <img
                  src="../../../../assets/images/bookshop.jpg"
                  alt=""
                  class="w-[114px] h-[176px] shadow-lg shadow-gray-500"
                />
              </div>
              <div class="col-span-8 text-sm space-y-3">
                <div class="grid grid-cols-6">
                  <span class="col-span-3 font-bold">Tác giả:</span>
                  <span class="col-span-3"> adsa </span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-3 font-bold">Danh mục:</span>
                  <span class="col-span-3"> sdfdsv </span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-3 font-bold">Số lần gia hạn:</span>
                  <span class="col-span-3"> 0 / 3 </span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-3 font-bold">Ngày trả dự kiến:</span>
                  <span class="col-span-3"> adsa </span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-3 font-bold">Ngày trả thực tế:</span>
                  <span class="col-span-3"> sdfdsv </span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-3 font-bold">Hình thức trả sách:</span>
                  <span class="col-span-3"> 0 / 3 </span>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="w-1/2 space-y-3 pl-5 text-sm">
              <div class="grid grid-cols-4">
                <span class="col-span-2 font-bold">Tiền cọc:</span>
                <span class="col-span-2">
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(orderStore?.order?.total_deposit_fee)
                  }}
                </span>
              </div>
              <div class="grid grid-cols-4">
                <span class="col-span-2 font-bold">Phần trăm cọc:</span>
                <span class="col-span-2">
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(orderStore?.order?.total_service_fee)
                  }}
                </span>
              </div>
              <div class="grid grid-cols-4">
                <span class="col-span-2 font-bold">Phí dịch vụ:</span>
                <span class="col-span-2">
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(orderStore?.order?.total_service_fee)
                  }}
                </span>
              </div>
              <div class="grid grid-cols-4">
                <span class="col-span-2 font-bold">Tổng tiền:</span>
                <span class="col-span-2">
                  {{ orderStore?.order?.total_fine_fee }}
                </span>
              </div>
            </div>
          </div>
          <div
            class="flex justify-end pt-4 gap-2"
            v-if="orderStore?.order?.status === 'pending'"
          >
            <a-button class="h-10" @click="showModalGive"> Trả sách </a-button>

            <a-button
              class="h-10 bg-orange-500 !text-white border-none"
              @click="showModalExtend"
            >
              Gia hạn lần 1
            </a-button>
          </div>
        </div>
      </div>
      <!--  -->

      <div
        class="flex justify-end pt-4 gap-2"
        v-if="orderStore?.order?.status === 'pending'"
      >
        <NuxtLink to="/account/order">
          <a-button class="h-10"> Trở về </a-button>
        </NuxtLink>
        <a-button class="h-10 bg-orange-500 !text-white border-none">
          Hủy đơn
        </a-button>
      </div>
    </div>
    <AccountOrderExtendBook
      :openModalExtend="openModalExtend"
      :closeModalExtend="closeModalExtend"
    />
    <AccountOrderGiveBook
      :openModalGive="openModalGive"
      :closeModalGive="closeModalGive"
    />
  </div>
</template>
<script setup lang="ts">
const orderStore = useOrderClientStore();
const authStore = useAuthStore();
const route = useRoute();
const id = route.params.id;

// Modal Extend
const openModalExtend = ref(false);
const showModalExtend = () => {
  openModalExtend.value = true;
};
const closeModalExtend = () => {
  openModalExtend.value = false;
};

// Modal Give
const openModalGive = ref(false);
const showModalGive = () => {
  openModalGive.value = true;
};
const closeModalGive = () => {
  openModalGive.value = false;
};

useAsyncData(async () => {
  try {
    await orderStore.getOneOrder(id);
  } catch (error) {
    console.log("error", error);
  }
});
useAsyncData(async () => {
  await authStore.getProfile();
});
</script>
