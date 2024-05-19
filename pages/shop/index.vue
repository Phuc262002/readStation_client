<template>
  <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container ">
    <div class="flex gap-6">
      <div class="w-1/5 rounded-lg h-fit flex flex-col space-y-4">
        <div class="px-3 pb-2 text-xl font-semibold">
          Khám phá theo danh mục
        </div>
        <div class="bg-white">
          <div
            class="text-base cursor-pointer rounded-xl border"
            @click="toggleCategories('category1')"
          >
            <div class="flex justify-between items-center px-4 py-2">
              <span>Nhà xuất bản</span>
              <img
                ref="bookIcon2"
                class="rotate-180"
                width="20"
                height="20"
                src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                alt=""
              />
            </div>
            <div
              v-if="showCategories.category1.value"
              class="border-t px-4 py-2"
            >
              <ul class="px-4 space-y-1">
                <li class="flex items-center">
                  <label for="history" class="flex items-center">
                    <input type="checkbox" id="history" class="mr-2" />
                    <span>Kim Đồng</span>
                  </label>
                </li>
                <li class="flex items-center">
                  <label for="culture" class="flex items-center">
                    <input type="checkbox" id="culture" class="mr-2" />
                    <span>Văn hóa và Truyền Thông</span>
                  </label>
                </li>
                <li class="flex items-center">
                  <label for="science" class="flex items-center">
                    <input type="checkbox" id="science" class="mr-2" />
                    <span>Em yêu khoa học</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div
            class="text-base cursor-pointer rounded-xl border "
            @click="toggleCategories('category2')"
          >
            <div class="flex justify-between items-center px-4 py-2">
              <span>Sách giáo khoa</span>
              <img
                ref="bookIcon2"
                class="rotate-180"
                width="20"
                height="20"
                src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                alt=""
              />
            </div>
            <div
              v-if="showCategories.category2.value"
              class="border-t px-4 py-2"
            >
              <ul class="px-4 space-y-1">
                <li class="flex items-center">
                  <label for="history" class="flex items-center">
                    <input type="checkbox" id="history" class="mr-2" />
                    <span>Toán</span>
                  </label>
                </li>
                <li class="flex items-center">
                  <label for="culture" class="flex items-center">
                    <input type="checkbox" id="culture" class="mr-2" />
                    <span>Lý</span>
                  </label>
                </li>
                <li class="flex items-center">
                  <label for="science" class="flex items-center">
                    <input type="checkbox" id="science" class="mr-2" />
                    <span>Hóa</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div
            class="text-base cursor-pointer rounded-xl border"
            @click="toggleCategories('category3')"
          >
            <div class="flex justify-between items-center px-4 py-2">
              <span>Sách khác</span>
              <img
                ref="bookIcon2"
                class="rotate-180"
                width="20"
                height="20"
                src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                alt=""
              />
            </div>
            <div
              v-if="showCategories.category3.value"
              class="border-t px-4 py-2"
            >
              <ul class="px-4 space-y-1">
                <li class="flex items-center">
                  <label for="history" class="flex items-center">
                    <input type="checkbox" id="history" class="mr-2" />
                    <span>Văn</span>
                  </label>
                </li>
                <li class="flex items-center">
                  <label for="culture" class="flex items-center">
                    <input type="checkbox" id="culture" class="mr-2" />
                    <span>Sử</span>
                  </label>
                </li>
                <li class="flex items-center">
                  <label for="science" class="flex items-center">
                    <input type="checkbox" id="science" class="mr-2" />
                    <span>Địa</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
        <div class="bg-white">
          <div
          class="text-base cursor-pointer rounded-xl border"
            @click="toggleCategories('category4')"
          >
          <div class="flex justify-between items-center px-4 py-2">
            <span >Đánh giá</span>
            <img
              ref="bookIcon2"
              class="rotate-180"
              width="20"
              height="20"
              src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
              alt=""
            />
          </div>
          <div v-if="showCategories.category4.value" class="border-t px-4 py-2">
            <ul class="px-4 space-y-1">
              <li class="flex items-center justify-between">
                <label for="star5" class="flex items-center justify-between">
                  <input type="checkbox" id="star5" />
                  <CommonStar rating="5" />
                </label>
              </li>
              <li class="flex items-center justify-between">
                <label for="star4" class="flex items-center justify-between">
                  <input type="checkbox" id="star4" />
                  <CommonStar rating="4" />
                </label>
              </li>
              <li class="flex items-center justify-between">
                <label for="star3" class="flex items-center justify-between">
                  <input type="checkbox" id="star3" />
                  <CommonStar rating="3" />
                </label>
              </li>
              <li class="flex items-center justify-between">
                <label for="star2" class="flex items-center justify-between">
                  <input type="checkbox" id="star2" />
                  <CommonStar rating="2" />
                </label>
              </li>
              <li class="flex items-center justify-between">
                <label for="star1" class="flex items-center justify-between">
                  <input type="checkbox" id="star1" />
                  <CommonStar rating="1" />
                </label>
              </li>
            </ul>
          </div>
          </div>
            
          
        </div>
      </div>

      <div class="w-4/5 h-fit">
        <div class="grid gap-y-4">
          <div class="bg-white rounded-lg border">
            <div class="text-xl px-4 py-3 ">Tất cả sản phẩm</div>
            <div class="flex gap-5 justify-between items-center px-4 h-fit border-t">
              <div class="text-base">1234 sản phẩm</div>
              <div class="text-base px-4 py-3 text-right flex items-center">
                <div class="px-4 text-[#cac9cd]">Sắp xếp</div>
                <a-select
                  ref="select"
                  v-model:value="value1"
                  @change="handleChange"
                >
                  <a-select-option value="jack">Jack</a-select-option>
                  <a-select-option value="lucy">Lucy</a-select-option>

                  <a-select-option value="Yiminghe">yiminghe</a-select-option>
                </a-select>
              </div>
            </div>
          </div>

          <div>
            <div class="grid grid-cols-3">
              <CommonBookShop/>
              <CommonBookShop2/>           
              <CommonBookShop/>
              <CommonBookShop/>
              <CommonBookShop2/>           
              <CommonBookShop/>
              <CommonBookShop/>
              <CommonBookShop2/>           
              <CommonBookShop/>
             
            </div>
          </div>
          <div class="flex justify-center">
            <a-pagination
              v-model:current="current"
              :total="50"
              show-less-items
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const showCategories = {
      category1: ref(false),
      category2: ref(false),
      category3: ref(false),
      category4: ref(false),
    };

    const toggleCategories = (category) => {
      showCategories[category].value = !showCategories[category].value;
      const bookIcon = document.getElementById(
        `bookIcon${category.charAt(category.length - 1)}`
      );
      if (showCategories[category].value) {
        bookIcon.style.transform = "rotate(180deg)";
      } else {
        bookIcon.style.transform = "rotate(0deg)";
      }
    };

    const value1 = ref("lucy");
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };
    const current = ref(1);

    return {
      showCategories,
      toggleCategories,
      value1,
      handleChange,
      current,
    };
  },
});
</script>
<style scoped>
:deep(.ant-select-selector) {
  border-radius: 200px !important;
}
</style>
