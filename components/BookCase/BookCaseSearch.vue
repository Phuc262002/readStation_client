<template>
  <a-modal
    v-model:open="open"
    @ok="handleOk"
    :footer="null"
    :onCancel="handleClose"
  >
    <div class="p-5">
      <div class="text-base font-semibold mb-5">Thêm kệ</div>
      <a-dropdown :open="valueSearch ? true : false">
        <a-input
          v-model:value="valueSearch"
          placeholder="Nhập mã tủ để tìm kiếm"
          class="h-10"
          allow-clear
          @click.prevent
        >
          <template #prefix>
            <SearchOutlined />
          </template>
        </a-input>
        <template #overlay>
          <a-menu class="overflow-auto max-h-[400px]">
            <a-menu-item v-if="shelvesStore.isLoading">
              <div class="p-10 flex justify-center">
                <a-spin />
              </div>
            </a-menu-item>
            <a-menu-item
              v-else
              v-for="(items, index) in shelvesStore?.adminBookSheleves?.shelves"
              :key="index"
            >
              <div
                class="flex justify-start gap-5 items-center"
                v-if="shelvesStore?.adminBookSheleves?.shelves"
                @click="showConfirm(items.id)"
              >
                <div class="text-base font-medium">
                  {{ items?.bookshelf_code }} - {{ items?.name }}
                </div>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-modal>
</template>

<script setup>
import { ref } from "vue";
import { Modal } from "ant-design-vue";

const bookCaseStore = useBookcaseStore();
const shelvesStore = useShelvesStore();
const valueSearch = ref("");
useAsyncData(
  async () => {
    await shelvesStore.getAllShelves({
      search: valueSearch.value,
    });
  },
  {
    watch: [valueSearch],
  }
);
const handleClose = () => {
  valueSearch.value = "";
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
const showConfirm = (id) => {
  Modal.confirm({
    title: "Bạn có muốn thêm sách này vào kệ không?",
    onOk() {
      updateDetailCase(id);
      handleClose();
    },
    onCancel() {
      console.log("Cancel");
    },
    class: "test",
  });
};
const updateDetailCase = async (id) => {
  try {
    const idCase = {
      bookcase_id: bookCaseStore?.bookCase?.id,
    };
    await shelvesStore.updateShelves({ id: id, valueUpdateShelves: idCase });
  } catch (error) {
    console.log(error);
  }
};
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
