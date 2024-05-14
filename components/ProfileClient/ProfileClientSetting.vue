<template>
  <div class="w-full w-2/3 border rounded-2xl bg-white">
    <div
      class="pt-[27px] pb-[25px] pl-[28px] border border-b-neutral-300 border-r-transparent border-t-transparent border-l-transparent"
    >
      <h2 class="font-bold pb-[14px]">Cài đặt tài khoản</h2>
      <p>Cập nhật tài khoản Email của bạn</p>
    </div>
    <form class="w-1/2 w-full flex flex-col items-center justify-end mt-[36px]">
      <div class="pb-[58px]">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-5">
          <a-input
            class="w-[388px] h-[45px]"
            name="email"
            type="email"
            placeholder="Nhập Email"
          />
        </div>
        <div class="mt-[34px]">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-bold pb-[14px]">Xóa tài khoản</h2>
              <p class="max-w-[200px]">
                Xóa tài khoản đồng thời dữ liệu của bạn sẽ bị mất
              </p>
            </div>
            <div class="pl-[69px]">
              <a-button type="primary" danger class="h-[45px]"
                >Xóa tài khoản</a-button
              >
            </div>
          </div>
          <div class="mt-[60px]">
            <a-button type="primary" class="mr-[25px] bg-[#8231D3] h-[45px]"
              >Lưu thay đổi</a-button
            >
            <a-button type="primary" class="h-[45px] bg-[#D9D9D9] text-black"
              >Hủy</a-button
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
