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
          <template v-else-if="column.key === 'role'">
            <span>
              <a-tag
                :bordered="false"
                :color="record.role === 'active' ? 'green' : 'volcano'"
              >
                {{ record.role }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                 @click="showModal"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <div>
                    
                      <UIcon
                        class="group-hover:text-[#212122]"
                        name="i-icon-park-outline-eyes"
                      />
                    
                    <a-modal v-model:open="open" title="Sửa" width="70%">
                      <div class="flex justify-between gap-4">
                        <div class="grow">
                          <h1 class="font-bold text-xl">Bài viết số 1</h1>
                        </div>
                        
                      </div>
                      <div
                        class="flex border border-transparent border-b-gray-300 pb-2"
                      >
                        <div class="w-1/5">
                          <h4 class="font-bold">Tên người viết</h4>
                        </div>
                        <div class="w-4/5">Huỳnh Tuấn Kiệt</div>
                      </div>
                    </a-modal>
                  </div></button
                >
              </a-tooltip>

              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#131313]"
                    name="i-solar-menu-dots-bold"
                  />
                </button>
                <template #overlay>
                  <a-menu>
                    <NuxtLink to="">
                      <a-menu-item key="2" class="p-4">
                        <span class="flex items-center gap-2 text-blue-400">
                          <UIcon
                            class="group-hover:text-[green]"
                            name="i-material-symbols-edit-outline"
                          />
                          <span>Sửa</span>
                        </span>
                      </a-menu-item>
                    </NuxtLink>

                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button
                           @click="showDeleteConfirm(record?.id)"
                          class="flex items-center gap-1 text-blue-400"
                        >
                          <UIcon
                            class="group-hover:text-[red] text-lg"
                            name="i-material-symbols-delete-outline"
                          />
                          <span>Xóa</span>
                        </button>
                      </span>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>



const showDeleteConfirm = (id: string) => {
  Modal.confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onDelete(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
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
    avatar: "https://thanhnien.mediacdn.vn/Uploaded/nhutnq/2022_10_02/220928180903-03-dall-e-ai-2189.jpg",
    fullname: "John Brown",
    gender: "Nam",
    email: "nguyenvana@gmail.com",
    phone: "0123456789",
    role: "Admin",
  },
];
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
</script>
