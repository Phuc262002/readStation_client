<template>
  <a-modal
    v-model:open="props.openModalForm"
    title="Địa chỉ mới"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="flex gap-2">
        <div class="w-1/2 pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Họ tên
          </label>
          <div class="mt-1">
            <a-input class="w-full h-10" placeholder="Nhập họ tên" required />
          </div>
        </div>
        <div class="w-1/2 pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <div class="mt-1">
            <a-input
              class="w-full h-10"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-1/2 pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Tỉnh/ Thành phố
          </label>
          <div class="mt-1">
            <a-select
              size="large"
              placeholder="Tỉnh/Thành phố"
              class="w-full"
            />
          </div>
        </div>
        <div class="w-1/2 pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Quận/ Huyện
          </label>
          <div class="mt-1">
            <a-select size="large" placeholder="Quận/Huyện" class="w-full" />
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-1/2 pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Phường/ Xã
          </label>
          <div class="mt-1">
            <a-select size="large" placeholder="Phường/Xã" class="w-full" />
          </div>
        </div>
        <div class="w-1/2 pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Đường
          </label>
          <div class="mt-1">
            <a-input class="w-full h-10" placeholder="Đường" required />
          </div>
        </div>
      </div>
      <div class="pb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Địa chỉ cụ thể
        </label>
        <div class="mt-1">
          <a-textarea
            placeholder="Địa chỉ cụ thể của bạn"
            :rows="4"
            class="resize-none"
          />
        </div>
      </div>

      <div class="flex justify-end items-end gap-2">
        <a-button @click="handleClose" danger html-type="button" class="mt-4"
          >Hủy</a-button
        >
        <a-button type="primary" html-type="submit" class="mt-4">Lưu</a-button>
      </div>
    </form>
  </a-modal>
</template>

<script setup lang="ts">
const props = defineProps({
  openModalForm: Boolean,
  openModal: Function,
});
const open = ref(props.openModalForm);
watch(
  () => props.openModalForm,
  (newValue) => {
    open.value = newValue;
  }
);
const handleClose = async () => {
  props.openModal();
};
</script>
