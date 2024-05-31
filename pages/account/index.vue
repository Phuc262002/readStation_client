<template>
  <div class="">
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 min-w-full min-h-[100vh] bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <div class="flex gap-6">
      <div class="w-1/2">
        <div class="flex justify-between mb-4">
          <div class="flex items-center justify-between gap-2">
            <UIcon name="i-material-symbols-person-check-outline" />
            <h2 class="text-sm font-bold">Thông tin cơ bản</h2>
          </div>

          <p
            @click="handleChangeEditAcc"
            v-if="!isShow"
            class="flex gap-1 items-center justify-center border-0 cursor-pointer text-sm font-bold hover:font-medium"
          >
            <UIcon name="i-solar-pen-2-linear" />
            <span>Chỉnh sửa</span>
          </p>
        </div>
        <form @submit="onSubmit">
          <div
            class="flex flex-col bg-[#f9f9f9] shadow-md shadow-gray-300 rounded-md p-4"
          >
            <div
              class="border-b flex items-center justify-between h-[145px] py-4"
            >
              <span class="w-1/2 flex items-center">Hình ảnh</span>
              <div class="w-1/2 text-left">
                <CommonUploadImg
                  id="avatar"
                  type="avatar"
                  v-bind="avatar"
                  name="avatar"
                  v-if="isShow"
                />

                <span v-else class="w-full">{{ data?.avatar }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center">Họ tên</span>
              <div class="w-1/2 text-left">
                <a-input
                  id="fullname"
                  type="fullname"
                  v-bind="fullname"
                  name="fullname"
                  v-if="isShow"
                />
                <span v-else class="w-full">{{ data?.fullname }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center">Giới tính</span>
              <div class="w-1/2 text-left">
                <a-radio-group
                  type="gender"
                  v-bind="gender"
                  name="gender"
                  v-if="isShow"
                  v-model="gender"
                >
                  <a-radio value="male">Nam</a-radio>
                  <a-radio value="female">Nữ</a-radio>
                </a-radio-group>

                <span v-else>{{ data?.gender }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <div class="w-1/2 flex gap-1 h-8 flex items-center">
                <span>Số điện thoại</span>
                <span class="text-red-600">*</span>
              </div>

              <div class="w-1/2 text-left">
                <a-input
                  type="phone"
                  v-bind="phone"
                  name="phone"
                  v-if="isShow"
                  required
                />
                <span v-else>{{ data?.phone }}</span>
              </div>
            </div>
            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center">Email</span>
              <div class="w-1/2 text-left">
                <a-input
                  v-if="isShow"
                  v-bind="email"
                  name="email"
                  type="email"
                  disabled
                />
                <span v-else>{{ data?.email }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center">Ngày sinh</span>
              <a-form-item class="w-1/2 text-left mb-0">
                <a-date-picker
                  v-if="isShow"
                  v-bind="dob"
                  name="dob"
                  type="dob"
                  class="w-full"
                  placeholder="Chọn ngày, tháng, năm sinh"
                />
                <span v-else>{{ data?.dob }}</span>
              </a-form-item>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center">Công việc</span>
              <div class="w-1/2 text-left">
                <a-input v-if="isShow" v-bind="job" name="job" type="job" />
                <span v-else>{{ data?.job }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center">Tỉnh/ Thành Phố</span>
              <div class="w-1/2 text-left">
                <a-select
                  v-model:value="valuePronvines"
                  show-search
                  placeholder="Tỉnh/Thành phố"
                  :options="provinces"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeProvince"
                  v-if="isShow"
                  type="province"
                  v-bind="province"
                  name="province"
                  class="w-full"
                >
                </a-select>
                <span v-else>{{ data?.province }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center">Quận/ Huyện</span>
              <div class="w-1/2 text-left">
                <a-select
                  v-model:value="valueDistricts"
                  show-search
                  placeholder="Quận/Huyện"
                  :options="districts"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeDistrict"
                  v-if="isShow"
                  type="district"
                  v-bind="district"
                  name="district"
                  class="w-full"
                >
                </a-select>
                <span v-else>{{ data?.district }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center"
                >Xã/ Phường/ Thị trấn</span
              >
              <div class="w-1/2 text-left">
                <a-select
                  v-model:value="valueWards"
                  show-search
                  placeholder="Phường/Xã"
                  :options="wards"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeWard"
                  v-if="isShow"
                  type="ward"
                  v-bind="ward"
                  name="ward"
                  class="w-full"
                >
                </a-select>
                <span v-else>{{ data?.ward }}</span>
              </div>
            </div>

            <div class="border-b flex items-center justify-between py-4">
              <span class="w-1/2 h-8 flex items-center flex items-center"
                >Địa chỉ</span
              >
              <div class="w-1/2 text-left">
                <a-input
                  type="address_detail"
                  v-bind="address_detail"
                  name="address_detail"
                  v-if="isShow"
                />
                <span v-else>{{ data?.address_detail }}</span>
              </div>
            </div>
            <div
              class="w-full flex items-center justify-center pt-5"
              v-if="isShow"
            >
              <a-button html-type="submit" class="mr-6 !text-white bg-[#3b8aea]"
                >Lưu thay đổi</a-button
              >
              <a-button
                type="primary"
                class="bg-[#D9D9D9] text-black"
                @click="handleCancel"
                >Hủy</a-button
              >
            </div>
          </div>
        </form>
      </div>
      <div class="w-1/2 flex flex-col space-y-6">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <UIcon name="i-material-symbols-person-outline" />
            <h2 class="text-sm font-bold">Tài khoản</h2>
          </div>
          <div
            class="flex-col space-y-2 p-4 bg-[#f9f9f9] shadow-md shadow-gray-300 rounded-md"
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
          <div class="bg-[#f9f9f9] rounded-md shadow-md shadow-gray-300 p-4">
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
import { useForm } from "vee-validate";
import * as yup from "yup";
// import { useBaseStore, useAuthStore } from "@/stores";

const baseStore = useBaseStore();
const address = ref({
  province: "",
  district: "",
  ward: "",
});
//get API
const data = ref(null);
const isLoading = ref(false);
const authStore = useAuthStore();
interface EditAcc {
  isShow: boolean;
}
// address
const provinces = ref([]);
const districts = ref([]);
const wards = ref([]);

const valuePronvines = ref(undefined);
const valueDistricts = ref(undefined);
const valueWards = ref(undefined);
const isShow = ref(false);
//Create the form
const { defineInputBinds, handleSubmit, errors, setFieldValue } = useForm({
  validationSchema: {
    // email: yup
    //   .string()
    //   .required("Trường này không được để trống")
    //   .email("Email không hợp lệ"),
    // fullname: yup.string().required("Trường này không được để trống"),
    // gender: yup.string().required("Trường này không được để trống"),
    // phone: yup.string().required("Trường này không được để trống"),
    // province: yup.string().required("Trường này không được để trống"),
    // district: yup.string().required("Trường này không được để trống"),
    // address_detail: yup.string().required("Trường này không được để trống"),
  },
});
// Define fields
const email = defineInputBinds("email");
const fullname = defineInputBinds("fullname");
const gender = defineInputBinds("gender");
const phone = defineInputBinds("phone");
const dob = defineInputBinds("dob");
const avatar = defineInputBinds("avatar");
const job = defineInputBinds("job");
const province = defineInputBinds("province");
const district = defineInputBinds("district");
const ward = defineInputBinds("ward");
const address_detail = defineInputBinds("address_detail");

const isSubmitting = ref(false);
const resErrors = ref({});

// Submit handler
const onSubmit = handleSubmit(async (values) => {
  // Submit to API
  const newData = {
    ...values,
    province: (provinces as any).value.filter(
      (item) => values.province === item.value
    )[0].label,
    district: (districts as any).value.filter(
      (item) => values.district === item.value
    )[0].label,
    ward: (wards as any).value.filter((item) => values.ward === item.value)[0]
      .label,
  };
  console.log("messges dataa", newData);
  try {
    isSubmitting.value = true;
    const resData = await authStore.updateProfile(newData);
    console.log("resData", resData);

    if (resData?.data?._rawValue?.status == true) {
      successToast("Chỉnh sửa thành công");
      navigateTo("/account");
    } else {
      resErrors.value = resData.error.value.data.errors;
      console.log("object", resErrors.value);
      errorToast("Chỉnh sửa không thành công", "Vui lòng thử lại sau");
    }
  } catch (error) {
    errorToast("Chỉnh sửa không thành công", "Vui lòng thử lại sau");
  } finally {
    isSubmitting.value = false;
  }
});

const handleChangeEditAcc = () => {
  isShow.value = !isShow.value;
};
const handleCancel = () => {
  isShow.value = false;
};
useAsyncData(async () => {
  isLoading.value = true;
  try {
    const response = await authStore.getProfile();
    data.value = response.data._rawValue.data;
    setFieldValue("email", data.value.email);
    setFieldValue("fullname", data.value.fullname);
    setFieldValue("gender", data.value.gender);
    setFieldValue("phone", data.value.phone);
    setFieldValue("avatar", data.value.avatar);
    setFieldValue("job", data.value.job);
    setFieldValue("dob", data.value.dob);
    setFieldValue("province", data.value.province);
    setFieldValue("district", data.value.district);
    setFieldValue("ward", data.value.ward);
    setFieldValue("address_detail", data.value.address_detail);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

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
