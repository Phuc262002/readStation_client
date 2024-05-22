<template>
  <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
    <div class="flex">
      <div class="w-1/3"></div>
      <div class="w-1/3">
        <div
          class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8"
        >
          <div class="text-center pb-4">
            <h2 class="text-2xl text-sky-600 font-bold pb-3">
              Đặt lại mật khẩu mới
            </h2>
            <p>
              Mật khẩu mới của bạn phải khác biệt với bất kỳ mật khẩu nào trước
              đây của bạn
            </p>
          </div>
          <form action="" class="w-full space-y-6">
            <div>
              <label
                for=""
                class="flex gap-1 text-sm font-medium text-gray-700"
              >
                <span>Mật khẩu</span><span class="text-red-600">*</span>
              </label>
              <a-input type="text" placeholder="Mật khẩu" class="mt-1 h-11" />
            </div>
            <div>
              <label
                for=""
                class="flex gap-1 text-sm font-medium text-gray-700"
              >
                <span>Xác nhận lại mật khẩu</span
                ><span class="text-red-600">*</span>
              </label>
              <a-input type="text" placeholder="Mật khẩu" class="mt-1 h-11" />
            </div>
            <a-form-item name="checkNick" v-bind="formTailLayout">
              <a-checkbox>Lưu mật khẩu</a-checkbox>
            </a-form-item>
            <a-button
              html-type="submit"
              class="w-full bg-[#162D3A] h-[45px] !text-white hover:bg-slate-600 text-base"
              :loading="isSubmitting"
            >
              <span>Đặt lại mật khẩu</span>
            </a-button>
            <div class="text-center">
              <span>Bạn đã có mật khẩu... </span>
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
