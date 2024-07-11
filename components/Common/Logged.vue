<template>
  <div class="ml-2 cursor-pointer">
    <a-dropdown :trigger="['click']" placement="bottomRight">
      <div class="flex justify-center items-center gap-3 text-base">
        <a-avatar size="large" :src="authStore.authUser?.user?.avatar" alt="" />
      </div>
      <template #overlay>
        <a-menu class="px-8 w-[250px]">
          <nuxt-link to="">
            <a-menu-item key="6">
              <span class="flex items-center gap-2">
                <div>
                  <a-avatar
                    class="w-10 h-10"
                    :src="authStore.authUser?.user?.avatar"
                    alt=""
                  />
                </div>
                <div>
                  <div class="block font-semibold text-15">
                    {{ authStore?.authUser?.user?.fullname }}
                  </div>
                  <div class="text-slate-500 dark:text-zink-200">
                    <a-tag :bordered="false" class="font-bold" color="purple">{{
                      authStore?.authUser?.user?.role?.name
                    }}</a-tag>
                  </div>
                </div>
              </span>
            </a-menu-item>
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full my-2"></div>
          <nuxt-link to="/account">
            <a-menu-item key="1">
              <span class="flex items-center gap-2">
                <UIcon name="i-ant-design-user-outlined" />
                <span>Quản lý tài khoản </span>
              </span>
            </a-menu-item>
          </nuxt-link>
          <nuxt-link to="/account/manager/account-setting">
            <a-menu-item key="2">
              <span class="flex items-center gap-2">
                <UIcon name="i-material-symbols-light-settings" />
                <span>Cài đặt</span>
              </span></a-menu-item
            >
          </nuxt-link>
          <nuxt-link
            to="/admin"
            v-if="
              authStore.authUser?.user?.role?.name === 'admin' ||
              authStore.authUser?.user?.role?.name === 'manager'
            "
          >
            <a-menu-item key="11">
              <span class="flex items-center gap-2">
                <UIcon name="i-material-symbols-light-webhook-rounded" />
                <span>Quản trị Website</span>
              </span></a-menu-item
            >
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full my-2"></div>
          <nuxt-link to="/account/order">
            <a-menu-item key="3"
              ><span class="flex items-center gap-2">
                <UIcon
                  name="i-material-symbols-light-shopping-bag-outline-sharp"
                />
                <span>Quản lý đơn hàng</span>
              </span>
            </a-menu-item>
          </nuxt-link>
          <nuxt-link to="/account/balce">
            <a-menu-item key="4"
              ><span class="flex items-center gap-2">
                <UIcon name="i-ph-wallet-light" />
                <span>Quản lý số dư</span>
              </span></a-menu-item
            >
          </nuxt-link>
          <div class="border-solid border border-gray-200 w-full my-2"></div>
          <a-menu-item key="5" @click="logout">
            <span class="flex items-center gap-2">
              <UIcon name="i-iconoir-log-out" />
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
