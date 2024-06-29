<template>
  <a-modal
    v-model:open="open"
    title="Sửa"
    :footer="null"
    :onCancel="handleClose"
  >
    <div
      v-if="shippingMethodStore.isLoading"
      class="flex justify-center items-center min-h-[50vh]"
    >
      <a-spin size="large" />
    </div>
    <form @submit.prevent="onUpdate">
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
            Trạng thái
          </label>
          <div class="mt-1">
            <a-select
              ref="select"
              v-model:value="shippingMethod.status"
              style="width: 120px"
              @change="handleChange"
            >
              <a-select-option value="active">Hoạt động</a-select-option>
              <a-select-option value="inactive"
                >Không hoạt động</a-select-option
              >
            </a-select>
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
const shippingMethodStore = useShippingMethodsStore();
const baseStore = useBaseStore();
const fileList = ref([]);
const imageInfo = ref("");
const shippingMethod = ref({
  method: "",
  location: [" Hồ chí minh", "Hà nội"],
  fee: "",
  note: "",
  logo: "",
  status: "",
});
const props = defineProps({
  openModalEdit: Boolean,
  shippingMethodId: Number,
  openModal: Function,
});
const open = ref(props.openModalEdit);
const shippingMethodId = ref(props.shippingMethodId);
const handleChange = (value) => {
  shippingMethod.value.location = value;
};
watch(
  () => props.openModalEdit,
  (newVal) => {
    open.value = newVal;
  }
);
watch(
  () => props.shippingMethodId,
  (newVal) => {
    shippingMethodId.value = newVal;
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
useAsyncData(
  async () => {
    await shippingMethodStore.getOneShippingMethod(shippingMethodId.value);
    shippingMethod.value.method = shippingMethodStore.shippingMethod.method;
    shippingMethod.value.location = shippingMethodStore.shippingMethod.location;
    shippingMethod.value.fee = shippingMethodStore.shippingMethod.fee;
    shippingMethod.value.note = shippingMethodStore.shippingMethod.note;
    shippingMethod.value.status = shippingMethodStore.shippingMethod.status;
    imageInfo.value = shippingMethodStore.shippingMethod.logo;
    fileList.value = [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: imageInfo.value,
      },
    ];
  },
  {
    watch: [shippingMethodId, open],
    initialCache: false,
  }
);

const onUpdate = async () => {
  const data = {
    method: shippingMethod.value.method,
    location: shippingMethod.value.location,
    fee: shippingMethod.value.fee,
    note: shippingMethod.value.note,
    status: shippingMethod.value.status,
    logo: imageInfo.value?.url,
  };
  await shippingMethodStore.updateShippingMethod({
    id: shippingMethodId.value,
    shippingMethod: data,
  });
  await shippingMethodStore.getAllShippingMethods({});
  handleClose();
};

const handleClose = () => {
  props.openModal();
};
</script>
