<template>
    <div class="mx-auto container md:px-20 px-8">
        <div class="flex justify-center gap-10 w-full py-14">
            <div class="w-1/5 h-36 border border-gray-00 rounded-2xl flex justify-center items-center">
                <div class="flex justify-center items-center gap-10">
                    <button class="text-5xl bg-[#d8d4f7] rounded-full p-2 text-[#7261D4] hover:-translate-y-1 hover:scale-110 duration-300">
                        <TbBook2 />
                    </button>
                    <div class="flex flex-col gap-2 uppercase">
                        <div class="font-bold text-xl">10,000</div>
                        <div class="text-[#7d7d7d99]">Books</div>
                    </div>
                </div>
            </div>
            <div class="w-1/5 h-36 border border-gray-00 rounded-2xl flex justify-center items-center">
                <div class="flex justify-center items-center gap-10">
                    <button class="text-5xl bg-[#cfeff7] rounded-full p-2 text-[#4dc1db] hover:-translate-y-1 hover:scale-110 duration-300">
                        <TbUsersGroup />
                    </button>
                    <div class="flex flex-col gap-2 uppercase">
                        <div class="font-bold text-xl">10,000</div>
                        <div class="text-[#7d7d7d99]">Authors</div>
                    </div>
                </div>
            </div>
            <div class="w-1/5 h-36 border border-gray-00 rounded-2xl flex justify-center items-center">
                <div class="flex justify-center items-center gap-10">
                    <button class="text-5xl bg-[#d4f4c3] rounded-full p-2 text-[#72C949] hover:-translate-y-1 hover:scale-110 duration-300">
                        <TbShoppingCart />
                    </button>
                    <div class="flex flex-col gap-2  uppercase">
                        <div class="font-bold text-xl">10,000</div>
                        <div class="text-[#7d7d7d99]">Books Sold</div>
                    </div>
                </div>
            </div>
            <div class="w-1/5 h-36 border border-gray-00 rounded-2xl flex justify-center items-center">
                <div class="flex justify-center items-center gap-10">
                    <button class="text-5xl bg-[#f7e4cf] rounded-full p-2 text-[#fa8c17] hover:-translate-y-1 hover:scale-110 duration-300">
                        <TbMoodWink2 />
                    </button>
                    <div class="flex flex-col gap-2 uppercase">
                        <div class="font-bold text-xl">10,000</div>
                        <div class="text-[#7d7d7d99]">Happy Customer</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { TbBook2 } from 'vue3-icons/tb'
import { TbMoodWink2 } from 'vue3-icons/tb'
import { TbUsersGroup } from 'vue3-icons/tb'
import { TbShoppingCart } from 'vue3-icons/tb'
</script>