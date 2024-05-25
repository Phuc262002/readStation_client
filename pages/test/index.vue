<template>
  <div>
  <a-layout-sider v-model:collapsed="props.collapsed" :trigger="null" collapsible
    class="!fixed h-full !bg-white dark:!bg-[#132337] !border-r border-r-[#e2e8f0]"
    :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'">
    <div class="bg-red-400 h-8 m-4" />
    <a-menu v-model:selectedKeys="selectedKeys" :theme="$colorMode.value === 'dark' ? 'dark' : 'light'" mode="inline"
      class="!border-0 dark:!bg-[#6c819b] dark:!text-white overflow-auto h-5/6"
      :class="props.collapsed ? 'w-[80px]' : '!min-w-[theme(padding.sidebar)]'">
      <NuxtLink to="/admin/dashboards">
        <a-menu-item key="1">
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-light-space-dashboard" />
            <span>Dashboards</span>
          </span>
        </a-menu-item>
      </NuxtLink>

      <!-- <a-menu-item key="2">
                    <desktop-outlined />
                    <span>Option 2</span>
                </a-menu-item> -->
      <a-sub-menu key="sub1">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-person-rounded" />
            <span>Quản lí người dùng</span>
          </span>
        </template>
        <NuxtLink to="/admin/user/create-user">
          <a-menu-item key="3">Tạo người dùng</a-menu-item>
        </NuxtLink>
        <a-menu-item key="4">Tất cả người dùng</a-menu-item>
        <a-menu-item key="5">Tài khoản chờ duyệt</a-menu-item>
        <a-menu-item key="6">Thêm mã giảm giá cho người dùng</a-menu-item>
        <a-menu-item key="7">Thống kê người giới thiệu</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-ant-design-product-outlined" />
            <span>Quản lí sách</span>
          </span>
        </template>
        <NuxtLink to="/admin/book/create-book">
          <a-menu-item key="8">Thêm sách</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/book">
          <a-menu-item key="9">Tất cả sách</a-menu-item>
        </NuxtLink>
        <a-menu-item key="10">Quản lí đánh giá</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-icon-park-outline-ad-product" />
            <span>Quản lí đơn hàng</span>
          </span>
        </template>
        <NuxtLink to="/admin/product-manager/create-product">
          <a-menu-item key="11">Thêm đơn hàng</a-menu-item>
        </NuxtLink>
      
        <NuxtLink to="/admin/product-manager/product">
          <a-menu-item key="12">Tất cả đơn hàng</a-menu-item>
        </NuxtLink>

      </a-sub-menu>
      <!-- <a-sub-menu key="sub4">
        <template #title>
          <span>
            <UIcon name="i-material-symbols-light-space-dashboard" />
            <span>Quản lí mã giảm giá</span>
          </span>
        </template>
        <a-menu-item key="13">Thêm mã giảm giá</a-menu-item>
        <a-menu-item key="14">Tất cả mã giảm giá</a-menu-item>
      </a-sub-menu> -->
      <a-sub-menu key="sub5">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-light-post" />
            <span>Quản lí bài viết</span>
          </span>
        </template>
        <NuxtLink to="/admin/post">
          <a-menu-item key="40">Tất cả bài viết</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/post/add-post">
          <a-menu-item key="13">Thêm bài viết</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/post/post-await">
          <a-menu-item key="14">Bài viết chờ duyệt</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/post/trash-post">
          <a-menu-item key="111">Thùng rác</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub40">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-light-post" />
            <span>Quản lí bình luận</span>
          </span>
        </template>
        <NuxtLink to="/admin/comment">
          <a-menu-item key="42">Tất cả bình luận</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/comment/recent-comment">
          <a-menu-item key="43">Bình luận gần đây</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/comment/trash-comment">
          <a-menu-item key="112">Thùng rác</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub6">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-book-5" />
            <span>Quản lí tủ sách</span>
          </span>
        </template>
        <NuxtLink to="/admin/book-case">
          <a-menu-item key="17">Tất cả tủ sách</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/book-case/trash-bookcase">
        <a-menu-item key="16">Thùng rác</a-menu-item>
      </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub7">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-bi-bookshelf" />
            <span>Quản lí kệ sách</span>
          </span>
        </template>
        <NuxtLink to="/admin/book-shelves">
          <a-menu-item key="19">Tất cả kệ sách</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/book-shelves/trash-bookshelves">
        <a-menu-item key="18">Thùng rác</a-menu-item>
      </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub8">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-category-rounded" />
            <span>Quản lí danh mục</span>
          </span>
        </template>
        <NuxtLink to="/admin/category/product">
          <a-menu-item key="20">Danh mục sản phẩm</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/category/post">
          <a-menu-item key="21">Danh mục bài viết</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub9">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-person-rounded" />
            <span>Quản lí tác giả</span>
          </span>
        </template>
        <a-menu-item key="22">Thêm tác giả</a-menu-item>
        <a-menu-item key="23">Tất cả tác giả</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub10">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-person-rounded" />
            <span>Quản lí nhà xuất bản</span>
          </span>
        </template>
        <a-menu-item key="22">Thêm nhà xuất bản</a-menu-item>
        <a-menu-item key="23">Tất cả nhà xuất bản</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub11">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-ri-bill-fill" />
            <span>Quản lí hóa đơn nhập hàng</span>
          </span>
        </template>
        <NuxtLink to="/admin/manager-bill/create-bill">
          <a-menu-item key="22">Thêm hóa đơn</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/manager-bill">
          <a-menu-item key="23">Tất cả hóa đơn</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
      <a-sub-menu key="sub12">
        <template #title>
          <span class="flex items-center gap-2">
            <UIcon name="i-material-symbols-wallet" />
            <span>Quản lí ví</span>
          </span>
        </template>
        <NuxtLink to="/admin/wallet/create-wallet">
          <a-menu-item key="24">Tạo ví</a-menu-item>
        </NuxtLink>
        <NuxtLink to="/admin/wallet">
          <a-menu-item key="25">Tất cả ví</a-menu-item>
        </NuxtLink>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
        <div class="grow">
            <h5 class="text-xl text-[#1e293b] font-semibold">Tạo người dùng</h5>
        </div>
        <CommonBreadcrumAdmin />
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
        <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-2 w-1/2">
                <label class="text-sm font-semibold">Vai trò</label>
                <div class="flex justify-start gap-4">
                    <a-checkbox @click="setRole('Khách hàng')" :checked="role === 'Khách hàng'">Khách hàng</a-checkbox>
                    <a-checkbox @click="setRole('Học sinh')" :checked="role === 'Học sinh'">Học sinh</a-checkbox>
                    <a-checkbox @click="setRole('Quản thư')" :checked="role === 'Quản thư'">Quản thư</a-checkbox>
                    <a-checkbox @click="setRole('Admin')" :checked="role === 'Admin'">Admin</a-checkbox>
                </div>
            </div>
            <!-- Khách hàng, Admin, Quản thư -->
            <div class="flex flex-col gap-5" v-if="role === 'Khách hàng'">
                <div class="flex justify-between">
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Họ và tên</label>
                        <a-input type="text" class="border p-2 rounded-md" placeholder="Họ và tên" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
                        <a-input type="date" class="border p-2 rounded-md" />
                    </div>

                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold">Giới tính</label>
                        <div class="flex justify-start gap-4">
                            <a-checkbox>Nam</a-checkbox>
                            <a-checkbox>Nữ</a-checkbox>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                    </div>
                </div>
                <div class="flex justify-between ">
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Số điện thoại</label>
                        <a-input type="" class="border p-2 rounded-md" placeholder="Số điện thoại" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Email</label>
                        <a-input type="text" class="border p-2 rounded-md" placeholder="Email" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Công việc</label>
                        <a-select v-model:value="value" show-search placeholder="Công việc" :options="options"
                            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                            @change="handleChange"></a-select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">CMT/ CCCD</label>
                        <a-input type="" class="border p-2 rounded-md" placeholder="ID card" />
                    </div>


                </div>
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Tỉnh/ Thành phố</label>
                        <a-select v-model:value="valuePronvines" show-search placeholder="Tỉnh/Thành phố"
                            :options="provinces" :filter-option="filterOption" @focus="handleFocus"
                            @blur="handleBlur" @change="handleChangeProvince">
                        </a-select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Quận/ Huyện</label>
                        <a-select v-model:value="valueDistricts" show-search placeholder="Quận/Huyện"
                            :options="districts" :filter-option="filterOption" @focus="handleFocus"
                            @blur="handleBlur" @change="handleChangeDistrict">
                        </a-select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Phường/ Xã</label>
                        <a-select v-model:value="valueWards" show-search placeholder="Phường/Xã" :options="wards"
                            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                            @change="handleChangeWard">
                        </a-select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Đường</label>
                        <a-input v-model:value="address.street" class="border p-2 rounded-md "
                            placeholder="Đường" />
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-col gap-2 w-full">
                        <label for="">Địa chỉ cụ thể</label>
                        <a-input class="h-11"
                            :value="`${address.street}, ${address.ward}, ${address.district}, ${address.province}`"
                            readonly />
                    </div>
                </div>
                <div>
                    <div>
                        <a-upload v-model:file-list="fileList"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture">
                            <a-button class="flex justify-center gap-2 items-center text-base">
                                <upload-outlined></upload-outlined>
                                upload
                            </a-button>
                        </a-upload>
                    </div>
                </div>
            </div>
            <!-- Học Sinh -->
            <div class="flex flex-col gap-5" v-else>
                <div class="flex justify-between">
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Họ và tên</label>
                        <a-input type="text" class="border p-2 rounded-md" placeholder="Họ và tên" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
                        <a-input type="date" class="border p-2 rounded-md" />
                    </div>

                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold">Giới tính</label>
                        <div class="flex justify-start gap-4">
                            <a-checkbox>Nam</a-checkbox>
                            <a-checkbox>Nữ</a-checkbox>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                    </div>
                </div>
                <div class="flex justify-between ">
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Số điện thoại</label>
                        <a-input type="" class="border p-2 rounded-md" placeholder="Số điện thoại" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Email</label>
                        <a-input type="text" class="border p-2 rounded-md" placeholder="Email" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Công việc</label>
                        <a-input type="" class="border p-2 rounded-md" value="Học sinh, siên viên" readonly />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">

                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">CMT/ CCCD</label>
                        <a-input type="" class="border p-2 rounded-md" placeholder="ID card" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Mã số sinh viên</label>
                        <a-input type="" class="border p-2 rounded-md" placeholder="ID sinh viên" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Trường học /Cao đẳng /Đại học</label>
                        <a-input type="" class="border p-2 rounded-md" placeholder="Trường học" />
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Ngày kết thúc năm học</label>
                        <a-input type="date" class="border p-2 rounded-md" />
                    </div>

                </div>
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Tỉnh/ Thành phố</label>
                        <a-select v-model:value="valuePronvines" show-search placeholder="Tỉnh/Thành phố"
                            :options="provinces" :filter-option="filterOption" @focus="handleFocus"
                            @blur="handleBlur" @change="handleChangeProvince">
                        </a-select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Quận/ Huyện</label>
                        <a-select v-model:value="valueDistricts" show-search placeholder="Quận/Huyện"
                            :options="districts" :filter-option="filterOption" @focus="handleFocus"
                            @blur="handleBlur" @change="handleChangeDistrict">
                        </a-select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Phường/ Xã</label>
                        <a-select v-model:value="valueWards" show-search placeholder="Phường/Xã" :options="wards"
                            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                            @change="handleChangeWard">
                        </a-select>
                    </div>
                    <div class="flex flex-col gap-2 w-1/5">
                        <label class="text-sm font-semibold" for="">Đường</label>
                        <a-input v-model:value="address.street" class="border p-2 rounded-md "
                            placeholder="Đường" />
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-col gap-2 w-full">
                        <label for="">Địa chỉ cụ thể</label>
                        <a-input class="h-11"
                            :value="`${address.street}, ${address.ward}, ${address.district}, ${address.province}`"
                            readonly />
                    </div>
                </div>
                <div>
                    <div>
                        <a-upload v-model:file-list="fileList"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture">
                            <a-button class="flex justify-center gap-2 items-center text-base">
                                <upload-outlined></upload-outlined>
                                upload
                            </a-button>
                        </a-upload>
                    </div>
                </div>
            </div>
            <div class="flex justify-end">
                <button class="bg-[#54cc54] w-1/6 p-1 text-white text-xl rounded-lg">Thêm</button>
            </div>
        </div>

    </div>
</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  collapsed: boolean;
}>();
const selectedKeys = ref<string[]>(["1"]);
  const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');
const fileList = ref([]);
const role = ref(null);

const setRole = (selectedRole) => {
    role.value = selectedRole;
};

const baseStore = useBaseStore();
const provinces = ref([]);
const districts = ref([]);
const wards = ref([]);

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
const options = ref([
    {
        value: 'CNTT',
        label: 'CNTT',
    },
    {
        value: 'Y dược',
        label: 'Y dược',
    },
    {
        value: 'Học sinh',
        label: 'Học sinh, sinh viên',
    },
]);
const handleChange = value => {
    console.log(`selected ${value}`);
};
const handleBlur = () => {
    console.log('blur');
};
const handleFocus = () => {
    console.log('focus');
};
const filterOption = (input, option) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

</script>

<style scoped>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
    float: left;
    width: 200px;
    margin-right: 8px;
}

.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
    float: right;
}
</style>
