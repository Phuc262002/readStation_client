<template>
  <a-modal
    v-model:open="props.openModalAdd"
    title="Thêm phương thức vận chuyển"
    :footer="null"
    :onCancel="handleClose"
  >
    <div
      v-if="shippingMethodStore.isLoading"
      class="flex justify-center items-center min-h-[50vh]"
    >
      <a-spin size="large" />
    </div>
    <form @submit.prevent="onSubmit">
      <div class="bg-white py-2">
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Phương thức vận chuyển
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="shippingMethod.method"
              class="w-[450px] h-[45px]"
              placeholder="Nhập phương thức vận chuyển"
              required
            />
          </div>
        </div>

        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Khu vực
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="shippingMethod.location"
              class="w-[450px] h-[45px]"
              placeholder="Nhập khu vực"
              required
            />
          </div>
        </div>
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Phí vận chuyển
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="shippingMethod.fee"
              class="w-[450px] h-[45px]"
              placeholder="Nhập phí vận chuyển"
              required
            />
          </div>
        </div>
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Ghi chú
          </label>
          <div class="mt-1">
            <a-textarea
              v-model:value="shippingMethod.note"
              size="large"
              placeholder="Nhập ghi chú"
              required
            />
          </div>
        </div>
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Logo phương thức vận chuyển
          </label>
          <div class="mt-1">
            <ClientOnly>
              <a-spin tip="Đang xử lý..." :spinning="baseStore.isSubmitting">
                <a-upload-dragger
                  v-model:fileList="fileList"
                  list-type="picture"
                  name="image"
                  :multiple="false"
                  :action="(file) => uploadFile(file)"
                  @change="handleChange"
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
          </div>
        </div>

        <div class="flex justify-end items-end gap-2">
          <a-button @click="handleClose" danger html-type="button" class="mt-4"
            >Hủy</a-button
          >
          <a-button
            type="primary"
            :loading="shippingMethodStore.isSubmitting"
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
import { message, Upload } from "ant-design-vue";
const baseStore = useBaseStore();
const shippingMethodStore = useShippingMethodsStore();
const fileList = ref([]);
const imageInfo = ref("");
const shippingMethod = ref({
  method: "",
  location: [" Hồ chí minh", "Hà nội"],
  fee: "",
  note: "",
  logo: "",
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
  }
};
const handleChange = (info) => {
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
  await baseStore.deleteImg(imageInfo.value?.publicId);
};

function handleDrop(e) {
  console.log(e);
}
const beforeUpload = (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    message.error("Bạn chỉ có thể tải lên file ảnh!");
  }
  return isImage || Upload.LIST_IGNORE;
};
const onSubmit = async () => {
  await shippingMethodStore.createShippingMethod({
    method: shippingMethod.value.method,
    location: shippingMethod.value.location,
    fee: shippingMethod.value.fee,
    note: shippingMethod.value.note,
    logo: imageInfo.value?.url,
  });
  await shippingMethodStore.getAllShippingMethods({});
  shippingMethod.value = {
    method: "",
    location: [" Hồ chí minh", "Hà nội"],
    fee: "",
    note: "",
    logo: "",
  };
  if (fileList.value.length > 0) {
    fileList.value = [];
  }
  props.openModal();
};
const handleClose = async () => {
  props.openModal();
  if (fileList.value.length > 0) {
    fileList.value = [];
    await baseStore.deleteImg(imageInfo.value?.publicId);
  }
  shippingMethod.value = {
    method: "",
    location: [" Hồ chí minh", "Hà nội"],
    fee: "",
    note: "",
    logo: "",
  };
  props.openModal();
};
</script>
