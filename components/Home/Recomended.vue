<template>
    <div>
        <div class="h-auto mx-auto container md:px-20 px-8">
            <div class="flex justify-center gap-5">
                <div class="bg-orange-200 w-1/2 rounded-lg  ">
                    <div class="p-8 ">
                        <div class="flex flex-col gap-5">
                            <div class="text-4xl font-bold">Đề xuất cho bạn</div>
                            <div>
                                <p>
                                    Một cuốn sách đề xuất với sức lôi cuốn sâu sắc và triết học, mở ra cánh cửa của tri
                                    thức và trí tưởng tượng.
                                </p>
                            </div>
                            <div class="flex justify-center gap-7 w-full ">
                                <div>
                                    <img class="rounded-lg" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg"
                                        alt="">
                                </div>
                                <div>
                                    <img class="rounded-lg" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg"
                                        alt="">
                                </div>
                                <div>
                                    <img class="rounded-lg" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg"
                                        alt="">
                                </div>
                                <div>
                                    <img class="rounded-lg" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg"
                                        alt="">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="bg-orange-200 w-1/2 rounded-lg ">
                    <div class="p-8">
                        <div class="flex flex-col gap-5">
                            <div class="text-4xl font-bold">Nổi tiếng trong 2024</div>
                            <div>
                                <p>Các cuốn sách nổi bật nhất của năm, với sức hút đặc biệt và thông điệp sâu sắc, đã thu hút sự quan tâm và tán dương từ độc giả và giới phê bình.
                                </p>
                            </div>
                            <div class="flex justify-center gap-7 w-full ">
                                <div>
                                    <img class="rounded-lg" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg"
                                        alt="">
                                </div>
                                <div>
                                    <img class="rounded-lg" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg"
                                        alt="">
                                </div>
                                <div>
                                    <img class="rounded-lg" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg"
                                        alt="">
                                </div>
                                <div>
                                    <img class="rounded-lg" src="https://m.media-amazon.com/images/I/51fsx1MH+tL.jpg"
                                        alt="">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useHomeStore } from '~/stores/homeStore';
const recomendedBooks = useHomeStore();
const feauturedRecommended = ref({})
console.log("🚀 ~ feauturedRecommended:", feauturedRecommended)
const getDataRecomended = async () => {
    const response = await recomendedBooks.getRecomendedBooks();
    feauturedRecommended.value = response.data;
}

const feauturedLastest = ref({})
console.log("🚀 ~ feauturedLastest:", feauturedLastest)
const getDataLastest = async () => {
    try {
        const data = await recomendedBooks.getLastestBook();
        feauturedLastest.value = data?.data?._rawValue?.data
    } catch (error) {
        console.error(error)
    }
}




useAsyncData(async () => {
    await getDataRecomended();
    await getDataLastest();
})
</script>