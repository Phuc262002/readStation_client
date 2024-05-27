<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Thêm sách</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <!-- Đây là phần code mẫu body -->
        <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-3 w-full">
                    <div class="flex justify-start gap-5 mb-5">
                        <div class="w-1/2 flex flex-col gap-2">
                            <label class="text-sm font-semibold" for="">Poster</label>
                            <a-upload v-model:file-list="fileList" list-type="picture" :max-count="1"
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                <a-button class="flex justify-between gap-3 items-center">
                                    <upload-outlined></upload-outlined>
                                    <h1>Upload Poster</h1>
                                </a-button>
                            </a-upload>
                        </div>
                        <div class="w-1/2 flex flex-col gap-2">
                            <label class="text-sm font-semibold" for="">Hình ảnh chi tiết</label>
                            <a-upload v-model:file-list="fileList2" list-type="picture" :max-count="3"
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                <a-button class="flex justify-between gap-3 items-center">
                                    <upload-outlined></upload-outlined>
                                    <h1>Upload hình ảnh chi tiết</h1>
                                </a-button>
                            </a-upload>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Mã đơn hàng</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Tác giả</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Tiêu đề</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">original_title</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Phiên bản sách</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Giá sách</label>
                            <a-input type="number" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Thuế</label>
                            <a-input type="number" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Số lượng</label>
                            <a-input type="number" class="border p-2 rounded-md" />
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Ngày xuất bản</label>
                            <a-input type="date" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Nhà xuất bản</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Công ty phát hành</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Người biên dịch</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Ngôn ngữ</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Tổng số trang</label>
                            <a-input type="number" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Kích thước sách</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Sách nổi bật</label>
                            <a-radio></a-radio>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Danh mục</label>
                            <a-select v-model:value="valueCategory" show-search placeholder="Mã danh mục" :options="optionsCategory"
                                :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                                @change="handleChange"></a-select>
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Kệ sách</label>
                            <a-select v-model:value="valueShelve" show-search placeholder="Mã kệ sách" :options="optionsShelve"
                                :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                                @change="handleChange"></a-select>
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Loại bìa</label>
                            <a-select v-model:value="valueCardboard" show-search placeholder="Loại bìa" :options="optionsCardboard"
                                :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                                @change="handleChange"></a-select>
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">

                        </div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex flex-col gap-4 w-full">
                            <label class="text-sm font-semibold" for="">Mô tả</label>
                            <a-textarea class="h-28" v-model:value="description_sumamry" placeholder="Mô tả ngắn"
                                allow-clear />
                        </div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex flex-col gap-4 w-full">
                            <label class="text-sm font-semibold" for="">Mô tả chi tiết</label>
                            <CommonCKEditor />
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <button class="bg-[#54cc54] w-1/6 p-1 text-white text-xl rounded-lg">
                        Thêm
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(false);
const description_sumamry = ref("");
const fileList = ref([]);
const fileList2 = ref([]);
const optionsCategory = ref([
    {
        value: "Loại 1",
        label: "Khoa học tự nhiên",
    },
    {
        value: "Loại 2",
        label: "Khoa học xã hội",
    },
]);
const optionsShelve = ref([
    {
        value: "Kệ 1",
        label: "Kệ 1",
    },
    {
        value: "Kệ 2",
        label: "Kệ 2",
    },
]);
const optionsCardboard = ref([
    {
        value: "Bìa cứng",
        label: "Bìa cứng",
    },
    {
        value: "Bìa mềm",
        label: "Bìa mềm",
    },
]);
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const handleBlur = () => {
    console.log("blur");
};
const handleFocus = () => {
    console.log("focus");
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