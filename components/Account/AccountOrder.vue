<template>
  <div class="container mx-auto">
    <h1 class="text-xl text-[#1e293b] font-semibold">Danh sách đơn hàng</h1>
    <div >
      <div class="relative w-1/4 md:block hidden py-4">
        <div class="flex">
          <input
            type="text"
            class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
            placeholder="Tìm kiếm..."
          />
        </div>
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <SearchOutlined class="text-gray-500" />
        </div>
      </div>
    </div>
    <div class="py-4">
      <UTabs :items="items" class="w-1/2">
        <template #default="{ item, index, selected }">
          <div
            class="flex items-center gap-2 relative truncate"
            @click="handleSelectTab(index)"
          >
            <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
  
            <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
  
            <span
              v-if="selected"
              class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
            />
          </div>
        </template>
      </UTabs>
      
    </div>
    
    <AccountTableOrder />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";

const selectTab = ref(0);

const handleSelectTab = (number: number) => {
  selectTab.value = number;
};

const items = [
  {
    label: "Tất cả đơn hàng",
    icon: "i-heroicons-bars-4",
  },
  {
    label: "Đã nhận",
    icon: "i-heroicons-arrow-down-tray",
  },
  {
    label: "Chờ lấy hàng",
    icon: "i-heroicons-eye-dropper",
  },
  {
    label: "Đã hủy",
    icon: "i-material-symbols-cancel-outline",
  },
];
</script>

<style scoped>
/* Thêm kiểu nếu cần */
</style>
