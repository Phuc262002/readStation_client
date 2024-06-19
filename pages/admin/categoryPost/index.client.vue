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
          <a-button
            class="text-white bg-rtprimary hover:!text-white border-none hover:bg-rtsecondary"
            @click="showModalAdd"
            >Thêm danh mục bài viết</a-button
          >

          <CategoryPostAdd
            :openModalAdd="openModalAdd"
            :openModal="CloseModalAdd"
          />
          <CategoryPostEdit
            :openModalEdit="openModalEdit"
            :openModal="CloseModalEdit"
            :categoryId="categoryId"
          />
        </div>
      </div>

      <a-table
        :columns="columns"
        :data-source="categoryStore.categoriesAdmin?.categories"
        :loading="categoryStore.isLoading"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-if="column.key === 'category'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'image'">
            <a-image class="rounded-md" :width="100" :src="record.image" />
          </template>
          <template v-else-if="column.key === 'is_featured'">
            <IconTick v-if="record.is_featured" />
            <IconMul v-else />
          </template>
          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === 'active'"
              class="bg-tag-bg-09 text-tag-text-09"
            >
              Công khai
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === 'inactive'"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đang ẩn
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === 'deleted'"
              class="bg-tag-bg-06 text-tag-text-06"
            >
              Đã xóa
            </a-tag>
          </template>

          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <!-- <a-tooltip placement="top"  color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <span class="group hover:bg-[#faad14]/20 flex items-center justify-center w-6 h-6 rounded-md"><UIcon class="group-hover:text-[#faad14]" name="i-icon-park-outline-eyes" /></span>
              </a-tooltip> -->
              <a-tooltip placement="top" >
                <template #title>
                  <span>Sửa</span>
                </template>
                <button
                  @click="showModalEdit(record?.id)"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="text-lg"
                    name="i-material-symbols-edit-outline"
                  />
                </button>
              </a-tooltip>
              <a-tooltip placement="top" >
                <template #title>
                  <span>Xóa</span>
                </template>
                <button
                  @click="showDeleteConfirm(record?.id)"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="text-lg"
                    name="i-material-symbols-delete-outline"
                  />
                </button>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="categoryStore.categoriesAdmin?.totalResults"
          :pageSize="categoryStore.categoriesAdmin?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Modal } from "ant-design-vue";
const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);
const categoryId = ref<number>();
const categoryStore = useCategoryStore();
const current = ref(1);
useAsyncData(
  async () => {
    await categoryStore.getAllCategory({
      page: current.value,
      type: "post",
    });
  },
  {
    immediate: true,
    watch: [current],
  }
);

const onDelete = async (id: string) => {
  await categoryStore.deleteCategory(id);
  await categoryStore.getAllCategory({
    type: "post",
  });
};

const showDeleteConfirm = (id: string) => {
  Modal.confirm({
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
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Tên danh mục",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Nội dung",
    dataIndex: "description",
    key: "description",
    width:"400px"
  },

  {
    title: "Nổi bật",
    dataIndex: "is_featured",
    key: "is_featured",
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

const CloseModalAdd = () => {
  openModalAdd.value = false;
};
const CloseModalEdit = () => {
  openModalEdit.value = false;
};
const showModalAdd = () => {
  openModalAdd.value = true;
};
const showModalEdit = (id: number) => {
  openModalEdit.value = true;
  categoryId.value = id;
};
</script>
