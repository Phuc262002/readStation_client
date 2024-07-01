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
        <div class="w-1/2 flex items-center gap-2">
          <div class="relative w-2/3 md:block hidden">
            <div class="flex">
              <a-input
                placeholder="Nhập thông tin liên hệ để tìm kiếm"
                class="h-10"
                v-model:value="valueSearch"
              >
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
            </div>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <UIcon class="text-gray-500" name="i-material-symbols-search" />
            </div>
          </div>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item
                  @click="statusValue({ value: 'active', label: 'Công khai' })"
                  >Công khai</a-menu-item
                >
                <a-menu-item
                  @click="statusValue({ value: 'inactive', label: 'Đang ẩn' })"
                  >Đang ẩn</a-menu-item
                >
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ queryStatus.label ? queryStatus.label : "Trạng thái" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </div>

        <NuxtLink to="/admin/user/create-user" class="">
          <a-button type="primary">Thêm người dùng</a-button>
        </NuxtLink>
      </div>
      <a-table
        :columns="columns"
        :data-source="userStore.userAdmin?.users"
        :loading="userStore.isLoading"
        :pagination="false"
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
              class="bg-tag-bg-09 text-tag-text-09"
            >
              Công khai
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === UserStatus.INACTIVE"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đang ẩn
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === UserStatus.DELETED"
              class="bg-tag-bg-06 text-tag-text-06"
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
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
        </template>
      </a-table>
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="userStore?.userAdmin?.totalResults"
          :pageSize="userStore?.userAdmin?.pageSize"
          show-less-items
        />
      </div>
      <UserAdminDetail
        :openModalDetail="openModalDetail"
        :openModal="CloseModalDetail"
        :userDetailId="userDetailId"
      />
    </div>
  </div>
</template>

<script setup>
import { UserStatus } from "~/types/admin/user";
import { UserRole } from "~/types/admin/user";
const current = ref(1);
const userStore = useUserStore();
const userDetailId = ref();
const openModalDetail = ref(false);
const valueSearch = ref("");
const queryStatus = ref({
  value: "",
  label: "",
});
const statusValue = ({ value, label }) => {
  queryStatus.value.value = value;
  queryStatus.value.label = label;
};
useAsyncData(
  async () => {
    await userStore.getUser({
      page: current.value,
      search: valueSearch.value,
      status: queryStatus.value.value,
    });
  },
  {
    immediate: true,
    watch: [current, valueSearch, queryStatus.value],
  }
);

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
</script>
