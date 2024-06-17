<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Tạo hóa đơn nhật hàng</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
            <form @submit.prevent="createInvoiceEnter">
                <div class="flex flex-col gap-5">
                    <div class="grid grid-cols-4 gap-5">
                        <div class="flex flex-col gap-3">
                            <label class="text-base font-semibold" for="">Mã hóa đơn</label>
                            <a-input v-model:value="valueInvoiceEnter.invoice_code" type="text" placeholder="Mã hóa đơn"
                                style="height: 40px;" />
                        </div>
                        <div class="flex flex-col gap-3">
                            <label class="text-base font-semibold" for="">Ngày tạo hóa đơn</label>
                            <a-input v-model:value="valueInvoiceEnter.invoice_date" type="date"
                                placeholder="Ngày tạo hóa đơn" style="height: 40px;" />
                        </div>
                        <div class="flex flex-col gap-3">
                            <label class="text-base font-semibold" for="">Tên hóa đơn</label>
                            <a-input v-model:value="valueInvoiceEnter.invoice_name" type="text"
                                placeholder="Tên hóa đơn" style="height: 40px;" />
                        </div>
                        <div class="flex flex-col gap-3">
                            <label class="text-base font-semibold" for="">Nhà cung cấp</label>
                            <a-select v-model:value="valueInvoiceEnter.supplier_id" :options="options" size="large"
                                placeholder="Công ty ABC"></a-select>
                        </div>
                    </div>
                    <div class="grid mt-5">
                        <div class="flex flex-col gap-3">
                            <label class="text-base font-semibold" for="">Mô tả hóa đơn</label>
                            <a-textarea v-model:value="valueInvoiceEnter.invoice_description" rows="4"
                                placeholder="Nhập mô tả hóa đơn" />
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col gap-3">
                            <label class="text-base font-semibold">Tìm kiếm sản phẩm</label>
                            <div class="flex">
                                <a-dropdown :open="valueSearch ? true : false">
                                    <a-input v-model:value="valueSearch" placeholder="Nhập mã kệ để tìm kiếm"
                                        class="h-10" allow-clear @click.prevent>
                                        <template #prefix>
                                            <SearchOutlined />
                                        </template>
                                    </a-input>
                                    <template #overlay>
                                        <a-menu class="overflow-auto max-h-[400px]">
                                            <a-menu-item v-if="bookDetailStore.isLoading">
                                                <div class="p-10 flex justify-center">
                                                    <a-spin />
                                                </div>
                                            </a-menu-item>
                                            <a-menu-item v-else
                                                v-for="(items, index) in bookDetailStore?.getAllBookdetailAdmin?.books"
                                                :key="index">

                                                <div class="flex justify-start gap-5 items-center"
                                                    v-if="bookDetailStore?.getAllBookdetailAdmin?.books"
                                                    @click="showConfirm(items?.book?.id)">
                                                    <div>
                                                        <img class="rounded-lg w-20 h-28" :src="items?.poster" alt="">
                                                    </div>
                                                    <div class="text-base font-medium">{{ items?.book?.title }}
                                                    </div>
                                                    <div class="text-base font-medium">{{
                                                        items?.book?.author?.author }}
                                                    </div>
                                                </div>
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                </a-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="flex flex-col gap-3">
                            <label class="text-base font-semibold">Sản phẩm đã nhập</label>
                            <a-table :columns="columns" v-model:value="valueInvoiceEnter.invoice_enter_detail"
                                :data-source="data" :pagination="false">
                                <template #bodyCell="{ column, text }">
                                    <template v-if="column.dataIndex === 'title'">
                                        <a>{{ text }}</a>
                                    </template>
                                    <template v-if="column.dataIndex === 'total'">
                                        <span>{{ valueInvoiceEnter.total }}</span>
                                    </template>
                                    <template v-if="column.dataIndex === 'quantity'">
                                        <div class="flex items-center gap-3">
                                            <button
                                                class="border rounded-lg w-10 h-10 flex justify-center items-center text-lg">-</button>
                                            {{ text }}
                                            <button
                                                class="border rounded-lg w-10 h-10 flex justify-center items-center text-lg">+</button>
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
                                <a-button class="border border-orange-400 text-orange-500" html-type="submit" :submitting="invoiceEnter.isSubmitting"
                                    @click="saveDraft">Lưu
                                    nháp</a-button>
                                <a-button type="primary" html-type="submit" :submitting="invoiceEnter.isSubmitting" @click="saveInvoice">Lưu hóa đơn</a-button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';
