<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="flex flex-col gap-5 w-full">
                <div class="bg-[white] rounded-lg h-20 w-full">
                    <div class="flex justify-between p-3">
                        <div class="flex justify-start gap-5">
                            <div>
                                <button class="w-14 h-14 rounded-full bg-orange-200">
                                    <UIcon class="text-3xl text-orange-400 items-center"
                                        name="i-material-symbols-book-4" />
                                </button>
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-gray-500">Sách văn học</span>
                                <span class="text-lg font-bold">Cho tôi xin một vé đi tuổi thơ </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-[white] rounded-lg h-auto w-full">
                    <div class="flex flex-col gap-3 p-5">
                        <div class="flex justify-between">
                            <div class="flex justify-start gap-3 items-center">
                                <span class="text-base font-bold">Thông tin chung</span>
                                <UIcon class="text-lg text-gray-500"
                                    name="i-material-symbols-draft-orders-outline-rounded" />
                            </div>
                            <div>
                                <a-button class="flex justify-center gap-2" type="primary">
                                    <UIcon class="text-lg text-white" name="i-material-symbols-edit" />
                                    <span class="text-white">Chỉnh sửa</span>
                                </a-button>
                            </div>
                        </div>
                        <div class="border border-gray-100"></div>
                        <div class="flex h-auto">
                            <div class="w-1/3">
                                <div class="flex gap-10">
                                    <div class="grid grid-rows-5 gap-4">
                                        <span class="font-bold text-base">Tên sách: </span>
                                        <span class="font-bold text-base">Tác giả: </span>
                                        <span class="font-bold text-base">Danh mục: </span>
                                        <span class="font-bold text-base">Tủ sách: </span>
                                        <span class="font-bold text-base">Kệ sách: </span>
                                    </div>
                                    <div class="grid grid-rows-5 gap-4">
                                        <span class="text-base">Cho tôi xin một vé đi tuổi thơ</span>
                                        <span class="text-base">Nguyễn Nhật Ánh</span>
                                        <span class="text-base">Văn học</span>
                                        <span class="text-base">Tủ 1</span>
                                        <span class="text-base">Kệ 1</span>
                                    </div>
                                </div>
                            </div>
                            <div class="border border-gray-200"></div>
                            <div class="w-2/3 pl-8">
                                <div class="flex flex-col gap-4">
                                    <div class="flex justify-start gap-10">
                                        <span class="text-base font-bold">Mô tả:</span>
                                        <span class="text-base">Truyện Cho tôi xin một vé đi tuổi thơ là sáng tác mới nhất của nhà văn Nguyễn Nhật Ánh</span>
                                    </div>
                                    <div class="flex justify-start gap-10">
                                        <span class="text-base font-bold">Mô tả chi tiết:</span>
                                        <span class="text-base">Truyện Cho tôi xin một vé đi tuổi thơ là sáng tác mới nhất của nhà văn Nguyễn Nhật Ánh. Nhà văn mời người đọc lên chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà, thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-5">
                    <!-- Phiên bản 2024 -->
                    <div>
                        <div class="bg-[white] rounded-lg h-auto flex flex-col gap-3 p-5">
                            <div class="flex justify-between">
                                <h1 class="text-base font-bold">Phiên bản năm 2024</h1>
                                <a-button class="flex justify-center items-center gap-1 bg-[#344054]" type="primary">
                                    <UIcon class="text-lg text-white" name="i-material-symbols-edit" />
                                    <span class="text-white text-base">Chỉnh sửa</span>
                                </a-button>
                            </div>
                            <div class="border border-gray-200"></div>
                            <div class="flex justify-start gap-5">
                                <div class="py-10 px-5">
                                    <div class="flex justify-center items-center gap-4">
                                        <img class="w-28 h-44"
                                            src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg" alt="">
                                        <div class="flex-flex-col items-start">
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="border border-r-1 border-gray-200"></div>
                                <div class="grid grid-row-2">
                                    <div class="flex gap-10">
                                        <div class="grid grid-rows-9 gap-3">
                                            <span class="font-bold text-base">Số lượng: </span>
                                            <span class="font-bold text-base">Giá: </span>
                                            <span class="font-bold text-base">Tiền cọc: </span>
                                            <span class="font-bold text-base">Loại bìa: </span>
                                            <span class="font-bold text-base">Số trang: </span>
                                            <span class="font-bold text-base">Ngôn ngữ: </span>
                                            <span class="font-bold text-base">Người dịch: </span>
                                            <span class="font-bold text-base">Ngày phát hành: </span>
                                            <span class="font-bold text-base">Công ty phát hành:</span>
                                        </div>
                                        <div class="grid grid-rows-9 gap-3">
                                            <span class="text-base">50</span>
                                            <span class="text-base">50.000đ</span>
                                            <span class="text-base">20%</span>
                                            <span class="text-base">Bìa Cứng</span>
                                            <span class="text-base">200</span>
                                            <span class="text-base">Tiếng Việt</span>
                                            <span class="text-base">N/A</span>
                                            <span class="text-base">10/06/2018</span>
                                            <span class="text-base">NXB Trẻ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Phiên bản 2023 -->
                    <div>
                        <div class="bg-[white] rounded-lg h-auto flex flex-col gap-3 p-5">
                            <div class="flex justify-between">
                                <h1 class="text-base font-bold">Phiên bản năm 2023</h1>
                                <a-button class="flex justify-center items-center gap-1 bg-[#344054]" type="primary">
                                    <UIcon class="text-lg text-white" name="i-material-symbols-edit" />
                                    <span class="text-white text-base">Chỉnh sửa</span>
                                </a-button>
                            </div>
                            <div class="border border-gray-200"></div>
                            <div class="flex justify-start gap-5">
                                <div class="py-10 px-5">
                                    <div class="flex justify-center items-center gap-4">
                                        <img class="w-28 h-44"
                                            src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg" alt="">
                                        <div class="flex-flex-col items-start">
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="border border-r-1 border-gray-200"></div>
                                <div class="grid grid-row-2">
                                    <div class="flex gap-10">
                                        <div class="grid grid-rows-9 gap-3">
                                            <span class="font-bold text-base">Số lượng: </span>
                                            <span class="font-bold text-base">Giá: </span>
                                            <span class="font-bold text-base">Tiền cọc: </span>
                                            <span class="font-bold text-base">Loại bìa: </span>
                                            <span class="font-bold text-base">Số trang: </span>
                                            <span class="font-bold text-base">Ngôn ngữ: </span>
                                            <span class="font-bold text-base">Người dịch: </span>
                                            <span class="font-bold text-base">Ngày phát hành: </span>
                                            <span class="font-bold text-base">Công ty phát hành:</span>
                                        </div>
                                        <div class="grid grid-rows-9 gap-3">
                                            <span class="text-base">50</span>
                                            <span class="text-base">50.000đ</span>
                                            <span class="text-base">20%</span>
                                            <span class="text-base">Bìa Cứng</span>
                                            <span class="text-base">200</span>
                                            <span class="text-base">Tiếng Việt</span>
                                            <span class="text-base">N/A</span>
                                            <span class="text-base">10/06/2018</span>
                                            <span class="text-base">NXB Trẻ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Phiên bản 2022 -->
                    <div>
                        <div class="bg-[white] rounded-lg h-auto flex flex-col gap-3 p-5">
                            <div class="flex justify-between">
                                <h1 class="text-base font-bold">Phiên bản năm 2022</h1>
                                <a-button class="flex justify-center items-center gap-1 bg-[#344054]" type="primary">
                                    <UIcon class="text-lg text-white" name="i-material-symbols-edit" />
                                    <span class="text-white text-base">Chỉnh sửa</span>
                                </a-button>
                            </div>
                            <div class="border border-gray-200"></div>
                            <div class="flex justify-start gap-5">
                                <div class="py-10 px-5">
                                    <div class="flex justify-center items-center gap-4">
                                        <img class="w-28 h-44"
                                            src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg" alt="">
                                        <div class="flex-flex-col items-start">
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>
                                            <div class="p-2">
                                                <img class="w-12 h-20"
                                                    src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg"
                                                    alt="">
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="border border-r-1 border-gray-200"></div>
                                <div class="grid grid-row-2">
                                    <div class="flex gap-10">
                                        <div class="grid grid-rows-9 gap-3">
                                            <span class="font-bold text-base">Số lượng: </span>
                                            <span class="font-bold text-base">Giá: </span>
                                            <span class="font-bold text-base">Tiền cọc: </span>
                                            <span class="font-bold text-base">Loại bìa: </span>
                                            <span class="font-bold text-base">Số trang: </span>
                                            <span class="font-bold text-base">Ngôn ngữ: </span>
                                            <span class="font-bold text-base">Người dịch: </span>
                                            <span class="font-bold text-base">Ngày phát hành: </span>
                                            <span class="font-bold text-base">Công ty phát hành:</span>
                                        </div>
                                        <div class="grid grid-rows-9 gap-3">
                                            <span class="text-base">50</span>
                                            <span class="text-base">50.000đ</span>
                                            <span class="text-base">20%</span>
                                            <span class="text-base">Bìa Cứng</span>
                                            <span class="text-base">200</span>
                                            <span class="text-base">Tiếng Việt</span>
                                            <span class="text-base">N/A</span>
                                            <span class="text-base">10/06/2018</span>
                                            <span class="text-base">NXB Trẻ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>