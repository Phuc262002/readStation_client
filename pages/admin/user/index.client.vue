<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Danh sách người dùng
        </h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <a-table :columns="columns" :data-source="data">
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'avatar'">
            <img
              :src="record.avatar"
              alt="Avatar"
              style="width: 50px; height: 50px"
            />
          </template>
          <template v-if="column.dataIndex === 'name'">
            <a>{{ text }}</a>
          </template>
          <template v-else-if="column.key === 'action'">
            <span>
              <a>Invite 一 {{ record.name }}</a>
              <a-divider type="vertical" />
              <a>Delete</a>
              <a-divider type="vertical" />
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const columns = [
  {
    title: "Hình ảnh",
    dataIndex: "avatar",
    key: "avatar",
  },
  {
    title: "Họ tên",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Giới tính",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    avatar: "../../../assets/images/khuong.jpg",
    fullname: "John Brown",
    gender: "Nam",
    email: "nguyenvana@gmail.com",
    phone: "0123456789",
    role: "Admin",
  },
];
</script>
