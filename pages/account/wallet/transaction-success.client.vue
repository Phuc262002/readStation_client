<template>
  <div
    class="bg-[url('assets/images/bg-404.svg')] w-full h-[100vh] bg-cover bg-no-repeat bg-center"
  >
    <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
      <div class="flex flex-col items-center justify-center text-center">
        <div class="">
          <img src="../../assets/images/success.png" alt="" />
        </div>
        <div class="pt-5">
          <div class="space-y-0 pb-4">
            <h2 class="font-bold text-3xl">Giao dịch thành công</h2>
            <p class="text-xl">
              Mã số giao dịch của bạn là
              <span class="text-blue-600">8AADE35C9F</span>
            </p>
            <p class="text-xl">
              Bạn có thể xem chi tiết trong
              <NuxtLink to="/account/order-manager" class="text-blue-600"
                >quản lý ví của tôi</NuxtLink
              >
            </p>
          </div>
          <NuxtLink to="/products">
            <a-button class="text-base bg-orange-500 !text-white h-10"
              >Quay lại trang chủ</a-button
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
