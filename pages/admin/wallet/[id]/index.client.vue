<template>
  <div class="space-y-2">
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">
          Ví của Tôn Thất An Khương
        </h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-[white] rounded-lg h-auto w-full flex flex-col gap-3 p-5">
      <div class="flex justify-between">
        <div class="flex justify-start gap-3 items-center">
          <span class="text-2xl font-bold">Thông tin cá nhân</span>
        </div>
        <div class="flex gap-2">
          <a-button>Chặn ví</a-button>
          <a-button type="primary">Đóng băng ví</a-button>
          <a-button type="primary">Khôi phục ví</a-button>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <div class="md:col-span-1 space-y-3 border-r border-gray-200">
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Họ và tên: </span>
            <span class="text-base col-span-2">{{
              walletAdminStore?.oneWalletAdmin?.user?.fullname
            }}</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Số điện thoại: </span>
            <span class="text-base">{{
              walletAdminStore?.oneWalletAdmin?.user?.phone
            }}</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Email: </span>
            <span class="text-base">{{
              walletAdminStore?.oneWalletAdmin?.user?.email
            }}</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">CMT/CCCD: </span>
            <span class="text-base">{{
              walletAdminStore?.oneWalletAdmin?.user?.citizen_identity_card
                ?.citizen_code
            }}</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Ảnh đại diện: </span>
            <span class="text-base">
              <a-image
                class="rounded-md"
                width="60px"
                height="60px"
                :src="walletAdminStore?.oneWalletAdmin?.user?.avatar"
                alt="Ảnh đại diện"
              />
            </span>
          </div>
        </div>

        <div class="md:col-span-1 space-y-3">
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Trạng thái ví: </span>
            <span class="text-base">
              <span class="bg-tag-bg-10 text-tag-text-10 px-2 py-1 rounded">
                {{
                  walletAdminStore?.oneWalletAdmin?.status === "active"
                    ? "Hoạt động"
                    : "Đóng băng"
                }}
              </span>
            </span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Số tiền trong ví: </span>
            <span class="text-base">500.000 đ</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Tiền cọc đang thuê sách: </span>
            <span class="text-base">200.000 đ</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Số tiền đang xử lý: </span>
            <span class="text-base">100.000 đ</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="text-base col-span-1">Số tiền đang rút: </span>
            <span class="text-base">20.000 đ</span>
          </div>
        </div>
      </div>
    </div>
    <WalletHistory />
  </div>
</template>
<script setup>
const route = useRoute();
const walletId = route.params.id;
const walletAdminStore = useWalletAdminStore();
useAsyncData(async () => {
  await walletAdminStore.getOneWallet(walletId);
});


</script>
