<template>
  <div>
    <div class="flex justify-between mb-5">
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
    <form @submit.prevent="onSubmit">
      <div
        class="flex flex-col bg-white shadow-md shadow-gray-300 rounded-md p-4"
      >
        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center">Họ tên</span>
          <div class="w-1/2 text-left">
            <a-input
              size="large"
              id="fullname"
              type="fullname"
              v-model:value="user.fullname"
              name="fullname"
              v-if="isShow"
            />
            <span v-else class="w-full">
              {{ authStore?.authUser?.user?.fullname }}
            </span>
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
              v-model:value="user.gender"
            >
              <a-radio value="male">Nam</a-radio>
              <a-radio value="female">Nữ</a-radio>
            </a-radio-group>

            <span v-else>{{
              authStore?.authUser?.user?.gender === "female" ? "Nữ" : "Nam"
            }}</span>
          </div>
        </div>

        <div class="border-b flex items-center justify-between py-4">
          <div class="w-1/2 flex gap-1 h-8 flex items-center">
            <span>Số điện thoại</span>
            <span class="text-red-600">*</span>
          </div>

          <div class="w-1/2 text-left">
            <a-input
              size="large"
              v-model:value="user.phone"
              type="phone"
              name="phone"
              v-if="isShow"
              required
            />
            <span v-else>{{ authStore?.authUser?.user?.phone }}</span>
          </div>
        </div>
        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center">Email</span>
          <div class="w-1/2 text-left">
            <a-input
              size="large"
              v-if="isShow"
              v-model:value="user.email"
              name="email"
              type="email"
              disabled
            />
            <span v-else>{{ authStore?.authUser?.user?.email }}</span>
          </div>
        </div>

        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center">Ngày sinh</span>
          <a-form-item class="w-1/2 text-left mb-0">
            <a-input
              size="large"
              v-if="isShow"
              v-model:value="user.dob"
              name="dob"
              type="date"
              class="w-full"
              value-format="DD-MM-YYYY"
              placeholder="Chọn ngày, tháng, năm sinh"
            />
            <span v-else>{{
              $dayjs(authStore?.authUser?.user?.dob).format("DD/MM/YYYY")
            }}</span>
          </a-form-item>
        </div>

        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center">Công việc</span>
          <div class="w-1/2 text-left">
            <a-input
              size="large"
              v-if="isShow"
              v-model:value="user.job"
              name="job"
              type="job"
            />
            <span v-else>{{ authStore?.authUser?.user?.job }}</span>
          </div>
        </div>

        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center">Tỉnh/ Thành Phố</span>
          <div class="w-1/2 text-left">
            <a-select
              v-if="isShow"
              class="w-full"
              size="large"
              v-model:value="province_id"
              show-search
              placeholder="Tỉnh/Thành phố"
              :options="optionsPronvines"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChangeProvince"
              :loading="baseStore.isLoading"
            >
            </a-select>
            <span v-else>{{
              authStore?.authUser?.user?.province?.ProvinceName
            }}</span>
          </div>
        </div>

        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center">Quận/ Huyện</span>
          <div class="w-1/2 text-left">
            <a-select
              v-if="isShow"
              class="w-full"
              size="large"
              v-model:value="district_id"
              show-search
              placeholder="Quận/Huyện"
              :options="optionsDistricts"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChangeDistrict"
              :disabled="!province_id"
              :loading="baseStore.isLoading"
            >
            </a-select>
            <span v-else>{{
              authStore?.authUser?.user?.district?.DistrictName
            }}</span>
          </div>
        </div>

        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center">Xã/ Phường/ Thị trấn</span>
          <div class="w-1/2 text-left">
            <a-select
              v-if="isShow"
              class="w-full"
              size="large"
              v-model:value="ward_id"
              show-search
              placeholder="Phường/Xã"
              :options="optionsWards"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChangeWard"
              :disabled="!district_id"
              :loading="baseStore.isLoading"
            >
            </a-select>
            <span v-else>{{ authStore?.authUser?.user?.ward?.WardName }}</span>
          </div>
        </div>
        <!--  -->
        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center flex items-center">
            Đường
          </span>
          <div class="w-1/2 text-left">
            <a-input
              v-model:value="address.street"
              class="border p-2 rounded-md"
              placeholder="Đường"
              :disabled="!ward_id"
              v-if="isShow"
            />
            <span v-else>{{ authStore?.authUser?.user?.street }}</span>
          </div>
        </div>
        <!--  -->
        <div class="border-b flex items-center justify-between py-4">
          <span class="w-1/2 h-8 flex items-center flex items-center">
            Địa chỉ cụ thể
          </span>
          <div class="w-1/2 text-left">
            <a-input
              :value="`${address.street}, ${address.ward}, ${address.district}, ${address.province}`"
              size="large"
              v-if="isShow"
            />
            <span v-else>{{ authStore?.authUser?.user?.address_detail }}</span>
          </div>
        </div>
        <div
          class="w-full flex items-center justify-end gap-4 pt-5"
          v-if="isShow"
        >
          <a-button
            type="primary"
            class="bg-white border border-rtgray-50 !text-black h-10 hover:!bg-rtgray-50"
            @click="handleCancel"
            >Hủy</a-button
          >

          <a-button
            html-type="submit"
            class="!text-white bg-rtprimary h-10 border-none hover:bg-rtsecondary"
            >Lưu thay đổi</a-button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const baseStore = useBaseStore();
