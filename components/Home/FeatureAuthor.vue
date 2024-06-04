<template>
    <div class="h-auto mx-auto container md:px-20 px-8">
        <div class="p-10 flex justify-between w-full gap-10">
            <div class="w-1/3 text-right flex flex-col gap-6">
                <div class="text-xl text-orange-500">Tác giả nổi bật</div>
                <div class="flex flex-col gap-5">
                    <h1 class="text-4xl font-bold">{{ AuthorFeatured?.author }}</h1>
                    <p class="text-[#999999]" v-html="AuthorFeatured?.description "></p>
                </div>
                <div>
                    <button class="bg-rtprimary hover:bg-orange-300 w-1/2 h-11 rounded-lg  text-white">Xem thông tin</button>
                </div>
            </div>
            <div class="w-1/3">
                <img class="h-96" :src="AuthorFeatured?.avatar" alt="">
            </div>
            <div class="w-1/3 flex flex-col gap-2">
                <div class="grid grid-cols-2 gap-4">
                    <CommonBook  v-for="(books,index) in AuthorFeatured.books" :data=books :key="index" />  
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const isLoading = ref(false);
const bookstore = useBookStore();
const AuthorFeatured = ref({});
console.log("🚀 ~ AuthorFeatured:", AuthorFeatured)
useAsyncData(async () => {
    try {
        isLoading.value = true;
        const response = await bookstore.getAuthorFeatured(); //promise
        AuthorFeatured.value = response.data._rawValue.data[0];
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
});
</script>