<template>
    <div class="flex flex-col gap-2">
        <h1 class="text-xl text-[#1e293b] font-bold pb-3">Chi tiết đơn hàng {{
            orderStore?.getOneOrderAdmin?.data?.order_code }}</h1>

        <div v-if="orderStore?.getOneOrderAdmin?.data?.status === 'overdue'">
            <div class='w-full p-5 bg-[white] rounded-lg flex flex-col gap-2'>
                <span class="text-tag-text-06">Khách hàng đã quá hạn trả sách. Hãy thông báo cho khách hàng lựa chọn
                    một trong hai phương án sau:</span>
                <span class="text-tag-text-06 pl-5">1. Tiếp tục gia hạn thời gian thuê sách</span>
                <span class="text-tag-text-06 pl-5">2. Trả sách ngay để tránh thêm phí phạt.</span>
            </div>
        </div>
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
                            <span class="text-base col-span-2">{{ orderStore?.getOneOrderAdmin?.data?.user?.phone ?
                                orderStore.getOneOrderAdmin.data.user.phone : "Chưa có thông tin" }}</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold col-span-1">Vai trò</span>
                            <span class="text-base col-span-2">
                                <div class="p-1 w-14 text-center rounded-lg text-tag-text-01 bg-tag-bg-01">
                                    HS/SV
                                </div>
                            </span>
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
                            <span class="text-base col-span-3"
                                v-if="orderStore?.getOneOrderAdmin?.data?.payment_method === 'online'">Chuyển
                                khoản</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="w-full p-5 bg-[white] rounded-lg flex flex-col gap-3">
                <div class="flex gap-2 items-center">
                    <h1 class="text-base font-bold">Thông tin đơn hàng</h1>
                    <span>
                        <a-tag :bordered="false" v-if="orderStore?.getOneOrderAdmin?.data?.status === 'wating_payment'"
                            class="bg-tag-bg-01 text-tag-text-01">
                            Chờ thanh toán
                        </a-tag>
                    </span>
                    <span v-if="orderStore?.getOneOrderAdmin?.data?.status === 'pending'"
                        class="text-tag-text-01 bg-tag-bg-01 p-2 rounded-lg flex justify-center items-center">Đang
                        xử lý</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'approved'"
                        class="text-tag-text-02 bg-tag-bg-02 p-2 rounded-lg flex justify-center items-center">Đã xác
                        nhận</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'ready_for_pickup'"
                        class="bg-tag-bg-14 text-tag-text-14 p-2 rounded-lg flex justify-center items-center">Đơn
                        hàng sẵn sàng</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'preparing_shipment'"
                        class="text-tag-text-01 bg-tag-bg-01 p-2 rounded-lg flex justify-center items-center">Chuẩn
                        bị giao hàng</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'in_transit'"
                        class="text-tag-text-03 bg-tag-bg-03 p-2 rounded-lg flex justify-center items-center">Đang
                        giao</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'extended'"
                        class="text-tag-text-12 bg-tag-bg-12 p-2 rounded-lg flex justify-center items-center">Gia
                        hạn</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'active'"
                        class="text-tag-text-04 bg-tag-bg-04 p-2 rounded-lg flex justify-center items-center">Đang
                        thuê</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'returning'"
                        class="text-tag-text-13 bg-tag-bg-13 p-2 rounded-lg flex justify-center items-center"> Đang
                        trả sách</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'completed'"
                        class="text-tag-text-05 bg-tag-bg-05 p-2 rounded-lg flex justify-center items-center"> Hoàn
                        thành</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'canceled'"
                        class="text-tag-text-07 bg-tag-bg-07 p-2 rounded-lg flex justify-center items-center">Đã
                        hủy</span>
                    <span v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'overdue'"
                        class="text-tag-text-06 bg-tag-bg-06 p-2 rounded-lg flex justify-center items-center">Quá
                        hạn</span>
                </div>
                <div class="border border-gray-100"></div>
                <div class="grid md:grid-cols-5">
                    <div class="md:col-span-2 space-y-3 border-r border-gray-200">
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Số sách thuê:</span>
                            <span class="text-base ">{{ orderStore?.getOneOrderAdmin?.data?.loan_order_details.length
                                }}</span>
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
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Số lần gia hạn:</span>
                            <span class="text-base ">0/3</span>
                        </div>
                        <div class="grid grid-cols-3">
                            <span class="text-base font-bold">Hình thức vận chuyển:</span>
                            <span class="text-base "
                                v-if="orderStore?.getOneOrderAdmin?.data?.delivery_method === 'shipper'">Giao hàng tận
                                nơi</span>
                            <span class="text-base "
                                v-if="orderStore?.getOneOrderAdmin?.data?.delivery_method === 'pickup'">Nhận tại thư
                                viện</span>
                        </div>
                    </div>
                    <div class="md:col-span-3 space-y-3 ml-5">
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Tổng tiền cọc thuê sách:</span>
                            <span class="text-base col-span-3">chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Phí vận chuyển:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu </span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Phí dịch vụ:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Tổng phí gia hạn:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Tổng phí trễ hạn:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Tổng phí giao trả sách:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Tổng tiền nhận:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                        <div class="grid grid-cols-4">
                            <span class="text-base font-bold col-span-1">Tiền cọc trả lại:</span>
                            <span class="text-base col-span-3">Chưa có dữ liệu</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end" v-if="orderStore?.getOneOrderAdmin?.data?.status === 'active'">
                    <div class="flex gap-2">
                        <a-button class="border-orange-400 text-orange-500">Trả sách</a-button>
                        <a-button type="primary"
                            @click="showModalExtendsionAll(orderStore?.getOneOrderAdmin?.data?.loan_order_details)">Giao
                            hạn toàn bộ</a-button>
                    </div>
                </div>
            </div>
            <div class="w-full p-5 bg-white rounded-lg flex flex-col gap-5">
                <h1 class="text-base font-bold">Thông tin sách thuê</h1>
                <div v-if="orderStore?.getOneOrderAdmin?.data?.status === 'active'">
                    <div class='w-full bg-[white] rounded-lg flex flex-col gap-2'>
                        <span class="text-tag-text-06">Lưu ý: :</span>
                        <span class="text-tag-text-06 pl-5">1. Thời gian gia hạn sẽ được cộng dồn </span>
                        <span class="text-tag-text-06 pl-5">2. Gia hạn riêng lẻ từng sách sẽ tính là 1 lần gia hạn. Nếu
                            bạn muốn gia hạn toàn bộ trong 1 lần hãy chọn “ Gia hạn toàn bộ ” ở trên.</span>
                    </div>
                </div>
                <div v-for="(items, index) in orderStore?.getOneOrderAdmin?.data?.loan_order_details" :key=index>
                    <div class="border-t-2 border-gray-200 p-5 space-y-3">
                        <div class="flex gap-2 items-center">
                            <h1 class="text-base font-bold">{{ items?.book_details?.book?.title }} - {{
                                items?.book_details.book_version }} </h1>
                            <span v-if="items?.status === 'active'"
                                class="bg-tag-bg-04 text-tag-text-04 p-2 rounded-lg flex justify-center items-center">Đang thuê</span>
                            <span v-else-if="items?.status === 'extended'"
                                class="text-tag-text-13 bg-tag-bg-13 p-2 rounded-lg flex justify-center items-center">
                                Gia hạn</span>
                            <span v-else-if="items?.status === 'completed'"
                                class="text-tag-text-05 bg-tag-bg-05 p-2 rounded-lg flex justify-center items-center">
                                Hoàn
                                thành</span>
                            <span v-else-if="items?.status === 'overdue'"
                                class="text-tag-text-06 bg-tag-bg-06 p-2 rounded-lg flex justify-center items-center">Quá
                                hạn</span>
                        </div>
                        <div class="flex gap-5">
                            <img class="w-32 h-48" :src="items?.book_details?.poster" alt="">
                            <div class="grid md:grid-cols-4">
                                <div class="md:col-span-2 space-y-3 border-r border-gray-200">
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Tác giả: </span>
                                        <span class="text-base ">{{ items?.book_details?.book?.author?.author }}</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Danh mục:</span>
                                        <span class="text-base ">{{ items?.book_details?.book?.category?.name }}</span>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-base font-bold">Số lần gia hạn:</span>
                                        <span class="text-base ">0/3 </span>
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
                                        <span class="text-base font-bold col-span-2">Phí dịch vụ:</span>
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
                                </div>
                            </div>

                        </div>
                        <div class="flex justify-end gap-2"
                            v-if="items?.status == 'active'">
                            <a-button @click="showReturnBook(items)">Trả sách</a-button>
                            <a-button type="primary" @click="showModalExtend(items)">Gia hạn</a-button>
                        </div>
                        <!-- <div class="flex justify-end" v-if="items?.status === 'extended'">
                            <div class="flex gap-2">
                                <a-button class="border-orange-400 text-orange-500" @click="showReturnBook(items)">Trả
                                    sách</a-button>
                                <a-button type="primary" @click="showModalExtend(items)">Gia hạn</a-button>
                            </div>
                        </div> -->
                        <div class="flex justify-end" v-else-if="items?.status === 'overdue'">
                            <div class="flex gap-2">
                                <a-button class="border-orange-400 text-orange-500">Trả sách</a-button>
                                <a-button type="primary">Gia hạn</a-button>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div v-if="orderStore?.getOneOrderAdmin?.data?.status === 'wating_payment'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                            <a-button type="primary" @click="setStatus('pending')">Đã thanh toán</a-button>
                        </div>
                    </div>
                    <div v-if="orderStore?.getOneOrderAdmin?.data?.status === 'pending'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                            <a-button class="border border-orange-400 text-orange-500"
                                @click="showModalAdd">Hủy</a-button>
                            <a-button type="primary" @click="setStatus('approved')">Xác
                                nhận</a-button>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'approved'">
                        <div v-if="orderStore?.getOneOrderAdmin?.data?.delivery_method === 'shipper'">
                            <div class="flex justify-end gap-2">
                                <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button>
                                </NuxtLink>
                                <a-button type="primary" @click="setStatus('preparing_shipment')">Chuẩn bị giao
                                    hàng</a-button>
                                <a-button type="primary" @click="setStatus('in_transit')">Đang giao</a-button>
                            </div>
                        </div>
                        <div v-else-if="orderStore?.getOneOrderAdmin?.data?.delivery_method === 'pickup'">
                            <div class="flex justify-end gap-2">
                                <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button>
                                </NuxtLink>
                                <NuxtLink :to="`/admin/product-manager/product`">
                                    <a-button type="primary" @click="setStatus('ready_for_pickup')">Đơn hàng sẵn
                                        sàng</a-button>
                                </NuxtLink>

                            </div>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'ready_for_pickup'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                            <NuxtLink :to="`/admin/product-manager/product`">
                                <a-button type="primary" @click="setStatus('active')">Đã giao</a-button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'preparing_shipment'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                            <a-button type="primary" @click="setStatus('in_transit')">Đang giao</a-button>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'in_transit'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                            <a-button type="primary" @click="setStatus('active')">Đã giao</a-button>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'extended'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'active'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'returning'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'completed'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'canceled'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                        </div>
                    </div>
                    <div v-else-if="orderStore?.getOneOrderAdmin?.data?.status === 'overdue'">
                        <div class="flex justify-end gap-2">
                            <NuxtLink :to="`/admin/product-manager/product`"> <a-button>Trở về</a-button> </NuxtLink>
                        </div>
                    </div>
                </form>
                <OrderAdminOrderCanceled :openModal="openModalAdd" :CloseModal="CloseModalAdd" :orderId="orderId" />
                <OrderAdminOrderExtendsionAll :openModal="openModalExtendsionAll" :CloseModal="CloseModalExtendsionAll"
                    :data="extendsionBooks" :id="orderId" />
                <OrderAdminOrderExtended :openModal="openModalExtend" :CloseModal="CloseModalExtend"
                    :items="extendsionBook" />
                <OrderAdminOrderReturnBook :openModal="openModalReturnBook" :CloseModal="CloseReturnBook"
                    :loan_order_detail="loan_order_detail" />

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const openModalAdd = ref<boolean>(false);
const openModalExtend = ref<boolean>(false);
const openModalReturnBook = ref<boolean>(false);
const openModalExtendsionAll = ref<boolean>(false)
const route = useRoute()
const orderId = route.params.id;
const orderStore = useOrderStore();
const setStatus = (status: string) => {
    orderStore.updateOrderStatus({
        id: orderId, body: {
            status: status,
        }
    });
}
useAsyncData(async () => {
    await orderStore.getOneOrder(orderId);
});
const loan_order_detail = ref()
const extendsionBook = ref()
const extendsionBooks = ref([])
const showModalAdd = () => {
    openModalAdd.value = true;
};
const CloseModalAdd = () => {
    openModalAdd.value = false;
};
const showModalExtendsionAll = (hi) => {
    extendsionBooks.value = hi
    openModalExtendsionAll.value = true;
}
const CloseModalExtendsionAll = () => {
    openModalExtendsionAll.value = false;
}
const showModalExtend = (items) => {
    console.log(items)
    extendsionBook.value = items;
    openModalExtend.value = true;
};
const CloseModalExtend = () => {
    openModalExtend.value = false;
};
const showReturnBook = (items: any) => {
    // console.log("🚀 ~ showReturnBook ~ items:", items)
    loan_order_detail.value = items
    openModalReturnBook.value = true;
};

const CloseReturnBook = () => {
    openModalReturnBook.value = false;
};
</script>