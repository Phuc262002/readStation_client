<template>
    <a-modal v-model:open="props.openModalBook" title="Sửa sách" :footer="null" :onCancel="handleClose"
        style="width: 1200px;">
        <form @submit.prevent="onSubmit">
            <div class="mb-4 space-y-1" v-if="errors">
                <a-alert v-for="(error, index) in errors" :message="error" type="error" show-icon />
            </div>
            <div class="flex flex-col gap-4 mt-5">
                <div class="grid grid-cols-4 gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Tên sách</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.title" readonly />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Tác giả</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.author" readonly />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Danh mục</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.category" readonly />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Tủ sách</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.bookcase" readonly />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-semibold">Kệ sách</label>
                        <a-input class="border p-2 rounded-md h-10" :value="dataGet.shelve" readonly />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold" for="">Mô tả <span class="text-red-500">*</span></label>
                    <a-textarea class="border p-2 rounded-md h-40" v-model:value="dataGet.description_summary"
                        required />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold" for="">Mô tả chi tiết <span
                            class="text-red-500">*</span></label>
                    <CommonCKEditor v-model:value="dataGet.description" required />
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
const errors = ref({});
const route = useRoute()
const bookID = route.params.id
const bookStore = useBookStore();
const dataGet = ref({
    title: '',
    author: '',
    category: '',
    bookcase: '',
    shelve: '',
    description: '',
    description_summary: '',
})
useAsyncData(async () => {
    try {
        const data = await bookStore.getOneBookAdmin(bookID);
        console.log(data);
        dataGet.value.title = data?.data?._value?.data?.title;
        dataGet.value.author = data?.data?._value?.data?.author?.author;
        dataGet.value.category = data?.data?._value?.data?.category?.name;
        dataGet.value.bookcase = data?.data?._value?.data?.shelve?.bookcase?.name;
        dataGet.value.shelve = data?.data?._value?.data?.shelve?.name;
        dataGet.value.description = data?.data?._value?.data?.description;
        dataGet.value.description_summary = data?.data?._value?.data?.description_summary;
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
        const res = await bookStore.updateBook({ id: bookID, value: dataUpdate });
        console.log(res);
        if (res.data._rawValue?.status == true) {
            handleClose();
            message.success("Cập nhật sách thành công");
            await bookStore.getOneBookAdmin(bookID)
        } else {
            errors.value = res.data._rawValue?.errors;
            message.error(res.error.value.data.message);
        }
    } catch (error) {
        console.error(error);
    }
};
</script>