<template>
    <a-modal v-model:open="props.openModal"
        :title="'Khách muốn gia hạn sách ' + (props.items?.book_details?.book?.title || '') + '? '"
        style="width: 800px;" :footer="null" :onCancel="handleClose">
        <form @submit.prevent="onSubmit">
            <div class="space-y-5 mt-5">
                <div class="flex justify-start pl-5 ">
                    <div>
                        <img class="w-28 h-44" :src="props.items?.book_details?.poster" alt="">
                    </div>
                    <div class="grid grid-cols-1 pl-5 space-y-3">
                        <div class="grid grid-cols-3">
                            <p class="text-base font-bold col-span-2">Tên sách:</p>
                            <p class="text-base col-span-1">{{ props.items?.book_details?.book?.title }}</p>
                        </div>
                        <div class="grid grid-cols-3">
                            <p class="text-base font-bold col-span-2">Tác giả:</p>
                            <p class="text-base col-span-1">{{ props?.items?.book_details?.book?.author?.author }}</p>
                        </div>
                        <div class="grid grid-cols-3">
                            <p class="text-base font-bold col-span-2">Ngày thuê sách:</p>
                            <p class="text-base col-span-1">11/06/2024</p>
                        </div>
                        <div class="grid grid-cols-3">
                            <p class="text-base font-bold col-span-2">Ngày hết hạn cũ:</p>
                            <p class="text-base col-span-1">11/06/2024</p>
                        </div>
                        <div class="grid grid-cols-3">
                            <p class="text-base font-bold col-span-2">Ngày hết hạn mới:</p>
                            <p class="text-base col-span-1">11/06/2024</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <h1 class="text-base">Bấm vào nút xác nhận bên dưới để hoàn tất việc gia hạn thời gian thuê sách
                    </h1>
                </div>
                <div class="">
                    <p class="text-base text-[red]">Thông tin khách cần trả sách đúng hạn để tránh các khoản phí phạt.
                        Nếu
                        có
                        bất kỳ thắc
                        mắc nào hoặc cần thêm thông tin, xin vui lòng liên hệ qua địa chỉ email của thư viện hoặc gọi
                        đến số
                        điện thoại 0987654321 để được hỗ trợ</p>
                </div>
                <div class="flex justify-end items-center gap-2">
                    <a-button @click="handleClose">Hủy</a-button>
                    <a-button type="primary" html-type="submit">Xác nhận</a-button>
                </div>
            </div>
        </form>

    </a-modal>
</template>
<script setup>
const props = defineProps({
    openModal: Boolean,
    CloseModal: Function,
    items: Object
});
const open = ref(props.openModal);
watch(
    () => props.openModal,
    (newVal) => {
        open.value = newVal;
    }
);
watch(
    () => props.extensionBookId,
    (newVal) => {
        extensionBookId.value = newVal;
    }
);
const handleClose = () => {
    props.CloseModal();
};
const orderStore = useOrderStore();
const onSubmit = async () => {
    try {
        const res = await orderStore.extensionOneBook({ id: props.items?.id })
        console.log(res)
        if (res.data._rawValue?.status == true) {
            message.success("Gia hạn sách thành công");
        } else {
            message.error(res.data._rawValue?.errors);
        }
    } catch (error) {
        message.error("Gia hạn thất bại");
        console.log(error)
    }
    handleClose()
}
</script>