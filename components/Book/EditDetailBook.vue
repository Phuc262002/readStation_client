<template>
  <a-modal v-model:open="props.openModalEdit" title="Chỉnh sửa sách" :footer="null" :onCancel="handleClose"
    style="width: 1200px;">
    <div class="flex flex-col gap-5 mt-5">
      <div class="border border-t-2"></div>
      <div class="flex flex-col gap-5">
        <div class="grid grid-rows-1">
          <div class="grid grid-cols-2 gap-10">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Ảnh chính</label>
              <ClientOnly>
                <a-spin tip="Đang xử lý..." :spinning="baseStore.isSubmitting">
                  <a-upload-dragger v-model:fileList="fileList" list-type="picture" name="image" :multiple="false"
                    :action="(file) => uploadFile(file)" @change="handleChangeImage" @drop="handleDrop"
                    :before-upload="beforeUpload" :remove="(file) => deleteFile(file)">
                    <p class="ant-upload-drag-icon">
                      <inbox-outlined></inbox-outlined>
                    </p>
                    <p class="ant-upload-text">Click hoặc kéo thả file vào đây</p>
                    <p class="ant-upload-hint">Hoặc nhấn vào đây để chọn file</p>
                  </a-upload-dragger>
                </a-spin>
              </ClientOnly>
            </div>
            <div class="flex flex-col gap-2"><label class="text-sm font-semibold" for="">Bộ sưu tập</label>
              <a-upload list-type="picture" :max-count="3" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                <a-button class="flex justify-between gap-3 items-center">
                  <upload-outlined></upload-outlined>
                  <h1>Bộ sưu tập</h1>
                </a-button>
              </a-upload>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="">Nổi bật</label>
          <a-tooltip placement="top" color="blue">
            <template #title>
              <span>Nổi bật</span>
            </template>
            <span class="group flex items-center justify-center cursor-pointer w-8 h-8 rounded-md">
              <a-space direction="vertical">
                <a-switch>
                  <template #checkedChildren><check-outlined /></template>
                  <template #unCheckedChildren><close-outlined /></template>
                </a-switch>
              </a-space>
            </span>
          </a-tooltip>
        </div>
        <div class="grid grid-rows-3 gap-5 ">
          <div class="grid grid-cols-4 gap-10">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Phiên bản sách</label>
              <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Phiên bản sách"  />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Số lượng</label>
              <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Số lượng" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Giá</label>
              <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Giá" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Tiền cọc</label>
              <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Tiền cọc" />
            </div>
          </div>
          <div class="grid grid-cols-4 gap-10">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Loại bìa</label>
              <a-select show-search size="large" placeholder="Loại bìa" :options="optionsCardboard"
                :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Số trang</label>
              <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Số trang" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Kích thước sách</label>
              <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Kích thước sách" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Ngôn ngữ</label>
              <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Ngôn ngữ" />
            </div>
          </div>
          <div class="grid grid-cols-4 gap-10">
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Người biên dịch</label>
              <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Người biên dịch" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Ngày phát hành</label>
              <a-input type="date" class="border p-2 rounded-md h-10" placeholder="Ngày phát hành" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold" for="">Công ty phát hành</label>
              <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Công ty phát hành" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-end gap-4">
        <a-button class="mt-4">Hủy</a-button>
        <a-button type="primary" html-type="submit" class="mt-4">Lưu thay đổi</a-button>
      </div>
    </div>
  </a-modal>
</template>

<script setup>
const props = defineProps({
  openModalEdit: Boolean,
  openModal: Function,
  bookDetailId: Number,
});
const bookDetailId = ref(props.bookDetailId);
const open = ref(props.openModalEdit);
watch(
  () => props.openModalEdit,
  (newVal) => {
    open.value = newVal;
  }
);
watch(
  () => props.bookDetailId,
  (newVal) => {
    bookDetailId.value = newVal;
  }
);
const handleClose = () => {
  open.value = false;
  props.openModal(false);
};
const baseStore = useBaseStore();
// const fileList = ref([]);
// const imageInfo = ref("");
// const uploadFile = async (file) => {
//   if (fileList.value.length > 0) {
//     fileList.value = [];
//     await baseStore.deleteImg(imageInfo.value?.publicId);
//   }
//   const formData = new FormData();
//   formData.append("image", file);
//   try {
//     const dataUpload = await baseStore.uploadImg(formData);
//     imageInfo.value = dataUpload.data._rawValue.data;
//   } catch (error) {
//     message.error("Upload ảnh thất bại");
//     console.log("🚀 ~ uploadFile ~ error:", error);
//   }
// };
// const handleChangeUploadImg = (info) => {
//   const status = info.file.status;
//   if (status !== "uploading") {
//     console.log(info.file, info.fileList);
//   }
//   if (status === "done") {
//     message.success(`${info.file.name} file uploaded successfully.`);
//   } else if (status === "error") {
//     message.error(`${info.file.name} file upload failed.`);
//   }
// };
// const deleteFile = async (file) => {
//   await baseStore.deleteImg(file.url.split("/").pop().split(".")[0]);
// };

// const beforeUpload = (file) => {
//   const isImage = file.type.startsWith("image/");
//   if (!isImage) {
//     message.error("Bạn chỉ có thể tải lên file ảnh!");
//   }
//   return isImage || Upload.LIST_IGNORE;
// };
const optionsCardboard = ref([
  {
    value: "soft",
    label: "Bìa mềm",
  },
  {
    value: "hard",
    label: "Bìa cứng",
  },
]);
const bookDetailStore = useBookDetailStore();
useAsyncData(async () => {
  await bookDetailStore.getOneBookDetail(bookDetailId);
});
</script>