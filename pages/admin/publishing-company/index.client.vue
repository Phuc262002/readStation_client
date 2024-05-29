<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Tất cả nhà xuất bản
        </h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
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
        <div class="">
          <a-button type="primary" @click="showModalAdd"
            >Thêm nhà xuất bản</a-button
          >
          <a-modal
            v-model:open="openModalAdd"
            title="Thêm nhà xuất bản"
            :footer="null"
          >
            <form @submit.prevent="">
              <div class="bg-white py-2">
                <div class="pb-4">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Mã nhà xuất bản
                  </label>
                  <div class="mt-1">
                    <a-input
                      class="w-[450px] h-[45px]"
                      placeholder="Nhập mã nhà xuất bản"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nội dụng
                  </label>
                  <div class="mt-2">
                    <a-space>
                      <a-select
                        class="w-[450px] h-[45px] flex justify-center items-center"
                        ref="select"
                        v-model:value="value1"
                        @focus="focus"
                      >
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                      </a-select>
                    </a-space>
                  </div>
                </div>
                <div class="flex justify-end items-end gap-4">
                  <a-button
                    @click="onCancel"
                    type="primary"
                    danger
                    html-type="button"
                    class="mt-4"
                    >Hủy</a-button
                  >
                  <a-button type="primary" html-type="submit" class="mt-4"
                    >Lưu</a-button
                  >
                </div>
              </div>
            </form>
          </a-modal>
        </div>
      </div>

      <a-table :columns="columns" 
      :loading="isLoading"
      :data-source="usePublishingCompanyStore.publishingCompaniesAdmin">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Mã nhà xuất bản </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  class="group hover:bg-[#faad14]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#faad14]"
                    name="i-icon-park-outline-eyes"
                  />
                </button>
              </a-tooltip>
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <span
                  class="group hover:bg-[green]/20 bg-[#e4e1e1] flex justify-center items-center cursor-pointer w-8 h-8 rounded-md"
                >
                  <div>
                    <button class="flex items-center" @click="showModalEdit">
                      <UIcon
                        class="group-hover:text-[green]"
                        name="i-material-symbols-edit-outline"
                      />
                    </button>
                    <a-modal v-model:open="openModalEdit" title="Sửa">
                      <div class="">
                        <div class="bg-white py-2">
                          <div class="pb-4">
                            <label
                              for="email"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Tên nhà xuất bản
                            </label>
                            <div class="mt-1">
                              <a-input
                                class="w-[450px] h-[45px]"
                                placeholder="Nhập tên nhà xuất bản"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              for="email"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Nội dụng
                            </label>
                            <div class="mt-1">
                              <a-input
                                class="w-[450px] h-[45px]"
                                placeholder="Nhập nội dung"
                              />
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
                  class="group hover:bg-[red]/20 bg-[#e4e1e1] flex items-center justify-center cursor-pointer w-8 h-8 rounded-md"
                >
                  <a-popconfirm
                    title="Are you sure delete this task?"
                    placement="right"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="confirm"
                    @cancel="cancel"
                  >
                    <button class="flex items-center">
                      <UIcon
                        class="group-hover:text-[red]"
                        name="i-material-symbols-delete-outline"
                      />
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
import type { SelectProps } from "ant-design-vue";
const publishingCompany = ref({
  name: "",
  category: "",
  logo_company: "",
  description: "",
  status: "",
});

const publishingCompanyStore = usePublishingCompanyStore();
const isLoading = ref(false);
const getData = async () => {
  isLoading.value = true;
  await publishingCompanyStore.getAllPublishingCompany();
  isLoading.value = false;
};
useAsyncData(async () => {
  await getData();
});

const value1 = ref("lucy");
const value2 = ref("lucy");
const options1 = ref<SelectProps["options"]>([
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
]);
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

const columns = [
  {
    name: "Name",
    dataIndex: "Name",
    key: "name",
  },
  {
    title: "nhà xuất bản",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Hình ảnh",
    dataIndex: "logo_company",
    key: "logo_company",
  },
  {
    title: "Nội dung",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Action",
    key: "action",
  },
];



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
</script>
