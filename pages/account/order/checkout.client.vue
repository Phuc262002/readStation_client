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
        <div class="bg-white h-auto shadow-md rounded-lg">
          <div class="p-5 w-full flex flex-col gap-5">
            <div class="bg-slate-100 rounded-md shadow-sm h-12">
              <div
                class="flex justify-between items-center text-base font-semibold p-3 w-full"
              >
                <h1 class="w-3/5">Sản phẩm</h1>
                <h1 class="w-1/4 flex justify-center items-center">Giá bìa</h1>
                <h1 class="w-1/4 flex justify-center items-center">
                  Phần trăm cọc
                </h1>
                <h1 class="w-1/4 flex justify-center items-center">
                  Tiền cọc tạm tính
                </h1>
                <h1 class="w-1/4 flex justify-center items-center">
                  Phí dịch vụ
                </h1>
                <h1 class="w-1/4 flex justify-center items-center">
                  Tổng tạm tính
                </h1>
              </div>
            </div>
            <!--  -->
            <div
              class="flex justify-between items-center border-b border-rtgray-50 pb-5"
              v-for="(cart, index) in cartStore?.carts"
              :key="index"
            >
              <div class="flex justify-start gap-5 items-start w-3/5">
                <div class="min-w-[100px] min-h-[100px]">
                  <img class="w-24 rounded-md" :src="cart?.poster" alt="" />
                </div>
                <div class="flex flex-col gap-2">
                  <div class="text-base font-bold">
                    {{ cart?.book?.title }}
                  </div>
                  <div class="text-[14px]">
                    <div>
                      <span class="font-bold">Tác giả: </span
                      ><span>{{ cart?.book?.author?.author }}</span>
                    </div>
                    <div>
                      <span class="font-bold">Phiên bản: </span
                      ><span> {{ cart?.book_version }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="text-base font-bold w-1/4 flex justify-center items-center"
              >
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(cart?.price)
                }}
              </div>
              <div
                class="flex justify-center items-center gap-2 w-1/4 text-center text-base font-bold"
              >
                {{ cart?.hire_percent }}
              </div>
              <div
                class="text-base font-bold w-1/4 flex justify-center items-center"
              >
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(cart?.price * (cart?.hire_percent / 100))
                }}
              </div>
              <div
                class="text-base font-bold w-1/4 flex justify-center items-center"
              >
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(cart?.price * 0.1)
                }}
              </div>
              <div
                class="text-base font-bold w-1/4 flex justify-center items-center"
              >
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(
                    cart?.price * (cart?.hire_percent / 100) + cart?.price * 0.1
                  )
                }}
              </div>
            </div>
          </div>
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
                    <img src="../../../assets/images/pay-wallet.svg" alt="" />
                    <span>Thanh toán Online</span>
                  </div>
                </a-radio-button>
                <a-radio-button
                  value="cash"
                  class="col-span-6 rounded-lg h-[90px] h-full"
                  v-if="delivery_method === 'pickup'"
                >
                  <div class="flex items-center justify-start gap-8 h-full">
                    <img src="../../../assets/images/pay-libary.svg" alt="" />
                    <span>Thanh toán tại thư viện</span>
                  </div>
                </a-radio-button>
              </a-radio-group>
            </div>
            <div
              class="mt-5 flex justify-between text-sm"
              v-if="delivery_method === 'shipper'"
            >
              <span>Bạn muốn giao đến địa chỉ khác?</span>
              <span
                type="primary"
                @click="showModal"
                class="cursor-pointer text-orange-600"
              >
                Thay đổi địa chỉ nhận hàng?
              </span>

              <AccountManagerFormChangeAddress
                :openModalForm="openModalForm"
                :openModal="closeModal"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="w-1/4 space-y-4">
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
                      class="cursor-pointer text-sm text-orange-600"
                      >Thay đổi địa chỉ?</span
                    >
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
          v-if="delivery_method === 'shipper'"
        >
          <div class="p-6 w-full">
            <!--  -->
            <div class="flex flex-col gap-5">
              <div class="font-bold border-b border-rtgray-50 pb-5">
                Hình thức vận chuyển
              </div>
              <div class="text-base space-y-5">
                <a-select
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
                      }).format(depositFee)
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
                  :loading="isSubmitting"
                  class="bg-rtprimary !text-white uppercase border-none text-sm w-full h-10 rounded-lg"
                >
                  Thanh toán
                </a-button>
              </div>
              <div class="flex justify-center">
                <Nuxt-link to="/shop">
                  <button
                    class="flex justify-center text-sm items-center gap-2 hover:text-rtsecondary"
                  >
                    <UIcon
                      class="text-xl"
                      name="i-material-symbols-turn-left-rounded"
                    />
                    <h1>Tiếp tục thuê sách</h1>
                  </button>
                </Nuxt-link>
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
const authStore = useAuthStore();
const orderStore = useOrderClientStore();
const cartStore = useCartStore();
const shippingMethodStore = useShippingMethodPublicStore();
const isSubmitting = ref(false);
const resErrors = ref({});
const payment_method = ref("online");
const delivery_method = ref("shipper");
const shipping_method_id = ref();
const options = ref([]);
const shippingValue = ref({});
const depositFee = ref(0);
const serviceFee = ref(0);
const totalFee = ref(0);

