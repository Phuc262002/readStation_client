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
        <div class="w-1/2 flex items-center gap-2">
          <div class="relative w-2/3 md:block hidden">
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
          <a-button size='large'>
            <a-dropdown :trigger="['click']">
              <a class="flex gap-3 items-center" @click.prevent>
                Trạng thái
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu class="">
                  <a-menu-item @click="statusValue('active')">Hoạt động</a-menu-item>
                  <a-menu-item @click="statusValue('inactive')">Không hoạt động</a-menu-item>
                  <a-menu-item @click="statusValue('deleted')">Đã xóa</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-button>
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
          <template v-if="column.key === 'dob'">
            <span>
              {{ $dayjs(record.dob).format("DD/MM/YYYY") }}
            </span>
          </template>
          <template v-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'" style="border: none">
                {{ record.status === 'active' ? 'hoạt động' : 'Không hoạt động' }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'is_featured'">
            <IconTick v-if="record.is_featured" />
            <IconMul v-else />
          </template>

          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
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

              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <UIcon class="group-hover:text-[#131313]" name="i-solar-menu-dots-bold" />
                </button>
                <template #overlay>
                  <a-menu>
                    <NuxtLink :to="`author/edit/${record.id}`">
                      <a-menu-item key="2" class="p-4">
                        <span class="flex items-center gap-2 text-blue-400">
                          <UIcon class="group-hover:text-[green]" name="i-material-symbols-edit-outline" />
                          <span>Sửa</span>
                        </span>
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
const valueSearch = ref("");
const queryStatus = ref("");
const statusValue = (value: string) => {
  queryStatus.value = value;
};
const getDataAuthor = async () => {
  try {
    await AuthorStore.getAllAuthor({
      page: current.value,
      search: valueSearch.value,
      status: queryStatus.value,
    });
  } catch (error) {
    console.error(error);
  }
};
useAsyncData(async () => {
  await getDataAuthor();
}, {
  immediate: true,
  watch: [current, valueSearch, queryStatus],
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
