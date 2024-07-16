<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-bold ">Chi tiết {{ bookShelves?.adminGetOneBookShelve.name }}
        </h5>
      </div>
    </div>
    <div class="bg-[white] h-24 rounded-lg">
      <div class="p-5 flex justify-between">
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-bold">
            {{ bookShelves?.adminGetOneBookShelve.name }}
          </h1>
          <p class="text-orange-400">{{ bookShelves?.adminGetOneBookShelve.bookcase?.description }} - {{
            bookShelves?.adminGetOneBookShelve.name }} -
            {{ bookShelves?.adminGetOneBookShelve?.book_details.length }} cuốn sách</p>
        </div>
        <div>
          <a-button class="flex justify-center items-center gap-1" type="primary" @click="showModalEdit">
            <UIcon class="text-lg text-white" name="i-material-symbols-edit" />
            <span class="text-white text-base">Chỉnh sửa</span>
          </a-button>
          <BookShelvesEdit :openModalEdit="openModalEdit" :openModal="CloseModalEdit"
            :shelvesId="bookShelves?.adminGetOneBookShelve?.id" />
        </div>
      </div>
    </div>
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm mt-5">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <a-input placeholder="Nhập tên sách để tìm kiếm" class="h-10">
              <template #prefix>
                <SearchOutlined />
              </template>
            </a-input>
          </div>
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <div class="">
          <a-button type="primary" @click="showModalAdd">Thêm sách</a-button>
          <CommonSearch :openModalAdd="openModalAdd" :openModal="CloseModalAdd" />
        </div>
      </div>
      <a-table :columns="columns" :data-source="bookShelves?.adminGetOneBookShelve?.book_details"
        :loading="bookShelves.isLoading">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'name'">
            <a>{{ record }}</a>
          </template>
          <template v-if="column.key === 'poster'">
            <span class="flex justify-start gap-2">
              <img class="rounded-lg w-20 h-30" :src="record.poster" alt="">
            </span>
          </template>
          <template v-if="column.key === 'title'">
            <span class="flex justify-start gap-2">
              <p>{{ record?.book.title }}</p>
            </span>
          </template>
          <template v-if="column.key === 'author'">
            <span class="flex justify-start gap-2">
              <p>{{ record?.book?.author.author }}</p>
            </span>
          </template>
          <template v-if="column.key === 'category'">
            <span class="flex justify-start gap-2">
              <p>{{ record?.book?.category.name }}</p>
            </span>
          </template>
          <template v-else-if="column.key === 'is_featured'">
            <IconTick v-if="record?.book?.is_featured" />
            <IconMul v-else />
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
              <a-tooltip placement="top">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button @click="showModal"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <div>
                    <Icon icon="heroicons:eye" class="group-hover:text-[#212122]" />
                  </div>
                </button>
              </a-tooltip>
              <a-tooltip placement="top">
                <template #title>
                  <span>Xóa</span>
                </template>
                <button @click.prevent="showConfirm(record?.book?.id)"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <Icon icon="hugeicons:delete-01" class="text-lg" />
                </button>
              </a-tooltip>
            </div>
          </template>

        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const route = useRoute()
const openModalAdd = ref<boolean>(false);
const openModalEdit = ref<boolean>(false);
const open = ref(false);
const showModal = () => {
  open.value = true;
};
const detailShelvesId = route.params.id;
const bookShelves = useShelvesStore();
useAsyncData(async () => {
  await bookShelves.getOneShelves(detailShelvesId);
});
const bookStore = useBookStore();
const updateDetailShelves = async (id) => {
  try {
    const idShelves = {
      shelve_id: null
    }
    await bookStore.updateBook({ id: id, value: idShelves })
    await bookShelves.getOneShelves(detailShelvesId);
  } catch (error) {
    console.log("🚀 ~ updateDetailShelves ~ error", error)
  }
}

const showConfirm = (id) => {
  Modal.confirm({
    title: 'Bạn có chắc xóa sách này ra khỏi kệ không?',
    onOk() {
      updateDetailShelves(id)
    },
    onCancel() {
      console.log('Cancel');
    },

  });
};
const columns = [
  {
    title: 'Ảnh bìa',
    dataIndex: 'poster',
    key: 'poster',
  },
  {
    title: 'Tên sách',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Tác giả',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Phiên bản',
    dataIndex: 'book_version',
    key: 'book_version',
  },
  {
    title: 'Danh mục',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Nổi bật',
    dataIndex: 'is_featured',
    key: 'is_featured',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
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
</script>