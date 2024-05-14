<template>
    <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
        <div class="flex flex-col gap-y-24">
            <!-- Gói dùng thử -->
            <div class="bg-[red] w-full h-[300px] rounded-lg relative">
                <div class="absolute p-5">
                    <h1 class="text-2xl font-bold">Gói dùng thử</h1>
                </div>
            </div>
            <!-- Các gói -->
            <div class="flex justify-center gap-5">
                <!-- Gói normal -->
                <div class="w-full h-[500px] rounded-xl relative bg-gradient-to-b from-blue-200 to-violet-500">
                    <div class="absolute p-5">
                        <div class="flex flex-col gap-2">
                            <h1 class="font-bold text-2xl">Gói Basic</h1>
                            <p class="text-[black]">Gói cơ bản là gói dành cho những người mới bắt đầu</p>
                        </div>
                    </div>
                </div>
                <!-- Gói plus -->
                <div class="w-full h-[500px] rounded-xl relative bg-gradient-to-b from-pink-500 to-violet-500">
                    <div class="absolute p-5">
                        <div class="flex flex-col gap-2">
                            <h1 class="font-bold text-2xl">Gói plus</h1>
                            <p class="text-[black]">Gói plus là gói dành cho những người đã có kinh nghiệm</p>
                        </div>
                    </div>
                </div>
                <!-- Gói premiun -->
                <div class="w-full h-[500px] rounded-xl relative bg-gradient-to-b from-yellow-500 to-gray-500">
                    <div class="absolute p-5">
                        <div class="flex flex-col gap-2">
                            <h1 class="font-bold text-2xl">Gói premium</h1>
                            <p class="text-[black]">Gói premium là gói dành cho những người chuyên nghiệp</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Các đặc quyền khi nâng cấp -->
            <div class="flex flex-col gap-y-6">
                <div class="flex justify-center text-3xl font-semibold">Đặc quyền khi nâng cấp</div>
                <div class="flex justify-center">
                    <UTabs :items="items" :default-index="0" />
                </div>
                <!-- Gói Basic -->
                <div class="flex justify-center gap-5">
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Basic
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Basic
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Basic
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Basic
                    </div>
                    <div class="w-full rounded-xl h-[400px] bg-gradient-to-b from-[#6028c9] to-[#1E1335]">
                        Basic
                    </div>

                </div>
                <!-- Gói plus -->
                <div class="flex justify-center gap-5">
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
                <div class="flex justify-center gap-5">
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
import { ref } from 'vue';
const basic = 'Hello basic'
const plus = 'Hello plus'
const premium = 'Hello premium'
const items = [{
    label: 'Basic',
    content: basic
}, {
    label: 'Plus',
    content: plus
}, {
    label: 'Premium',
    content: premium
}]
</script>
