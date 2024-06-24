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
      :footer="null"
      :onCancel="handleClose"
    >
      <form @submit.prevent="onSubmit">
        <div class="flex gap-2">
          <div class="w-1/2 pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Họ tên
            </label>
            <div class="mt-1">
              <a-input
                class="w-full h-10"
                placeholder="Nhập họ tên"
                v-model:value="user.fullname"
                required
              />
            </div>
          </div>
          <div class="w-1/2 pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <div class="mt-1">
              <a-input
                class="w-full h-10"
                placeholder="Nhập số điện thoại"
                v-model:value="user.phone"
                required
              />
            </div>
          </div>
        </div>
        <!-- <div class="flex gap-2">
          <div class="w-1/2 pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Tỉnh/ Thành phố
            </label>
            <div class="mt-1">
              <a-select
                size="large"
                v-model:value="valuePronvines"
                show-search
                placeholder="Tỉnh/Thành phố"
                :options="provinces"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChangeProvince"
                class="w-full"
              />
            </div>
          </div>
          <div class="w-1/2 pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Quận/ Huyện
            </label>
            <div class="mt-1">
              <a-select
                v-model:value="valueDistricts"
                show-search
                placeholder="Quận/Huyện"
                :options="districts"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChangeDistrict"
                class="w-full"
              />
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="w-1/2 pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Phường/ Xã
            </label>
            <div class="mt-1">
              <a-select
                size="large"
                v-model:value="valueWards"
                show-search
                placeholder="Phường/Xã"
                :options="wards"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChangeWard"
                class="w-full"
              />
            </div>
          </div>
          <div class="w-1/2 pb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Đường
            </label>
            <div class="mt-1">
              <a-input
                class="w-full h-10"
                placeholder="Đường"
                v-model:value="address.street"
                required
              />
            </div>
          </div>
        </div>
        <div class="pb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Địa chỉ cụ thể
          </label>
          <div class="mt-1">
            <a-textarea
              placeholder="Địa chỉ cụ thể của bạn"
              :rows="4"
              class="resize-none"
              :value="`${address.street}, ${address.ward}, ${address.district}, ${address.province}`"
            />
          </div>
        </div> -->

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
const data = ref(null);
const user = ref({
  fullname: "",
  phone: "",
});

// Get Profile
useAsyncData(async () => {
  await authStore.getProfile();
});

// Update Profile
const onSubmit = async () => {
  const resData = await authStore.updateProfile({
    fullname: user.value.fullname,
    phone: user.value.phone,
  });
  console.log("user", resData.value);
  if (resData?.data?._rawValue?.status == true) {
    message.success({
      content: "Chỉnh sửa thành công",
    });
    data.value = resData?.data?._rawValue?.data;
  } else {
    resErrors.value = resData.error.value.data.errors;
    console.log("object", resErrors.value);
    message.error({
      content: "Chỉnh sửa không thành công",
    });
  }
  // const newData = {
  //   ...values,
  //   province:
  //     (provinces as any).value.filter(
  //       (item) => values.province === item.value
  //     )[0]?.label || values?.provinces,
  //   district:
  //     (districts as any).value.filter(
  //       (item) => values.district === item.value
  //     )[0]?.label || values?.district,
  //   ward:
  //     (wards as any).value.filter((item) => values.ward === item.value)[0]
  //       ?.label || values?.ward,
  // };
  // const resData = await authStore.updateProfile(newData);
  // // console.log("newData", resData);
  // if (resData?.data?._rawValue?.status == true) {
  //   message.success({
  //     content: "Chỉnh sửa thành công",
  //   });
  //   data.value = resData?.data?._rawValue?.data;
  // } else {
  //   resErrors.value = resData.error.value.data.errors;
  //   console.log("object", resErrors.value);
  //   message.error({
  //     content: "Chỉnh sửa không thành công",
  //   });
  // }
};

// useAsyncData(async () => {
//   const data = await baseStore.getProvinces();
//   provinces.value = data.data._rawValue.data.map((item) => {
//     return {
//       value: item.ProvinceID,
//       label: item.ProvinceName,
//     };
//   });
// });

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
</script>
