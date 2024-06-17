<template>
  <a-modal
    v-model:open="props.openModalAccept"
    title="Xác thực ví"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onSubmit">
      <div class="bg-white py-2">
        <div class="flex gap-2">
          <div class="pb-2">
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
          <div class="pb-2">
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

        <div class="">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div class="mt-1">
            <a-input class="w-full h-10" placeholder="Nhập email" required />
          </div>
        </div>
        <div
          class="relative flex items-center justify-between text-center py-2"
        >
          <hr class="flex-1 solid border-t-2" />
          <p class="px-2">Thông tin căn cước</p>
          <hr class="flex-1 solid border-t-2" />
        </div>
        <div class="flex gap-2">
          <div class="pb-2">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Họ tên khai sinh
            </label>
            <div class="mt-1">
              <a-input
                class="w-[232px] h-10"
                placeholder="Nhập họ tên khai sinh"
                required
              />
            </div>
          </div>
          <div class="pb-2">
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
        </div>

        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Ngày cấp
          </label>
          <div class="mt-1">
            <a-input class="w-[232px] h-10" type="date" required />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Nơi cấp
          </label>
          <div class="mt-1">
            <!-- <a-select
              v-model:value="value"
              mode="tags"
              style="width: 100%"
              :token-separators="[',']"
              placeholder="Automatic tokenization"
              :options="options"
              @change="handleChange"
            ></a-select> -->
          </div>
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
    </form>
  </a-modal>
</template>
<script setup>
import { ref, watch } from 'vue';
// const options = ref<SelectProps['options']>([
//   {
//     value: 'a1',
//     label: 'a1',
//   },
// ]);
// const value = ref<string['']>([]);
// const handleChange = (value: []) => {
//   console.log(`selected ${value}`);
// };
// watch(value, () => {
//   console.log('value', value.value);
// });
const props = defineProps({
  openModalAccept: Boolean,
  openModal: Function,
});
const open = ref(props.openModalAccept);

watch(
  () => props.openModalAccept,
  (newVal) => {
    open.value = newVal;
  }
);
const handleClose = () => {
  props.openModal();
};
</script>
