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
            <form :model="valuecreateBook" @submit.prevent="onSubmit">
                <div class="flex flex-col gap-10">
                    <!-- Sách -->
                    <div class="flex flex-col gap-5">
                        <div class="text-xl font-bold">Sách</div>
                        <div class="flex flex-col gap-2">

                            <div class="grid grid-rows-2 gap-5 ">
                                <div class="grid grid-cols-3 gap-10">
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Tác giả</label>
                                        <a-select v-model:value="valuecreateBook.author_id" show-search
                                            placeholder="Mã tác giả" :options="optionsAuthor"
                                            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                                            @change="handleChange"></a-select>
                                    </div>
                                    <div>
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-semibold" for="">Tên sách</label>
                                            <a-input type="text" class="border p-2 rounded-md" placeholder="Tên sách"
                                                v-model:value="valuecreateBook.title" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-semibold" for="">Tên góc</label>
                                            <a-input type="text" class="border p-2 rounded-md" placeholder="Tên góc"
                                                v-model:value="valuecreateBook.original_title" />
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-3 gap-10">
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Danh mục</label>
                                        <a-select v-model:value="valuecreateBook.category_id" show-search
                                            placeholder="Mã danh mục" :options="optionsCategory"
                                            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                                            @change="handleChange"></a-select>

                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Tủ sách </label>
                                        <a-select v-model:value="valuecreateBook.shelve_id" show-search
                                            placeholder="Mã tủ sách" :options="optionsShelve"
                                            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                                            @change="handleChange"></a-select>

                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Sách nổi bật</label>
                                        <a-checkbox v-model:checked="valuecreateBook.is_featured">Nổi bật</a-checkbox>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-full">
                                <div class="flex flex-col gap-4 w-full">
                                    <label class="text-sm font-semibold" for="">Mô tả</label>
                                    <a-textarea class="h-28" v-model:value="valuecreateBook.description_summary"
                                        placeholder="Mô tả ngắn" allow-clear />
                                </div>
                            </div>
                            <div class="flex w-full">
                                <div class="flex flex-col gap-4 w-full">
                                    <label class="text-sm font-semibold" for="">Mô tả chi tiết</label>
                                    <CommonCKEditor :value="valuecreateBook.description"
                                        @input="(event) => (valuecreateBook.description = event)" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border"></div>
                    <!-- Sách chi tiết -->
                    <div class="flex flex-col gap-5">
                        <div class="text-xl font-bold">Sách chi tiết</div>
                        <div class="flex flex-col gap-2">
                            <div class="grid grid-rows-1">
                                <div class="grid grid-cols-2 gap-10">
                                    <div class="flex flex-col gap-2"><label class="text-sm font-semibold"
                                            for="">Poster</label>
                                        <a-upload list-type="picture" :max-count="1"
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                            <a-button class="flex justify-between gap-3 items-center">
                                                <upload-outlined></upload-outlined>
                                                <h1>Upload Poster</h1>
                                            </a-button>
                                        </a-upload>
                                    </div>
                                    <div class="flex flex-col gap-2"><label class="text-sm font-semibold" for="">Hình
                                            ảnh
                                            chi tiết</label>
                                        <a-upload list-type="picture" :max-count="3"
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                            <a-button class="flex justify-between gap-3 items-center">
                                                <upload-outlined></upload-outlined>
                                                <h1>Upload hình ảnh chi tiết</h1>
                                            </a-button>
                                        </a-upload>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-rows-4 gap-5 my-5">
                                <div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Sku</label>
                                        <a-input type="text" class="border p-2 rounded-md" placeholder="Mã sách"
                                            v-model:value="valuecreateBook.book_detail.sku_origin" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 gap-10">
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Phiên bản sách</label>
                                        <a-input type="text" class="border p-2 rounded-md" placeholder="Phiên bản sách"
                                            v-model:value="valuecreateBook.book_detail.book_version" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Giá</label>
                                        <a-input type="number" class="border p-2 rounded-md" placeholder="Giá"
                                            v-model:value="valuecreateBook.book_detail.price" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Thuế</label>
                                        <a-input type="number" class="border p-2 rounded-md" placeholder="Thuế"
                                            v-model:value="valuecreateBook.book_detail.hire_percent" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Số lượng</label>
                                        <a-input type="number" class="border p-2 rounded-md" placeholder="Số lượng"
                                            v-model:value="valuecreateBook.book_detail.stock" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 gap-10">
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Ngày xuất bản</label>
                                        <a-input type="date" class="border p-2 rounded-md" placeholder="Ngày xuất bản"
                                            v-model:value="valuecreateBook.book_detail.publish_date" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Công ty phát hành</label>
                                        <a-input type="text" class="border p-2 rounded-md"
                                            placeholder="Công ty phát hành"
                                            v-model:value="valuecreateBook.book_detail.issuing_company" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Người biên dịch</label>
                                        <a-input type="text" class="border p-2 rounded-md" placeholder="Người biên dịch"
                                            v-model:value="valuecreateBook.book_detail.translator" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Nhà xuất bản</label>
                                        <a-select v-model:value="valuecreateBook.book_detail.publishing_company_id"
                                            show-search placeholder="Nhà xuất bản" :options="optionsPublishingcompany"
                                            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                                            @change="handleChange"></a-select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 gap-10">
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Số trang</label>
                                        <a-input type="number" class="border p-2 rounded-md" placeholder="Số trang"
                                            v-model:value="valuecreateBook.book_detail.total_page" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Ngôn ngữ</label>
                                        <a-input type="text" class="border p-2 rounded-md" placeholder="Ngôn ngữ"
                                            v-model:value="valuecreateBook.book_detail.language" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Kích thước sách</label>
                                        <a-input type="text" class="border p-2 rounded-md" placeholder="Kích thước sách"
                                            v-model:value="valuecreateBook.book_detail.book_size" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold" for="">Loại bìa</label>
                                        <a-select v-model:value="valuecreateBook.book_detail.cardboard" show-search
                                            placeholder="Loại bìa" :options="optionsCardboard"
                                            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                                            @change="handleChange"></a-select>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="flex justify-end">
                        <button class="bg-[#54cc54] w-1/6 p-1 text-white text-xl rounded-lg">
                            Thêm
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useShelvesStore } from "~/stores/bookshelveStore";
const isLoading = ref(false);
const fileList = ref([]);
const fileList2 = ref([]);
const optionsShelve = ref([]);
const shelvesValue = useShelvesStore();
const getDataShelvesValue = async () => {
    try {
        isLoading.value = true;
        const data = await shelvesValue.getAllShelves({});
        console.log("🚀 ~ getDataShelvesValue ~ data:", data.data._rawValue.data.shelves)
        optionsShelve.value = data.data._rawValue.data.shelves.map((shelve) => {
            return {
                value: shelve.id,
                label: shelve.description,
            };
        })
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};
const optionsCardboard = ref([
    {
        value: "soft",
        label: "Bìa mềm",
    },
    {
        value: "hard",
        label: "Bìa cứng",
    },
]);
const optionsPublishingcompany = ref([]);
const publishingcompanyValue = usePublishingCompanyStore();
const getDataPublishingcompanyValue = async () => {
    try {
        isLoading.value = true;
        const data = await publishingcompanyValue.getAllPublishingCompany({});
        optionsPublishingcompany.value = data.data._rawValue.data.publishing_companies.map((publishingcompany) => {
            return {
                value: publishingcompany.id,
                label: publishingcompany.name,
            };
        })
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};
const optionsCategory = ref([]);
const categoryValue = useCategoryStore();
const getDataCategory = async () => {
    try {
        isLoading.value = true;
        const data = await categoryValue.getAllCategory({ type: "book" });
        optionsCategory.value = data.data._rawValue.data.categories.map((category) => {
            return {
                value: category.id,
                label: category.name,
            };
        })
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};
const optionsAuthor = ref([]);
const authorValue = useAuthorStore();
const getDataAuthor = async () => {
    try {
        isLoading.value = true;
        const data = await authorValue.getAllAuthor({});
        optionsAuthor.value = data.data._rawValue.data.authors.map((author) => {
            return {
                value: author.id,
                label: author.author,
            };
        })
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};
const createBook = useBookStore();
const valuecreateBook = ref({
    author_id: "",
    title: "",
    original_title: "",
    description_summary: "",
    description: "",
    is_featured: false,
    category_id: "",
    shelve_id: "",
    book_detail: [{
        poster: "https://cdn0.fahasa.com/media/catalog/product/t/o/to_huu_tho_va_doi_1_2018_07_25_12_01_30.JPG",
        images: [
            "https://i0.wp.com/sachcugiadinh.wordpress.com/wp-content/uploads/2016/12/img_10661.jpg?ssl=1",
        ],
        sku_origin: "valuecreateBook.book_detail.sku_origin",
        book_version: "",
        price: "",
        hire_percent: "",
        stock: "",
        publish_date: "",
        issuing_company: "",
        translator: "",
        publishing_company_id: "",
        total_page: "",
        language: "",
        book_size: "",
        cardboard: "",
    }]
}
);

const onSubmit = async () => {
    // alert(JSON.stringify(valuecreateBook.value))
    try {
        isLoading.value = true;
        await createBook.createBook({
            sku: valuecreateBook.value.sku,
            author_id: valuecreateBook.value.author_id,
            title: valuecreateBook.value.title,
            original_title: valuecreateBook.value.original_title,
            description_summary: valuecreateBook.value.description_summary,
            description: valuecreateBook.value.description,
            is_featured: valuecreateBook.value.is_featured,
            category_id: valuecreateBook.value.category_id,
            shelve_id: valuecreateBook.value.shelve_id,
            book_detail: [{
                sku_origin: "123",
                poster: "https://cdn0.fahasa.com/media/catalog/product/t/o/to_huu_tho_va_doi_1_2018_07_25_12_01_30.JPG",
                images: [
                    "https://i0.wp.com/sachcugiadinh.wordpress.com/wp-content/uploads/2016/12/img_10661.jpg?ssl=1",
                    "https://i0.wp.com/sachcugiadinh.wordpress.com/wp-content/uploads/2016/12/img_10661.jpg?ssl=1",
                    "https://i0.wp.com/sachcugiadinh.wordpress.com/wp-content/uploads/2016/12/img_10661.jpg?ssl=1",
                ],
                book_version: valuecreateBook.value.book_detail.book_version,
                price: valuecreateBook.value.book_detail.price,
                hire_percent: valuecreateBook.value.book_detail.hire_percent,
                stock: valuecreateBook.value.book_detail.stock,
                publish_date: valuecreateBook.value.book_detail.publish_date,
                issuing_company: valuecreateBook.value.book_detail.issuing_company,
                translator: valuecreateBook.value.book_detail.translator,
                publishing_company_id: valuecreateBook.value.book_detail.publishing_company_id,
                total_page: valuecreateBook.value.book_detail.total_page,
                language: valuecreateBook.value.book_detail.language,
                book_size: valuecreateBook.value.book_detail.book_size,
                cardboard: valuecreateBook.value.book_detail.cardboard,
            }]

        });
        message.success("Thêm thành công");
        // navigateTo("/admin/book");
    } catch (error) {
        message.error("Thêm thất bại")
    } finally {
        isLoading.value = false;
    }
}



useAsyncData(async () => {
    await getDataAuthor();
    await getDataCategory();
    await getDataPublishingcompanyValue();
    await getDataShelvesValue();
});


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