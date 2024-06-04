<template>
  <div>
    <template>
      <a-layout-sider
        v-model:collapsed="props.collapsed"
        :trigger="null"
        collapsible
        class="!fixed h-full !bg-white dark:!bg-[#132337] !border-r border-r-[#e2e8f0]"
        :class="
          props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'
        "
      >
        <div class="bg-red-400 h-8 m-4" />
        <a-menu
          v-model:selectedKeys="selectedKeys"
          :theme="$colorMode.value === 'dark' ? 'dark' : 'light'"
          mode="inline"
          class="!border-0 dark:!bg-[#6c819b] dark:!text-white overflow-auto h-5/6"
          :class="
            props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'
          "
        >
          <a-menu-item key="1" @click="navigateTo('/admin/dashboards')">
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
            <a-menu-item
              key="24"
              @click="navigateTo('/admin/wallet/create-wallet')"
              >Thêm ví</a-menu-item
            >
            <a-menu-item
              key="62"
              @click="navigateTo('/admin/wallet/trash-wallet')"
              >Thùng rác</a-menu-item
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
              key="12"
              @click="navigateTo('/admin/product-manager/product')"
              >Tất cả đơn hàng</a-menu-item
            >
            <a-menu-item
              key="11"
              @click="navigateTo('/admin/product-manager/create-product')"
              >Thêm đơn hàng</a-menu-item
            >
            <a-menu-item
              key="61"
              @click="navigateTo('/admin/product-manager/trash-product')"
              >Thùng rác</a-menu-item
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
            <a-menu-item
              key="43"
              @click="navigateTo('/admin/comment/recent-comment')"
              >Bình luận gần đây</a-menu-item
            >
            <a-menu-item
              key="112"
              @click="navigateTo('/admin/comment/trash-comment')"
              >Thùng rác</a-menu-item
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
              @click="navigateTo('/admin/book-case/trash-bookshelves')"
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
                <span>Quản lý danh mục</span>
              </span>
            </template>
            <a-menu-item key="20" @click="navigateTo('/admin/category/product')"
              >Danh mục sản phẩm</a-menu-item
            >
            <a-menu-item key="21" @click="navigateTo('/admin/category/post')"
              >Danh mục bài viết</a-menu-item
            >

            <a-menu-item key="58" @click="navigateTo('/admin/category/trash')"
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
            <a-menu-item key="32" @click="navigateTo('/admin/author')"
              >Tất cả tác giả</a-menu-item
            >
            <a-menu-item
              key="35"
              @click="navigateTo('/admin/author/add-author')"
              >Thêm tác giả</a-menu-item
            >

            <a-menu-item
              key="34"
              @click="navigateTo('/admin/author/trash-author')"
              >Thùng rác</a-menu-item
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
            <a-menu-item
              key="36"
              @click="navigateTo('/admin/publishing-company')"
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
    <div>
      <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
          <div class="grow">
              <h5 class="text-xl text-[#1e293b] font-semibold">Thêm sách</h5>
          </div>
          <CommonBreadcrumAdmin />
      </div>

      <!-- Đây là phần code mẫu body -->
      <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
          <div class="flex flex-col gap-10">
              <!-- Sách -->
              <div class="flex flex-col gap-5">
                  <div class="text-xl font-bold">Sách</div>
                  <div class="flex flex-col gap-2">
                      <div class="grid grid-rows-2 gap-5 ">
                          <div class="grid grid-cols-3 gap-10">
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Tác giả</label>
                                  <a-input type="text" class="border p-2 rounded-md" placeholder="Tác giả" />
                              </div>
                              <div>
                                  <div class="flex flex-col gap-2">
                                      <label class="text-sm font-semibold" for="">Tên sách</label>
                                      <a-input type="text" class="border p-2 rounded-md" placeholder="Tên sách" />
                                  </div>
                              </div>
                              <div>
                                  <div class="flex flex-col gap-2">
                                      <label class="text-sm font-semibold" for="">Tên góc</label>
                                      <a-input type="text" class="border p-2 rounded-md" placeholder="Tên góc" />
                                  </div>
                              </div>
                          </div>
                          <div class="grid grid-cols-3 gap-10">
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Danh mục</label>
                                  <a-select v-model:value="valueCategory" show-search placeholder="Mã danh mục"
                                      :options="optionsCategory" :filter-option="filterOption" @focus="handleFocus"
                                      @blur="handleBlur" @change="handleChange"></a-select>

                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Tủ sách</label>
                                  <a-select v-model:value="valueShelve" show-search placeholder="Mã kệ sách"
                                      :options="optionsShelve" :filter-option="filterOption" @focus="handleFocus"
                                      @blur="handleBlur" @change="handleChange"></a-select>

                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Sách nổi bật</label>
                                  <a-checkbox v-model:checked="checked">Nổi bật</a-checkbox>
                              </div>
                          </div>
                      </div>
                      <div class="flex w-full">
                          <div class="flex flex-col gap-4 w-full">
                              <label class="text-sm font-semibold" for="">Mô tả</label>
                              <a-textarea class="h-28" v-model:value="description_sumamry" placeholder="Mô tả ngắn"
                                  allow-clear />
                          </div>
                      </div>
                      <div class="flex w-full">
                          <div class="flex flex-col gap-4 w-full">
                              <label class="text-sm font-semibold" for="">Mô tả chi tiết</label>
                              <CommonCKEditor />
                          </div>
                      </div>

                  </div>

              </div>
              <div class="border"></div>
              <!-- Sách chi tiết -->
              <div class="flex flex-col gap-5">
                  <div class="text-xl font-bold">Sách chi tiết</div>
                  <div class="flex flex-col gap-2">
                      <div class="grid grid-rows-1">
                          <div class="grid grid-cols-2 gap-10">
                              <div class="flex flex-col gap-2"><label class="text-sm font-semibold" for="">Poster</label>
                                  <a-upload v-model:file-list="fileList" list-type="picture" :max-count="1"
                                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                      <a-button class="flex justify-between gap-3 items-center">
                                          <upload-outlined></upload-outlined>
                                          <h1>Upload Poster</h1>
                                      </a-button>
                                  </a-upload>
                              </div>
                              <div class="flex flex-col gap-2"><label class="text-sm font-semibold" for="">Hình ảnh chi tiết</label>
                                  <a-upload v-model:file-list="fileList2" list-type="picture" :max-count="3"
                                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                      <a-button class="flex justify-between gap-3 items-center">
                                          <upload-outlined></upload-outlined>
                                          <h1>Upload hình ảnh chi tiết</h1>
                                      </a-button>
                                  </a-upload>
                              </div>
                          </div>
                      </div>
                      <div class="grid grid-rows-4 gap-5 my-5">
                          <div class="grid grid-cols-4 gap-10">
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Phiên bản sách</label>
                                  <a-input type="text" class="border p-2 rounded-md" placeholder="Phiên bản sách" />
                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Giá</label>
                                  <a-input type="number" class="border p-2 rounded-md" placeholder="Giá" />
                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Thuế</label>
                                  <a-input type="number" class="border p-2 rounded-md" placeholder="Thuế" />
                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Số lượng</label>
                                  <a-input type="number" class="border p-2 rounded-md" placeholder="Số lượng" />
                              </div>
                          </div>
                          <div class="grid grid-cols-4 gap-10">
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Ngày xuất bản</label>
                                  <a-input type="date" class="border p-2 rounded-md" placeholder="Ngày xuất bản" />
                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Công ty phát hành</label>
                                  <a-input type="text" class="border p-2 rounded-md"
                                      placeholder="Công ty phát hành" />
                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Người biên dịch</label>
                                  <a-input type="text" class="border p-2 rounded-md" placeholder="Người biên dịch" />
                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Loại bìa</label>
                                  <a-select v-model:value="valueCardboard" show-search placeholder="Loại bìa"
                                      :options="optionsCardboard" :filter-option="filterOption" @focus="handleFocus"
                                      @blur="handleBlur" @change="handleChange"></a-select>
                              </div>
                          </div>
                          <div class="grid grid-cols-4 gap-10">
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Số trang</label>
                                  <a-input type="number" class="border p-2 rounded-md" placeholder="Số trang" />
                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Ngôn ngữ</label>
                                  <a-input type="text" class="border p-2 rounded-md" placeholder="Ngôn ngữ" />
                              </div>
                              <div class="flex flex-col gap-2">
                                  <label class="text-sm font-semibold" for="">Kích thước sách</label>
                                  <a-input type="text" class="border p-2 rounded-md" placeholder="Kích thước sách" />
                              </div>
                          </div>
                      </div>

                  </div>

              </div>
              <div class="flex justify-end">
                  <button class="bg-[#54cc54] w-1/6 p-1 text-white text-xl rounded-lg">
                      Thêm
                  </button>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  collapsed: boolean;
}>();
const selectedKeys = ref<string[]>(["1"]);

const checked = ref(false);
const description_sumamry = ref("");
const fileList = ref([]);
const fileList2 = ref([]);
const optionsCategory = ref([
    {
        value: "Loại 1",
        label: "Khoa học tự nhiên",
    },
    {
        value: "Loại 2",
        label: "Khoa học xã hội",
    },
]);
const optionsShelve = ref([
    {
        value: "Kệ 1",
        label: "Kệ 1",
    },
    {
        value: "Kệ 2",
        label: "Kệ 2",
    },
]);
const optionsCardboard = ref([
    {
        value: "Bìa cứng",
        label: "Bìa cứng",
    },
    {
        value: "Bìa mềm",
        label: "Bìa mềm",
    },
]);
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const handleBlur = () => {
    console.log("blur");
};
const handleFocus = () => {
    console.log("focus");
};
const filterOption = (input, option) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>

<style scoped>
:deep(.ant-menu-title-content) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
