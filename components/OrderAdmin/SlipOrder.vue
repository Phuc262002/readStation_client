<template>
    <a-modal v-model:open="props.openModal" title="Cập nhật tình trạng sách" style="width: 500px;" :footer="null"
        :onCancel="handleClose">
        <div class="flex flex-col gap-2 mt-4">
            <label class="text-base">Tên sách</label>
            <a-input size="large"></a-input>
        </div>
        <div class="flex flex-col gap-2 mt-4">
            <label class="text-base">Tình trạng sách</label>
            <a-dropdown :trigger="['click']">
                <template #overlay>
                    <a-menu class="">
                        <a-menu-item @click="statusValue({ value: 'excellent', label: 'Xuất sắc' })">Xuất
                            sắc</a-menu-item>
                        <a-menu-item @click="statusValue({ value: 'good', label: 'Tốt' })">Tốt</a-menu-item>
                        <a-menu-item @click="statusValue({ value: 'average', label: 'Trung bình' })">Trung
                            bình</a-menu-item>
                        <a-menu-item @click="statusValue({ value: 'bad', label: 'Kém' })">Kém</a-menu-item>
                        <a-menu-item @click="statusValue({ value: 'damaged', label: 'Hư hỏng' })">Hư hỏng</a-menu-item>
                        <a-menu-item @click="statusValue({ value: 'lost', label: 'Mất' })">Mất</a-menu-item>
                    </a-menu>
                </template>
                <a-button size="large" class="flex gap-3 items-center">
                    {{ queryStatus.label ? queryStatus.label : "Trạng thái" }}
                </a-button>
            </a-dropdown>
        </div>
        <div class="flex flex-col gap-2 mt-4">
            <label class="text-base">Chi tiết</label>
            <a-textarea class="border border-gray-300 rounded-md p-2"></a-textarea>
        </div>
        <div class="flex flex-col gap-2 mt-4">
            <label class="text-base">Phí phạt</label>
            <a-input size="large"></a-input>
        </div>

        <div class="flex justify-end gap-2 mt-4">
            <a-button type="default" @click="handleClose">Hủy</a-button>
            <a-button type="primary">Cập nhật</a-button>
        </div>

    </a-modal>
</template>
<script setup>
import { ref } from 'vue';
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
const statusValue = ({ value, label }) => {
    queryStatus.value.value = value;
    queryStatus.value.label = label;
};
const queryStatus = ref({
    value: "",
    label: ""
});
</script>