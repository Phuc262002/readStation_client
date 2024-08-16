<template>
  <a-modal v-model:open="props.openModalEdit" title="Chỉnh sửa phiên bản sách" :footer="null" :onCancel="handleClose"
    style="width: 1200px;">
    <div class="mb-4 space-y-1" v-if="errors">
      <a-alert v-for="(error, index) in errors" :message="error" type="error" show-icon />
    </div>
    <div class="flex flex-col gap-5 mt-5">
      <div class="border border-t-2"></div>
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col gap-5">
          <div class="grid grid-rows-1">
            <div class="grid grid-cols-2 gap-10">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Ảnh chính <span class="text-red-500">*</span></label>
                <ClientOnly>
                  <a-spin tip="Đang xử lý..." :spinning="baseStore.isSubmitting">
                    <a-upload-dragger v-model:fileList="fileList" list-type="picture" name="image" :multiple="false"
                      :action="(file) => uploadFile(file)" @change="handleChangeUploadImg" @drop="handleDrop"
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
                <a-upload list-type="picture" :file-list="images" :action="uploadImages" :multiple="true"
                  :before-upload="beforeUpload" :on-change="handleChangeImages" :on-remove="deleteImage">
                  <a-button class="flex justify-between gap-3 items-center">
                    <upload-outlined />
                    <h1>Upload hình ảnh chi tiết</h1>
                  </a-button>
                </a-upload>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold" for="">Sku <span class="text-red-500">*</span></label>
            <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Mã sách" disabled
              v-model:value="data.sku_origin" />
          </div>
          <div class="grid grid-rows-3 gap-5 ">
            <div class="grid grid-cols-4 gap-10">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Phiên bản sách <span class="text-red-500">*</span></label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Phiên bản sách" required
                  v-model:value="data.book_version" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Số lượng <span class="text-red-500">*</span></label>
                <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Số lượng" required
                  v-model:value="data.stock" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Giá <span class="text-red-500">*</span></label>
                <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Giá" required
                  v-model:value="data.price" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Tiền cọc <span class="text-red-500">*</span></label>
                <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Tiền cọc" required
                  v-model:value="data.hire_percent" :min="1" :max="100" />
              </div>
            </div>
            <div class="grid grid-cols-4 gap-10">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Loại bìa <span class="text-red-500">*</span></label>
                <a-select show-search size="large" placeholder="Loại bìa" :options="optionsCardboard"
                  v-model:value="data.cardboard" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                  @change="handleChange"></a-select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Số trang <span class="text-red-500">*</span></label>
                <a-input type="number" class="border p-2 rounded-md h-10" placeholder="Số trang" required
                  v-model:value="data.total_page" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Kích thước sách</label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Kích thước sách"
                  v-model:value="data.book_size" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Ngôn ngữ <span class="text-red-500">*</span></label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Ngôn ngữ" required
                  v-model:value="data.language" />
              </div>
            </div>
            <div class="grid grid-cols-4 gap-10">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Người biên dịch</label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Người biên dịch"
                  v-model:value="data.translator" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Ngày phát hành <span class="text-red-500">*</span></label>
                <a-input type="date" class="border p-2 rounded-md h-10" placeholder="Ngày phát hành" required
                  v-model:value="data.publish_date" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Công ty phát hành <span
                    class="text-red-500">*</span></label>
                <a-input type="text" class="border p-2 rounded-md h-10" placeholder="Công ty phát hành" required
                  v-model:value="data.issuing_company" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold" for="">Nhà xuất bản <span class="text-red-500">*</span></label>
                <a-select size="large" show-search placeholder="Nhà xuất bản" :options="optionsPublishingcompany"
                  required v-model:value="data.publishing_company" :filter-option="filterOption" @focus="handleFocus"
                  @blur="handleBlur" @change="handleChange"></a-select>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-end gap-2">
          <a-button @click="handleClose" html-type="button">Hủy</a-button>
          <a-button type="primary" html-type="submit" class="mt-4" :loading="bookDetailStore.isSubmitting">Lưu thay
            đổi</a-button>
        </div>
      </form>
    </div>
  </a-modal>
</template>

<script setup>
const props = defineProps({
  openModalEdit: Boolean,
  openModal: Function,
  bookDetailId: Number,
});
const idBookDetail = ref(props.bookDetailId);
const route = useRoute();
const bookID = route.params.id;
const baseStore = useBaseStore();
const fileList = ref([]);
const imageInfo = ref("");
const errors = ref({});
const open = ref(props.openModalEdit);
watch(
  () => props.openModalEdit,
  (newVal) => {
    open.value = newVal;
  }
);
watch(
  () => props.bookDetailId,
  (newVal) => {
    idBookDetail.value = newVal;
  }
);

