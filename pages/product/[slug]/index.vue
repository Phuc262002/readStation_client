<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
    <div class="flex gap-6">
      <div class="w-2/6">
        <ProductDetailImage />
      </div>
      <div class="w-4/6">
        <ProductDetailItem />
      </div>
      <div class="w-2/6">
        <ProductDetailPayment :book="book"  v-for="(book, index) in dataBooks?.books"
        :key="index" />
      </div>
    </div>
  </div>
</template>

<script setup>
const bookstore = useBookStore();
    const dataBooks = ref({});
    const isLoading = ref(false);

    useAsyncData(async () => {
      isLoading.value = true;
      try {
        const response = await bookstore.getAllBooks();
        dataBooks.value = response?.data?._rawValue?.data;
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    });
</script>