<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả kệ sách đã xóa</h5>
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
      </div>

      <a-table :columns="columns" :data-source="bookShelves?.adminBookSheleves?.shelves"
        :loading="bookShelves.isLoading">
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
            <a-tag :bordered="false" class="bg-tag-bg-06 text-tag-text-06">
              Đã xóa
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top">
                <template #title>
                  <span>Sửa</span>
                </template>
                <button
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <UIcon class="text-lg" name="i-material-symbols-edit-outline" />
                </button>
              </a-tooltip>
              <a-tooltip placement="top" color="black ">
                <template #title>
                  <span>Khôi phục</span>
                </template>
                <button @click="showRecoverConfirm(record?.id)" class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8
                    rounded-md">
                  <UIcon class="text-lg" name="i-material-symbols-autorenew-rounded" />
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
const bookShelves = useShelvesStore()
useAsyncData(async () => {
  await bookShelves.getAllShelves({
    status: "deleted"
  })
})
const showRecoverConfirm = (id) => {
  Modal.confirm({
    title: "Bạn có muốn khôi phục kệ sách này ?",
    okText: "Có",
    okType: "danger",
    cancelText: "Không",
    onOk() {
      onRecover(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
const onRecover = async (id) => {
  await bookShelves.updateShelves({
    id: id, valueUpdateShelves: {
      status: 'active'
    }
  });
}

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