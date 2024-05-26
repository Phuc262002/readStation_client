<template>
  <div
    class="md:py-10 flex justify-center items-center container min-h-[100vh]"
  >
    <div
      class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8 w-[400px] rounded-lg"
    >
      <div class="text-center pb-4">
        <h2 class="text-2xl text-sky-600 font-bold pb-3">Quên mật khẩu? 🔒</h2>
        <p>
          Nhập email của bạn và chúng tôi sẽ gửi cho bạn hướng dẫn đặt lại mật
          khẩu
        </p>
      </div>
      <form action="" class="w-full space-y-6">
        <div>
          <label class="flex gap-1 text-sm font-medium text-gray-700">
            <span>Email</span><span class="text-red-600">*</span>
          </label>
          <div>
            <a-input placeholder="Nhập địa chỉ Email" class="mt-1 h-11" />
          </div>
        </div>

        <a-button
          html-type="submit"
          class="w-full bg-[#162D3A] h-[45px] !text-white hover:bg-slate-600 text-base"
        >
          <span>Gửi</span>
        </a-button>
        <div class="text-center">
          <NuxtLink
            to="/login"
            class="flex items-center gap-1 justify-center text-indigo-400 hover:text-indigo-900"
          >
            <UIcon name="i-ion-return-down-back-outline" />
            Quay lại trang đăng nhập</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
