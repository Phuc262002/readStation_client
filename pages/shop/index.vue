<template>
  <div class="container mx-auto p-20 bg-[#f5f5fa]">
    <div class="flex gap-6">
      <div class="w-1/5 bg-[#ffffff] rounded-lg">
        <div class="px-4 py-3 text-lg font-semibold border-b-2">
          Khám phá theo danh mục
        </div>
         <div>
          <div
          class="px-4 py-2 text-base flex justify-between items-center"
            @click="toggleCategories('category1')">
            <span> Sách giáo khoa</span>
            <img
              ref="bookIcon1"
              width="20"
              height="20"
              src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
              alt=""
            />
          </div>
          <div v-if="showCategories.category1" class="px-4">
            <span class="px-4 py-2">Toán</span><br />
            <span class="px-4 py-2">Anh</span><br />
            <span class="px-4 py-2">Văn</span><br />
          </div>
        </div>
        <div>
          <div
            class="px-4 py-2 text-base flex justify-between items-center border-t-2"
            @click="toggleCategories('category2')">
            <span> Sách khác</span>
            <img
              ref="bookIcon2"
              width="20"
              height="20"
              src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
              alt=""
            />
          </div>
          <div v-if="showCategories.category2" class="px-4">
            <span class="px-4 py-2">Lịch sử</span><br />
            <span class="px-4 py-2">Văn hóa</span><br />
            <span class="px-4 py-2">Khoa học</span><br />
          </div>
        </div>
        
      </div>

      <div class="w-4/5 bg-red-100">ccccccccccc</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCategories: {
        category1: false,
        category2: false,
      },
    };
  },
  methods: {
    toggleCategories(category) {
      // Đảo ngược giá trị của biến showCategories tương ứng với danh mục được nhấp vào
      this.showCategories[category] = !this.showCategories[category];
      // Thực hiện quay hình ảnh khi thay đổi trạng thái showCategories
      const bookIcon = this.$refs[`bookIcon${category.charAt(category.length - 1)}`]; // Lấy tham chiếu tới hình ảnh từ ref
      if (this.showCategories[category]) {
        bookIcon.style.transform = "rotate(360deg)"; // Quay hình ảnh 90 độ khi showCategories là true
      } else {
        bookIcon.style.transform = "rotate(180deg)"; // Đặt lại góc quay về 0 độ khi showCategories là false
      }
    },
  },
};
</script>
<style scoped></style>
