<template>
    <div class="py-5 border-b  ">
        <div class="flex flex-col gap-5 px-5 border-x">
            <div >
                <img class="rounded-lg " :src=" props?.book?.book_detail[0]?.poster " alt="">
            </div>
            <div class="flex flex-col gap-3">
                <div class="text-xl font-bold hover:text-[#f65d4e]">{{ props?.book?.title }}</div>
                <div class=" flex justify-start">
                    <CommonStar rating="5" />
                </div>
                <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                    {{ props?.book?.author?.author }}
                </div>
                <div class="text-[#f65d4e] font-extrabold text-xl">
                    {{ props?.book?.book_detail[0]?.price }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['book'])
</script>