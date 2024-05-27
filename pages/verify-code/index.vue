<template>
  <div
    class="bg-[url('assets/images/bg-404.svg')] w-full h-[100vh] bg-cover bg-no-repeat bg-center"
  >
    <div
      class="md:py-10 flex justify-center items-center container min-h-[100vh]"
    >
      <div
        class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8 w-[400px] rounded-lg"
      >
        <div class="text-center pb-4">
          <h2 class="text-2xl text-sky-600 font-bold pb-3">Xác minh 💬</h2>
          <p>
            Chúng tôi đã gửi mã xác minh tới điện thoại di động của bạn. Nhập mã
            từ điện thoại di động vào trường bên dưới. ***** 1234
          </p>
        </div>
        <form action="" class="w-full space-y-6">
          <span>Nhập mã bảo mật gồm 6 chữ số của bạn</span>
          <div class="flex gap-2 h-[50px]">
            <a-input />
            <a-input />
            <a-input />
            <a-input />
            <a-input />
            <a-input />
          </div>
          <a-button
            html-type="submit"
            class="w-full bg-[#162D3A] h-[45px] !text-white hover:bg-slate-600 text-base"
          >
            <span>Xác nhận</span>
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
  </div>
</template>
