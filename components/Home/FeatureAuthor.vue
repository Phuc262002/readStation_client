<template>
    <div class="h-auto mx-auto container md:px-20 px-8">
        <div class="flex justify-center py-10 gap-16">
            <div class="w-1/4 text-right flex flex-col gap-6">
                <div class="text-xl text-orange-500">Tác giả nổi bật</div>
                <div class="flex flex-col gap-5">
                    <h1 class="text-4xl font-bold">{{ featureAuthor?.getauthorFeatured[0]?.author }}</h1>
                    <div class="text-[#999999]" v-html="featureAuthor?.getauthorFeatured[0]?.description "></div>
                    <!-- <p class="text-[#999999]"><span v-html="featureAuthor?.getauthorFeatured[0]?.description"></span></p> -->
                </div>
                <div>
                    <button class="bg-rtprimary hover:bg-orange-300 w-1/2 h-11 rounded-lg  text-white">Xem thông
                        tin</button>
                </div>
            </div>
            <div class="">
                <img class="h-96" :src="featureAuthor?.getauthorFeatured[0]?.avatar" alt="">
            </div>
            <div class="">
                <div class="grid grid-rows-2 grid-flow-col gap-10">
                    <CommonBook v-for="(books, index) in featureAuthor?.getauthorFeatured[0]?.books" :data=books :key="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const featureAuthor = useHomeStore();
useAsyncData(async () => {
    try {
        await featureAuthor.getAuthorFeatured()
    } catch (error) {
        console.error(error);
    }
});
</script>