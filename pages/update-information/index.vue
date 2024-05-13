<template>
    <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
        <div class="h-auto flex justify-between items-center gap-9">
            <!-- Right -->
            <div class="w-3/5 h-full">
                <div class=" flex flex-col gap-6">
                    <div class="">
                        <h1 class="text-2xl font-semibold">Xin chào,</h1>
                    </div>
                    <div class="">
                        <p class="text-lg">Cập nhật tài khoản</p>
                    </div>
                    <div class="">
                        <form action="" class="flex flex-col gap-4 ">
                            <div class="h-8">
                                <a-input placeholder="Họ và tên" />
                            </div>
                            <div class="h-8 ">
                                <a-input placeholder="Số điện thoại" />
                            </div>
                            <div class="h-8 ">
                                <a-input placeholder="Email" readonly />
                            </div>
                            <div class="flex w-full gap-3 ">
                                <a-select v-model:value="valuePronvines" show-search placeholder="Tỉnh/Thành phố" class="w-1/3"
                                    :options="provinces" :filter-option="filterOption" @focus="handleFocus"
                                    @blur="handleBlur" @change="handleChangeProvince">
                                </a-select>
                                <a-select v-model:value="valueDistricts" show-search placeholder="Quận/Huyện" class="w-1/3"
                                    :options="districts" :filter-option="filterOption" @focus="handleFocus"
                                    @blur="handleBlur" @change="handleChangeDistrict">
                                </a-select>
                                <a-select v-model:value="valueWards" show-search placeholder="Quận/Huyện" class="w-1/3"
                                    :options="wards" :filter-option="filterOption" @focus="handleFocus"
                                    @blur="handleBlur" @change="handleChangeWard">
                                </a-select>
                            </div>
                            <div class="h-8 ">
                                <a-input placeholder="Đường" />
                            </div>
                            <div class="h-8">
                                <a-input placeholder="Địa chỉ" readonly />
                            </div>
                            <div class="h-8 ">
                                <a-input placeholder="Mã giới thiệu" />
                            </div>
                        </form>
                    </div>
                    <div class="">
                        <button class="w-full bg-[#162D3A] h-11 rounded-lg text-lg text-white">
                            Cập nhật
                        </button>
                    </div>
                    <div class="">
                        <span>Bằng việc tiếp tục, bạn đọc và đồng ý với <span class="border-b-2">điều khoản sử
                                dụng</span> và <span class="border-b-2">Chính sách bảo mật thông tin cá nhân của
                            </span>ReadStation</span>
                    </div>
                </div>
            </div>
            <!-- Left -->
            <div class="w-2/5 bg-blue-500 h-full">
                <img class="w-full"
                    src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715212800&semt=sph"
                    alt="">
            </div>
        </div>
    </div>
</template>
<script setup>


import { ref } from 'vue';
const baseStore = useBaseStore();

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
            label: item.ProvinceName
        };
    });
});

useAsyncData(async () => {
    const dataDistricts = await baseStore.getDistricts(valuePronvines._value);
    districts.value = dataDistricts.data._rawValue.data.map(item => ({
        value: item.DistrictID,
        label: item.DistrictName
    }));
},{
    watch: valuePronvines
});

useAsyncData(async () => {
    const dataWards = await baseStore.getWards(valueDistricts._value);
    wards.value = dataWards.data._rawValue.data.map(item => ({
        value: item.WardID,
        label: item.WardName
    }));
},{
    watch: valueDistricts
});

const handleChangeProvince = valuePronvines => {
    console.log(`selected province ${valuePronvines}`);
};

const handleChangeDistrict = valueDistricts => {
    console.log(`selected district ${valueDistricts}`);
};
const handleChangeWard = valueWards => {
    console.log(`selected district ${valueWards}`);
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

console.log(valueDistricts);
</script>