const isShow = ref(false);
const resErrors = ref({});
const data = ref(null);

const user = ref({
  fullname: "",
  email: "",
  gender: "",
  phone: "",
  dob: "",
  job: "",
});

const address = ref({
  province: "",
  district: "",
  ward: "",
  street: "",
});

//get API
const ward_id = ref(undefined);
const district_id = ref(undefined);
const province_id = ref(undefined);
const optionsPronvines = ref([]);
const optionsDistricts = ref([]);
const optionsWards = ref([]);

// Submit handler
const onSubmit = async () => {
  const resData = await authStore.updateProfile({
    fullname: user.value.fullname,
    email: user.value.email,
    phone: user.value.phone,
    gender: user.value.gender,
    dob: user.value.dob,
    job: user.value.job,
    province_id: province_id.value,
    district_id: district_id.value,
    ward_id: ward_id.value,
    street: address.value.street,
    address_detail:
      address.value.province &&
      address.value.district &&
      address.value.ward &&
      address.value.street
        ? `${address.value.street}, ${address.value.ward}, ${address.value.district}, ${address.value.province}`
        : null,
  });
  if (resData?.data?._rawValue?.status == true) {
    message.success({
      content: "Chỉnh sửa thành công",
    });
    await authStore.getProfile();
    isShow.value = false;
    data.value = resData?.data?._rawValue?.data;
  } else {
    resErrors.value = resData.error.value.data.errors;
    message.error({
      content: "Chỉnh sửa không thành công",
    });
  }
};

useAsyncData(async () => {
  await baseStore.getProvinces();
  optionsPronvines.value = baseStore.province.map((item) => {
    return {
      value: item.id,
      label: item.ProvinceName,
    };
  });
});

useAsyncData(
  async () => {
    if (province_id.value) {
      await baseStore.getDistricts(province_id.value);
      optionsDistricts.value = baseStore.districts.map((item) => ({
        value: item.id,
        label: item.DistrictName,
      }));
    }
  },
  {
    immediate: true,
    watch: province_id,
  }
);

useAsyncData(
  async () => {
    if (district_id.value) {
      await baseStore.getWards(district_id.value);
      optionsWards.value = baseStore.ward.map((item) => ({
        value: item.id,
        label: item.WardName,
      }));
    }
  },
  {
    immediate: true,
    watch: district_id,
  }
);

const handleChangeEditAcc = () => {
  isShow.value = !isShow.value;
  if (isShow.value) {
    user.value.fullname = authStore?.authUser?.user?.fullname;
    user.value.gender = authStore?.authUser?.user?.gender;
    user.value.phone = authStore?.authUser?.user?.phone;
    user.value.email = authStore?.authUser?.user?.email;
    user.value.dob = authStore?.authUser?.user?.dob;
    user.value.job = authStore?.authUser?.user?.job;
    address.value.province = authStore?.authUser?.user?.province?.ProvinceName;
    address.value.district = authStore?.authUser?.user?.district?.DistrictName;
    address.value.ward = authStore?.authUser?.user?.ward?.WardName;
    address.value.street = authStore?.authUser?.user?.street;
    province_id.value = authStore?.authUser?.user?.province?.id;
    district_id.value = authStore?.authUser?.user?.district?.id;
    ward_id.value = authStore?.authUser?.user?.ward?.id;
  }
};
const handleCancel = () => {
  isShow.value = false;
};
useAsyncData(async () => {
  await authStore.getProfile();
});

const handleChangeProvince = (value) => {
  province_id.value = value;
  district_id.value = undefined;
  ward_id.value = undefined;
  address.value.street = "";
  address.value.province = optionsPronvines.value.find(
    (item) => item.value === value
  ).label;
};
const handleChangeDistrict = (value) => {
  district_id.value = value;
  ward_id.value = undefined;
  address.value.street = "";
  address.value.district = optionsDistricts.value.find(
    (item) => item.value === value
  ).label;
};
const handleChangeWard = (value) => {
  ward_id.value = value;
  address.value.street = "";
  address.value.ward = optionsWards.value.find(
    (item) => item.value === value
  ).label;
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
