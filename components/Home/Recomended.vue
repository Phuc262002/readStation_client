<template>
    <div>
        <div class="h-auto mx-auto container md:px-20 px-8">
            <div class="flex justify-center gap-5">
                <CommonRecommended :title="valueRecomended[0]" :data="feauturedRecommended"/>
                <CommonRecommended :title="valueRecomended[1]" :data="feauturedLastest"/>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
const recomendedBooks = useHomeStore();
const feauturedRecommended = ref({})
const getDataRecomended = async () => {
    const response = await recomendedBooks.getRecomendedBooks();
    feauturedRecommended.value = response?.data?._rawValue?.data;
}
const feauturedLastest = ref({})
console.log("🚀 ~ feauturedLastest:", feauturedLastest)
const getDataLastest = async () => {
    try {
        const data = await recomendedBooks.getLastestBook();
        feauturedLastest.value = data?.data?._rawValue?.data;
    } catch (error) {
        console.error(error)
    }
}

useAsyncData(async () => {
    await getDataRecomended();
    await getDataLastest();
})
const valueRecomended = ref([
    {
        title: "Đề xuất cho bạn",
        description: "Một cuốn sách đề xuất với sức lôi cuốn sâu sắc và triết học, mở ra cánh cửa của tri thức và trí tưởng tượng.",
    },
    {
        title: "Phổ biến nhất năm nay",
        description: "Một cuốn sách đề xuất với sức lôi cuốn sâu sắc và triết học, mở ra cánh cửa của tri thức và trí tưởng tượng.",
    },
])


</script>
