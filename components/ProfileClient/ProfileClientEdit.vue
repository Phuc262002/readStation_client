<template>
  <div class="flex w-full w-2/3 border rounded-2xl bg-white gap-3">
    <form class="flex w-full">
      <div class="w-1/2">
        <div class="flex items-center gap-2">
          <IoMdPerson />
          <h2>Thông tin cơ bản</h2>
        </div>

        <div class="w-full px-[15px] py-[10px]">
          <div
            class="w-full border border-2 flex items-center justify-center rounded-lg h-[45px]"
          >
            <p>Qúy khách chỉ sửa những thông tin cần thay đổi</p>
          </div>
          <div
            class="py-[6px] mt-5 flex items-center justify-between border border-b-[#aaabae] border-t-transparent border-l-transparent border-r-transparent"
          >
            <label for="name" class="block text-sm font-medium text-gray-700">
              Họ tên
            </label>
            <div>
              <a-input
                class="w-[388px] h-[45px]"
                name="name"
                type="name"
                placeholder="Nhập họ tên"
              />
            </div>
          </div>
          <div
            class="py-[6px] flex items-center justify-between border border-b-[#aaabae] border-t-transparent border-l-transparent border-r-transparent"
          >
            <label for="email" class="block text-sm font-medium text-gray-700">
              Ngày sinh
            </label>
            <div>
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập ngày sinh"
              />
            </div>
          </div>
          <div
            class="py-[6px] flex items-center justify-between border border-b-[#aaabae] border-t-transparent border-l-transparent border-r-transparent"
          >
            <a-form-item label="Giới tính" name="resource">
              <a-radio-group>
                <a-radio value="1">Name</a-radio>
                <a-radio value="2">Nữ</a-radio>
              </a-radio-group>
            </a-form-item>
          </div>
          <div
            class="py-[6px] flex items-center justify-between border border-b-[#aaabae] border-t-transparent border-l-transparent border-r-transparent"
          >
            <label for="email" class="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <div>
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập Số điện thoại"
              />
            </div>
          </div>
          <div
            class="py-[6px] flex items-center justify-between border border-b-[#aaabae] border-t-transparent border-l-transparent border-r-transparent"
          >
            <label for="email" class="block text-sm font-medium text-gray-700">
              Số CCCD/CMND
            </label>
            <div>
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập Số CCCD/CMND"
              />
            </div>
          </div>
          <div
            class="py-[6px] flex items-center justify-between border border-b-[#aaabae] border-t-transparent border-l-transparent border-r-transparent"
          >
            <label for="email" class="block text-sm font-medium text-gray-700">
              Nơi cấp
            </label>
            <div>
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập Nơi cấp"
              />
            </div>
          </div>
          <div
            class="py-[6px] flex items-center justify-between border border-b-[#aaabae] border-t-transparent border-l-transparent border-r-transparent"
          >
            <label for="email" class="block text-sm font-medium text-gray-700">
              Ngày cấp
            </label>
            <div>
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập Ngày cấp"
              />
            </div>
          </div>
          <div
            class="py-[6px] flex items-center justify-between border border-b-[#aaabae] border-t-transparent border-l-transparent border-r-transparent"
          >
            <label for="email" class="block text-sm font-medium text-gray-700">
              Tỉnh/Thành phố
            </label>
            <div>
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập Tỉnh/Thành phố"
              />
            </div>
          </div>
          <div class="py-[6px] flex items-center justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Quận/Huyện
            </label>
            <div>
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập Quận/Huyện"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex items-center gap-2">
          <IoMdPerson />
          <h2>Mã giới thiệu</h2>
        </div>
        <div class="px-[15px] py-[15px]">
          <div class="py-[6px]">
            <label for="email" class="block text-sm font-medium text-white">
              Mã giới thiệu của tôi
            </label>
            <div class="mt-3">
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập Mã giới thiệu"
              />
            </div>
          </div>
          <div class="py-[6px]">
            <label for="email" class="block text-sm font-medium text-white">
              Link giới thiệu của tôi
            </label>
            <div class="mt-3">
              <a-input
                class="w-[388px] h-[45px]"
                name="email"
                type="email"
                placeholder="Nhập Link giới thiệu"
              />
            </div>
          </div>
          <div class="flex items-center">
            <p class="text-white mr-3">Số lượng bạn bè giới thiệu:</p>
            <span class="text-white">0</span>
          </div>
        </div>

        <div class="">
          <div class="flex items-center gap-2">
            <IoMdPerson />
            <h2>Kết nối tài khoản</h2>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <IoLogoGoogle />
              <a-button
                type="dashed"
                class="border border-indigo-400 text-indigo-400"
                >Kết nối</a-button
              >
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { IoMdPerson, IoLogoGoogle } from "vue3-icons/io";
</script>
