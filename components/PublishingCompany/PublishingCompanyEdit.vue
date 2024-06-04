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

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Trạng thái
          </label>
          <div class="mt-1">
            <a-select
              ref="select"
              v-model:value="publishingCompany.status"
              style="width: 120px"
              @change="handleChange"
            >
              <a-select-option value="active">Active</a-select-option>
              <a-select-option value="inactive">Inactive</a-select-option>
            </a-select>
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
  status: "",
});

const props = defineProps({
  publishingCompanyId: Number,
  openModalEdit: Boolean,
  openModal: Function,
});
const publishingCompanyId = ref(props.publishingCompanyId);
const open = ref(props.openModalEdit);
const handleChange = (value) => {
    category.value.status = value;
    
  };

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
  // if (!file._rawValue.target.files[0]) {
  //   return publishingCompany.value.logo_company;
  // }
  // const formData = new FormData();
  // formData.append("image", file._rawValue.target.files[0]);
  // const dataUpload = await baseStore.uploadImg(formData);

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
    publishingCompany.value.status = data.data._value?.data?.status;
  },
  {
    watch: [publishingCompanyId],
  }
);

const onUpdate = async () => {
  const data = {
    name: publishingCompany.value.name,
    description: publishingCompany.value.description,
    status: publishingCompany?.value?.status,
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
    status: "",
  };
  props.openModal();
};
</script>
