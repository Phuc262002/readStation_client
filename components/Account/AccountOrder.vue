<template>
  <div class="container mx-auto">
    <UTabs :items="items" class="w-full">
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
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
  },
  {
    label: "Theming",
    icon: "i-heroicons-eye-dropper",
  },
];
</script>

<style scoped>
/* Thêm kiểu nếu cần */
</style>
