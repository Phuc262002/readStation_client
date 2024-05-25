<template>
  <div
    class="md:py-10 flex justify-center items-center container min-h-[100vh]"
  >
    <div
      class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8 w-[400px] rounded-lg"
    >
      <div class="text-center pb-4">
        <h2 class="text-2xl text-sky-600 font-bold pb-3">
          Đặt lại mật khẩu 🔒
        </h2>
        <p>
          cho tài khoản
          <span class="text-lg font-semibold">nguyenvana@gmail.com</span>
        </p>
      </div>
      <form action="" class="w-full space-y-6">
        <div>
          <label for="" class="flex gap-1 text-sm font-medium text-gray-700">
            <span>Mật khẩu</span><span class="text-red-600">*</span>
          </label>
          <a-input-password placeholder="Nhập mật khẩu mới" class="mt-1 h-11" />
        </div>
        <div>
          <label for="" class="flex gap-1 text-sm font-medium text-gray-700">
            <span>Xác nhận lại mật khẩu</span
            ><span class="text-red-600">*</span>
          </label>
          <a-input-password
            placeholder="Xác nhận lại mật khẩu mới"
            class="mt-1 h-11"
          />
        </div>

        <a-button
          html-type="submit"
          class="w-full bg-[#162D3A] h-[45px] !text-white hover:bg-slate-600 text-base"
          :loading="isSubmitting"
        >
          <span>Đặt lại mật khẩu mới</span>
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
