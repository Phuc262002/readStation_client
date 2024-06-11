<template>


    <a-modal v-model:open="open" @ok="handleOk" :footer="null" :onCancel="handleClose">
        <div class="p-5">
            <div class="text-base font-semibold mb-5">Thêm Sách</div>
            <a-dropdown :open="valueSearch ? true : false">
                <a-input v-model:value="valueSearch" placeholder="Nhập mã kệ để tìm kiếm" class="h-10" allow-clear
                    @click.prevent>
                    <template #prefix>
                        <SearchOutlined />
                    </template>
                </a-input>
                <template #overlay>
                    <a-menu>
                        <a-menu-item v-if="bookStore.isLoading">
                            <div class="p-10 flex justify-center">
                                <a-spin />
                            </div>
                        </a-menu-item>
                        <a-menu-item v-else v-for="(items, index) in bookStore?.adminBooks?.books" :key="index" >
                                <div class="flex justify-start gap-5 items-center" v-if="bookStore?.adminBooks?.books"@click="showConfirm">
                                    <div>
                                        <img class="rounded-lg w-20 h-28" :src="items?.book_detail[0]?.poster" alt="">
                                    </div>
                                    <div class="text-base font-medium">{{ items?.title }}</div>
                                    <div class="text-base font-medium">{{ items?.author?.author }}</div>
                                </div>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </a-modal>

</template>

<script setup>
import { ref } from 'vue';
import { Modal } from 'ant-design-vue';
const handleClose = () => {
    props.openModal();
};
const props = defineProps({
    openModalAdd: Boolean,
    openModal: Function,
});
const open = ref(props.openModalAdd);
watch(
    () => props.openModalAdd,
    (newVal) => {
        open.value = newVal;
    }
);
const showConfirm = () => {
    Modal.confirm({
        title: 'Bạn có muốn thêm sách này vào kệ không?',
        onOk() {
            updateDetailShelves();
        },
        onCancel() {
            console.log('Cancel');
        },
        class: 'test',
    });
};
const updateDetailShelves = () =>{
    alert('Thêm thành công')
}
const valueSearch = ref('');
const bookStore = useBookStore();
console.log("🚀 ~ bookStore:", bookStore?.adminBooks)
useAsyncData(async () => {
    await bookStore.getAdminBooks({
        search: valueSearch.value,
    });
}, {
    watch: [valueSearch],
})

</script>
<style scoped>
.certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
    color: #666;
    font-weight: bold;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
    border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item {
    padding-left: 16px;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
    text-align: center;
    cursor: default;
}

.certain-category-search-dropdown .ant-select-dropdown-menu {
    max-height: 300px;
}
</style>