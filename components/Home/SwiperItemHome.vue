<template>
    <div class="h-auto mb-9 mx-auto container">
        <div class="flex justify-between">
            <div class="my-10 text-bold text-xl">
                <h1>Lastest Collections</h1>
            </div>
            <div
                class="my-9 mr-10 text-base gap-7 flex justify-center items-center"
            >
                <button
                    @click="swiperPrevSlide"
                    class="border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center"
                >
                    <ArrowLeftOutlined />
                </button>
                <button
                    @click="swiperNextSlide"
                    class="border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center"
                >
                    <ArrowRightOutlined />
                </button>
            </div>
        </div>
    </div>
    <swiper
        :slidesPerView="4"
        :spaceBetween="7"
        @swiper="onSwiper"
        :loop="true"
        ref="swiperRef"
    >
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook />
        </swiper-slide>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

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
};
</script>
<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
}
</style>
