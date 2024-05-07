<template>
  <swiper>
    <swiper-slide>
      <img class=" w-80" src="https://static.vecteezy.com/system/resources/thumbnails/021/916/224/small/promo-banner-with-stack-of-books-globe-inkwell-quill-plant-lantern-ebook-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-for-poster-cover-advertising-vector.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-80" src="https://storage.googleapis.com/macrovector-acl-eu/previews/53784/preview_53784.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-80" src="https://c8.alamy.com/comp/R19HE2/vector-bookstore-banner-logo-with-blue-books-on-a-bookshelf-add-your-text-R19HE2.jpg" alt="">
    </swiper-slide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>