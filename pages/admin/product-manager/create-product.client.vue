<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-bold">Tạo đơn hàng</h5>
            </div>

        </div>
        <div class="mb-4 space-y-1" v-if="errors">
            <a-alert v-for="(error, index) in errors" :message="error" type="error" show-icon />
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
                    </div>
                    <div class="flex flex-col gap-5 mt-5" v-if="inforUser.fullname">
                        <div class="font-bold text-xl">Tạo đơn hàng cho khách hàng {{ inforUser.fullname }}</div>
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
                        <a-table :columns="columns" :data-source="data" :pagination="false">
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
                                    <div class="flex text-[16px] gap-2">
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
                    <div class="flex justify-end gap-2 mt-4" v-if="data.length > 0">
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
const errors = ref({});
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
        console.error(error)
    }
},
    {
        immediate: true,
        watch: [valueSearchUser]
    }
)
const inforUser = ref({
    id: "",
    fullname: "",
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
        const res = await orderStore.creatOrder(valueOrder)
        if (res.data._rawValue?.status == true) {
            message.success("Thêm đơn hàng thành công");
        } else {
            errors.value = res.data._rawValue?.errors;
            message.error(res.data._rawValue?.errors);
        }
    } catch (error) {
        message.error(error);
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
        title: "Thao tác",
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
    try {
        const data = await baseStore.getProvinces();
        provinces.value = data.data._rawValue.data.map((item) => {
            return {
                value: item.ProvinceID,
                label: item.ProvinceName,
            };
        });
    } catch (error) {
        console.error(error);

    }
});

useAsyncData(
    async () => {
        try {
            const dataDistricts = await baseStore.getDistricts(valuePronvines._value);
            districts.value = dataDistricts.data._rawValue.data.map((item) => ({
                value: item.DistrictID,
                label: item.DistrictName,
            }));
        } catch (error) {
            console.error(error);
        }
    },
    {
        watch: valuePronvines,
    }
);

useAsyncData(
    async () => {
        try {
            const dataWards = await baseStore.getWards(valueDistricts._rawValue);
            wards.value = dataWards.data._rawValue.data.map((item) => ({
                value: item.WardCode,
                label: item.WardName,
            }));
        } catch (error) {
            console.error(error);
        }
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
    try {
        const newData = data.value.filter(item => item.id !== id);
        data.value = newData;
    } catch (error) {
        message.error("Xóa sách thất bại");
        console.error(error);
    }
};
</script>