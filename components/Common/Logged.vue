import { useAuthStore } from '../../stores/authStore';
<template>
  <div class="ml-2">
    <a-dropdown :trigger="['click']" placement="bottom">
      <div class="flex justify-center items-center gap-3 text-base">
        <a-avatar
          size="large"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNwja6CBPcvCyFKxcFn690YYPt1VZW-CtEM3EiDz-fw&s"
          alt=""
        />
      </div>
      <template #overlay>
        <a-menu class="p-4">
          <nuxt-link to="">
            <a-menu-item key="1">
              <span class="flex items-center gap-2">
                <a-avatar
                  size="small"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNwja6CBPcvCyFKxcFn690YYPt1VZW-CtEM3EiDz-fw&s"
                  alt=""
                />
                <span>Kiệt</span>
              </span>
            </a-menu-item>
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full"></div>
          <nuxt-link to="/account">
            <a-menu-item key="1">
              <span class="flex items-center gap-2">
                <UIcon name="i-ant-design-user-outlined" class="text-base" />
                <span>Quản lí tài khoản</span>
              </span>
            </a-menu-item>
          </nuxt-link>
          <nuxt-link to="/account/account-setting">
            <a-menu-item key="2">
              <span class="flex items-center gap-2">
                <UIcon
                  name="i-material-symbols-settings-outline"
                  class="text-base"
                />
                <span>Cài đặt</span>
              </span></a-menu-item
            >
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full"></div>
          <nuxt-link to="/account/order-manager">
            <a-menu-item key="3"
              ><span class="flex items-center gap-2">
                <UIcon name="i-bi-basket" class="text-base" />
                <span>Quản lí đơn hàng</span>
              </span>
            </a-menu-item>
          </nuxt-link>
          <nuxt-link to="/">
            <a-menu-item key="4"
              ><span class="flex items-center gap-2">
                <UIcon name="i-ph-wallet-light" class="text-base" />
                <span>Quản lí ví</span>
              </span></a-menu-item
            >
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full"></div>

          <a-menu-item key="5" @click="logout"> Đăng xuất </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script setup>
const authStore = useAuthStore();
const logout = async () => {
  await authStore.logout();
};
</script>
