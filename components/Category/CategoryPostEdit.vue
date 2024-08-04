<template>
  <a-modal
    v-model:open="open"
    title="Sửa"
    :footer="null"
    :onCancel="handleClose"
  >
    <div
      v-if="categoryStore.isLoading"
      class="flex justify-center items-center min-h-[50vh]"
    >
      <a-spin size="large" />
    </div>
    <form v-else @submit.prevent="onUpdate">
      <div class="mb-4 space-y-1" v-if="errors">
        <a-alert
          v-for="(error, index) in errors"
          :message="error"
          type="error"
          show-icon
        />
      </div>
      <div class="bg-white py-2">
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Tên danh mục <span class="text-red-500">*</span>
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="category.name"
              class="w-[450px] h-[45px]"
              placeholder="Nhập tên danh mục"
              required
            />
          </div>
        </div>

        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Mô tả <span class="text-red-500">*</span>
          </label>
          <div class="mt-1">
            <a-textarea
              :rows="6"
              v-model:value="category.description"
              class="w-[450px] h-[45px]"
              placeholder="Nhập mô tả"
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
              v-model:value="category.status"
              style="width: 450px"
              @change="handleChange"
            >
              <a-select-option value="active">Công khai</a-select-option>
              <a-select-option value="inactive">Đang ẩn</a-select-option>
            </a-select>
          </div>
        </div>
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Hình danh mục bài viết
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
            :loading="categoryStore.isSubmitting"
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
import { message, Upload } from "ant-design-vue";
const categoryStore = useCategoryStore();
const baseStore = useBaseStore();
const fileList = ref([]);
const errors = ref({});
const imageInfo = ref("");
const category = ref({
  image: "",
  name: "",
  description: "",

  type: "post",
});
const props = defineProps({
  openModalEdit: Boolean,
  openModal: Function,
  categoryId: Number,
});
const categoryId = ref(props.categoryId);
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
  () => props.categoryId,
  (newVal) => {
    categoryId.value = newVal;
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
    const data = await categoryStore.getOneCategory(categoryId.value);
    category.value.name = data.data._value?.data?.name;
    category.value.description = data.data._value?.data?.description;
    category.value.status = data.data._value?.data?.status;

    category.value.image = data.data._value?.data?.image;
    fileList.value = [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: data.data._value?.data?.image,
      },
    ];
  },
  {
    watch: [categoryId, open],
    initialCache: false,
  }
);

const onUpdate = async () => {
  errors.value = {};
  const data = {
    name: category.value?.name,
    description: category.value?.description,
    status: category.value?.status,
    image: imageInfo.value?.url || category.value?.image,
    type: "post",
  };
  try {
    const res = await categoryStore.updateCategory({
      id: categoryId.value,
      category: data,
    });
    if (res.data._rawValue?.status == true) {
      await categoryStore.getAllCategory({
        type: "post",
      });
      handleClose();
      message.success("Cập nhật danh mục bài viết thành công");
    } else {
      errors.value = res.error.value.data.errors;
      message.error(res.error.value.data.message);
    }
  } catch (error) {
    message.error("Cập nhật danh mục bài viết thất bại");
  }
};

const handleClose = () => {
  props.openModal();
  errors.value = {};
};
</script>
