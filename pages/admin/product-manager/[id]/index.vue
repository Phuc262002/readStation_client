<template>
    <div class="flex flex-col gap-2">
        <h1 class="text-xl text-[#1e293b] font-bold pb-3">Chi tiết đơn hàng {{ orderStore?.getOneOrderAdmin?.data?.order_code }}</h1>
        <div class="flex flex-col gap-5">
            <div class="w-full p-5 flex flex-col gap-4 bg-[white] rounded-lg">
                <h1 class="text-base font-bold">Thông tin khách hàng</h1>
                <div class="border border-gray-100"></div>
                <div class="grid md:grid-cols-3">
                    <div class="md:col-span-1 space-y-3 border-r border-gray-200">
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Tên khách hàng:</span>
                            <span class="text-base ">{{ orderStore?.getOneOrderAdmin?.data?.user?.fullname }}</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Email:</span>
                            <span class="text-base ">{{ orderStore?.getOneOrderAdmin?.data?.user?.email }}</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Số điện thoại:</span>
                            <span class="text-base ">{{ orderStore?.getOneOrderAdmin?.data?.user?.phone }}</span>
                        </div>
                    </div>
                    <div class="md:col-span-2 space-y-3 ml-5">
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Địa chỉ nhận sách: </span>
                            <span class="text-base col-span-3">{{ orderStore?.getOneOrderAdmin?.data?.address}}</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Phương thức thanh toán: </span>
                            <span class="text-base col-span-3">{{ orderStore?.getOneOrderAdmin?.data?.payment_method}}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-full p-5 bg-[white] rounded-lg flex flex-col gap-3">
                <div class="flex justify-start gap-2 items-center">
                    <h1 class="text-base font-bold">Thông tin đơn hàng</h1>
                    <span class="p-2 rounded-lg bg-[#FFFBE5] flex justify-center items-center">
                        <h1 class="text-[#FFD700]">Đang xử lý</h1>
                    </span>
                </div>
                <div class="border border-gray-100"></div>
                <div class="grid md:grid-cols-3">
                    <div class="md:col-span-1 space-y-3 border-r border-gray-200">
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Số sách thuê:</span>
                            <span class="text-base ">{{ orderStore?.getOneOrderAdmin?.data?.order_details.lenght }}</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Ngày đặt sách:</span>
                            <span class="text-base ">10/06/2024</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Ngày nhận sách:</span>
                            <span class="text-base ">N/A</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Ngày trả dự kiến:</span>
                            <span class="text-base ">N/A</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Ngày trả thực tế:</span>
                            <span class="text-base ">N/A</span>
                        </div>
                    </div>
                    <div class="md:col-span-1 space-y-3 ml-5">
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Tiền cọc:</span>
                            <span class="text-base ">200.000đ</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Phí dịch vụ:</span>
                            <span class="text-base ">20.000đ</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Phí trễ hạn:</span>
                            <span class="text-base ">0đ</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Số lần gia hạn:</span>
                            <span class="text-base ">0/3</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Phí gia hạn:</span>
                            <span class="text-base ">0đ</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Tổng tiền:</span>
                            <span class="text-base ">220.000đ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full p-5 bg-white rounded-lg flex flex-col gap-5">
                <h1 class="text-base font-bold">Thông tin sách thuê</h1>
                <div class="border-t-2 border-gray-200 p-5 space-y-3">
                    <h1 class="text-base font-bold">Cho tôi xin một vé đi tuổi thơ - Phiên bản năm 2024 </h1>
                    <div class="flex gap-5">
                        <img class="w-32 h-48" src="https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg" alt="">
                        <div class="flex-1 space-y-3">
                            <div class="flex">
                                <h1 class="text-base font-bold w-1/6">Tác giả: </h1>
                                <h1 class="text-base">Nguyễn Nhật Ánh</h1>
                            </div>
                            <div class="flex">
                                <h1 class="text-base font-bold w-1/6">Danh mục: </h1>
                                <h1 class="text-base">Văn học</h1>
                            </div>
                            <div class="flex">
                                <h1 class="text-base font-bold w-1/6">Số lần gia hạn: </h1>
                                <h1 class="text-base">0/3</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end gap-2">
                    <a-button>Trở về</a-button>
                    <a-button class="border border-orange-400 text-orange-500">Từ chối</a-button>
                    <a-button type="primary">Xác định</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const orderId = route.params.id;
const orderStore = useOrderStore();
useAsyncData(async () => {
    await orderStore.getOneOrder(orderId);
});
</script>