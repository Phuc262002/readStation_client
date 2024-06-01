<template>
  <a-modal
    v-model:open="props.openModalAdd"
    title="Thêm danh mục bài viết"
    :footer="null"
    :closable="false"
  >
    <form @submit.prevent="onSubmit">
      <div class="bg-white py-2">
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Tên danh mục
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="category.name"
              class="w-[450px] h-[45px]"
              placeholder="Nhập tên danh mục"
              required
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Nội dụng
          </label>
          <div class="mt-1">
            <a-textarea
              :rows="6"
              v-model:value="category.description"
              class="w-[450px] h-[45px]"
              placeholder="Nhập nội dung"
            />
          </div>
        </div>
        <div class="flex justify-end items-end gap-4">
          <a-button
            @click="handleClose"
            type="primary"
            danger
            html-type="button"
            class="mt-4"
            >Hủy</a-button
          >
          <a-button
            :loading="categoryStore.isSubmitting"
            type="primary"
            html-type="submit"
            class="mt-4"
            >Lưu</a-button
          >
        </div>
      </div>
    </form>
  </a-modal>
</template>
<script setup>
const categoryStore = useCategoryStore();

const category = ref({
  name: "",
  description: "",
  type: "post",
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

const onSubmit = async () => {
  await categoryStore.createCategory({
    name: category.value.name,
    description: category.value.description,
    type: "post",
  });
  await categoryStore.getAllCategory({
    type: "post",
  });
  category.value = {
    name: "",
    description: "",
    logo_company: "",
  };
  props.openModal();
};

const handleClose = () => {
  category.value = {
    name: "",
    description: "",
    logo_company: "",
  };
  props.openModal();
};
</script>
