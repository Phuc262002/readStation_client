<template>
  <div>
    <div class="flex gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Danh mục bài viết</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[260px] w-full rounded-lg p-5">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <input
              type="text"
              class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
              placeholder="Tìm kiếm..."
            />
          </div>
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <div class="">
          <a-button type="primary" @click="showModalAdd"
            >Thêm danh mục bài viết</a-button
          >
          <a-modal
            v-model:open="openModalAdd"
            title="Thêm danh mục bài viết"
            :footer="null"
          >
            <form @submit.prevent="onSubmit">
              <div class="bg-white py-2">
                <div class="pb-4">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nội dụng
                  </label>
                  <div class="mt-1">
                    <a-input
                      v-model:value="category.description"
                      class="w-[450px] h-[45px]"
                      placeholder="Nhập nội dung"
                    />
                  </div>
                </div>
                <div class="flex justify-end items-end gap-4">
                  <a-button
                    @click="onCancel"
                    type="primary"
                    danger
                    html-type="button"
                    class="mt-4"
                    >Hủy</a-button
                  >
                  <a-button type="primary" html-type="submit" class="mt-4"
                    >Lưu</a-button
                  >
                </div>
              </div>
            </form>
          </a-modal>
        </div>
      </div>

      <a-table
        :columns="columns"
        :data-source="categoryStore.categoriesAdmin?.categories"
        :loading="isLoading"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Name </span>
          </template>
        </template>

        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === '#'">
            <a>
              {{ index + 1 }}
            </a>
          </template>
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                {{ record.status }}
              </a-tag>
            </span>
          </template>

          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <!-- <a-tooltip placement="top"  color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <span class="group hover:bg-[#faad14]/20 flex items-center justify-center w-6 h-6 rounded-md"><UIcon class="group-hover:text-[#faad14]" name="i-icon-park-outline-eyes" /></span>
              </a-tooltip> -->
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <span
                  class="group hover:bg-[green]/20 flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <div>
                    <button @click="showModalEdit">
                      <UIcon
                        class="group-hover:text-[green]"
                        name="i-material-symbols-edit-outline"
                      />
                    </button>
                    <a-modal v-model:open="openModalEdit" title="Sửa">
                      <div class="">
                        <div class="bg-white py-2">
                          <div class="pb-4">
                            <label
                              for="email"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Tên danh mục
                            </label>
                            <div class="mt-1">
                              <a-input
                                class="w-[450px] h-[45px]"
                                placeholder="Nhập tên danh mục"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              for="email"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Nội dụng
                            </label>
                            <div class="mt-1">
                              <a-input
                                class="w-[450px] h-[45px]"
                                placeholder="Nhập nội dung"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a-modal>
                  </div>
                </span>
              </a-tooltip>
              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <span
                  class="group hover:bg-[red]/20 flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <button
                    @click="showDeleteConfirm(record?.id)"
                    class="flex items-center"
                  >
                    <UIcon
                      class="group-hover:text-[red]"
                      name="i-material-symbols-delete-outline"
                    />
                  </button>
                  <contextHolder />
                </span>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const [modal, contextHolder] = Modal.useModal();
const category = ref({
  name: "",
  description: "",
  type: "post",
});

const categoryStore = useCategoryStore();
const isLoading = ref(false);

const getData = async () => {
  isLoading.value = true;
  await categoryStore.getAllCategory({
    type: "post",
  });
  isLoading.value = false;
};

useAsyncData(async () => {
  await getData();
});
const onDelete = async (id: string) => {
  await categoryStore.deleteCategory(id);
  getData();
};

const showDeleteConfirm = (id: string) => {
  modal.confirm({
    title: "Are you sure delete this task?",

    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onDelete(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

const columns = [
  {
    title: "#",
    dataIndex: "#",
    key: "#",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Nội dung",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Slug",
    dataIndex: "slug",
    key: "slug",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },

  {
    title: "Chức năng",
    key: "action",
  },
];

const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);

const showModalAdd = () => {
  openModalAdd.value = true;
};
const showModalEdit = () => {
  openModalEdit.value = true;
};

const onCancel = () => {
  openModalAdd.value = false;
};
const onSubmit = async () => {
  console.log("category.value", category.value);
  await categoryStore.createCategory(category.value);
  getData();
  openModalAdd.value = false;
};
</script>
