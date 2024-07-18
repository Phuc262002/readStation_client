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
            <div class="grid grid-cols-8">
              <span class="col-span-3 font-bold">Địa chỉ nhận sách:</span>
              <span class="col-span-5">
                {{ orderStore?.order?.user?.address_detail }}
              </span>
            </div>
            <div class="grid grid-cols-8">
              <span class="col-span-3 font-bold">Phương thức thanh toán:</span>
              <span
                class="col-span-5"
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
        <h3 class="border-b border-rtgray-50 pb-5 flex gap-5">
          <div class="flex gap-3">
            <span class="font-bold">Thông tin đơn hàng</span>
            <a-popover trigger="hover" placement="topLeft">
              <template #content>
                <span class="text-sm text-orange-600">
                  * Tiền cọc thuê sách sẽ được hoàn trả 100% nếu không có phụ
                  phí phát sinh
                </span>
              </template>
              <Icon class="text-orange-600" icon="ic:outline-info" />
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
              class="text-tag-text-12 bg-tag-bg-12 border-none py-1 px-3 rounded-lg"
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
            <div class="grid grid-cols-8">
              <span class="col-span-3 font-bold">Số sách thuê:</span>
              <span class="col-span-5">
                {{ orderStore?.order?.loan_order_details?.length }}
              </span>
            </div>
            <div class="grid grid-cols-8">
              <span class="col-span-3 font-bold">Ưu đãi:</span>
              <span class="col-span-5">
                Giảm giá 50% các loại phí thuê sách cho HS/SV
              </span>
            </div>
            <div class="grid grid-cols-8">
              <span class="col-span-3 font-bold">Ngày đặt sách:</span>
              <span class="col-span-5">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div
              class="grid grid-cols-8"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'overdue' ||
                orderStore?.order?.status === 'returning'
              "
            >
              <span class="col-span-3 font-bold">Ngày nhận sách:</span>
              <span class="col-span-5">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div
              class="grid grid-cols-8"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'overdue' ||
                orderStore?.order?.status === 'returning'
              "
            >
              <span class="col-span-3 font-bold">Ngày trả dự kiến:</span>
              <span class="col-span-5">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div
              class="grid grid-cols-8"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'overdue' ||
                orderStore?.order?.status === 'returning'
              "
            >
              <span class="col-span-3 font-bold">Ngày trả thực tế:</span>
              <span class="col-span-5">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>

            <div
              class="grid grid-cols-8"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'overdue' ||
                orderStore?.order?.status === 'returning'
              "
            >
              <span class="col-span-3 font-bold">Số lần gia hạn:</span>
              <span class="col-span-5"> 0 / 3 </span>
            </div>
            <div class="grid grid-cols-8">
              <span class="col-span-3 font-bold">Hình thức giao sách:</span>
              <span
                class="col-span-5"
                v-if="orderStore?.order?.delivery_method === 'pickup'"
              >
                Giao sách tại thư viện
              </span>
              <span
                class="col-span-2"
                v-else-if="orderStore?.order?.delivery_method === 'shipper'"
              >
                Giao sách tại nhà
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
          <div class="w-1/2 pl-5 grid grid-cols-12">
            <div class="space-y-3 col-span-8">
              <div class="grid grid-cols-4">
                <span class="col-span-2 font-bold"
                  >Tồng tiền cọc thuê sách:</span
                >
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
                <span class="col-span-2 font-bold">
                  Số tiền cần thanh toán:
                </span>
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
            <a-button
              @click="showHistoryExtend"
              v-if="
                orderStore?.order?.status === 'active' ||
                orderStore?.order?.status === 'extended'
              "
              class="text-sm text-orange-400 text-right col-span-4 border-none shadow-none"
            >
              Lịch sử gia hạn
            </a-button>
          </div>
        </div>
      </div>

      <div class="flex justify-end pt-4 gap-2">
        <a-button
          @click="showExtendAll"
          v-if="
            orderStore?.order?.status === 'active' ||
            $dayjs(new Date()).format('YYYY-MM-DD') ===
              $dayjs(orderStore?.order?.current_due_date).format('YYYY-MM-DD')
          "
          class="h-10 bg-orange-500 !text-white border-none"
        >
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
              {{ order?.book_details?.book?.title }} - Phiên bản năm
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
                class="text-tag-text-12 bg-tag-bg-12 border-none py-1 px-3 rounded-lg"
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
                    orderStore?.order?.status === 'extended' ||
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
                    orderStore?.order?.status === 'extended' ||
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
                    order?.status === 'returning' ||
                    order?.status === 'completed'
                  "
                >
                  <span class="col-span-2 font-bold">Hình thức trả sách:</span>
                  <div
                    class="col-span-2"
                    v-for="(items, index) in order?.return_histories"
                    :key="index"
                  >
                    <span v-if="items?.return_method === 'library'">
                      Giao trả sách trực tiếp đến thư viện
                    </span>
                    <span v-else-if="items?.return_method === 'pickup'">
                      Giao sách đến thư viện
                    </span>
                  </div>
                </div>
                <div
                  class="grid grid-cols-4"
                  v-if="order?.status === 'completed'"
                >
                  <span class="col-span-2 font-bold">Đánh giá:</span>
                  <span class="col-span-2">
                    <a-rate v-model:value="rating" />
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
          <div class="mt-3 space-y-3" v-if="order?.status === 'completed'">
            <span class="text-sm font-bold">Đánh giá chi tiết</span>
            <a-textarea
              v-model:value="valueRating"
              placeholder="Nhập nội dung đánh giá sách của bạn"
              :rows="4"
            />
          </div>

          <div class="flex justify-end pt-4 gap-2">
            <div
              v-if="
                order?.status === 'active' ||
                $dayjs(new Date()).format('YYYY-MM-DD') ===
                  $dayjs(order?.current_due_date).format('YYYY-MM-DD')
              "
              class="flex justify-end pt-4 gap-2"
            >
              <a-button
                class="h-10"
                @click="showModalGive(order)"
                v-if="
                  order?.status === 'active' ||
                  $dayjs(new Date()).format('YYYY-MM-DD') ===
                    $dayjs(order?.current_due_date).format('YYYY-MM-DD')
                "
              >
                Trả sách
              </a-button>

              <a-button
                v-if="
                  order?.status === 'active' ||
                  $dayjs(new Date()).format('YYYY-MM-DD') ===
                    $dayjs(order?.current_due_date).format('YYYY-MM-DD')
                "
                class="h-10 bg-orange-500 !text-white border-none"
                @click="showModalExtend(order)"
              >
                Gia hạn lần 1
              </a-button>
            </div>
            <a-button
              v-if="order?.status === 'completed'"
              class="h-10 bg-orange-500 !text-white border-none"
            >
              Đánh giá sách
            </a-button>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="flex justify-end pt-4 gap-2">
        <NuxtLink to="/account/order">
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
        <NuxtLink
          :to="`/account/order/checkout/payment/${orderStore?.order?.order_code}`"
        >
          <a-button
            class="h-10 bg-orange-500 !text-white border-none"
            v-if="orderStore?.order?.status === 'wating_payment'"
          >
            Thanh toán
          </a-button>
        </NuxtLink>
      </div>
    </div>
    <AccountOrderHistoryExtendBook
      :openHistoryExtend="openHistoryExtend"
      :closeHistoryExtend="closeHistoryExtend"
    />
    <AccountOrderExtendAllBook
      :openExtendAll="openExtendAll"
      :closeExtendAll="closeExtendAll"
    />
    <AccountOrderExtendBook
      :openModalExtend="openModalExtend"
      :closeModalExtend="closeModalExtend"
      :bookExtendDetail="bookExtendDetail"
    />
    <AccountOrderGiveBook
      :openModalGive="openModalGive"
      :closeModalGive="closeModalGive"
      :bookDetail="bookDetail"
    />
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const orderStore = useOrderClientStore();
const authStore = useAuthStore();
const route = useRoute();
const id = route.params.id;
const bookDetail = ref();
const bookExtendDetail = ref();
const rating = ref<number>(5);
const valueRating = ref<string>("");
const isShow = ref(false);
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
// Modal History Extend
const openHistoryExtend = ref(false);
const showHistoryExtend = () => {
  openHistoryExtend.value = true;
};
const closeHistoryExtend = () => {
  openHistoryExtend.value = false;
};
// Modal Extend All
const openExtendAll = ref(false);
const showExtendAll = () => {
  openExtendAll.value = true;
};
const closeExtendAll = () => {
  openExtendAll.value = false;
};

// Modal Extend
const openModalExtend = ref(false);
const showModalExtend = (order: any) => {
  openModalExtend.value = true;
  bookExtendDetail.value = order;
  console.log("id book ex", order);
};
const closeModalExtend = () => {
  openModalExtend.value = false;
};

// Modal Give
const openModalGive = ref(false);
const showModalGive = (order: any) => {
  openModalGive.value = true;
  bookDetail.value = order;
};
const closeModalGive = () => {
  openModalGive.value = false;
};

useAsyncData(async () => {
  await orderStore.getOneOrder(id);
});
useAsyncData(async () => {
  await authStore.getProfile();
});
</script>
<style scoped>
:deep(textarea:where(.css-dev-only-do-not-override-1mvo6uw).ant-input) {
  resize: none;
}
</style>
