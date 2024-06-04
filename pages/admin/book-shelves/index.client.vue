<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả kệ sách</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <input type="text"
              class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
              placeholder="Tìm kiếm..." />
          </div>
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <div class="">
          <a-button type="primary" @click="showModalAdd">Thêm kệ sách</a-button>
          <BookShelvesCreate :openModalAdd="openModalAdd" :openModal="CloseModalAdd" />
          <BookShelvesEdit :openModalEdit="openModalEdit" :openModal="CloseModalEdit" :shelvesId="shelvesId" />
        </div>
      </div>

      <a-table :columns="columns" :data-source="dataShelves" :loading="shelvesValue.isLoading">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Mã tủ sách </span>
          </template>
        </template>

        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === '#'">
            <a>
              {{ index + 1 }}
            </a>
          </template>
          <template v-if="column.key === 'bookcase_id'">
            <span>
              {{ record.bookcase.id }}
            </span>
          </template>
          <template v-if="column.key === 'category_id'">
            <span>
              {{ record.category.id }}
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <span
                  class="group hover:bg-[green]/20 bg-[#e4e1e1] flex justify-center items-center cursor-pointer w-8 h-8 rounded-md">
                  <div>
                    <button @click="showModalEdit(record?.id)">
                      <UIcon class="group-hover:text-[green]" name="i-material-symbols-edit-outline" />
                    </button>
                    <!-- <a-modal v-model:open="openModalEdit" title="Sửa">
                      <div class="">
                        <div class="bg-white py-2">
                          <div class="pb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700">
                              Mã tủ sách
                            </label>
                            <div class="mt-1">
                              <a-input class="w-[450px] h-[45px]" placeholder="Nhập tên kệ sách" />
                            </div>
                          </div>

                          <div class="pb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700">
                              Mã kệ sách
                            </label>
                            <div class="mt-1">
                              <a-input class="w-[450px] h-[45px]" placeholder="Nhập tên kệ sách" />
                            </div>
                          </div>

                          <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">
                              Nội dụng
                            </label>
                            <div class="mt-1">
                              <a-input class="w-[450px] h-[45px]" placeholder="Nhập nội dung" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a-modal> -->
                  </div>
                </span>
              </a-tooltip>
              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <span class="group hover:bg-[red]/20 flex items-center justify-center w-8 h-8 rounded-md">
                  <button @click="showDeleteConfirm(record?.id)" class="flex items-center">
                    <UIcon class="group-hover:text-[red]" name="i-material-symbols-delete-outline" />
                  </button>
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
import { ref } from 'vue';
import { Modal } from "ant-design-vue";
const isLoading = ref(false);
const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);
const shelvesId = ref<number>();

const shelvesValue = useShelvesStore();
const dataShelves = ref([]);
const getData = async () => {
  try {
    isLoading.value = true;
    const data = await shelvesValue.getAllShelves({});
    dataShelves.value = data?.data?._rawValue?.data?.shelves;
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
const onDelete = async (id: string) => {
  await shelvesValue.deleteShelves(id);
  await getData();
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




useAsyncData(async () => {
  await getData();
});

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
  shelvesId.value = id;
};
const columns = [
  {
    title: "#",
    dataIndex: "#",
    key: "#",
  },
  {
    title: "Kệ sách",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "bookshelf_code",
    dataIndex: "bookshelf_code",
    key: "bookshelf_code",
  },
  {
    title: "Mã tủ sách",
    dataIndex: "bookcase",
    key: "bookcase_id",
  },

  {
    title: "Mã danh mục",
    dataIndex: "category",
    key: "category_id",
  },
  {
    title: "Action",
    key: "action",
  },
];

</script>
