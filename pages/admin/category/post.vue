<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Danh mục bài viết</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[260px] w-full rounded-lg p-5">
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
            <SearchOutlined class="text-gray-500" />
          </div>
        </div>
        <div class="">
          <a-button type="primary" @click="showModal"
            >Thêm danh mục bài viết</a-button
          >
          <a-modal
            v-model:open="open"
            title="Thêm danh mục bài viết"
            @ok="handleOk"
          >
            <div class="">
              <div class="bg-white py-2">
                <div class="pb-4">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Tên danh mục
                  </label>
                  <div class="mt-1">
                    <a-input
                      class="w-[450px] h-[45px]"
                      placeholder="Nhập tên danh mục"
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
      </div>

      <a-table :columns="columns" :data-source="filteredOrders">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Name </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'tags'">
            <span>
              <a-tag
                v-for="tag in record.tags"
                :key="tag"
                :color="
                  tag === 'loser'
                    ? 'volcano'
                    : tag.length > 5
                    ? 'geekblue'
                    : 'green'
                "
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link" @click.prevent> ... </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="0">
                    <div class="">
                      <a-menu-item @click="showModal">
                        <UIcon name="i-material-symbols-edit-outline"
                      /></a-menu-item>
                      <a-modal v-model:open="open" title="Sửa" @ok="handleOk">
                        <div class="">
                          <div class="bg-white py-2">
                            <div class="pb-4">
                              <label
                                for="email"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Tên danh mục
                              </label>
                              <div class="mt-1">
                                <a-input
                                  class="w-[450px] h-[45px]"
                                  placeholder="Nhập tên danh mục"
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
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item class="h-[40px]">
                    <a-popconfirm
                      title="Bạn có muốn xóa không?"
                      ok-text="Yes"
                      cancel-text="No"
                      @confirm="confirm"
                      @cancel="cancel"
                    >
                      <a class="flex justify-center items-center" href="#"
                        ><UIcon name="i-ic-baseline-delete-outline"
                      /></a>
                    </a-popconfirm>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { message } from "ant-design-vue";
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
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
  },
];

const data = ref([
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
]);
const filteredOrders = computed(() => {
  return data.value.filter((order) => {
    const matchesQuery = order.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesStatus =
      currentStatus.value === "All Orders" ||
      order.tags.includes(currentStatus.value.toLowerCase());
    return matchesQuery && matchesStatus;
  });
});
const searchQuery = ref("");
const currentStatus = ref("All Orders");
const filterOrders = (status) => {
  currentStatus.value = status;
};
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};
</script>
