<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Tất cả nhà cung cấp đã xóa
        </h5>
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
      <div>
        <a-table :columns="columns" :data-source="supplierStore?.SupplierAdmin?.suppliers"
          :loading="supplierStore.isLoading">
          <template #bodyCell="{ column, record, index }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-if="column.key === 'email'">
              <a>
                {{ record.email }}
              </a>
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
      <!-- <div class="mt-4 flex justify-end">
        <a-pagination v-model:current="current" :total="publishingCompanyStore?.publishingCompaniesAdmin?.totalResults
          " :pageSize="publishingCompanyStore?.publishingCompaniesAdmin?.pageSize" show-less-items />
      </div> -->
    </div>
  </div>
</template>
<script setup>
const supplierStore = useSupplierStore();
useAsyncData(async () => {
  await supplierStore.getAllSupplier({
    status: 'deleted'
  });
})
const showRecoverConfirm = (id) => {
  Modal.confirm({
    title: "Bạn có muốn khôi phục nhà cung cấp này ?",
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
  await supplierStore.updateSupplier({
    id: id, valueSupplier: {
      status: 'active'
    }
  });
  await supplierStore.getAllSupplier({
    status: 'deleted'
  });
}



const columns = [
  {
    title: 'Tên nhà cùng cấp',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
    ellipsis: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Địa chỉ nhà cung cấp',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];
</script>