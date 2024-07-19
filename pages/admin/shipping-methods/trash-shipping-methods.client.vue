<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-bold">
          Tất cả phương thức vận chuyển đã xóa
        </h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <a-table
        :columns="columns"
        :data-source="shippingMethodStore.shippingMethodsAdmin?.shippingMethods"
        :pagination="false"
        :loading="shippingMethodStore.isLoading"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'logo'">
            <a-image class="rounded-md" :width="100" :src="record.logo" />
          </template>
          <template v-if="column.key === 'location'">
            <ul>
              <li v-for="item in record.location" :key="item">
                {{ item }}
              </li>
            </ul>
          </template>
          <template v-if="column.key === 'method'">
            <span>
              {{ record.method }}
            </span>
          </template>
          <template v-if="column.key === 'fee'">
            <span>
              {{ record.fee }}
            </span>
          </template>
          <template v-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === 'active'"
              class="bg-tag-bg-09 text-tag-text-09"
            >
              Công khai
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === 'inactive'"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đang ẩn
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === 'deleted'"
              class="bg-tag-bg-06 text-tag-text-06"
            >
              Đã xóa
            </a-tag>
          </template>
          <template v-else-if="column.key === 'is_featured'">
            <IconTick v-if="record.is_featured" />
            <IconMul v-else />
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
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="shippingMethodStore?.shippingMethodsAdmin?.totalResults"
          :pageSize="shippingMethodStore?.shippingMethodsAdmin?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Modal } from "ant-design-vue";
const openModalAdd = ref(false);
const openModalEdit = ref(false);
const shippingMethodId = ref();
const current = ref(1);

const shippingMethodStore = useShippingMethodsStore();
useAsyncData(async () => {
  shippingMethodStore.getAllShippingMethods({
    status: "deleted",
  });
});
const onRecover = async (id) => {
  await shippingMethodStore.deleteShippingMethod({
    id: id,
    shippingMethod: {
      status: "active",
    },
  });
  await shippingMethodStore.getAllShippingMethods({
    status: "deleted",
    page: current.value,
  });
};

const showRecoverConfirm = (id) => {
  Modal.confirm({
    title: "Bạn có chắc chắn muốn khôi phục?",
    content:
      "Khi đã khôi phục, phương thức vận chuyển sẽ hiển thị trên trang tất cả phương thức vận chuyển.",
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
    title: "Tên phương thức vận chuyển",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "Logo",
    dataIndex: "logo",
    key: "logo",
  },
  {
    title: "Khu vực",
    dataIndex: "location",
    key: "location",
  },

  {
    title: "Phí vận chuyển",
    dataIndex: "fee",
    key: "fee",
  },

  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },

  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
  },
];
</script>
