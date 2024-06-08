<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
    <div class="flex gap-6">
      <div class="w-2/6">
        <ProductDetailImage :book="bookStore.book" />
      </div>
      <div class="w-4/6">
        <ProductDetailItem :book="bookStore.book" />
      </div>
      <div class="w-2/6">
        <ProductDetailPayment />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bookStore = useBookStore();
const route = useRoute();
const slug = route.params.slug;
const isLoading = ref(false);
const dataBooks = ref({});
useAsyncData(async () => {
  isLoading.value = true;
  try {
    const response = await bookStore.getAllBooks();

    dataBooks.value = response?.data?._rawValue?.data;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

useAsyncData(async () => {
  try {
    await bookStore.getOneBook(slug as string);
  } catch (error) {
    console.error("error", error);
  }
});
</script>
