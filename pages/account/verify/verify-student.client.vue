<template>
  <div class="space-y-5">
    <h3 class="font-bold mb-5">Xác thực CMT/CCCD</h3>
    <div
      class="flex flex-col space-y-10 items-center bg-white shadow-md rounded-md pb-10"
    >
      <img
        class="w-auto h-[450px] object-fill"
        src="/assets/images/discount-student.svg"
        alt=""
      />
      <div class="grid grid-cols-8 justify-items-center">
        <div class="col-start-2 col-span-6 text-center text-xl">
          Chúng tôi xin thông báo về chương trình ưu đãi đặc biệt dành cho các
          học sinh/sinh viên (HS/SV). Khi Quý khách xác thực tài khoản HS/SV của mình,
          Quý khách sẽ nhận được ưu đãi giảm giá 50% cho các dịch vụ của Read
          Station.
        </div>
      </div>
      <NuxtLink to="/account/verify/camera-student">
        <a-button
          class="bg-orange-500 border-none !text-white rounded-lg h-10 px-32"
        >
          Xác thực ngay
        </a-button>
      </NuxtLink>
    </div>
  </div>
</template>
