<template>
    <div class="w-full">
        <div class="bg-white p-4 border-2 rounded-lg">
            <div class="flex flex-col gap-4">
                <div>
                    <div class="text-base flex border-b-2 pb-2">
                        <div class="flex items-center gap-2">
                            <a-avatar
                                class="h-[40px] w-[40px]"
                                src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
                            />
                            <div>
                                <div>NXB Kim Đồng</div>
                                <div class="flex gap-2">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/cache/w100/ts/upload/84/16/7d/44b22d7938519574ca4b8ab4f1c72ae4.png.webp"
                                            alt=""
                                            class="h-[25px] w-[65px]"
                                        />
                                    </div>
                                    <div class="border-r-2"></div>
                                    <div
                                        class="text-base flex items-center gap-1"
                                    >
                                        <div>4.8</div>
                                        <div>
                                            <a-rate :value="1" disabled />
                                        </div>
                                        <div class="text-slate-400">
                                            (18k đánh giá)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="text-lg font-semibold">Số lượng</div>
                    <div
                        class="flex items-center border rounded overflow-hidden"
                    >
                        <button
                            @click="decreaseQuantity"
                            class="px-3 py-1 border-r bg-gray-200 hover:bg-gray-300 focus:outline-none"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            v-model="quantity"
                            min="1"
                            class="px-3 py-1 text-center bg-gray-100 focus:outline-none"
                        />
                        <button
                            @click="increaseQuantity"
                            class="px-3 py-1 border-l bg-gray-200 hover:bg-gray-300 focus:outline-none"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
          </div>
          <div class="">
            <div class="text-lg font-semibold">Số lượng</div>
            <div class="flex items-center p-2 w-2/4">
              <div>
                <button
                @click="decreaseQuantity"
                class="border border-lg rounded-lg text-base bg-[#fff] hover:bg-[#ececec]"
              >
                -
              </button>
              </div>
              <div class="px-2">
                <input
            
                v-model="quantity"
                min="1"
                class="px-2 py-1 w-[60px] border border-lg rounded-lg text-center text-lg bg-[#fff] "
              />
              </div>
              <div>
                <button
                @click="increaseQuantity"
                class="border border-lg rounded-lg text-base bg-[#fff] hover:bg-[#ececec]"
              >
                +
              </button>
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
