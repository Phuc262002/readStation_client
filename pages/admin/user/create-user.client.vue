<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-bold">Tạo người dùng</h5>
      </div>
    </div>
    <div class="mb-4 space-y-1" v-if="errors">
      <a-alert
        v-for="(error, index) in errors"
        :message="error"
        type="error"
        show-icon
      />
    </div>
    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-0">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold">Vai trò</label>
            <div class="flex justify-start gap-4">
              <a-radio-group
                @change="handleChangeRoleId"
                v-model:value="role_id"
                name="role_id"
              >
                <a-radio :value="1">Khách hàng</a-radio>
                <a-radio :value="2">Học sinh</a-radio>
                <a-radio
                  :value="4"
                  v-if="authStore.authUser?.user?.role?.name === 'admin'"
                >
                  Admin
                </a-radio>
              </a-radio-group>
            </div>
          </div>

          <div class="grid grid-rows-4 gap-5 my-5">
            <div class="grid grid-cols-4 gap-4">
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for=""
                    >Họ và tên <span class="text-red-500">*</span></label
                  >
                  <a-input
                    type="text"
                    v-model:value="user.fullname"
                    class="border p-2 rounded-md"
                    placeholder="Họ và tên"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold"
                    >Ngày, tháng, năm sinh</label
                  >
                  <a-input
                    v-model:value="user.dob"
                    size="large"
                    type="date"
                    width="100%"
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold">Giới tính</label>
                  <div class="flex justify-start gap-4">
                    <a-radio
                      @click="setGender('male')"
                      :checked="gender === 'male'"
                      >Nam</a-radio
                    >
                    <a-radio
                      @click="setGender('female')"
                      :checked="gender === 'female'"
                      >Nữ</a-radio
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for=""
                    >Số điện thoại <span class="text-red-500">*</span></label
                  >
                  <a-input
                    v-model:value="user.phone"
                    type=""
                    class="border p-2 rounded-md"
                    placeholder="Số điện thoại"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for=""
                    >Email <span class="text-red-500">*</span></label
                  >
                  <a-input
                    v-model:value="user.email"
                    type="email"
                    class="border p-2 rounded-md"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for="">Công việc</label>
                  <a-input
                    v-model:value="user.job"
                    type="text"
                    class="border p-2 rounded-md"
                    placeholder="Công việc"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for="">CMT/ CCCD</label>
                  <a-input
                    v-model:value="user.citizen_code"
                    type="text"
                    class="border p-2 rounded-md"
                    placeholder="Mã số CMT/ CCCD"
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for="">Họ tên</label>
                  <a-input
                    v-model:value="user.citizen_name"
                    type="text"
                    class="border p-2 rounded-md"
                    placeholder="Họ tên"
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for="">Ngày cấp</label>
                  <a-input
                    v-model:value="user.date_of_issue"
                    type="date"
                    class="border p-2 rounded-md"
                    placeholder="Ngày cấp"
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for="">Nơi cấp</label>
                  <a-auto-complete
                    v-model:value="user.place_of_issue"
                    :options="[
                      {
                        value:
                          'CỤC TRƯỞNG CỤC CẢNH SÁT QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI',
                      },
                    ]"
                    :allow-clear="true"
                  >
                    <a-input
                      placeholder="Nơi cấp"
                      style="height: 40px"
                      class="p-2 rounded-md"
                    />
                  </a-auto-complete>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4" v-if="user.role_id === 2">
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for=""
                    >ID sinh viên</label
                  >
                  <a-input
                    v-model:value="user.student_code"
                    type="text"
                    class="border p-2 rounded-md"
                    placeholder="ID sinh viên"
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for="">Họ tên</label>
                  <a-input
                    v-model:value="user.student_name"
                    type="text"
                    class="border p-2 rounded-md"
                    placeholder="Họ tên"
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for=""
                    >Ngày kết thúc năm học</label
                  >
                  <a-input
                    v-model:value="user.student_card_expired"
                    style="height: 40px"
                    type="date"
                    class="border p-2 rounded-md"
                    placeholder="Ngày hết hạn"
                  />
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm font-semibold" for=""
                    >Trường học/ Cao đẳng/ Đại học</label
                  >
                  <a-input
                    v-model:value="user.place_of_study"
                    type="text"
                    class="border p-2 rounded-md"
                    placeholder="Trường"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for=""
                  >Tỉnh/ Thành phố</label
                >
                <a-select
                  size="large"
                  v-model:value="province_id"
                  show-search
                  placeholder="Tỉnh/Thành phố"
                  :filter-option="filterOption"
                  :options="optionsPronvines"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeProvince"
                  :loading="baseStore.isLoading"
                >
                </a-select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Quận/ Huyện</label>
                <a-select
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
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Phường/ Xã</label>
                <a-select
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
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Đường</label>
                <a-input
                  v-model:value="address.street"
                  class="border p-2 rounded-md"
                  placeholder="Đường"
                  :disabled="!ward_id"
                />
              </div>
            </div>
            <div class="grid gird-cols-1">
              <div class="flex flex-col gap-2 w-full">
                <label for="">Địa chỉ cụ thể</label>
                <a-input
                  class="h-11"
                  :value="`${address.street},${address.ward}, ${address.district}, ${address.province}`"
                  readonly
                />
              </div>
            </div>
            <div>
              <div>
                <ClientOnly>
                  <a-spin
                    tip="Đang xử lý..."
                    :spinning="baseStore.isSubmitting"
                  >
                    <a-upload-dragger
                      v-model:fileList="fileList"
                      list-type="picture"
                      name="image"
                      :multiple="false"
                      :action="(file) => uploadFile(file)"
                      @change="handleChangeUploadImg"
                      @drop="handleDrop"
                      :before-upload="beforeUpload"
                      :remove="(file) => deleteFile(file)"
                    >
                      <p class="ant-upload-drag-icon">
                        <inbox-outlined></inbox-outlined>
                      </p>
                      <p class="ant-upload-text">
                        Click hoặc kéo thả file vào đây
                      </p>
                      <p class="ant-upload-hint">
                        Hoặc nhấn vào đây để chọn file
                      </p>
                    </a-upload-dragger>
                  </a-spin>
                </ClientOnly>
              </div>
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <a-button type="default">Hủy</a-button>
            <a-button
              :loading="userStore.isSubmitting"
              html-type="submit"
              type="primary"
              >Thêm</a-button
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { message, Upload } from "ant-design-vue";
const fileList = ref([]);
const errors = ref({});

