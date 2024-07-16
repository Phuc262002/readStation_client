<template>
  <a-modal v-model:open="props.openModalAdd" title="Thêm phiên bản sách" :footer="null" :onCancel="handleClose"
    style="width: 1200px;">
    <div class="flex flex-col gap-5 mt-5">
      <div class="border border-t-2"></div>
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col gap-5">
          <div class="grid grid-rows-1">
            <div class="grid grid-cols-2 gap-10">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Ảnh chính</label>
                <ClientOnly>
                  <a-spin tip="Đang xử lý..." :spinning="baseStore.isSubmitting">
                    <a-upload-dragger v-model:fileList="fileList" list-type="picture" name="image" :multiple="false"
                      :action="(file) => uploadFile(file)" @change="handleChangeImage" @drop="handleDrop"
                      :before-upload="beforeUpload" :remove="(file) => deleteFile(file)">
                      <p class="ant-upload-drag-icon">
                        <inbox-outlined></inbox-outlined>
                      </p>
                      <p class="ant-upload-text">Click hoặc kéo thả file vào đây</p>
                      <p class="ant-upload-hint">Hoặc nhấn vào đây để chọn file</p>
                    </a-upload-dragger>
                  </a-spin>
                </ClientOnly>
              </div>
              <div class="flex flex-col gap-2"><label class="text-sm font-semibold" for="">Bộ sưu tập</label>
                <a-upload list-type="picture" :max-count="3" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                  <a-button class="flex justify-between gap-3 items-center">
                    <upload-outlined></upload-outlined>
                    <h1>Bộ sưu tập</h1>
                  </a-button>
                </a-upload>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold" for="">Sku</label>
            <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Mã sách"
              v-model:value="valueBookDetail.sku_origin" />
          </div>
          <div class="grid grid-rows-3 gap-5 ">
            <div class="grid grid-cols-4 gap-10">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Phiên bản sách</label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Phiên bản sách"
                  v-model:value="valueBookDetail.book_version" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Số lượng</label>
                <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Số lượng"
                  v-model:value="valueBookDetail.stock" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Giá</label>
                <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Giá"
                  v-model:value="valueBookDetail.price" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Tiền cọc</label>
                <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Tiền cọc"
                  v-model:value="valueBookDetail.hire_percent" />
              </div>
            </div>
            <div class="grid grid-cols-4 gap-10">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Loại bìa</label>
                <a-select show-search size="large" placeholder="Loại bìa" :options="optionsCardboard"
                  v-model:value="valueBookDetail.cardboard" :filter-option="filterOption" @focus="handleFocus"
                  @blur="handleBlur" @change="handleChange"></a-select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Số trang</label>
                <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Số trang"
                  v-model:value="valueBookDetail.total_page" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Kích thước sách</label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Kích thước sách"
                  v-model:value="valueBookDetail.book_size" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Ngôn ngữ</label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Ngôn ngữ"
                  v-model:value="valueBookDetail.language" />
              </div>
            </div>
            <div class="grid grid-cols-4 gap-10">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Người biên dịch</label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Người biên dịch"
                  v-model:value="valueBookDetail.translator" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Ngày phát hành</label>
                <a-input type="date" class="border p-2 rounded-md h-10" placeholder="Ngày phát hành"
                  v-model:value="valueBookDetail.publish_date" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Công ty phát hành</label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Công ty phát hành"
                  v-model:value="valueBookDetail.issuing_company" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Nhà xuất bản</label>
                <a-select size="large" show-search placeholder="Nhà xuất bản" :options="optionsPublishingcompany"
                  v-model:value="valueBookDetail.publishing_company_id" :filter-option="filterOption"
                  @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-end gap-2">
          <a-button @click="handleClose">Hủy</a-button>
          <a-button type="primary" html-type="submit" class="mt-4"
            :loading="DetailBookStore.isSubmitting">Thêm</a-button>
        </div>
      </form>
    </div>
  </a-modal>
</template>
<script setup>
const baseStore = useBaseStore();
const fileList = ref([]);
const imageInfo = ref("");
const props = defineProps({
  openModalAdd: Boolean,
  openModal: Function,
  book_id: Number,
});
const open = ref(props.openModalAdd);
const route = useRoute()
const bookID = route.params.id
const bookStore = useBookStore();
watch(
  () => props.openModalAdd,
  (newVal) => {
    open.value = newVal;
  }
);
const handleClose = () => {
  props.openModal();
};
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
  } catch (error) {
    message.error("Upload ảnh thất bại");

  }
};
const handleChangeImage = (info) => {
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
const beforeUpload = (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    message.error("Bạn chỉ có thể tải lên file ảnh!");
  }
  return isImage || Upload.LIST_IGNORE;
};
const optionsPublishingcompany = ref([]);
const publishingcompanyValue = usePublishingCompanyStore();
const getDataPublishingcompanyValue = async () => {
  try {
    const data = await publishingcompanyValue.getAllPublishingCompany({});
    optionsPublishingcompany.value = data.data._rawValue.data.publishing_companies.map((publishingcompany) => {
      return {
        value: publishingcompany.id,
        label: publishingcompany.name,
      };
    })
  } catch (error) {
    console.error(error);
  }
};
useAsyncData(async () => {
  await getDataPublishingcompanyValue();
});
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
const DetailBookStore = useBookDetailStore();
const valueBookDetail = ref({
  book_id: "",
  sku_origin: "",
  poster: "",
  images: [
    "https://www.vinaprint.vn/wp-content/uploads/2023/01/poster-ra-mat-sach-2.jpeg",
    "https://www.vinaprint.vn/wp-content/uploads/2023/01/poster-ra-mat-sach-2.jpeg",
    "https://www.vinaprint.vn/wp-content/uploads/2023/01/poster-ra-mat-sach-2.jpeg",
  ],
  book_version: "",
  price: "",
  hire_percent: "",
  stock: "",
  publish_date: "",
  publishing_company_id: "",
  issuing_company: "",
  cardboard: "",
  total_page: "",
  translator: "",
  language: "",
  book_size: "",
});
const onSubmit = async () => {
  try {
    await DetailBookStore.createBookDetail({
      book_id: props.book_id,
      sku_origin: valueBookDetail.value.sku_origin,
      poster: imageInfo.value?.url,
      images: valueBookDetail.value.images,
      book_version: valueBookDetail.value.book_version,
      price: valueBookDetail.value.price,
      hire_percent: valueBookDetail.value.hire_percent,
      stock: valueBookDetail.value.stock,
      publish_date: valueBookDetail.value.publish_date,
      publishing_company_id: valueBookDetail.value.publishing_company_id,
      issuing_company: valueBookDetail.value.issuing_company,
      language: valueBookDetail.value.language,
      book_size: valueBookDetail.value.book_size,
      cardboard: valueBookDetail.value.cardboard,
      total_page: valueBookDetail.value.total_page,
      translator: valueBookDetail.value.translator,
    });
    handleClose()
    useAsyncData(async () => {
    await bookStore.getOneBookAdmin(bookID);
  });
  } catch (error) {
    console.error(error);

  }
};
</script>