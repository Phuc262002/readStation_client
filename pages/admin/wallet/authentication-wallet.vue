<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">List View</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <div class="flex gap-2">
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
          <label for="email" class="block text-sm font-medium text-gray-700">
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
      </div>

      <div class="">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <a-input class="w-full h-10" placeholder="Nhập email" required />
        </div>
      </div>
      <div class="relative flex items-center justify-between text-center py-2">
        <hr class="flex-1 solid border-t-2" />
        <p class="px-2">Thông tin căn cước</p>
        <hr class="flex-1 solid border-t-2" />
      </div>
      <div class="flex gap-4">
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
          <!-- <a-select
                v-model:value="value"
                mode="tags"
                style="width: 100%"
                :token-separators="[',']"
                placeholder="Automatic tokenization"
                :options="options"
                @change="handleChange"
              ></a-select> -->
        </div>
      </div>
      </div>

      
      <div class="flex justify-end items-end gap-2">
        <a-button danger html-type="button" class="mt-4">Hủy</a-button>
        <a-button type="primary" html-type="submit" class="mt-4"
          >Nạp tiền</a-button
        >
      </div>
    </div>
  </div>
</template>
