<template>
  <div class="w-full w-2/3 border rounded-2xl bg-white p-4">
    <div class="border-b pb-6">
      <h2 class="font-bold pb-[14px]">Cài đặt tài khoản</h2>
      <p>Cập nhật tài khoản Email của bạn</p>
    </div>
    <form class="w-1/2 w-full flex flex-col items-center justify-end p-7">
      <div class="flex flex-col space-y-6">
        <label for="email" class="block text-sm font-medium text-gray-700">
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
        <div class="flex flex-col space-y-7">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-bold pb-4">Xóa tài khoản</h2>
              <p class="max-w-[200px]">
                Xóa tài khoản đồng thời dữ liệu của bạn sẽ bị mất
              </p>
            </div>
            <div class="">
              <a-button type="primary" danger class="h-11"
                >Xóa tài khoản</a-button
              >
            </div>
          </div>
          <div>
            <a-button type="primary" class="mr-6 bg-[#8231D3] h-11"
              >Lưu thay đổi</a-button
            >
            <a-button type="primary" class="h-11 bg-[#D9D9D9] text-black"
              >Hủy</a-button
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
