<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Tạo đơn hàng</h5>
            </div>
           
        </div>

        <!-- Đây là phần code mẫu body -->
        <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
            <div class="flex flex-col gap-10 ">
                <form @submit.prevent="onSubmit">
                    <div class="flex flex-col gap-5">
                        <div class="font-bold text-xl">Thông tin khách hàng</div>
                        <div class="relative w-1/2 md:block hidden">
                            <div class="flex">
                                <a-dropdown :open="valueSearchUser !== ''">
                                    <a-input placeholder="Nhập thông tin khách hàng" class="h-10"
                                        v-model:value="valueSearchUser" @click.prevent allow-clear>
                                        <template #prefix>
                                            <SearchOutlined />
                                        </template>
                                    </a-input>
                                    <template #overlay>
                                        <a-menu class="overflow-auto max-h-[400px]">
                                            <a-menu-item v-if="userStore.isLoading">
                                                <div class="p-10 flex justify-center">
                                                    <a-spin />
                                                </div>
                                            </a-menu-item>
                                            <a-menu-item v-else v-for="(items, index) in userStore?.userAdmin?.users"
                                                :key="index">
                                                <div class="flex justify-start gap-5 items-center"
                                                    v-if="userStore?.userAdmin?.users" @click="showOneUser(items?.id)">
                                                    <div>
                                                        <img class="rounded-lg w-20 h-20" :src="items.avatar" alt="">
                                                    </div>
                                                    <div class="text-base font-medium">{{ items?.fullname }}</div>
                                                </div>
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                </a-dropdown>

                            </div>
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UIcon class="text-gray-500" name="i-material-symbols-search" />
                            </div>
                        </div>
                        <div class="grid grid-rows-5 gap-5 border-b border-gray-200 pb-10">
                            <div class="flex flex-col gap-4">
                                <label class="text-sm font-semibold">Vai trò</label>
                                <div class="flex justify-start gap-4">
                                    <a-radio-group @change="handleChangeRoleId" v-model:value="inforUser.role"
                                        name="role_id">
                                        <a-radio>Khách hàng</a-radio>
                                        <a-radio>Học sinh</a-radio>
                                    </a-radio-group>
                                </div>
                            </div>
                            <div class="grid grid-cols-4 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">Họ và tên <span
                                            class="text-red-500">*</span></label>
                                    <a-input type="text" v-model:value="inforUser.fullname"
                                        class="border p-2 rounded-md" placeholder="Họ và tên" />
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
                                    <a-input type="date" class="border p-2 rounded-md" v-model:value="inforUser.dob"
                                        placeholder="Ngày, tháng, năm sinh" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold">Giới tính</label>
                                    <div class="flex justify-start gap-4">
                                        <a-radio @click="setGender('male')" :checked="gender === 'male'">Nam</a-radio>
                                        <a-radio @click="setGender('female')"
                                            :checked="gender === 'female'">Nữ</a-radio>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-4 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">Số điện thoại <span
                                            class="text-red-500">*</span></label>
                                    <a-input type="text" class="border p-2 rounded-md" placeholder="Số điện thoại"
                                        v-model:value="inforUser.phone" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">Email <span
                                            class="text-red-500">*</span></label>
                                    <a-input type="text" class="border p-2 rounded-md" placeholder="Email"
                                        v-model:value="inforUser.email" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-sm font-semibold" for="">Công Việc</label>
                                    <a-input type="text" class="border p-2 rounded-md" placeholder="Công việc"
                                        v-model:value="inforUser.job" />
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
                                        <label class="text-sm font-semibold" for="">Trường học/ Cao đẳng/ Đại
                                            học</label>
                                        <a-input type="text" class="border p-2 rounded-md" placeholder="Trường" />
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="grid grid-cols-4 gap-4">
                                <div class="flex flex-col gap-2 ">
                                    <label class="text-sm font-semibold" for="">Tỉnh/ Thành phố</label>
                                    <a-select size="large" v-model:value="inforUser.province.ProvinceName" show-search
                                        placeholder="Tỉnh/Thành phố" :options="provinces" :filter-option="filterOption"
                                        @focus="handleFocus" @blur="handleBlur" @change="handleChangeProvince">
                                    </a-select>
                                </div>
                                <div class="flex flex-col gap-2 ">
                                    <label class="text-sm font-semibold" for="">Quận/ Huyện</label>
                                    <a-select size="large" v-model:value="inforUser.district.DistrictName" show-search
                                        placeholder="Quận/Huyện" :options="districts" :filter-option="filterOption"
                                        @focus="handleFocus" @blur="handleBlur" @change="handleChangeDistrict">
                                    </a-select>
                                </div>
                                <div class="flex flex-col gap-2 ">
                                    <label class="text-sm font-semibold" for="">Phường/ Xã</label>
                                    <a-select size="large" v-model:value="inforUser.ward.WardName" show-search
                                        placeholder="Phường/Xã" :options="wards" :filter-option="filterOption"
                                        @focus="handleFocus" @blur="handleBlur" @change="handleChangeWard">
                                    </a-select>
                                </div>
                                <div class="flex flex-col gap-2 ">
                                    <label class="text-sm font-semibold" for="">Đường</label>
                                    <a-input v-model:value="inforUser.street" class="border p-2 rounded-md "
                                        placeholder="Đường" />
                                </div>
                            </div>
                            <div class="grid gird-cols-1">
                                <div class="flex flex-col gap-2 w-full">
                                    <label for="">Địa chỉ cụ thể</label>
                                    <a-input class="h-11" :value="inforUser.address_detail" readonly />
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="flex flex-col gap-5 mt-4">
                        <div class="font-bold text-xl">Thông tin đơn hàng</div>
                        <div class="relative w-full md:block hidden">
                            <div class="flex">
                                <a-dropdown :open="valueSearchBook !== ''">
                                    <a-input placeholder="Nhập tên sách" class="h-10" v-model:value="valueSearchBook"
                                        @click.prevent allow-clear>
                                        <template #prefix>
                                            <SearchOutlined />
                                        </template>
                                    </a-input>
                                    <template #overlay>
                                        <a-menu class="overflow-auto max-h-[400px]">
                                            <a-menu-item v-if="bookStore.isLoading">
                                                <div class="p-10 flex justify-center">
                                                    <a-spin />
                                                </div>
                                            </a-menu-item>
                                            <a-menu-item v-else v-for="(items, index) in bookStore?.adminBooks?.books"
                                                :key="index">
                                                <div class="flex justify-start gap-5 items-center"
                                                    v-if="bookStore?.adminBooks?.books" @click="showBook(items?.id)">
                                                    <div>
                                                        <img class="rounded-lg w-20 h-28"
                                                            :src="items?.book_detail[0]?.poster" alt="">
                                                    </div>
                                                    <div class="text-base font-medium">{{ items?.title }}</div>
                                                    <div class="text-base font-medium">{{ items?.author?.author }}</div>
                                                </div>
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                </a-dropdown>
                            </div>
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UIcon class="text-gray-500" name="i-material-symbols-search" />
                            </div>
                        </div>
                        <a-table :columns="columns" :data-source="data">
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'name'">
                                    <a>
                                        {{ record.name }}
                                    </a>
                                </template>
                                <template v-if="column.key === 'title'">
                                    <div class="flex gap-5 items-center">
                                        <img :src="record?.book_detail[0]?.poster" class="w-24 h-32 rounded-lg" />
                                        <span>{{ record?.title }}</span>
                                    </div>
                                </template>
                                <template v-if="column.key === 'price'">
                                    <div class="flex gap-5 items-center">
                                        <span>{{ new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(record?.book_detail[0].price) }}</span>
                                    </div>

                                </template>
                                <template v-if="column.key === 'author'">
                                    <div class="flex gap-5 items-center">
                                        <span>{{ record?.author?.author }}</span>
                                    </div>
                                </template>
                                <template v-if="column.key === 'category'">
                                    <div class="flex gap-5 items-center">
                                        <span>{{ record?.category?.name }}</span>
                                    </div>
                                </template>
                                <template v-else-if="column.key === 'action'">
                                    <div class="flex text-[16px] gap-4">
                                        <a-tooltip placement="top" color="red">
                                            <template #title>
                                                <span>Xóa</span>
                                            </template>
                                            <button @click.prevent="showConfirm(record?.id)"
                                                class="group hover:bg-[red]/20 bg-[#e4e1e1] flex items-center justify-center cursor-pointer w-8 h-8 rounded-md">
                                                <UIcon class="group-hover:text-[red]"
                                                    name="i-material-symbols-delete-outline" />
                                            </button>
                                        </a-tooltip>
                                    </div>
                                </template>
                            </template>
                        </a-table>
                    </div>
                    <div v-if="data.length > 0" class="flex flex-col gap-5 mt-4">
                        <div class="font-bold text-xl">Phương thức thanh toán</div>
                        <div class="flex flex-col gap-4">
                            <div class="flex gap-2">
                                <a-radio @click="setPayment('cash')" :checked="paymentMethod === 'cash'">Thanh
                                    toán tiền mặt</a-radio>
                                <a-radio @click="setPayment('online')" :checked="paymentMethod === 'online'">Thanh toán
                                    chuyển
                                    khoản</a-radio>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end gap-2 mt-4">
                        <a-button type="default">Hủy</a-button>
                        <a-button type="primary" html-type="submit" :loading="orderStore.isSubmitting">Thêm</a-button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const orderStore = useOrderStore();