const uploadFile = async (file) => {
  if (fileList.value.length > 0) {
    fileList.value = [];
    await baseStore.deleteImg(imageInfo.value?.publicId);
  }
  const formData = new FormData();
  formData.append("image", file);
  try {
    const dataUpload = await baseStore.uploadImg(formData);
    imageInfo.value = dataUpload.data._rawValue.data?.url;
  } catch (error) {
    message.error("Upload ảnh thất bại");
    console.log("🚀 ~ uploadFile ~ error:", error);
  }
};
const handleChangeUploadImg = (info) => {
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
  await baseStore.deleteImg(file.url.split("/").pop().split(".")[0]);
};

function handleDrop(e) {
  console.log(e);
}
const beforeUpload = (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    message.error("Bạn chỉ có thể tải lên file ảnh!");
  }
  return isImage || Upload.LIST_IGNORE;
};

// bo su tap 
const images = ref([]);
const imagesInfo = ref([]);
// Upload images
const uploadImages = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await baseStore.uploadImg(formData);
    const imageData = response.data._rawValue.data; // Giả sử server trả về dữ liệu như thế này
    // Thêm URL của hình ảnh vào danh sách imagesInfo
    imagesInfo.value = [...imagesInfo.value, imageData?.url]// Lưu URL vào imagesInfo
    console.log("imagesInfo", imagesInfo.value);
    return {
      url: imageData.url, // Return URL để `a-upload` có thể sử dụng
    };
  } catch (error) {
    message.error("Upload ảnh thất bại");
    return Upload.LIST_IGNORE; // Ngăn không cho thêm ảnh vào danh sách nếu upload thất bại
  }
};

// Watch imagesInfo for changes
watch(() => imagesInfo.value, (value) => {
});

// Handle change in images
const handleChangeImages = (info) => {
  const { file, fileList } = info;
  const status = file.status;

  if (status === "done") {
    message.success(`${file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${file.name} file upload failed.`);
  }

  // Update the images list
  images.value = fileList;
};

// Delete image
const deleteImage = async (file) => {
  const imageToDelete = imagesInfo.value.find(img => img.url === file.url);
  if (imageToDelete) {
    try {
      await baseStore.deleteImg(imageToDelete.publicId);
      imagesInfo.value = imagesInfo.value.filter(img => img.url !== file.url);
      message.success("File deleted successfully.");
    } catch (error) {
      message.error("Failed to delete file.");
    }
  }
};



const handleClose = () => {
  open.value = false;
  props.openModal(false);
};

const bookDetailStore = useBookDetailStore();
const bookStore = useBookStore();
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
useAsyncData(async () => {
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
});
const data = ref(
  {
    poster: "",
    sku_origin: "",
    book_version: "",
    stock: "",
    price: "",
    hire_percent: "",
    cardboard: "",
    total_page: "",
    book_size: "",
    language: "",
    translator: "",
    publish_date: "",
    issuing_company: "",
    publishing_company: ""

  }
)

useAsyncData(async () => {
  const res = await bookDetailStore.getOneBookDetail(idBookDetail.value);
  data.value.sku_origin = res.data._value?.data?.sku_origin;
  data.value.book_version = res.data._value?.data?.book_version;
  data.value.stock = res.data._value?.data?.stock;
  data.value.price = res.data._value?.data?.price;
  data.value.hire_percent = res.data._value?.data?.hire_percent;
  data.value.cardboard = res.data._value?.data?.cardboard;
  data.value.total_page = res.data._value?.data?.total_page;
  data.value.book_size = res.data._value?.data?.book_size;
  data.value.language = res.data._value?.data?.language;
  data.value.translator = res.data._value?.data?.translator;
  data.value.publish_date = res.data._value?.data?.publish_date;
  data.value.issuing_company = res.data._value?.data?.issuing_company;
  data.value.publishing_company = res.data._value?.data?.publishing_company.id;
  images.value = res.data._value?.data?.images.map((image, index) => {
    return {
      uid: index,
      name: "image.png",
      status: "done",
      url: image,
    };
  });
  fileList.value = [
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: res.data._value?.data?.poster,
    },
  ];
  imageInfo.value = res.data._value?.data?.poster;
}, {
  watch: [idBookDetail, open],
  initialCache: false,
});
const onSubmit = async () => {
  const dataUpdate = {
    sku_origin: data.value.sku_origin,
    poster: imageInfo.value || data.value.poster,
    images: images.value.map((image) => image.url).filter((image) => image !== null),
    book_version: data.value.book_version,
    price: data.value.price,
    hire_percent: data.value.hire_percent,
    stock: data.value.stock,
    publish_date: data.value.publish_date,
    publishing_company_id: data.value.publishing_company,
    issuing_company: data.value.issuing_company,
    cardboard: data.value.cardboard,
    total_page: data.value.total_page,
    translator: data.value.translator,
    language: data.value.language,
    book_size: data.value.book_size,
  };

  const res = await bookDetailStore.updateBookDetail({
    id: idBookDetail.value,
    valueBookDetail: dataUpdate,
  });
  if (res.data._rawValue?.status == true) {
    handleClose();
    message.success("Cập nhật phiên bản sách thành công");
    await bookStore.getOneBookAdmin(bookID);
  } else {
    errors.value = res.error.value.data.errors;
    message.error(res.error.value.data.message);
  }
}

</script>