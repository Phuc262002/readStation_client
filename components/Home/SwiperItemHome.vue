<template>
    <div class=" h-auto mb-9 mx-auto container">
        <div class="flex justify-between">
            <div class="my-10 ml-10 text-bold text-xl">
                <h1>Lastest Collections</h1>
            </div>
            <div class="my-9 mr-10 text-base gap-7 flex justify-center items-center">
                <div class="border border-gray-300 rounded-full w-8 flex justify-center items-center">
                    <button class="mb-2">
                        <ArrowLeftOutlined />
                    </button>
                </div>
                <div class="border border-gray-300 rounded-full w-8 flex justify-center items-center">
                    <button class="mb-2">
                        <ArrowRightOutlined />
                    </button>
                </div>
            </div>
        </div>

    </div>
    <swiper :slidesPerView="4" :spaceBetween="7" >
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
        <swiper-slide>
            <CommonProductBook/>
        </swiper-slide>
      
    </swiper>
</template>


<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';



  // import required modules
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
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
