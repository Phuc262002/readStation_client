<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Tất cả bình luận đã xóa
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
        <!-- <NuxtLink to="/admin/book-case/add-bookcase" class="">
            <a-button type="primary">Thêm bình luận</a-button>
          </NuxtLink> -->
      </div>

      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> parent_id</span>
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
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="gold">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <span
                    class="group hover:bg-[#faad14]/20 bg-[#e4e1e1] cursor-pointer flex items-center justify-center w-8 h-8 rounded-md"
                    ><UIcon
                      class="group-hover:text-[#faad14]"
                      name="i-icon-park-outline-eyes"
                  /></span>
                </a-tooltip>
               
                <a-tooltip placement="top" color="red">
                  <template #title>
                    <span>Khôi ph</span>
                  </template>
                  <span
                    class="group hover:bg-[red]/20 bg-[#e4e1e1] cursor-pointer flex items-center justify-center w-8 h-8 rounded-md"
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
                          name="i-material-symbols-autorenew-rounded"
                      /></button>
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
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
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
    title: "Tên người viết",
    dataIndex: "user_id",
    key: "user_id",
  },
  {
    title: "Tên bài viết",
    dataIndex: "post_id",
    key: "post_id",
  },
  {
    title: "Action",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "123",
    user_id: "New York No. 1 Lake Park",
    post_id: "New York No. 1 Lake Park",
  },
];
</script>
