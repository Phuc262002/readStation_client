<template>
  <a-modal
    v-model:open="props.openModalEdit"
    title="Sửa"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onUpdate">
      <div class="bg-white py-2">
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Mã tủ sách
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="bookCase.bookcase_code"
              class="w-[450px] h-[45px]"
              placeholder="Nhập mã tủ sách"
              required
            />
          </div>
        </div>
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Tên tủ sách
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="bookCase.name"
              class="w-[450px] h-[45px]"
              placeholder="Nhập tên tủ sách"
              required
            />
          </div>
        </div>

        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Mô tả
          </label>
          <div class="mt-1">
            <a-textarea
              v-model:value="bookCase.description"
              :rows="6"
              class="w-[450px] h-[45px]"
              placeholder="Nhập nội dung"
            />
          </div>
        </div>

        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Trạng thái
          </label>
          <div class="mt-1">
            <a-select
              ref="select"
              v-model:value="bookCase.status"
              style="width: 120px"
              @change="handleChange"
            >
              <a-select-option value="active">Active</a-select-option>
              <a-select-option value="inactive">Inactive</a-select-option>
            </a-select>
          </div>
        </div>

        <div class="flex justify-end items-end gap-2">
          <a-button @click="handleClose"  html-type="button" class="mt-4"
            >Hủy</a-button
          >
          <a-button type="primary" html-type="submit" class="mt-4"
            >Cập nhật</a-button
          >
        </div>
      </div>
    </form>
  </a-modal>
</template>
<script setup>
const bookCaseStore = useBookcaseStore();
const bookCase = ref({
  bookcase_code: "",
  name: "",
  description: "",
  status: "",
});
const props = defineProps({
  openModalEdit: Boolean,
  openModal: Function,
  bookCaseId: Number,
});
const bookCaseId = ref(props.bookCaseId);
const open = ref(props.openModalEdit);
watch(
  () => props.openModalEdit,
  (newVal) => {
    open.value = newVal;
  }
);
watch(
  () => props.bookCaseId,
  (newVal) => {
    bookCaseId.value = newVal;
  }
);

useAsyncData(
  async () => {
    const data = await bookCaseStore.getOneBookcase(bookCaseId.value);

    bookCase.value.bookcase_code = data.data._value?.data?.bookcase_code;
    bookCase.value.name = data.data._value?.data?.name;
    bookCase.value.description = data.data._value?.data?.description;
    bookCase.value.status = data.data._value?.data?.status;
  },
  {
    watch: [bookCaseId],
    initialCache: false,
  }
);
const onUpdate = async () => {
  const data = {
    bookcase_code: bookCase.value?.bookcase_code,
    name: bookCase.value?.name,
    description: bookCase.value?.description,
    status: bookCase.value?.status,
  };
  await bookCaseStore.updateBookcase({
    id: bookCaseId.value,
    bookcase: data,
  });
  await bookCaseStore.getAllBookcases({});
  props.openModal();
};
const handleClose = () => {
  props.openModal();
};
</script>
