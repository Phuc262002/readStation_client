<template>
    <div class="p-5">
        <a-modal v-model:open="props.openHistoryExtend" :footer="null" width="70%" :onCancel="handleClose"
            title="Lịch sử gia hạn">
            <a-table class="my-5" :columns="columns" :data-source="orderStore?.getOneOrderAdmin?.data?.extensions"
                @resizeColumn="handleResizeColumn" :index="0">
                <template #bodyCell="{ column, record, index }">
                    <template v-if="column.key === 'extensions'">
                        <span> Gia hạn lần {{ index + 1 }} </span>
                    </template>
                    <template v-if="column.key === 'new_due_date'">
                        <span>
                            {{ $dayjs(record?.new_due_date).format("DD/MM/YYYY - HH:MM") }}
                        </span>
                    </template>
                    <template v-if="column.key === 'extension_fee'">
                        <span>
                            {{
                                new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(record?.extension_fee)
                            }}
                        </span>
                    </template>
                    <template v-if="column.key === 'extension_details'">
                        <span v-for="(items, index) in record?.extension_details">
                            <div>
                                {{ items?.loan_order_detail?.book_details?.book?.title }} - Phiên bản {{
                                    items?.loan_order_detail?.book_details?.book_version }}
                            </div>

                        </span>
                    </template>
                    <template v-if="column.key === 'extension_date'">
                        <span>
                            {{ $dayjs(record.extension_date).format("DD/MM/YYYY - HH:MM") }}
                        </span>
                    </template>
                </template>
            </a-table>
        </a-modal>
    </div>
</template>
<script setup>
const props = defineProps({
    openHistoryExtend: Boolean,
    closeHistoryExtend: Function
}); const route = useRoute();
const id = route.params.id;
const orderStore = useOrderStore();
useAsyncData(async () => {
    await orderStore.getOneOrder(id)
});
const handleClose = () => {
    props.closeHistoryExtend();
}
const columns = ref([
    {
        title: "Hình thức",
        dataIndex: "extensions",
        key: "extensions",
    },
    {
        title: "Tên sách",
        dataIndex: "extension_details",
        key: "extension_details",
    },
    {
        title: "Số tiền gia hạn",
        key: "extension_fee",
        dataIndex: "extension_fee",
    },
    {
        title: "Ngày tới hạn",
        key: "new_due_date",
        dataIndex: "new_due_date",
    },
    {
        title: "Thời gian",
        key: "extension_date",
        dataIndex: "extension_date",
    },
]);

</script>