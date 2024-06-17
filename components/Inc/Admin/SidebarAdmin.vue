<template>
  <a-layout-sider
    v-model:collapsed="props.collapsed"
    :trigger="null"
    collapsible
    class="!fixed h-full !bg-white dark:!bg-[#132337] !border-r border-r-[#e2e8f0]"
    :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'"
  >
    <NuxtLink to="/">
      <div class="p-5">
        <img src="../../../assets/images/Logo.svg" alt="" />
      </div>
    </NuxtLink>

    <a-menu
      v-model:selectedKeys="selectedKeys"
      :theme="$colorMode.value === 'dark' ? 'dark' : 'light'"
      mode="inline"
      class="!border-0 dark:!bg-[#6c819b] dark:!text-white overflow-auto h-5/6"
      :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'"
    >
      <a-menu-item key="1" @click="navigateTo('/admin')">
        <UIcon
          name="i-streamline-dashboard-3"
          :class="props.collapsed && 'anticon anticon-desktop'"
        />
        <span>Dashboards</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-ant-design-user-outlined"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý người dùng</span>
          </span>
        </template>
        <a-menu-item key="4" @click="navigateTo('/admin/user')"
          >Tất cả người dùng</a-menu-item
        >
        <a-menu-item key="3" @click="navigateTo('/admin/user/create-user')"
          >Thêm người dùng</a-menu-item
        >
        <a-menu-item key="5" @click="navigateTo('/admin/user/await-user')"
          >Tài khoản chờ duyệt</a-menu-item
        >
        <a-menu-item key="7" @click="navigateTo('/admin/user/invite-user')"
          >Thống kê người giới thiệu</a-menu-item
        >
        <a-menu-item key="6" @click="navigateTo('/admin/user/trash-user')"
          >Thùng rác</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub12">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-ph-wallet-light"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý ví</span>
          </span>
        </template>
        <a-menu-item key="25" @click="navigateTo('/admin/wallet')"
          >Tất cả ví</a-menu-item
        >
        <a-menu-item key="24" @click="navigateTo('/admin/wallet/create-wallet')"
          >Đóng băng ví</a-menu-item
        >
        
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-material-symbols-light-orders-outline"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý đơn hàng</span>
          </span>
        </template>
        <a-menu-item
          key="11"
          @click="navigateTo('/admin/product-manager/create-product')"
          >Thêm đơn hàng</a-menu-item
        >
        <a-menu-item
          key="12"
          @click="navigateTo('/admin/product-manager/product')"
          >Tất cả đơn hàng</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-streamline-interface-content-book-open-content-books-book-open"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý sách</span>
          </span>
        </template>
        <a-menu-item key="9" @click="navigateTo('/admin/book')"
          >Tất cả sách</a-menu-item
        >
        <a-menu-item key="8" @click="navigateTo('/admin/book/create-book')"
          >Thêm sách</a-menu-item
        >
        <a-menu-item
          key="10"
          @click="navigateTo('/admin/book/reviewbook-manager')"
          >Quản lý đánh giá</a-menu-item
        >
        <a-menu-item key="59" @click="navigateTo('/admin/book/trash-book')"
          >Thùng rác</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub5">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-material-symbols-light-post-outline"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý bài viết</span>
          </span>
        </template>
        <a-menu-item key="40" @click="navigateTo('/admin/post')"
          >Tất cả bài viết</a-menu-item
        >
        <a-menu-item key="13" @click="navigateTo('/admin/post/add-post')"
          >Thêm bài viết</a-menu-item
        >
        <a-menu-item key="14" @click="navigateTo('/admin/post/post-await')"
          >Bài viết chờ duyệt</a-menu-item
        >
        <a-menu-item key="111" @click="navigateTo('/admin/post/trash-post')"
          >Thùng rác</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub40">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-material-symbols-mode-comment-outline-rounded"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý bình luận</span>
          </span>
        </template>
        <a-menu-item key="42" @click="navigateTo('/admin/comment')"
          >Tất cả bình luận</a-menu-item
        >
        
      </a-sub-menu>
      <a-sub-menu key="sub6">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-material-symbols-light-book-4-outline-rounded"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý tủ sách</span>
          </span>
        </template>
        <a-menu-item key="17" @click="navigateTo('/admin/book-case')"
          >Tất cả tủ sách</a-menu-item
        >
        <a-menu-item
          key="16"
          @click="navigateTo('/admin/book-case/trash-bookcase')"
          >Thùng rác</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub7">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-bi-bookshelf"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý kệ sách</span>
          </span>
        </template>
        <a-menu-item key="19" @click="navigateTo('/admin/book-shelves')"
          >Tất cả kệ sách</a-menu-item
        >
        <a-menu-item
          key="18"
          @click="navigateTo('/admin/book-shelves/trash-bookshelves')"
          >Thùng rác</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub8">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-iconamoon-category-thin"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Danh mục sản phẩm</span>
          </span>
        </template>
        <a-menu-item key="20" @click="navigateTo('/admin/categoryBook')"
          >Tất cả danh mục sản phẩm</a-menu-item
        >
        <a-menu-item
          key="58"
          @click="navigateTo('/admin/categoryBook/trash-categoryProduct')"
          >Thùng rác</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub55">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-iconamoon-category-thin"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Danh mục bài viết</span>
          </span>
        </template>
        <a-menu-item key="77" @click="navigateTo('/admin/categoryPost')">
          Tất cả danh mục bài viết</a-menu-item
        >

        <a-menu-item
          key="78"
          @click="navigateTo('/admin/categoryPost/trash-categoryPost')"
          >Thùng rác</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub9">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-ant-design-user-outlined"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý tác giả</span>
          </span>
        </template>
        <a-menu-item key="22" @click="navigateTo('/admin/author/add-author')"
          >Thêm tác giả</a-menu-item
        >
        <a-menu-item key="23" @click="navigateTo('/admin/author')"
          >Tất cả tác giả</a-menu-item
        >
      </a-sub-menu>

      <a-sub-menu key="sub10">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-ant-design-user-outlined"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý nhà xuất bản</span>
          </span>
        </template>
        <a-menu-item key="36" @click="navigateTo('/admin/publishing-company')"
          >Tất cả nhà xuất bản</a-menu-item
        >
        <!-- <a-menu-item key="22" @click="navigateTo('/admin/publishing-company/add-publishing-company')"
          >Thêm nhà xuất bản</a-menu-item
        > -->

        <a-menu-item
          key="23"
          @click="
            navigateTo('/admin/publishing-company/trash-publishing-company')
          "
          >Thùng rác</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub13">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-ant-design-user-outlined"
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Quản lý nhà cung cấp</span>
          </span>
        </template>
        <a-menu-item key="37" @click="navigateTo('/admin/supplier')"
          >Tất cả nhà cung cấp</a-menu-item
        >
        <a-menu-item key="38">Thùng rác</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub11">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon
              name="i-material-symbols-light-order-approve-outline-sharp "
              :class="props.collapsed && 'anticon anticon-desktop'"
            />
            <span>Hóa đơn nhập hàng</span>
          </span>
        </template>
        <a-menu-item key="28" @click="navigateTo('/admin/manager-bill')"
          >Tất cả hóa đơn</a-menu-item
        >
        <a-menu-item
          key="29"
          @click="navigateTo('/admin/manager-bill/create-bill')"
          >Thêm hóa đơn</a-menu-item
        >
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
<style scoped>
:deep(.ant-menu-title-content) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
