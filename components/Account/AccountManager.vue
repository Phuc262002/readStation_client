<template>
  <div class="">
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
        <form class="w-full" @submit="onSubmit">
          <div class="flex flex-col space-y-6 bg-[#cfcfcf] rounded-md p-4">
            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span class="w-1/2">Họ tên</span>
              <div class="w-1/2 text-right">
                <input
                  type="fullname"
                  v-bind="fullname"
                  name="fullname"
                  v-if="isShow"
                  class="w-full focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-md pl-3 border border-[#e6e6e6] h-8"
                />
                <span v-else class="w-full">{{ data?.fullname }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span class="w-1/2">Giới tính</span>
              <div class="w-1/2 text-right">
                <input
                  type="gender"
                  v-bind="gender"
                  name="gender"
                  v-if="isShow"
                  class="w-full focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-md pl-3 border border-[#e6e6e6] h-8"
                />
                <span v-else>Nam</span>
              </div>
            </div>
            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span class="w-1/2">Số điện thoại</span>
              <div class="w-1/2 text-right">
                <input
                  type="phone"
                  v-bind="phone"
                  name="phone"
                  v-if="isShow"
                  class="w-full focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-md pl-3 border border-[#e6e6e6] h-8"
                />
                <span v-else>0123456789</span>
              </div>
            </div>
            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span class="w-1/2">Email</span>
              <div class="w-1/2 text-right">
                <input
                  v-if="isShow"
                  v-bind="email"
                  name="email"
                  type="email"
                  class="w-full focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-md pl-3 border border-[#e6e6e6] h-8"
                />
                <span v-else>{{ data?.email }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span class="w-1/2">Tỉnh/ Thành Phố</span>
              <div class="w-1/2 text-right">
                <a-select
                  v-model:value="valuePronvines"
                  show-search
                  placeholder="Tỉnh/Thành phố"
                  class="focus:ring-2 focus:ring-[#f65d4e] w-full"
                  :options="provinces"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeProvince"
                  v-if="isShow"
                  type="province"
                  v-bind="province"
                  name="province"
                >
                </a-select>
                <span v-else>Hải Dương</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span class="w-1/2">Quận/ Huyện</span>
              <div class="w-1/2 text-right">
                <a-select
                  v-model:value="valueDistricts"
                  show-search
                  placeholder="Quận/Huyện"
                  class="w-full"
                  :options="districts"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeDistrict"
                  v-if="isShow"
                  type="district"
                  v-bind="district"
                  name="district"
                >
                </a-select>
                <span v-else>Kinh Môn</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between pb-2 h-10">
              <span class="w-1/2">Xã/ Phường/ Thị trấn</span>
              <div class="w-1/2 text-right">
                <a-select
                  v-model:value="valueWards"
                  show-search
                  placeholder="Phường/Xã"
                  class="w-full"
                  :options="wards"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeWard"
                  v-if="isShow"
                  type="ward"
                  v-bind="ward"
                  name="ward"
                >
                </a-select>
                <span v-else>Bạch Đằng</span>
              </div>
            </div>

            <div class="flex items-center justify-between pb-2 h-10">
              <span class="w-1/2">Địa chỉ</span>
              <div class="w-1/2 text-right">
                <input
                  type="address_detail"
                  v-bind="address_detail"
                  name="address_detail"
                  v-if="isShow"
                  class="w-full focus:ring-2 focus:ring-[#f65d4e] focus:outline-none rounded-md pl-3 border border-[#e6e6e6] h-8"
                />
                <span v-else>123 Văn An</span>
              </div>
            </div>
          </div>

          <div class="w-full flex items-center justify-center pt-5">
            <a-button type="primary" class="mr-6 bg-[#3b8aea] h-10"
              >Lưu thay đổi</a-button
            >
            <a-button type="primary" class="h-10 bg-[#D9D9D9] text-black"
              >Hủy</a-button
            >
          </div>
        </form>
      </div>
      <div class="w-1/2 flex flex-col space-y-4">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <IoMdPerson />
            <h2>Tài khoản</h2>
          </div>
          <div class="flex-col space-y-2 p-4 bg-[#cfcfcf] rounded-md">
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
          <div class="bg-[#cfcfcf] rounded-md p-4">
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
  </div>
</template>

<script setup lang="ts">
import { IoMdPerson } from "vue3-icons/io";
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

//Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    email: yup
      .string()
      .required("Trường này không được để trống")
      .email("Email không hợp lệ"),
    fullname: yup.string().required("Trường này không được để trống"),
    gender: yup.string().required("Trường này không được để trống"),
    phone: yup.string().required("Trường này không được để trống"),
    province: yup.string().required("Trường này không được để trống"),
    district: yup.string().required("Trường này không được để trống"),
    address_detail: yup.string().required("Trường này không được để trống"),
  },
});
// Define fields
const email = defineInputBinds("email");
const fullname = defineInputBinds("fullname");
const gender = defineInputBinds("gender");
const phone = defineInputBinds("phone");
const province = defineInputBinds("province");
const district = defineInputBinds("district");
const ward = defineInputBinds("ward");
const address_detail = defineInputBinds("address_detail");

const baseStore = useBaseStore();
const address = ref({
  province: "",
  district: "",
  ward: "",
});

interface EditAcc {
  isShow: boolean;
}
const isShow = ref(false);
const handleChangeEditAcc = () => {
  isShow.value = !isShow.value;
};

//get API
const data = ref(null);
const isLoading = ref(false);
const authStore = useAuthStore();

useAsyncData(async () => {
  isLoading.value = true;
  try {
    const response = await authStore.getProfile();
    data.value = response.data._rawValue.data;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
console.log("data", data);

// address
const provinces = ref([]);
const districts = ref([]);
const wards = ref([]);

const valuePronvines = ref(undefined);
const valueDistricts = ref(undefined);
const valueWards = ref(undefined);

useAsyncData(async () => {
  const data = await baseStore.getProvinces();
  provinces.value = data.data._rawValue.data.map((item) => {
    return {
      value: item.ProvinceID,
      label: item.ProvinceName,
    };
  });
});

useAsyncData(
  async () => {
    const dataDistricts = await baseStore.getDistricts(valuePronvines._value);
    districts.value = dataDistricts.data._rawValue.data.map((item) => ({
      value: item.DistrictID,
      label: item.DistrictName,
    }));
  },
  {
    watch: valuePronvines,
  }
);

useAsyncData(
  async () => {
    const dataWards = await baseStore.getWards(valueDistricts._rawValue);
    wards.value = dataWards.data._rawValue.data.map((item) => ({
      value: item.WardCode,
      label: item.WardName,
    }));
  },
  {
    watch: valueDistricts,
  }
);

const handleChangeProvince = (province) => {
  const selectedProvince = provinces.value.find(
    (item) => item.value === province
  );
  address.value.province = selectedProvince ? selectedProvince.label : "";
};

const handleChangeDistrict = (district) => {
  const selectedDistrict = districts.value.find(
    (item) => item.value === district
  );
  address.value.district = selectedDistrict ? selectedDistrict.label : "";
};

const handleChangeWard = (ward) => {
  const selectedWard = wards.value.find((item) => item.value === ward);
  address.value.ward = selectedWard ? selectedWard.label : "";
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
