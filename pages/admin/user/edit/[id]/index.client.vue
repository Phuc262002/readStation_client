<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tạo người dùng</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-0">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold">Vai trò</label>
            <div class="flex justify-start gap-4">
              <a-radio>Khách hàng</a-radio>
              <a-radio>Quản thư</a-radio>
              <a-radio>Học sinh</a-radio>
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
                    <a-radio-group name="gender">
                      <a-radio value="male">Nam</a-radio>
                      <a-radio :checked="true" value="female">Nữ</a-radio>
                    </a-radio-group>
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
                  <a-input
                    v-model:value="user.place_of_issue"
                    type="text"
                    class="border p-2 rounded-md"
                    placeholder="Nơi cấp"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4" v-if="role === 'student'">
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
                  v-model:value="valuePronvines"
                  show-search
                  placeholder="Tỉnh/Thành phố"
                  :options="provinces"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeProvince"
                >
                </a-select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Quận/ Huyện</label>
                <a-select
                  size="large"
                  v-model:value="valueDistricts"
                  show-search
                  placeholder="Quận/Huyện"
                  :options="districts"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChangeDistrict"
                >
                </a-select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Phường/ Xã</label>
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
                >
                </a-select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Đường</label>
                <a-input
                  v-model:value="address.street"
                  class="border p-2 rounded-md"
                  placeholder="Đường"
                />
              </div>
            </div>
            <div class="grid gird-cols-1">
              <div class="flex flex-col gap-2 w-full">
                <label for="">Địa chỉ cụ thể</label>
                <a-input
                  class="h-11"
                  :value="`${address.street}, ${address.ward}, ${address.district}, ${address.province}`"
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
          <div class="flex gap-4">
            <a-button type="default">Hủy</a-button>
            <a-button html-type="submit" type="primary">Cập nhập</a-button>
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
const role = ref("user");
const route = useRoute();
const userId = route.params.id;
const imageInfo = ref("");
const authStore = useAuthStore();
const baseStore = useBaseStore();
const userStore = useUserStore();
const provinces = ref([]);
const districts = ref([]);
const wards = ref([]);
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
  gender: "male",
});
const valuePronvines = ref(undefined);
const valueDistricts = ref(undefined);
const valueWards = ref(undefined);
const address = ref({
  province: "",
  district: "",
  ward: "",
  street: "",
});
useAsyncData(async () => {
  await userStore.getOneUser(userId);
  user.value.gender = userStore.user?.gender;
  user.value.fullname = userStore.user.fullname;
  user.value.job = userStore.user.job;
  user.value.dob = userStore.user.dob;
  user.value.email = userStore.user.email;
  user.value.phone = userStore.user.phone;
  user.value.citizen_name = userStore.user.citizen_identity_card?.citizen_name;
  user.value.citizen_code = userStore.user.citizen_identity_card?.citizen_code;
  user.value.date_of_issue =
    userStore.user.citizen_identity_card?.date_of_issue;
  user.value.place_of_issue =
    userStore.user.citizen_identity_card?.place_of_issue;
  user.value.student_name = userStore.user.student_id_card?.student_name;
  user.value.student_code = userStore.user.student_id_card?.student_code;
  user.value.student_card_expired =
    userStore.user.student_id_card?.student_card_expired;
  user.value.place_of_study = userStore.user.student_id_card?.place_of_study;
  valuePronvines = baseStore.province.find(
    (item) => item.ProvinceName === userStore.user.province
  )?.ProvinceID;
  valueDistricts = baseStore.districts.find(
    (item) => item.DistrictName === userStore.user.district
  )?.DistrictID;
  valueWards = baseStore.ward.find(
    (item) => item.WardName === userStore.user.ward
  )?.WardCode;
  fileList.value = [
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: userStore?.user?.avatar,
    },
  ];
});
console.log("🚀 ~ useAsyncData ~ fileList.value:", fileList.value);

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
  } catch (error) {}
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
  provinces.value = baseStore.province.map((item) => {
    return {
      value: item.ProvinceID,
      label: item.ProvinceName,
    };
  });
});

useAsyncData(
  async () => {
    await baseStore.getDistricts(valuePronvines.value);
    districts.value = baseStore.districts.map((item) => ({
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
    await baseStore.getWards(valueDistricts._rawValue);
    wards.value = baseStore.ward.map((item) => ({
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
const handleSubmit = async () => {
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
  const roleId = role.value === "user" ? 1 : role.value === "student" ? 2 : 3;

  const userData = {
    role_id: roleId ? roleId : null,
    avatar: imageInfo.value ? imageInfo.value.url : null,
    fullname: user.value.fullname,
    job: user.value.job ? user.value.job : null,
    gender: user.value.gender ? user.value.gender : null,
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
    province: address.value.province ? address.value.province : null,
    district: address.value.district ? address.value.district : null,
    ward: address.value.ward ? address.value.ward : null,
    address_detail:
      address.value.street &&
      address.value.province &&
      address.value.district &&
      address.value.ward
        ? `${address.value.street}, ${address.value.ward}, ${address.value.district}, ${address.value.province}`
        : null,
    phone: user.value.phone,
    avatar: imageInfo.value?.url || user.value.avatar,
  };

  Object.entries(userData).forEach(([key, value]) => {
    if (value === null) {
      delete userData[key];
    }
  });

  const updateUser = await userStore.updateUser({ id: userId, user: userData });
  if (updateUser) {
    message.success("Cập nhập thông tin người dùng thành công");
  }
};
</script>
