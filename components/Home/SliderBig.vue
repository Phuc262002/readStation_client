<template>
  <div class="mt-8">
    <swiper :spaceBetween="30" :pagination="{
    clickable: true,
  }" :modules="modules" class="mySwiper">
    <swiper-slide>
      <div class="bg-[#fcedec] w-full h-[556px]  relative ">
        <div class="absolute flex justify-center items-center gap-10 w-full px-16 ">
          <div class="">
            <img class=""
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/revslider_book-2.png"
              alt="">
          </div>
          <div class="w-1/2 flex flex-col gap-7 text-left pl-20">
              <div class="flex flex-col gap-2"> 
                  <h1 class=" text-6xl font-bold">Top 10 Books</h1>
                  <h1 class=" text-6xl font-bold">To Make It A</h1>
                  <h1 class=" text-6xl font-bold">Great Year</h1>
              </div>
              <div>
                <button class=" w-40 h-12 bg-[white] p-2 rounded-full text-black text-base font-semibold hover:bg-black hover:text-white">Shop now</button>
              </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-[#fbf1e6] w-full h-[556px]  relative">
        <div class="absolute flex justify-center items-center gap-10 w-full px-16 py-6">
          <div class="">
            <img class=""
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/revslider_book-3.png"
              alt="">
          </div>
          <div class="w-1/2 flex flex-col gap-7 text-left pl-20">
              <div class="flex flex-col gap-2"> 
                  <h1 class=" text-6xl font-bold">Meet Your Next</h1>
                  <h1 class=" text-6xl font-bold">Favorite Book.</h1>
              </div>
              <div class="flex flex-col gap-2">
                  <p class="text-[#c5b8b7] ">Original Price $45.55</p>
                  <p class="text-[#f65d4e] text-2xl font-bold">$24.55</p>
              </div>
              <div>
                <button class=" w-40 h-12 bg-[white] p-2 rounded-full text-black text-base font-semibold hover:bg-black hover:text-white">Shop now</button>
              </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-[#dfdfdf] w-full h-[556px]  relative">
        <div class="absolute flex justify-center items-center gap-10 w-full px-16 py-6">
          <div class="">
            <img class=""
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/revslider_book-4.png"
              alt="">
          </div>
          <div class="w-1/2 flex flex-col gap-7 text-left pl-20">
            <div class="flex flex-col gap-2"> 
                  <h1 class=" text-6xl font-bold">Our Sci-Fi &</h1>
                  <h1 class=" text-6xl font-bold">Fantasy Picks.</h1>
              </div>
              <div class="flex flex-col gap-2">
                  <p class="text-[#c5b8b7] ">Original Price $45.55</p>
                  <p class="text-[#f65d4e] text-2xl font-bold">$24.55</p>
              </div>
              <div>
                <button class=" w-40 h-12 bg-[white] p-2 rounded-full text-black text-base font-semibold hover:bg-black hover:text-white">Shop now</button>
              </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
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
};
</script>

<style scoped>
:deep(.swiper) {
  width: 100%;
  height: 100%;
}

:deep(.swiper-slide) {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center; 
}

:deep(.swiper-slide img) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>