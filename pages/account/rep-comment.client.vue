<template>
  <div>
    <h3 class="font-bold">Trả lời bình luận</h3>

    <div class="p-5 bg-white mt-5 shadow-lg rounded-xl">
      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Bài viết </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <!--  -->
          <template v-else-if="column.key === 'tags'">
            <div>
              <span>Bình luận trên comment của người khác</span>
            </div>
          </template>
          <!--  -->
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
          <!--  -->
        </template>
      </a-table>
    </div>
  </div>
</template>
<script setup lang="ts">
const columns = [
  {
    title: "Bài viết",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Nội dung",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Trả lời cho",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Thời gian bình luận",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
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
