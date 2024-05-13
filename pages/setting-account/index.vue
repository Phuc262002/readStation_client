<template>
  <div class="relative md:px-20 px-8 py-8">
    <div class="w-full h-full flex items-center justify-between gap-5">
      <div
        class="w-1/3 flex flex-col items-center justify-center border rounded-2xl bg-white min-h-[500px]"
      >
        <div class="">img</div>
        <div class="w-full flex flex-col border-t-2 pl-4">
          <NuxtLink to="/" class="mt-10 flex gap-2 hover:text-yellow-600">
            <IoMdPerson class="text-2xl" />
            <span>Chỉnh sửa thông tin cá nhân</span></NuxtLink
          >
          <NuxtLink to="/" class="mt-1 flex gap-2 hover:text-yellow-600">
            <IoIosCog class="text-2xl text-gray-600" />
            <span>Cài đặt tài khoản</span></NuxtLink
          >
          <NuxtLink to="/" class="mt-1 flex gap-2 hover:text-yellow-600">
            <IoIosKey class="text-2xl" />
            <span>Đổi mật khẩu</span></NuxtLink
          >
          <NuxtLink to="/" class="mt-1 flex gap-2 hover:text-yellow-600">
            <IoIosReturnLeft class="text-2xl" />
            <span>Quản lý voucher</span></NuxtLink
          >
          <NuxtLink to="/" class="mt-1 flex gap-2 hover:text-yellow-600">
            <IoMdPeople class="text-2xl" />
            <span>Mạng xã hội</span></NuxtLink
          >
          <NuxtLink to="/" class="mt-1 flex gap-2 hover:text-yellow-600">
            <IoMdNotificationsOutline class="text-2xl" />
            <span>Thông báo</span></NuxtLink
          >
        </div>
      </div>
      <div class="w-full w-2/3 bg-black">b</div>
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
} from "vue3-icons/io";
// import Vue from 'vue'
// export default Vue.extend({

// })
</script>
