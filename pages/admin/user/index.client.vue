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
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
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
        <NuxtLink to="/admin/user/add-user" class="">
          <a-button type="primary">Thêm người dùng</a-button>
        </NuxtLink>
      </div>
      <a-table
        :columns="columns"
        :data-source="userStore.userAdmin?.users"
        :loading="userStore.isLoading"
      >
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'avatar'">
            <a-image
              class="w-5 h-5 rounded-full"
              :src="record.avatar.replace('=s96-c', '')"
            />
          </template>
          <template v-if="column.dataIndex === 'user_info'">
            <p class="p-0">
              {{ record.fullname }}
            </p>
            <p class="p-0">
              {{ record.email }}
            </p>
            <p class="p-0">
              {{ record.phone }}
            </p>
          </template>
          <template v-if="column.key === 'address'">
            <span>
              {{ record.address_detail }}
            </span>
          </template>
          <template v-else-if="column.key === 'role'">
            <a-tag :bordered="false" v-if="record.role.name === UserRole.ADMIN">
              Quản trị viên
            </a-tag>
            <a-tag :bordered="false" v-if="record.role.name === UserRole.USER">
              Người dùng
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.role.name === UserRole.STUDENT"
            >
              Sinh viên
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.role.name === UserRole.MANAGER"
            >
              Thủ thư
            </a-tag>
          </template>
          <template v-else-if="column.key === 'google_id'">
            <IconTick v-if="record.google_id" />
            <IconMul v-else />
          </template>
          <template v-else-if="column.key === 'has_wallet'">
            <IconTick v-if="record.has_wallet" />
            <IconMul v-else />
          </template>
          <template v-else-if="column.key === 'citizen_identity_card'">
            <IconTick v-if="record.citizen_identity_card" />
            <IconMul v-else />
          </template>

          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === UserStatus.ACTIVE"
              color="green"
            >
              Công khai
            </a-tag>
            <a-tag
              :bordered="false"
              v-else="record.status === UserStatus.INACTIVE"
              color="yellow"
            >
              Đang ẩn
            </a-tag>
            <a-tag
              :bordered="false"
              v-else="record.status === UserStatus.DELETED"
              color="red"
            >
              Đã xóa
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="black">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModalDetail(record.id)"
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                >
                  <UIcon class="text-lg" name="i-icon-park-outline-eyes" />
                </button>
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
                    <NuxtLink :to="`/admin/user/edit/${record.id}`">
                      <a-menu-item key="2" class="p-4">
                        <span class="flex items-center gap-2">
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
                          class="flex items-center gap-1"
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
      <UserAdminDetail
        :openModalDetail="openModalDetail"
        :openModal="CloseModalDetail"
        :userDetailId="userDetailId"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserStatus } from "~/types/admin/user";
import { UserRole } from "~/types/admin/user";
const userStore = useUserStore();
const userDetailId = ref<string>();
const openModalDetail = ref<boolean>(false);
useAsyncData(async () => {
  await userStore.getUser({});
});

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
    title: "Ảnh đại diện",
    dataIndex: "avatar",
    key: "avatar",
    width: "120px",
  },
  {
    title: "Thông tin liên hệ",
    dataIndex: "user_info",
    key: "user_info",
    width: "200px",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
    width: "200px",
  },
  {
    title: "Ví tài khoản",
    dataIndex: "has_wallet",
    key: "has_wallet",
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Xác thực tài khoản",
    dataIndex: "citizen_identity_card",
    key: "citizen_identity_card",
  },
  {
    title: "Google",
    dataIndex: "google_id",
    key: "google_id",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
  },
];

const CloseModalDetail = () => {
  openModalDetail.value = false;
};
const showModalDetail = (id) => {
  openModalDetail.value = true;
  userDetailId.value = id;
};
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
</script>
