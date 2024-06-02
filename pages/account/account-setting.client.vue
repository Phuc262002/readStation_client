<template>
  <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300">
    <div class="border-b p-5">
      <h2 class="font-bold pb-[14px]">Cài đặt tài khoản</h2>
      <p>Cập nhật tài khoản của bạn</p>
    </div>
    <form class="w-1/2 w-full flex flex-col items-center justify-end p-7">
      <div class="flex flex-col space-y-6">
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 pb-2"
          >
            Họ tên
          </label>
          <div>
            <a-input
              class="w-[388px] h-11"
              name="name"
              type="name"
              placeholder="Nhập Họ tên"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 pb-2"
          >
            Email
          </label>
          <div>
            <a-input
              class="w-[388px] h-11"
              name="email"
              type="email"
              placeholder="Nhập Email"
            />
          </div>
        </div>
        <div class="flex flex-col space-y-7">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-bold pb-4">Xóa tài khoản</h2>
              <p class="max-w-[200px]">
                Xóa tài khoản đồng thời dữ liệu của bạn sẽ bị mất
              </p>
            </div>
            <div class="">
              <a-button type="primary" danger class="h-10"
                >Xóa tài khoản</a-button
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
