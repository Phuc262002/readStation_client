<template>
  <a-modal
    v-model:open="props.openModalAdd"
    title="Thêm nhà xuất bản"
    :footer="null"
    :closable="false"
  >
    <form @submit.prevent="onSubmit">
      <div class="bg-white py-2">
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Mã nhà xuất bản
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="publishingCompany.name"
              class="w-[450px] h-[45px]"
              placeholder="Nhập mã nhà xuất bản"
              required
            />
          </div>
        </div>

        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Mô tả
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="publishingCompany.description"
              class="w-[450px] h-[45px]"
              placeholder="Nhập mã nhà xuất bản"
              required
            />
          </div>
        </div>
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Logo nhà xuất bản
          </label>
          <div class="mt-1">
            <CommonUploadImg :value="file" @input="(event) => (file = event)" />
          </div>
        </div>

        <div class="flex justify-end items-end gap-4">
          <a-button
            @click="handleClose"
            type="primary"
            danger
            html-type="button"
            class="mt-4"
            >Hủy</a-button
          >
          <a-button
            type="primary"
            :loading="publishingCompanyStore.isSubmitting"
            html-type="submit"
            class="mt-4"
            >Lưu</a-button
          >
        </div>
      </div>
    </form>
  </a-modal>
</template>
<script setup>
const publishingCompanyStore = usePublishingCompanyStore();
const file = ref(null);
const baseStore = useBaseStore();
const publishingCompany = ref({
  name: "",
  description: "",
  logo_company: "",
});
const props = defineProps({
  openModalAdd: Boolean,
  openModal: Function,
});
const open = ref(props.openModalAdd);

watch(
  () => props.openModalAdd,
  (newVal) => {
    open.value = newVal;
  }
);

const uploadFile = async () => {
  if (!file._rawValue.target.files[0]) {
    return "";
  }
  const formData = new FormData();
  formData.append("image", file._rawValue.target.files[0]);
  const dataUpload = await baseStore.uploadImg(formData);
  return dataUpload.data._rawValue.data.url;
};

const onSubmit = async () => {
  const url = await uploadFile();
  await publishingCompanyStore.createPublishingCompany({
    logo_company: url,
    name: publishingCompany.value.name,
    description: publishingCompany.value.description,
  });
  await publishingCompanyStore.getAllPublishingCompany({});
  publishingCompany.value = {
    name: "",
    description: "",
    logo_company: "",
  };
  props.openModal();
};
const handleClose = () => {
  publishingCompany.value = {
    name: "",
    description: "",
    logo_company: "",
  };
  props.openModal();
};
</script>
