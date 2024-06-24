<!-- <template>
  <a-modal
    v-model:open="props.openModalEdit"
    title="Sửa"
    :footer="null"
    :onCancel="handleClose"
  >
    <form @submit.prevent="onUpdate">
      <ClientOnly>
        <a-spin tip="Đang xử lý..." :spinning="baseStore.isSubmitting">
          <a-upload-dragger
            v-model:fileList="fileList"
            list-type="picture"
            name="image"
            :multiple="false"
            :action="(file) => uploadFile(file)"
            @change="handleChangeUploadImg"
            @drop="handleDrop"
            :before-upload="beforeUpload"
            :remove="(file) => deleteFile(file)"
          >
            <p class="ant-upload-drag-icon">
              <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">Click hoặc kéo thả file vào đây</p>
            <p class="ant-upload-hint">Hoặc nhấn vào đây để chọn file</p>
          </a-upload-dragger>
        </a-spin>
      </ClientOnly>
    </form>
  </a-modal>
</template>
<script setup>
const publishingCompanyStore = usePublishingCompanyStore();
const fileList = ref([]);
const imageInfo = ref("");
// Upload Image
const uploadFile = async (file) => {
  if (fileList.value.length > 0) {
    fileList.value = [];
    await baseStore.deleteImg(imageInfo.value?.publicId);
  }
  const formData = new FormData();
  formData.append("image", file);
  try {
    const dataUpload = await baseStore.uploadImg(formData);
    imageInfo.value = dataUpload.data._rawValue.data;
  } catch (error) {
    message.error("Upload ảnh thất bại");
    console.log("🚀 ~ uploadFile ~ error:", error);
  }
};
const handleChangeUploadImg = (info) => {
  const status = info.file.status;
  if (status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (status === "done") {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
const deleteFile = async (file) => {
  await baseStore.deleteImg(file.url.split("/").pop().split(".")[0]);
};

const beforeUpload = (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    message.error("Bạn chỉ có thể tải lên file ảnh!");
  }
  return isImage || Upload.LIST_IGNORE;
};

const props = defineProps({
  openModalEdit: Boolean,
  closeModalEdit: Function,
});
const open = ref(props.openModalEdit);

watch(
  () => props.openModalEdit,
  (newVal) => {
    open.value = newVal;
  }
);

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
const handleClose = async () => {
  props.closeModal();
};
</script> -->

<template>
  <div>aa</div>
</template>
