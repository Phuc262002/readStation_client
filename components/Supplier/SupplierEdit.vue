<template>
    <a-modal v-model:open="props.openModalEdit" title="Sửa nhà cung cấp" :footer="null" :onCancel="handleClose">
        <div class="bg-white py-2">
            <form @submit.prevent="updateSupplier">
                <div class="bg-white py-2">
                    <div class="grid gap-4 my-3">
                        <div class="space-y-4">
                            <div class="flex flex-col gap-2">
                                <label for="">Nhập tên nhà cung cấp</label>
                                <a-input v-model:value="valueSupplier.name" size="large" type="text"
                                    class="border p-2 rounded-md" placeholder="Nhập tên nhà cung cấp" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label for="">Số điện thoại</label>
                                <a-input v-model:value="valueSupplier.phone" size="large" type="text"
                                    class="border p-2 rounded-md" placeholder="Số điện thoại" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label for="">Email</label>
                                <a-input v-model:value="valueSupplier.email" size="large" type="text"
                                    class="border p-2 rounded-md" placeholder="Email" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label for="">Địa chỉ nhà cung cấp</label>
                                <a-input size="large" v-model:value="valueSupplier.address" type="text"
                                    class="border p-2 rounded-md" placeholder="Địa chỉ cụ thể" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label>Trạng thái</label>
                                <a-select v-model:value="valueSupplier.status" show-search placeholder="Trạng thái"
                                    style="width: 200px" :options="options" :filter-option="filterOption"
                                    @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-end gap-2">
                        <a-button @click="handleClose" >Hủy</a-button>
                        <a-button html-type="submit"
                            class="text-white bg-rtprimary hover:!text-white border-none hover:bg-rtsecondary mt-4 ">Cập
                            nhật</a-button>
                    </div>
                </div>
            </form>
        </div>
    </a-modal>
</template>

<script setup>
const props = defineProps({
    openModalEdit: Boolean,
    openModal: Function,
    supplierId: Number,
});
const supplierId = ref(props.supplierId);
const open = ref(props.openModalEdit);
watch(
    () => props.openModalEdit,
    (newVal) => {
        open.value = newVal;
    }
);
watch(
    () => props.supplierId,
    (newVal) => {
        supplierId.value = newVal;
    }
);
const handleClose = () => {
    props.openModal();
};
const options = ref([
    {
        value: 'active',
        label: 'Hoạt động',
    },
    {
        value: 'inactive',
        label: 'Không hoạt động',
    }
]);
const supplierStore = useSupplierStore();
const valueSupplier = ref({
    name: "",
    phone: "",
    email: "",
    address: "",
    status: "",
})


useAsyncData(async () => {
    const data = await supplierStore.getSupplierById(supplierId.value);
    valueSupplier.value.name = data.data._value?.data?.name;
    valueSupplier.value.phone = data.data._value?.data?.phone;
    valueSupplier.value.email = data.data._value?.data?.email;
    valueSupplier.value.address = data.data._value?.data?.address;
    valueSupplier.value.status = data.data._value?.data?.status;
}, {
    watch: [supplierId],
    initialCache: false,
})

const updateSupplier = async () => {
    const valueUpdateSupplier = {
        name: valueSupplier.value?.name,
        phone: valueSupplier.value?.phone,
        email: valueSupplier.value?.email,
        address: valueSupplier.value?.address,
        status: valueSupplier.value?.status,
    }
    await supplierStore.updateSupplier({ id: supplierId.value, valueSupplier: valueUpdateSupplier });
    handleClose();
    await supplierStore.getAllSupplier({});
}

</script>