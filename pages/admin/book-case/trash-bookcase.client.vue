<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả tủ sách</h5>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
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
          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === BookCaseStatus.ACTIVE"
              class="bg-tag-bg-09 text-tag-text-09"
            >
              Đang hoạt động
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === BookCaseStatus.INACTIVE"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đang ẩn
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === BookCaseStatus.DELETED"
              class="bg-tag-bg-06 text-tag-text-06"
            >
              Đã xóa
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="black ">
                <template #title>
                  <span>Khôi phục</span>
                </template>
                <button
                  @click="showRecoverConfirm(record.id)"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="text-lg"
                    name="i-material-symbols-autorenew-rounded"
                  />
                </button>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Modal } from "ant-design-vue";
import { BookCaseStatus } from "~/types/admin/bookCase";
import { LoadingOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
const bookCaseStore = useBookcaseStore();
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "16px",
  },
  spin: true,
});

useAsyncData(async () => {
  await bookCaseStore.getAllBookcases({
    status: "deleted",
  });
});

const onRecover = async (id) => {
  await bookCaseStore.updateBookcase({
    id: id,
    bookcase: { status: "active" },
  });
  await bookCaseStore.getAllBookcases({
    status: "deleted",
  });
};

const showRecoverConfirm = (id) => {
  Modal.confirm({
    title: "Bạn có chắc chắn muốn khôi phục",
    content:
      "Khi đã khôi phục, tủ sách sẽ hiển thị trở lại trong danh sách tủ sách.",
    okText: "Khôi phục",
    okType: "danger",
    cancelText: "Hủy",
    onOk() {
      onRecover(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
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
    title: "Thao tác",
    key: "action",
  },
];
</script>
