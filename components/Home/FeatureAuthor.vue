
<template>
    <div class="h-auto mx-auto container md:px-20 px-8">
        <div class="p-10 flex justify-between w-full gap-10">
            <div class="w-1/3 text-right flex flex-col gap-6">
                <div class="text-base text-[#f65d4e]">FEATURED AUTHOR</div>
                <div class="flex flex-col gap-5">
                    <h1 class="text-5xl font-bold">{{ AuthorFeatured.author }}</h1>
                    <p class="text-[#999999]">{{ AuthorFeatured.description}}</p>
                </div>
                <div>
                    <button class="w-1/3 bg-[#f65d4e] text-white p-2 rounded-full font-bold text-base">Xem thông tin</button>
                </div>
            </div>
            <div class="w-1/3">
                <img :src="AuthorFeatured.avatar" alt="">
            </div>
            <div class="w-1/3 flex flex-col gap-2">
                <div class="grid grid-cols-2 gap-4" v-if="AuthorFeatured.books && AuthorFeatured.books.length > 0">
                    <CommonBook  v-for="(books,index) in AuthorFeatured.books.slice(0,4)" :data=books :key="index" />  
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const isLoading = ref(false);
const bookstore = useBookStore();
const AuthorFeatured = ref({});


useAsyncData(async () => {
    isLoading.value = true;
    try {
        const response = await bookstore.getAuthorFeatured(); //promise
        AuthorFeatured.value = response.data._rawValue?.data[0];
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
});
</script>