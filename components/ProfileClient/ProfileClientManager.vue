<template>
  <div class="flex w-full w-2/3 border rounded-2xl bg-white gap-3">
    <div class="w-1/2">
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <IoMdPerson />
          <h2>Thông tin cơ bản</h2>
        </div>
        <div class="flex items-center gap-2">
          <IoMdPerson />
          <span>Chỉnh sửa</span>
        </div>
      </div>
      <div class="w-full">avc</div>
    </div>
    <div class="w-1/2">
      <div class="flex items-center gap-2">
        <IoMdPerson />
        <h2>Tài khoản</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IoMdPerson } from "vue3-icons/io";
</script>
