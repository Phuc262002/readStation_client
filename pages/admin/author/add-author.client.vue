<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Thêm tác giả</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <form :model="ValueAuthor" @submit.prevent="onSubmit">
        <div class="grid grid-cols-6 gap-4 ">
          <div class="flex flex-col gap-3 col-start-1 col-end-3 ">
            <label class="text-sm font-semibold" for="">Avatar</label>
            <CommonUploadImg :value="file" @input="(event) => (file = event)" />
          </div>
          <div class="flex flex-col gap-2 col-end-9 col-span-1 pt-3">
            <a-tooltip placement="top" color="blue">
              <template #title>
                <span>Nổi bật</span>
              </template>
              <span class="group flex items-center justify-center cursor-pointer w-8 h-8 rounded-md">
                <a-space direction="vertical">
                  <a-switch v-model:checked="ValueAuthor.is_featured">
                    <template #checkedChildren><check-outlined /></template>
                    <template #unCheckedChildren><close-outlined /></template>
                  </a-switch>
                </a-space>
              </span>
            </a-tooltip>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4 pb-4 mt-5">
          <div class="flex flex-col gap-2 w-[100%]">
            <label class="text-sm font-semibold" for="">Tên tác giả</label>
            <a-input placeholder="Tên tác giả" class="border p-2 rounded-md" v-model:value="ValueAuthor.author" required />
          </div>
          <div class="flex flex-col gap-2 w-[100%]">
            <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
            <a-input placeholder="Ngày, tháng, năm sinh" class="border p-2 rounded-md" type="date"
              v-model:value="ValueAuthor.dob" />
          </div>
          <div class="flex flex-col gap-2 w-[100%]">
            <label class="text-sm font-semibold" for="">Trạng thái</label>
            <a-select size="large" v-model:value="ValueAuthor.statusValue" show-search placeholder="Trạng thái"
              :options="optionsStatus" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
              @change="handleChange"></a-select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 pb-4">
          <div class="flex flex-col gap-2 w-[100%]">

          </div>
        </div>
        <div class="flex flex-col gap-2 f-full pb-4">
          <label class="text-sm font-semibold" for="">Nội dung</label>
          <CommonCKEditor :value="ValueAuthor.description" @input="(event) => (ValueAuthor.description = event)" />
        </div>
        <div class="flex items-end gap-4 pt-4">
          <a-button danger type="primary"> Hủy</a-button>
          <a-button type="primary" html-type="submit"> Lưu</a-button>
        </div>
      </form>

    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const AuthorStore = useAuthorStore()
const baseStore = useBaseStore();
const file = ref("");
const uploadFile = async () => {
  console.log(file._rawValue.target.files[0]);
  const formData = new FormData();
  formData.append("image", file._rawValue.target.files[0]);
  const dataUpload = await baseStore.uploadImg(formData);
  console.log(dataUpload);

  return dataUpload.data._rawValue.data.link;
};
const optionsStatus = ref([
  {
    value: "active",
    label: "Active",
  },
  {
    value: "InActive",
    label: "InActive",
  },
  {
    value: "Deleted",
    label: "Deleted",
  },
]);
const ValueAuthor = ref({
  avatar: "",
  author: "",
  dob: "",
  statusValue: "",
  is_featured: false,
  description: ""
});

watchEffect(() => {
  console.log("🚀 ~ ValueAuthor:", ValueAuthor)
})
const onSubmit = async () => {
  try {
    const url = await uploadFile();
    await AuthorStore.createAuthor({
      avatar: url,
      author: ValueAuthor.value.author,
      dob: ValueAuthor.value.dob,
      statusValue: ValueAuthor.value.statusValue,
      description: ValueAuthor.value.description,
      is_featured: ValueAuthor.value.value,
    })
    message.success("Thêm thành công");
    navigateTo("/admin/author");
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
