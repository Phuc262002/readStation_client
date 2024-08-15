<template>
  <a-modal v-model:open="props.openModal" title="Cập nhật tình trạng sách" style="width: 500px" :footer="null"
    :onCancel="handleClose">
    <form @submit.prevent="onSubmit">
      <div class="mb-4 space-y-1" v-if="errors">
        <a-alert v-for="(error, index) in errors" :message="error" type="error" show-icon />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Tên sách</label>
        <a-input size="large" :value="props.loan_order_detail?.book_details?.book?.title" readonly />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Tình trạng sách</label>
        <a-select v-model:value="valueReturnEachBook.actual_return_condition" show-search placeholder="Trạng thái"
          size="large" :options="options" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
          @change="handleChange"></a-select>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Chi tiết</label>
        <a-textarea class="border border-gray-300 rounded-md p-2"
          v-model:value="valueReturnEachBook.condition"></a-textarea>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <div class="flex gap-2 items-center">
          <label class="text-base">Lý do phạt</label>
          <a-popover v-model:open="visible" trigger="click" placement="topLeft">
            <template #content>
              <p>Bồi thường thường từ 10% đến 50% giá trị của cuốn sách, tùy thuộc vào mức độ hư hỏng.</p>
            </template>
            <template #title>
              <span>Rách hoặc mất trang sách:</span>
            </template>
            <Icon icon="heroicons:eye" class="group-hover:text-[#212122] w-5 h-5" />
          </a-popover>
        </div>
        <a-select show-search placeholder="Lý do phạt" size="large" :options="penaltyReason"
          :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Số tiền phạt</label>
        <a-input size="large" placeholder="Số tiền phạt" readonly />
      </div>
      <div class="flex justify-end gap-2 mt-4">
        <a-button type="default" @click="handleClose">Hủy</a-button>
        <a-button type="primary" html-type="submit" :loading="orderStore.isSubmitting">Cập nhật</a-button>
      </div>
    </form>
  </a-modal>
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const id = useRoute().params.id;
const orderStore = useOrderStore();
const errors = ref({});
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
const penaltyReason = ref([
  {
    value: "0",
    label: "Rách hoặc mất trang sách"
  },
  {
    value: "1",
    label: "Gãy hoặc hỏng gáy sách"
  },
  {
    value: "2",
    label: "Bị ướt hoặc ẩm mốc"
  },
  {
    value: "3",
    label: "Vết bẩn, mực hoặc các chất lỏng khác"
  },
  {
    value: "4",
    label: "Gập hoặc nhăn trang sách"
  },
  {
    value: "5",
    label: "Hỏng bìa sách"
  },
  {
    value: "6",
    label: "Viết hoặc vẽ trong sách"
  },
]);
const valueReturnEachBook = ref({
  condition: "",
  actual_return_condition: "",
  fine_amount: 27000,
});

const onSubmit = async () => {
  try {
    const res = await orderStore.retrunEachBook({
      id: props.loan_order_detail?.id,
      valueRetunEachBook: valueReturnEachBook.value,
    });
    if (res.data._rawValue?.status == true) {
      message.success("Trả sách thành công");
      handleClose();
      await orderStore.getOneOrder(id);
    } else {
      errors.value = res.error.value.data.errors;
      message.error(res.error.value.data.message);
    }
  } catch (error) {
    message.error("Trả sách thất bại");
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
