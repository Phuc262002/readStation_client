<template>
    <swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/021/916/224/small/promo-banner-with-stack-of-books-globe-inkwell-quill-plant-lantern-ebook-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-for-poster-cover-advertising-vector.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://www.shutterstock.com/image-vector/promo-banner-bookstore-bookshop-library-260nw-1976145590.jpg"
          alt=""
        /> </swiper-slide
      ><swiper-slide>
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/107/441/non_2x/promo-banner-with-with-reading-stack-of-books-lantern-with-candle-plant-school-books-pile-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-for-poster-cover-vector.jpg"
          alt=""
        />
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
      return {
        modules: [Pagination],
      };
    },
  };
  </script>
  <style>
  #app {
    height: 100%;
  }
  html,
  body {
    position: relative;
    height: 100%;
  }
  
  body {
    /* background: #eee; */
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  .swiper {
    width: 100%;
    height: 100%;
    margin-top: 5px;
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
  