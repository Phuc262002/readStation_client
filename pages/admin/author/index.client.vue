<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả tác giả</h5>
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
        <NuxtLink to="author/add-author">
          <div class="">
            <a-button type="primary">Thêm tác giả</a-button>
          </div>
        </NuxtLink>

      </div>

      <a-table :columns="columns" :data-source="AuthorStore?.AuthorAdmin?.authors" :loading="AuthorStore.isLoading"
        :pagination="false">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Mã tác giả </span>
          </template>
        </template>

        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === '#'">
            <a>
              {{ index + 1 }}
            </a>
          </template>
          <template v-if="column.key === 'avatar'">
            <div class="flex justify-start gap-4 items-center">
              <a-avatar :src="record.avatar" :size="80" />
              <span>
                {{ record.author }}
              </span>
            </div>
          </template>
          <template v-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'is_featured'">
            <IconTick v-if="record.is_featured" />
            <IconMul v-else />
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <!-- Xem chi tiết -->
              <a-tooltip placement="top" color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  class="group hover:bg-[#faad14]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <UIcon class="group-hover:text-[#faad14]" name="i-icon-park-outline-eyes" />
                </button>
              </a-tooltip>
              <!-- Sửa tác giả -->
              <NuxtLink :to="`author/edit/${record.id}`"> <a-tooltip placement="top" color="green">
                  <template #title>
                    <span>Sửa</span>
                  </template>
                  <span
                    class="group hover:bg-[green]/20 bg-[#e4e1e1] cursor-pointer flex items-center justify-center w-8 h-8 rounded-md">
                    <div>
                      <button class="flex items-center" @click="showModalEdit">
                        <UIcon class="group-hover:text-[green]" name="i-material-symbols-edit-outline" />
                      </button>
                    </div>
                  </span>
                </a-tooltip></NuxtLink>

              <!-- Xóa tác giả -->
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
        <a-pagination v-model:current="current" :total="AuthorStore?.AuthorAdmin?.totalResults"
          :pageSize="AuthorStore?.AuthorAdmin?.pageSize" show-less-items />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const AuthorStore = useAuthorStore();
const current = ref(1);
const getDataAuthor = async () => {
  try {
    await AuthorStore.getAllAuthor({
      page: current.value,
    });
  } catch (error) {
    console.error(error);
  }
};
useAsyncData(async () => {
  await getDataAuthor();
}, {
  immediate: true,
  watch: [current],
});

const onDelete = async (id: string) => {
  await AuthorStore.deleteAuthor(id);
  getDataAuthor()
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
const columns = [
  {
    title: "#",
    dataIndex: "#",
    key: "#",
  },
  {
    title: "Tác giả",
    dataIndex: "avatar",
    key: "avatar",
  },
  {
    title: "Ngày, tháng, năm sinh",
    dataIndex: "dob",
    key: "dob",
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



const openModalEdit = ref<boolean>(false);
const openModalDetail = ref<boolean>(false);
const showModalEdit = () => {
  openModalEdit.value = true;
};

</script>
