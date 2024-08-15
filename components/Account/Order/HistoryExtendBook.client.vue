<template>
  <div class="p-5">
    <a-modal v-model:open="props.openHistoryExtend" :footer="null" width="70%" :onCancel="handleClose">
      <div class="border-b border-rtgray-50 pb-5">
        <span class="font-bold"> Lịch sử gia hạn</span>
      </div>
      <a-table class="my-5" :columns="columns" :data-source="orderStore?.order?.extensions"
        @resizeColumn="handleResizeColumn" :index="0">
        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'extensions'">
            <span> Gia hạn lần {{ index + 1 }} </span>
          </template>

          <template v-if="column.key === 'new_due_date'">
            <span v-for="(items, index) in record?.extension_details">
              {{ $dayjs(items?.new_due_date).format("DD/MM/YYYY") }}
            </span>
          </template>
          <template v-if="column.key === 'number_of_days'">
            <span v-for="(items, index) in record?.extension_details">
              {{ items?.number_of_days }} ngày
            </span>
          </template>
          <template v-if="column.key === 'extension_fee'">
            <span>
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(record?.extension_fee)
              }}
            </span>
          </template>
          <template v-if="column.key === 'extension_details'">
            <span v-for="(items, index) in record?.extension_details">
              {{ items?.loan_order_detail?.book_details?.book?.title }}
            </span>
          </template>
          <template v-if="column.key === 'extension_date'">
            <span>
              {{ $dayjs(record.extension_date).format("DD/MM/YYYY") }}
            </span>
          </template>
        </template>
      </a-table>

      <div class="flex justify-end gap-2">
        <a-button class="h-10" @click="handleClose"> Trở về </a-button>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
const orderStore = useOrderClientStore();
const route = useRoute();
const id = route.params.id;
const props = defineProps({
  openHistoryExtend: Boolean,
  closeHistoryExtend: Function,
});
const open = ref(props.openHistoryExtend);
const handleClose = () => {
  props.closeHistoryExtend();
};
useAsyncData(async () => {
  await orderStore.getOneOrder(id);
});

const columns = ref([
  {
    title: "Hình thức",
    dataIndex: "extensions",
    key: "extensions",
  },
  {
    title: "Tên sách",
    dataIndex: "extension_details",
    key: "extension_details",
    width: "250px",
  },
  {
    title: "Số ngày gia hạn",
    key: "number_of_days",
    dataIndex: "number_of_days",
  },
  {
    title: "Số tiền gia hạn",
    key: "extension_fee",
    dataIndex: "extension_fee",
  },
  {
    title: "Ngày gia hạn",
    key: "extension_date",
    dataIndex: "extension_date",
  },
  {
    title: "Ngày tới hạn",
    key: "new_due_date",
    dataIndex: "new_due_date",
  },

]);
</script>
