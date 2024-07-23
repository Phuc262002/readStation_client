<template>
  <div>
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 min-w-[100vw] min-h-full bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <a-modal
      v-model:open="props.openModalForm"
      title="Địa chỉ mới"
      width="40%"
      :footer="null"
      :onCancel="handleClose"
    >
      <form @submit.prevent="onSubmit">
        <div class="flex gap-2">
          <div class="w-1/2 pb-4">
            <label class="text-sm font-bold"> Họ tên </label>
            <div class="mt-1">
              <a-input
                size="large"
                class="w-full"
                placeholder="Nhập họ tên"
                v-model:value="user.fullname"
                required
              />
            </div>
          </div>
          <div class="w-1/2 pb-4">
            <label class="text-sm font-bold"> Số điện thoại </label>
            <div class="mt-1">
              <a-input
                size="large"
                class="w-full"
                placeholder="Nhập số điện thoại"
                v-model:value="user.phone"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="w-1/2 pb-4">
            <label class="text-sm font-bold"> Tỉnh/ Thành phố </label>
            <div class="mt-1">
              <a-select
                v-model:value="province_id"
                :options="optionsProvines"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChangeProvince"
                :loading="baseStore.isLoading"
                class="w-full"
                size="large"
                show-search
                placeholder="Tỉnh/Thành phố"
              >
              </a-select>
            </div>
          </div>
          <div class="w-1/2 pb-4">
            <label class="text-sm font-bold"> Quận/ Huyện </label>
            <div class="mt-1">
              <a-select
                v-model:value="district_id"
                :options="optionsDistricts"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChangeDistrict"
                :disabled="!province_id"
                :loading="baseStore.isLoading"
                class="w-full"
                size="large"
                show-search
                placeholder="Quận/ Huyện"
              >
              </a-select>
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="w-1/2 pb-4">
            <label class="text-sm font-bold"> Phường/ Xã/ Thị trấn </label>
            <div class="mt-1">
              <a-select
                v-model:value="ward_id"
                :options="optionsWards"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChangeWard"
                :disabled="!district_id"
                :loading="baseStore.isLoading"
                class="w-full"
                size="large"
                show-search
                placeholder="Xã/ Phường/ Thị trấn"
              >
              </a-select>
            </div>
          </div>
          <div class="w-1/2 pb-4">
            <label class="text-sm font-bold"> Đường </label>
            <div class="mt-1">
              <a-input
                v-model:value="address.street"
                :disabled="!ward_id"
                size="large"
                class="w-full"
                placeholder="Nhập đường"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <label class="text-sm font-bold"> Địa chỉ cụ thể </label>
          <div class="mt-1">
            <a-textarea
              size="large"
              :value="`${address.street}, ${address.ward}, ${address.district}, ${address.province}`"
            />
          </div>
        </div>

        <div class="flex justify-end items-end gap-2">
          <a-button @click="handleClose" danger html-type="button" class="mt-4"
            >Hủy</a-button
          >
          <a-button
            :loading="isSubmitting"
            type="primary"
            html-type="submit"
            class="mt-4"
          >
            Lưu
          </a-button>
        </div>
      </form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const baseStore = useBaseStore();
const user = ref({
  fullname: authStore?.authUser?.user?.fullname,
  phone: authStore?.authUser?.user?.phone,
});
const address = ref({
  province: "",
  district: "",
  ward: "",
  street: "",
});
const ward_id = ref(undefined);
const district_id = ref(undefined);
const province_id = ref(undefined);

const optionsProvines = ref([]);
const optionsDistricts = ref([]);
const optionsWards = ref([]);

// Update Profile
const onSubmit = async () => {
  const resData = await authStore.updateProfile({
    fullname: user.value.fullname,
    phone: user.value.phone,
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
  console.log("user", resData.value);
  if (resData?.data?._rawValue?.status == true) {
    message.success({
      content: "Chỉnh sửa thành công",
    });
    await authStore.getProfile();
    handleClose();
  } else {
    resErrors.value = resData.error.value.data.errors;
    console.log("object", resErrors.value);
    message.error({
      content: "Chỉnh sửa không thành công",
    });
  }
};

useAsyncData(async () => {
  await baseStore.getProvinces();
  optionsProvines.value = baseStore.province.map((item) => {
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

const handleChangeProvince = (value) => {
  province_id.value = value;
  district_id.value = undefined;
  ward_id.value = undefined;
  address.value.street = "";
  address.value.province = optionsProvines.value.find(
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

const props = defineProps({
  openModalForm: Boolean,
  openModal: Function,
});
const open = ref(props.openModalForm);
watch(
  () => props.openModalForm,
  (newValue) => {
    open.value = newValue;
  }
);
const handleClose = async () => {
  props.openModal();
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
<style scoped>
:deep(.ant-input) {
  resize: none;
}
</style>
