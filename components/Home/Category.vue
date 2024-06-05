<template>
    <div class=" h-auto mx-auto container md:px-20 px-8">
        <div class="px-5 py-7 flex flex-col gap-20">
            <div class="text-3xl font-bold">
                Thể loại
            </div>
            <div class="grid grid-cols-6 gap-10 ">
                <div class="flex flex-col items-center gap-5 cursor-pointer" v-for="(category,index) in feauturedCategory" :key="category">
                    <div class="w-40 h-40 border rounded-full relative bg-[##F6F6F6] hover:bg-orange-300">
                        <div
                            class="absolute flex justify-center left-5  items-center bottom-9 hover:hover:-translate-y-4 transition-transform">
                            <img class="w-32 h-38" :src="category?.image"
                                alt="">
                        </div>
                    </div>
                    <div class="text-xl font-semibold">{{category?.name}}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const getCategory = useCategoryStore(); 
const isLoading = ref(false);
const feauturedCategory = ref([]);
const getData = async () => {
    try {
        isLoading.value = true;
        const data = await getCategory.getFeauturedCategory();
        feauturedCategory.value = data?.data?._rawValue?.data;
    } catch (error) {
        console.error(error);
    }finally{
        isLoading.value = false;
    }
  
} 
useAsyncData(async () => {
    await getData();
});

</script>