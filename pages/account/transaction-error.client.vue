<template>
  <div
    class="bg-[url('assets/images/bg-404.svg')] w-full h-[100vh] bg-cover bg-no-repeat bg-center"
  >
    <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
      <div class="flex flex-col items-center justify-center text-center">
        <div class="">
          <img src="../../assets/images/error.png" alt="" />
        </div>
        <div class="pt-5">
          <div class="space-y-0 pb-4">
            <h2 class="font-bold text-3xl">Giao dịch không thành công</h2>
            <p class="text-xl">Giao dịch không thực hiện được</p>
            <p class="text-xl">Tài khoản của bạn không bị trừ tiền</p>
            <p class="text-xl">Vui lòng thử lại sau</p>
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
