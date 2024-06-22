<template>
  <div class="space-y-2">
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Ví của Tôn Thất An Khương
        </h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-[white] rounded-lg h-auto w-full flex flex-col gap-3 p-5">
      <div class="flex justify-between">
        <div class="flex justify-start gap-3 items-center">
          <span class="text-2xl font-bold">Thông tin cá nhân</span>
        </div>
        <div class="flex gap-2">
          <a-button>Chặn ví</a-button>
          <a-button type="primary">Đóng băng ví</a-button>
          <a-button type="primary">Khôi phục ví</a-button>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <div class="md:col-span-1 space-y-3 border-r border-gray-200">
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">Họ và tên: </span>
            <span class="text-base cols-span-2">An khương</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">Số điện thoại: </span>
            <span class="text-base">An khương</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">Email: </span>
            <span class="text-base">khuongttaps26697@fpt.edu.vn </span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">CMT/CCCD: </span>
            <span class="text-base">An khương</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">Ảnh đại diện: </span>
            <span class="text-base">
              <a-image
                class="rounded-md"
                width="60px"
                height="60px"
                src="https://res.cloudinary.com/dlikmzx7m/image/upload/v1718528041/m0gegin23bulczo98izu.jpg"
                alt="Ảnh đại diện"
              />
            </span>
          </div>
        </div>

        <div class="md:col-span-1 space-y-3">
          <div class="grid grid-cols-2">
            <span class="text-base">Trạng thái ví: </span>
            <span class="text-base">
              <span class="bg-tag-bg-10 text-tag-text-10 px-2 py-1 rounded">
                Đóng băng ví
              </span>
            </span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">Số tiền trong ví: </span>
            <span class="text-base">500.000 đ</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">Tiền cọc đang thuê sách: </span>
            <span class="text-base">200.000 đ</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">Số tiền đang xử lý: </span>
            <span class="text-base">100.000 đ</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base cols-span-1">Số tiền đang rút: </span>
            <span class="text-base">20.000 đ</span>
          </div>
        </div>
      </div>
    </div>

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

      <a-table :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'transaction_id'">
            <p>{{ record.transaction_id }}</p>
          </template>
          <template v-if="column.key === 'amount'">
            <span>
              <a-tag
                :bordered="false"
                :color="record.amount === 'active' ? 'green' : 'volcano'"
              >
                {{ record.amount }}
              </a-tag>
            </span>
          </template>
          <template v-if="column.key === 'type'">
            <span>
              <a-tag
                :bordered="false"
                :color="record.type === 'active' ? 'green' : 'volcano'"
              >
                {{ record.type }}
              </a-tag>
            </span>
          </template>
          <template v-if="column.key === 'formality'">
            <p>{{ record.formality }}</p>
          </template>
          <template v-if="column.key === 'created_at'">
            <a>
              {{ record.created_at }}
            </a>
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
              <NuxtLink to="/admin/wallet/1">
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
              </NuxtLink>
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
  </div>
</template>
<script lang="ts" setup>
const columns = [
  {
    title: "Mã giao dịch",
    dataIndex: "transaction_id",
    key: "transaction_id",
    width: "100px",
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    key: "amount",
  },

  {
    title: "Loại giao dịch",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Hình thức",
    key: "formality",
    dataIndex: "formality",
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
