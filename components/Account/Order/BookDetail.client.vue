<template>
  <div>
    <div>
      <div class="flex gap-3">
        <h3 class="font-bold">
          {{ order?.data?.book_details?.book?.title }} - Phiên bản năm
          {{ order?.data?.book_details?.book_version }}
        </h3>
        <div>
          <a-tag v-if="order?.data?.status === 'returning'"
            class="text-tag-text-13 bg-tag-bg-13 border-none py-1 px-3 rounded-lg">
            Đang trả sách
          </a-tag>
          <a-tag v-else-if="order?.data?.status === 'completed'"
            class="text-tag-text-05 bg-tag-bg-05 border-none py-1 px-3 rounded-lg">
            Đã trả sách
          </a-tag>
          <a-tag v-else-if="order?.data?.status === 'overdue'"
            class="text-tag-text-06 bg-tag-bg-06 border-none py-1 px-3 rounded-lg">
            Quá hạn
          </a-tag>
          <a-tag v-else-if="order?.data?.status === 'extended'"
            class="text-tag-text-12 bg-tag-bg-12 border-none py-1 px-3 rounded-lg">
            Đang gia hạn
          </a-tag>
        </div>
      </div>
      <div class="flex mt-3">
        <div class="w-1/2 grid grid-cols-12 border-r border-rtgray-50">
          <div class="col-span-4">
            <img :src="order?.data?.book_details?.poster" alt=""
              class="w-[114px] h-[176px] shadow-lg shadow-gray-500" />
          </div>
          <div class="col-span-8 text-sm space-y-3">
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Tác giả:</span>
              <span class="col-span-3">
                {{ order?.data?.book_details?.book?.author?.author }}
              </span>
            </div>
            <div class="grid grid-cols-6">
              <span class="col-span-3 font-bold">Danh mục:</span>
              <span class="col-span-3">
                {{ order?.data?.book_details?.book?.category?.name }}
              </span>
            </div>
            <div class="grid grid-cols-4" v-if="
              orderStore?.order?.status === 'extended' ||
              orderStore?.order?.status === 'active' ||
              orderStore?.order?.status === 'overdue' ||
              orderStore?.order?.status === 'returning'
            ">
              <span class="col-span-2 font-bold">Số lần gia hạn:</span>
              <span class="col-span-2"> {{ order?.data?.extensions_details?.length }} / {{
                orderStore?.order?.max_extensions }}
              </span>
            </div>
            <div class="grid grid-cols-4" v-if="
              orderStore?.order?.status === 'extended' ||
              orderStore?.order?.status === 'active' ||
              orderStore?.order?.status === 'overdue' ||
              orderStore?.order?.status === 'returning'
            ">
              <span class="col-span-2 font-bold">Ngày trả thực tế:</span>
              <span class="col-span-2">
                {{
                  $dayjs(orderStore?.order?.created_at).format(
                    "DD/MM/YYYY - HH:MM"
                  )
                }}
              </span>
            </div>
            <div class="grid grid-cols-4" v-if="
              order?.data?.status === 'returning' ||
              order?.data?.status === 'completed'
            ">
              <span class="col-span-2 font-bold">Hình thức trả sách:</span>
              <div class="col-span-2" v-for="(items, index) in order?.data?.return_histories" :key="index">
                <span v-if="items?.return_method === 'library'">
                  Giao trả sách trực tiếp đến thư viện
                </span>
                <span v-else-if="items?.return_method === 'pickup'">
                  Giao sách đến thư viện
                </span>
              </div>
            </div>
            <div class="grid grid-cols-4" v-if="order?.data?.status === 'completed'">
              <span class="col-span-2 font-bold">Đánh giá:</span>
              <span class="col-span-2">
                <a-rate v-model:value="rating" :readonly="isReviewSubmitted">
                  <template #character>
                    <svg :style="{
                      pointerEvents: isReviewSubmitted ? 'none' : 'auto',
                    }" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor"
                      aria-hidden="true" viewBox="64 64 896 896">
                      <path
                        d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z">
                      </path>
                    </svg>
                  </template>
                </a-rate>
              </span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="w-1/2 space-y-3 pl-5 text-sm">
          <div class="grid grid-cols-8">
            <span class="col-span-2 font-bold">Tiền cọc sách:</span>
            <span class="col-span-6">
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(order?.data?.deposit_fee)
              }}
            </span>
          </div>
          <div class="grid grid-cols-8">
            <span class="col-span-2 font-bold">Phí dịch vụ:</span>
            <span class="col-span-6">
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(order?.data?.service_fee)
              }}
            </span>
          </div>
          <div class="grid grid-cols-8">
            <span class="col-span-2 font-bold">Tổng tiền:</span>
            <span class="col-span-6">
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(
                  order?.data?.deposit_fee + order?.data?.service_fee
                )
              }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-3 space-y-3" v-if="
        order?.data?.status === 'completed' &&
        order?.data?.book_reviews.length < 1
      ">
        <span class="text-sm font-bold">Đánh giá chi tiết</span>
        <a-textarea v-model:value="review.review_text" placeholder="Nhập nội dung đánh giá sách của bạn" :rows="4" />
        <div class="text-end">
          <a-button @click="handleReviewBook(order?.data?.id)" html-type="submit" :loading="reviewStore?.isLoading"
            class="h-10 bg-orange-500 !text-white border-none">
            Gửi đánh giá
          </a-button>
        </div>
      </div>

      <div class="flex justify-end pt-4 gap-2">
        <div v-if="
          order?.data?.status === 'active' ||
          $dayjs(new Date()).format('YYYY-MM-DD') ===
          $dayjs(order?.data?.current_due_date).format('YYYY-MM-DD')
        " class="flex justify-end pt-4 gap-2">
          <a-button class="h-10" @click="showModalGive(order?.data)" v-if="
            order?.data?.status === 'active' ||
            $dayjs(new Date()).format('YYYY-MM-DD') ===
            $dayjs(order?.data?.current_due_date).format('YYYY-MM-DD')
          ">
            Trả sách
          </a-button>

          <a-button v-if="
            order?.data?.status === 'active' ||
            $dayjs(new Date()).format('YYYY-MM-DD') ===
            $dayjs(order?.data?.current_due_date).format('YYYY-MM-DD')
          " class="h-10 bg-orange-500 !text-white border-none" @click="showModalExtend(order?.data)">
            Gia hạn lần 1
          </a-button>
        </div>
      </div>
    </div>
    <AccountOrderExtendBook :openModalExtend="openModalExtend" :closeModalExtend="closeModalExtend"
      :bookExtendDetail="bookExtendDetail" />
    <AccountOrderGiveBook :openModalGive="openModalGive" :closeModalGive="closeModalGive" :bookDetail="bookDetail" />
  </div>