const invoiceEnter = useInvoiceEnterStore();
const data = ref([]);
const indicator = h(LoadingOutlined, {
    style: {
        fontSize: '24px',
    },
    spin: true,
});
const valueSearch = ref('');
console.log(valueSearch);
const options = ref([]);
const supplierStore = useSupplierStore();
useAsyncData(async () => {
    await supplierStore.getAllSupplier({});
    options.value = supplierStore?.SupplierAdmin?.suppliers.map((supplier) => ({
        value: supplier.id,
        label: supplier.name,
    }));
});
const bookDetailStore = useBookDetailStore();
useAsyncData(async () => {
    await bookDetailStore.getAllBookDetail({
        search: valueSearch.value,
    });
}, {
    watch: [valueSearch],
});
const showConfirm = (id) => {
    Modal.confirm({
        title: 'Bạn có chắc muốn thêm nó vào danh sách hóa đơn không ?',
        onOk() {
            const selectedBook = bookDetailStore?.getAllBookdetailAdmin?.books.find((book) => book?.book?.id === id);
            if (selectedBook) {
                const newData = [...data.value];
                newData.push({
                    id: selectedBook.book.id,
                    title: selectedBook.book.title,
                    sku: selectedBook.sku_origin,
                    quantity: 1,
                    price: selectedBook.price,
                    total: selectedBook.price,
                });
                valueInvoiceEnter.value.invoice_enter_detail.push({
                    book_detail_id: selectedBook.book.id,
                    book_price: selectedBook.price,
                    book_quantity: 1
                });
                calculateTotal();
                data.value = newData;
            }
        },
        onCancel() {
            console.log('Cancel');
        },
        class: 'test',
    });
};;
const columns = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'title',
        key: 'title',
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
        dataIndex: 'price',
        key: 'total',

    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
        key: 'action',

    },
];
const saveDraft = () => {
    valueInvoiceEnter.value.status = 'draft'; // Cập nhật trạng thái là draft
};

const saveInvoice = () => {
    valueInvoiceEnter.value.status = 'active'; // Cập nhật trạng thái là active
};
const calculateTotal = () => {
    let total = 0;
    for (const item of valueInvoiceEnter.value.invoice_enter_detail) {
        total += item.book_price * item.book_quantity;
    }
    valueInvoiceEnter.value.total = total.toString();
};
const valueInvoiceEnter = ref({
    invoice_code: "" || null,
    invoice_name: "",
    total: "0",
    invoice_description: "",
    supplier_id: "",
    invoice_date: "",
    status: "",
    invoice_enter_detail: [
        {
            book_detail_id: "",
            book_price: "",
            book_quantity: ""
        }
    ]
});
const createInvoiceEnter = async () => {
    try {
        const dataPost = {
            invoice_code: valueInvoiceEnter.value.invoice_code || null,
            invoice_name: valueInvoiceEnter.value.invoice_name,
            total: valueInvoiceEnter.value.total,
            invoice_description: valueInvoiceEnter.value.invoice_description,
            supplier_id: valueInvoiceEnter.value.supplier_id,
            invoice_date: valueInvoiceEnter.value.invoice_date,
            status: valueInvoiceEnter.value.status,
            invoice_enter_detail: data.value.map((item) => ({
                book_detail_id: item.id,
                book_price: item.price,
                book_quantity: item.quantity
            }))
        };
        await invoiceEnter.createInvoiceEnter(dataPost);
        message.success('Tạo hóa đơn thành công');
        navigateTo('/admin/manager-bill')
        // alert(JSON.stringify(valueInvoiceEnter.value));
    } catch (error) {
        message.error('Tạo hóa đơn thất bại');
    }

};
</script>
