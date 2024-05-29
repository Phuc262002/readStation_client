<template>
  <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300">
    <div class="border-b p-4">
      <h2 class="font-bold pb-[14px]">Đổi mật khẩu</h2>
      <p>Cập nhật lại mật khẩu của bạn</p>
    </div>
    <form class="flex flex-col items-center justify-end p-7">
      <div class="flex flex-col space-y-6 w-[400px]">
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 pb-2"
          >
            Nhập mật khẩu cũ
          </label>
          <div>
            <a-input-password
              placeholder="Nhập mật khẩu cũ"
              class="mt-1 h-11"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 pb-2"
          >
            Nhập mật khẩu mới
          </label>
          <div>
            <a-input-password
              placeholder="Nhập mật khẩu mới"
              class="mt-1 h-11"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 pb-2"
          >
            Xác nhận lại mật khẩu mới
          </label>
          <div>
            <a-input-password
              placeholder="Xác nhận lại mật khẩu mới"
              class="mt-1 h-11"
            />
          </div>
        </div>
        <div class="flex flex-col space-y-7">
          <div class="flex items-center justify-between">
            <div class="w-full flex items-center justify-center pt-5">
              <a-button html-type="submit" class="mr-6 !text-white bg-[#3b8aea]"
                >Lưu thay đổi</a-button
              >
              <a-button type="primary" class="bg-[#D9D9D9] text-black"
                >Hủy</a-button
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
