<template>
  <a-modal
    v-model:open="props.openModalRecharge"
    title="Nạp tiền vào ví"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="bg-white py-2">
        <div class="flex gap-2">
          <div class="pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Họ và tên
            </label>
            <div class="mt-1">
              <a-input
                class="w-[232px] h-10"
                placeholder="Nhập họ và tên"
                required
              />
            </div>
          </div>
          <div class="pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <div class="mt-1">
              <a-input
                class="w-[232px] h-10"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>
          </div>
        </div>
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            CMT/CCCD
          </label>
          <div class="mt-1">
            <a-input
              class="w-[232px] h-10"
              placeholder="Nhập số CMT/CCCD"
              required
            />
          </div>
        </div>

        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div class="mt-1">
            <a-input class="w-full h-10" placeholder="Nhập email" required />
          </div>
        </div>

        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Số tiền nạp
          </label>
          <div class="mt-1">
            <a-input
              class="w-[472px] h-[84px] text-3xl font-semibold"
              placeholder="Nhập số tiền nạp"
              required
            />
          </div>
        </div>

        <div class="flex justify-end items-end gap-2">
          <a-button @click="handleClose" danger html-type="button" class="mt-4"
            >Hủy</a-button
          >
          <a-button type="primary" html-type="submit" class="mt-4"
            >Nạp tiền</a-button
          >
        </div>
      </div>
    </form>
  </a-modal>
</template>
<script setup>

const props = defineProps({
  openModalRecharge: Boolean,
  openModal: Function,
});
const open = ref(props.openModalRecharge);

watch(
  () => props.openModalRecharge,
  (newVal) => {
    open.value = newVal;
  }
);
const handleClose = () => {
  props.openModal();
};
</script>
