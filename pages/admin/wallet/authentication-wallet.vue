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
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <div class="text-xl text-[#1e293b] font-semibold pb-4">
        Thông tin cá nhân
      </div>
      <div class="w-1/2 md:block hidden pb-4">
        <div class="flex">
          <a-dropdown :open="valueSearch ? true : false">
            <a-input
              v-model:value="valueSearch"
              placeholder="Nhập mã kệ để tìm kiếm"
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
                    @click="showConfirm(user)"
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
        <div class="pb-2">
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
        <div class="pb-2">
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
        <div class="pb-2">
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

      <div class="text-xl text-[#1e293b] font-semibold pb-4">
        Thông tin căn cước
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div class="pb-2">
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
        <div class="pb-2">
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
        <div class="pb-2">
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
        <div class="pb-2">
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
      </div>
      <div class="flex gap-4"></div>

      <div class="flex justify-end items-end gap-2">
        <a-button danger html-type="button" class="mt-4">Hủy</a-button>
        <a-button type="primary" html-type="submit" class="mt-4">Cập nhật</a-button>
      </div>
    </div>
  </div>
</template>
<script setup>
const userStore = useUserStore();
const valueSearch = ref("");
const userShow = ref({});
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
const showConfirm = (user) => {
  Modal.confirm({
    title: "Bạn có muốn thêm sách này vào kệ không?",
    onOk() {
      userShow.value = user;
      valueSearch.value = "";
    },
    onCancel() {
      console.log("Cancel");
    },
    class: "test",
  });
};
</script>