useAsyncData(async () => {
  await shippingMethodStore.getAllShipping();
  options.value = shippingMethodStore?.shippings.map((item) => ({
    value: item.id,
    label: item.method,
  }));
  console.log("options.value", options.value);
});
const userNote = ref();
// phí cọc
const calcDepositFee = () => {
  depositFee.value = cartStore.carts.reduce(
    (acc, curr) =>
      acc + (parseFloat(curr.price) * parseFloat(curr.hire_percent)) / 100,
    0
  );
};
// phí dịch vụ
const calcServiceFee = () => {
  serviceFee.value = cartStore.carts.reduce(
    (acc, curr) => acc + parseFloat(curr.price) * 0.1,
    0
  );
};
// Tổng tiền
const calcTotalFee = () => {
  totalFee.value =
    depositFee.value +
    serviceFee.value +
    (delivery_method === "pickup"
      ? (cartStore.shippingFee = 0)
      : cartStore.shippingFee);
};
useAsyncData(
  async () => {
    calcDepositFee();
    calcServiceFee();
    calcTotalFee();
  },
  {
    immediate: true,
    watch: [cartStore.shippingFee, totalFee.value],
  }
);
watch(
  () => cartStore.shippingFee,
  () => {
    calcDepositFee(), calcServiceFee(), calcTotalFee();
  }
);

const payCart = async () => {
  const newInfo = {
    fullname: authStore?.authUser?.user?.fullname,
    phone: authStore?.authUser?.user?.phone,
    address: authStore?.authUser?.user?.address_detail,
  };
  const newArr = cartStore.carts.map((item) => {
    return {
      book_details_id: item.id,
      service_fee: parseFloat(item.price) * 0.1,
      deposit_fee: parseFloat(item.price) * (item.hire_percent / 100),
    };
  });

  const resData = await orderStore.createOrder({
    payment_method: payment_method.value,
    delivery_method: delivery_method.value,
    user_note: userNote.value,
    discount: authStore?.authUser?.user?.discount,
    shipping_method_id: shipping_method_id.value,
    total_shipping_fee: parseFloat(shippingFee.value),
    total_service_fee: parseFloat(serviceFee.value),
    total_deposit_fee: parseFloat(depositFee.value),
    total_all_fee: parseFloat(totalFee.value),
    order_details: newArr,
    delivery_info: newInfo,
  });
  // console.log("resData", resData);
  if (resData?.data?._rawValue?.status == true) {
    message.success({
      content: "Đặt hàng thành công",
    });
    cartStore.carts = [];
    navigateTo("/products");
  } else if (resData?.data?._rawValue?.status == false) {
    message.error(resData?.data?._rawValue?.errors);
  } else {
    resErrors.value = resData.error.value.data.errors;
    message.error({
      content: "Đặt hàng không thành công",
    });
  }
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
</script>
<style scoped>
::v-deep(textarea:where(.css-dev-only-do-not-override-1mvo6uw).ant-input) {
  resize: none;
}
</style>
