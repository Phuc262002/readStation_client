<template>
  <a-layout-sider
    v-model:collapsed="props.collapsed"
    :trigger="null"
    collapsible
    class="dark:!bg-[#132337] rounded-lg bg-[#f9f9f9] shadow-md shadow-gray-300 !w-fit !max-w-none"
    :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'"
  >
    <div class="text-center">
      <div class="flex items-center justify-center pt-3 relative">
        <img
          class="rounded-full w-20 h-20"
          :src="authStore?.authUser?.user?.avatar"
          alt=""
        />
        <button
          class="border-none absolute bottom-0 left-[calc(50%+25px)] -translate-x-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
          @click="showModalAdd"
        >
          <CommonAddImg />
        </button>
      </div>
      <AvatarAdd :openModalAdd="openModalAdd" :openModal="CloseModalAdd" />

      <div class="mt-[17px] mb-[23px]">
        <h2 class="font-bold">{{ authStore?.authUser?.user?.fullname }}</h2>
        <a-tag :bordered="false" color="purple" class="font-bold">{{
          authStore?.authUser?.user?.role?.description
        }}</a-tag>
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
          <NuxtLink to="/account/posts-manager" class="flex items-center gap-2">
            Bài viết của bạn
          </NuxtLink>
        </a-menu-item>

        <a-menu-item key="5">
          <NuxtLink to="/account/rep-comment" class="flex items-center gap-2">
            Trả lời bình luận
          </NuxtLink>
        </a-menu-item>

        <a-menu-item key="6">
          <NuxtLink to="/account/your-comment" class="flex items-center gap-2">
            Bài viết đã bình luận
          </NuxtLink>
        </a-menu-item>
      </a-sub-menu>
      <!--  -->
      <NuxtLink
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
      </NuxtLink>

      <a-menu-item key="7">
        <NuxtLink to="/account/credit-manager" class="flex items-center gap-2">
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
        <NuxtLink to="/account/change-password" class="flex items-center gap-2">
          <UIcon name="i-carbon-password" class="text-base" />
          <span>Đổi mật khẩu</span>
        </NuxtLink>
      </a-menu-item>

      <a-menu-item key="10" @click="logout">
        <NuxtLink to="/" class="flex items-center gap-2">
          <UIcon name="i-tabler-logout-2" class="text-base" />
          <span>Đăng xuất</span>
        </NuxtLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script setup lang="ts">
import { useForm } from "vee-validate";
const props = defineProps<{
  collapsed: boolean;
}>();
const selectedKeys = ref<string[]>(["sub1"]);
const changeAvatarRef = ref(null);
const openModalAdd = ref<boolean>(false);

//get API
const data = ref(null);
const authStore = useAuthStore();
const logout = async () => {
  await authStore.logout();
};

const showModalAdd = () => {
  openModalAdd.value = true;
};
const CloseModalAdd = () => {
  openModalAdd.value = false;
};
</script>
