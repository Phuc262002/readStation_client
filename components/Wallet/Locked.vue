<template>
  <a-modal
    v-model:open="props.openModalLocked"
    title="Cấm sử dụng ví"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="bg-white py-2">
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Lý do
          </label>
          <div class="mt-1">
            <a-textarea
              class="w-full h-10"
              placeholder="Nhập lý do cấm sử dụng ví"
              required
            />
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
