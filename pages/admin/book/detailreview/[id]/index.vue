<template>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2 pt-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Đánh giá sách “Doraemon tập 31”</h5>
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
                        <span class="text-gray-500">Sách thiếu nhi</span>
                        <span class="text-lg font-bold">Doraemon tập 31</span>
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
                        <span class="font-bold text-base">Tên sách: </span>
                        <span class="text-base">Doraemon tập 31</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Tác giả: </span>
                        <span class="text-base">Fujiko Fujio</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Danh mục: </span>
                        <span class="text-base">Thiếu nhi</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Tủ sách: </span>
                        <span class="text-base">Thiếu nhi</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="font-bold text-base">Kệ sách: </span>
                        <span class="text-base">Thiếu nhi</span>
                    </div>
                </div>
                <div class="md:col-span-2 space-y-3">
                    <div class="grid grid-cols-4">
                        <span class="text-base font-bold col-span-1">Mô tả: </span>
                        <span class="text-base col-span-3">
                            Doraemon là loạt truyện tranh dài kỳ của Nhật Bản, nhưng cũng là bộ sách được trẻ em ở nhiều
                            nước yêu thích.</span>
                    </div>
                    <div class="grid grid-cols-4">
                        <span class="text-base font-bold col-span-1">Mô tả chi tiết:</span>
                        <span class="text-base col-span-3">
                            Câu chuyện xoay quanh chú mèo máy từ tương lai du hành xuyên thời gian để giúp đỡ cậu học
                            sinh tên là Nobita Nobi. Cố họa sĩ Fujiko F. Fujio sáng tác bộ truyện này và ra mắt lần đầu
                            tiên hồi tháng 12.1969</span>
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
            <a-table :columns="columns" :data-source="data">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'Assessor'">
                        <div class="flex flex-col gap-1">
                            <span>{{ record.Assessor }}</span>
                            <span>{{ record.phone }}</span>
                            <span>{{ record.email }}</span>
                        </div>
                    </template>
                    <template v-if="column.key === 'rating'">
                        <span>
                            <CommonRating :rating="record.rating" />
                        </span>
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
const route = useRoute();
const id = route.params.id;
import { Icon } from "@iconify/vue";
const columns = [
    {
        title: "Người đánh giá",
        dataIndex: "Assessor",
        key: "Assessor",
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
        dataIndex: "dicription",
        key: "dicription",
    },
    {
        title: "Thao tác",
        key: "action",
    },
];

const data = [
    {
        id: 1,
        title: "Doraemon tập 31 ",
        Assessor: "Trung Tran Quang",
        phone: "0123456789",
        email: "trung190579@gmail.com",
        date: "20/7/2024 - 11:00",
        rating: 5,
        dicription: "Sách rất hay",
    },
    {
        id: 2,
        title: "Trò Chơi Tâm Lý",
        Assessor: "Ton That An Khuong (FPL HCM)",
        phone: "0123456789",
        email: "khuongttaps26697@fpt.edu.vn",
        date: "19/07/2024 - 19:05",
        rating: 4,
        dicription: "Sách rất hay",
    },
];
</script>