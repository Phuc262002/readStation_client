<template>
  <a-modal
    v-model:open="props.openModalEdit"
    title="Sửa"
    :footer="null"
    :closable="false"
  >
    <form @submit.prevent="onUpdate">
      <div class="bg-white py-2">
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Tên nhà xuất bản
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="publishingCompany.name"
              class="w-[450px] h-[45px]"
              placeholder="Nhập tên nhà xuất bản"
              required
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Mô tả
          </label>
          <div class="mt-1">
            <a-textarea
              :rows="6"
              v-model:value="publishingCompany.description"
              class="w-[450px] h-[45px]"
              placeholder="Nhập nội dung"
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
            >Cập nhật</a-button
          >
        </div>
      </div>
    </form>
  </a-modal>
</template>
<script setup>
const publishingCompanyStore = usePublishingCompanyStore();
const file = ref("");
const publishingCompany = ref({
  name: "",
  description: "",
  logo_company: "",
});

const props = defineProps({
  publishingCompanyId: Number,
  openModalEdit: Boolean,
  openModal: Function,
});
const publishingCompanyId = ref(props.publishingCompanyId);
const open = ref(props.openModalEdit);

watch(
  () => props.openModalEdit,
  (newVal) => {
    open.value = newVal;
  }
);
watch(
  () => props.publishingCompanyId,
  (newVal) => {
    publishingCompanyId.value = newVal;
  }
);

const uploadFile = async () => {
  // console.log(file._rawValue.target.files[0]);
  // const formData = new FormData();
  // formData.append("image", file._rawValue.target.files[0]);
  // const dataUpload = await baseStore.uploadImg(formData);
  // console.log(dataUpload);

  // return dataUpload.data._rawValue.data.link;
  return "";
};
useAsyncData(
  async () => {
    const data = await publishingCompanyStore.getOnePublishingCompany(
      publishingCompanyId.value
    );

    publishingCompany.value.name = data.data._value?.data?.name;
    publishingCompany.value.description = data.data._value?.data?.description;
    publishingCompany.value.logo_company = data.data._value?.data?.logo_company;
  },
  {
    watch: [publishingCompanyId],
  }
);

const onUpdate = async () => {
  const data = {
    name: publishingCompany.value.name,
    description: publishingCompany.value.description,
    logo_company: await uploadFile(),
  };

  await publishingCompanyStore.updatePublishingCompany({
    id: publishingCompanyId.value,
    publishingCompany: data,
  });
  await publishingCompanyStore.getAllPublishingCompany({});
  handleClose();
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
