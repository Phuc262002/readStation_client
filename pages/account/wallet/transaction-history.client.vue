<template>
  <div>
    <h3 class="font-bold pb-5">Lịch sử giao dịch</h3>
    <NuxtLink
      to="/account/wallet"
      class="flex justify-end text-blue-600 text-sm"
      >Trở về</NuxtLink
    >
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <a-table
        :columns="columns"
        :data-source="walletStore?.transactions?.transactions"
        class="mt-5"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'amount'">
            <span>
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(record?.amount)
              }}
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'transaction_type'">
            <span
              v-if="record.transaction_type === 'deposit'"
              class="text-tag-text-09"
            >
              Nạp tiền
            </span>
            <span
              v-else-if="record.transaction_type === 'withdraw'"
              class="text-tag-text-06"
            >
              Nạp tiền
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'status'">
            <a-tag
              v-if="record.status === 'pending'"
              class="text-tag-text-01 bg-tag-bg-01 border-none px-3 py-1"
            >
              Đang xử lý
            </a-tag>
            <a-tag
              v-else-if="record.status === 'completed'"
              class="text-tag-text-09 bg-tag-bg-09 border-none px-3 py-1"
            >
              Thành công
            </a-tag>
            <a-tag
              v-if="record.status === 'failed'"
              class="text-tag-text-06 bg-tag-bg-06 border-none px-3 py-1"
            >
              Thất bại
            </a-tag>
            <a-tag
              v-else-if="record.status === 'canceled'"
              class="text-tag-text-07 bg-tag-bg-07 border-none px-3 py-1"
            >
              Đã hủy
            </a-tag>
          </template>
          <!--  -->
          <template v-if="column.key === 'transaction_method'">
            <span v-if="record.transaction_method === 'offline'">
              Tiền mặt
            </span>
            <span v-else-if="record.transaction_method === 'online'">
              Chuyển khoản
            </span>
          </template>
          <!--  -->
          <template v-if="column.key === 'created_at'">
            <span>
              {{ $dayjs(record?.created_at).format("DD/MM/YYYY - HH:MM") }}
            </span>
          </template>
          <!--  -->
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <span>
                <a-tooltip placement="top">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    @click="getLinkPayment(record.transaction_code)"
                    class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                  >
                    <div class="flex items-center">
                      <UIcon
                        class="group-hover:text-[#212122]"
                        name="i-icon-park-outline-eyes"
                      />
                    </div>
                  </button>
                </a-tooltip>
              </span>

              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#131313]"
                    name="i-solar-menu-dots-bold"
                  />
                </button>
                <template #overlay>
                  <a-menu>
                    <NuxtLink>
                      <a-menu-item key="2" class="p-4">
                        <span class="flex items-center gap-2 text-blue-400">
                          <UIcon
                            class="group-hover:text-[green]"
                            name="i-material-symbols-edit-outline"
                          />
                          <span>Sửa</span>
                        </span>
                      </a-menu-item>
                    </NuxtLink>

                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button class="flex items-center gap-1 text-blue-400">
                          <UIcon
                            class="group-hover:text-[red] text-lg"
                            name="i-material-symbols-delete-outline"
                          />
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
        <a-pagination
          v-model:current="current"
          :total="walletStore?.transactions?.totalResults"
          :pageSize="walletStore?.transactions?.pageSize"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const walletStore = useWalletClientStore();
const current = ref(1);
const transaction_type = ref();
const route = useRoute();
const transaction_code = route.params.transaction_code;

// Get link Payment
const getLinkPayment = async () => {
  const resData = await walletStore.getPaymentLink(transaction_code);
  window.location.href =
    "https://pay.payos.vn/web/" +
    resData?.data?._rawValue?.data.transaction_code;

  console.log("resData", resData.value);
};
// render transaction
useAsyncData(
  async () => {
    try {
      await walletStore.getAllTransaction({
        page: current.value,
      });
    } catch (error) {
      console.log(error);
    }
  },
  {
    immediate: true,
    watch: [current],
  }
);

const columns = [
  {
    title: "Mã giao dịch",
    dataIndex: "transaction_code",
    key: "transaction_code",
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Loại giao dịch",
    dataIndex: "transaction_type",
    key: "transaction_type",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Hình thức",
    dataIndex: "transaction_method",
    key: "transaction_method",
  },
  {
    title: "Thời gian",
    key: "created_at",
    dataIndex: "created_at",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];
</script>
