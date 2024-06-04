<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả kệ sách</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <input type="text"
              class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
              placeholder="Tìm kiếm..." />
          </div>
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <div class="">
          <a-button type="primary" @click="showModalAdd">Thêm tủ sách</a-button>
          <a-modal v-model:open="openModalAdd" title="Thêm tủ sách" :footer="null">
            <form @submit.prevent="onSubmit">
              <div class="bg-white py-2">
                <div class="grid grid-rows-2 gap-4 my-3">
                  <div class="space-y-6">
                    <div>
                      <label for="">Mô tả</label>
                      <a-input type="text" class="border p-2 rounded-md" placeholder="Mô tả" />
                    </div>
                    <div>
                      <label for="">bookshelf_code</label>
                      <a-input type="text" class="border p-2 rounded-md" placeholder="Bookshelf_code" />
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-5">
                    <!-- <div>
                      <label for="">Tủ sách</label>
                      <<a-select v-model:value="valuecreateBook.shelve_id" show-search placeholder="Mã tủ sách"
                        :options="optionsShelve" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                        @change="handleChange"></a-select>
                    </div> -->
                    <div class="flex flex-col gap-2">
                      <label for="">Danh mục</label>
                      <a-select show-search placeholder="Mã danh mục" :options="optionsCategory"></a-select>
                    </div>
                  </div>
                </div>

                <div class="flex justify-end items-end gap-4">
                  <a-button @click="onCancel" type="primary" danger html-type="button" class="mt-4">Hủy</a-button>
                  <a-button type="primary" html-type="submit" class="mt-4">Lưu</a-button>
                </div>
              </div>
            </form>
          </a-modal>
        </div>
      </div>

      <a-table :columns="columns" :data-source="dataShelves">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Mã tủ sách </span>
          </template>
        </template>

        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === '#'">
            <a>
              {{ index + 1 }}
            </a>
          </template>
          <template v-if="column.key === 'bookcase_id'">
            <span>
              {{ record.bookcase.id }}
            </span>
          </template>
          <template v-if="column.key === 'category_id'">
            <span>
              {{ record.category.id }}
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <span
                  class="group hover:bg-[#faad14]/20 bg-[#e4e1e1] cursor-pointer flex items-center justify-center w-8 h-8 rounded-md">
                  <UIcon class="group-hover:text-[#faad14]" name="i-icon-park-outline-eyes" />
                </span>
              </a-tooltip>
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <span
                  class="group hover:bg-[green]/20 bg-[#e4e1e1] flex justify-center items-center cursor-pointer w-8 h-8 rounded-md">
                  <div>
                    <button class="flex items-center" @click="showModalEdit">
                      <UIcon class="group-hover:text-[green]" name="i-material-symbols-edit-outline" />
                    </button>
                    <a-modal v-model:open="openModalEdit" title="Sửa">
                      <div class="">
                        <div class="bg-white py-2">
                          <div class="pb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700">
                              Mã tủ sách
                            </label>
                            <div class="mt-1">
                              <a-input class="w-[450px] h-[45px]" placeholder="Nhập tên kệ sách" />
                            </div>
                          </div>

                          <div class="pb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700">
                              Mã kệ sách
                            </label>
                            <div class="mt-1">
                              <a-input class="w-[450px] h-[45px]" placeholder="Nhập tên kệ sách" />
                            </div>
                          </div>

                          <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">
                              Nội dụng
                            </label>
                            <div class="mt-1">
                              <a-input class="w-[450px] h-[45px]" placeholder="Nhập nội dung" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a-modal>
                  </div>
                </span>
              </a-tooltip>
              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <span
                  class="group hover:bg-[red]/20 bg-[#e4e1e1] flex items-center justify-center cursor-pointer w-8 h-8 rounded-md">
                  <a-popconfirm title="Are you sure delete this task?" placement="right" ok-text="Yes" cancel-text="No"
                    @confirm="confirm" @cancel="cancel">
                    <button class="flex items-center">
                      <UIcon class="group-hover:text-[red]" name="i-material-symbols-delete-outline" />
                    </button>
                  </a-popconfirm>
                </span>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from "ant-design-vue";
const optionsCategory = ref([]);
const categoryValue = useCategoryStore();
const getDataCategory = async () => {
  try {
    const data = await categoryValue.getAllCategory({ type: "book" });
    optionsCategory.value = data.data._rawValue.data.categories.map((items) => {
      return {
        value: items.id,
        label: items.id,
      };
    })
  } catch (error) {
    console.error(error);
  } finally {
  }
};

const shelvesValue = useShelvesStore();
const dataShelves = ref([]);
const getData = async () => {
  const data = await shelvesValue.getAllShelves({});
  dataShelves.value = data?.data?._rawValue?.data?.shelves;
  return data;
}
const onSubmit = () => {
  alert(1)
}


useAsyncData(async () => {
  await getData();
  await getDataCategory();
});




const focus = () => {
  console.log("focus");
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const confirm = (e: MouseEvent) => {
  console.log(e);
  message.success("Xóa thành công");
};

const cancel = (e: MouseEvent) => {
  console.log(e);
  message.error("Xóa thất bại");
};
const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);

const showModalAdd = () => {
  openModalAdd.value = true;
};
const showModalEdit = () => {
  openModalEdit.value = true;
};
const onCancel = () => {
  openModalAdd.value = false;
};
const columns = [
  {
    title: "#",
    dataIndex: "#",
    key: "#",
  },
  {
    title: "Kệ sách",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Mã tủ sách",
    dataIndex: "bookcase",
    key: "bookcase_id",
  },
  {
    title: "bookshelf_code",
    dataIndex: "bookshelf_code",
    key: "bookshelf_code",
  },
  {
    title: "Mã danh mục",
    dataIndex: "category",
    key: "category_id",
  },
  {
    title: "Action",
    key: "action",
  },
];


</script>
