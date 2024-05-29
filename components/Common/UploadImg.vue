<template>
  <div class="clearfix">
    <a-upload
      :value="value"
      @input="emitInput"
      v-model:file-list="fileList"
      :customRequest="(file) => uploadImg(file)"
      list-type="picture-card"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal
      :open="previewVisible"
      :title="previewTitle"
      :footer="null"
      @cancel="handleCancel"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  value: {
    type: String,
  },
});
import { PlusOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import type { UploadProps } from "ant-design-vue";
const emit = defineEmits(["input"]);
const emitInput = (event) => {
  emit("input", event);
};
const uploadImg = (file: any) => {
  handlePreview(file);
  console.log(file);
};

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const previewVisible = ref(false);
const previewImage = ref("");
const previewTitle = ref("");

const fileList = ref<UploadProps["fileList"]>([]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};
const handlePreview = async (file: any) => {
  const url = (await getBase64(file.file)) as string;
  previewImage.value = url;
  previewVisible.value = true;
  previewTitle.value = file.file.name;
  fileList.value = [
    {
      uid: "1",
      name: file.file.name,
      status: "done",
      url: url,
    },
  ];
};
</script>
<style scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
