import { number } from 'yup';
<template>
    <a-modal v-model:open="props.openModal" :title='"Khách muốn gia hạn toàn bộ sách ?"' style="width: 800px;"
        :footer="null" :onCancel="handleClose">
        <form @submit.prevent="onSubmit">
            <div class="space-y-5 mt-5">
                <div class="flex flex-col" v-for="(items, index) in props.data" :key="index">
                    <div class="flex justify-start pl-5 ">
                        <div>
                            <img class="w-52" :src="items?.book_details?.poster" alt="">
                        </div>
                        <div class="grid grid-cols-1 pl-12 space-y-3">
                            <div class="grid grid-cols-2">
                                <p class="text-base font-bold col-span-1">Tên sách:</p>
                                <p class="text-base col-span-1">{{ items?.book_details?.book?.title }}</p>
                            </div>
                            <div class="grid grid-cols-2">
                                <p class="text-base font-bold col-span-1">Tác giả:</p>
                                <p class="text-base col-span-1">{{ items?.book_details?.book?.author?.author }}
                                </p>
                            </div>
                            <div class="grid grid-cols-2">
                                <p class="text-base font-bold col-span-1">Danh mục:</p>
                                <p class="text-base col-span-1">{{ items?.book_details?.book?.category?.name }}
                                </p>
                            </div>
                            <div class="grid grid-cols-2">
                                <p class="text-base font-bold col-span-1">Ngày hết hạn cũ:</p>
                                <p class="text-base col-span-1">{{ items?.current_due_date ?
                                    $dayjs(items?.current_due_date).format("DD/MM/YYYY") : '' }}</p>
                            </div>
                            <div class="grid grid-cols-2">
                                <p class="text-base font-bold col-span-1">Chọn thêm ngày gia hạn:</p>
                                <a-input type="number" class="w-1/4" v-model:value="number_of_days[index]" :min="1"
                                    :max="5" required />
                            </div>
                            <div class="grid grid-cols-2">
                                <p class="text-base font-bold col-span-1">Ngày hết hạn mới:</p>
                                <p class="text-base col-span-1">{{ items?.current_due_date ?
                                    $dayjs(items?.current_due_date).add(number_of_days[index],
                                        'day').format("DD/MM/YYYY") : ''
                                    }}
                                </p>
                            </div>
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
    data: Array,
    id: Number
});
const open = ref(props.openModal);
watch(
    () => props.openModal,
    (newVal) => {
        open.value = newVal;
    }
);
// watch(
//   () => props.extensionBookId,
//   (newVal) => {
//     extensionBookId.value = newVal;
//   }
// );
const handleClose = () => {
    props.CloseModal();
};
const orderStore = useOrderStore();
const number_of_days = ref([1, 1, 1]);
const body = ref();
const onSubmit = async () => {
    try {
        const res = await orderStore.extensionAllBook({ id: props.id, days: body.value });
        if (res.data._rawValue?.status == true) {
            message.success("Gia hạn toàn bộ sách thành công");
        } else {
            message.error(res.data._rawValue?.errors);
        }
    } catch (error) {
        message.error("Gia hạn thất bại");
        console.log(error)
    }
    handleClose();
}
</script>