</template>
<script lang="ts" setup>
const orderStore = useOrderClientStore();
const order = defineProps(["data"]);
const errors = ref({});
const bookDetail = ref();
const bookExtendDetail = ref();
const rating = ref<number>(5);
const route = useRoute();
const idBook = route.params.id;
const isReviewSubmitted = ref(false);
console.log("idBook", idBook);

const reviewStore = useReviewBookClientStore();

const review = ref({
  review_text: "",
});
const handleReviewBook = async (id) => {
  try {
    const res = await reviewStore.createReviewBook({
      loan_order_details_id: id,
      review_text: review.value?.review_text,
      rating: rating.value,
    });
    console.log("res", res);
    if (res.data._rawValue?.status == true) {
      isReviewSubmitted.value = true;
      navigateTo("/account/order/" + idBook);
      message.success("Thêm đánh giá thành công");
    } else {
      errors.value = res.error.value.data.errors;
      message.error("Thêm đánh giá thất bại");
    }
  } catch (error) {
    message.error("Thêm đánh giá thất bại");
  }
};
// Modal Extend
const openModalExtend = ref(false);
const showModalExtend = (order: any) => {
  openModalExtend.value = true;
  bookExtendDetail.value = order;
  console.log("id book ex", order);
};
const closeModalExtend = () => {
  openModalExtend.value = false;
};

// Modal Give
const openModalGive = ref(false);
const showModalGive = (order: any) => {
  openModalGive.value = true;
  bookDetail.value = order;
};
const closeModalGive = () => {
  openModalGive.value = false;
};
</script>
