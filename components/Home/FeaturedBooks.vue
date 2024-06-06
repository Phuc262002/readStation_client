<template>
    <div class="bg-orange-100">
        <div class="px-5 py-7">
            <div class="flex justify-between gap-20 w-full  h-auto mx-auto container md:px-20 px-8">
                <!-- left -->
                <div class="flex flex-col gap-10 w-1/2">
                    <div class="flex flex-col justify-start gap-5">
                        <h1 class="text-3xl font-bold">Sách đặc sắc</h1>
                        <h1 class="text-balck">Sách này là một tác phẩm đặc sắc, kết hợp văn học và triết học một cách
                            tinh tế. Tác giả đã tạo nên một thế giới đầy màu sắc và nhân vật sâu sắc, đưa độc giả vào
                            cuộc phiêu lưu đầy ý nghĩa và suy tư. Đây không chỉ là một cuốn sách giải trí mà còn là một
                            nguồn cảm hứng vô tận.</h1>
                    </div>
                    <div class="bg-white rounded-lg h-auto">
                        <div class=" p-5 w-full flex justify-center gap-10">
                            <div class="w-1/3 pt-16">
                                <img class="rounded-lg" :src="feauturedBooks[0]?.book_detail[0]?.poster" alt="">
                            </div>
                            <div class="w-1/2 flex flex-col gap-5">
                                <div class="flex justify-start gap-4">
                                    <div class=" w-16 h-14">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4XvFQkfMWEm-2hwoGI7UA8BT3jDzHHJJgR2HeIGECfpVdyZn"
                                            alt="">
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <h1 class="text-xl font-bold">{{ feauturedBooks[0]?.title }}</h1>
                                        <h1 class="text-violet-400">{{ feauturedBooks[0]?.category?.name }}</h1>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-5">
                                    <div>
                                        <h1 class="text-xl font-bold">Mô tả</h1>
                                    </div>
                                    <div>
                                        <p><span v-html="feauturedBooks[0]?.description_summary"></span></p>
                                    </div>
                                    <div class="grid grid-cols-2 gap-1">
                                        <h1 class="text-[gray]">Tác giả</h1>
                                        <h1 class="text-[gray]">Xuất bản năm</h1>
                                        <h1 class="font-bold">{{ feauturedBooks[0]?.author?.author }}</h1>
                                        <h1 class="font-bold">{{ feauturedBooks[0]?.book_detail[0]?.publish_date }}</h1>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center">
                                    <h1 class="font-bold text-xl">{{ feauturedBooks[0]?.book_detail[0]?.price }}</h1>
                                    <button
                                        class="bg-rtprimary hover:bg-orange-300 w-1/2 h-11 rounded-lg text-white">Thuê
                                        Ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Right -->
                <div class="w-1/2 grid grid-cols-3 gap-4">
                    <div v-for="(data, index) in feauturedBooks" >
                        <CommonHomeFeaturedBooks :data="data" :key="data.id"/>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';
const getFeauturedBooks = useHomeStore();
const feauturedBooks = ref({});
const getData = async () => {
    const data = await getFeauturedBooks.getBookFeatured();
    feauturedBooks.value = data?.data?._rawValue?.data;
}
useAsyncData(async () => {
    await getData();
});


</script>