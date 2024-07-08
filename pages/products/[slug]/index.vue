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
      <h2 class="font-bold text-xl">Có thể bạn sẽ thích</h2>
      <div class="flex mt-10">
        <NuxtLink class="grid grid-cols-6 gap-5">
          <div
            class="flex flex-col gap-5 p-3 border rounded-lg"
            v-for="(book, index) in limitBook"
            :key="index"
          >
            <div class="mx-auto">
              <img
                class="rounded-lg w-[180px] h-[284px]"
                :src="book?.poster"
                alt=""
              />
            </div>

            <div class="flex flex-col gap-3">
              <div class="text-xl font-bold hover:text-[#f65d4e] line-clamp">
                {{ book?.book?.title }}
              </div>
              <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                {{ book?.book_version }}
              </div>
              <div class="flex justify-start">
                <CommonRating :rating="book?.average_rate" />
              </div>
              <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                {{ book?.book?.author?.author }}
              </div>
              <div class="text-orange-600 font-extrabold text-xl">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(book?.price)
                }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bookStore = useBookPublicStore();
const route = useRoute();
const slug = route.params.slug;
const current = ref(1);

const limitBook = computed(() => bookStore?.books?.books?.slice(0, 6));
useAsyncData(async () => {
  await bookStore.getAllBooks({});
});

useAsyncData(async () => {
  try {
    await bookStore.getOneBook(slug as string);
  } catch (error) {
    console.error("error", error);
  }
});
</script>
