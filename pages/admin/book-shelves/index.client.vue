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
            <a-input placeholder="Nhập mã kệ để tìm kiếm" class="h-10">
              <template #prefix>
                <SearchOutlined />
              </template>
              <template #suffix>
                <a-spin :indicator="indicator" />
              </template>
            </a-input>
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

      <a-table :columns="columns" :data-source="shelvesValue?.adminBookSheleves?.shelves"
        :loading="shelvesValue.isLoading">
        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'bookshelf_code'">
            <a class="text-[#3B82F6]">
              {{ record.bookshelf_code }}
            </a>
          </template>
          <template v-if="column.key === 'bookcase_id'">
            <a class="text-[#3B82F6]">
              {{ record.bookcase.description }}
            </a>
          </template>
          <template v-if="column.key === 'category_id'">
            <span>
              {{ record.category.name }}
            </span>
          </template>
          <template v-if="column.key === 'books'">
            <span class="flex justify-start gap-2">
              {{ record.books.length }} <p>cuốn sách</p>
            </span>
          </template>
          <template v-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'" style="border: none">
                {{ record.status === 'active' ? 'hoạt động' : 'Không hoạt động' }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <NuxtLink :to="`book-shelves/${record.id}`">
                <a-tooltip placement="top">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                    <div>
                      <UIcon class="group-hover:text-[#212122]" name="i-icon-park-outline-eyes" />
                    </div>
                  </button>
                </a-tooltip>
              </NuxtLink>
              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <UIcon class="group-hover:text-[#131313]" name="i-solar-menu-dots-bold" />
                </button>
                <template #overlay>
                  <a-menu>
                    <NuxtLink>
                      <a-menu-item key="2" class="p-4">
                        <button class="flex items-center gap-1 text-blue-400" @click="showModalEdit(record?.id)">
                          <UIcon class="group-hover:text-[green]" name="i-material-symbols-edit-outline" />
                          <span>Sửa</span>
                        </button>
                      </a-menu-item>
                    </NuxtLink>
                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button class="flex items-center gap-1 text-blue-400" @click="showDeleteConfirm(record?.id)">
                          <UIcon class="group-hover:text-[red] text-lg" name="i-material-symbols-delete-outline" />
                          <span>Xóa</span>
                        </button>
                      </span>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Modal } from "ant-design-vue";
const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);
const shelvesId = ref<number>();
import { LoadingOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "16px",
  },
  spin: true,
});
const shelvesValue = useShelvesStore();
const getData = async () => {
  try {
    const data = await shelvesValue.getAllShelves({});
    return data;
  } catch (error) {
    console.error(error);
  }
};
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
    title: "Mã kệ",
    dataIndex: "bookshelf_code",
    key: "bookshelf_code",
  },
  {
    title: "Tên kệ",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Thuộc tủ",
    dataIndex: "bookcase",
    key: "bookcase_id",
  },
  {
    title: "Số lượng sách",
    dataIndex: "books",
    key: "books",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
  },
];
</script>
