<template>
    <div  class="flex flex-col gap-5 p-5">
        <div>
            <img class="rounded-lg w-full" :src="data?.book_detail[0]?.poster" alt="">
        </div>
        <div class="flex flex-col gap-3">
            <div class="text-xl font-bold hover:text-orange-400">{{data?.title}}</div>
            <div class=" flex justify-start">   
                <CommonStar rating="5" />
            </div>
            <!-- <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                {{data?.author}}
            </div> -->
            <div class="text-orange-300 font-extrabold text-xl">
                200.000 
            </div>
        </div>
    </div>
</template>
<script>
export default  {
    props: ['data']
}
</script>