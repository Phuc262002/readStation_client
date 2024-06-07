<template>
    <div class="h-auto mx-auto container md:px-20 px-8">
        <div class="flex justify-center py-10 gap-16">
            <div class="w-1/4 text-right flex flex-col gap-6">
                <div class="text-xl text-orange-500">Tác giả nổi bật</div>
                <div class="flex flex-col gap-5">
                    <h1 class="text-4xl font-bold">{{ AuthorFeatured?.author }}</h1>
                    <p class="text-[#999999]"><span v-html="AuthorFeatured?.description"></span></p>
                </div>
                <div>
                    <button class="bg-rtprimary hover:bg-orange-300 w-1/2 h-11 rounded-lg  text-white">Xem thông
                        tin</button>
                </div>
            </div>
            <div class="">
                <img class="h-96" :src="AuthorFeatured?.avatar" alt="">
            </div>
            <div class="">
                <div class="grid grid-rows-2 grid-flow-col gap-10">
                    <CommonBook v-for="(books, index) in AuthorFeatured?.books" :data=books :key="index" />
                </div>    
            </div>
        </div>
    </div>
</template>

<script setup>
const featureAuthor = useHomeStore();
const AuthorFeatured = ref([]);
useAsyncData(async () => {
    try {
        const response = await featureAuthor.getAuthorFeatured(); //promise
        AuthorFeatured.value = response.data._rawValue.data[0];
    } catch (error) {
        console.error(error);
    }
});
</script>