<template>
  <div>
    <h3 class="font-bold pb-5">Rút tiền</h3>
    <div
      class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5 space-y-5"
    >
      <div class="border-b border-rtgray-50 space-y-5 pb-5">
        <div class="border border-orange-400 p-5 rounded-lg bg-orange-50">
          <p class="text-sm">Số dư ví:</p>
          <p class="font-bold text-orange-400">500.000đ</p>
        </div>
        <div class="border border-orange-400 p-5 rounded-lg">
          <p class="text-sm">Số tiền cần rút:</p>
          <p class="font-bold text-orange-400">100.000đ</p>
        </div>
      </div>
      <p class="font-bold">Hình thức nhận tiền</p>
      <div>
        <a-radio-group name="radioGroup" class="flex gap-5">
          <a-radio
            value="shipper"
            class="w-1/2 py-5 px-10 border border-orange-400 rounded-lg"
          >
            Nhận trực tiếp tại thư viện
          </a-radio>
          <a-radio
            value="library"
            class="w-1/2 py-5 px-10 border border-orange-400 rounded-lg"
          >
            Chuyển khoản qua ngân hàng
          </a-radio>
        </a-radio-group>
      </div>
      <div class="flex gap-2">
        <p class="font-bold">Địa chỉ thư viện:</p>
        <span
          >Lô 42, đường số 3, Công viên phần mềm Quang Trung, phường Tân Chánh
          Hiệp, Quận 12, TP HCM
        </span>
      </div>
      <div class="flex gap-2 justify-end">
        <a-button class="h-10 rounded-lg">Hủy</a-button>
        <a-button
          @click="showModal"
          class="h-10 rounded-lg border-none bg-orange-500 !text-white"
        >
          Rút tiền
        </a-button>
      </div>
      <a-modal
        v-model:open="open"
        width="1000px"
        title="Basic Modal"
        @ok="handleOk"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
  </div>
</template>
<script lang="ts" setup>
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};
</script>
