<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Chỉnh sửa bài viết</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <form @submit.prevent="updatePost">
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
        <div class="flex flex-col gap-2 w-full pb-4">
          <label class="text-sm font-semibold" for="">Tên bài viết</label>
          <a-input
            v-model:value="post.title"
            size="large"
            type="text"
            class="border rounded-md"
            placeholder="Tên bài viết"
          />
        </div>

        <div class="flex gap-5 pb-4">
          <div class="flex flex-col gap-2 w-1/3">
            <label class="text-sm font-semibold" for="">Danh mục</label>
            <a-select
              size="large"
              v-model:value="post.category_id"
              show-search
              placeholder="Danh mục"
              :options="options"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
            ></a-select>
          </div>
          <div class="flex flex-col gap-2 w-1/3">
            <label class="text-sm font-semibold" for="">Trạng thái</label>
            <a-select
              size="large"
              v-model:value="post.status"
              show-search
              placeholder="Trạng thái"
              :options="options"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
            ></a-select>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-full pb-4">
          <label class="text-sm font-semibold" for="">Nội dung ngắn</label>
          <a-textarea
            placeholder="Nhập nội dung ngắn"
            v-model:value="post.summary"
            :rows="6"
            allow-clear
          />
        </div>
        <div class="flex flex-col gap-2 f-full pb-4">
          <label class="text-sm font-semibold" for="">Nội dung</label>
          <CommonCKEditor
            v-model:value="post.content"
            :value="content"
            @input="(event) => (content = event)"
          />
        </div>

        <div class="flex items-end gap-2 pt-4">
          <a-button danger> Hủy</a-button>
          <a-button
            type="primary"
            html-type="submit"
            :loading="postStore.isSubmitting"
          >
            Cập nhật</a-button
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const postID = route.params.id;
const categoryStore = useCategoryStore();
const baseStore = useBaseStore();
const postStore = usePostStore();
const post = ref({
  title: "",
  category_id: "",
  status: "",
  image: "",
  content: "",
  summary: "",
});
const options = ref([]);
const fileList = ref([]);
const imageInfo = ref("");
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
useAsyncData(async () => {
  const data = await categoryStore.getAllCategory({ type: "post" });
  options.value = data.data._value.data.categories.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
});
useAsyncData(async () => {
  const data = await postStore.getOnePostAdmin(postID);
  post.value.title = data.data._value?.data?.title;
  post.value.category_id = data.data._value?.data?.category.id;
  post.value.status = data.data._value?.data?.status;
  post.value.image = data.data._value?.data?.image;
  post.value.content = data.data._value?.data?.content;
  post.value.summary = data.data._value?.data?.summary;
  fileList.value = [
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: post.value.image,
    },
  ];
});
const updatePost = async () => {
  try {
    const data = {
      title: post.value.title,
      category_id: post.value.category?.id,
      status: post.value.status,
      image: imageInfo.value?.url || post.value.image,
      content: post.value.content,
      summary: post.value.summary,
    };
    await postStore.updatePost({ id: postID, post: data });
    message.success("Cập nhật thành công");
    navigateTo("/admin/post");
  } catch (error) {
    message.error(error.message);
  }
};

const handleChange = (value) => {
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
