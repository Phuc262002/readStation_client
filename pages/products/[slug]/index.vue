<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
    <div class="flex gap-6">
      <div class="w-2/6">
        <AccountProductImage :book="bookStore.book" />
      </div>
      <div class="w-4/6">
        <AccountProductDetailItem :book="bookStore.book" />
      </div>
      <div class="w-2/6">
        <AccountProductPayment :book="bookStore.book" />
      </div>
    </div>
    <div class="mt-5">
      <h2 class="font-bold text-3xl">Có thể bạn sẽ thích</h2>
      <div>
        <div class="py-5 border-b">
          <NuxtLink>
            <div class="flex flex-col gap-5 px-5 border-x">
              <div class="mx-auto">
                <img class="rounded-lg w-[180px] h-[284px]" src="" alt="" />
              </div>

              <div class="flex flex-col gap-3">
                <div class="text-xl font-bold hover:text-[#f65d4e] line-clamp">
                  <!-- {{ props?.book?.book?.original_title }} -->
                </div>
                <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                  <!-- {{ props?.book?.book_version }} -->
                </div>
                <div class="flex justify-start">
                  <!-- <CommonRating :rating="props?.book?.average_rate" /> -->
                </div>
                <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                  <!-- {{ props?.book?.book?.author?.author }} -->
                </div>
                <div class="text-orange-600 font-extrabold text-xl">
                  <!-- {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(props?.book?.price)
                  }} -->
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bookStore = useBookPublicStore();
const route = useRoute();
const slug = route.params.slug;
const current = ref(1);

useAsyncData(async () => {
  await bookStore.getAllBooks({
    // page: current.value;
  });
});

useAsyncData(async () => {
  try {
    await bookStore.getOneBook(slug as string);
  } catch (error) {
    console.error("error", error);
  }
});
</script>
