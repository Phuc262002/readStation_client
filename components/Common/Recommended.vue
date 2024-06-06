<template>
    <div class="bg-orange-200 w-1/2 rounded-lg ">
        <div class="p-8">
            <div class="flex flex-col gap-5">
                <div class="text-4xl font-bold">{{ title?.title }}</div>
                <div>
                    <p>{{ title?.description }}</p>
                </div>
                <swiper :slidesPerView="4" :spaceBetween="15" :pagination="{
                    clickable: true,
                }" :breakpoints="{
                    '640': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    '1924': {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="(items,index) in data" :key="items.id">
                        <img class="rounded-lg w-32 h-48"
                            :src="items.poster"
                            alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    props: ["title", "data"],
    setup() {
        return {}
    }
};
</script>
<style scoped>
:deep(.swiper) {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

:deep(.swiper-slide) {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
}

:deep(.swiper-slide img) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>

<!-- <script setup>
import { ref } from 'vue';
const recomendedBooks = useHomeStore();
const feauturedRecommended = ref({})

const getDataRecomended = async () => {
    const response = await recomendedBooks.getRecomendedBooks();
    feauturedRecommended.value = response?.data?._rawValue?.data;
}
const feauturedLastest = ref({})    
console.log("🚀 ~ feauturedLastest:", feauturedLastest)
const getDataLastest = async () => {
    try {
        const data = await recomendedBooks.getLastestBook();
        feauturedLastest.value = data?.data?._rawValue?.data
    } catch (error) {
        console.error(error)
    }
}

useAsyncData(async () => {
    await getDataRecomended();
    await getDataLastest();
})
</script> -->