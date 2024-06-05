<template>
    <div class="h-auto mx-auto container md:px-20 px-8">
        <div class="grid grid-cols-4 col-span-4 gap-4 py-14 ">
            <div class="border border-gray-00 rounded-2xl flex justify-center items-center p-8">
                <div class="flex justify-center items-center gap-10">
                    <div class="w-1/2"> <button
                            class="w-20 h-20 border rounded-full relative bg-[#d8d4f7] hover:-translate-y-1 hover:scale-110 duration-300 ">
                            <UIcon class="text-4xl text-[#7261D4]" name="i-material-symbols-book-4" />
                        </button></div>

                    <div class="w-1/2">
                        <div class="flex flex-col gap-2 uppercase">
                            <div class="font-bold text-xl">{{ feauturedSatistic?.total_books}}</div>
                            <div class="text-[#7d7d7d99]">Quyển sách</div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="border border-gray-00 rounded-2xl flex justify-center items-center p-8">
                <div class="flex justify-center items-center gap-10">
                    <div class="w-1/2">
                        <button
                            class="w-20 h-20 border rounded-full relative bg-[#cfeff7]   hover:-translate-y-1 hover:scale-110 duration-300">
                            <UIcon class="text-4xl text-[#4dc1db]" name="i-material-symbols-groups-2-outline" />
                        </button>
                    </div>

                    <div class="w-1/2">
                        <div class="flex flex-col gap-2 uppercase">
                            <div class="font-bold text-xl">{{ feauturedSatistic?.total_authors}}</div>
                            <div class="text-[#7d7d7d99]">Tác giả</div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="border border-gray-00 rounded-2xl flex justify-center items-center p-8">

                <div class="flex justify-center items-center gap-10">
                    <div class="w-1/2">
                        <button
                            class="w-20 h-20 border rounded-full relative bg-[#d4f4c3]  hover:-translate-y-1 hover:scale-110 duration-300">
                            <UIcon class="text-4xl text-[#72C949]"
                                name="i-material-symbols-shopping-cart-outline-rounded" />
                        </button>
                    </div>

                    <div class="w-1/2">
                        <div class="flex flex-col gap-2 uppercase">
                            <div class="font-bold text-xl">{{ feauturedSatistic?.total_book_orders}}</div>
                            <div class="text-[#7d7d7d99]">Đơn hàng</div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="border border-gray-00 rounded-2xl flex justify-center items-center p-8">
                <div class="flex justify-center items-center gap-10">
                    <div class="w-1/2">
                        <button
                            class=" w-20 h-20 border rounded-full relative bg-[#f7e4cf]  hover:-translate-y-1 hover:scale-110 duration-300">
                            <UIcon class="text-4xl text-[#fa8c17]" name="i-material-symbols-mood-outline-rounded" />
                        </button>
                    </div>
                    <div class="w-1/2">
                        <div class="flex flex-col gap-2 uppercase">
                            <div class="font-bold text-xl">{{ feauturedSatistic?.total_users }}</div>
                            <div class="text-[#7d7d7d99]">Khách hàng</div>
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
const getStatistic = useHomeStore()
const feauturedSatistic = ref({})
const getData = async () => {
    try {
        const data = await getStatistic.getStatistic();
        feauturedSatistic.value = data?.data?._rawValue?.data
    } catch (error) {
        console.error(error)
    }
}
useAsyncData(async () => {
    await getData()
})
</script>
