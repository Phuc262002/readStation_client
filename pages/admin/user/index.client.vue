<template>
  <div class="space-y-5">
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Danh sách người dùng
        </h5>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
    >
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-04 text-tag-text-04">
              <UIcon class="text-lg w-10 h-10" name="i-grommet-icons-cubes"
            /></a-tag>

            <div class="text-tag-text-04">
              <p class="font-normal text-base">Tất cả</p>
              <p class="font-bold text-xl">
                {{ userStore?.userDashboard?.totalUser }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag
              :bordered="false"
              class="flex items-center p-1 bg-tag-bg-04 text-tag-text-04"
            >
              <UIcon class="text-lg w-10 h-10" name="i-grommet-icons-cubes"
            /></a-tag>

            <div class="text-tag-text-04">
              <p class="font-normal text-base">Quản trị viên</p>
              <p class="font-bold text-xl">
                {{ userStore?.userDashboard?.totalAdmin }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4 gap-2">
            <a-tag
              :bordered="false"
              class="flex items-center p-2 bg-tag-bg-04 text-tag-text-03"
            >
              <UIcon class="text-lg w-10 h-10" name="i-bi-box-arrow-in-down"
            /></a-tag>

            <div class="text-tag-text-03">
              <p class="font-normal text-base">Thủ thư</p>
              <p class="font-bold text-xl">
                {{ userStore?.userDashboard?.totalManager }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-02 text-tag-text-02">
              <UIcon class="text-lg w-10 h-10" name="i-iconoir-user"
            /></a-tag>

            <div class="text-tag-text-02">
              <p class="font-normal text-base">Khách hàng</p>
              <p class="font-bold text-xl">
                {{ userStore?.userDashboard?.totalUserUnverified }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-01 text-tag-text-01">
              <UIcon
                class="text-lg w-10 h-10"
                name="i-ph-user-circle-check-thin"
            /></a-tag>

            <div class="text-tag-text-01">
              <p class="font-normal text-base">HS/SV</p>
              <p class="font-bold text-xl">
                {{ userStore?.userDashboard?.totalStudent }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag
              :bordered="false"
              class="flex items-center p-1 bg-tag-bg-11 text-tag-text-11"
            >
              <UIcon class="text-lg w-10 h-10" name="i-bi-bookshelf"
            /></a-tag>

            <div class="text-tag-text-11">
              <p class="font-normal text-base">KH đã xác thực</p>
              <p class="font-bold text-xl">
                {{ userStore?.userDashboard?.totalUserVerified }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <div class="flex justify-between pb-4">
        <div class="flex items-center gap-2">
          <div class="md:block hidden">
            <div class="flex">
              <a-input
                placeholder="Nhập thông tin liên hệ để tìm kiếm"
                class="h-10 w-[400px]"
                v-model:value="valueSearch"
              >
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
            </div>
          </div>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item
                  @click="statusValue({ value: '', label: 'Tất cả' })"
                  >Tất cả</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'active', label: 'Đang hoạt động' })
                  "
                  >Đang hoạt động</a-menu-item
                >
                <a-menu-item
                  @click="statusValue({ value: 'inactive', label: 'Đã chặn' })"
                  >Đã chặn</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'banned', label: 'Vô hiệu hóa' })
                  "
                  >Vô hiệu hóa</a-menu-item
                >
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ queryStatus.label ? queryStatus.label : "Tất cả" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>
          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item
                  @click="roleValue({ value: '', label: 'Tất cả' })"
                  >Tất cả</a-menu-item
                >
                <a-menu-item
                  @click="
                    roleValue({ value: 'user', label: 'Người dùng' })
                  "
                  >Người dùng</a-menu-item
                >
                <a-menu-item
                  @click="roleValue({ value: 'student', label: 'HSSV' })"
                  >HSSV</a-menu-item
                >
                <a-menu-item
                  @click="
                    roleValue({ value: 'manager', label: 'Thủ thư' })
                  "
                  >Thủ thư</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'admin', label: 'Quản trị' })
                  "
                  >Quản trị</a-menu-item
                >
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ queryrole.label ? queryrole.label : "Tất cả" }}
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
            <a-tag
              :bordered="false"
              v-if="record.role.name === UserRole.ADMIN"
              class="bg-tag-bg-04 text-tag-text-04"
            >
              Quản trị
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.role.name === UserRole.USER"
              class="bg-tag-bg-02 text-tag-text-02"
            >
              Khách hàng
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.role.name === UserRole.STUDENT"
              class="bg-tag-bg-01 text-tag-text-01"
            >
              Sinh viên
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.role.name === UserRole.MANAGER"
              class="bg-tag-bg-03 text-tag-text-03"
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
              Đang hoạt động
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === UserStatus.INACTIVE"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đã chặn
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === UserStatus.DELETED"
              class="bg-tag-bg-06 text-tag-text-06"
            >
              Đã xóa
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === UserStatus.BANNED"
              class="bg-tag-bg-10 text-tag-text-10"
            >
              Vô hiệu hóa
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
                      <a-menu-item key="1" class="p-4">
                        <button class="flex items-center gap-2">
                          <span>Sửa</span>
                        </button>
                      </a-menu-item>
                    </NuxtLink>

                    <a-menu-item key="2" class="p-4">
                      <button
                        @click="showBannedConfirm(record.id)"
                        class="flex items-center gap-2"
                      >
                        <span>Chặn</span>
                      </button>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
        </template>
      </a-table>
      <UserDashboardConfirm
        :openModalConfirm="openModalConfirm"
        :openModal="CloseModalConfirm"
        :status="status"
        :id="userDashboard"
      />
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
const roleStore = useRoleStore();
const openModalConfirm = ref(false);
const userDetailId = ref();
const userDashboard = ref();
const openModalDetail = ref(false);
const status = ref("");
const queryrole = ref({
  value: "",
  label: "",
});
const valueSearch = ref("");
const queryStatus = ref({
  value: "",
  label: "",
});
const roleValue = ({ value, label }) => {
  queryrole.value.value = value;
  queryrole.value.label = label;
};
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
useAsyncData(async () => {
  await userStore.getDashboardUser({
    page: current.value,
  });
});

useAsyncData(
  async () => {
    await roleStore.getRole({
      role: queryrole.value.value,
      
    });
  },

  {
    immediate: true,
    watch: [queryrole.value],
  }
);

const showBannedConfirm = (id) => {
  openModalConfirm.value = true;
  userDashboard.value = id;
  status.value = "banned";
};
const CloseModalConfirm = () => {
  openModalConfirm.value = false;
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
</script>
