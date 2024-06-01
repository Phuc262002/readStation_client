<template>
    <a-modal
      v-model:open="props.openModalEdit"
      title="Sửa"
      :footer="null"
      :closable="false"
    >
      <form @submit.prevent="onUpdate">
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
  
          <div class="pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Nội dụng
            </label>
            <div class="mt-1">
              <a-textarea
                :rows="6"
                v-model:value="category.description"
                class="w-[450px] h-[45px]"
                placeholder="Nhập nội dung"
                required
              />
            </div>
          </div>
  
          <div class="pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Trạng thái
            </label>
            <div class="mt-1">
              <a-select
                ref="select"
                v-model:value="category.status"
                style="width: 120px"
  
                @change="handleChange"
              >
                <a-select-option value="active">Active</a-select-option>
                <a-select-option value="inactive">Inactive</a-select-option>
                
              </a-select>
            
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
              type="primary"
              :loading="category.isSubmitting"
              html-type="submit"
              class="mt-4"
              >Cập nhật</a-button
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
    status: "",
    type: "post",
  });
  const props = defineProps({
    openModalEdit: Boolean,
    openModal: Function,
    categoryId: Number,
  });
  const categoryId = ref(props.categoryId);
  const open = ref(props.openModalEdit);
  
  
  const handleChange = (value) => {
    category.value.status = value;
    
  };
  watch(
    () => props.openModalEdit,
    (newVal) => {
      open.value = newVal;
    }
  );
  watch(
    () => props.categoryId,
    (newVal) => {
      categoryId.value = newVal;
    }
  );
  
  useAsyncData(
    async () => {
      const data = await categoryStore.getOneCategory(categoryId.value);
      category.value.name = data.data._value?.data?.name;
      category.value.description = data.data._value?.data?.description;
      category.value.status = data.data._value?.data?.status;
    },
    {
      watch: [categoryId],
    }
  );
  
  const onUpdate = async () => {
    const data = {
      name: category.value.name,
      description: category.value.description,
      status: category.value.status,
      type: "book",
    };
    await categoryStore.updateCategory({
      id: categoryId.value,
      category: data,
    });
    await categoryStore.getAllCategory({
      type: "book",
    });
    handleClose();
  };
  
  const handleClose = () => {
    category.value = {
      name: "",
      description: "",
      status: "",
    };
    props.openModal();
  };
  </script>
  