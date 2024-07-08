<template>
    <a-modal v-model:open="props.openModal"
        title="Khách hàng trả sách “Tôi thấy hoa vàng trên cỏ xanh - Phiên bản năm 2024 ”" style="width: 840px;"
        :footer="null" :onCancel="handleClose">
        <div class="space-y-5 mt-5">
            <a-radio-group v-model:value="valueRadio" name="radioGroup" class="flex gap-5">
                <div class="border w-full rounded-lg p-5">
                    <a-radio value="pickup"> Trả sách trực tiếp tại thư viện</a-radio>
                </div>
                <div class="border w-full rounded-lg p-5">
                    <a-radio value="shipper"> Giao sách đến thư viện </a-radio>
                </div>
            </a-radio-group>
            <div class="space-y-5" v-if="valueRadio === 'pickup'">
                <div class="grid grid-cols-5">
                    <h1 class="text-base font-bold col-span-1">Địa chỉ thư viện:</h1>
                    <p class="text-base col-span-4">Lô 42, đường số 3, Công viên phần mềm Quang Trung, phường Tân Chánh
                        Hiệp, Quận 12, TP HCM</p>
                </div>
                <div class="flex justify-start pl-5 ">
                    <div>
                        <img class="w-28 h-44"
                            src="https://res.cloudinary.com/dlikmzx7m/image/upload/v1719332155/icve3ywd0g2bbymvrmt5.jpg"
                            alt="">
                    </div>
                    <div class="grid grid-cols-1 pl-5 space-y-3">
                        <div class="grid grid-cols-2">
                            <p class="text-base font-bold col-span-1">Tên sách:</p>
                            <p class="text-base col-span-1">Cho tôi xin một vé đi tuổi thơ</p>
                        </div>
                        <div class="grid grid-cols-2">
                            <p class="text-base font-bold col-span-1">Tác giả:</p>
                            <p class="text-base col-span-1">Nguyễn Nhật Ánh</p>
                        </div>
                        <div class="grid grid-cols-2">
                            <p class="text-base font-bold col-span-1">Ngày thuê sách:</p>
                            <p class="text-base col-span-1">11/06/2024</p>
                        </div>
                        <div class="grid grid-cols-2">
                            <p class="text-base font-bold col-span-1">Ngày hết hạn:</p>
                            <p class="text-base col-span-1">11/06/2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-5" v-else>
                <div class="flex justify-start pl-5 ">
                    <div>
                        <img class="w-28 h-44"
                            src="https://res.cloudinary.com/dlikmzx7m/image/upload/v1719332155/icve3ywd0g2bbymvrmt5.jpg"
                            alt="">
                    </div>
                    <div class="grid grid-cols-1 pl-5 space-y-3">
                        <div class="grid grid-cols-2">
                            <p class="text-base font-bold col-span-1">Tên sách:</p>
                            <p class="text-base col-span-1">Cho tôi xin một vé đi tuổi thơ</p>
                        </div>
                        <div class="grid grid-cols-2">
                            <p class="text-base font-bold col-span-1">Tác giả:</p>
                            <p class="text-base col-span-1">Nguyễn Nhật Ánh</p>
                        </div>
                        <div class="grid grid-cols-2">
                            <p class="text-base font-bold col-span-1">Ngày thuê sách:</p>
                            <p class="text-base col-span-1">11/06/2024</p>
                        </div>
                        <div class="grid grid-cols-2">
                            <p class="text-base font-bold col-span-1">Ngày hết hạn:</p>
                            <p class="text-base col-span-1">11/06/2024</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-base font-bold" for="">Tên của bạn</label>
                        <a-input size="large" placeholder="Nhập tên của bạn"></a-input>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-base font-bold" for="">Số điện thoại</label>
                        <a-input size="large" placeholder="Nhập tên của bạn"></a-input>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-base font-bold" for="">Tỉnh/ Thành Phố</label>
                        <a-input size="large" placeholder="Nhập tên của bạn"></a-input>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-base font-bold" for="">Quận/ Huyện</label>
                        <a-input size="large" placeholder="Nhập tên của bạn"></a-input>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-base font-bold" for="">Phường/ Xã</label>
                        <a-input size="large" placeholder="Nhập tên của bạn"></a-input>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-base font-bold" for="">Đường</label>
                        <a-input size="large" placeholder="Nhập tên của bạn"></a-input>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-base font-bold" for="">Địa chỉ lấy sách</label>
                    <a-textarea rows="4" placeholder="Nhập ghi chú"></a-textarea>
                </div>
            </div>
            <div class="">
                <h1 class="text-base">Thông tin khách hàng vui lòng mang sách đến thư viện trong vòng 24-48 giờ để
                    hoàn
                    tất quá trình trả sách. </h1>
            </div>
            <div class="">
                <p class="text-base text-[red]">Lưu ý quan trọng: Nếu quá thời gian 48 giờ kể từ khi xác nhận mà
                    khách
                    hàng chưa hoàn tất việc trả sách, sẽ tính thêm phí quá hạn trả sách. Thông tin khách hàng thông
                    cảm
                    và hợp tác để tránh các khoản phí không mong muốn.</p>
            </div>

            <div class="flex justify-end items-center gap-2">
                <a-button @click="handleClose">Hủy</a-button>
                <a-button type="primary" @click="handleClose">Xác nhận</a-button>
            </div>
        </div>

    </a-modal>
</template>
<script setup>
import { ref } from 'vue';
const valueRadio = ref('pickup');
const props = defineProps({
    openModal: Boolean,
    CloseModal: Function,
});
const open = ref(props.openModal);
watch(
    () => props.openModal,
    (value) => {
        open.value = value;
    }
);
const handleClose = () => {
    open.value = false;
    props.CloseModal();
};
</script>