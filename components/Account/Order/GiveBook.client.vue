<template>
  <div>
    <a-modal
      v-model:open="props.openModalGive"
      :footer="null"
      width="50%"
      :onCancel="handleCloseGive"
    >
      <div class="mt-5 space-y-5">
        <h3 class="font-bold text-base">
          Bạn muốn trả sách “Tôi thấy hoa vàng trên cỏ xanh - Phiên bản năm 2024
          ”
        </h3>
        <a-radio-group v-model:value="value" class="flex gap-5">
          <a-radio :value="1" class="w-1/2 p-5 border rounded-lg">
            Trả sách trực tiếp tại thư viện
          </a-radio>
          <a-radio :value="2" class="w-1/2 p-5 border rounded-lg">
            Giao sách đến thư viện
          </a-radio>
        </a-radio-group>
        <div class="text-base grid grid-cols-12" v-if="value === 1">
          <p class="font-bold col-span-3">Địa chỉ thư viện:</p>
          <p class="col-span-9">
            Lô 42, đường số 3, Công viên phần mềm Quang Trung, phường Tân Chánh
            Hiệp, Quận 12, TP HCM
          </p>
        </div>
        <div class="grid grid-cols-12 px-5">
          <div class="col-span-3">
            <img
              src="../../../../assets/images/bookshop.jpg"
              alt=""
              class="w-[114px] h-[176px] shadow-lg shadow-gray-500"
            />
          </div>
          <div class="col-span-9 text-sm space-y-3">
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
        <div class="text-sm space-y-5" v-if="value === 2">
          <div class="flex gap-5">
            <div class="w-1/2">
              <label class="font-bold"> Tên của bạn </label>
              <div class="mt-2">
                <a-input
                  size="large"
                  class="w-full"
                  placeholder="Nhập họ tên"
                  required
                />
              </div>
            </div>
            <div class="w-1/2">
              <label class="font-bold"> Số điện thoại </label>
              <div class="mt-2">
                <a-input
                  size="large"
                  class="w-full"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-1/2">
              <label class="font-bold"> Tỉnh/Thành phố </label>
              <div class="mt-2">
                <a-input
                  size="large"
                  class="w-full"
                  placeholder="Nhập Tỉnh/Thành phố"
                  required
                />
              </div>
            </div>
            <div class="w-1/2">
              <label class="font-bold"> Quận/ Huyện </label>
              <div class="mt-2">
                <a-input
                  size="large"
                  class="w-full"
                  placeholder="Nhập Quận/ Huyện"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-1/2">
              <label class="font-bold"> Phường/ Xã </label>
              <div class="mt-2">
                <a-input
                  size="large"
                  class="w-full"
                  placeholder="Nhập Phường/ Xã"
                  required
                />
              </div>
            </div>
            <div class="w-1/2">
              <label class="font-bold"> Đường </label>
              <div class="mt-2">
                <a-input
                  size="large"
                  class="w-full"
                  placeholder="Nhập Đường"
                  required
                />
              </div>
            </div>
          </div>
          <div class="">
            <label class="font-bold"> Địa chỉ lấy sách </label>
            <div class="mt-2">
              <a-textarea placeholder="textarea with clear icon" />
            </div>
          </div>

          <a-select
            size="large"
            v-model:value="select"
            class="w-1/3"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>

          <div class="w-1/2">
            <label class="font-bold"> Phí vận chuyển </label>
            <a-input size="large" class="w-full mt-2" readonly />
          </div>
          <!--  -->
        </div>
        <p>
          Cảm ơn Quý khách đã sử dụng dịch vụ của Read Station. Bằng việc bấm
          chọn xác nhận bên dưới. Quý khách xin vui lòng mang sách đến thư viện
          trong vòng 24-48 giờ để hoàn tất quá trình trả sách. Cảm ơn Quý khách
          đã sử dụng dịch vụ của chúng tôi.
        </p>
        <p class="text-tag-text-06">
          Lưu ý quan trọng: Nếu quá thời gian 48 giờ kể từ khi xác nhận mà Quý
          khách chưa hoàn tất việc trả sách, chúng tôi sẽ tính thêm phí quá hạn
          trả sách. Mong Quý khách thông cảm và hợp tác để tránh các khoản phí
          không mong muốn.
        </p>
        <div class="flex justify-end gap-2">
          <a-button class="h-10" @click="handleCloseGive"> Hủy </a-button>

          <a-button class="h-10 bg-orange-500 !text-white border-none">
            Xác nhận
          </a-button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
const select = ref("Hình thức vận chuyển");
const value = ref(1);
const props = defineProps({
  openModalGive: Boolean,
  closeModalGive: Function,
});
const open = ref(props.openModalGive);

const handleCloseGive = async () => {
  props.closeModalGive();
};
const focus = () => {
  console.log("focus");
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>
