<template>
  <div class="border rounded-2xl bg-white p-4">
    <form class="">
      <div class="flex gap-4">
        <div class="w-1/2 flex flex-col space-y-2">
          <div class="flex items-center gap-2">
            <IoMdPerson />
            <h2 class="text-sm font-bold">Thông tin cơ bản</h2>
          </div>

          <div
            class="border-2 flex items-center justify-center rounded-lg h-[45px]"
          >
            <p>Qúy khách chỉ sửa những thông tin cần thay đổi</p>
          </div>

          <div>
            <div class="flex items-center justify-between pb-2 border-b">
              <label for="name" class="block text-sm font-medium text-gray-700">
                Họ tên
              </label>
              <div>
                <a-input
                  class="w-[360px] h-[40px]"
                  name="name"
                  type="name"
                  placeholder="Nhập họ tên"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pb-2 border-b">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Ngày sinh
            </label>
            <div>
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập ngày sinh"
              />
            </div>
          </div>
          <div class="flex items-center justify-between pb-2 border-b">
            <a-form-item label="Giới tính" name="resource">
              <a-radio-group>
                <a-radio value="1">Name</a-radio>
                <a-radio value="2">Nữ</a-radio>
              </a-radio-group>
            </a-form-item>
          </div>
          <div class="flex items-center justify-between pb-2 border-b">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <div>
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập Số điện thoại"
              />
            </div>
          </div>
          <div class="flex items-center justify-between pb-2 border-b">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Số CCCD/CMND
            </label>
            <div>
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập Số CCCD/CMND"
              />
            </div>
          </div>
          <div class="flex items-center justify-between pb-2 border-b">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Nơi cấp
            </label>
            <div>
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập Nơi cấp"
              />
            </div>
          </div>
          <div class="flex items-center justify-between pb-2 border-b">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Ngày cấp
            </label>
            <div>
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập Ngày cấp"
              />
            </div>
          </div>
          <div class="flex items-center justify-between pb-2 border-b">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Tỉnh/Thành phố
            </label>
            <div>
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập Tỉnh/Thành phố"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Quận/Huyện
            </label>
            <div>
              <a-input
                class="w-[360px] h-[40px]"
                name="email"
                type="email"
                placeholder="Nhập Quận/Huyện"
              />
            </div>
          </div>
        </div>
        <div class="w-1/2 flex flex-col space-y-4">
          <div class="flex items-center gap-2">
            <IoMdPerson />
            <h2 class="text-sm font-bold">Mã giới thiệu</h2>
          </div>
          <div class="bg-[#F8F7FA] rounded-md p-4 flex flex-col space-y-4">
            <div class="">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
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
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
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

          <div class="">
            <div class="flex items-center gap-2 mb-3">
              <IoMdPerson />
              <h2 class="text-sm font-bold">Kết nối tài khoản</h2>
            </div>
            <div class="bg-[#F8F7FA] rounded-md p-4">
              <div class="flex items-center justify-between">
                <img
                  src="../../assets/images/meta-logo.png"
                  class="w-[40px] h-[30px]"
                  alt=""
                />
                <a-button
                  type="dashed"
                  class="border border-indigo-400 text-indigo-400"
                  >Kết nối</a-button
                >
              </div>
              <div class="pt-4">
                <h2 class="font-bold text-base">Meta</h2>
                <p class="">
                  Meta is FlatForms Ins, which used to be called Faccbool Inc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 flex items-center justify-center gap-6 pt-4">
        <a-button class="w-[80px]">Hủy</a-button>
        <a-button
          class="w-[80px] bg-[#F5A222] text-white hover:bg-transparent hover:text-black"
          >Lưu</a-button
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { IoMdPerson, IoLogoGoogle } from "vue3-icons/io";
</script>
<style scoped>
:deep(.ant-btn):hover {
  color: black !important ;
  border: 1px solid gray !important;
}
</style>
