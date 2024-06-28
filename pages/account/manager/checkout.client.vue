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
                      <span class="font-bold">Tác giả : </span
                      ><span>{{ cart?.book?.author?.author }}</span>
                    </div>
                    <div>
                      <span class="font-bold">Phiên bản :</span
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
                v-model:value="payment_shipping"
                name="radioGroup"
                class="flex gap-5"
              >
                <a-radio value="shipper"> Nhận sách tại nhà </a-radio>
                <a-radio value="library"> Nhận sách tại thư viện </a-radio>
              </a-radio-group>
            </div>
            <div class="">
              <a-radio-group
                v-model:value="payment_method"
                class="grid grid-cols-12 gap-5"
              >
                <a-radio-button
                  value="wallet"
                  class="col-span-6 rounded-lg h-[90px] h-full"
                >
                  <div class="flex items-center justify-start gap-8">
                    <img src="../../../assets/images/pay-wallet.svg" alt="" />
                    <span>Thanh toán qua ví</span>
                  </div>
                </a-radio-button>
                <a-radio-button
                  value="cash"
                  class="col-span-6 rounded-lg h-[90px] h-full"
                  v-if="payment_shipping === 'library'"
                >
                  <div class="flex items-center justify-start gap-8 h-full">
                    <img src="../../../assets/images/pay-libary.svg" alt="" />
                    <span>Thanh toán tại thư viện</span>
                  </div>
                </a-radio-button>
              </a-radio-group>
            </div>
            <div class="my-5 flex justify-between">
              <span>Bạn muốn giao đến địa chỉ khác?</span>
              <span
                type="primary"
                @click="showModal"
                class="cursor-pointer text-orange-600"
                >Thay đổi địa chỉ nhận hàng?</span
              >

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
            <div class="flex flex-col gap-5">
              <div class="text-xl font-semibold">Địa chỉ nhận hàng</div>
              <div class="border-solid border border-gray-100 w-full"></div>
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

                    <AccountManagerFormChangeAddress
                      :openModalForm="openModalForm"
                      :openModal="closeModal"
                    />
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
          </div>
        </div>

        <div class="bg-white shadow-lg rounded-lg">
          <div class="p-6 w-full">
            <div class="flex flex-col gap-5">
              <div class="text-xl font-semibold">Thông tin đơn hàng</div>
              <div class="border-solid border border-gray-100 w-full"></div>
              <div class="">
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
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-400">Phí vận chuyển</span>
                  <span class="text-base font-bold">
                    {{
                      new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(shippingFee)
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
              <div class="border-solid border border-gray-100 w-full"></div>
              <div>
                <span>Note:</span>
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
  </div>
</template>
<script setup lang="ts">
const authStore = useAuthStore();
const orderStore = useOrderClientStore();
const cartStore = useCartStore();
const isSubmitting = ref(false);
const resErrors = ref({});
const payment_method = ref("wallet");
const payment_shipping = ref("shipper");

const userNote = ref();
// phí cọc
const depositFee = ref(
  cartStore.carts.reduce(
    (acc, curr) =>
      acc + (parseFloat(curr.price) * parseFloat(curr.hire_percent)) / 100,
    0
  )
);

// phí dịch vụ
const serviceFee = ref(
  cartStore.carts.reduce((acc, curr) => acc + parseFloat(curr.price) * 0.1, 0)
);

// phí vận chuyển
const shippingFee = ref(20000);

// tổng tiền
const totalFee = ref(
  cartStore.carts.reduce(
    (acc, curr) =>
      acc + (parseFloat(curr.price) * parseFloat(curr.hire_percent)) / 100,
    0
  ) +
    cartStore.carts.reduce(
      (acc, curr) => acc + parseFloat(curr.price) * 0.1,
      0
    ) +
    20000
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
    delivery_method: "shipper",
    user_note: userNote.value,
    discount: 0,
    shipping_method_id: 1,
    total_shipping_fee: parseFloat(shippingFee.value),
    total_service_fee: parseFloat(serviceFee.value),
    total_deposit_fee: parseFloat(depositFee.value),
    total_all_fee: parseFloat(totalFee.value),
    order_details: newArr,
    delivery_info: newInfo,
  });
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

const openModalForm = ref<boolean>(false);

const showModal = () => {
  openModalForm.value = true;
};

const closeModal = () => {
  openModalForm.value = false;
};
</script>
<style scoped>
:where(.css-dev-only-do-not-override-1mvo6uw).ant-radio-button-wrapper:not(
    :first-child
  )::before {
  content: initial;
}
</style>
