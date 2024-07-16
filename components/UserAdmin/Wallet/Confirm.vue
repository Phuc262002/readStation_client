<template>
  <a-modal
    v-model:open="props.openModalConfirm"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col items-center bg-white py-2">
        <div class="py-2 text-center">
          <ExclamationCircleOutlined
            v-if="props.status === 'active'"
            class="text-tag-text-01 mt-10 mb-5"
            style="font-size: 80px"
          />
          <ExclamationCircleOutlined
            v-if="props.status === 'frozen'"
            class="text-tag-text-06 mt-10 mb-5"
            style="font-size: 80px"
          />
          <ExclamationCircleOutlined
            v-if="props.status === 'suspended'"
            class="text-tag-text-06 mt-10 mb-5"
            style="font-size: 80px"
          />
          <span
            v-if="props.status === 'active'"
            class="block text-2xl font-medium text-tag-text-01 my-2"
          >
            Xác nhận kích hoạt lại ví khách hàng
          </span>
          <span
            v-if="props.status === 'frozen'"
            class="block text-2xl font-medium text-tag-text-06 my-2"
          >
            Bạn có chắc chắn muốn đóng băng ví?
          </span>
          <span
            v-if="props.status === 'suspended'"
            class="block text-2xl font-medium text-tag-text-06 my-2"
          >
            Bạn có chắc chắn muốn cấm ví?
          </span>
          <span
            v-if="props.status === 'active'"
            for="email"
            class="block text-base font-medium text-tag-text-07 my-2"
          >
            Sau khi bỏ chặn, ví của khách hàng sẽ được kích hoạt lại và hoạt
            động bình thường.
          </span>
          <span
            v-if="props.status === 'frozen'"
            for="email"
            class="block text-base font-medium text-tag-text-07 my-2"
          >
            Ví của khách hàng sẽ không thể thực hiện giao dịch nào cho đến khi
            được mở khóa
          </span>
          <span
            v-if="props.status === 'suspended'"
            for="email"
            class="block text-base font-medium text-tag-text-07 my-2"
          >
            Ví của khách hàng sẽ không thể thực hiện giao dịch nào cho đến khi
            được mở khóa
          </span>
          <span
            v-if="props.status === 'active'"
            for="email"
            class="block text-base font-medium mt-5 mb-2"
          >
            <span class="text-tag-text-06">*</span> Lý do kích hoạt lại
          </span>
          <span
            v-if="props.status === 'frozen'"
            for="email"
            class="block text-base font-medium mt-5 mb-2"
          >
            <span class="text-tag-text-06">*</span> Vui lòng nhập lý do đóng
            băng ví
          </span>
          <span
            v-if="props.status === 'suspended'"
            for="email"
            class="block text-base font-medium mt-5 mb-2"
          >
            <span class="text-tag-text-06">*</span> Vui lòng nhập lý do cấm
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
        <a-button
          v-if="props.status === 'active'"
          type="primary"
          html-type="submit"
          class="mt-4"
          >Kích hoạt</a-button
        >
        <a-button
          v-if="props.status === 'frozen'"
          type="primary"
          html-type="submit"
          class="mt-4"
          >Đóng bắng</a-button
        >
        <a-button
          v-if="props.status === 'suspended'"
          type="primary"
          html-type="submit"
          class="mt-4"
          >Chặn ví</a-button
        >
      </div>
    </form>
  </a-modal>
</template>
<script setup>
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
const props = defineProps({
  openModalConfirm: Boolean,
  openModal: Function,
  status: String,
});
const open = ref(props.openModalConfirm);

watch(
  () => props.openModalConfirm,
  (newVal) => {
    open.value = newVal;
  }
);
const handleClose = () => {
  props.openModal();
};
</script>
