<template>
    <div  class="flex flex-col gap-5 p-5">
        <div>
            <img class="rounded-lg w-40 h-56" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg" alt="">
        </div>
        <div class="flex flex-col gap-3">
            <div class="text-xl font-bold hover:text-[#f65d4e]">{{ dataBooks.title }}</div>
            <div class=" flex justify-start">
                <CommonStar rating="5" />
            </div>
            <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                {{ dataBooks.author.author }}
            </div>
            <div class="text-[#f65d4e] font-extrabold text-xl">
                200.000đ
            </div>
        </div>
    </div>
</template>

<script setup>
const bookstore = useBookStore();
const dataBooks = ref(null);
console.log(dataBooks);
const isLoading = ref(false);
useAsyncData(async () => {
    isLoading.value = true;
    try {
        const response = await bookstore.getAllBooks();
        dataBooks.value = response?.data?._rawValue?.data?.books;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
});
</script>