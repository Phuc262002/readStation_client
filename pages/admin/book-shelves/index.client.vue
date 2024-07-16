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
        <div class="w-2/3 flex items-center gap-2">
          <div class="relative w-1/2 md:block hidden">
            <div class="flex">
              <a-input placeholder="Nhập mã kệ để tìm kiếm" class="h-10" v-model:value="valueSearch">
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
            </div>
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UIcon class="text-gray-500" name="i-material-symbols-search" />
            </div>
          </div>
          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item @click="statusValue({ value: '', label: 'Trạng thái' })">Tất cả</a-menu-item>
                <a-menu-item @click="statusValue({ value: 'active', label: 'Hoạt động' })">Hoạt
                  động</a-menu-item>
                <a-menu-item @click="statusValue({ value: 'inactive', label: 'Không hoạt động' })">Không
                  hoạt động</a-menu-item>
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ queryStatus.label ? queryStatus.label : "Trạng thái" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <div>
                <a-menu>
                  <a-menu-item>
                    <div @click="categoryValue({ id: null, label: 'Danh mục' })">
                      Tất cả
                    </div>
                  </a-menu-item>
                  <a-menu-item v-for="(items, index) in categoryStore?.categoriesAdmin?.categories" :key="index">
                    <div @click="categoryValue({ id: items?.id, label: items?.name })">{{ items.name }}</div>
                  </a-menu-item>
                </a-menu>
              </div>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ categoryQuery.label ? categoryQuery.label : "Danh mục" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <div>
                <a-menu>
                  <a-menu-item>
                    <div @click="bookcaseValue({ id: null, label: 'Tủ sách' })">
                      Tất cả
                    </div>
                  </a-menu-item>
                  <a-menu-item v-for="(items, index) in bookcaseStore?.bookCaseAdmin?.bookcases" :key="index">
                    <div @click="bookcaseValue({ id: items?.id, label: items?.name })">{{ items.name }}</div>
                  </a-menu-item>
                </a-menu>
              </div>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ bookcaseQuery.label ? bookcaseQuery.label : "Tủ sách" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>

        </div>
        <div class="">
          <a-button type="primary" @click="showModalAdd">Thêm kệ sách</a-button>
          <BookShelvesCreate :openModalAdd="openModalAdd" :openModal="CloseModalAdd" />
          <BookShelvesEdit :openModalEdit="openModalEdit" :openModal="CloseModalEdit" :shelvesId="shelvesId" />
        </div>
      </div>

      <a-table :columns="columns" :data-source="shelvesValue?.adminBookSheleves?.shelves"
        :loading="shelvesValue.isLoading" :pagination="false" >
        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'bookshelf_code'">
            <a>
              {{ record.bookshelf_code }}
            </a>
          </template>
          <template v-if="column.key === 'bookcase_id'">
            <a>
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
      <div class="mt-4 flex justify-end">
        <a-pagination v-model:current="current" :total="shelvesValue?.adminBookSheleves?.totalResults"
          :pageSize="shelvesValue?.adminBookSheleves?.pageSize" show-less-items />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Modal } from "ant-design-vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);
const shelvesId = ref<number>();
const current = ref(1);
const valueSearch = ref("");
const queryStatus = ref({
  value: "",
  label: ""
});
const statusValue = ({ value, label }: any) => {
  queryStatus.value.value = value;
  queryStatus.value.label = label;
};
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "16px",
  },
  spin: true,
});
const categoryStore = useCategoryStore();
const categoryQuery = ref({
  id: "",
  label: ""
});
useAsyncData(async () => {
  await categoryStore.getAllCategory({
    type: 'book'
  });
},
);
const categoryValue = ({ id, label }: any) => {
  categoryQuery.value.id = id;
  categoryQuery.value.label = label;
};
const bookcaseStore = useBookcaseStore();
const bookcaseQuery = ref({
  id: "",
  label: ""
});
useAsyncData(async () => {
  await bookcaseStore.getAllBookcase({});
},
);
const bookcaseValue = ({ id, label }: any) => {
  bookcaseQuery.value.id = id;
  bookcaseQuery.value.label = label
};
const shelvesValue = useShelvesStore();
const getData = async () => {
  try {
    const data = await shelvesValue.getAllShelves({
      page: current.value,
      search: valueSearch.value,
      category_id: categoryQuery.value.id,
      bookcase_id: bookcaseQuery.value.id,
      status: queryStatus.value.value
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
useAsyncData(async () => {
  await getData();
}, {
  immediate: true,
  watch: [valueSearch, categoryQuery.value, bookcaseQuery.value, queryStatus.value, current]
});
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
