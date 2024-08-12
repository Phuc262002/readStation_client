<template>
  <div>
    <div v-if="orderStore?.isSubmitting"
      class="absolute top-0 left-0 min-w-[100vw] min-h-full bg-black/40 z-[99999] cursor-default">
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <a-modal v-model:open="props.openModalExtend" :footer="null" width="50%" :onCancel="handleCloseExtend">
      <form @submit.prevent="onSubmit" class="mt-5 space-y-5">
        <h3 class="font-bold text-base">
          Bạn muốn gia hạn sách
          {{ props.bookExtendDetail?.book_details?.book?.title }}
        </h3>
        <a-radio-group v-model:value="extended_method" class="flex gap-5 my-5">
          <a-radio value="cash" class="w-1/2 p-5 border rounded-lg">
            Gia hạn tại thư viện
          </a-radio>
          <a-radio value="online" class="w-1/2 p-5 border rounded-lg">
            Gia hạn trực tuyến
          </a-radio>
        </a-radio-group>

        <div class="grid grid-cols-12 px-5">
          <div class="col-span-4">
            <img :src="props.bookExtendDetail?.book_details?.poster" alt=""
              class="w-[114px] h-[176px] shadow-lg shadow-gray-500" />
          </div>
          <div class="col-span-8 text-sm space-y-3">
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Tên sách:</span>
              <span class="col-span-3">
                {{ props.bookExtendDetail?.book_details?.book?.title }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Tác giả:</span>
              <span class="col-span-3">
                {{ props.bookExtendDetail?.book_details?.book?.author?.author }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày thuê:</span>
              <span class="col-span-3">
                {{
                  $dayjs(props.bookExtendDetail?.loan_date).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày hết hạn cũ:</span>
              <span class="col-span-3">
                {{
                  $dayjs(props.bookExtendDetail?.original_due_date).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày hết hạn mới:</span>
              <span class="col-span-3">
                {{
                  $dayjs(props.bookExtendDetail?.original_due_date)
                    .add(5, "day")
                    .format("DD/MM/YYYY - HH:MM")
                }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Phí gia hạn:</span>
              <span class="col-span-3"> 0 / 3 </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Nhập số ngày gia hạn:</span>
              <span class="col-span-3">
                <a-input type="number" />
              </span>
            </div>
          </div>
        </div>
        <p>
          Quý khách vui lòng bấm vào nút xác nhận bên dưới để hoàn tất quá trình
          gia hạn thời gian thuê sách
        </p>
        <p class="text-tag-text-06">
          Xin lưu ý rằng quý khách cần trả sách đúng hạn để tránh các khoản phí
          phạt. Nếu có bất kỳ thắc mắc nào hoặc cần thêm thông tin, xin vui lòng
          liên hệ với chúng tôi qua địa chỉ email của thư viện hoặc gọi đến số
          điện thoại 0987654321 để được hỗ trợ
        </p>
        <div class="flex justify-end gap-2">
          <a-button class="h-10" @click="handleCloseExtend"> Hủy </a-button>

          <a-button :loading="orderStore?.isSubmitting" html-type="submit"
            class="h-10 bg-orange-500 !text-white border-none">
            Xác nhận
          </a-button>
        </div>
      </form>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
const orderStore = useOrderClientStore();
const extended_method = ref("cash");
const route = useRoute();
const id = route.params.id;
const handleCloseExtend = async () => {
  props.closeModalExtend();
};
const onSubmit = async () => {
  const resData = await orderStore.extensionBook({
    id: props.bookExtendDetail?.id,
    body: {
      extended_method: extended_method.value,
    },
  });
  console.log("resData", resData);

  if (
    resData?.data?._rawValue?.status == true &&
    extended_method.value == "cash"
  ) {
    message.success({
      content: "Gia hạn sách sách thành công",
    });
    handleCloseExtend();
    orderStore.getOneOrder(id);
  } else if (
    resData?.data?._rawValue?.status == true &&
    extended_method.value == "online"
  ) {
    message.success({
      content: "Gia hạn sách sách thành công",
    });
    navigateTo(resData.data._rawValue.data.transaction.extra_info.checkoutUrl, {
      external: true,
    });
  } else {
    message.error({
      content: "Gia hạn sách sách thất bại",
    });
  }
};

const props = defineProps({
  openModalExtend: Boolean,
  closeModalExtend: Function,
  bookExtendDetail: Object,
});
const open = ref(props.openModalExtend);
const bookDetailId = ref(props.bookExtendDetail?.id);

watch(
  () => props.openModalExtend,
  (newValue) => {
    open.value = newValue;
  }
);
watch(
  () => props.bookExtendDetail?.id,
  (newValue) => {
    bookDetailId.value = newValue;
  }
);
</script>
