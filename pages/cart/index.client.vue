<template>
  <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
    <div class="flex justify-between h-auto gap-5">
      <!-- Left -->
      <div class="w-3/4">
        <div class="bg-white h-auto shadow-lg rounded-lg">
          <div class="p-5 w-full flex flex-col gap-5">
            <div class="bg-slate-100 rounded-lg h-12">
              <div
                class="flex justify-between items-center text-base font-semibold p-3 w-full"
              >
                <h1 class="w-2/6">Sản phẩm</h1>
                <h1 class="flex justify-center items-center">Giá bìa</h1>
                <h1 class="flex justify-center items-center">Phần trăm cọc</h1>
                <h1 class="flex justify-center items-center">Cọc tạm tính</h1>
                <h1 class="flex justify-center items-center">Phí dịch vụ</h1>
                <h1 class="flex justify-center items-center">Tổng tạm tính</h1>
                <h1 class="h-full flex justify-center items-center"></h1>
              </div>
            </div>
            <!--  -->
            <div
              class="flex justify-between items-center border-b border-rtgray-50 pb-5"
              v-for="(cart, index) in cartStore?.carts"
              :key="index"
            >
              <div class="flex justify-start gap-5 w-2/6">
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
                      <span class="font-bold">Phiên bản : </span
                      ><span> {{ cart?.cardboard }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-base font-bold flex justify-center">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(cart?.price)
                }}
              </div>
              <div class="text-base font-bold flex items-center pl-3">
                {{ cart?.hire_percent }}%
              </div>
              <div class="w-1/6 text-base font-bold flex justify-center">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(cart?.price * (cart?.hire_percent / 100))
                }}
              </div>
              <div class="text-base font-bold flex justify-center pr-6">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(cart?.price * 0.1)
                }}
              </div>
              <div class="text-base font-bold text-center flex justify-center">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(
                    parseFloat(cart?.price) * 0.1 +
                      parseFloat(cart?.price) *
                        (parseFloat(cart?.hire_percent) / 100)
                  )
                }}
              </div>
              <a-button
                @click="cartStore.deleteItemCart(cart?.id)"
                class="text-center text-2xl text-rtprimary flex justify-center cursor-pointer border-none"
              >
                <UIcon
                  class="text-2xl"
                  name="i-material-symbols-delete-outline-rounded"
                />
              </a-button>
            </div>
          </div>
        </div>
      </div>
      <!-- Right -->
      <div class="w-1/4">
        <div class="bg-white shadow-lg rounded-lg">
          <div class="p-6 w-full">
            <div class="flex flex-col gap-5">
              <div class="text-xl font-semibold">Thông tin đơn hàng</div>
              <div class="border-solid border border-gray-100 w-full"></div>
              <div class="" :key="index">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-400">Phí cọc</span>
                  <span class="text-base font-bold"
                    >{{
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
              <div class="flex gap-1">
                <span class="text-red-600 text-base">* </span>
                <span class="text-xs"
                  >Phí vận chuyển sẽ được tính ở trang thanh toán.</span
                >
              </div>
              <div class="w-full">
                <nuxt-link to="/account/checkout">
                  <button
                    class="bg-rtprimary text-white uppercase text-sm w-full h-8 rounded-lg"
                  >
                    Thanh toán
                  </button>
                </nuxt-link>
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
<script setup>
import { ref } from "vue";
const cartStore = useCartStore();
// phí cọc
const depositFee = ref(
  cartStore?.carts.reduce(
    (acc, curr) =>
      acc + (parseFloat(curr.price) * parseFloat(curr.hire_percent)) / 100,
    0
  )
);
// phí dịch vụ
const serviceFee = ref(
  cartStore.carts.reduce((acc, curr) => acc + parseFloat(curr.price) * 0.1, 0)
);
// Tổng tiền
const totalFee = ref(depositFee.value + serviceFee.value);
</script>
