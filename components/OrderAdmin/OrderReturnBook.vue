<template>
  <a-modal
    v-model:open="props.openModal"
    title="Cập nhật tình trạng sách"
    style="width: 500px"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Tên sách</label>
        <a-input
          size="large"
          :value="props.loan_order_detail?.book_details?.book?.title"
          readonly
        />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Tình trạng sách</label>
        <a-select
          v-model:value="valueReturnEachBook.actual_return_condition"
          show-search
          placeholder="Trạng thái"
          size="large"
          :options="options"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        ></a-select>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Chi tiết</label>
        <a-textarea
          class="border border-gray-300 rounded-md p-2"
          v-model:value="valueReturnEachBook.condition"
        ></a-textarea>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Phí phạt</label>
        <a-input
          size="large"
          v-model:value="valueReturnEachBook.fine_amount"
        ></a-input>
      </div>
      <div class="flex justify-end gap-2 mt-4">
        <a-button type="default" @click="handleClose">Hủy</a-button>
        <a-button type="primary" html-type="submit">Cập nhật</a-button>
      </div>
    </form>
  </a-modal>
</template>
<script setup>
import { ref } from "vue";
const orderStore = useOrderStore();
const props = defineProps({
  openModal: Boolean,
  CloseModal: Function,
  loan_order_detail: Object,
});

const open = ref(props.openModal);
const loan_order_detail_id = ref(props.loan_order_detail?.id);
watch(
  () => props.openModal,
  (value) => {
    open.value = value;
  }
);
watch(
  () => props.loan_order_detail,
  (newVal) => {
    loan_order_detail_id.value = newVal;
  }
);
const handleClose = () => {
  open.value = false;
  props.CloseModal();
};
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

const valueReturnEachBook = ref({
  condition: "",
  actual_return_condition: "",
  fine_amount: "",
});

const onSubmit = async () => {
  try {
    await orderStore.retrunEachBook({
      id: props.loan_order_detail?.id,
      valueRetunEachBook: valueReturnEachBook.value,
    });

  } catch (error) {
    message.error("Trả sách thất bại");
    console.error(error);
  }
  handleClose();
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
