<template>
    <div class="flex flex-col gap-2">
        <h1 class="text-xl text-[#1e293b] font-bold pb-3">Chi tiết đơn hàng {{
            orderStore?.getOneOrderAdmin?.data?.order_code }}</h1>
        <!-- <div v-for="(items, index) in orderStore?.getOneOrderAdmin?.data?.order_details" :key="index">
            <div v-if="items?.status_od === 'out_of_date'">
                <div class='w-full p-5 bg-[white] rounded-lg flex flex-col gap-2'>
                    <span class="text-tag-text-06">Khách hàng đã quá hạn trả sách. Hãy thông báo cho khách hàng lựa chọn
                        một trong hai phương án sau:</span>
                    <span class="text-tag-text-06 pl-5">1. Tiếp tục gia hạn thời gian thuê sách</span>
                    <span class="text-tag-text-06 pl-5">2. Trả sách ngay để tránh thêm phí phạt.</span>
                </div>
            </div>
        </div> -->
        <div class="flex flex-col gap-5">
            <div class="w-full p-5 flex flex-col gap-4 bg-[white] rounded-lg">
                <h1 class="text-base font-bold">Thông tin khách hàng</h1>
                <div class="border border-gray-100"></div>
                <div class="grid md:grid-cols-5">
                    <div class="md:col-span-2 space-y-3 border-r border-gray-200">
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold col-span-1">Tên khách hàng:</span>
                            <span class="text-base col-span-2">{{ orderStore?.getOneOrderAdmin?.data?.user?.fullname
                                }}</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold col-span-1">Email:</span>
                            <span class="text-base col-span-2">{{ orderStore?.getOneOrderAdmin?.data?.user?.email
                                }}</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold col-span-1">Số điện thoại:</span>
                            <span class="text-base col-span-2">{{ orderStore?.getOneOrderAdmin?.data?.user?.phone
                                }}</span>
                        </div>
                    </div>
                    <div class="md:col-span-3 space-y-3 ml-5">
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Địa chỉ nhận sách: </span>
                            <span class="text-base col-span-3">Chưa có thông tin</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Phương thức thanh toán: </span>
                            <span class="text-base col-span-3"
                                v-if="orderStore?.getOneOrderAdmin?.data?.payment_method === 'cash'">Tiền mặt</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-full p-5 bg-[white] rounded-lg flex flex-col gap-3">
                <div class="flex gap-2 items-center">
                    <h1 class="text-base font-bold">Thông tin đơn hàng</h1>
                    <span>
                        <span v-if="orderStore?.getOneOrderAdmin?.data?.status === 'pending'"
                            class="text-tag-text-01 bg-tag-bg-01 p-2 rounded-lg flex justify-center items-center">Đang
                            xử lý</span>
                        <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'approved'"
                            class="text-tag-text-04 bg-tag-bg-04 p-2 rounded-lg flex justify-center items-center">approved</span>
                        <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'ready_for_pickup'"
                            class="text-tag-text-06 bg-tag-bg-06 p-2 rounded-lg flex justify-center items-center">ready_for_pickup</span>
                        <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'preparing_shipment'"
                            class="text-tag-text-05 bg-tag-bg-05 p-2 rounded-lg flex justify-center items-center">
                            preparing_shipment</span>
                        <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'in_transit'"
                            class="text-tag-text-07 bg-tag-bg-07 p-2 rounded-lg flex justify-center items-center">in_transit</span>
                        <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'extended'"
                            class="text-tag-text-02 bg-tag-bg-02 p-2 rounded-lg flex justify-center items-center">extended</span>
                        <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'active'"
                            class="text-tag-text-03 bg-tag-bg-03 p-2 rounded-lg flex justify-center items-center">active</span>
                        <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'returning'"
                            class="text-tag-text-12 bg-tag-bg-12 p-2 rounded-lg flex justify-center items-center">returning</span>
                        <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'completed'"
                            class="text-tag-text-13 bg-tag-bg-13 p-2 rounded-lg flex justify-center items-center">completed</span>
                         <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'canceled'"
                            class="text-tag-text-13 bg-tag-bg-13 p-2 rounded-lg flex justify-center items-center">canceled</span>
                         <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'overdue'"
                            class="text-tag-text-13 bg-tag-bg-13 p-2 rounded-lg flex justify-center items-center">overdue</span>
                    </span>
                </div>
                <div class="border border-gray-100"></div>
                <div class="grid md:grid-cols-5">
                    <div class="md:col-span-2 space-y-3 border-r border-gray-200">
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Số sách thuê:</span>
                            <span class="text-base ">{{ orderStore?.getOneOrderAdmin?.data?.loan_order_details.length }}</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Ngày đặt sách:</span>
                            <span class="text-base ">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Ngày nhận sách:</span>
                            <span class="text-base ">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Ngày trả dự kiến:</span>
                            <span class="text-base ">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Ngày trả thực tế:</span>
                            <span class="text-base ">Chưa có dữ liệu</span>
                        </div>
                    </div>
                    <div class="md:col-span-3 space-y-3 ml-5">
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Tiền cọc:</span>
                            <span class="text-base col-span-3">0đ</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Phí dịch vụ:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Phí trễ hạn:</span>
                            <span class="text-base col-span-3">0đ</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Số lần gia hạn:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Phí gia hạn:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Tổng tiền:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                    </div>
                </div>
                <!-- <div class="flex justify-end" v-if="orderStore?.getOneOrderAdmin?.data?.status === 'hiring'">
                    <div class="flex gap-2">
                        <a-button class="border-orange-400 text-orange-500">Trả sách</a-button>
                        <a-button type="primary">Giao hạn toàn bộ</a-button>
                    </div>
                </div> -->
            </div>
            <div class="w-full p-5 bg-white rounded-lg flex flex-col gap-5">
                <h1 class="text-base font-bold">Thông tin sách thuê</h1>
                <div>
                    <div class="border-t-2 border-gray-200 p-5 space-y-3">
                        <div class="flex gap-2 items-center">
                            <h1 class="text-base font-bold">Tên sách + phiên bản</h1>
                            <!-- <span v-if="items?.status_od === 'pending'"
                                class="text-tag-text-01 bg-tag-bg-01 p-2 rounded-lg flex justify-center items-center">Đang
                                xử lý</span>
                            <span v-if="items?.status_od === 'out_of_date'"
                                class="text-tag-text-06 bg-tag-bg-06 p-2 rounded-lg flex justify-center items-center">Quá
                                hạn</span> -->
                        </div>
                        <div class="flex gap-5">
                            <img class="w-32 h-48" src="" alt="">
                            <div class="grid md:grid-cols-4">
                                <div class="md:col-span-2 space-y-3 border-r border-gray-200">
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Tác giả: </span>
                                        <span class="text-base ">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Danh mục:</span>
                                        <span class="text-base ">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Số lần gia hạn:</span>
                                        <span class="text-base ">0/3</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Ngày trả dự kiến:</span>
                                        <span class="text-base ">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Ngày trả thực tế:</span>
                                        <span class="text-base ">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Hình thức trả sách:</span>
                                        <span class="text-base ">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Khách đánh giá:</span>
                                        <span class="text-base ">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Nội dung:</span>
                                        <span class="text-base ">Chưa có dữ liệu</span>
                                    </div>
                                </div>
                                <div class="md:col-span-2 space-y-3 ml-5">
                                    <div class="grid grid-cols-3">
                                        <span class="text-base font-bold col-span-2">Tiền cọc sách:</span>
                                        <span class="text-base col-span-1">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <span class="text-base font-bold col-span-2">Phầm trăm cọc:</span>
                                        <span class="text-base col-span-1">20%</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <span class="text-base font-bold col-span-2">Phí dịch vụ:</span>
                                        <span class="text-base col-span-1">20.000 đ</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <span class="text-base font-bold col-span-2">Phí trễ hạn:</span>
                                        <span class="text-base col-span-1">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <span class="text-base font-bold col-span-2 ">Phí gia hạn:</span>
                                        <span class="text-base col-span-1">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <span class="text-base font-bold col-span-2">Phí giao trả sách:</span>
                                        <span class="text-base col-span-1">Chưa có dữ liệu</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <span class="text-base font-bold col-span-2 ">Tổng tiền</span>
                                        <span class="text-base col-span-1">120.000 đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="flex justify-end" v-if="items?.status_od === 'out_of_date'">
                            <div class="flex gap-2">
                                <a-button class="border-orange-400 text-orange-500">Trả sách</a-button>
                                <a-button type="primary">Gia hạn</a-button>
                            </div>
                        </div> -->
                    </div>
                </div>
                <!-- <div v-if="orderStore?.getOneOrderAdmin?.data?.status === 'pending'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                        <a-button class="border border-orange-400 text-orange-500">Hủy</a-button>
                        <a-button type="primary">Xác nhận</a-button>
                    </div>
                </div>
                <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'hiring'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                    </div>
                </div>
                <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'approved'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                        <a-button type="primary">Giao sách</a-button>
                    </div>
                </div>
                <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'wating_take_book'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                    </div>
                </div>
                <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'canceled'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                    </div>
                </div>
                <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'wating_return'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                    </div>
                </div>
                <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'increasing'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                    </div>
                </div>
                <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'out_of_date'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                    </div>
                </div>
                <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'completed'">
                    <div class="flex justify-end gap-2">
                        <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                    </div>
                </div> -->
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