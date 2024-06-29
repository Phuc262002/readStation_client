<template>
  <div class="space-y-2">
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Xác thực tài khoản</h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-[white] rounded-lg h-auto w-full flex flex-col gap-3 p-5">
      <div class="flex justify-between">
        <div class="flex justify-start gap-3 items-center">
          <span class="text-2xl font-bold">Thông tin cá nhân</span>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <div class="md:col-span-1 space-y-3 border-r border-gray-200">
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Vai trò: </span>
            <span class="text-base col-span-2">khách hàng</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Họ và tên: </span>
            <span class="text-base">{{
              verificationRequestsStore.oneVerificationRequest?.user_request
                ?.fullname
            }}</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Ngày sinh: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.dob
              "
              class="text-base"
            >
              {{
                dayjs(
                  verificationRequestsStore.oneVerificationRequest?.user_request
                    ?.dob
                ).format(" DD/MM/YYYY")
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Giới tính: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.gender
              "
              class="text-base"
            >
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.gender === "male"
                  ? "Nam"
                  : "Nữ"
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Số điên thoại: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.phone
              "
              class="text-base"
            >
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.phone
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Email: </span>
            <span class="text-base">
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.email
              }}
            </span>
          </div>
        </div>
        <div class="md:col-span-1 space-y-3">
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Công việc: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.job
              "
              class="text-base"
            >
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.job
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Tỉnh/ Thành phố: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.province_id
              "
              class="text-base"
            >
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.province_id
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Quận/ Huyện: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.district_id
              "
              class="text-base"
            >
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.district_id
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Phường/ Xã: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.ward_id
              "
              class="text-base"
            >
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.ward_id
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Đường: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.street
              "
              class="text-base"
            >
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.street
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Địa chỉ cụ thể: </span>
            <span
              v-if="
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.address_detail
              "
              class="text-base"
            >
              {{
                verificationRequestsStore.oneVerificationRequest?.user_request
                  ?.address_detail
              }}
            </span>
            <span v-else>Chưa có thông tin</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 py-5">
      <div
        v-if="
          verificationRequestsStore.oneVerificationRequest
            ?.verification_card_type === 'citizen_card'
        "
        class="text-xl text-[#1e293b] font-semibold pb-4"
      >
        Thông tin căn cước
      </div>
      <div v-else class="text-xl text-[#1e293b] font-semibold pb-4">
        Thông tin khách cung cấp
      </div>
      <div
        v-if="
          verificationRequestsStore.oneVerificationRequest
            ?.verification_card_type === 'citizen_card'
        "
        class="grid grid-cols-4 gap-4"
      >
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Họ tên khai sinh
          </label>
          <div class="mt-1">
            <a-input
              :value="
                verificationRequestsStore.oneVerificationRequest
                  ?.verification_card_info?.citizen_name
              "
              class="w-full h-10"
              placeholder="Nhập họ tên khai sinh"
              readonly
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            CMT/CCCD
          </label>
          <div class="mt-1">
            <a-input
              :value="
                verificationRequestsStore.oneVerificationRequest
                  ?.verification_card_info?.citizen_name
              "
              class="w-full h-10"
              placeholder="Nhập số CMT/CCCD"
              readonly
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Ngày cấp
          </label>
          <div class="mt-1">
            <a-input
              :value="
                verificationRequestsStore.oneVerificationRequest
                  ?.verification_card_info?.date_of_issue
              "
              class="w-full h-10"
              type="date"
              readonly
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Nơi cấp
          </label>

          <div class="mt-1">
            <a-input
              :value="
                verificationRequestsStore.oneVerificationRequest
                  ?.verification_card_info?.place_of_issue
              "
              class="w-full h-10"
              placeholder="Nhập nơi cấp"
              readonly
            />
          </div>
        </div>
      </div>
      <div v-else class="grid grid-cols-4 gap-4">
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Họ tên khai sinh
          </label>
          <div class="mt-1">
            <a-input
              :value="
                verificationRequestsStore.oneVerificationRequest
                  ?.verification_card_info?.student_name
              "
              class="w-full h-10"
              placeholder="Nhập họ tên khai sinh"
              readonly
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Mã số sinh viên
          </label>
          <div class="mt-1">
            <a-input
              :value="
                verificationRequestsStore.oneVerificationRequest
                  ?.verification_card_info?.student_code
              "
              class="w-full h-10"
              placeholder="Nhập số CMT/CCCD"
              readonly
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Thời hạn thẻ
          </label>
          <div class="mt-1">
            <a-input
              :value="
                verificationRequestsStore.oneVerificationRequest
                  ?.verification_card_info?.student_card_expired
              "
              class="w-full h-10"
              type="date"
              readonly
            />
          </div>
        </div>
        <div class="pb-2">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Trường
          </label>

          <div class="mt-1">
            <a-input
              :value="
                verificationRequestsStore.oneVerificationRequest
                  ?.verification_card_info?.place_of_study
              "
              class="w-full h-10"
              placeholder="Nhập nơi cấp"
              readonly
            />
          </div>
        </div>
      </div>
      <div class="pb-2 mt-5">
        <label class="block text-sm font-medium text-gray-700">
          Hình ảnh khách hàng cung cấp
        </label>
        <div class="flex gap-2 mt-1">
          <a-image
            :src="
              verificationRequestsStore.oneVerificationRequest
                ?.verification_card_image?.front
            "
            alt=""
          />
          <a-image
            :src="
              verificationRequestsStore.oneVerificationRequest
                ?.verification_card_image?.back
            "
            alt=""
          />
        </div>
      </div>

      <div class="flex justify-end items-end gap-2">
        <a-button
          @click="() => navigateTo('/admin/verification-requests')"
          html-type="button"
          class="mt-4"
          >Trở về</a-button
        >
        <div
          class="flex justify-end items-end gap-2"
          v-if="
            verificationRequestsStore.oneVerificationRequest?.status ===
            'pending'
          "
        >
          <a-button
            @click="showModalConfirm('rejected')"
            danger
            html-type="button"
            class="mt-4"
            >Từ chối</a-button
          >
          <a-button
            @click="showModalConfirm('approved')"
            type="primary"
            html-type="submit"
            class="mt-4"
            >Duyệt</a-button
          >
        </div>
      </div>
      <UserAdminConfirm
        :openModalConfirm="openModalConfirm"
        :openModal="CloseModalConfirm"
        :status="status"
        :id="verificationRequestsID"
      />
    </div>
  </div>
</template>
<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const openModalConfirm = ref(false);
const verificationRequestsStore = useVerificationRequestsStore();
const route = useRoute();
const verificationRequestsID = route.params.id;
useAsyncData(async () => {
  if (verificationRequestsID) {
    await verificationRequestsStore.getOneVerificationRequest(
      verificationRequestsID
    );
  }
});

const status = ref("");

const CloseModalConfirm = () => {
  openModalConfirm.value = false;
  status.value = "";
};
const showModalConfirm = (statusModal) => {
  openModalConfirm.value = true;
  status.value = statusModal;
};
</script>
