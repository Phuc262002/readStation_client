<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Tạo hóa đơn nhật hàng</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
            <div class="flex flex-col gap-5">
                <div class="grid grid-cols-4 gap-5">
                    <div class="flex flex-col gap-3">
                        <label class="text-base font-semibold" for="">Mã hóa đơn</label>
                        <a-input type="text" placeholder="Mã hóa đơn" style="height: 40px;" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="text-base font-semibold" for="">Ngày tạo hóa đơn</label>
                        <a-input type="date" placeholder="Ngày tạo hóa đơn" style="height: 40px;" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="text-base font-semibold" for="">Tên hóa đơn</label>
                        <a-input type="text" placeholder="Tên hóa đơn" style="height: 40px;" />
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="text-base font-semibold" for="">Nhà cung cấp</label>
                        <a-select :options="options" size="large" placeholder="Công ty ABC"></a-select>
                    </div>
                </div>
                <div class="grid mt-5">
                    <div class="flex flex-col gap-3">
                        <label class="text-base font-semibold" for="">Mô tả hóa đơn</label>
                        <a-textarea rows="4" placeholder="Nhập mô tả hóa đơn" />
                    </div>
                </div>
                <div>
                    <div class="flex flex-col gap-3">
                        <label class="text-base font-semibold">Tìm kiếm sản phẩm</label>
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
                    </div>
                </div>
                <div class="mt-5">
                    <div class="flex flex-col gap-3">
                        <label class="text-base font-semibold">Sản phẩm đã nhập</label>
                        <a-table :columns="columns" :data-source="data" :pagination="false">
                            <template #bodyCell="{ column, text }">
                                <template v-if="column.dataIndex === 'name'">
                                    <a>{{ text }}</a>
                                </template>
                                <template v-if="column.dataIndex === 'quantity'">
                                    <div class="flex items-center gap-3">
                                        <button class="border rounded-lg w-10 h-10 flex justify-center items-center text-lg">-</button>
                                        {{ text }}
                                        <button class="border rounded-lg w-10 h-10 flex justify-center items-center text-lg">+</button>
                                    </div>
                                </template>
                                <template v-if="column.dataIndex === 'action'">
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
                                </template>
                            </template>
                        </a-table>
                        <div class="mt-5 flex justify-end gap-3">
                            <a-button class="border">Hủy</a-button>
                            <a-button class="border border-orange-400 text-orange-500">Lưu nháp</a-button>
                            <a-button type="primary">Lưu hóa đơn</a-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';
const indicator = h(LoadingOutlined, {
    style: {
        fontSize: '24px',
    },
    spin: true,
});
const options = ref([
    {
        value: 'Công ty A',
        label: 'Công ty A',
    },
    {
        value: 'Công ty B',
        label: 'Công ty B',
    },
    {
        value: 'Công ty C',
        label: 'Công ty C',
    },
]);
const columns = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Mã sản phẩm',
        dataIndex: 'sku',
        key: 'sku',
    },
    {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'quantity',

    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',

    },
    {
        title: 'Tổng tiền',
        dataIndex: 'total',
        key: 'total',

    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
        key: 'action',

    },
];
const data = [
    {
        name: "Sách 1",
        sku: "SP001",
        quantity: 10,
        price: 10000,
        total: 100000,
    },
    {
        name: "Sách 1",
        sku: "SP001",
        quantity: 10,
        price: 10000,
        total: 100000,
    },
    {
        name: "Sách 1",
        sku: "SP001",
        quantity: 10,
        price: 10000,
        total: 100000,
    },
];
</script>
