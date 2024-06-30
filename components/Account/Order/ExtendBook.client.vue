<template>
  <div>
    <a-modal
      v-model:open="props.openModalExtend"
      :footer="null"
      width="50%"
      :onCancel="handleCloseExtend"
    >
      <div class="mt-5 space-y-5">
        <h3 class="font-bold text-base">
          Bạn muốn gia hạn sách “Cho tôi xin một vé đi tuổi thơ - Phiên bản năm
          2024” ?
        </h3>

        <div class="grid grid-cols-12 px-5">
          <div class="col-span-4">
            <img
              src=""
              alt=""
              class="w-[114px] h-[176px] shadow-lg shadow-gray-500"
            />
          </div>
          <div class="col-span-8 text-sm space-y-3">
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Tên sách:</span>
              <span class="col-span-3"> adsa </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Tác giả:</span>
              <span class="col-span-3"> sdfdsv </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày thuê:</span>
              <span class="col-span-3"> 0 / 3 </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày hết hạn cũ:</span>
              <span class="col-span-3"> adsa </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày hết hạn mới:</span>
              <span class="col-span-3"> sdfdsv </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Phí gia hạn:</span>
              <span class="col-span-3"> 0 / 3 </span>
            </div>
          </div>
        </div>
        <p>
          Quý khách vui lòng bấm vào nút xác nhận bên dưới để hoàn tất quá trình
          gia hạn thời gian thuê sách
        </p>
        <p class="text-tag-text-06">
          Xin lưu ý rằng quý khách cần trả sách đúng hạn để tránh các khoản phí
          phạt. Nếu có bất kỳ thắc mắc nào hoặc cần thêm thông tin, xin vui lòng
          liên hệ với chúng tôi qua địa chỉ email của thư viện hoặc gọi đến số
          điện thoại 0987654321 để được hỗ trợ
        </p>
        <div class="flex justify-end gap-2">
          <a-button class="h-10" @click="handleCloseExtend"> Hủy </a-button>

          <a-button class="h-10 bg-orange-500 !text-white border-none">
            Xác nhận
          </a-button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  openModalExtend: Boolean,
  closeModalExtend: Function,
});
const open = ref(props.openModalExtend);

const handleCloseExtend = async () => {
  props.closeModalExtend();
};
</script>
