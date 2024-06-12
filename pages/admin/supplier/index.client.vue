<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả nhà cung cấp</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <!-- Đây là phần code mẫu body -->
        <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
            <div class="flex justify-between pb-4">
                <div class="relative w-1/4 md:block hidden">
                    <div class="flex">
                        <a-input placeholder="Nhập mã kệ để tìm kiếm" class="h-10">
                            <template #prefix>
                                <SearchOutlined />
                            </template>
                            <template #suffix>
                                <a-spin :indicator="indicator" />
                            </template>
                        </a-input>
                    </div>
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UIcon class="text-gray-500" name="i-material-symbols-search" />
                    </div>
                </div>
                <div class="">
                    <a-button class="text-white bg-rtprimary hover:!text-white border-none hover:bg-rtsecondary">Thêm
                        nhà cung cấp</a-button>
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
                            <span>
                                <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                                    {{ record.status }}
                                </a-tag>
                            </span>
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <div class="flex text-[16px] gap-4">
                                <NuxtLink>
                                    <a-tooltip placement="top" color="yellow">
                                        <template #title>
                                            <span>Xem chi tiết</span>
                                        </template>
                                        <button
                                            class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                                            <UIcon class="group-hover:text-[#212122]" name="i-icon-park-outline-eyes" />
                                        </button>
                                    </a-tooltip>
                                </NuxtLink>
                                <a-tooltip placement="top" color="green">
                                    <template #title>
                                        <span>Sửa</span>
                                    </template>
                                    <button
                                        class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                                        <UIcon class="group-hover:text-[#212122]"
                                            name="i-material-symbols-edit-outline" />
                                    </button>
                                </a-tooltip>
                                <a-tooltip placement="top" color="red">
                                    <template #title>
                                        <span>Xóa</span>
                                    </template>
                                    <button
                                        class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                                        <UIcon class="group-hover:text-[#212122]"
                                            name="i-material-symbols-delete-outline" />
                                    </button>
                                </a-tooltip>
                            </div>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { LoadingOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
const indicator = h(LoadingOutlined, {
    style: {
        fontSize: "16px",
    },
    spin: true,
});
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
const supplierStore = useSupplierStore();
useAsyncData(async () => {
    await supplierStore.getAllSupplier({});
});
</script>
