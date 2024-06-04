<template>
  <div class="flex flex-col space-y-6">
    <div>
      <div class="flex items-center gap-2 mb-5">
        <UIcon name="i-material-symbols-person-outline" />
        <h2 class="text-sm font-bold">Tài khoản</h2>
      </div>
      <div
        class="flex-col space-y-2 p-4 bg-white shadow-md shadow-gray-300 rounded-md"
      >
        <div class="flex items-center justify-between border-b pb-2">
          <span>Loại tài khoản</span>
          <span>User</span>
        </div>
        <div class="flex items-center justify-between border-b pb-2">
          <span>Xác minh</span>
          <span></span>
        </div>
        <div class="flex items-center justify-between">
          <span>Ngày mở tài khoản</span>
          <span>18.02.2023</span>
        </div>
      </div>
    </div>
    <div class="">
      <div class="flex items-center gap-2 mb-3">
        <UIcon name="i-ph-users-bold" class="text-base" />
        <h2 class="text-sm font-bold">Kết nối tài khoản</h2>
      </div>
      <div class="bg-white rounded-md shadow-md shadow-gray-300 p-4">
        <div class="flex items-center justify-between">
          <img
            src="../../assets/images/meta-logo.png"
            class="w-[40px] h-[30px]"
            alt=""
          />
          <a-button
            type="dashed"
            class="border border-indigo-400 text-indigo-400"
            >Kết nối</a-button
          >
        </div>
        <div class="pt-4">
          <h2 class="font-bold text-base">Meta</h2>
          <p class="">
            Meta is FlatForms Ins, which used to be called Faccbool Inc
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
