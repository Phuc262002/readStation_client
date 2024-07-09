<template>
  <div
    class="bg-[url('assets/images/bg-404.svg')] w-full h-[100vh] bg-cover bg-no-repeat bg-center"
  >
    <div
      class="md:py-10 h-full mx-auto md:px-20 px-8 container flex flex-col items-center justify-center text-center"
    >
      <img src=" ../../../assets/images/error.png" alt="" />

      <div class="pt-5">
        <div class="space-y-0 pb-4">
          <h2 class="font-bold text-3xl pb-2">Giao dịch không thành công</h2>
          <p class="text-xl">Giao dịch không thực hiện được</p>
          <p class="text-xl">Vui lòng thử lại sau</p>
        </div>
        <NuxtLink to="/account/wallet">
          <a-button class="text-base bg-orange-500 !text-white h-10 px-10">
            Quay lại trang quản lý ví
          </a-button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
onMounted(() => {
  const orderCode = route.query.orderCode;
  const orderId = route.params.id;
  console.log("🚀 ~ onMounted ~ orderId:", orderId)
  console.log("🚀 ~ onMounted ~ orderCode:", orderCode)
});
</script>
