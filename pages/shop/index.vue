<template>
    <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
        <div class="flex gap-6">
            <div class="w-1/5 bg-white rounded-lg h-fit">
                <div class="px-4 py-3 text-lg font-semibold border-b-2">
                    Khám phá theo danh mục
                </div>
                <div>
                    <div
                        class="px-4 py-2 text-base flex justify-between items-cente"
                        @click="toggleCategories('category1')"
                    >
                        <span> Sách giáo khoa</span>
                        <img
                            ref="bookIcon1"
                            class="rotate-180"
                            width="20"
                            height="20"
                            src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                            alt=""
                        />
                    </div>
                    <div
                        v-if="showCategories.category1.value"
                        class="px-4 space-y-4 pb-3"
                    >
                        <ul class="px-4 space-y-1">
                            <li>
                                <button>Toán</button>
                            </li>
                            <li>
                                <button>Văn</button>
                            </li>
                            <li>
                                <button>Anh</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div
                        class="px-4 py-2 text-base flex justify-between items-center border-t-2"
                        @click="toggleCategories('category2')"
                    >
                        <span> Sách khác</span>
                        <img
                            ref="bookIcon2"
                            class="rotate-180"
                            width="20"
                            height="20"
                            src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                            alt=""
                        />
                    </div>
                    <div
                        v-if="showCategories.category2.value"
                        class="px-4 pb-3"
                    >
                        <ul class="px-4 space-y-1">
                            <li>
                                <button>Lịch sử</button>
                            </li>
                            <li>
                                <button>Văn hóa</button>
                            </li>
                            <li>
                                <button>Khoa học</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="w-4/5 rounded-lg h-fit">
                <div class="grid gap-y-4">
                    <div class="bg-[#ffffff] rounded-lg">
                        <div class="text-xl px-4 py-3 border-b-2">
                            Tất cả sản phẩm
                        </div>
                        <div
                            class="flex gap-5 justify-between items-center px-4 h-fit"
                        >
                            <div class="text-base">1234 sản phẩm</div>
                            <div
                                class="text-base px-4 py-3 text-right flex items-center"
                            >
                                <div class="px-4 text-[#cac9cd]">Sắp xếp</div>
                                <a-select
                                    ref="select"
                                    v-model:value="value1"
                                    @change="handleChange"
                                >
                                    <a-select-option value="jack"
                                        >Jack</a-select-option
                                    >
                                    <a-select-option value="lucy"
                                        >Lucy</a-select-option
                                    >

                                    <a-select-option value="Yiminghe"
                                        >yiminghe</a-select-option
                                    >
                                </a-select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="grid grid-cols-4 gap-2">
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                            <CommonProductBook />
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <a-pagination
                            v-model:current="current"
                            :total="50"
                            show-less-items
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const showCategories = {
            category1: ref(false),
            category2: ref(false),
        };

        const toggleCategories = (category) => {
            showCategories[category].value = !showCategories[category].value;
            // Thực hiện quay hình ảnh khi thay đổi trạng thái showCategories
            const bookIcon = document.getElementById(
                `bookIcon${category.charAt(category.length - 1)}`,
            );
            if (showCategories[category].value) {
                bookIcon.style.transform = "rotate(180deg)"; // Quay hình ảnh 90 độ khi showCategories là true
            } else {
                bookIcon.style.transform = "rotate(0deg)"; // Đặt lại góc quay về 0 độ khi showCategories là false
            }
        };

        const value1 = ref("lucy");
        const handleChange = (value) => {
            console.log(`selected ${value}`);
        };
        const current = ref(1);

        return {
            showCategories,
            toggleCategories,
            value1,
            handleChange,
            current,
        };
    },
});
</script>
<style scoped>
:deep(.ant-select-selector) {
    border-radius: 200px !important;
}
</style>
