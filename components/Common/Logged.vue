<template>
  <div class="ml-2 cursor-pointer">
    <a-dropdown :trigger="['click']" placement="bottomRight">
      <div class="flex justify-center items-center gap-3 text-base">
        <a-avatar
          size="large"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNwja6CBPcvCyFKxcFn690YYPt1VZW-CtEM3EiDz-fw&s"
          alt=""
        />
      </div>
      <template #overlay>
        <a-menu class="px-8 w-[200px]">
          <nuxt-link to="">
            <a-menu-item key="6">
              <span class="flex items-center gap-2">
                <a-avatar
                  size="large"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNwja6CBPcvCyFKxcFn690YYPt1VZW-CtEM3EiDz-fw&s"
                  alt=""
                />
                <div class="flex">
                  <div>
                    <div class="block font-semibold text-15 pl-2">Kiệt</div>
                    <div class="text-slate-500 dark:text-zink-200">
                      <a-tag :bordered="false" color="purple">Admin</a-tag>
                    </div>
                  </div>
                </div>
              </span>
            </a-menu-item>
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full my-2"></div>
          <nuxt-link to="/account">
            <a-menu-item key="1">
              <span class="flex items-center gap-2">
                <UIcon name="i-ant-design-user-outlined" class="text-base" />
                <span>Quản lí tài khoản </span>
              </span>
            </a-menu-item>
          </nuxt-link>
          <nuxt-link to="/account/account-setting">
            <a-menu-item key="2">
              <span class="flex items-center gap-2">
                <UIcon
                  name="i-material-symbols-light-settings"
                  class="text-base"
                />
                <span class="mt-1">Cài đặt</span>
              </span></a-menu-item
            >
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full my-2"></div>
          <nuxt-link to="/account/order-manager">
            <a-menu-item key="3"
              ><span class="flex items-center gap-2">
                <UIcon name="i-material-symbols-light-shopping-bag-outline-sharp" class="text-base" />
                <span>Quản lí đơn hàng</span>
              </span>
            </a-menu-item>
          </nuxt-link>
          <nuxt-link to="/">
            <a-menu-item key="4"
              ><span class="flex items-center gap-2 mt-1">
                <UIcon name="i-ph-wallet-light" class="text-base" />
                <span>Quản lí ví</span>
              </span></a-menu-item
            >
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full my-2"></div>
          <a-menu-item key="5" @click="logout" class="mt-1">
            <span class="flex items-center gap-2">
                <UIcon name="i-iconoir-log-out" class="text-base" />
                <span>Đăng xuất</span>
              </span>
          </a-menu-item>
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
