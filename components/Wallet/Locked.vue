<template>
  <a-modal
    v-model:open="props.openModalLocked"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col items-center bg-white py-2">
        <div class="py-2 text-center">
          <ExclamationCircleOutlined
            class="text-red-500 mt-10 mb-5"
            style="font-size: 80px"
          />
          <span class="block text-2xl font-medium text-tag-text-06 my-2">
            Bạn có chắc chắn muốn cấm sử dụng ví?
          </span>
          <span
            for="email"
            class="block text-base font-medium text-tag-text-07 my-2"
          >
            Ví của khách hàng sẽ không thể thực hiện giao dịch nào cho đến khi
            được mở khóa
          </span>
          <span for="email" class="block text-base font-medium mt-5 mb-2">
            <span class="text-tag-text-06">*</span> Vui lòng nhập lý do cấm sử
            dụng ví
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
          >Xác nhận</a-button
        >
      </div>
    </form>
  </a-modal>
</template>
<script setup>
const props = defineProps({
  openModalLocked: Boolean,
  openModal: Function,
});
const open = ref(props.openModalLocked);

watch(
  () => props.openModalLocked,
  (newVal) => {
    open.value = newVal;
  }
);
const handleClose = () => {
  props.openModal();
};
</script>