const gender = ref("male");
const setGender = (selecteGender) => {
    gender.value = selecteGender;
};
const valueSearchUser = ref('');
const userStore = useUserStore()
useAsyncData(async () => {
    try {
        await userStore.getUser({
            search: valueSearchUser.value,
        })
    } catch (error) {

    }
},
    {
        immediate: true,
        watch: [valueSearchUser]
    }
)
const inforUser = ref({
    id: "",
    role: "",
    fullname: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    job: "",
    citizen_identity_card: "",
    province: "",
    district: "",
    ward: "",
    street: "",
    address_detail: "",
})

const showOneUser = async (id) => {
    try {
        const data = await userStore.getOneUser(id)
        inforUser.value = data?.data?._rawValue?.data
    } catch (error) {
        console.log(error)
    }
    valueSearchUser.value = '';
}

const valueSearchBook = ref('');
const bookStore = useBookStore();
useAsyncData(async () => {
    try {
        await bookStore.getAdminBooks({
            search: valueSearchBook.value,
        })
    } catch (error) {
        console.log(error)
    }
},
    {
        immediate: true,
        watch: [valueSearchBook]
    }
)
const data = ref([]);
console.log(data.value)
const showBook = async (id) => {
    const selectedBook = bookStore?.adminBooks?.books?.find((book) => book?.id === id)
    const existingBook = data.value.find(item => item.id === selectedBook.id);
    if (!existingBook) {
        if (selectedBook) {
            if (data.value.length < 3) {
                const newData = [...data.value]
                newData.push(selectedBook);
                data.value = newData;
            } else {
                message.error("Chỉ được thêm tối đa 3 cuốn sách")
            }
        }
    } else {
        message.error("Sách đã được thêm")
    }
    valueSearchBook.value = '';
}
const paymentMethod = ref('cash');
const setPayment = (selectePayment) => {
    paymentMethod.value = selectePayment;
};
const onSubmit = async () => {
    const valueOrder = {
        user_id: inforUser.value?.id,
        payment_method: paymentMethod.value,
        discount: 0,
        total_service_fee: 100000,
        total_deposit_fee: 110000,
        total_all_fee: 120000,
        order_details: []
    }
    data.value.forEach(item => {
        const orderDetail = {
            book_details_id: item.id,
            service_fee: 122220,
            deposit_fee: 122220
        }
        valueOrder.order_details.push(orderDetail);
    });
    try {
        await orderStore.creatOrder(valueOrder)
    } catch (error) {
        message.error("Thêm thất bại");
    }
}


const columns = [
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
        title: "Giá",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Danh mục",
        dataIndex: "category",
        key: "category",
    },
    {
        title: "Action",
        key: "action",
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
const handleChangeRoleId = (e) => {
    user.value.role_id = e.target.value;
};
const showConfirm = (id) => {
    Modal.confirm({
        title: 'Bạn có chắc loại bỏ sách này không?',
        onOk() {
            deleteBook(id)
        },
        onCancel() {
            console.log('Cancel');
        },

    });
};
const deleteBook = (id) => {
    const newData = data.value.filter(item => item.id !== id);
    data.value = newData;
};
</script>