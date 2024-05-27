<template>
  <a-layout-sider
    v-model:collapsed="props.collapsed"
    :trigger="null"
    collapsible
    class="!fixed h-full !bg-white dark:!bg-[#132337] !border-r border-r-[#e2e8f0]"
    :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'"
  >
    <div class="bg-red-400 h-8 m-4" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      :theme="$colorMode.value === 'dark' ? 'dark' : 'light'"
      mode="inline"
      class="!border-0 dark:!bg-[#6c819b] dark:!text-white overflow-auto h-5/6"
      :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'"
    >
      <NuxtLink to="/admin/dashboards">
        <a-menu-item key="1">
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-light-space-dashboard" />
            <span>Dashboards</span>
          </span>
        </a-menu-item>
      </NuxtLink>

      <!-- <a-menu-item key="2">
                    <desktop-outlined />
                    <span>Option 2</span>
                </a-menu-item> -->
      <a-sub-menu key="sub1">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-person-rounded" />
            <span>Quản lí người dùng</span>
          </span>
        </template>
        <NuxtLink to="/admin/user">
          <a-menu-item key="4">Tất cả người dùng</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/user/create-user">
          <a-menu-item key="3">Tạo người dùng</a-menu-item>
        </NuxtLink>

        <a-menu-item key="5">Tài khoản chờ duyệt</a-menu-item>
        <a-menu-item key="6">Thêm mã giảm giá cho người dùng</a-menu-item>
        <a-menu-item key="7">Thống kê người giới thiệu</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-ant-design-product-outlined" />
            <span>Quản lí sách</span>
          </span>
        </template>
        <NuxtLink to="/admin/book/create-book">
          <a-menu-item key="8">Thêm sách</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/book">
          <a-menu-item key="9">Tất cả sách</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/book/reviewbook-manager">
        <a-menu-item key="10">Quản lí đánh giá</a-menu-item>
      </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-icon-park-outline-ad-product" />
            <span>Quản lí đơn hàng</span>
          </span>
        </template>
        <NuxtLink to="/admin/product-manager/create-product">
          <a-menu-item key="11">Thêm đơn hàng</a-menu-item>
        </NuxtLink>

        <NuxtLink to="/admin/product-manager/product">
          <a-menu-item key="12">Tất cả đơn hàng</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <!-- <a-sub-menu key="sub4">
        <template #title>
          <span>
            <UIcon name="i-material-symbols-light-space-dashboard" />
            <span>Quản lí mã giảm giá</span>
          </span>
        </template>
        <a-menu-item key="13">Thêm mã giảm giá</a-menu-item>
        <a-menu-item key="14">Tất cả mã giảm giá</a-menu-item>
      </a-sub-menu> -->
      <a-sub-menu key="sub5">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-light-post" />
            <span>Quản lí bài viết</span>
          </span>
        </template>
        <NuxtLink to="/admin/post">
          <a-menu-item key="40">Tất cả bài viết</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/post/add-post">
          <a-menu-item key="13">Thêm bài viết</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/post/post-await">
          <a-menu-item key="14">Bài viết chờ duyệt</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/post/trash-post">
          <a-menu-item key="111">Thùng rác</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub40">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-light-post" />
            <span>Quản lí bình luận</span>
          </span>
        </template>
        <NuxtLink to="/admin/comment">
          <a-menu-item key="42">Tất cả bình luận</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/comment/recent-comment">
          <a-menu-item key="43">Bình luận gần đây</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/comment/trash-comment">
          <a-menu-item key="112">Thùng rác</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub6">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-book-5" />
            <span>Quản lí tủ sách</span>
          </span>
        </template>
        <NuxtLink to="/admin/book-case">
          <a-menu-item key="17">Tất cả tủ sách</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/book-case/trash-bookcase">
          <a-menu-item key="16">Thùng rác</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub7">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-bi-bookshelf" />
            <span>Quản lí kệ sách</span>
          </span>
        </template>
        <NuxtLink to="/admin/book-shelves">
          <a-menu-item key="19">Tất cả kệ sách</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/book-shelves/trash-bookshelves">
          <a-menu-item key="18">Thùng rác</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub8">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-category-rounded" />
            <span>Quản lí danh mục</span>
          </span>
        </template>
        <NuxtLink to="/admin/category/product">
          <a-menu-item key="20">Danh mục sản phẩm</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/category/post">
          <a-menu-item key="21">Danh mục bài viết</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub9">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-person-rounded" />
            <span>Quản lí tác giả</span>
          </span>
        </template>
        <NuxtLink to="/admin/author">
          <a-menu-item key="22">Tất cả tác giả</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/author/add-author">
          <a-menu-item key="35">Thêm tác giả</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/author/trash-author">
          <a-menu-item key="23">Thùng rác</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub10">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-person-rounded" />
            <span>Quản lí nhà xuất bản</span>
          </span>
        </template>
        <NuxtLink to="/admin/publish">
          <a-menu-item key="22">Tất cả nhà xuất bản</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/publish/add-publish">
          <a-menu-item key="36">Thêm nhà xuất bản</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/trash-publish">
          <a-menu-item key="23">Thùng rác</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub11">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-ri-bill-fill" />
            <span>Quản lí hóa đơn nhập hàng</span>
          </span>
        </template>
        <NuxtLink to="/admin/manager-bill/create-bill">
          <a-menu-item key="22">Thêm hóa đơn</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/manager-bill">
          <a-menu-item key="23">Tất cả hóa đơn</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub12">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-wallet" />
            <span>Quản lí ví</span>
          </span>
        </template>
        <NuxtLink to="/admin/wallet/create-wallet">
          <a-menu-item key="24">Tạo ví</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/wallet">
          <a-menu-item key="25">Tất cả ví</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  collapsed: boolean;
}>();
const selectedKeys = ref<string[]>(["1"]);
</script>
