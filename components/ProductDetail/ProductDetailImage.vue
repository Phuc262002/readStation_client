<template>
  <div class="w-full">
    <div class="p-5 bg-white border-2 rounded-lg">
      <div class="flex flex-col items-center">
        <div class="mb-8 w-full h-[370px] flex justify-center">
          <a-image
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
            <swiper-slide v-for="(image, index) in images" :key="index">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";

const props = defineProps(["book"]);
const images = [props.book?.poster, ...(props.book?.images ?? [])];

const selectedImage = ref(images?.[0]);

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

const selectImage = (index) => {
  selectedImage.value = images?.[index];
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
