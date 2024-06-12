<template>
  <a-modal v-model:open="open" title="Địa chỉ mới" @ok="handleOk">
    <form>
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
            <a-input class="w-full h-10" placeholder="Nhập họ tên" required />
          </div>
        </div>
        <div class="w-1/2 pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Quận/ Huyện
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
            Phường/ Xã
          </label>
          <div class="mt-1">
            <a-input class="w-full h-10" placeholder="Nhập họ tên" required />
          </div>
        </div>
        <div class="w-1/2 pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Đường
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
      <div class="pb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Địa chỉ cụ thể
        </label>
        <div class="mt-1">
          <a-input
            class="w-full h-10"
            placeholder="Nhập số điện thoại"
            required
          />
        </div>
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
</script>
