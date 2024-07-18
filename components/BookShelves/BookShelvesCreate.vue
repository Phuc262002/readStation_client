<template>
  <a-modal v-model:open="props.openModalAdd" title="Thêm kệ sách" :footer="null" :onCancel="handleClose">
    <form @submit.prevent="onSubmit" v-mode:valueCreateShelves>
      <div class="bg-white py-2">
        <div class="grid gap-4 my-3">
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <label for="">Mã kệ</label>
              <a-input type="text" class="border p-2 rounded-md" placeholder="Nhập mã kệ"
                v-model:value="valueCreateShelves.bookshelf_code" required />
            </div>
            <div class="flex flex-col gap-2">
              <label for="">Tên kệ</label>
              <a-input type="text" class="border p-2 rounded-md" placeholder="Tên kệ"
                v-model:value="valueCreateShelves.name" required />
            </div>
            <div class="flex flex-col gap-2">
              <label for="">Mô tả</label>
              <a-input type="text" class="border p-2 rounded-md" placeholder="Mô tả"
                v-model:value="valueCreateShelves.description" required />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col gap-2">
              <label for="">Tủ sách</label>
              <a-select v-model:value="valueCreateShelves.bookcase_id" show-search placeholder="Mã tủ sách"
                :options="optionsCase" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                @change="handleChange"></a-select>
            </div>
            <div class="flex flex-col gap-2">
              <label for="">Danh mục</label>
              <a-select v-model:value="valueCreateShelves.category_id" show-search placeholder="Mã danh mục"
                :options="optionsCategory" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                @change="handleChange"></a-select>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-end gap-2">
          <a-button @click="handleClose">Hủy</a-button>
          <a-button :loading="shelvesValue.isSubmitting" html-type="submit"
            class="text-white bg-rtprimary hover:!text-white border-none hover:bg-rtsecondary mt-4 ">Lưu</a-button>
        </div>
      </div>
    </form>
  </a-modal>
</template>


<script setup>
import { ref } from "vue";
const isLoading = ref(false);
const bookcaseValue = useBookcaseStore();
const optionsCase = ref({});
const getDataCase = async () => {
  try {
    const data = await bookcaseValue.getAllBookcases({});
    optionsCase.value = data?.data?._rawValue?.data?.bookcases.map((items) => {
      return {
        value: items.id,
        label: items.description,
      };
    });
    return data;
  } catch (error) {
    console.error(error);
  }
  return data;
}
const optionsCategory = ref([]);
const categoryValue = useCategoryStore();
const getDataCategory = async () => {
  try {
    isLoading.value = true;
    const data = await categoryValue.getAllCategory({ type: "book" });
    optionsCategory.value = data.data._rawValue.data.categories.map((items) => {
      return {
        value: items.id,
        label: items.name,
      };
    })
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
useAsyncData(async () => {
  await getDataCase();
  await getDataCategory();
});
const props = defineProps({
  openModalAdd: Boolean,
  openModal: Function,
});
const open = ref(props.openModalAdd);
watch(
  () => props.openModalAdd,
  (newVal) => {
    open.value = newVal;
  }
);
const shelvesValue = useShelvesStore();
const valueCreateShelves = ref({
  name: "",
  description: "",
  bookcase_id: "",
  bookshelf_code: "",
  category_id: "",
});
const onSubmit = async () => {
  try {
    shelvesValue.isSubmitting = true;
    const data = await shelvesValue.createShelves(valueCreateShelves.value);
    if (data) {
      props.openModal();
      valueCreateShelves.value = {
        description: "",
        bookcase_id: "",
        bookshelf_code: "",
        category_id: "",
      };
    }
    handleClose();
    useAsyncData(async () => {
      try {
        await shelvesValue.getAllShelves({});
      } catch (error) {
        console.error(error);
      }
    })
  } catch (error) {
    message.error("Thêm kệ sách thất bại");
    console.error(error);
  }
  props.openModal();
}
const handleClose = () => {
  props.openModal();
};
</script>