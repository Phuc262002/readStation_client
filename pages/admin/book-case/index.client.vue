<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả tủ sách</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
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
          <a-button type="primary" @click="showModalAdd">Thêm tủ sách</a-button>
          <BookCaseCreate
            :openModalAdd="openModalAdd"
            :openModal="CloseModalAdd"
          />
          <BookCaseEdit
            :openModalEdit="openModalEdit"
            :openModal="CloseModalEdit"
            :bookCaseId="bookCaseId"
          />
        </div>
      </div>

      <a-table
        :columns="columns"
        :data-source="bookCaseStore?.bookCaseAdmin?.bookcases"
        :loading="bookCaseStore.isLoading"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'bookcase_code'">
            <span> Mã tủ sách </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-if="column.key === 'shelves'">
            <span class="flex justify-start gap-2">
              {{ record.shelves.length }}
              <p>kệ</p>
            </span>
          </template>
          <template v-if="column.key === 'books'">
            <span class="flex justify-start gap-2">
              {{ record.books.length }}
              <p>cuốn sách</p>
            </span>
          </template>
          <template v-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === 'active'"
              color="green"
            >
              Công khai
            </a-tag>

            <a-tag
              :bordered="false"
              v-else="record.status === 'inactive'"
              color="red"
            >
              Đang ẩn
            </a-tag>

            <a-tag
              :bordered="false"
              v-else="record.status === 'deleted'"
              color="red"
            >
              Đã xóa
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <NuxtLink :to="`book-case/${record.id}`">
                <a-tooltip placement="top">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                  >
                    <div>
                      <UIcon
                        class="group-hover:text-[#212122]"
                        name="i-icon-park-outline-eyes"
                      />
                    </div>
                  </button>
                </a-tooltip>
              </NuxtLink>
              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#131313]"
                    name="i-solar-menu-dots-bold"
                  />
                </button>
                <template #overlay>
                  <a-menu>
                    <NuxtLink>
                      <a-menu-item key="2" class="p-4">
                        <button
                          class="flex items-center gap-1 text-blue-400"
                          @click="showModalEdit(record?.id)"
                        >
                          <UIcon
                            class="group-hover:text-[green]"
                            name="i-material-symbols-edit-outline"
                          />
                          <span>Sửa</span>
                        </button>
                      </a-menu-item>
                    </NuxtLink>
                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button
                          class="flex items-center gap-1 text-blue-400"
                          @click="showDeleteConfirm(record?.id)"
                        >
                          <UIcon
                            class="group-hover:text-[red] text-lg"
                            name="i-material-symbols-delete-outline"
                          />
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
const bookCaseStore = useBookcaseStore();
const bookCaseId = ref<number>();
import { LoadingOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "16px",
  },
  spin: true,
});

useAsyncData(async () => {
  await bookCaseStore.getAllBookcases({});
});

const onDelete = async (id: string) => {
  try {
    await bookCaseStore.deleteBookcase(id);
    await bookCaseStore.getAllBookcases({});
  } catch (error) {
    console.error(error);
  }
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
  bookCaseId.value = id;
};
const columns = [
  {
    name: "Mã tủ",
    dataIndex: "bookcase_code",
    key: "bookcase_code",
  },
  {
    title: "Tên tủ sách",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Số lượng kệ",
    dataIndex: "shelves",
    key: "shelves",
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

// const data = [
//   {
//     key: "1",
//     bookcase_code: "#343",
//     name: "123",
//     bookCase: 32,
//     books: 32,
//     description: "New York No. 1 Lake Park",
//     status: "active",
//   },
// ];
</script>
