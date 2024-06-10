<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả sách</h5>
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
        <NuxtLink to="/admin/book/create-book" class="">
          <a-button type="primary">Thêm sách</a-button>
        </NuxtLink>
      </div>

      <a-table :columns="columns" :data-source="allAdminBooks?.adminBooks?.books" :loading="allAdminBooks.isLoading"
        :pagination="false">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'author'">
            <span> Tác giả</span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-if="column.key === 'author'">
            <div class="flex justify-start gap-4 items-center">
              <a-avatar :src="record?.author?.avatar" :size="40" />
              <span>
                {{ record.author?.author }}
              </span>
            </div>
          </template>
          <template v-if="column.key === 'category'">
            <span>
              {{ record.category?.name }}
            </span>
          </template>
          <template v-if="column.key === 'shelve'">
            <span>
              {{ record.shelve?.description }}
            </span>
          </template>

          <template v-else-if="column.key === 'is_featured'">
            <IconTick v-if="record.is_featured" />
            <IconMul v-else />
          </template>
          <template v-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <span class="hover:bg-[#faad14]/20 flex items-center justify-center w-6 h-6 rounded-md">
                  <UIcon class="hover:text-[#faad14]" name="i-icon-park-outline-eyes" />
                </span>
              </a-tooltip>
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <span class="hover:bg-[green]/20 flex items-center justify-center w-6 h-6 rounded-md">
                  <div>
                    <button @click="showModal">
                      <UIcon class="hover:text-[green]" name="i-material-symbols-edit-outline" />
                    </button>
                    <a-modal v-model:open="open" title="Sửa sách" @ok="handleOk">
                      <div class="">

                      </div>
                    </a-modal>
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
      <div class="mt-4 flex justify-end">
        <a-pagination v-model:current="current" :total="allAdminBooks?.adminBooks?.totalResults"
          :pageSize="allAdminBooks?.adminBooks?.pageSize" show-less-items />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const allAdminBooks = useBookStore();
const current = ref(1);
const getAllAdminBooks = async () => {
  try {
    const data: any = await allAdminBooks.getAdminBooks({
      page: current.value,
    });
    return data;
  } catch (error) {
    console.error(error);
  }

};
useAsyncData(async () => {
  await getAllAdminBooks();
},
  {
    immediate: true,
    watch: [current],
  }
);
const onDelete = async (id: string) => {
  await allAdminBooks.deleteBook(id);
  getAllAdminBooks()
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
}

const confirm = (e: MouseEvent) => {
  console.log(e);
  message.success("Xóa thành công");
};

const cancel = (e: MouseEvent) => {
  console.log(e);
  message.error("Xóa thất bại");
};
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
const columns = [
  {
    title: "Tên sách",
    dataIndex: "title",
    key: "title",
  },
  {
    name: "Tác giả",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "Danh mục",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Kệ sách",
    dataIndex: "shelve",
    key: "shelve",
  },
  {
    title: "Nổi bật",
    dataIndex: "is_featured",
    key: "is_featured",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

</script>