<template>
  <a-modal
    v-model:open="props.openModalFrozen"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col items-center bg-white py-2 px-10">
        <div class="py-2 text-center">
          <ExclamationCircleOutlined
            class="text-red-500"
            style="font-size: 64px"
          />
          <span class="block text-base font-medium text-tag-text-06">
            Bạn có chắc chắn muốn đóng băng ví?
          </span>
          <span
            for="email"
            class="block text-base font-medium text-tag-text-07"
          >
            Ví của bạn sẽ không thể thực hiện giao dịch nào cho đến khi mở khóa
          </span>
          <span for="email" class="block text-base font-medium">
            <span class="text-tag-text-06">*</span> Vui lòng nhập lý do đóng
            băng ví
          </span>
          <div class="mt-1">
            <a-textarea class="w-full h-10" required />
          </div>
        </div>
      </div>

      <div class="flex justify-end items-end gap-2">
        <a-button @click="handleClose" danger html-type="button" class="mt-4"
          >Hủy</a-button
        >
        <a-button type="primary" html-type="submit" class="mt-4"
          >Cập nhật</a-button
        >
      </div>
    </form>
  </a-modal>
</template>
<script setup>
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
const props = defineProps({
  openModalFrozen: Boolean,
  openModal: Function,
});
const open = ref(props.openModalFrozen);

watch(
  () => props.openModalFrozen,
  (newVal) => {
    open.value = newVal;
  }
);
const handleClose = () => {
  props.openModal();
};
</script>
