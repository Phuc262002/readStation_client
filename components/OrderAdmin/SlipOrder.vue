<template>
  <a-modal v-model:open="props.openModal" title="Cập nhật tình trạng sách" style="width: 500px;" :footer="null"
    :onCancel="handleClose">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Tên sách</label>
        <a-input size="large" :value="props.data?.loan_order_detail?.book_details?.book?.title" readonly />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Tình trạng sách</label>
        <a-select show-search placeholder="Trạng thái" size="large" :options="options" :filter-option="filterOption"
          @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Chi tiết</label>
        <a-textarea class="border border-gray-300 rounded-md p-2" v-model:value="data.condition"></a-textarea>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Phí phạt</label>
        <a-input size="large"></a-input>
      </div>

      <div class="flex justify-end gap-2 mt-4">
        <a-button type="default" @click="handleClose">Hủy</a-button>
        <a-button type="primary" html-type="submit" :loading="returnHistoryStore.isSubmitting">Cập nhật</a-button>
      </div>
    </form>
  </a-modal>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
  openModal: Boolean,
  CloseModal: Function,
  data: Object
});
const open = ref(props.openModal);

const returnHistoryStore = useReturnHistoryStore();
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

const data = ref(
  {
    condition: "",
    fine_amount: "0",
    actual_return_condition: "excellent"
  }
);
const onSubmit = async () => {
  try {
    await returnHistoryStore.updateReturnHistory({
      id: props.data?.id,
      dataUpdateReturnHistory: data.value,
    });
  } catch (error) {
    message.error("Cập nhật trả sách thất bại");
    console.error(error);
  }
};

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