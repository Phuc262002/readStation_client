<template>
  <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
    <div class="flex">
      <div class="w-1/3"></div>
      <div class="w-1/3">
        <div
          class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8"
        >
          <div class="text-center pb-4">
            <h2 class="text-2xl text-sky-600 font-bold pb-3">Quên mật khẩu</h2>
            <p>Đặt lại mật khẩu của bạn</p>
          </div>
          <div class="text-center p-3 bg-[#000]">
            <span
              >Cung cấp địa chỉ email của bạn và hướng dẫn sẽ được gửi cho
              bạn</span
            >
          </div>

          <form action="" class="w-full space-y-6">
            <div>
              <label
                for=""
                class="flex gap-1 text-sm font-medium text-gray-700"
              >
                <span>Email</span><span class="text-red-600">*</span>
              </label>
              <a-input type="text" placeholder="Nhập Email" class="mt-1 h-11" />
            </div>

            <a-button
              html-type="submit"
              class="w-full bg-[#162D3A] h-[45px] !text-white hover:bg-slate-600 text-base"
            >
              <span>Gửi</span>
            </a-button>
            <div class="text-center">
              <span>Tôi đã nhớ mật khẩu... </span>
              <NuxtLink to="/login"
                ><span class="text-indigo-600">ấn vào đây</span></NuxtLink
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
