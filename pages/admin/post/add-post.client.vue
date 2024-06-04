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

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <form :model="posts" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-2 w-full pb-4">
          <label class="text-sm font-semibold" for="">Thêm hình ảnh</label>
          <CommonUploadImg :value="file" @input="(event) => (file = event)" />
        </div>
        <div class="flex flex-col gap-2 w-full pb-4">
          <label class="text-sm font-semibold" for="">Tên bài viết</label>
          <a-input
            v-model:value="posts.title"
            size="large"
            type="text"
            class="border rounded-md"
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
              @change="handleChange"
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
          />
        </div>
        <div class="flex flex-col gap-2 f-full pb-4">
          <label class="text-sm font-semibold" for="">Nội dung</label>
          <CommonCKEditor
            :value="posts.content"
            @input="(event) => (posts.content = event)"
          />
        </div>

        <div></div>
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
const postStore = usePostStore();
const options = ref([]);
const upLoadFile = async () => {
  // if (!file._rawValue.target.files[0]) return;
  // const formData = new FormData();
  // formData.append("image", file._rawValue.target.files[0]);
  // const dataUpload = await baseStore.uploadImg(formData);
  // return dataUpload.data._rawValue.data.link;
  return "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-2.jpg";
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
    status:"active"
  });
  options.value = categoryStore.categoriesAdmin.categories.map((item) => ({
    value: item.id,
    label: item.name,
  }));
});


const onSubmit = async () => {
  try {
    const url = await upLoadFile();
    await postStore.createPost({
      image: url,
      title: posts.value.title,
      content: posts.value.content,
      summary: posts.value.summary,
      category_id: posts.value.category,
    });
    message.success("Thêm thành công");
    navigateTo("/admin/post");
  } catch (error) {
    message.error("Thêm thất bại");
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
