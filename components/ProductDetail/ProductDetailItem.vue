<template>
  <div class="w-full space-y-4">
    <div class="bg-white w-full h-fit p-4 rounded-lg border border-rtgray-50">
      <div class="flex pb-1">
        <div>
          <img
            class="w-full h-[20px]"
            F
            src="https://salt.tikicdn.com/ts/upload/94/36/e7/c5297f3fad0a83fb56f98be877904467.png"
            alt=""
          />
        </div>
        <div class="px-1">
          <img
            class="w-full h-[20px]"
            src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
            alt=""
          />
        </div>
        <div class="flex gap-2 text-sm font-normal">
          <p>Tác giả:</p>
          <p class="text-rtprimary">
            {{ bookStore?.book?.book?.author?.author }}
          </p>
        </div>
      </div>
      <div class="font-bold text-2xl pb-1">
        {{ bookStore?.book?.book?.title }}
      </div>
      <div class="flex gap-3">
        <p class="text-sm font-medium">4.8</p>
        <CommonRating rating="3.5" />
        <p class="text-[#787878] text-sm">
          ( {{ bookStore?.book?.rating_total }} đánh giá)
        </p>
      </div>
      <div class="flex items-center gap-3 pt-1">
        <p class="font-bold text-2xl">{{ bookStore?.book?.price }}</p>
        <p
          class="flex justify-center items-center bg-[#F5F5FA] h-[18px] rounded-md text-xs font-normal px-1"
        >
          - {{ bookStore?.book?.hire_percent }} %
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
          <p class="w-1/2">{{ bookStore?.book?.cardboard }}</p>
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
        <p class="line-clamp-6 relative">
          {{ bookStore?.book?.book?.description }}
        </p>
        <button
          class="flex justify-center items-center gap-2 text-[#189EFF] mx-auto text-sm font-normal pt-4"
        >
          <span> Xem thêm</span>
          <UIcon name="i-material-symbols-keyboard-arrow-down-rounded" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bookStore = useBookStore();
</script>
