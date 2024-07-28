<template>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2 pt-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Đánh giá sách “{{
                    bookDetailReview.adminGetOneBookReview?.book_details?.book?.title }} -
                    Phiên bản năm {{ bookDetailReview.adminGetOneBookReview?.book_details?.book_version
                    }}”</h5>
            </div>
        </div>
        <div class="bg-[white] rounded-lg h-20 w-full">
            <div class="flex justify-between p-3">
                <div class="flex justify-start gap-5">
                    <div>
                        <button class="w-14 h-14 rounded-full bg-orange-200">
                            <UIcon class="text-3xl text-orange-400 items-center" name="i-material-symbols-book-4" />
                        </button>
                    </div>
                    <div class="flex flex-col gap-1">
                        <span class="text-gray-500">Sách {{
                            bookDetailReview.adminGetOneBookReview?.book_details?.book?.category?.name }}</span>
                        <span class="text-lg font-bold">{{
                            bookDetailReview.adminGetOneBookReview?.book_details?.book?.title }} -
                            Phiên bản năm {{ bookDetailReview.adminGetOneBookReview?.book_details?.book_version
                            }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[white] rounded-lg h-auto w-full flex flex-col gap-3 p-5">
            <div class="">
                <div class="flex justify-start gap-3 items-center">
                    <span class="text-base font-bold">Thông tin chung</span>
                    <UIcon class="text-lg text-gray-500" name="i-material-symbols-draft-orders-outline-rounded" />
                </div>
            </div>
            <div class="border border-gray-100"></div>
            <div class="grid md:grid-cols-3 gap-5">
                <div class="md:col-span-1 space-y-2 border-r border-gray-200">
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Ảnh bìa: </span>
                        <img class="rounded-lg" :src="bookDetailReview.adminGetOneBookReview?.book_details?.poster" />
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Tác giả: </span>
                        <span class="text-base">{{
                            bookDetailReview.adminGetOneBookReview?.book_details?.book?.author?.author }}</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Danh mục: </span>
                        <span class="text-base">{{
                            bookDetailReview.adminGetOneBookReview?.book_details?.book?.category?.name }}</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Tủ sách: </span>
                        <span class="text-base">Chưa có dữ liệu</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Kệ sách: </span>
                        <span class="text-base">{{
                            bookDetailReview.adminGetOneBookReview?.book_details?.book?.shelve?.name }}</span>
                    </div>

                </div>
                <div class="md:col-span-2 space-y-3">
                    <div class="grid grid-cols-4">
                        <span class="text-base font-bold col-span-1">Mô tả: </span>
                        <span class="text-base col-span-3">
                            {{
                                bookDetailReview.adminGetOneBookReview?.book_details?.book?.description_summary }}</span>
                    </div>
                    <div class="grid grid-cols-4">
                        <span class="text-base font-bold col-span-1">Mô tả chi tiết:</span>
                        <span class="text-base col-span-3"
                            v-html="bookDetailReview.adminGetOneBookReview?.book_details?.book?.description">
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[white] rounded-lg h-auto w-full flex flex-col gap-3 p-5">
            <div>
                <a-dropdown :trigger="['click']">
                    <template #overlay>
                        <a-menu class="">
                            <a-menu-item>Tất cả sao</a-menu-item>
                            <a-menu-item>
                                <CommonRating :rating="5" />
                            </a-menu-item>
                            <a-menu-item>
                                <CommonRating :rating="4" />
                            </a-menu-item>
                            <a-menu-item>
                                <CommonRating :rating="3" />
                            </a-menu-item>
                            <a-menu-item>
                                <CommonRating :rating="2" />
                            </a-menu-item>
                            <a-menu-item>
                                <CommonRating :rating="1" />
                            </a-menu-item>
                        </a-menu>
                    </template>
                    <a-button size="large" class="flex gap-3 items-center">
                        Số sao
                        <DownOutlined />
                    </a-button>
                </a-dropdown>
            </div>
            <a-table :columns="columns" :data-source="bookDetailReview.adminGetOneBookReview?.bookReview"
                :loading="bookDetailReview.isLoading" :pagination="false">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'user'">
                        <div class="flex flex-col gap-1">
                            <span>{{ record?.user?.fullname }}</span>
                            <span>{{ record?.user?.phone }}</span>
                            <span>{{ record?.user?.email }}</span>
                        </div>
                    </template>
                    <template v-else-if="column.key === 'date'">
                        <span>{{ $dayjs(record?.review_date).format("DD/MM/YYYY - HH:MM") ?
                            $dayjs(record?.review_date).format("DD/MM/YYYY - HH:MM") : '' }}</span>
                    </template>
                    <template v-if="column.key === 'rating'">
                        <span>
                            <CommonRating :rating="record.rating" />
                        </span>
                    </template>
                    <template v-if="column.key === 'review_text'">
                        <span>{{ record?.review_text }}</span>
                    </template>
                    <template v-else-if="column.key === 'action'">
                        <a-tooltip placement="top" color="black">
                            <template #title>
                                <span>Ẩn</span>
                            </template>
                            <button
                                class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center cursor-pointer w-8 h-8 rounded-md">
                                <Icon icon="bitcoin-icons:hidden-filled" class="group-hover:text-[#212122]" />
                            </button>
                        </a-tooltip>
                    </template>
                </template>
            </a-table>
        </div>
    </div>

</template>
<script setup>

import { Icon } from "@iconify/vue";
const route = useRoute();
const id = route.params.id;
const bookDetailReview = useBookReviewStore();
useAsyncData(async () => {
    try {
        await bookDetailReview.getOneBookReview(id);
    } catch (error) {
        console.log(error);
    }
});

const columns = [
    {
        title: "Người đánh giá",
        dataIndex: "user",
        key: "user",
    },
    {
        title: "Thời gian",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "Số sao đánh giá",
        dataIndex: "rating",
        key: "rating",
    },
    {
        title: "Nội dung đánh giá",
        dataIndex: "review_text",
        key: "review_text",
    },
    {
        title: "Thao tác",
        key: "action",
    },
];


</script>