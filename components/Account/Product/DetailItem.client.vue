<template>
  <div class="w-full space-y-4">
    <div class="bg-white w-full h-fit p-4 rounded-lg border border-rtgray-50">
      <div class="flex pb-1 gap-2">
        <div>
          <img class="w-full h-[20px]" src="../../../assets/images/icon-standing.svg" alt="" />
        </div>
        <div class="px-1">
          <img class="w-full h-[20px]" src="../../../assets/images/icon-real.svg" alt="" />
        </div>
        <div class="flex gap-2 text-sm font-normal">
          <p>Tác giả:</p>
          <p class="text-rtprimary">
            {{ bookStore?.book?.book?.author?.author }}
          </p>
        </div>
      </div>

      <div class="font-bold text-2xl pb-1">
        {{ bookStore?.book?.book?.title }} -
        {{ bookStore?.book?.cardboard === "soft" ? "Bìa mềm" : "Bìa cứng" }} -
        {{ bookStore?.book?.book_version }}
      </div>
      <div class="flex gap-5 text-sm mb-2">
        <div>
          <span>Danh mục: </span>
          <span> {{ bookStore?.book?.book?.category?.name }} </span>
        </div>
        <div>
          <span>Tủ sách: </span>
          <span> {{ bookStore?.book?.book?.category?.name }} </span>
        </div>
        <div>
          <span>Mã kệ: </span>
          <span> {{ bookStore?.book?.book?.sku_generated }} </span>
        </div>
      </div>
      <div class="flex gap-3">
        <p class="text-sm font-medium">
          {{ bookStore?.book?.average_rate }} sao
        </p>
        <CommonRating :rating="bookStore?.book?.average_rate" />
        <p class="text-[#787878] text-sm">
          ( {{ bookStore?.book?.rating_total }} đánh giá)
        </p>
      </div>
      <div class="flex items-center gap-3 pt-1">
        <p class="font-bold text-2xl">
          {{
            new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(bookStore?.book?.price)
          }}
        </p>
      </div>
    </div>

    <div class="bg-white w-full h-fit p-4 rounded-lg border border-rtgray-50">
      <div class="font-bold text-base pb-3">
        <div>Mô tả sản phẩm</div>
      </div>

      <div class="text-sm">
        <div class="flex border-b border-rtgray-50 pb-1">
          <p class="w-1/2 text-rtgray-100">Công ty phát hành</p>
          <p class="w-1/2">{{ bookStore?.book?.issuing_company }}</p>
        </div>
        <div class="flex border-b border-rtgray-50 p-1">
          <p class="w-1/2 text-rtgray-100">Loại bìa</p>
          <p class="w-1/2">
            {{ bookStore?.book?.cardboard === "soft" ? "Bìa mềm" : "Bìa cứng" }}
          </p>
        </div>
        <div class="flex border-b border-rtgray-50 p-1">
          <p class="w-1/2 text-rtgray-100">Số trang</p>
          <p class="w-1/2">{{ bookStore?.book?.total_page }}</p>
        </div>
        <div class="flex border-b border-rtgray-50 p-1">
          <p class="w-1/2 text-rtgray-100">Nhà xuất bản</p>
          <p class="w-1/2">{{ bookStore?.book?.publishing_company?.name }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white w-full h-fit p-4 rounded-lg border border-rtgray-50">
      <div class="font-semibold text-base pb-2">
        <div>Thông tin chi tiết</div>
      </div>
      <div class="">
        <div class="relative" :class="!viewMore && 'line-clamp-6'" v-html="bookStore?.book?.book?.description"></div>
        <button @click="viewMore = !viewMore"
          class="flex justify-center items-center gap-2 text-[#189EFF] hover:text-orange-400 mx-auto text-sm font-normal pt-4">
          <span>{{ viewMore ? "Rút gọn" : "Xem thêm" }}</span>
          <UIcon name="i-material-symbols-keyboard-arrow-down-rounded" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bookStore = useBookPublicStore();
const viewMore = ref(false);
</script>
