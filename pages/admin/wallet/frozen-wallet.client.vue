<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Ví</h5>
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
        <div class="flex gap-2">
          <a-button @click="showModalAccept" type="primary">Xác thực</a-button>
        </div>
      </div>
      <WalletAccept
        :openModalAccept="openModalAccept"
        :openModal="CloseModalAccept"
      />

      <a-table
        :columns="columns"
        :data-source="walletAdminStore.adminWallet?.wallets"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'avatar'">
            <a-image
              class="w-10 h-10 rounded-full"
              :src="record.user?.avatar.replace('=s96-c', '')"
            />
          </template>
          <template v-if="column.key === 'user_id'">
            <p class="p-0">{{ record.user?.fullname }}</p>

            <p class="p-0">{{ record.user?.email }}</p>

            <p class="p-0">{{ record.user?.phone }}</p>
          </template>
          <template v-if="column.key === 'avatar'">
            <a-vatar :src="record.user?.avatar" />
          </template>
          <template v-if="column.key === 'citizen_identity_card'">
            <p class="p-0">
              {{ record.user?.citizen_identity_card?.citizen_code }}
            </p>
            <p class="p-0">
              {{ record.user?.citizen_identity_card?.citizen_name }}
            </p>
            <p class="p-0">
              {{ record.user?.citizen_identity_card?.date_of_issue }}
            </p>
            <p class="p-0">
              {{ record.user?.citizen_identity_card?.place_of_issue }}
            </p>
          </template>
          <template v-if="column.key === 'balance'">
            <a>
              {{ record.balance }}
            </a>
          </template>
          <template v-else-if="column.key === 'role'">
            <span>
              <a-tag
                :bordered="false"
                :color="
                  record.user?.role?.name === 'admin' ? 'green' : 'volcano'
                "
              >
                {{ record.user?.role?.name }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'status'">
            <span>
              <a-tag
                :bordered="false"
                :color="record.status === 'active' ? 'green' : 'volcano'"
              >
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="black">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                >
                  <UIcon class="text-lg" name="i-icon-park-outline-eyes" />
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
      <WalletRecharge
        :openModalRecharge="openModalRecharge"
        :openModal="CloseModalRecharge"
      />
      <WalletWithdraw
        :openModalWithdraw="openModalWithdraw"
        :openModal="CloseModalWithdraw"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const openModalRecharge = ref<boolean>(false);
const openModalWithdraw = ref<boolean>(false);
const openModalAccept = ref<boolean>(false);
const walletAdminStore = useWalletAdminStore();
useAsyncData(async () => {
  await walletAdminStore.getAdminWallet({
    status: "frozen",
  });
});

const onRecover = async (id: string) => {
  await walletAdminStore.updateWalletStatus({
    id: id,
    status: "active",
  
  });
  await walletAdminStore.getAdminWallet({
    status: "frozen",
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
    title: "Ảnh đại diện",
    dataIndex: "avatar",
    key: "avatar",
    width: "100px",
  },
  {
    title: "Thông tin liên hệ",
    dataIndex: "user_id",
    key: "user_id",
  },

  {
    title: "Căn cước",
    dataIndex: "citizen_identity_card",
    key: "citizen_identity_card",
  },
  {
    title: "Số dư",
    dataIndex: "balance",
    key: "balance",
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    key: "role",
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
const CloseModalRecharge = () => {
  openModalRecharge.value = false;
};
const showModalRecharge = () => {
  openModalRecharge.value = true;
};
const CloseModalAccept = () => {
  openModalAccept.value = false;
};
const showModalAccept = () => {
  openModalAccept.value = true;
};
const CloseModalWithdraw = () => {
  openModalWithdraw.value = false;
};
const showModalWithdraw = () => {
  openModalWithdraw.value = true;
};
</script>
