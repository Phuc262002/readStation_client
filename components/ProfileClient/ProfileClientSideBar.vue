<template>
  <div
    class="items-center justify-center border rounded-2xl bg-white min-h-[500px]"
  >
    <div class="text-center">
      <div>Hình</div>
      <div class="mt-[17px] mb-[23px]">
        <h2 class="font-bold">Duran Clayton</h2>
        <p>UX/UI Design</p>
      </div>
    </div>
    <div class="w-full flex flex-col space-y-4 border-t-2 p-4">
      <NuxtLink
        to="/ProfileClientEdit"
        class="flex items-center gap-2 hover:text-[#8231D3]"
      >
        <IoMdPerson class="text-2xl" />
        <span>Chỉnh sửa thông tin cá nhân</span></NuxtLink
      >
      <NuxtLink
        to="/ProfileClientSetting"
        class="flex items-center gap-2 hover:text-[#8231D3]"
      >
        <IoIosCog class="text-2xl" />
        <span>Cài đặt tài khoản</span></NuxtLink
      >
      <NuxtLink to="/" class="flex items-center gap-2 hover:text-[#8231D3]">
        <IoIosKey class="text-2xl" />
        <span>Đổi mật khẩu</span></NuxtLink
      >
      <NuxtLink to="/" class="flex items-center gap-2 hover:text-[#8231D3]">
        <IoMdGift class="text-2xl" />
        <span>Quản lý voucher</span></NuxtLink
      >
      <NuxtLink to="/" class="flex items-center gap-2 hover:text-[#8231D3]">
        <IoMdPeople class="text-2xl" />
        <span>Mạng xã hội</span></NuxtLink
      >
      <NuxtLink to="/" class="flex items-center gap-2 hover:text-[#8231D3]">
        <IoMdNotificationsOutline class="text-2xl" />
        <span>Thông báo</span></NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IoIosReturnLeft,
  IoIosCog,
  IoMdPerson,
  IoMdPeople,
  IoMdNotificationsOutline,
  IoIosKey,
  IoMdGift,
} from "vue3-icons/io";
// import Vue from 'vue'
// export default Vue.extend({

// })
</script>
