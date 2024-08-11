<template>
  <a-modal
    v-model:open="props.openModal"
    title="Cập nhật tình trạng sách"
    style="width: 500px"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="mb-4 space-y-1" v-if="errors">
        <a-alert
          v-for="(error, index) in errors"
          :message="error"
          type="error"
          show-icon
        />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Tên sách</label>
        <a-input
          size="large"
          :value="props.data?.loan_order_detail?.book_details?.book?.title"
          readonly
        />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Tình trạng sách</label>
        <a-select
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
        <label class="text-base"
          >Chi tiết <span class="text-red-500">*</span></label
        >
        <a-textarea
          class="border border-gray-300 rounded-md p-2"
          v-model:value="data.condition"
          required
        ></a-textarea>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <div class="flex gap-2 items-center">
          <label class="text-base">Lý do phạt</label>
          <a-popover v-model:open="visible" trigger="click" placement="topLeft">
            <template #content>
              <table
                style="
                  border-collapse: collapse;
                  width: 100%;
                  border: 1px solid black;
                "
              >
                <tr>
                  <td style="padding-left: 8px; border: 1px solid black">
                    <strong> Tình trạng </strong>
                  </td>
                  <td style="padding-left: 8px; border: 1px solid black">
                    <strong> Mức phạt </strong>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding-left: 8px;
                      border: 1px solid black;
                      width: 220px;
                    "
                  >
                    Mất sách hoặc làm cho sách hoàn toàn không sử dụng được
                  </td>
                  <td style="padding-left: 8px; border: 1px solid black">
                    Đền 100% giá trị sách
                  </td>
                </tr>
                <tr>
                  <td style="padding-left: 8px; border: 1px solid black">
                    Mất trang
                  </td>
                  <td style="padding-left: 8px; border: 1px solid black">
                    10.000đ/tờ
                  </td>
                </tr>
                <tr>
                  <td style="padding-left: 8px; border: 1px solid black">
                    Làm bẩn, viết vẽ bẩn lên sách
                  </td>
                  <td style="padding-left: 8px; border: 1px solid black">
                    2.000đ/tờ
                  </td>
                </tr>
                <tr>
                  <td style="padding-left: 8px; border: 1px solid black">
                    Làm bong bìa
                  </td>
                  <td style="padding-left: 8px; border: 1px solid black">
                    15.000đ/1 cuốn
                  </td>
                </tr>
                <tr>
                  <td style="padding-left: 8px; border: 1px solid black">
                    Làm rách sách
                  </td>
                  <td
                    rowspan="3"
                    style="padding-left: 8px; border: 1px solid black"
                  >
                    30.000đ/ sách
                  </td>
                </tr>
                <tr>
                  <td style="padding-left: 8px; border: 1px solid black">
                    Làm ướt sách
                  </td>
                </tr>
                <tr>
                  <td style="padding-left: 8px; border: 1px solid black">
                    Bóc nhãn, phiếu ghi chú trên sách
                  </td>
                </tr>
              </table>
            </template>

            <Icon
              icon="heroicons:eye"
              class="group-hover:text-[#212122] w-5 h-5"
            />
          </a-popover>
        </div>
        <a-select
          show-search
          placeholder="Lý do phạt"
          size="large"
          :options="penaltyReason"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        ></a-select>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <label class="text-base">Số tiền phạt</label>
        <a-input
          size="large"
          placeholder="Số tiền phạt"
          v-model:value="data.fine_amount"
        />
      </div>
      <div class="flex justify-end gap-2 mt-4">
        <a-button type="default" @click="handleClose">Hủy</a-button>
        <a-button
          type="primary"
          html-type="submit"
          :loading="returnHistoryStore.isSubmitting"
          >Cập nhật</a-button
        >
      </div>
    </form>
  </a-modal>
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const errors = ref({});
const visible = ref(false);
const props = defineProps({
  openModal: Boolean,
  CloseModal: Function,
  data: Object,
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
  label: "",
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
const penaltyReason = ref([
  {
    value: "0",
    label: "Rách hoặc mất trang sách",
  },
  {
    value: "1",
    label: "Gãy hoặc hỏng gáy sách",
  },
  {
    value: "2",
    label: "Bị ướt hoặc ẩm mốc",
  },
  {
    value: "3",
    label: "Vết bẩn, mực hoặc các chất lỏng khác",
  },
  {
    value: "4",
    label: "Gập hoặc nhăn trang sách",
  },
  {
    value: "5",
    label: "Hỏng bìa sách",
  },
  {
    value: "6",
    label: "Viết hoặc vẽ trong sách",
  },
  {
    value: "lost",
    label: "Mất sách",
  }
]);
const data = ref({
  condition: "",
  fine_amount: 0,
  actual_return_condition: "excellent",
});
const onSubmit = async () => {
  try {
    const res = await returnHistoryStore.updateReturnHistory({
      id: props.data?.id,
      dataUpdateReturnHistory: data.value,
    });
    if (res.data._rawValue?.status == true) {
      message.success("Cập nhật sách thành công");
    } else {
      errors.value = res.error.value.data.errors;
      message.error(res.error.value.data.message);
    }
  } catch (error) {
    message.error("Cập nhật trả sách thất bại");
    console.error(error);
  }
};

const handleChange = (value) => {
  switch (value) {
    case "0":
      data.value.fine_amount = 30000;
      break;
    case "1":
      data.value.fine_amount = 30000;
      break;
    case "2":
      data.value.fine_amount = 30000;
      break;
    case "3":
      data.value.fine_amount = 2000;
      break;
    case "4":
      data.value.fine_amount = 10000;
      break;
    case "5":
      data.value.fine_amount = 15000;
      break;
    case "6":
      data.value.fine_amount = 2000;
      break;
    case "lost":
      data.value.fine_amount = props.data?.loan_order_detail?.deposit_fee;
      break;
    default:
      data.value.fine_amount = 0;
      break;
  }
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
