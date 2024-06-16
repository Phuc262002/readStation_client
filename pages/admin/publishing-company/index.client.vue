<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Tất cả nhà xuất bản
        </h5>
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
          <a-button
            class="text-white bg-rtprimary hover:!text-white border-none hover:bg-rtsecondary"
            @click="showModalAdd"
            >Thêm nhà xuất bản</a-button
          >
        </div>
      </div>
      <PublishingCompanyAdd
        :openModalAdd="openModalAdd"
        :openModal="CloseModalAdd"
      />
      <PublishingCompanyEdit
        :openModalEdit="openModalEdit"
        :openModal="CloseModalEdit"
        :publishingCompanyId="publishingCompanyId"
      />
      <a-table
        :columns="columns"
        :loading="publishingCompanyStore.isLoading"
        :data-source="
          publishingCompanyStore?.publishingCompaniesAdmin?.publishing_companies
        "
        :pagination="false"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Tên nhà xuất bản </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'logo_company'">
            <a-image
              class="rounded-md"
              :width="100"
              :src="record.logo_company"
            />
          </template>
          <template v-else-if="column.key === 'status'">
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
                color="red">
                Đang ẩn
              </a-tag>

              <a-tag
                :bordered="false"
                v-else="record.status === 'deleted'"
                color="red">
                Đã xóa
              </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <button
                  @click="showModalEdit(record?.id)"
                  class="group hover:bg-[green]/20 bg-[#e4e1e1] flex justify-center items-center cursor-pointer w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[green]"
                    name="i-material-symbols-edit-outline"
                  />
                </button>
              </a-tooltip>
              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <button
                  @click="showDeleteConfirm(record?.id)"
                  class="group hover:bg-[red]/20 bg-[#e4e1e1] flex items-center justify-center cursor-pointer w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[red]"
                    name="i-material-symbols-delete-outline"
                  />
                </button>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="
            publishingCompanyStore?.publishingCompaniesAdmin?.totalResults
          "
          :pageSize="publishingCompanyStore?.publishingCompaniesAdmin?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const baseStore = useBaseStore();

import { Modal } from "ant-design-vue";
const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);
const publishingCompanyId = ref<number>();
const publishingCompanyStore = usePublishingCompanyStore();
const current = ref(1);
useAsyncData(
  async () => {
    await publishingCompanyStore.getAllPublishingCompany({
      page: current.value,
    });
  },
  {
    immediate: true,
    watch: [current],
  }
);

const onDelete = async (id: string) => {
  await publishingCompanyStore.deletePublishingCompany(id);
  await publishingCompanyStore.getAllPublishingCompany({});
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

const columns = [
  {
    name: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Hình ảnh",
    dataIndex: "logo_company",
    key: "logo_company",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Action",
    key: "action",
  },
];

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
  publishingCompanyId.value = id;
};
</script>
