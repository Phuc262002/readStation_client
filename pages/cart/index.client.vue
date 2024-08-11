<template>
  <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
    <div v-if="cartStore?.carts.length > 0">
      <div class="flex justify-between h-auto gap-5">
        <!-- Left -->
        <div class="w-3/4">
          <div class="bg-white h-auto shadow-md overflow-hidden rounded-lg p-5">
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
                        class="w-24 rounded-lg shadow-lg"
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
                          <span class="col-span-6">
                            {{ record?.cardboard }}</span
                          >
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
                      }).format(record?.price * (record?.hire_percent / 100))
                    }}
                  </span>
                </template>
                <template v-else-if="column.key === 'serviceFee'">
                  <span>
                    {{
                      new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(record?.service_fee)
                    }}
                  </span>
                </template>

                <template v-else-if="column.key === 'number_of_days'">
                  <span>
                    <a-input
                      :value="record.number_of_days"
                      class="w-[100px]"
                      type="number"
                      @change="
                        (e) =>
                          cartStore.updateNumberOfDays(
                            record.id,
                            e.target.value
                          )
                      "
                    />
                  </span>
                </template>
                <template v-else-if="column.key === 'totalFee'">
                  <span>
                    {{
                      new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(
                        record?.service_fee +
                          record?.price * (record?.hire_percent / 100)
                      )
                    }}
                  </span>
                </template>
                <template v-else-if="column.key === 'action'">
                  <a-button
                    @click="cartStore.deleteItemCart(record?.id)"
                    class="text-center text-2xl text-rtprimary flex justify-center cursor-pointer border-none"
                  >
                    <UIcon
                      class="text-2xl"
                      name="i-material-symbols-delete-outline-rounded"
                    />
                  </a-button>
                </template>
              </template>
            </a-table>
            <div class="text-xs text-tag-text-06 mt-5">
              <span>Lưu ý:</span>
              <ul>
                <li>
                  - Bạn có thể tham khảo các mức phí đã được đề cập ở trên.
                </li>
                <li>
                  - Để xem chi tiết cụ thể các khoản phí, vui lòng truy cập
                  trang "Thanh toán".
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Right -->
        <div class="w-1/4">
          <div class="bg-white shadow-md rounded-lg">
            <div class="p-6 w-full">
              <div class="flex flex-col gap-5">
                <div class="text-xl font-semibold">Thông tin đơn hàng</div>
                <div class="border-solid border border-gray-100 w-full"></div>
                <div class="" :key="index">
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
                  <span class="text-xs">
                    Phí vận chuyển (nếu có) sẽ được tính ở trang thanh toán.
                  </span>
                </div>
                <div class="w-full">
                  <nuxt-link to="/account/order/checkout">
                    <button
                      class="bg-rtprimary text-white uppercase text-sm w-full h-8 rounded-lg"
                    >
                      Thanh toán
                    </button>
                  </nuxt-link>
                </div>
                <div class="flex justify-center">
                  <Nuxt-link to="/products">
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
    <!--  -->
    <div v-else class="flex flex-col items-center justify-center text-center">
      <div class="">
        <img src="../../assets/images/ops-cart.png" alt="" />
      </div>
      <div class="pt-5">
        <h2 class="font-bold text-3xl">
          Ops. Danh sách thuê của bạn đang trống
        </h2>
        <p class="text-xl pb-4">Hãy thuê thêm sách và quay lại nhé !</p>
        <NuxtLink to="/products">
          <a-button class="text-base bg-orange-500 !text-white h-10">
            Thuê sách ngay
          </a-button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const cartStore = useCartStore();
const depositFee = ref(0);
const serviceFee = ref(0);
const totalFee = ref(0);
const number_of_days = ref(1);

// phí cọc
const calcDepositFee = () => {
  depositFee.value = cartStore.carts.reduce(
    (acc, curr) => acc + curr.price * (curr.hire_percent / 100),
    0
  );
};
// phí dịch vụ
const calcServiceFee = () => {
  serviceFee.value = cartStore.carts.reduce(
    (acc, curr) => acc + curr.service_fee,
    0
  );
};
// Tổng tiền
const calcTotalFee = () => {
  totalFee.value = depositFee.value + serviceFee.value;
};
useAsyncData(
  async () => {
    calcDepositFee();
    calcServiceFee();
    calcTotalFee();
  },
  {
    immediate: true,
    watch: [() => cartStore.carts],
  }
);
watch(
  () => cartStore.carts,

  () => {
    calcDepositFee(), calcServiceFee(), calcTotalFee();
  }
);

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
    title: "Số ngày thuê",
    dataIndex: "number_of_days",
    key: "number_of_days",
  },
  {
    title: "Tổng",
    key: "totalFee",
    dataIndex: "totalFee",
  },
  {
    title: "",
    key: "action",
  },
]);
</script>
