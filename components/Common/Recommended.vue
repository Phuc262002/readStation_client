<template>
    <div class="bg-orange-200 w-1/2 rounded-lg h-auto ">
        <div class="p-8">
            <div class="flex flex-col gap-5">
                <div class="text-4xl font-bold">{{ title?.title }}</div>
                <div>
                    <p>{{ title?.description }}</p>
                </div>
                <swiper :slidesPerView="4" :spaceBetween="1" :pagination="{
                    clickable: true,
                }" :breakpoints="{
                    '640': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    '1924': {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                }" :modules="modules" class="mySwiper" @swiper="onSwiper" :loop="true" ref="swiperRef">
                    <swiper-slide v-for="(items, index) in data" :key="items.id">
                        <img class="rounded-lg" :src="items.poster" alt="">
                    </swiper-slide>
                </swiper>
                <button @click="swiperPrevSlide"
                    class="border left-0 z-10 bg-white -translate-x-5 -translate-y-1/2 border-gray-300 rounded-full w-10 h-10 flex justify-center items-center">
                    <ArrowLeftOutlined />
                </button>
                <button @click="swiperNextSlide"
                    class="border right-0 z-10 bg-white border-gray-300 translate-x-5 -translate-y-1/2 rounded-full w-10 h-10 flex justify-center items-center">
                    <ArrowRightOutlined />
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const swiperInstance = ref();

        function onSwiper(swiper) {
            swiperInstance.value = swiper;
        }
        const swiperNextSlide = () => {
            swiperInstance.value.slideNext();
        };
        const swiperPrevSlide = () => {
            swiperInstance.value.slidePrev();
        };
        return {
            swiperPrevSlide,
            swiperNextSlide,
            onSwiper,
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
    height: 250px;
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