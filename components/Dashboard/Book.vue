<template>
  <div
    class="flex justify-between cursor-pointer hover:bg-[#f1f1f1] p-2 hover:rounded-md"
  >
    <div class="flex justify-center items-start">
      <img
        class="w-20 h-20 object-cover rounded-md"
        src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244875805.jpg"
        alt=""
      />
      <div class=" ">
        <p>{{ props?.dashboard?.book?.title }}</p>
        <p>
          {{ props?.dashboard?.book_version }} -
          <span> {{ props?.dashboard?.book?.author?.author }}</span>
        </p>
        <p class="flex items-center">
          <span>4.8</span> <span><IconYellowStar /></span>
        </p>
      </div>
    </div>
    <p class="flex items-start">200 lượt thuê</p>
  </div>
  <hr class="my-2" />
</template>
<script setup>
const props = defineProps(["dashboard"]);
</script>
