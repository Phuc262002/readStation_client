<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Phiếu trả sách</h5>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex flex-col gap-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <a-input placeholder="Nhập mã kệ để tìm kiếm" class="h-10">
              <template #prefix>
                <SearchOutlined />
              </template>
            </a-input>
          </div>
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <a-table :columns="columns" :data-source="data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'sku'">
              <a>{{ record.sku }}</a>
            </template>
            <template v-if="column.key === 'user'">
              <div class="flex justify-start gap-4 items-center">
                <a-avatar
                  src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg"
                  :size="40" />
                <div class="flex flex-col gap-1">
                  <span class="text-base">
                    {{ record.user }}
                  </span>
                  <span class="text-base">0123455</span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'action'">
              <NuxtLink :to="`/admin/product-manager/slip/${record.id}`">
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
              </NuxtLink>
            </template>
          </template>
        </a-table>
      </div>

    </div>
  </div>
</template>
<script setup>
const columns = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'sku',
    key: 'sku',
  },
  {
    title: 'Thông tin cá nhân',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Ngày thuê',
    dataIndex: 'return_date',
    key: 'return_date',
  },
  {
    title: 'Hình thức trả sách',
    dataIndex: 'return_method',
    key: 'return_method',
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
  }
];
const data = [
  {
    id:1,
    sku: '#0488D7D3C7',
    user: 'Nguyễn Văn A',
    return_date: '20/10/2021',
    return_method: 'Giao trả sách',
  },
];
</script>