const role_id = ref(1);
const gender = ref("male");
const setGender = (selecteGender) => {
  gender.value = selecteGender;
};

const authStore = useAuthStore();
const baseStore = useBaseStore();
const userStore = useUserStore();

const user = ref({
  fullname: "",
  dob: "",
  job: "",
  email: "",
  phone: "",
  citizen_name: "",
  citizen_code: "",
  date_of_issue: "",
  place_of_issue: "",
  student_name: "",
  student_code: "",
  student_card_expired: "",
  place_of_study: "",
});
const address = ref({
  street: "",
  province: "",
  district: "",
  ward: "",
});
const ward_id = ref(undefined);
const district_id = ref(undefined);
const province_id = ref(undefined);
const optionsPronvines = ref([]);
const optionsDistricts = ref([]);
const optionsWards = ref([]);

const imageInfo = ref("");
const uploadFile = async (file) => {
  if (fileList.value.length > 0) {
    fileList.value = [];
    await baseStore.deleteImg(imageInfo.value?.publicId);
  }
  const formData = new FormData();
  formData.append("image", file);
  try {
    const dataUpload = await baseStore.uploadImg(formData);
    imageInfo.value = dataUpload.data._rawValue.data;
  } catch (error) {
    message.error("Upload ảnh thất bại");
    console.log("🚀 ~ uploadFile ~ error:", error);
  }
};
const handleChangeUploadImg = (info) => {
  const status = info.file.status;
  if (status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (status === "done") {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
const deleteFile = async (file) => {
  await baseStore.deleteImg(imageInfo.value?.publicId);
};

function handleDrop(e) {
  console.log(e);
}
const beforeUpload = (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    message.error("Bạn chỉ có thể tải lên file ảnh!");
  }
  return isImage || Upload.LIST_IGNORE;
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

const handleSubmit = async () => {
  errors.value = {};
  if (
    user.value.citizen_name ||
    user.value.citizen_code ||
    user.value.date_of_issue ||
    user.value.place_of_issue
  ) {
    if (
      user.value.citizen_name === "" ||
      user.value.citizen_code === "" ||
      user.value.date_of_issue === "" ||
      user.value.place_of_issue === ""
    ) {
      message.error("Vui lòng nhập đầy đủ thông tin CMT/ CCCD");
      return false;
    }
  }
  if (
    user.value.student_name ||
    user.value.student_code ||
    user.value.student_card_expired ||
    user.value.place_of_study
  ) {
    if (
      user.value.student_name === "" ||
      user.value.student_code === "" ||
      user.value.student_card_expired === "" ||
      user.value.place_of_study === ""
    ) {
      message.error("Vui lòng nhập đầy đủ thông tin sinh viên");
      return false;
    }
  }

  const userData = {
    role_id: role_id.value,
    avatar: imageInfo.value ? imageInfo.value.url : null,
    fullname: user.value.fullname,
    job: user.value.job ? user.value.job : null,
    gender: gender.value ? gender.value : null,
    dob: user.value.dob ? user.value.dob : null,
    email: user.value.email,
    citizen_identity_card:
      user.value.citizen_name &&
      user.value.citizen_code &&
      user.value.date_of_issue &&
      user.value.place_of_issue
        ? {
            citizen_name: user.value.citizen_name,
            citizen_code: user.value.citizen_code,
            date_of_issue: user.value.date_of_issue,
            place_of_issue: user.value.place_of_issue,
          }
        : null,
    student_id_card:
      user.value.student_name &&
      user.value.student_code &&
      user.value.student_card_expired &&
      user.value.place_of_study
        ? {
            student_name: user.value.student_name,
            student_code: user.value.student_code,
            student_card_expired: user.value.student_card_expired,
            place_of_study: user.value.place_of_study,
          }
        : null,
    street: address.value.street ? address.value.street : null,
    province_id: province_id.value ? province_id.value : null,
    district_id: district_id.value ? district_id.value : null,
    ward_id: ward_id.value ? ward_id.value : null,
    address_detail:
      address.value.street &&
      address.value.province &&
      address.value.district &&
      address.value.ward
        ? `${address.value.street}, ${address.value.ward}, ${address.value.district}, ${address.value.province}`
        : null,
    phone: user.value.phone,
  };

  Object.entries(userData).forEach(([key, value]) => {
    if (value === null) {
      delete userData[key];
    }
  });

  try {
    const res = await userStore.createUser(userData);

    if (res.data._rawValue?.status == true) {
      message.success("Tạo người dùng thành công");
      navigateTo("/admin/user");
    } else {
      errors.value = res.error.value.data.errors;
      message.error(res.error.value.data.message);
    }
  } catch (error) {
    message.error("Tạo người dùng thất bại");
  }
};
const handleChangeProvince = (value) => {
  province_id.value = value;
  district_id.value = undefined;
  ward_id.value = undefined;
  address.value.street = "";
  address.value.district = "";
  address.value.ward = "";
  address.value.province = optionsPronvines.value.find(
    (item) => item.value === value
  ).label;
};
const handleChangeDistrict = (value) => {
  district_id.value = value;
  ward_id.value = undefined;
  address.value.street = "";
  address.value.ward = "";
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

const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const handleChangeRoleId = (e) => {
  user.value.role_id = e.target.value;
};
</script>
