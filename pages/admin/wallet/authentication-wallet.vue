<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Xác thực ví</h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 space-y-5">
      <div class="text-xl text-[#1e293b] font-semibold">Thông tin cá nhân</div>
      <div class="w-1/2 md:block hidden">
        <div class="flex">
          <a-dropdown :open="valueSearch ? true : false">
            <a-input
              v-model:value="valueSearch"
              placeholder="Tìm kiếm người dùng"
              class="h-10"
              allow-clear
              @click.prevent
            >
              <template #prefix>
                <SearchOutlined />
              </template>
            </a-input>
            <template #overlay>
              <a-menu class="overflow-auto max-h-[400px] w-full">
                <a-menu-item v-if="userStore.isLoading">
                  <div class="p-10 flex justify-center">
                    <a-spin />
                  </div>
                </a-menu-item>
                <a-menu-item
                  v-else
                  v-for="(user, index) in userStore?.userAdmin?.users"
                  :key="index"
                >
                  <div
                    class="flex justify-start gap-5 items-center"
                    v-if="userStore?.userAdmin?.users"
                    @click="importUser(user)"
                  >
                    <div>
                      <a-avatar :src="user?.avatar" :size="64"> </a-avatar>
                    </div>
                    <div>
                      <div class="text-base font-medium">
                        {{ user?.fullname }}
                      </div>
                      <div class="text-base font-medium">{{ user?.email }}</div>
                      <div class="text-base font-medium">{{ user?.phone }}</div>
                    </div>
                  </div>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <label for="fullname" class="block text-sm font-medium text-gray-700">
            Họ và tên
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="userShow.fullname"
              class="w-full h-10"
              placeholder="Nhập họ và tên"
              disabled
            />
          </div>
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="userShow.phone"
              class="w-full h-10"
              placeholder="  Số điện thoại"
              disabled
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            email
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="userShow.email"
              class="w-full h-10"
              placeholder="Nhập email"
              disabled
            />
          </div>
        </div>
      </div>

      <div class="text-xl text-[#1e293b] font-semibold">Thông tin căn cước</div>
      <form @submit.prevent="showConfirm" class="grid grid-cols-4 gap-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Họ tên khai sinh
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="cccd.citizen_name"
              class="w-full h-10"
              placeholder="Nhập họ tên khai sinh"
              required
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            CMT/CCCD
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="cccd.citizen_code"
              class="w-full h-10"
              placeholder="Nhập số CMT/CCCD"
              required
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Ngày cấp
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="cccd.date_of_issue"
              class="w-full h-10"
              type="date"
              required
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Nơi cấp
          </label>
          <div class="mt-1">
            <a-input
              v-model:value="cccd.place_of_issue"
              class="w-full h-10"
              placeholder="Nhập nơi cấp"
              required
            />
          </div>
        </div>
        <div class="flex justify-end gap-2 col-span-4">
          <a-button danger html-type="button">Hủy</a-button>
          <a-button type="primary" html-type="submit"> Cập nhật </a-button>
        </div>
      </form>
    </div>
    <a-modal :footer="null" v-model:open="open">
      <div class="flex flex-col items-center bg-white py-2">
        <div class="py-2 text-center">
          <ExclamationCircleOutlined
            class="text-tag-text-01 mt-10 mb-5"
            style="font-size: 80px"
          />

          <span class="block text-2xl font-medium text-tag-text-01 my-2">
            Bạn có chắc chắn muốn xác thực ví cho người dùng
            <span>{{ userShow.fullname }}</span
            >?
          </span>
          <span class="block text-base font-medium my-2">
            Sau khi xác thực, ví của người dùng sẽ được kích hoạt và hoạt động
            bình thường.
          </span>
        </div>
      </div>
      <div class="flex justify-end items-end gap-2">
        <a-button danger html-type="button" class="mt-4">Hủy</a-button>
        <a-button
          :loading="walletAdminStore.isSubmitting"
          @click="onSubmit"
          type="primary"
          html-type="submit"
          class="mt-4"
          >Xác thực</a-button
        >
      </div>
    </a-modal>
  </div>
</template>
<script setup>
const userStore = useUserStore();
const valueSearch = ref("");
const userShow = ref({});
const walletAdminStore = useWalletAdminStore();
const open = ref(false);
const showModal = () => {
  open.value = true;
};
const hideModal = () => {
  open.value = false;
};

const cccd = ref({
  citizen_code: "",
  citizen_name: "",
  date_of_issue: "",
  place_of_issue:
    "CỤC TRƯỞNG CỤC CẢNH SÁT QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI",
});
useAsyncData(
  () => {
    userStore.getUser({
      search: valueSearch.value,
    });
  },
  {
    watch: valueSearch,
  }
);
const onSubmit = async () => {
  if (!userShow.value.id) {
    message.error("Vui lòng chọn người dùng");
    return;
  }
  // console.log({
  //   ...cccd.value,
  //   user_id: userShow.value.id,
  // });
  try {
    const data = await walletAdminStore.verificationWallet({
      ...cccd.value,
      user_id: userShow.value.id,
    });
    console.log(data.error.value.data);
    if (data.error.value.data) {
      message.error(data.error.value.data.errors);
    } else {
      message.success("Xác thực ví thành công");
    }
  } catch (error) {
    console.log(error);
    message.error("Xác thực ví thất bại");
  }
  hideModal();
};
const importUser = (user) => {
  userShow.value = user;
  valueSearch.value = "";
};
const showConfirm = () => {
  showModal();
};
</script>
