<template>
    <div  class="flex flex-col gap-5 p-5">
        <div>
            <img class="rounded-lg w-40 h-56" :src="data?.books[0]?.book_detail[0]?.poster" alt="">
        </div>
        <div class="flex flex-col gap-3">
            <div class="text-xl font-bold hover:text-[#f65d4e]">{{data?.books[0]?.title}}</div>
            <div class=" flex justify-start">
                <CommonStar rating="5" />
            </div>
            <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                {{data?.author}}
            </div>
            <div class="text-[#f65d4e] font-extrabold text-xl">
                200.000đ
            </div>
        </div>
    </div>
</template>
<script>
export default  {
    props: ['data']
}
</script>