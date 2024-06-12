<template>
  <div>
    <h2 class="text-sm font-bold pb-5">Bài viết của bạn</h2>
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div class="relative w-1/4 md:block hidden pb-2">
        <div class="flex">
          <input
            type="text"
            class="w-full h-10 border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
            placeholder="Tìm kiếm..."
          />
        </div>
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <UIcon class="text-gray-500" name="i-material-symbols-search" />
        </div>
      </div>
      <!--  -->
      <div class="flex gap-3 text-white pb-5">
        <a-button class="flex items-center gap-1 h-8 bg-orange-500 !text-white">
          <img src="../../assets/images/icon-blog.svg" alt="" />
          <span>Tất cả bài viết</span>
        </a-button>
        <a-button class="flex items-center gap-1 h-8">
          <img src="../../assets/images/icon-public.svg" alt="" />
          <span>Công khai</span>
        </a-button>
        <a-button class="flex items-center gap-1 h-8">
          <img src="../../assets/images/icon-wait-accept.svg" alt="" />
          <span>Chờ duyệt</span>
        </a-button>
        <a-button class="flex items-center gap-1 h-8">
          <img src="../../assets/images/icon-draft.svg" alt="" />
          <span>Nháp</span>
        </a-button>
      </div>
      <!--  -->
      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>
              <smile-outlined />
              Name
            </span>
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
            <span>
              <a>Invite 一 {{ record.name }}</a>
              <a-divider type="vertical" />
              <a>Delete</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">
                More actions
                <down-outlined />
              </a>
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script setup lang="ts">
const columns = [
  {
    title: "Bài viết",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Thời gian",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Lượt bình luận",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Trạng thái",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];

const data = [
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
];
</script>
