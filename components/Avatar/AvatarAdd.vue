<template>
  <a-modal
    v-model:open="props.openModalAdd"
    title="Thêm hình đại diện của bạn"
    :footer="null"
    :closable="false"
  >
    <form @submit.prevent="onSubmit">
      <div class="bg-white py-2">
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Hình đại diện
          </label>
          <div class="mt-1">
            <CommonUploadImg :value="file" @input="(event) => (file = event)" />
          </div>
        </div>

        <a class="flex justify-end items-end gap-4">
          <a-button
            @click="handleClose"
            type="primary"
            danger
            html-type="button"
            class="mt-4"
            >Hủy</a-button
          >
        </a>
        <a-button
          type="primary"
          :loading="userStore.isSubmitting"
          html-type="submit"
          class="mt-4"
          >Lưu</a-button
        >
      </div>
    </form>
  </a-modal>
</template>
<script setup>
const userStore = useUserStore();
const auth = ref({
  avatar: "",
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
  const formData = new FormData();
  formData.append("image", file._rawValue.target.files[0]);
  const dataUpload = await baseStore.uploadImg(formData);

  return dataUpload.data._rawValue.data.link;
};

const onSubmit = async () => {
  const url = await uploadFile();
  await userStore.updateProfile({
    avatar: url,
  });
  await userStore.getProfile({});
  auth.value = {
    avatar: "",
  };
  props.openModal();
};
const handleClose = () => {
  auth.value = {
    avatar: "",
  };
  props.openModal();
};
</script>
