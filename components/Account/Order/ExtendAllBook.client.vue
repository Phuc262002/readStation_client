<template>
  <div>
    <div v-if="orderStore?.isSubmitting"
      class="absolute top-0 left-0 min-w-[100vw] min-h-full bg-black/40 z-[99999] cursor-default">
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <a-modal v-model:open="props.openExtendAll" :footer="null" width="50%" :onCancel="handleCloseExtendAll">
      <form @submit.prevent="onSubmit" class="mt-5 space-y-5">
        <h3 class="font-bold text-base">Bạn muốn gia hạn "Toàn bộ sách" ?</h3>
        <a-radio-group v-model:value="extended_method" class="flex gap-5 my-5">
          <a-radio value="cash" class="w-1/2 p-5 border rounded-lg">
            Gia hạn tại thư viện
          </a-radio>
          <a-radio value="online" class="w-1/2 p-5 border rounded-lg">
            Gia hạn trực tuyến
          </a-radio>
        </a-radio-group>

        <div class="grid grid-cols-12 px-5 py-2" v-for="(order, index) in orderStore?.order?.loan_order_details">
          <div class="col-span-4">
            <img :src="order?.book_details?.poster" alt="" class="w-[114px] h-[176px] shadow-lg shadow-gray-500" />
          </div>
          <div class="col-span-8 text-sm space-y-3">
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Tên sách:</span>
              <span class="col-span-3">
                {{ order?.book_details?.book?.title }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Tác giả:</span>
              <span class="col-span-3">
                {{ order?.book_details?.book?.author?.author }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày thuê:</span>
              <span class="col-span-3">
                {{ $dayjs(order?.loan_date).format("DD/MM/YYYY - HH:MM") }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày hết hạn cũ:</span>
              <span class="col-span-3">
                {{
                  $dayjs(order?.original_due_date).format("DD/MM/YYYY - HH:MM")
                }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Ngày hết hạn mới:</span>
              <span class="col-span-3">
                {{
                  $dayjs(order?.original_due_date)
                    .add(5, "day")
                    .format("DD/MM/YYYY - HH:MM")
                }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Phí gia hạn:</span>
              <span class="col-span-3"> {{ order?.service_fee }} </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Nhập thêm số ngày gia hạn:</span>
              <span class="col-span-3">
                <a-input type="number" class="w-1/2" v-model:value="number_of_days[index]"
                  @change="(e) => updateNumberOfDays(order?.id, number_of_days[index])" />
              </span>
            </div>
          </div>
        </div>
        <p>
          Quý khách vui lòng bấm vào nút xác nhận bên dưới để hoàn tất quá trình
          gia hạn thời gian thuê sách
        </p>
        <p class="text-tag-text-06">
          Lưu ý: Quý khách cần trả sách đúng hạn để tránh các khoản phí phạt.
        </p>
        <div class="flex justify-end gap-2">
          <a-button class="h-10" @click="handleCloseExtendAll"> Hủy </a-button>

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
const number_of_days = ref([5, 5, 5]);
const props = defineProps({
  openExtendAll: Boolean,
  closeExtendAll: Function,
  data: Array,
  id: Number,
});
const open = ref(props.openExtendAll);
console.log('props.data', props.data);
const handleCloseExtendAll = async () => {
  props.closeExtendAll();
};
// const updateNumberOfDays = (id, quantity) => {
//   console.log("🚀 ~ updateNumberOfDays ~ quantity:", quantity);

//   let fee = 0;
//   const price = props.extendsionBook?.book_details?.price || 0;

//   if (price < 50000) {
//     fee = 1000;
//   } else if (price >= 50000 && price <= 100000) {
//     fee = 2000;
//   } else {
//     fee = 4000;
//   }


//   props.extendsionBook.service_fee = quantity * fee;
//   props.extendsionBook.number_of_days = quantity;
// };
const onSubmit = async () => {
  const body = props.data.map((item, index) => {
    return {
      loan_order_details_id: item.id,
      number_of_days: number_of_days.value[index],
    }
  })
  console.log('body', body)
  const valueExtendsion = ref({
    extended_method: extended_method.value,
    extension: body
  });
  const resData = await orderStore.extensionAllBook({
    id: props.id,
    body: valueExtendsion.value
  });
  console.log('resData', resData)
  if (
    resData?.data?._rawValue?.status == true &&
    extended_method.value == "cash"
  ) {
    message.success({
      content: "Gia hạn sách sách thành công",
    });
    handleCloseExtendAll();
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
    message.error(resData?.data?._rawValue?.errors);
    handleCloseExtendAll();
    orderStore.getOneOrder(id);
  }
};

</script>
