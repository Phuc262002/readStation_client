<template>
  <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
    <div class="flex justify-between">
      <div class="flex justify-start gap-3 items-center">
        <span class="text-2xl font-bold">Lịch sử giao dịch</span>
      </div>
    </div>
    <div class="flex justify-between py-2">
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
        <a-button>Rút tiền</a-button>
        <a-button type="primary">Nạp tiền</a-button>
      </div>
    </div>

    <a-table
      :columns="columns"
      :data-source="walletAdminStore?.oneWalletAdmin?.transactions"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'transaction_code'">
          <p>{{ record.transaction_code }}</p>
        </template>
        <template v-if="column.key === 'amount'">
          <p>
            {{
              new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(record.amount)
            }}
          </p>
        </template>
        <template v-if="column.key === 'transaction_type'">
          <a-tag
            :bordered="false"
            v-if="record.transaction_type === 'deposit'"
            class="bg-tag-bg-09 text-tag-text-09"
          >
            Nạp tiền
          </a-tag>
          <a-tag
            :bordered="false"
            v-if="record.transaction_type === 'withdraw'"
            class="bg-tag-bg-06 text-tag-text-06"
          >
            Rút tiền
          </a-tag>
        </template>
        <template v-if="column.key === 'transaction_method'">
            <a-tag
            :bordered="false"
            v-if="record.transaction_method === 'online'"
            class="bg-tag-bg-09 text-tag-text-09"
          >
            Chuyển khoản
          </a-tag>
          <a-tag
            :bordered="false"
            v-if="record.transaction_method === 'offline'"
            class="bg-tag-bg-06 text-tag-text-06"
          >
            Tiền mặt
          </a-tag>
        </template>
        <template v-if="column.key === 'created_at'">
          <p>
            {{ $dayjs(record.created_at).format(" DD/MM/YYYY - HH:mm") }}
          </p>
        </template>
        <template v-else-if="column.key === 'status'">
          <a-tag
            :bordered="false"
            v-if="record.status === 'pending'"
            class="bg-tag-bg-01  text-tag-text-01"
          >
            Đang xử lý
          </a-tag>
          <a-tag
            :bordered="false"
            v-if="record.status === 'completed'"
            class="bg-tag-bg-09 text-tag-text-09"
          >
            Đã hoàn thành
          </a-tag>
          <a-tag
            :bordered="false"
            v-if="record.status === 'failed'"
            class="bg-tag-bg-06 text-tag-text-06"
          >
            Thất bại
          </a-tag>
          <a-tag
            :bordered="false"
            v-if="record.status === 'canceled'"
            class="bg-tag-bg-07 text-tag-text-07"
          >
            Đã hủy
          </a-tag>
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
                  <a-menu-item key="2" class="p-4">
                    <button class="flex items-center gap-2">
                      <UIcon
                        class="group-hover:text-[green]"
                        name="i-material-symbols-edit-outline"
                      />
                      <span>Nạp tiền</span>
                    </button>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script setup>
const walletAdminStore = useWalletAdminStore();

const columns = [
  {
    title: "Mã giao dịch",
    dataIndex: "transaction_code",
    key: "transaction_code",
    width: "100px",
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
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Hình thức",
    key: "transaction_method",
    dataIndex: "transaction_method",
  },
  {
    title: "Thời gian",
    key: "created_at",
    dataIndex: "created_at",
  },
  {
    title: "Action",
    key: "action",
  },
];
const data = [
  {
    transaction_id: "1",
    amount: "500.000 đ",
    type: "Nạp tiền",
    status: "active",
    formality: "Chuyển khoản",
    created_at: "20/04/2023",
  },
];
</script>
