<template>
  <div class="py-5 border-b">
    <NuxtLink :to="`/products/${props?.book?.book?.slug}`">
      <div class="flex flex-col gap-5 px-5 border-x">
        <div class="mx-auto">
          <img
            class="rounded-lg w-[180px] h-[284px]"
            :src="props?.book?.poster"
            alt=""
          />
        </div>

        <div class="flex flex-col gap-3">
          <div class="text-xl font-bold hover:text-[#f65d4e]">
            {{ props?.book?.book?.original_title }}
          </div>
          <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
            {{ props?.book?.book_version }}
          </div>
          <div class="flex justify-start">
            <CommonStar :rating="5" />
          </div>
          <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
            {{ props?.book?.book?.author?.author }}
          </div>
          <div class="text-orange-600 font-extrabold text-xl">
            {{ props?.book?.price }} đ
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["book"]);

console.log(props);
</script>
