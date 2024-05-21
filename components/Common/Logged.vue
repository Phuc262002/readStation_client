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
        <a-menu>
          <nuxt-link to="/account">
            <a-menu-item key="1"> Quản lí tài khoản </a-menu-item>
          </nuxt-link>
          <nuxt-link to="/account/order-manager">
            <a-menu-item key="2"> Quản lí đơn hàng </a-menu-item>
          </nuxt-link>
          <a-menu-item key="3"> Đăng xuất </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
