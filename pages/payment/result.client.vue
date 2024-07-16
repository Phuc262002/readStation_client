<template>
  <div>
    <div v-if="query.portal === 'payos'">
      <div
        class="md:py-10 h-full mx-auto md:px-20 px-8 container flex flex-col items-center justify-center text-center"
      >
        <h2 class="flex justify-center items-center font-bold text-2xl pb-10">
          Thông tin thanh toán
        </h2>
        <div
          v-if="query.status === 'SUCCESS'"
          class="bg-[#30c373] h-20 w-20 rounded-full flex justify-center items-center"
        >
          <Icon icon="charm:tick" class="text-[50px] text-white" />
        </div>
        <div
          v-else
          class="bg-[red] h-20 w-20 rounded-full flex justify-center items-center"
        >
          <Icon icon="hugeicons:cancel-01" class="text-[50px] text-white" />
        </div>

        <div class="pt-5">
          <div v-if="query.status === 'SUCCESS'" class="space-y-0 pb-4">
            <h2 class="font-bold text-xl pb-2">Thanh toán thành công</h2>
            <p class="font-bold">Giao dịch thành công</p>
          </div>
          <div v-else class="space-y-0 pb-4">
            <h2 class="font-bold text-xl pb-2">Thanh toán không thành công</h2>
            <p class="font-bold">Giao dịch không thành công</p>
          </div>
        </div>
        <div class="bg-white w-[500px] p-4 rounded-lg border border-rtgray-50">
          <div class="space-y-2">
            <div class="flex justify-between">
              <p class="text-[#84878b] font-semibold">Mã đơn hàng</p>
              <p class="font-bold">{{ query.orderCode }}</p>
            </div>
            <a-divider />
            <div class="flex justify-between">
              <p class="text-[#84878b] font-semibold">Số tiền</p>
              <p class="font-bold text-[red]">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(query.amount)
                }}
              </p>
            </div>
            <a-divider />
            <div class="flex justify-between">
              <p class="text-[#84878b] font-semibold">Nội dung</p>
              <p class="font-bold">{{ query.description }}</p>
            </div>
            <a-divider />
            <div class="flex justify-between">
              <p class="text-[#84878b] font-semibold">Trạng thái</p>
              <p class="font-bold">{{ query.status }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div
        class="md:py-10 h-full mx-auto md:px-20 px-8 container flex flex-col items-center justify-center text-center"
      >
        <h2 class="flex justify-center items-center font-bold text-2xl pb-10">
          Thông tin đơn hàng
        </h2>
        <div
          v-if="query.vnp_TransactionStatus === '00'"
          class="bg-[#30c373] h-20 w-20 rounded-full flex justify-center items-center"
        >
          <Icon icon="charm:tick" class="text-[50px] text-white" />
        </div>
        <div
          v-else
          class="bg-[red] h-20 w-20 rounded-full flex justify-center items-center"
        >
          <Icon icon="charm:tick" class="text-[50px] text-white" />
        </div>

        <div class="pt-5">
          <div
            v-if="query.vnp_TransactionStatus === '00'"
            class="space-y-0 pb-4"
          >
            <h2 class="font-bold text-xl pb-2">Thanh toán thành công</h2>
            <p class="font-bold">Giao dịch thành công</p>
          </div>
          <div v-else class="space-y-0 pb-4">
            <h2 class="font-bold text-xl pb-2">Thanh toán không thành công</h2>
            <p class="font-bold">Giao dịch không thành công</p>
          </div>
        </div>
        <div class="bg-white w-[500px] p-4 rounded-lg border border-rtgray-50">
          <div class="space-y-2">
            <div class="flex justify-between">
              <p class="text-[#84878b] font-semibold">Mã đơn hàng</p>
              <p class="font-bold">{{ query.vnp_TxnRef }}</p>
            </div>
            <a-divider />
            <div class="flex justify-between">
              <p class="text-[#84878b] font-semibold">Số tiền</p>
              <p class="font-bold text-[red]">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(query.vnp_Amount / 100)
                }}
              </p>
            </div>
            <a-divider />
            <div class="flex justify-between">
              <p class="text-[#84878b] font-semibold">Nội dung</p>
              <p class="font-bold">{{ query.vnp_OrderInfo }}</p>
            </div>
            <a-divider />
            <div class="flex justify-between">
              <p class="text-[#84878b] font-semibold">Trạng thái</p>
              <p class="font-bold">
                {{
                  query.vnp_TransactionStatus === "00" ? "SUCCESS" : "CANCELLED"
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
const route = useRoute();
const orderStore = useOrderClientStore();
const query = route.query;
onMounted(async () => {
  console.log("🚀 ~ onMounted ~ query:", query);
  if (query && query.portal === "payos") {
    await orderStore.getOrderById({
      body: {
        id: query.orderCode,
        body: query,
      },
    });
  } else {
    await orderStore.getOrderById({
      id: query.vnp_TxnRef,
      body: {
        body: query,
      },
    });
  }
});

const submit = async () => {
  const query = route.query;
  console.log("🚀 ~ submit ~ query:", query);
  if (query && query.portal === "payos") {
    await orderStore.cancelOrderPayment({
      id: query.orderCode,
      body: {
        body: query,
      },
    });
  } else {
    await orderStore.cancelOrderPayment({
      id: query.vnp_TxnRef,
      body: {
        body: query,
      },
    });
  }
};
</script>
