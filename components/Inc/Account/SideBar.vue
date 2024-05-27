<template>
  <a-layout-sider
    v-model:collapsed="props.collapsed"
    :trigger="null"
    collapsible
    class="dark:!bg-[#132337] rounded-lg bg-[#f9f9f9] shadow-md shadow-gray-300 !w-fit !max-w-none"
    :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'"
  >
    <div class="text-center">
      <div class="flex items-center justify-center pt-3">
        <img
          class="rounded-full w-20 h-20"
          src="../../../assets/images/VNE-Rainbow-2-3983-1585305448.jpg"
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
          <span class="flex items-center gap-1">
            <UIcon name="i-ant-design-user-outlined" class="text-base" />
            <span>Thông tin cá nhân</span>
          </span>
        </template>
        <a-menu-item key="2">
          <NuxtLink to="/account" class="flex items-center gap-2">
            Quản lý tài khoản
          </NuxtLink>
        </a-menu-item>

        <a-menu-item key="3">
          <NuxtLink to="/account/account-setting"> Cài đặt tài khoản </NuxtLink>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub2">
        <template #title>
          <span class="flex items-center gap-1">
            <UIcon name="i-material-symbols-post-add" class="text-base" />
            <span>Đóng góp bài viết</span>
          </span>
        </template>
        <a-menu-item key="4">
          <NuxtLink to="/account" class="flex items-center gap-2">
            Bài viết của bạn
          </NuxtLink>
        </a-menu-item>

        <a-menu-item key="5">
          <NuxtLink
            to="/account/account-setting"
            class="flex items-center gap-2"
          >
            Bài viết đã bình luận
          </NuxtLink>
        </a-menu-item>

        <a-menu-item key="6">
          <NuxtLink
            to="/account/account-setting"
            class="flex items-center gap-2"
          >
            Bài viết đang chờ duyệt
          </NuxtLink>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item key="7">
        <NuxtLink to="/account/order-manager" class="flex items-center gap-2">
          <UIcon name="i-tabler-credit-card-pay" class="text-base" />
          <span>Quản lý ví</span>
        </NuxtLink>
      </a-menu-item>

      <a-menu-item key="8">
        <NuxtLink to="/account/order-manager" class="flex items-center gap-2">
          <UIcon name="i-bi-basket" class="text-base" />
          <span>Quản lý đơn hàng</span>
        </NuxtLink>
      </a-menu-item>

      <a-menu-item key="9">
        <NuxtLink to="/reset-password" class="flex items-center gap-2">
          <UIcon name="i-carbon-password" class="text-base" />
          <span>Đổi mật khẩu</span>
        </NuxtLink>
      </a-menu-item>

      <a-menu-item key="10">
        <NuxtLink to="/" class="flex items-center gap-2">
          <UIcon name="i-tabler-logout-2" class="text-base" />
          <span>Đăng xuất</span>
        </NuxtLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapsed: boolean;
}>();
const selectedKeys = ref<string[]>(["sub1"]);
</script>
