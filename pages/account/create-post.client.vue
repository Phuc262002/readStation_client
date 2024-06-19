<template>
  <div>
    <h2 class="font-bold pb-5">Bài viết mới</h2>
    <div
      class="w-2/3 w-full bg-white rounded-lg shadow-md shadow-gray-300 p-5 text-sm space-y-5"
    >
      <div>
        <p class="pb-2">Ảnh bìa</p>
        <a-upload-dragger
          v-model:fileList="fileList"
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          @change="handleChange"
          @drop="handleDrop"
        >
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">Click hoặc kéo thả file vào đây</p>
          <p class="ant-upload-hint">Hoặc nhấn vào đây để chọn file</p>
        </a-upload-dragger>
      </div>
      <!--  -->
      <div>
        <p class="pb-2">Tên bài viết</p>
        <a-input placeholder="Tên bài viết" class="h-10" />
      </div>
      <div>
        <p class="pb-2">Tiêu đề bài viết</p>
        <a-input placeholder="Tiêu đề" class="h-10" />
      </div>
      <div class="w-1/3 w-full">
        <p class="pb-2" for="">Danh mục</p>
        <a-select placeholder="Danh mục" class="w-1/3" size="large"></a-select>
      </div>
      <div>
        <p class="pb-2" for="">Mô tả chi tiết</p>
        <CommonCKEditor />
      </div>
      <div class="flex justify-end gap-2">
        <a-button class="h-10 text-base">Hủy</a-button>
        <a-button class="h-10 text-base !text-orange-500 border-orange-500"
          >Lưu nháp</a-button
        >
        <a-button class="h-10 text-base bg-orange-500 border-none !text-white"
          >Lưu</a-button
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const fileList = ref([]);
const categoryStore = useCategoryStore();
const current = ref(1);
useAsyncData(async () => {
  try {
    await categoryStore.getAllCategoryClient({
      page: current.value,
    });
  } catch (error) {
    console.log(error);
  }
});

const handleChange = (info: UploadChangeParam) => {
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
function handleDrop(e: DragEvent) {
  console.log(e);
}
</script>
