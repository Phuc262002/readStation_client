<template>
  <a-modal
    v-model:open="open"
    width="70%"
    :footer="null"
    :onCancel="handleClose"
  >
    <div
      v-if="userStore.isLoading"
      class="flex justify-center items-center min-h-[50vh]"
    >
      <a-spin size="large" />
    </div>
    <div v-else class="space-y-5">
      <div class="flex justify-between gap-4">
        <div class="grow">
          <h1 class="font-bold text-xl">
            Thông tin khách hàng “ Tôn Thất An Khương“
          </h1>
        </div>
      </div>
      <div
        class="bg-[white] rounded-lg h-auto w-full flex flex-col gap-3 space-y-5"
      >
        <div class="grid md:grid-cols-2 gap-5">
          <div class="md:col-span-1 space-y-3 border-r border-gray-200">
            <div class="grid grid-cols-3">
              <span class="text-base col-span-1">Vai trò: </span>
              <span class="text-base col-span-2">{{
                userStore?.user?.role?.name
              }}</span>
            </div>
            <div class="grid grid-cols-3">
              <span class="text-base col-span-1">Đăng nhập: </span>
              <span class="text-base">{{
                userStore?.user?.google_id ? "Google" : "Thông thường"
              }}</span>
            </div>
            <div class="grid grid-cols-3">
              <span class="text-base col-span-1">Ảnh đại diện: </span>
              <span class="text-base">
                <a-image
                  class="rounded-md"
                  width="60px"
                  height="60px"
                  :src="userStore?.user?.avatar"
                  alt="Ảnh đại diện"
                />
              </span>
            </div>
          </div>

          <div class="md:col-span-1 space-y-3">
            <div class="grid md:grid-cols-6 gap-5">
              <div class="col-span-4 space-y-3">
                <div class="grid grid-cols-5">
                  <span class="text-base col-span-3">Xác thực tài khoản: </span>
                  <span class="text-base col-span-2">
                    <IconTick v-if="userStore?.user?.email_verified_at" />
                    <IconMul v-else />
                  </span>
                </div>
                <div class="grid grid-cols-5">
                  <span class="text-base col-span-3">Ví tài khoản: </span>
                  <span class="text-base col-span-2">
                    <IconTick v-if="userStore?.user?.has_wallet" />
                    <IconMul v-else />
                  </span>
                </div>
                <div class="grid grid-cols-5">
                  <span class="text-base col-span-3">Trạng thái: </span>
                  <span class="text-base col-span-2">
                    <a-tag
                      :bordered="false"
                      v-if="userStore?.user?.status === UserStatus.ACTIVE"
                      color="green"
                    >
                      Công khai
                    </a-tag>
                    <a-tag
                      :bordered="false"
                      v-else="userStore?.user?.status === UserStatus.INACTIVE"
                      color="yellow"
                    >
                      Đang ẩn
                    </a-tag>
                    <a-tag
                      :bordered="false"
                      v-else="userStore?.user?.status === UserStatus.DELETED"
                      color="red"
                    >
                      Đã xóa
                    </a-tag>
                  </span>
                </div>
              </div>
              <div class="col-span-2 grid justify-items-end">
                <a-button type="primary" class="" @click="handleClose">
                  Khóa tài khoản
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <div
          class="md:col-span-1 space-y-3 md:border-r md:border-gray-200 md:pr-5"
        >
          <h1>Thông tin cá nhân</h1>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Họ và tên: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.fullname }}
            </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Ngày sinh: </span>
            <span class="text-base col-span-4"> 1 </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Số điện thoại: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.phone }}
            </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Email: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.email }}
            </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Giới tính: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.gender }}
            </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Công việc: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.job }}
            </span>
          </div>
        </div>

        <div class="md:col-span-1 space-y-3">
          <h1>Thông tin CMT/CCCD</h1>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">CMT/CCCD: </span>
            <span class="text-base col-span-3">
              {{ userStore.user?.citizen_identity_card?.citizen_code }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Họ tên: </span>
            <span class="text-base col-span-3">
              {{ userStore.user?.citizen_identity_card?.citizen_name }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Ngày cấp: </span>
            <span class="text-base col-span-3">
              {{
                $dayjs(
                  userStore.user?.citizen_identity_card?.date_of_issue
                ).format(" DD/MM/YYYY ")
              }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Nơi cấp: </span>
            <span class="text-base col-span-3">
              {{ userStore.user?.citizen_identity_card?.place_of_issue }}
            </span>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <div
          class="md:col-span-1 space-y-3 md:border-r md:border-gray-200 md:pr-5"
        >
          <h1>Địa chỉ</h1>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Tỉnh/Thành phố: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.province }}
            </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Quận/Huyện: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.district }}
            </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Phường/Xã: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.ward }}
            </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Đường: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.street }}
            </span>
          </div>
          <div class="grid grid-cols-6">
            <span class="text-base col-span-2">Địa chỉ cụ thể: </span>
            <span class="text-base col-span-4">
              {{ userStore.user?.address_detail }}
            </span>
          </div>
        </div>

        <div class="md:col-span-1 space-y-3">
          <h1>Thông tin sinh viên</h1>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">ID sinh viên: </span>
            <span class="text-base col-span-3">
              {{ userStore.user?.student_id_card?.student_code }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Họ tên: </span>
            <span class="text-base col-span-3">
              {{ userStore.user?.student_id_card?.student_code }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Thời hạn thẻ: </span>
            <span class="text-base col-span-3">
              {{ userStore.user?.student_id_card?.student_card_expired }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Trường: </span>
            <span class="text-base col-span-3">
              {{ userStore.user?.student_id_card?.place_of_study }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end items-end gap-2">
      <a-button @click="handleClose" html-type="submit" class="mt-4"
        >Đóng</a-button
      >
    </div>
  </a-modal>
</template>
<script setup>
import { UserStatus } from "~/types/admin/user";
import { UserRole } from "~/types/admin/user";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const userStore = useUserStore();
const props = defineProps({
  userDetailId: String,
  openModalDetail: Boolean,
  openModal: Function,
});
const userDetailId = ref(props.userDetailId);
const open = ref(props.openModalDetail);
watch(
  () => props.openModalDetail,
  (newVal) => {
    open.value = newVal;
  }
);
watch(
  () => props.userDetailId,
  (newVal) => {
    userDetailId.value = newVal;
  }
);
useAsyncData(
  async () => {
    console.log(userDetailId.value);
    await userStore.getOneUser(userDetailId.value);
  },
  {
    watch: [userDetailId],
    initialCache: false,
  }
);
const handleClose = async () => {
  props.openModal();
};
</script>
