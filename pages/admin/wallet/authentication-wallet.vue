<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Xác thực ví</h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <div class="text-xl text-[#1e293b] font-semibold pb-4">
        Thông tin cá nhân
      </div>
      <div class=" w-1/4 md:block hidden pb-4">
        <div class="flex">
          <a-input  placeholder="Nhập mã kệ để tìm kiếm" class="h-10" >
            <template #prefix>
              <SearchOutlined />
            </template>
          </a-input>
        </div>
        
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Họ và tên
          </label>
          <div class="mt-1">
            <a-input
              class="w-full h-10"
              placeholder="Nhập họ và tên"
              required
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="phone" class="block text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <div class="mt-1">
            <a-input
              class="w-full h-10"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            email
          </label>
          <div class="mt-1">
            <a-input class="w-full h-10" placeholder="Nhập email" required />
          </div>
        </div>
      </div>

      <div class="text-xl text-[#1e293b] font-semibold pb-4">
        Thông tin căn cước
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Họ tên khai sinh
          </label>
          <div class="mt-1">
            <a-input
              class="w-full h-10"
              placeholder="Nhập họ tên khai sinh"
              required
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            CMT/CCCD
          </label>
          <div class="mt-1">
            <a-input
              class="w-full h-10"
              placeholder="Nhập số CMT/CCCD"
              required
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Ngày cấp
          </label>
          <div class="mt-1">
            <a-input class="w-full h-10" type="date" required />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Nơi cấp
          </label>
          <div class="mt-1">
            <a-input class="w-full h-10" placeholder="Nhập nơi cấp" required />
          </div>
        </div>
      </div>
      <div class="flex gap-4"></div>

      <div class="flex justify-end items-end gap-2">
        <a-button danger html-type="button" class="mt-4">Hủy</a-button>
        <a-button type="primary" html-type="submit" class="mt-4"
          >Lưu</a-button
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
