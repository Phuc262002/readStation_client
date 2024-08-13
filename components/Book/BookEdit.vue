<template>
    <a-modal v-model:open="props.openModalBook" title="Sửa sách" :footer="null" :onCancel="handleClose"
        style="width: 1200px;">
        <form @submit.prevent="onSubmit">
            <div class="flex flex-col gap-4 mt-5">
                <div class="grid grid-cols-4 gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Tên sách</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.title" readonly />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Tác giả</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.author?.author" readonly />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Danh mục</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.category?.name" readonly />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Tủ sách</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.shelve?.bookcase?.name" readonly />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Kệ sách</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.shelve?.name" readonly />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold" for="">Mô tả</label>
                    <a-textarea class="border p-2 rounded-md h-40" v-model:value="dataGet.description_summary" />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold" for="">Mô tả chi tiết</label>
                    <CommonCKEditor v-model:value="dataGet.description" />
                </div>
            </div>
            <div class="flex justify-end items-end gap-2">
                <a-button @click="handleClose" html-type="button">Hủy</a-button>
                <a-button type="primary" html-type="submit" class="mt-4" :loading="bookStore.isSubmitting">Lưu thay
                    đổi</a-button>
            </div>
        </form>
    </a-modal>
</template>
<script setup>
const props = defineProps({
    openModalBook: Boolean,
    openModal: Function,
});
const route = useRoute()
const bookID = route.params.id
const bookStore = useBookStore();
const dataGet = ref({

})
useAsyncData(async () => {
    try {
        const data = await bookStore.getOneBookAdmin(bookID);
        dataGet.value = data.data._rawValue.data;
    } catch (error) {
        console.error(error);
    }
});
const open = ref(props.openModalBook);
const handleClose = () => {
    props.openModal();
};

const onSubmit = async () => {
    try {
        const dataUpdate = {
            description: dataGet.value.description,
            description_summary: dataGet.value.description_summary,
        };
        await bookStore.updateBook({ id: bookID, value: dataUpdate });
    } catch (error) {
        message.error("Cập nhật sách thất bại");
        console.error(error);
    }
    handleClose();
};
</script>