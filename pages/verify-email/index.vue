<template>
  <div
    class="md:py-10 flex justify-center items-center container min-h-[100vh]"
  >
    <div
      class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8 w-[400px] rounded-lg"
    >
      <div class="text-center pb-4">
        <h2 class="text-2xl text-sky-600 font-bold pb-3">
          Xác thực Email của bạn ✉️
        </h2>
        <p>
          Liên kết kích hoạt tài khoản được gửi đến địa chỉ email của bạn:
          hello@example.com Vui lòng nhấp vào liên kết bên trong để tiếp tục.
        </p>
      </div>
      <form action="" class="w-full space-y-6">
        <a-button
          html-type="submit"
          class="w-full bg-[#162D3A] h-[45px] !text-white hover:bg-slate-600 text-base"
        >
          <span>Gửi</span>
        </a-button>
        <div class="flex items-center gap-1 justify-center">
          <span>Không nhận được thư ?</span>
          <NuxtLink to="/login" class="text-indigo-400 hover:text-indigo-900">
            Gửi lại</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
