<template>
    <a-modal v-model:open="props.openModal" title="Cập nhật tình trạng sách" style="width: 500px;" :footer="null"
        :onCancel="handleClose">
        <div class="flex flex-col gap-2 mt-4">
            <label class="text-base">Tên sách</label>
            <a-input size="large"></a-input>
        </div>
        <div class="flex flex-col gap-2 mt-4">
            <label class="text-base">Tình trạng sách</label>
            <a-select show-search placeholder="Trạng thái"
                size="large" :options="options" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                @change="handleChange"></a-select>
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
const options = ref([
  {
    value: "excellent",
    label: "Xuất sắc",
  },
  {
    value: "good",
    label: "Tốt",
  },
  {
    value: "fair",
    label: "Trung bình",
  },
  {
    value: "poor",
    label: "Kém",
  },
  {
    value: "damaged",
    label: "Hư hỏng",
  },
  {
    value: "lost",
    label: "Mất",
  },
]);
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>