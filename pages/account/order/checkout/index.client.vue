<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 min-w-full min-h-[100vh] bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <div class="flex justify-between h-auto gap-5">
      <!-- Left -->
      <div class="w-3/4 space-y-5">
        <div class="bg-white h-auto shadow-md rounded-lg overflow-hidden p-5">
          <a-table
            :columns="columns"
            :data-source="cartStore?.carts"
            :pagination="false"
          >
            <template #headerCell="{ column }">
              <template v-if="column.key === 'name'">
                <span> Sản phẩm </span>
              </template>
            </template>

            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'name'">
                <div class="flex justify-start gap-5">
                  <div class="min-w-[100px] min-h-[100px]">
                    <img
                      class="w-24 rounded-md shadow-lg"
                      :src="record?.poster"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col gap-2 font-normal space-y-3">
                    <div class="text-base font-bold">
                      {{ record?.book?.title }}
                    </div>
                    <div class="text-[14px] space-y-3">
                      <div class="grid grid-cols-12 gap-2">
                        <span class="font-bold col-span-6"> Tác giả: </span>
                        <span class="col-span-6">
                          {{ record?.book?.author?.author }}
                        </span>
                      </div>
                      <div class="grid grid-cols-12 gap-2">
                        <span class="font-bold col-span-6"> Phiên bản: </span>
                        <span class="col-span-6"> {{ record?.cardboard }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else-if="column.key === 'price'">
                <span>
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format((record?.price * record?.hire_percent) / 100)
                  }}
                </span>
              </template>
              <template v-else-if="column.key === 'serviceFee'">
                <span>
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(record?.number_of_days)
                  }}
                </span>
              </template>
              <template v-else-if="column.key === 'number_of_days'">
                <span>
                  {{ record?.number_of_days }}
                </span>
              </template>
              <template v-else-if="column.key === 'totalFee'">
                <span>
                  {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(record?.price * 0.2 + record?.price)
                  }}
                </span>
              </template>
            </template>
          </a-table>
        </div>
        <div class="">
          <div class="bg-white h-auto p-5 shadow-md rounded-lg">
            <div class="w-full flex flex-col pb-5 font-medium">
              <a-radio-group
                v-model:value="delivery_method"
                name="radioGroup"
                class="flex gap-5"
              >
                <a-radio value="shipper"> Nhận sách tại nhà </a-radio>
                <a-radio value="pickup"> Nhận sách tại thư viện </a-radio>
              </a-radio-group>
            </div>
            <div class="">
              <a-radio-group
                v-model:value="payment_method"
                class="grid grid-cols-12 gap-5"
              >
                <a-radio-button
                  value="online"
                  class="col-span-6 rounded-lg h-[90px] h-full"
                >
                  <div class="flex items-center justify-start gap-8">
                    <img
                      src="../../../../assets/images/pay-wallet.svg"
                      alt=""
                    />
                    <span>Thanh toán Online</span>
                  </div>
                </a-radio-button>
                <a-radio-button
                  value="cash"
                  class="col-span-6 rounded-lg h-[90px] h-full"
                  v-if="delivery_method === 'pickup'"
                >
                  <div class="flex items-center justify-start gap-8 h-full">
                    <img
                      src="../../../../assets/images/pay-libary.svg"
                      alt=""
                    />
                    <span>Thanh toán tại thư viện</span>
                  </div>
                </a-radio-button>
              </a-radio-group>
            </div>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="w-1/4 space-y-4">
        <!--  -->
        <div class="bg-white shadow-md rounded-lg">
          <div class="p-6 w-full">
            <div
              class="flex flex-col gap-5"
              v-if="delivery_method === 'shipper'"
            >
              <div class="font-bold border-b border-rtgray-50 pb-5">
                Địa chỉ nhận hàng
              </div>
              <div class="text-base space-y-1">
                <div class="flex items-center justify-between">
                  <p class="font-medium">
                    {{ authStore?.authUser?.user?.fullname }}
                  </p>
                  <div>
                    <span
                      type="primary"
                      @click="showModal"
                      class="cursor-pointer text-xl text-orange-600"
                    >
                      <a-tooltip placement="top">
                        <template #title>
                          <span>Thay đổi địa chỉ ?</span>
                        </template>
                        <Icon icon="lucide:edit" />
                      </a-tooltip>
                    </span>
                  </div>
                </div>

                <p class="text-rtgray-100">
                  {{ authStore?.authUser?.user?.phone }}
                </p>
                <p class="text-rtgray-100">
                  {{ authStore?.authUser?.user?.address_detail }}
                </p>
              </div>
            </div>
            <!--  -->
            <div
              class="flex flex-col gap-5"
              v-if="delivery_method === 'pickup'"
            >
              <div class="font-bold border-b border-rtgray-50 pb-5">
                Địa chỉ thư viện
              </div>
              <div class="text-base space-y-3">
                <p class="text-rtgray-100">
                  Lô 42, đường số 3, Công viên phần mềm Quang Trung, phường Tân
                  Chánh Hiệp, Quận 12, TP HCM
                </p>

                <p>Đừng quên đến thư viện lấy sách nhé !</p>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div
          class="bg-white shadow-md rounded-lg"
          v-if="route.query.type === 'thue_ngay'"
        >
          <div class="p-6 w-full">
            <div class="flex flex-col gap-5">
              <div class="flex gap-3 border-b border-rtgray-50 pb-5">
                <span class="font-bold">Nhập số ngày thuê sách</span>
                <a-popover trigger="hover" placement="topRight">
                  <template #content>
                    <p class="text-sm text-orange-600 flex flex-col">
                      <span>* Học sinh, sinh viên thuê tối đa 30 ngày</span>
                      <span>* Khách hàng thuê tối đa 5 ngày</span>
                    </p>
                  </template>
                  <Icon class="text-orange-600" icon="ic:outline-info" />
                </a-popover>
              </div>

              <a-input
                placeholder="Nhập số ngày thuê sách"
                size="large"
                v-model:value="rentNumber"
              />
            </div>
          </div>
        </div>
        <!--  -->
        <div
          class="bg-white shadow-md rounded-lg"
          v-if="delivery_method === 'shipper'"
        >
          <div class="p-6 w-full">
            <!--  -->
            <div class="flex flex-col gap-5">
              <div class="font-bold border-b border-rtgray-50 pb-5">
                Hình thức vận chuyển <span class="text-tag-text-06"> *</span>
              </div>
              <div class="text-base space-y-5">
                <a-select
                  placeholder="Chọn hình thức vận chuyển"
                  size="large"
                  v-model:value="shipping_method_id"
                  style="width: 100%"
                  @focus="focus"
                  @change="handleChange"
                  :options="options"
                >
                </a-select>
                <div class="text-sm space-y-3" v-if="shippingValue?.method">
                  <div>
                    <span>Hình thức vận chuyển:</span>
                    <span class="text-orange-500 float-right">
                      {{ shippingValue?.method }}
                    </span>
                  </div>
                  <div>
                    <span>Phí vận chuyển:</span>
                    <span class="text-orange-500 font-bold float-right">
                      {{
                        new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(shippingValue?.fee)
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="bg-white shadow-lg rounded-lg">
          <div class="p-6 w-full">
            <div class="flex flex-col gap-5">
              <div class="font-bold border-b border-rtgray-50 pb-5">
                Thông tin đơn hàng
              </div>
              <div class="border-b border-rtgray-50 pb-5">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-400">Phí cọc</span>
                  <span class="text-base font-bold">
                    {{
                      new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(deposit_fee)
                    }}
                  </span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-400">Phí dịch vụ</span>
                  <span class="text-base font-bold">
                    {{
                      new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(serviceFee)
                    }}
                  </span>
                </div>
                <div
                  class="flex justify-between items-center"
                  v-if="delivery_method === 'shipper'"
                >
                  <span class="text-sm text-gray-400">Phí vận chuyển</span>
                  <span class="text-base font-bold">
                    {{
                      new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(shippingValue?.fee)
                    }}
                  </span>
                </div>
                <div class="flex justify-between items-center pt-4">
                  <span class="text-base font-bold">Tổng tiền</span>
                  <span class="text-xl font-bold text-rtprimary">
                    {{
                      new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(totalFee)
                    }}
                  </span>
                </div>
              </div>

              <div>
                <span>Ghi chú của bạn:</span>
                <a-textarea
                  placeholder="Nhập ghi chú của bạn"
                  :rows="4"
                  v-model:value="userNote"
                />
              </div>
              <div class="w-full">
                <a-button
                  @click="payCart"
                  :loading="orderStore.isSubmitting"
                  class="bg-rtprimary !text-white uppercase border-none text-sm w-full h-10 rounded-lg"
                >
                  Thanh toán
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AccountManagerFormChangeAddress
      :openModalForm="openModalForm"
      :openModal="closeModal"
    />
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const authStore = useAuthStore();
const orderStore = useOrderClientStore();
const cartStore = useCartStore();
const shippingMethodStore = useShippingMethodPublicStore();
const isSubmitting = ref(false);
const resErrors = ref({});
const payment_method = ref("online");
const delivery_method = ref("shipper");
const shipping_method_id = ref();
const paymentPortal = ref("payos");
const options = ref([]);
const shippingValue = ref({});
const deposit_fee = ref(0);
const serviceFee = ref(0);
const totalFee = ref(0);
const shippingFee = ref(0);
const route = useRoute();
const type = route.query.type;
const number_of_days = ref(1);

const dataSource = computed(() => {
  return route.query.type === "thue_ngay"
    ? cartStore?.rentNow
    : cartStore?.carts;
});
// console.log("dataSource", dataSource);
useAsyncData(async () => {
  await shippingMethodStore.getAllShipping();
  options.value = shippingMethodStore?.shippings.map((item) => ({
    value: item.id,
    label: item.method,
  }));

  // Set default value for shipping_method_id
  if (options.value.length > 0) {
    shipping_method_id.value = options.value[0].value;
    shippingValue.value = shippingMethodStore?.shippings.find(
      (item) => item.id === shipping_method_id.value
    );
    cartStore.addShipFee(shippingValue.value.fee);
  }
  // console.log("options.value", options.value);
});
const userNote = ref();
// phí coc
// phí cọc
const calcDepositFee = () => {
  depositFee.value = (
    type === "thue_ngay" ? cartStore.rentNow : cartStore.carts
  ).reduce((acc, curr) => acc + curr.price, 0);
};

// phí dịch vụ
const calcServiceFee = () => {
  serviceFee.value = (
    type === "thue_ngay" ? cartStore.rentNow : cartStore.carts
  ).reduce((acc, curr) => acc + parseFloat(curr.price) * 0.2, 0);
};

// phí vận chuyển
const calcShippingFee = () => {
  shippingFee.value =
    delivery_method.value === "pickup" ? 0 : cartStore.shippingFee;
};
// Tổng tiền
const calcTotalFee = () => {
  totalFee.value = depositFee.value + serviceFee.value + shippingFee.value;
};
useAsyncData(
  async () => {
    calcDepositFee();
    calcServiceFee();
    calcShippingFee();
    calcTotalFee();
  },
  {
    immediate: true,
    watch: [cartStore.shippingFee, delivery_method],
  }
);
watch(
  () => cartStore.shippingFee,
  () => {
    calcShippingFee();
    calcTotalFee();
  }
);
watch(
  () => delivery_method.value,
  () => {
    calcShippingFee();
    calcTotalFee();
  }
);

const payCart = async () => {
  const isCheckAuth = authStore?.authUser?.user?.role?.name;
  const isCheckVerify = authStore?.authUser?.user?.user_verified_at;
  const data = cartStore?.carts;

  // new Infor
  const newInfo = {
    fullname: authStore?.authUser?.user?.fullname,
    phone: authStore?.authUser?.user?.phone,
    address: authStore?.authUser?.user?.address_detail,
  };

  console.log("data", data);
  // check danh mục "Giáo dục"
  // let checkcate = ref(true);
  // const cate = data.forEach((item) => {
  //   if (item?.category?.name !== "Giáo dục") {
  //     checkcate.value = false;
  //   }
  // });

  // check address
  if (
    delivery_method.value === "shipper" &&
    (!newInfo.phone || !newInfo.address)
  ) {
    message.error({
      content: "Vui lòng điền đầy đủ thông tin giao hàng!",
    });
    return;
  }
  //
  const locations = shippingMethodStore?.shippings?.filter(
    (item) => item.id === shipping_method_id.value
  )[0]?.location;
  if (!locations.includes(authStore?.authUser?.user?.province?.ProvinceName)) {
    message.error("Hiện tại chưa có hình thức vận chuyển khu vực này !");
    return;
  }

  let valueOrder;
  let orderDetail;

  if (isCheckAuth === "student") {
    // student đã xác thực và chọn GD
    if (isCheckVerify) {
      valueOrder = {
        payment_method: payment_method.value,
        delivery_method: delivery_method.value,
        payment_portal: paymentPortal.value,

        user_note: userNote.value,
        discount: authStore?.authUser?.user?.discount,
        shipping_method_id: shipping_method_id.value,
        total_shipping_fee: parseFloat(shippingFee.value),
        total_service_fee: 0,
        total_deposit_fee: 0,
        total_all_fee: 0,
        order_details: [],
        delivery_info: newInfo,
      };
      data.map((item) => {
        let desposive = 0;
        let totalService = 0;
        let totalDeposit = 0;
        if (item.price < 50000) {
          desposive = 1000;
        } else if (item.price >= 50000 && item.price <= 100000) {
          desposive = 2000;
        } else {
          desposive = 4000;
        }
        totalService += desposive * number_of_days.value;
        totalDeposit += ((item.hire_percent - 20) / 100) * item.price;
        valueOrder.total_service_fee += totalService;
        valueOrder.total_deposit_fee += totalDeposit;
        valueOrder.total_all_fee += totalService + totalDeposit;
        orderDetail = {
          number_of_days: number_of_days.value,
          book_details_id: item.id,
          service_fee: 0,
          deposit_fee: ((item.hire_percent - 20) / 100) * item.price,
        };
        valueOrder.order_details.push(orderDetail);
      });
      // stundent chưa xác thực nhưng chọn GD
    } else if (!isCheckVerify) {
      valueOrder = {
        payment_method: payment_method.value,
        delivery_method: delivery_method.value,
        payment_portal: paymentPortal.value,

        user_note: userNote.value,
        discount: authStore?.authUser?.user?.discount,
        shipping_method_id: shipping_method_id.value,
        total_shipping_fee: parseFloat(shippingFee.value),
        total_service_fee: 0,
        total_deposit_fee: 0,
        total_all_fee: 0,
        order_details: [],
        delivery_info: newInfo,
      };
      data.map((item) => {
        let desposive = 0;
        let totalService = 0;
        let totalDeposit = 0;
        if (item.price < 50000) {
          desposive = 1000;
        } else if (item.price >= 50000 && item.price <= 100000) {
          desposive = 2000;
        } else {
          desposive = 4000;
        }
        totalService += desposive * number_of_days.value;
        totalDeposit += (item.hire_percent / 100) * item.price;
        valueOrder.total_service_fee += totalService;
        valueOrder.total_deposit_fee += totalDeposit;
        valueOrder.total_all_fee += totalService + totalDeposit;
        orderDetail = {
          number_of_days: number_of_days.value,
          book_details_id: item.id,
          service_fee: 0,
          deposit_fee: (item.hire_percent / 100) * item.price,
        };
        valueOrder.order_details.push(orderDetail);
      });
    } else {
      // student chưa xác thực
      valueOrder = {
        payment_method: payment_method.value,
        delivery_method: delivery_method.value,
        payment_portal: paymentPortal.value,

        user_note: userNote.value,
        discount: authStore?.authUser?.user?.discount,
        shipping_method_id: shipping_method_id.value,
        total_shipping_fee: parseFloat(shippingFee.value),
        total_service_fee: 0,
        total_deposit_fee: 0,
        total_all_fee: 0,
        order_details: [],
        delivery_info: newInfo,
      };
      data.map((item) => {
        let desposive = 0;
        let totalService = 0;
        let totalDeposit = 0;
        if (item.price < 50000) {
          desposive = 1000;
        } else if (item.price >= 50000 && item.price <= 100000) {
          desposive = 2000;
        } else {
          desposive = 4000;
        }
        totalService += desposive * number_of_days.value;
        totalDeposit += (item.hire_percent / 100) * item.price;
        valueOrder.total_service_fee += totalService;
        valueOrder.total_deposit_fee += totalDeposit;
        valueOrder.total_all_fee += totalService + totalDeposit;
        orderDetail = {
          number_of_days: number_of_days.value,
          book_details_id: item.id,
          service_fee: desposive * number_of_days.value,
          deposit_fee: (item.hire_percent / 100) * item.price,
        };
        valueOrder.order_details.push(orderDetail);
      });
    }
    message.success("Thêm đơn hàng thành công student");
  } else {
    if (isCheckAuth === "user") {
      valueOrder = {
        payment_method: payment_method.value,
        delivery_method: delivery_method.value,
        payment_portal: paymentPortal.value,

        user_note: userNote.value,
        discount: authStore?.authUser?.user?.discount,
        shipping_method_id: shipping_method_id.value,
        total_shipping_fee: parseFloat(shippingFee.value),
        total_service_fee: 0,
        total_deposit_fee: 0,
        total_all_fee: 0,
        order_details: [],
        delivery_info: newInfo,
      };
      data.map((item) => {
        let desposive = 0;
        let totalService = 0;
        let totalDeposit = 0;
        if (item.price < 50000) {
          desposive = 1000;
        } else if (item.price >= 50000 && item.price <= 100000) {
          desposive = 2000;
        } else {
          desposive = 4000;
        }
        totalService += desposive * number_of_days.value;
        totalDeposit += (item.hire_percent / 100) * item.price;
        valueOrder.total_service_fee += totalService;
        valueOrder.total_deposit_fee += totalDeposit;
        valueOrder.total_all_fee += totalService + totalDeposit;
        orderDetail = {
          number_of_days: number_of_days.value,
          book_details_id: item.id,
          service_fee: desposive * number_of_days.value,
          deposit_fee: (item.hire_percent / 100) * item.price,
        };
        valueOrder.order_details.push(orderDetail);
      });
    } else {
      // user đã xác thực
      valueOrder = {
        payment_method: payment_method.value,
        delivery_method: delivery_method.value,
        payment_portal: paymentPortal.value,

        user_note: userNote.value,
        discount: authStore?.authUser?.user?.discount,
        shipping_method_id: shipping_method_id.value,
        total_shipping_fee: parseFloat(shippingFee.value),
        total_service_fee: 0,
        total_deposit_fee: 0,
        total_all_fee: 0,
        order_details: [],
        delivery_info: newInfo,
      };
      data.map((item) => {
        let desposive = 0;
        let totalService = 0;
        let totalDeposit = 0;
        if (item.price < 50000) {
          desposive = 1000;
        } else if (item.price >= 50000 && item.price <= 100000) {
          desposive = 2000;
        } else {
          desposive = 4000;
        }
        totalService += desposive * number_of_days.value;
        totalDeposit += ((item.hire_percent - 20) / 100) * item.price;
        valueOrder.total_service_fee += totalService;
        valueOrder.total_deposit_fee += totalDeposit;
        valueOrder.total_all_fee += totalService + totalDeposit;
        orderDetail = {
          number_of_days: number_of_days.value,
          book_details_id: item.id,
          service_fee: desposive * number_of_days.value,
          deposit_fee: ((item.hire_percent - 20) / 100) * item.price,
        };
        valueOrder.order_details.push(orderDetail);
      });
    }
    message.success("Thêm đơn hàng thành công user");
  }
  try {
    const res = await orderStore.createOrder(valueOrder);
    if (res.data._rawValue?.status == true && payment_method.value === "cash") {
      message.success("Thêm đơn hàng thành công");
      navigateTo("/account/order");
    } else if (
      res.data._rawValue?.status == true &&
      payment_method.value === "online"
    ) {
      message.success({
        content: "Đặt hàng thành công",
      });
      navigateTo(
        "/account/order/checkout/payment/" +
          resData?.data?._rawValue?.data.order_code
      );
    } else {
      message.error({
        content: "Đặt hàng thất bại",
      });
    }
  } catch (error) {
    message.error("Đặt hàng thất bại");
  }

  // const locations = shippingMethodStore?.shippings?.filter(
  //   (item) => item.id === shipping_method_id.value
  // )[0]?.location;
  // if (!locations.includes(authStore?.authUser?.user?.province?.ProvinceName)) {
  //   message.error("Hiện tại chưa có hình thức vận chuyển khu vực này !");
  //   return;
  // }
  // try {
  //   const newInfo = {
  //     fullname: authStore?.authUser?.user?.fullname,
  //     phone: authStore?.authUser?.user?.phone,
  //     address: authStore?.authUser?.user?.address_detail,
  //   };
  //   if (
  //     delivery_method.value === "shipper" &&
  //     (!newInfo.phone || !newInfo.address)
  //   ) {
  //     message.error({
  //       content: "Vui lòng điền đầy đủ thông tin giao hàng!",
  //     });
  //     return;
  //   }
  //   const newArr = (
  //     type === "thue_ngay" ? cartStore.rentNow : cartStore.carts
  //   ).map((item) => {
  //     return {
  //       book_details_id: item.id,
  //       service_fee: parseFloat(item.price) * 0.2,
  //       deposit_fee: parseFloat(item.price),
  //     };
  //   });
  //   console.log("newArr", newArr);
  //   const paymentPortal = payment_method.value === "online" ? "payos" : null;
  //   const resData = await orderStore.createOrder({
  //     payment_method: payment_method.value,
  //     delivery_method: delivery_method.value,
  //     payment_portal: paymentPortal,
  //     user_note: userNote.value,
  //     discount: authStore?.authUser?.user?.discount,
  //     shipping_method_id: shipping_method_id.value,
  //     total_shipping_fee: parseFloat(shippingFee.value),
  //     total_service_fee: parseFloat(serviceFee.value),
  //     total_deposit_fee: parseFloat(depositFee.value),
  //     total_all_fee: parseFloat(totalFee.value),
  //     order_details: newArr,
  //     delivery_info: newInfo,
  //   });
  //   // console.log("resData", resData);
  // if (
  //   resData?.data?._rawValue?.status == true &&
  //   payment_method.value === "cash"
  // ) {
  //   message.success({
  //     content: "Đặt hàng thành công",
  //   });
  //   type === "thue_ngay" ? (cartStore.rentNow = []) : (cartStore.carts = []);
  //   navigateTo("/account/order");
  // } else if (
  //   resData?.data?._rawValue?.status === true &&
  //   payment_method.value === "online"
  // ) {
  //   message.success({
  //     content: "Đặt hàng thành công",
  //   });
  //   type === "thue_ngay" ? (cartStore.rentNow = []) : (cartStore.carts = []);
  //   navigateTo(
  //     "/account/order/checkout/payment/" +
  //       resData?.data?._rawValue?.data.order_code
  //   );
  // } else {
  //     resErrors.value = resData.error.value.data.errors;
  //     message.error({
  //       content: "Đặt hàng thất bại",
  //     });
  //   }
  // } catch (error) {
  //   message.error("Đặt hàng thất bại");
  // }
};

const focus = () => {
  console.log("focus");
};

const handleChange = (value: string) => {
  shippingValue.value = shippingMethodStore?.shippings.filter(
    (item) => value === item.id
  )[0];
  cartStore.addShipFee(
    shippingMethodStore?.shippings.filter((item) => value === item.id)[0].fee
  );
};

const openModalForm = ref<boolean>(false);

const showModal = () => {
  openModalForm.value = true;
};

const closeModal = () => {
  openModalForm.value = false;
};

const columns = ref([
  {
    dataIndex: "Sản phẩm",
    key: "name",
    resizable: true,
    width: 400,
  },
  {
    title: "Tiền cọc thuê sách",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Phí dịch vụ",
    dataIndex: "serviceFee",
    key: "serviceFee",
  },
  {
    title: "Số ngày thuê sách",
    dataIndex: "number_of_days",
    key: "number_of_days",
  },
  {
    title: "Tổng",
    key: "totalFee",
    dataIndex: "totalFee",
  },
]);
</script>
<style scoped>
:deep(img, svg, video, canvas, audio, iframe, embed, object) {
  outline: initial;
}

:deep(.ant-radio-button-wrapper) {
  border-inline-start-width: 1px;
}
:deep(.ant-input) {
  resize: none;
}

:deep(.ant-radio-button-wrapper:not(:first-child)::before) {
  background-color: initial;
}
</style>
