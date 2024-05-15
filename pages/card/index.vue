<template>
    <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
        <div class="flex flex-col gap-y-24">
            <!-- Gói dùng thử -->
            <div class="bg-blue-100 w-full h-[350px] rounded-lg relative">
                <div class="absolute p-5 flex justify-between">
                    <div class="flex flex-col gap-4 w-2/3 px-10 py-10">
                        <div>
                            <h1 class="font-bold text-2xl">Gói dùng thử</h1>
                        </div>
                        <div>
                            <p class="text-[black] text-xl font-semibold">Tận hưởng hơn 170 triệu tài liệu khi bạn đăng
                                ký</p>
                        </div>
                        <div>
                            <p class="text-[gray] text-base ">Khám phá hàng triệu tài liệu và tìm thông tin chuyên ngành
                                về bất kỳ chủ đề nào.</p>
                        </div>
                        <div>
                            <button class="bg-[#f0f0f0] p-2 rounded-lg w-40 h-12 text-base font-medium">Dùng
                                thử</button>
                        </div>

                    </div>
                    <div class="w-1/3">
                        <img class=""
                            src="https://s-f.scribdassets.com/webpack/assets/images/browse_page_promo_module/S_docs.508568ca.png"
                            alt="">
                    </div>
                </div>
            </div>
            <!-- Các gói -->
            <div class="flex justify-center gap-5">
                <!-- Gói normal -->
                <div class="w-full rounded-xl bg-gradient-to-b from-blue-200 to-violet-500">
                    <div class="p-10 flex flex-col gap-9">
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-start gap-1 items-center">
                                <h1 class="font-bold text-2xl">ReadStation</h1>
                                <button
                                    class="bg-[#f0f0f0] w-auto p-2 rounded-lg text-violet-700 font-black text-sm uppercase">Basic</button>
                            </div>
                            <p class="text-[black]">Gói cơ bản là gói dành cho những người mới bắt đầu</p>
                        </div>
                        <div>
                            <h1 class="font-bold text-2xl">Chỉ 19,000đ/tháng</h1>
                        </div>
                        <div>
                            <button
                                class="bg-violet-700 w-full h-12 rounded-full text-base uppercase text-white font-bold hover:-translate-y-1 hover:scale-110 duration-300 ">Đăng
                                ký gói</button>
                        </div>
                        <div class="border-solid border border-gray-300 w-full"></div>
                        <div class="flex flex-col gap-4">
                            <h1 class="text-lg font-extrabold text-black">Đặc quyền khi đăng ký</h1>
                            <div class="flex flex-col gap-5">
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Gói plus -->
                <div class="w-full rounded-xl bg-gradient-to-b from-pink-500 to-violet-500">
                    <div class="p-10 flex flex-col gap-9">
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-start gap-1 items-center">
                                <h1 class="font-bold text-2xl">ReadStation</h1>
                                <button
                                    class="bg-[#f0f0f0] w-auto p-2 rounded-lg text-pink-700 font-black text-sm uppercase">Plus</button>
                            </div>
                            <p class="text-[black]">Gói plus là gói dành cho những người đã có kinh nghiệm</p>
                        </div>
                        <div>
                            <h1 class="font-bold text-2xl">Chỉ 19,000đ/tháng</h1>
                        </div>
                        <div>
                            <button
                                class="bg-[#ff3cdf] w-full h-12 rounded-full text-base uppercase text-white font-bold hover:-translate-y-1 hover:scale-110 duration-300 ">Đăng
                                ký gói</button>
                        </div>
                        <div class="border-solid border border-gray-300 w-full"></div>
                        <div class="flex flex-col gap-4">
                            <h1 class="text-lg font-extrabold text-black">Đặc quyền khi đăng ký</h1>
                            <div class="flex flex-col gap-5">
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Gói premiun -->
                <div class="w-full rounded-xl bg-gradient-to-b from-yellow-500 to-gray-500">
                    <div class="p-10 flex flex-col gap-9">
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-start gap-1 items-center">
                                <h1 class="font-bold text-2xl">ReadStation</h1>
                                <button
                                    class="bg-[#f0f0f0] w-auto p-2 rounded-lg text-yellow-800 font-black text-sm uppercase">Premiun</button>
                            </div>
                            <p class="text-[black]">Gói premium là gói dành cho những người chuyên nghiệp</p>
                        </div>
                        <div>
                            <h1 class="font-bold text-2xl">Chỉ 19,000đ/tháng</h1>
                        </div>
                        <div>
                            <button
                                class="bg-[#dca519] w-full h-12 rounded-full text-base uppercase text-white font-bold hover:-translate-y-1 hover:scale-110 duration-300 ">Đăng
                                ký gói</button>
                        </div>
                        <div class="border-solid border border-gray-300 w-full"></div>
                        <div class="flex flex-col gap-4">
                            <h1 class="text-lg font-extrabold text-black">Đặc quyền khi đăng ký</h1>
                            <div class="flex flex-col gap-5">
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                                <div class="flex justify-start gap-4 items-center text-base font-medium">
                                    <LuCheck />
                                    <p>Nghe nhạc không quảng cáo</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Các đặc quyền khi nâng cấp -->
            <div class="flex flex-col gap-y-6">
                <div class="flex justify-center text-3xl font-semibold">Đặc quyền khi nâng cấp</div>
                <div class="flex justify-center">
                    <UTabs :items="items" class="w-fit">
                        <template #default="{ item, index, selected }">
                            <div class="flex items-center gap-2 relative truncate" @click="setSelect(index)">
                                <span class="truncate text-base text-center">{{ item.label }}</span>
                            </div>
                        </template>
                    </UTabs>
                </div>
                <!-- Gói Basic -->
                <div class="flex justify-center gap-5" v-if="select === 0">
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-blue-400 to-violet-900">
                        Basic
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-blue-400 to-violet-900">
                        Basic
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-blue-400 to-violet-900">
                        Basic
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-blue-400 to-violet-900">
                        Basic
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-blue-400 to-violet-900">
                        Basic
                    </div>

                </div>
                <!-- Gói plus -->
                <div class="flex justify-center gap-5" v-if="select === 1">
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Plus
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Plus
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Plus
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Plus
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Plus
                    </div>

                </div>
                <!-- Gói premium -->
                <div class="flex justify-center gap-5" v-if="select === 2">
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#a3790e] to-[#3f3214]">
                        Premium
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#a3790e] to-[#3f3214]">
                        Premium
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#a3790e] to-[#3f3214]">
                        Premium
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#a3790e] to-[#3f3214]">
                        Premium
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#a3790e] to-[#3f3214]">
                        Premium
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import { LuCheck } from 'vue3-icons/lu'
const select = ref(0)
const setSelect = (index: number) => (select.value = index)
watchEffect(() => {
    console.log(select.value)
})
const items = [{
    label: 'Basic',

}, {
    label: 'Plus',

}, {
    label: 'Premeium',

}]
</script>
