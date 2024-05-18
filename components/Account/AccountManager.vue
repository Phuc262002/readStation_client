<template>
  <form class="">
    <div class="flex gap-6 py-5 px-7">
      <div class="w-1/2">
        <div class="flex justify-between mb-4">
          <div class="flex items-center justify-between gap-2">
            <IoMdPerson />
            <h2 class="text-sm font-bold">Thông tin cơ bản</h2>
          </div>
          <a-button
            @click="handleChangeEditAcc"
            type="primary"
            class="bg-[#f4402f] h-7 flex items-center justify-center"
            >Chỉnh sửa</a-button
          >
        </div>
        <form class="w-full">
          <div class="flex flex-col space-y-6 bg-[#F8F7FA] rounded-lg p-4">
            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Họ tên</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>Nguyễn Văn A</span>
              </div>
            </div>
            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Ngày sinh</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>01/01/2000</span>
              </div>
            </div>
            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Giới tính</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>Nam</span>
              </div>
            </div>
            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Số điện thoại</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>0123456789</span>
              </div>
            </div>
            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Email</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>nguyenavana@gmail.com</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Số CMND/ CCCD</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>0123456789</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Nơi cấp</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>Cục trưởng cục cảnh sát ĐKDC</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Ngày cấp</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>01/01/2000</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span class="w">Tỉnh/ Thành Phố</span>
              <div>
                <a-select
                  v-model:value="valuePronvines"
                  show-search
                  placeholder="Tỉnh/Thành phố"
                  class="focus:ring-2 focus:ring-[#f65d4e]"
                  :options="provinces"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeProvince"
                  v-if="isShow"
                >
                </a-select>
                <span v-else>Hải Dương</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Quận/ Huyện</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>Kinh Môn</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Xã/ Phường/ Thị trấn</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>Bạch Đằng</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span>Địa chỉ</span>
              <div>
                <input
                  type="text"
                  v-if="isShow"
                  class="focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-lg pl-3 border border-[#e6e6e6]"
                />
                <span v-else>123 Văn An</span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="w-1/2 flex flex-col space-y-4">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <IoMdPerson />
            <h2>Tài khoản</h2>
          </div>
          <div class="flex-col space-y-2 p-4 bg-[#F8F7FA] rounded-lg">
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
            <IoMdPerson />
            <h2 class="text-sm font-bold">Kết nối tài khoản</h2>
          </div>
          <div class="bg-[#F8F7FA] rounded-lg p-4">
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
    </div>
    <div class="w-full">
      <div class="w-1/2 flex items-center justify-center">
        <a-button type="primary" class="mr-6 bg-[#3b8aea] h-10"
          >Lưu thay đổi</a-button
        >
        <a-button type="primary" class="h-10 bg-[#D9D9D9] text-black"
          >Hủy</a-button
        >
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { IoMdPerson } from "vue3-icons/io";
import { ref } from "vue";
const baseStore = useBaseStore();
const address = ref({
  province: "",
});

interface EditAcc {
  isShow: boolean;
}
const isShow = ref(false);
const handleChangeEditAcc = () => {
  isShow.value = !isShow.value;
};

// address
const provinces = ref([]);

const valuePronvines = ref(undefined);

useAsyncData(async () => {
  const data = await baseStore.getProvinces();
  provinces.value = data.data._rawValue.data.map((item) => {
    return {
      value: item.ProvinceID,
      label: item.ProvinceName,
    };
  });
});

const handleChangeProvince = (province) => {
  const selectedProvince = provinces.value.find(
    (item) => item.value === province
  );
  address.value.province = selectedProvince ? selectedProvince.label : "";
};

const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 4;
};
</script>
