<template>
  <div class="w-full">
    <div class="bg-white p-4 border-2 rounded-lg">
      <div class="flex flex-col gap-4">
        <div>
          <div class="text-base flex border-b-2 pb-2">
            <div class="flex items-center gap-3">
              <div >
                <a-avatar
                  class="h-[40px] w-[40px]"
                  src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
                />
              </div>
              <div >
                <div>NXB Kim Đồng</div>
                <div class="flex">
                  <div>
                    <img
                      src="https://salt.tikicdn.com/cache/w100/ts/upload/84/16/7d/44b22d7938519574ca4b8ab4f1c72ae4.png.webp"
                      alt=""
                      class="h-[25px] w-[70px]"
                    />
                  </div>
                </div>
                <div class="text-base flex items-center gap-1">
                  <div>4.8</div>
                  <div>
                    <svg
                      class="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                      />
                    </svg>
                  </div>
                  <div class="text-slate-400 text-sm">(18k đánh giá)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="text-lg font-semibold">Số lượng</div>
          <div class="flex items-center pt-2 w-2/4">
            <div>
              <button
                @click="decreaseQuantity"
                class="border border-lg rounded-lg bg-[#fff] hover:bg-[#ececec] w-[34px] h-[32px] flex justify-center items-center !p-0"
              >
                <IconMinus />
              </button>
            </div>
            <div class="px-2">
              <input
                v-model="quantity"
                min="1"
                max="999"
                class="px-2 py-1 border border-lg rounded-lg text-center text-base bg-[#fff] w-[50px] h-[32px] flex justify-center items-center"
              />
            </div>
            <div>
              <button
                @click="increaseQuantity"
                class="border border-lg rounded-lg bg-[#fff] hover:bg-[#ececec] w-[34px] h-[32px] flex justify-center items-center !p-0"
              >
                <IconPlus />
              </button>
            </div>
          </div>
        </div>
        <div>
            <div class="text-lg font-semibold">Tạm tính</div>
            <div class="text-2xl font-semibold">200k</div>
        </div>
        <div class="grid gap-2">
          <div
            class="bg-[#ff424e] border border-lg rounded-lg text-center text-white text-base"
          >
            <button>Mua ngay</button>
          </div>
          <div
            class="bg-[#fff] border border-lg border-[#2679ff] rounded-lg text-center text-[#2679ff] text-base"
          >
            <button>Thêm vào giỏ</button>
          </div>
          <div
            class="bg-[#fff] border border-lg border-[#2679ff] rounded-lg text-center text-[#2679ff] text-base"
          >
            <button>Thuê ngay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {},
  setup() {
    const quantity = ref(1);

    function increaseQuantity() {
      quantity.value++;
      if (quantity.value < 999) {
        quantity.value++;
      }
    }
    function increaseQuantity() {
      if (quantity.value < 999) {
        quantity.value++;
      }
    }

    function decreaseQuantity() {
      if (quantity.value > 1) {
        quantity.value--;
      }
    }

    return {
      quantity,
      increaseQuantity,
      decreaseQuantity,
    };
  },
};
</script>

<style scoped>
:deep(.ant-rate-star):not(:first-child) {
  display: none;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
