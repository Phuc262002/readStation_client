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
        <div class="grid grid-cols-2 gap-4 pb-4">
          <div class="flex flex-col gap-2 w-[100%]">
            <label class="text-sm font-semibold" for="">Tên tác giả</label>
            <a-input placeholder="Tên tác giả" class="border p-2 rounded-md" v-model:value="ValueAuthor.author" />
          </div>
          <div class="flex flex-col gap-2 w-[100%]">
            <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
            <a-input placeholder="Ngày, tháng, năm sinh" class="border p-2 rounded-md" type="date"
              v-model:value="ValueAuthor.dob" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 pb-4">
          <div class="flex flex-col gap-2 w-[100%]">
            <label class="text-sm font-semibold" for="">Trạng thái</label>
            <a-select size="large" v-model:value="ValueAuthor.statusValue" show-search placeholder="Trạng thái"
              :options="optionsStatus" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
              @change="handleChange"></a-select>
          </div>
          <div class="flex flex-col gap-2 w-[100%]">
            <label class="text-sm font-semibold" for="">SLug</label>
            <a-input placeholder="slug" class="border p-2 rounded-md" v-model:value="ValueAuthor.slug" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 pb-4">
          <div class="flex flex-col gap-2 w-[100%]">
            <label class="text-sm font-semibold" for="">Nổi bật</label>
            <a-select size="large" v-model:value="ValueAuthor.featuredValue" show-search placeholder="Nổi bật"
              :options="optionsIs_Featured" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
              @change="handleChange"></a-select>
          </div>
        </div>
        <div class="flex flex-col gap-2 f-full pb-4">
          <label class="text-sm font-semibold" for="">Nội dung</label>
          <CommonCKEditor :value="content" @input="(event) => (content = event)"
            v-model:value="ValueAuthor.description" />
        </div>
        <div>
          <div>
            <a-upload v-model:file-list="fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture">
              <a-button class="flex justify-center gap-2 items-center text-base">
                <upload-outlined></upload-outlined>
                upload
              </a-button>
            </a-upload>
          </div>
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
import { useAuthorStore } from "~/stores/authorStore";
import { useAuthStore } from '../../../stores/authStore';
const createAuthor = useAuthorStore();
const content = ref("");
const featuredValue = ref(null); 
const statusValue = ref(null);   
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

const optionsIs_Featured = ref([
  {
    value: true,
    label: "True",
  },
  {
    value: false,
    label: "False",
  },
]);

const ValueAuthor = ref({
  author: "",
  dob: "",
  statusValue: "",
  slug: "",
  featuredValue: "",
  description: "",
});
const onSubmit = async () => {
  await createAuthor.createAuthor(ValueAuthor.value)
};


watchEffect(() => {
  console.log(content);
});

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
