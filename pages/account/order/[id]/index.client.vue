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
                {{ orderStore?.order?.user?.fullname }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Email:</span>
              <span class="col-span-3">
                {{ orderStore?.order?.user?.email }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-1 font-bold">Số điện thoại:</span>
              <span class="col-span-3">
                {{ orderStore?.order?.user?.phone }}
              </span>
            </div>
          </div>
          <div class="w-1/2 pl-5 space-y-3">
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Địa chỉ nhận sách:</span>
              <span class="col-span-2">
                {{ orderStore?.order?.user?.address_detail }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Phương thức thanh toán:</span>
              <span
                class="col-span-2"
                v-if="orderStore?.order?.payment_method === 'online'"
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
          <div class="flex gap-3">
            <span>Thông tin đơn hàng</span>
            <a-popover trigger="hover" placement="topLeft">
              <template #content>
                <span class="text-sm text-orange-600">
                  * Tiền cọc thuê sách sẽ được hoàn trả 100% nếu không có phụ
                  phí phát sinh
                </span>
              </template>
              <UI class="i-ph-warning-circle text-orange-500 w-3" />
            </a-popover>
          </div>

          <span class="flex justify-center">
            <a-tag
              v-if="orderStore?.order?.status === 'wating_payment'"
              class="text-tag-text-01 bg-tag-bg-01 border-none py-1 px-3 rounded-lg"
            >
              Chờ thanh toán
            </a-tag>
            <a-tag
              v-if="orderStore?.order?.status === 'pending'"
              class="text-tag-text-01 bg-tag-bg-01 border-none py-1 px-3 rounded-lg"
            >
              Đang xử lý
            </a-tag>
            <a-tag
              v-else-if="orderStore?.order?.status === 'approved'"
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
              v-else-if="orderStore?.order?.status === 'in_transit'"
              class="text-tag-text-03 bg-tag-bg-03 border-none py-1 px-3 rounded-lg"
            >
              Đang giao
            </a-tag>
            <a-tag
              v-else-if="orderStore?.order?.status === 'extended'"
              class="text-tag-text-06 bg-tag-bg-06 border-none py-1 px-3 rounded-lg"
            >
              Đang gia hạn
            </a-tag>
            <a-tag
              v-else-if="orderStore?.order?.status === 'active'"
              class="text-tag-text-04 bg-tag-bg-04 border-none py-1 px-3 rounded-lg"
            >
              Đang thuê
            </a-tag>
            <a-tag
              v-else-if="orderStore?.order?.status === 'returning'"
              class="text-tag-text-13 bg-tag-bg-13 border-none py-1 px-3 rounded-lg"
            >
              Đang trả sách
            </a-tag>
            <a-tag
              v-else-if="orderStore?.order?.status === 'completed'"
              class="text-tag-text-05 bg-tag-bg-05 border-none py-1 px-3 rounded-lg"
            >
              Hoàn thành
            </a-tag>
            <a-tag
              v-else-if="orderStore?.order?.status === 'canceled'"
              class="text-tag-text-07 bg-tag-bg-07 border-none py-1 px-3 rounded-lg"
            >
              Đã hủy
            </a-tag>
            <a-tag
              v-else-if="orderStore?.order?.status === 'overdue'"
              class="text-tag-text-06 bg-tag-bg-06 border-none py-1 px-3 rounded-lg"
            >
              Quá hạn
            </a-tag>
          </span>
        </h3>
        <div class="flex py-5 text-sm">
          <div class="w-1/2 border-r border-rtgray-50 space-y-3">
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Số sách thuê:</span>
              <span class="col-span-2">
                {{ orderStore?.order?.loan_order_details?.length }}
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Ưu đãi:</span>
              <span class="col-span-2">
                Giảm giá 50% các loại phí thuê sách cho HS/SV
              </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Ngày đặt sách:</span>
              <span class="col-span-2">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div
              class="grid grid-cols-4"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'overdue' ||
                orderStore?.order?.status === 'returning'
              "
            >
              <span class="col-span-2 font-bold">Ngày nhận sách:</span>
              <span class="col-span-2">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div
              class="grid grid-cols-4"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'overdue' ||
                orderStore?.order?.status === 'returning'
              "
            >
              <span class="col-span-2 font-bold">Ngày trả dự kiến:</span>
              <span class="col-span-2">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div
              class="grid grid-cols-4"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'overdue' ||
                orderStore?.order?.status === 'returning'
              "
            >
              <span class="col-span-2 font-bold">Ngày trả thực tế:</span>
              <span class="col-span-2">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div
              class="grid grid-cols-4"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'overdue' ||
                orderStore?.order?.status === 'returning'
              "
            >
              <span class="col-span-2 font-bold">Số lần gia hạn:</span>
              <span class="col-span-2"> 0 / 3 </span>
            </div>
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Hình thức giao sách:</span>
              <span
                class="col-span-2"
                v-if="orderStore?.order?.delivery_method === 'pickup'"
              >
                Nhận sách tại thư viện
              </span>
              <span
                class="col-span-2"
                v-else-if="orderStore?.order?.delivery_method === 'shipper'"
              >
                Nhận sách tại nhà
              </span>
            </div>
            <div
              class="grid grid-cols-4"
              v-if="orderStore?.order?.status === 'canceled'"
            >
              <span class="col-span-2 font-bold">Lý do bị từ chối:</span>
              <span class="col-span-2"> Quá thời gian thanh toán </span>
            </div>
          </div>
          <!--  -->
          <div class="w-1/2 space-y-3 pl-5">
            <div class="grid grid-cols-4">
              <span class="col-span-2 font-bold">Tồng tiền cọc thuê sách:</span>
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
                  }).format(orderStore?.order?.total_shipping_fee)
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
              <span class="col-span-2 font-bold">Số tiền cần thanh toán:</span>
              <span class="col-span-2 text-orange-400">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(orderStore?.order?.total_all_fee)
                }}
              </span>
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
            v-if="orderStore?.order?.status === 'active'"
          >
            Lưu ý:
            <ul>
              <li>- Thời gian gia hạn sẽ được cộng dồn</li>
              <li>
                - Gia hạn riêng lẻ từng sách sẽ tính là 1 lần gia hạn. Nếu bạn
                muốn gia hạn toàn bộ trong 1 lần hãy chọn “ Gia hạn toàn bộ ” ở
                trên
              </li>
            </ul>
          </span>
        </div>

        <div
          class="pt-5 pb-8 border-b border-rtgray-50"
          v-for="(order, index) in orderStore?.order?.loan_order_details"
          :key="index"
        >
          <div class="flex gap-3">
            <h3 class="font-bold">
              {{ order?.book_details?.book?.title }} -
              {{ order?.book_details?.book_version }}
            </h3>
            <div>
              <a-tag
                v-if="order?.status === 'returning'"
                class="text-tag-text-13 bg-tag-bg-13 border-none py-1 px-3 rounded-lg"
              >
                Đang trả sách
              </a-tag>
              <a-tag
                v-else-if="order?.status === 'completed'"
                class="text-tag-text-05 bg-tag-bg-05 border-none py-1 px-3 rounded-lg"
              >
                Đã trả sách
              </a-tag>
              <a-tag
                v-else-if="order?.status === 'overdue'"
                class="text-tag-text-06 bg-tag-bg-06 border-none py-1 px-3 rounded-lg"
              >
                Quá hạn
              </a-tag>
              <a-tag
                v-else-if="order?.status === 'extended'"
                class="text-tag-text-06 bg-tag-bg-06 border-none py-1 px-3 rounded-lg"
              >
                Đang gia hạn
              </a-tag>
            </div>
          </div>
          <div class="flex mt-3">
            <div class="w-1/2 grid grid-cols-12 border-r border-rtgray-50">
              <div class="col-span-4">
                <img
                  :src="order?.book_details?.poster"
                  alt=""
                  class="w-[114px] h-[176px] shadow-lg shadow-gray-500"
                />
              </div>
              <div class="col-span-8 text-sm space-y-3">
                <div class="grid grid-cols-6">
                  <span class="col-span-3 font-bold">Tác giả:</span>
                  <span class="col-span-3">
                    {{ order?.book_details?.book?.author?.author }}
                  </span>
                </div>
                <div class="grid grid-cols-6">
                  <span class="col-span-3 font-bold">Danh mục:</span>
                  <span class="col-span-3">
                    {{ order?.book_details?.book?.category?.name }}
                  </span>
                </div>
                <div
                  class="grid grid-cols-4"
                  v-if="
                    orderStore?.order?.status === 'active' ||
                    orderStore?.order?.status === 'overdue' ||
                    orderStore?.order?.status === 'returning'
                  "
                >
                  <span class="col-span-2 font-bold">Số lần gia hạn:</span>
                  <span class="col-span-2"> 0 / 3 </span>
                </div>
                <div
                  class="grid grid-cols-4"
                  v-if="
                    orderStore?.order?.status === 'active' ||
                    orderStore?.order?.status === 'overdue' ||
                    orderStore?.order?.status === 'returning'
                  "
                >
                  <span class="col-span-2 font-bold">Ngày trả thực tế:</span>
                  <span class="col-span-2">
                    {{
                      $dayjs(orderStore?.order?.created_at).format(
                        "DD/MM/YYYY - HH:MM"
                      )
                    }}
                  </span>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="w-1/2 space-y-3 pl-5 text-sm">
              <div class="grid grid-cols-4">
                <span class="col-span-2 font-bold">Tiền cọc sách:</span>
                <span class="col-span-2">
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(order?.book_details?.price)
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
                    }).format(order?.book_details?.price * 0.2)
                  }}
                </span>
              </div>
              <div class="grid grid-cols-4">
                <span class="col-span-2 font-bold">Tổng tiền:</span>
                <span class="col-span-2">
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      order?.book_details?.price * 0.2 +
                        order?.book_details?.price
                    )
                  }}
                </span>
              </div>
            </div>
          </div>
          <div
            class="flex justify-end pt-4 gap-2"
            v-if="orderStore?.order?.status === 'active'"
          >
            <a-button
              class="h-10"
              @click="showModalGive(order)"
              v-if="order?.status === 'active'"
            >
              Trả sách
            </a-button>

            <a-button
              v-if="order?.status === 'active'"
              class="h-10 bg-orange-500 !text-white border-none"
              @click="showModalExtend"
            >
              Gia hạn lần 1
            </a-button>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="flex justify-end pt-4 gap-2">
        <NuxtLink
          to="/account/order"
          v-if="
            orderStore?.order?.status === 'active' ||
            orderStore?.order?.status === 'wating_payment' ||
            orderStore?.order?.status === 'pending' ||
            orderStore?.order?.status === 'ready_for_pickup' ||
            orderStore?.order?.status === 'canceled' ||
            orderStore?.order?.status === 'approved' ||
            orderStore?.order?.status === 'preparing_shipment' ||
            orderStore?.order?.status === 'in_transit'
          "
        >
          <a-button class="h-10"> Trở về </a-button>
        </NuxtLink>
        <a-button
          class="h-10 !text-orange-400 border border-orange-400"
          v-if="
            orderStore?.order?.status === 'pending' ||
            orderStore?.order?.status === 'wating_payment'
          "
          @click="showCancelConfirm(orderStore?.order?.id)"
        >
          Hủy thuê
        </a-button>
        <a-button
          class="h-10 bg-orange-500 !text-white border-none"
          v-if="orderStore?.order?.status === 'wating_payment'"
        >
          Thanh toán
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
      :bookDetail="bookDetail"
    />
  </div>
</template>
<script setup lang="ts">
const orderStore = useOrderClientStore();
const authStore = useAuthStore();
const route = useRoute();
const id = route.params.id;
const bookDetail = ref();
const onCancelOrderDetail = async (id: any) => {
  await orderStore.cancelOrder(id);
};
const showCancelConfirm = (id: any) => {
  Modal.confirm({
    title: "Bạn đang muốn hủy đơn hàng?",
    content: "Sau khi hủy sẽ không khôi phục lại",
    okText: "Đồng ý",
    okType: "danger",
    cancelText: "Hủy",
    onOk() {
      onCancelOrderDetail(id);
      navigateTo("/account/order");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

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
const showModalGive = (order: any) => {
  openModalGive.value = true;
  bookDetail.value = order;
  console.log("id book", order);
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
