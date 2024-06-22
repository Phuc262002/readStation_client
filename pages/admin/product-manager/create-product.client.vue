<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Tạo đơn hàng</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <!-- Đây là phần code mẫu body -->
        <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
            <div class="flex flex-col gap-10 ">
                <div class="flex flex-col gap-5">
                    <div class="font-bold text-xl">Thông tin khách hàng</div>
                    <div class="relative w-1/2 md:block hidden">
                        <div class="flex">
                            <input type="text"
                                class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
                                placeholder="Tìm kiếm..." />
                        </div>
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UIcon class="text-gray-500" name="i-material-symbols-search" />
                        </div>
                    </div>
                    <div class="grid grid-rows-5 gap-5 border-b border-gray-200 pb-10">
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-semibold" for="">Vai trò</label>
                            <div class="flex justify-start gap-4">
                                <a-checkbox @click="setRole('Customer')" :checked="role === 'Customer'">Khách
                                    hàng</a-checkbox>
                                <a-checkbox @click="setRole('Student')" :checked="role === 'Student'">Học
                                    sinh</a-checkbox>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">Họ và tên <span
                                        class="text-red-500">*</span></label>
                                <a-input type="text" class="border p-2 rounded-md" placeholder="Họ và tên" />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
                                <a-input type="date" class="border p-2 rounded-md"
                                    placeholder="Ngày, tháng, năm sinh" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold">Giới tính</label>
                                <div class="flex justify-start gap-4">
                                    <a-checkbox @click="setGender('male')" :checked="gender === 'male'">Nam</a-checkbox>
                                    <a-checkbox @click="setGender('female')"
                                        :checked="gender === 'female'">Nữ</a-checkbox>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">Số điện thoại <span
                                        class="text-red-500">*</span></label>
                                <a-input type="text" class="border p-2 rounded-md" placeholder="Số điện thoại" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">Email <span
                                        class="text-red-500">*</span></label>
                                <a-input type="text" class="border p-2 rounded-md" placeholder="Email" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">Công Việc</label>
                                <a-input type="text" class="border p-2 rounded-md" placeholder="Email" />
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">CMT/ CCCD</label>
                                <a-input type="text" class="border p-2 rounded-md" placeholder="Mã số CMT/ CCCD" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">Họ và tên</label>
                                <a-input type="text" class="border p-2 rounded-md" placeholder="Họ và tên" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">Ngày cấp</label>
                                <a-input type="date" class="border p-2 rounded-md" placeholder="Ngày cấp" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="text-sm font-semibold" for="">Nơi cấp</label>
                                <a-input type="text" class="border p-2 rounded-md" placeholder="Nơi cấp" />
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-4" v-if="role === 'Student'">
                            <div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">ID sinh viên</label>
                                    <a-input type="text" class="border p-2 rounded-md" placeholder="ID sinh viên" />
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">Họ tên</label>
                                    <a-input type="text" class="border p-2 rounded-md" placeholder="Họ tên" />
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">Ngày kết thúc năm học</label>
                                    <a-input style="height: 40px" type="date" class="border p-2 rounded-md"
                                        placeholder="Ngày hết hạn" />
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">Trường học/ Cao đẳng/ Đại học</label>
                                    <a-input type="text" class="border p-2 rounded-md" placeholder="Trường" />
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                            <div class="flex flex-col gap-2 ">
                                <label class="text-sm font-semibold" for="">Tỉnh/ Thành phố</label>
                                <a-select size="large" v-model:value="valuePronvines" show-search
                                    placeholder="Tỉnh/Thành phố" :options="provinces" :filter-option="filterOption"
                                    @focus="handleFocus" @blur="handleBlur" @change="handleChangeProvince">
                                </a-select>
                            </div>
                            <div class="flex flex-col gap-2 ">
                                <label class="text-sm font-semibold" for="">Quận/ Huyện</label>
                                <a-select size="large" v-model:value="valueDistricts" show-search
                                    placeholder="Quận/Huyện" :options="districts" :filter-option="filterOption"
                                    @focus="handleFocus" @blur="handleBlur" @change="handleChangeDistrict">
                                </a-select>
                            </div>
                            <div class="flex flex-col gap-2 ">
                                <label class="text-sm font-semibold" for="">Phường/ Xã</label>
                                <a-select size="large" v-model:value="valueWards" show-search placeholder="Phường/Xã"
                                    :options="wards" :filter-option="filterOption" @focus="handleFocus"
                                    @blur="handleBlur" @change="handleChangeWard">
                                </a-select>
                            </div>
                            <div class="flex flex-col gap-2 ">
                                <label class="text-sm font-semibold" for="">Đường</label>
                                <a-input v-model:value="address.street" class="border p-2 rounded-md "
                                    placeholder="Đường" />
                            </div>
                        </div>
                        <div class="grid gird-cols-1">
                            <div class="flex flex-col gap-2 w-full">
                                <label for="">Địa chỉ cụ thể</label>
                                <a-input class="h-11"
                                    :value="`${address.street}, ${address.ward}, ${address.district}, ${address.province}`"
                                    readonly />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-5">
                    <div class="font-bold text-xl">Thông tin đơn hàng</div>
                    <div class="relative w-full md:block hidden">
                        <div class="flex">
                            <input type="text"
                                class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
                                placeholder="Tìm kiếm..." />
                        </div>
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UIcon class="text-gray-500" name="i-material-symbols-search" />
                        </div>
                    </div>
                    <a-table :columns="columns" :data-source="data">
                        <template #headerCell="{ column }">
                            <template v-if="column.key === 'sku'">
                                <span> Mã sách</span>
                            </template>
                        </template>

                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'name'">
                                <a>
                                    {{ record.name }}
                                </a>
                            </template>
                            <template v-else-if="column.key === 'action'">
                                <div class="flex text-[16px] gap-4">
                                    <a-tooltip placement="top" color="gold">
                                        <template #title>
                                            <span>Xem chi tiết</span>
                                        </template>
                                        <span
                                            class="hover:bg-[#faad14]/20 flex items-center justify-center w-6 h-6 rounded-md">
                                            <UIcon class="hover:text-[#faad14]" name="i-icon-park-outline-eyes" />
                                        </span>
                                    </a-tooltip>
                                    <a-tooltip placement="top" color="green">
                                        <template #title>
                                            <span>Sửa</span>
                                        </template>
                                        <span
                                            class="hover:bg-[green]/20 flex items-center justify-center w-6 h-6 rounded-md">
                                            <div>
                                                <button @click="showModal">
                                                    <UIcon class="hover:text-[green]"
                                                        name="i-material-symbols-edit-outline" />
                                                </button>
                                                <a-modal v-model:open="open" title="Sửa sách" @ok="handleOk">
                                                    <div class="">

                                                    </div>
                                                </a-modal>
                                            </div>
                                        </span>
                                    </a-tooltip>
                                    <a-tooltip placement="top" color="red">
                                        <template #title>
                                            <span>Xóa</span>
                                        </template>
                                        <span
                                            class="hover:bg-[red]/20 flex items-center justify-center w-6 h-6 rounded-md">
                                            <a-popconfirm title="Are you sure delete this task?" placement="right"
                                                ok-text="Yes" cancel-text="No" @confirm="confirm" @cancel="cancel">
                                                <a href="#">
                                                    <UIcon class="hover:text-[red]"
                                                        name="i-material-symbols-delete-outline" />
                                                </a>
                                            </a-popconfirm>
                                        </span>
                                    </a-tooltip>
                                </div>
                            </template>
                        </template>
                    </a-table>

                </div>

                <div class="flex justify-end gap-2">
                    <a-button type="default">Hủy</a-button>
                    <a-button html-type="submit" type="primary">Thêm</a-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const role = ref("Customer");
const setRole = (selectedRole) => {
    role.value = selectedRole;
};
const gender = ref("male");
const setGender = (selecteGender) => {
    gender.value = selecteGender;
};
const columns = [
    {
        name: "Mã sách",
        dataIndex: "sku",
        key: "sku",
    },
    {
        title: "Tên sách",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "Tác giả",
        dataIndex: "author",
        key: "author",
    },
    {
        title: "Danh mục",
        dataIndex: "category",
        key: "category",
    },
    {
        title: "Mô tả",
        dataIndex: "dicription",
        key: "dicription",
    },
    {
        title: "Action",
        key: "action",
    },
];

const data = [
    {
        key: "1",
        sku: "123",
        title: "Cho tôi vé đi tuổi thơ",
        author: "Nguyễn Nhật Ánh",
        category: "New York No. 1 Lake Park",
        dicription: "My name is John Brown",
    },
];

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

</script>