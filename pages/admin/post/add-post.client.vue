<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Thêm bài viết</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>
    <div v-if="errors" class="space-y-2 mb-4">
      <a-alert
        v-for="(error, index) in errors"
        :key="index"
        :message="error"
        type="error"
        show-icon
      />
    </div>
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <form :model="posts" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-2 w-full pb-4">
          <label class="text-sm font-semibold" for="">Thêm hình ảnh</label>
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
                required
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
        <div class="flex flex-col gap-2 w-full pb-4">
          <label class="text-sm font-semibold" for="">Tên bài viết</label>
          <a-input
            v-model:value="posts.title"
            size="large"
            type="text"
            class="border rounded-md"
            required
            placeholder="Tên bài viết"
          />
        </div>

        <div class="grid grid-cols-2 gap-4 pb-4">
          <div class="flex flex-col gap-2 w-[50%]">
            <label class="text-sm font-semibold" for="">Danh mục</label>
            <a-select
              size="large"
              v-model:value="posts.category"
              show-search
              placeholder="Danh mục"
              :options="options"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChangeSelect"
              required
            ></a-select>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-full pb-4">
          <label class="text-sm font-semibold" for="">Nội dung ngắn</label>
          <a-textarea
            placeholder="Nhập nội dung ngắn"
            v-model:value="posts.summary"
            :rows="6"
            allow-clear
            required
          />
        </div>
        <div class="flex flex-col gap-2 f-full pb-4">
          <label class="text-sm font-semibold" for="">Nội dung</label>
          <CommonCKEditor
            :value="posts.content"
            @input="(event) => (posts.content = event)"
          />
        </div>
        <div class="flex items-end gap-4 pt-4">
          <a-button type="text"> Hủy</a-button>
          <a-button type="primary" html-type="submit"> Lưu</a-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
const categoryStore = useCategoryStore();
const postStore = useGeneralPostStore();

const baseStore = useBaseStore();
const fileList = ref([]);
const imageInfo = ref("");
const errors = ref({});
const options = ref([]);
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
const posts = ref({
  title: "",
  content: "",
  summary: "",
  image: "",
  category_id: "",
});
useAsyncData(async () => {
  await categoryStore.getAllCategory({
    type: "post",
    status: "active",
  });
  options.value = categoryStore.categoriesAdmin.categories.map((item) => ({
    value: item.id,
    label: item.name,
  }));
});

const onSubmit = async () => {
  try {
    if (!imageInfo.value?.url) {
      message.error("Vui lòng chọn ảnh");
      return;
    }

    if (!posts.value.category) {
      message.error("Vui lòng chọn danh mục");
      return;
    }

    if (!posts.value.content) {
      message.error("Vui lòng nhập nội dung");
      return;
    }
    
    const data = await postStore.createPost({
      image: imageInfo.value?.url,
      title: posts.value.title,
      content: posts.value.content,
      summary: posts.value.summary,
      category_id: posts.value.category,
    });
    if (data.error?.value?.data) {
      errors.value = data.error.value.data?.errors;
      message.error("Thêm bài viết thất bại");
      return;
    }
    message.success("Thêm bài viết thành công");
    navigateTo("/admin/post");
  } catch (error) {
    console.log("🚀 ~ onSubmit ~ error:", error);
    message.error("Thêm thất bại");
  }
};

const handleChangeSelect = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
