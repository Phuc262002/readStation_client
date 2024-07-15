<template>

    <h1 class="text-xl text-[#1e293b] font-bold p-3">Phiếu trả của đơn hàng
        {{ returnHistoryStore?.ReturnLoanDetail?.loan_order_detail?.loan_order?.order_code }}</h1>
    <div class="flex flex-col gap-5">
        <div class="w-full p-5 flex flex-col gap-4 bg-[white] rounded-lg">
            <h1 class="text-base font-bold">Thông tin khách hàng</h1>
            <div class="border border-gray-100"></div>
            <div class="grid md:grid-cols-5">
                <div class="md:col-span-2 space-y-3 border-gray-200">
                    <div class="grid grid-cols-3">
                        <span class="text-base font-bold col-span-1">Tên khách hàng:</span>
                        <span class="text-base col-span-2">
                            {{ returnHistoryStore?.ReturnLoanDetail?.loan_order_detail?.loan_order?.user?.fullname
                            }}</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="text-base font-bold col-span-1">Email:</span>
                        <span class="text-base col-span-2">
                            {{ returnHistoryStore?.ReturnLoanDetail?.loan_order_detail?.loan_order?.user?.email
                            }}</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="text-base font-bold col-span-1">Số điện thoại:</span>
                        <span class="text-base col-span-2">
                            {{ returnHistoryStore?.ReturnLoanDetail?.loan_order_detail?.loan_order?.user?.phone
                            }}</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="w-full p-5 flex flex-col gap-4 bg-[white] rounded-lg">
            <h1 class="text-base font-bold">Thông tin phiếu trả</h1>
            <div class="border border-gray-100"></div>
            <div class="grid md:grid-cols-5">
                <div class="md:col-span-2 space-y-3 border-r border-gray-200">
                    <div class="grid grid-cols-3">
                        <span class="text-base font-bold col-span-1">Ngày khách trả sách:</span>
                        <span class="text-base col-span-2">{{
                            $dayjs(returnHistoryStore?.ReturnLoanDetail?.return_date).format("DD/MM/YYYY - HH:mm")
                            }}</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="text-base font-bold col-span-1">Hình thức trả sách:</span>
                        <span class="text-base col-span-2"
                            v-if="returnHistoryStore?.ReturnLoanDetail?.return_method === 'library'">Trả tại thư
                            viện</span>
                        <span class="text-base col-span-2"
                            v-if="returnHistoryStore?.ReturnLoanDetail?.return_method === 'pickup'">Giao trả đến thư viện</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="text-base font-bold col-span-1">Địa chỉ lấy sách:</span>
                        <span class="text-base col-span-2">{{ returnHistoryStore?.ReturnLoanDetail?.pickup_info?.address }}</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="text-base font-bold col-span-1">Ngày lấy sách:</span>
                        <span class="text-base col-span-2">11/06/2024 - 15:30</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <span class="text-base font-bold col-span-1">Ngày trả sách đến TV:</span>
                        <span class="text-base col-span-2">11/06/2024 - 17:30</span>
                    </div>
                </div>
                <div class="md:col-span-2 space-y-3 ml-5">
                    <div class="grid grid-cols-5">
                        <span class="text-base font-bold col-span-2">Phí giao trả sách:</span>
                        <span class="text-base col-span-3">20.000 đ</span>
                    </div>
                    <div class="grid grid-cols-5">
                        <span class="text-base font-bold col-span-2">Tình trạng sách:</span>
                        <span class="text-base col-span-3">Chưa có thông tin</span>
                    </div>
                    <div class="grid grid-cols-5">
                        <span class="text-base font-bold col-span-2">Phí phạt:</span>
                        <span class="text-base col-span-3">Không có phí phạt</span>
                    </div>
                    <div class="grid grid-cols-5">
                        <span class="text-base font-bold col-span-2">Người nhận sách:</span>
                        <span class="text-base col-span-3">Huỳnh Tuấn Kiệt</span>
                    </div>
                </div>
                <div class="md:col-span-1 space-y-3 ml-5">
                    <a-button @click="showSlip" class=" border-orange-500 text-orange-500">Cập nhật tình trạng
                        sách</a-button>
                </div>
            </div>
        </div>
        <SlipOrder :openModal="openModalSlip" :CloseModal="CloseSlip" />
        <div class="w-full p-5 flex flex-col gap-4 bg-[white] rounded-lg">
            <h1 class="text-base font-bold">Thông tin sách</h1>
            <div>
                <div class="border-t-2 border-b-2 border-gray-200 p-5 space-y-3">
                    <div class="flex gap-2 items-center">
                        <h1 class="text-base font-bold">Cho tôi xin một vé đi tuổi thơ - Phiên bản năm 2024</h1>
                    </div>
                    <div class="flex gap-5">
                        <img class="w-32 h-48"
                            src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-40.jpg.webp" alt="">
                        <div class="grid md:grid-cols-3">
                            <div class="md:col-span-2 space-y-3 border-r border-gray-200">
                                <div class="grid grid-cols-3">
                                    <span class="text-base font-bold">Ngày trả dự kiến:</span>
                                    <span class="text-base ">15/06/2024 - 17:30</span>
                                </div>
                                <div class="grid grid-cols-3">
                                    <span class="text-base font-bold">Ngày trả thực tế:</span>
                                    <span class="text-base ">11/06/2024 - 15:30</span>
                                </div>
                                <div class="grid grid-cols-3">
                                    <span class="text-base font-bold">Hình thức trả sách:</span>
                                    <span class="text-base ">Giao trả đến thư viện</span>
                                </div>
                            </div>
                            <div class="md:col-span-1 space-y-3 ml-5">
                                <div class="grid grid-cols-3">
                                    <span class="text-base font-bold col-span-2">Tiền cọc sách:</span>
                                    <span class="text-base col-span-1">100.000 đ</span>
                                </div>
                                <div class="grid grid-cols-3">
                                    <span class="text-base font-bold col-span-2">Phí dịch vụ:</span>
                                    <span class="text-base col-span-1">20.000 đ</span>
                                </div>
                                <div class="grid grid-cols-3">
                                    <span class="text-base font-bold col-span-2">Phí trễ hạn:</span>
                                    <span class="text-base col-span-1">0 đ</span>
                                </div>
                                <div class="grid grid-cols-3">
                                    <span class="text-base font-bold col-span-2">Phí gia hạn:</span>
                                    <span class="text-base col-span-1">0 đ</span>
                                </div>
                                <div class="grid grid-cols-3">
                                    <span class="text-base font-bold col-span-2 ">Phí giao trả sách:</span>
                                    <span class="text-base col-span-1">20.000 đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <NuxtLink to="/admin/product-manager/book-return-slip">
                    <a-button>Trở về</a-button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SlipOrder from '~/components/OrderAdmin/SlipOrder.vue';
const openModalSlip = ref<boolean>(false);
const route = useRoute();
const id = route.params.id;
const showSlip = () => {
    openModalSlip.value = true;
};
const CloseSlip = () => {
    openModalSlip.value = false;
};
const returnHistoryStore = useReturnHistoryStore();
useAsyncData(async () => {
    try {
        await returnHistoryStore.getOneReturnHistory(id);
    } catch (error) {
        console.log(error)
    }
});

</script>
