<template>
  <div>
    <h2 class="font-bold pb-5">Chỉnh sửa bài viết của bạn</h2>
    <div
      class="w-2/3 w-full bg-white rounded-lg shadow-md shadow-gray-300 p-5 text-sm"
    >
      <form @submit.prevent="updatePost" class="space-y-5">
        <div>
          <p class="pb-2">Ảnh bìa</p>
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
        <!--  -->
        <div>
          <p class="pb-2">Tên bài viết</p>
          <a-input
            type="text"
            v-model:value="post.title"
            placeholder="Tên bài viết"
            class="h-10"
          />
        </div>
        <div>
          <p class="pb-2">Mô tả ngắn</p>
          <a-textarea
            v-model:value="post.summary"
            placeholder="Mô tả ngắn"
            :rows="4"
          />
        </div>
        <div class="w-1/3 w-full">
          <p class="pb-2" for="">Danh mục</p>
          <a-select
            v-model:value="post.category.name"
            placeholder="Danh mục"
            class="w-1/3"
            size="large"
            :options="options"
          >
          </a-select>
        </div>
        <div>
          <p class="pb-2" for="">Mô tả chi tiết</p>
          <CommonCKEditor
            :value="post.content"
            @input="(event) => (post.content = event)"
          />
        </div>
        <div class="flex justify-end gap-2">
          <NuxtLink to="/account/post">
            <a-button class="h-10 text-base">Hủy</a-button>
          </NuxtLink>

          <a-button
            html-type="submit"
            class="h-10 text-base bg-orange-500 border-none !text-white"
            >Cập nhật</a-button
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
const fileList = ref([]);

const categoryStore = useCategoryPublicStore();
const postStore = useGeneralPostStore();
const options = ref([]);
const baseStore = useBaseStore();
const route = useRoute();
const idPost = route.params.id;
const post = ref({
  image: "",
});
// Upload Image
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
// Get Category
useAsyncData(async () => {
  try {
    await categoryStore.getAllCategory({
      type: "post",
    });
    options.value = categoryStore?.categories?.categories.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  } catch (error) {
    console.log(error);
  }
});
// Get a post
useAsyncData(async () => {
  try {
    const data = await postStore.getOnePost(idPost);
    post.value = data.data._rawValue.data;
    fileList.value = [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: data.data._rawValue.data.image,
      },
    ];
  } catch (error) {
    console.log("error", error);
  }
});

// Update Post
const updatePost = async () => {
  try {
    const updateValue = {
      category_id: post.value.category_id,
      title: post.value.title,
      content: post.value.content,
      summary: post.value.summary,
      image: imageInfo.value?.url || post.value.image,
      status: "wating_approve",
    };
    await postStore.updatePost({ id: idPost, post: updateValue });
    message.success("Chỉnh sửa thành công");
    navigateTo("/account/post");
  } catch (error) {
    message.error("Chỉnh sửa thất bại");
  }
};
</script>
<style scoped>
:deep(.ant-input) {
  resize: none;
}
</style>
