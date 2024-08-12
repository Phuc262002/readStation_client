<template>
  <div class="mt-8">
    <swiper :spaceBetween="30" :loop="true" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
      <swiper-slide>
        <div class=" ">
          <img class="w-[1920px] h-[600px]"
            src="assets/images/banner1.jpg"
            alt="">
          <!-- <div class="absolute flex justify-center items-center gap-10 w-full px-16 ">
          <div class="">
            <img class=""
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/revslider_book-2.png"
              alt="">
          </div>
          <div class="w-1/2 flex flex-col gap-7 text-left pl-20">
              <div class="flex flex-col gap-2"> 
                  <h1 class=" text-6xl font-bold">Top 10 cuốn sách</h1>
                  <h1 class=" text-6xl font-bold">hay nhất</h1>
                  <h1 class=" text-6xl font-bold">trong năm</h1>
              </div>
              <div>
                <button class=" w-40 h-12 bg-orange-500 p-2 rounded-lg text-white text-base font-semibold hover:bg-orange-600 hover:text-white">Thuê Ngay</button>
              </div>
          </div>
        </div> -->
        </div>
        <!-- <div class="absolute flex flex-col gap-4">
          <h1 class="text-white text-5xl font-bold italic">🎉 Chào Mừng Đến Với ReadStation! 📚</h1>
          <h1 class="text-white text-3xl font-bold italic">🎈 Khám Phá Thế Giới Sách Với Nhiều Thể Loại 🎈</h1>
        </div> -->
      </swiper-slide>
      <swiper-slide>
        <div class="w-full h-[600px]  relative">
          <img class="w-full h-full object-cover"
            src="https://images.pexels.com/photos/9572630/pexels-photo-9572630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="">
          <!-- <div class="absolute flex justify-center items-center gap-10 w-full px-16 py-6">
            <div class="">
              <img class="" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/revslider_book-3.png"
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
                <button
                  class=" w-40 h-12 bg-orange-500 p-2 rounded-lg text-white text-base font-semibold hover:bg-orange-600 hover:text-white">Thuê
                  Ngay</button>
              </div>
            </div>
          </div> -->
        </div>
        <div class="grid grid-rows-2 mr-64 absolute">
          <div class="flex flex-col gap-4 text-left">
            <h1 class="text-white text-4xl font-bold italic">🎓 Ưu Đãi Đặc Biệt Dành Cho Học Sinh, Sinh Viên</h1>
            <h1 class="text-white text-2xl font-bold italic">🎁 Miễn Phí Dịch Vụ Khi Thuê Bộ Sách Giáo Dục</h1>
            <h1 class="text-white text-2xl font-bold italic">🎁 Thuê Ngay Để Nhận Các Ưu Đãi Khác</h1>
          </div>
        </div>

      </swiper-slide>
      <swiper-slide>
        <div class="bg-[#dfdfdf] w-full h-[600px]  relative">
          <img class="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="">

          <!-- <div class="absolute flex justify-center items-center gap-10 w-full px-16 py-6">
            <div class="">
              <img class="" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/revslider_book-4.png"
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
                <button
                  class=" w-40 h-12 bg-orange-500 p-2 rounded-lg text-white text-base font-semibold hover:bg-orange-600 hover:text-white">Thuê
                  Ngay</button>
              </div>
            </div>
          </div> -->
        </div>
        <div class="grid grid-cols-2 absolute">
          <div></div>
          <div class="grid grid-rows-2">
            <div class="flex flex-col gap-4 text-left">
              <h1 class="text-white text-4xl font-bold italic">📖 Dịch Vụ Cho Thuê Sách Tiện Lợi</h1>
              <h1 class="text-white text-2xl font-bold italic">✔️ Đọc Thoải Mái, Đổi Sách Mới Dễ Dàng</h1>
              <h1 class="text-white text-2xl font-bold italic">✔️ Tự Do Chọn Lọc Từ Nhiều Thể Loại Độc Đáo</h1>
              <h1 class="text-white text-2xl font-bold italic">✔️ Tiết Kiệm Chi Phí, Trải Nghiệm Đọc Sách Đa Dạng
              </h1>
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