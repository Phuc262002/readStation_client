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
    <ul class="w-full flex flex-col space-y-4 border-t-2 p-4">
      <li>
        <NuxtLink
          to="/account/account-edit"
          class="flex items-center gap-2 hover:text-[#8231D3]"
        >
          <IoMdPerson class="text-2xl" />
          <span>Chỉnh sửa thông tin cá nhân</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/account/account-manager"
          class="flex items-center gap-2 hover:text-[#8231D3]"
        >
          <IoMdPerson class="text-2xl" />
          <span>Quản lý tài khoản</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/account/account-setting"
          class="flex items-center gap-2 hover:text-[#8231D3]"
        >
          <IoIosCog class="text-2xl" />
          <span>Cài đặt tài khoản</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/" class="flex items-center gap-2 hover:text-[#8231D3]">
          <IoIosKey class="text-2xl" />
          <span>Đổi mật khẩu</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/account/order-manager"
          class="flex items-center gap-2 hover:text-[#8231D3]"
        >
          <IoMdGift class="text-2xl" />
          <span>Quản lý đơn hàng</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/" class="flex items-center gap-2 hover:text-[#8231D3]">
          <IoMdPeople class="text-2xl" />
          <span>Mạng xã hội</span></NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/" class="flex items-center gap-2 hover:text-[#8231D3]">
          <IoMdNotificationsOutline class="text-2xl" />
          <span>Thông báo</span></NuxtLink
        >
      </li>
    </ul>
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
