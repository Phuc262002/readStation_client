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
                    <div class="flex flex-col gap-2">
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
                                <a-select v-model:value="valueWards" show-search placeholder="Phường/Xã"
                                    :options="wards" :filter-option="filterOption" @focus="handleFocus"
                                    @blur="handleBlur" @change="handleChangeWard">
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
                    </div>


                </div>
                <div class="border "></div>
                <div class="flex flex-col gap-5">
                    <div class="font-bold text-xl">Thông tin đơn hàng</div>
                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between">
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Tên sách</label>
                                <a-input type="text" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Giá tiền</label>
                                <a-input type="number" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Loại bìa sách</label>
                                <a-input type="text" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Tủ sách</label>
                                <a-input type="text" class="border p-2 rounded-md" />
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Phí dịch vụ</label>
                                <a-input type="number" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Phí cọc</label>
                                <a-input type="text" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Phí phạt (Quá hạn trả sách)</label>
                                <a-input type="text" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Tổng cộng</label>
                                <a-input type="text" class="border p-2 rounded-md" />
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Ngày thuê</label>
                                <a-input type="date" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Ngày hết hạn</label>
                                <a-input type="date" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Ngày trả sách</label>
                                <a-input type="date" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Phương thức thanh toán</label>
                                <a-select v-model:value="value" show-search placeholder="Chọn phương thức thanh toán"
                                    :options="optionsPayment" :filter-option="filterOption" @focus="handleFocus"
                                    @blur="handleBlur" @change="handleChange"></a-select>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Hình thức nhận sách</label>
                                <a-select v-model:value="value" show-search placeholder="Chọn hình thức nhận sách"
                                    :options="optionsShipping" :filter-option="filterOption" @focus="handleFocus"
                                    @blur="handleBlur" @change="handleChange"></a-select>
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">Số điện thoại</label>
                                <a-input type="text" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">label</label>
                                <a-input type="text" class="border p-2 rounded-md" />
                            </div>
                            <div class="flex flex-col gap-2 w-1/5">
                                <label class="text-sm font-semibold" for="">label</label>
                                <a-input type="text" class="border p-2 rounded-md" />
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
                                <a-select v-model:value="valueWards" show-search placeholder="Phường/Xã"
                                    :options="wards" :filter-option="filterOption" @focus="handleFocus"
                                    @blur="handleBlur" @change="handleChangeWard">
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
                                <label class="text-sm font-semibold" for="">Địa chỉ cụ thể</label>
                                <a-input class="h-11"
                                    :value="`${address.street}, ${address.ward}, ${address.district}, ${address.province}`"
                                    readonly />
                            </div>
                        </div>
                        <div class="flex w-full">
                            <div class="flex flex-col gap-4 w-full">
                                <label class="text-sm font-semibold" for="">Ghi chú khách hàng</label>
                                <a-textarea class="h-28" v-model:value="description_sumamry" placeholder="Mô tả ngắn"
                                    allow-clear />
                            </div>
                        </div>
                        <div class="flex w-full">
                            <div class="flex flex-col gap-4 w-full">
                                <label class="text-sm font-semibold" for="">Ghi chú quản lý </label>
                                <a-textarea class="h-28" v-model:value="description_sumamry" placeholder="Mô tả ngắn"
                                    allow-clear />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end">
                    <button class="bg-[#54cc54] w-1/6 p-1 text-white text-xl rounded-lg">Thêm</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const optionsPayment = ref([
    { value: "1", label: "Thanh toán bằng ví" },
    { value: "2", label: "Thanh toán tiền mặt" },
]);
const optionsShipping = ref([
    { value: "1", label: "Nhận tại cửa hàng" },
    { value: "2", label: "Giao hàng tận nơi" },
]);



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