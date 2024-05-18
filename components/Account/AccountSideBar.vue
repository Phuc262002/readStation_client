<template>
  <a-layout-sider
    v-model:collapsed="props.collapsed"
    :trigger="null"
    collapsible
    class="!bg-white dark:!bg-[#132337] border rounded-lg"
    :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'"
  >
    <div class="text-center">
      <div class="flex items-center justify-center pt-3">
        <img
          class="rounded-full w-20 h-20"
          src="../../assets/images/VNE-Rainbow-2-3983-1585305448.jpg"
          alt=""
        />
      </div>
      <div class="mt-[17px] mb-[23px]">
        <h2 class="font-bold">Duran Clayton</h2>
        <p>UX/UI Design</p>
      </div>
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      :theme="$colorMode.value === 'dark' ? 'dark' : 'light'"
      mode="inline"
      class="!border-0 dark:!bg-[#6c819b] dark:!text-white overflow-auto h-5/6 border rounded-2xl"
      :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            <span>Thông tin cá nhân</span>
          </span>
        </template>
        <a-menu-item key="1">
          <NuxtLink
            to="/account/account-manager"
            class="flex items-center gap-2"
          >
            Quản lý tài khoản
          </NuxtLink>
        </a-menu-item>

        <a-menu-item key="2">
          <NuxtLink
            to="/account/account-setting"
            class="flex items-center gap-2"
          >
            Cài đặt tài khoản
          </NuxtLink>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item key="key5">
        <NuxtLink to="/account/order-manager" class="flex items-center gap-2">
          <IoMdGift class="text-2xl" />
          <span>Quản lý đơn hàng</span>
        </NuxtLink>
      </a-menu-item>

      <a-menu-item key="key6">
        <NuxtLink to="/" class="flex items-center gap-2">
          <IoMdPeople class="text-2xl" />
          <span>Mạng xã hội</span>
        </NuxtLink>
      </a-menu-item>

      <a-menu-item key="key7">
        <NuxtLink to="/" class="flex items-center gap-2">
          <IoMdNotificationsOutline class="text-2xl" />
          <span>Thông báo</span>
        </NuxtLink>
      </a-menu-item>

      <a-menu-item key="key4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <IoIosKey class="text-2xl" />
          <span>Đổi mật khẩu</span>
        </NuxtLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IoIosReturnLeft,
  IoIosCog,
  IoMdPerson,
  IoMdPeople,
  IoMdNotificationsOutline,
  IoIosKey,
  IoMdGift,
} from "vue3-icons/io";
const props = defineProps<{
  collapsed: boolean;
}>();
const selectedKeys = ref<string[]>(["sub1"]);
</script>
