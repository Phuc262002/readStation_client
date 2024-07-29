<template>
    <div>
        <NuxtLink :to="`/products/${data?.slug}`">
            <div>
                <img class="rounded-lg w-44 h-64 hover:relative hover:brightness-50 "
                    :src="data?.book_detail[0]?.poster" alt="">
            </div>
        </NuxtLink>
        <div class="flex flex-col gap-1 mt-2">
            <div class="text-xl font-bold hover:text-[#f65d4e]">{{ data?.title }}</div>
            <div class=" flex justify-start">
                <CommonStar rating="5" />
            </div>
            <div class="text-[#f65d4e] font-extrabold text-xl">
                {{
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(data?.book_detail[0]?.price)
                }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],
};
</script>
