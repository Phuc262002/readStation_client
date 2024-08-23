<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">

    <Head>
      <Title>ReadStation | {{ bookStore.book?.book?.title }}</Title>
      <Meta name="description" :content="bookStore.book?.book?.description_summary" />
      <Meta property="og:title" :content="`ReadStation | ${bookStore.book?.book?.title}`" />
      <Meta property="og:description" :content="bookStore.book?.book?.description_summary" />
      <Meta property="og:image" :content="bookStore.book?.poster" />
      <Meta property="twitter:card" :content="bookStore.book?.poster" />
    </Head>

    <div v-if="bookStore?.isLoading" class="fixed inset-0 bg-black/40 z-[99999] flex items-center justify-center">
      <a-spin size="large" />
    </div>
    <div class="flex gap-6">
      <div class="w-2/6">
        <AccountProductImage :book="bookStore.book" />
      </div>
      <div class="w-4/6">
        <AccountProductDetailItem :book="bookStore.book" />
      </div>
      <div class="w-2/6">
        <AccountProductPayment :book="bookStore.book" />
      </div>
    </div>
    <div class="space-y-5 mt-5 bg-white h-auto border border-rtgray-50 overflow-hidden rounded-lg p-5">
      <h2 class="font-bold text-xl">Đánh giá</h2>
      <div v-if="hasReviews">
        <p class="mb-3">Lọc theo</p>
        <div class="flex gap-4">
          <a-button :class="[
            'rounded-xl',
            arrange === 'asc' ? 'bg-orange-500 !text-white' : '',
          ]" @click="handleCheckSort('asc')">
            Mới nhất
          </a-button>
          <a-button :class="[
            'rounded-xl',
            arrange === 'desc' ? 'bg-orange-500 !text-white' : '',
          ]" @click="handleCheckSort('desc')">
            Cũ nhất
          </a-button>

          <a-button v-for="i in [5, 4, 3, 2, 1]" :key="i" @click="handleCheckRating(i)" :class="[
            'rounded-xl',
            filter === i ? 'bg-orange-500 !text-white' : '',
          ]">
            {{ i }} sao
          </a-button>
        </div>
      </div>
      <div class="space-y-5" v-for="review in detailReview?.reviews?.bookReviews">
        <div class="flex gap-5 pb-5 border-b border-rtgray-50">
          <div class="">
            <img :src="review?.user?.avatar" class="w-10 h-10 rounded-full" alt="" />
          </div>
          <div class="space-y-1">
            <p>{{ review?.user?.fullname }}</p>
            <p>
              <CommonRating :rating="review?.rating" />
            </p>
            <p>
              {{ review?.review_text }}
            </p>
          </div>
        </div>
      </div>
      <p class="text-center mb-5 font-semibold" v-if="!hasReviews">
        Sách hiện tại chưa có đánh giá nào.
      </p>
    </div>
    <div>
      <h2 class="font-bold text-xl my-5">Có thể bạn sẽ thích</h2>
      <div class="grid grid-cols-5 gap-5">
        <div class="mt-10 w-full" v-for="(book, index) in recommendationBooks" :key="book.id || index">
          <div class="flex flex-col gap-5 p-3 border rounded-lg">
            <NuxtLink :to="`/products/${book?.book?.slug}-${book?.id}`" class="mx-auto">
              <img class="rounded-lg w-[180px] h-[284px] object-cover" :src="book?.poster" alt="" />
            </NuxtLink>

            <div class="flex flex-col gap-1">
              <NuxtLink :to="`/products/${book?.book?.slug}-${book?.id}`"
                class="text-xl font-bold hover:text-[#f65d4e] line-clamp-1">
                {{ book?.book?.title }}
              </NuxtLink>

              <div class="text-sm text-[#999999]">
                {{ book?.book_version }}
              </div>
              <div class="flex justify-start">
                <CommonRating :rating="book?.average_rate" />
              </div>
              <NuxtLink :to="`/products?author=${book?.book?.author?.slug}`"
                class="text-sm text-[#999999] hover:text-[#f65d4e]">
                {{ book?.book?.author?.author }}
              </NuxtLink>
              <div class="text-orange-600 font-extrabold text-xl">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(book?.price)
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bookStore = useBookPublicStore();
const detailReview = useBookDetailReviewStore();
const authorStore = useAuthorPublicStore();
const route = useRoute();
const slug = route.params.slug;
const parts = slug.split("-");
const lastPart = parts.pop();
const filter = ref("");
const arrange = ref("asc");
const current = ref(1);
// Get all author
useAsyncData(async () => {
  await authorStore.getAllAuthorClient();
});
// Check arrange
const handleCheckSort = (sort) => {
  arrange.value = sort;
  console.log(sort);
};

// Check rating
const handleCheckRating = (rating) => {
  filter.value = rating;
  console.log(rating);
};
// Get One book
useAsyncData(async () => {
  try {
    await bookStore.getOneBook(slug as string);
  } catch (error) {
    console.error("error", error);
  }
});
// Get All Book Review
useAsyncData(
  async () => {
    await detailReview.getAllReviewBook({
      book_details_id: lastPart,
      rating: filter.value,
      sort: arrange.value,
      page: current.value,
    });
  },
  {
    immediate: true,
    watch: [current, filter, arrange],
  }
);
//
const hasReviews = () => detailReview?.reviews?.bookReviews.length > 0
const recommendationBooks = computed(() =>
  bookStore?.books?.books
    ?.filter((book) => {
      const isDifferWithCurrentBook = book?.id !== bookStore?.book?.id;
      const isBeLongToCurrentType =
        book?.book?.category?.slug === bookStore?.book?.book?.category?.slug;
      return isBeLongToCurrentType && isDifferWithCurrentBook;
    })
    ?.slice(0, 5)
);

useAsyncData(async () => {
  await bookStore.getAllBooks({});
});
</script>
