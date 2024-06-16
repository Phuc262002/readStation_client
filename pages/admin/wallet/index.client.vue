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
          <template v-if="column.key === 'image'">
            <a-image class="w-10 h-10 rounded-full" :src="record.image" />
          </template>
          <template v-if="column.key === 'user_id'">
            <p class="p-0">{{ record.user?.fullname }}</p>

            <p class="p-0">{{ record.user?.email }}</p>

            <p class="p-0">{{ record.user?.phone }}</p>
          </template>
          <template v-if="column.key === 'avatar'">
            <a-vatar :src="record.user?.avatar" />
          </template>
          <template v-if="column.key === 'district'">
            <a>
              {{ record.user?.district }}
            </a>
          </template>
          <template v-if="column.key === 'wallet'">
            <a>
              {{ record.wallet }}
            </a>
          </template>
          <template v-else-if="column.key === 'role'">
            <span>
              <a-tag
                :bordered="false"
                :color="record.role === 'active' ? 'green' : 'volcano'"
              >
                {{ record.role }}
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
              <a-tooltip placement="top" color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModalRecharge"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#faad14]"
                    name="i-icon-park-outline-eyes"
                  />
                </button>
              </a-tooltip>

              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <button
                  @click="showModalWithdraw"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon class="" name="i-material-symbols-delete-outline" />
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
  await walletAdminStore.getAdminWallet({});
});

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
    title: "Địa chỉ",
    dataIndex: "district",
    key: "district",
  },
  {
    title: "Ví tài khoản",
    dataIndex: "wallet",
    key: "wallet",
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
const data = [
  {
    image:
      "https://img.lovepik.com/free-png/20211130/lovepik-cartoon-avatar-png-image_401205251_wh1200.png",
    user_id: "1",

    wallet: "100000",
    role: "admin",
    status: "active",
  },
];
</script>
