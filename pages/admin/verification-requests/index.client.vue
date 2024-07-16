<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-bold">
          Tài khoản chờ duyệt
        </h5>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <div class="flex justify-between pb-4">
        <div class="w-1/2 flex items-center gap-2">
          <div class="md:block hidden">
            <div class="flex">
              <a-input
                placeholder="Nhập"
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
                  @click="
                    statusValue({ value: '', label: 'Tất cả trạng thái' })
                  "
                  >Tất cả trạng thái</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'pending', label: 'Chờ xác thực' })
                  "
                  >Chờ duyệt</a-menu-item
                >
                <a-menu-item
                  @click="statusValue({ value: 'approved', label: 'Đã duyệt' })"
                  >Đã duyệt</a-menu-item
                >
                <a-menu-item
                  @click="statusValue({ value: 'rejected', label: 'Từ chối' })"
                  >Từ chối</a-menu-item
                >
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ queryStatus.label ? queryStatus.label : "Tất cả trạng thái" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item
                  @click="
                    verificationCardTypeValue({
                      value: '',
                      label: 'Tất cả loại xác thức',
                    })
                  "
                  >Tất cả loại xác thức</a-menu-item
                >
                <a-menu-item
                  @click="
                    verificationCardTypeValue({
                      value: 'student_card',
                      label: 'Thẻ sinh viên',
                    })
                  "
                  >Thẻ sinh viên</a-menu-item
                >
                <a-menu-item
                  @click="
                    verificationCardTypeValue({
                      value: 'citizen_card',
                      label: 'CCCD',
                    })
                  "
                  >CCCD</a-menu-item
                >
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{
                queryVerificationCardType.label
                  ? queryVerificationCardType.label
                  : "Tất cả loại xác thức"
              }}
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </div>
      </div>
      <a-table
        :columns="columns"
        :data-source="
          verificationRequestsStore.verificationRequestsAdmin
            ?.verificationRequests
        "
        :loading="verificationRequestsStore.isLoading"
      >
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'user_handle'">
            <p class="p-0">
              {{ record.user_handle?.citizen_identity_card?.citizen_name }}
            </p>
          </template>
          <template v-if="column.dataIndex === 'user_request'">
            <div class="flex gap-4">
              <div>
                <a-image
                  class="w-5 h-5 rounded-full p-0"
                  :width="50"
                  :src="record.user_request?.avatar"
                />
              </div>
              <div>
                <p class="p-0">
                  {{ record.user_request?.email }}
                </p>
                <p class="p-0">
                  {{ record.user_request?.citizen_identity_card?.citizen_name }}
                </p>
              </div>
            </div>
          </template>
          <template v-if="column.key === 'reason'">
            <span>
              {{ record.reason }}
            </span>
          </template>

          <template v-else-if="column.key === 'google_id'">
            <IconTick v-if="record.user_request?.google_id" />
            <IconMul v-else />
          </template>
          <template v-else-if="column.key === 'has_wallet'">
            <IconTick v-if="record.has_wallet" />
            <IconMul v-else />
          </template>
          <template v-else-if="column.key === 'verification_card_type'">
            <a-tag
              :bordered="false"
              v-if="record.verification_card_type === 'citizen_card'"
              class="text-tag-text-09 bg-tag-bg-09"
            >
              CMT/CCCD
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.verification_card_type === 'student_card'"
              class="text-tag-text-10 bg-tag-bg-10"
            >
              Thẻ sinh viên
            </a-tag>
          </template>

          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === VerificationRequestsStatus.PENDING"
              class="text-tag-text-01 bg-tag-bg-01"
            >
              Chờ xác thực
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === VerificationRequestsStatus.APPROVED"
              class="text-tag-text-09 bg-tag-bg-09"
            >
              Đã duyệt
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === VerificationRequestsStatus.REJECTED"
              class="text-tag-text-11 bg-tag-bg-11"
            >
              Từ chối
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <NuxtLink
                class="hover:text-black"
                :to="`/admin/verification-requests/${record.id}`"
              >
                <a-tooltip placement="top" color="black">
                  <template #title>
                    <span>Sửa</span>
                  </template>
                  <button
                    class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                  >
                    <UIcon
                      class="text-lg"
                      name="i-material-symbols-edit-outline"
                    />
                  </button>
                </a-tooltip>
              </NuxtLink>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import { VerificationRequestsStatus } from "~/types/admin/verificationRequests";
const verificationRequestsStore = useVerificationRequestsStore();
const current = ref(1);
const valueSearch = ref("");
const queryStatus = ref({
  value: "",
  label: "",
});
const queryVerificationCardType = ref({
  value: "",
  label: "",
});
const statusValue = ({ value, label }) => {
  queryStatus.value.value = value;
  queryStatus.value.label = label;
};

const verificationCardTypeValue = ({ value, label }) => {
  queryVerificationCardType.value.value = value;
  queryVerificationCardType.value.label = label;
};
useAsyncData(
  async () => {
    await verificationRequestsStore.getVerificationRequests({
      page: current.value,
      search: valueSearch.value,
      status: queryStatus.value.value,
      verification_card_type: queryVerificationCardType.value.value,
    });
  },
  {
    immediate: true,
    watch: [
      current,
      valueSearch,
      queryStatus.value,
      queryVerificationCardType.value,
    ],
  }
);

const columns = [
  {
    title: "Người yêu cầu",
    dataIndex: "user_request",
    key: "user_request",
  },
  {
    title: "Loại xác thực",
    dataIndex: "verification_card_type",
    key: "verification_card_type",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Lý do",
    dataIndex: "reason",
    key: "reason",
    width: "200px",
  },
  {
    title: "Người xử lý",
    dataIndex: "user_handle",
    key: "user_handle",
  },

  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
  },
];
</script>
