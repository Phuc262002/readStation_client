<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          <h5 class="text-xl text-[#1e293b] font-bold uppercase">
            Chi tiết tủ sách {{ bookCaseStore.bookCase?.name }}
          </h5>
        </h5>
      </div>
    </div>
    <div class="bg-[white] h-24 rounded-lg">
      <div class="p-5 flex justify-between">
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-bold">
            {{ bookCaseStore.bookCase?.name }}
          </h1>
          <p class="text-orange-400">
            {{ bookCaseStore.bookCase?.name }} -
            {{ bookCaseStore.bookCase?.shelves.length }} kệ sách -
            {{ bookCaseStore.bookCase?.books.length }} cuốn sách
          </p>
        </div>
        <div>
          <a-button @click="showModalEdit" size="large" type="primary"
            >Đổi tên tủ</a-button
          >
        </div>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <a-input placeholder="Nhập mã kệ để tìm kiếm" class="h-10">
              <template #prefix>
                <SearchOutlined />
              </template>
            </a-input>
          </div>
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <div class="">
          <a-button size="large" type="primary" @click="showModalAdd"
            >Thêm Kệ</a-button
          >
          <BookCaseSearch
            :openModalAdd="openModalAdd"
            :openModal="CloseModalAdd"
          />
        </div>
      </div>

      <a-table
        :columns="columns"
        :data-source="bookCaseStore?.bookCase?.shelves"
        :loading="bookCaseStore.isLoading"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'bookshelf_code'">
            <span> Mã tủ sách </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-if="column.key === 'books'">
            <span class="flex justify-start gap-2">
              {{ record.books.length }}
              <p>cuốn sách</p>
            </span>
          </template>
          <template v-if="column.key === 'status'">
            <span>
              <a-tag
                style="border: none"
                :color="record.status === 'active' ? 'green' : 'volcano'"
              >
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="black">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModal"
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                >
                  <Icon
                    icon="heroicons:eye"
                    class="group-hover:text-[#212122]"
                  />
                </button>
              </a-tooltip>

              <a-tooltip placement="top">
                <template #title>
                  <span>Xóa</span>
                </template>
                <button
                  @click.prevent="showConfirm(record.id)"
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                >
                  <Icon
                    icon="hugeicons:delete-01"
                    class="group-hover:text-[#212122]"
                  />
                </button>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
      <BookCaseEdit
        :openModalEdit="openModalEdit"
        :openModal="CloseModalEdit"
        :bookCaseId="detailBookCaseId"
      />
    </div>
  </div>
</template>
<script setup>
import { Modal } from "ant-design-vue";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const route = useRoute();
const open = ref(false);
const openModalEdit = ref(false);
const openModalAdd = ref(false);
const detailBookCaseId = route.params.id;
const bookCaseStore = useBookcaseStore();
const bookShelves = useShelvesStore();
useAsyncData(async () => {
  if (detailBookCaseId !== undefined) {
    await bookCaseStore.getOneBookcase(detailBookCaseId);
  }
});

const updateDetailCase = async (id) => {
  try {
    const idCase = {
      bookcase_id: null,
    };
    await bookShelves.updateShelves({ id: id, valueUpdateShelves: idCase });
    await bookCaseStore.getOneBookcase(detailBookCaseId);
  } catch (error) {

  }
};
const showConfirm = (id) => {
  Modal.confirm({
    title: "Bạn có chắc xóa sách này ra khỏi kệ không?",

    async onOk() {
      updateDetailCase(id);
      await bookCaseStore.getOneBookcase(detailBookCaseId);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

const showModal = () => {
  open.value = true;
};
const showModalAdd = () => {
  openModalAdd.value = true;
};
const CloseModalAdd = () => {
  openModalAdd.value = false;
};
const showModalEdit = () => {
  openModalEdit.value = true;
};
const CloseModalEdit = () => {
  openModalEdit.value = false;
};
const columns = [
  {
    name: "Mã kệ",
    dataIndex: "bookshelf_code",
    key: "bookshelf_code",
  },
  {
    title: "Tên tủ sách",
    dataIndex: "name",
    key: "name",
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
