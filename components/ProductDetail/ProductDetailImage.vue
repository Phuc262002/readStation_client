<template>
    <div class="w-full">
        <div class="p-5 bg-white border-2 rounded-lg">
            <div class="flex flex-col items-center">
                <div class="mb-8 w-full h-[370px] flex justify-center">
                    <a-image
                        :preview="{ visible: false }"
                        @click="visible = true"
                        :height="370"
                        :src="selectedImage"
                        alt="Main Image"
                        class="w-full h-full object-contain rounded-lg"
                    />
                </div>

                <div class="w-full overflow-hidden">
                    <swiper
                        :slides-per-view="7"
                        :space-between="7"
                        @swiper="onSwiper"
                        :loop="true"
                        ref="swiperRef"
                    >
                        <swiper-slide
                            v-for="(image, index) in images"
                            :key="index"
                        >
                            <div
                                class="h-[54px] w-[54px] p-[6px] cursor-pointer border-2 border-gray-200 rounded-lg"
                                @click="selectImage(index)"
                            >
                                <img
                                    :src="image"
                                    alt="Thumbnail Image"
                                    class="rounded-md w-full h-full object-contain"
                                />
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div style="display: none">
                    <a-image-preview-group
                        :preview="{
                            visible,
                            onVisibleChange: (vis) => (visible = vis),
                        }"
                    >
                        <a-image
                            v-for="(image, index) in images"
                            :key="index"
                            :src="image"
                        />
                    </a-image-preview-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
export default {
    data() {
        return {
            images: [
                "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
            ],
            selectedImageIndex: 0,
        };
    },
    computed: {
        selectedImage() {
            return this.images[this.selectedImageIndex];
        },
    },
    methods: {
        selectImage(index) {
            this.selectedImageIndex = index;
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const visible = ref(false);
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
            visible,
        };
    },
};
</script>

<style scoped>
:deep(.swiper) {
    width: 100%;
    height: 100%;
}

:deep(.swiper-slide) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
}
</style>
