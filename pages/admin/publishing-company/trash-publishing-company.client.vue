<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Tất cả nhà xuất bản đã xóa
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
            <div class="flex text-[16px] gap-2">
              <a-tooltip placement="top">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModal"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <div class="flex">
                    <UIcon
                      class="group-hover:text-[#212122]"
                      name="i-icon-park-outline-eyes"
                    />

                    <a-modal v-model:open="open" title="Sửa" width="70%">
                      <div class="flex justify-between gap-4">
                        <div class="grow">
                          <h1 class="font-bold text-xl">Bài viết số 1</h1>
                        </div>
                      </div>
                      <div
                        class="flex border border-transparent border-b-gray-300 pb-2"
                      >
                        <div class="w-1/5">
                          <h4 class="font-bold">Tên người viết</h4>
                        </div>
                        <div class="w-4/5">Huỳnh Tuấn Kiệt</div>
                      </div>
                    </a-modal>
                  </div>
                </button>
              </a-tooltip>

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

import { Modal } from "ant-design-vue";
const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);
const publishingCompanyId = ref<number>();
const publishingCompanyStore = usePublishingCompanyStore();
const current = ref(1);
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
useAsyncData(
  async () => {
    await publishingCompanyStore.getAllPublishingCompany({
      page: current.value,
      status: "deleted",
    });
  },
  {
    immediate: true,
    watch: [current],
  }
);

const onRecover = async (id: string) => {
  await publishingCompanyStore.updatePublishingCompany({
    id: id,
    publishingCompany: { status: "active" },
  });
  await publishingCompanyStore.getAllPublishingCompany({
      page: current.value,
      status: "deleted",
    });
};

const showRecoverConfirm = (id: string) => {
  Modal.confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
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
