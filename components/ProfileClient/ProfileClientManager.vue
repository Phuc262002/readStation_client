<template>
  <div class="flex border rounded-2xl bg-white gap-3 p-4">
    <div class="w-1/2">
      <div class="flex justify-between mb-4">
        <div class="flex items-center gap-2">
          <IoMdPerson />
          <h2 class="text-sm font-bold">Thông tin cơ bản</h2>
        </div>
        <NuxtLink to="/" class="flex items-center gap-2">
          <IoMdPerson />
          <h2 class="text-sm font-bold">Chỉnh sửa</h2>
        </NuxtLink>
      </div>
      <div class="w-full">
        <div class="flex flex-col space-y-6 bg-[#F8F7FA] rounded-md p-4">
          <div class="border-b flex items-center justify-between pb-2">
            <div>Họ tên</div>
            <div>Nguyễn Văn A</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Ngày sinh</div>
            <div>01/01/2000</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Giới tính</div>
            <div>Nam</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Số điện thoại</div>
            <div>0123456789</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Email</div>
            <div>nguyenavana@gmail.com</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Số CMND/ CCCD</div>
            <div>0123456789</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Nơi cấp</div>
            <div>Cục trưởng cục cảnh sát ĐKDC</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Ngày cấp</div>
            <div>01/01/2000</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Tỉnh/ Thành Phố</div>
            <div>Hải Dương</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Quận/ Huyện</div>
            <div>Kinh Môn</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Xã/ Phường/ Thị trấn</div>
            <div>Bạch Đằng</div>
          </div>
          <div class="border-b flex items-center justify-between pb-2">
            <div>Địa chỉ</div>
            <div>123 Văn An</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex flex-col space-y-4">
      <div class="flex items-center gap-2">
        <IoMdPerson />
        <h2>Tài khoản</h2>
      </div>
      <div class="flex-col space-y-2 p-4 bg-[#F8F7FA] rounded-md">
        <div class="flex items-center justify-between border-b pb-2">
          <div>Số lưu ký</div>
          <div>2222222</div>
        </div>
        <div class="flex items-center justify-between">
          <div>Ngày mở tài khoản</div>
          <div>2222222</div>
        </div>
      </div>
      <div>
        <div class="flex items-center gap-2 mb-3">
          <IoMdPerson />
          <h2 class="text-sm font-bold">Mã giới thiệu</h2>
        </div>
        <div class="bg-[#F8F7FA] rounded-md p-4 flex flex-col space-y-4">
          <div class="">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Mã giới thiệu của tôi
            </label>
            <div class="">
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập Mã giới thiệu"
              />
              <a-button
                class="h-[40px] bg-[#F5A222] hover:bg-transparent text-white"
                >Sao chép</a-button
              >
            </div>
          </div>
          <div class="">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Link giới thiệu của tôi
            </label>
            <div class="">
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập Link giới thiệu"
              />
              <a-button
                class="h-[40px] bg-[#F5A222] hover:bg-transparent text-white"
                >Sao chép</a-button
              >
            </div>
          </div>
          <div class="flex items-center">
            <p class="mr-3 block text-sm font-medium text-gray-700">
              Số lượng bạn bè giới thiệu:
            </p>
            <span class="text-gray-700">0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IoMdPerson } from "vue3-icons/io";
</script>
