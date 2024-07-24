<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
    <div
      v-if="bookStore.isLoading"
      class="absolute top-0 left-0 min-w-full min-h-[100vh] bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
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
    <div
      class="space-y-5 mt-5 bg-white h-auto border border-rtgray-50 overflow-hidden rounded-lg p-5"
    >
      <h2 class="font-bold text-xl">Đánh giá</h2>
      <div>
        <p class="mb-3">Lọc theo</p>
        <div class="flex gap-4">
          <a-button class="rounded-xl">Mới nhất</a-button>
          <a-button class="rounded-xl">5 sao</a-button>
          <a-button class="rounded-xl">4 sao</a-button>
          <a-button class="rounded-xl">3 sao</a-button>
          <a-button class="rounded-xl">2 sao</a-button>
          <a-button class="rounded-xl">1 sao</a-button>
        </div>
      </div>
      <div class="space-y-5">
        <div class="flex gap-5 pb-5 border-b border-rtgray-50">
          <div class="">
            <img
              src="../../../assets/images/camera.png"
              class="w-20 rounded-full"
              alt=""
            />
          </div>
          <div class="space-y-1">
            <p>Trần Quang Trung</p>
            <p>
              <CommonRating :rating="3" />
            </p>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently. We
              supply a series of design principles, practical patterns and high
              quality design resources (Sketch and Axure), to help people create
              their product prototypes beautifully and efficiently.
            </p>
          </div>
        </div>

        <div class="flex gap-5 pb-5 border-b border-rtgray-50">
          <div class="">
            <img
              src="../../../assets/images/camera.png"
              class="w-20 rounded-full"
              alt=""
            />
          </div>
          <div class="space-y-1">
            <p>Trần Quang Trung</p>
            <p>
              <CommonRating :rating="3" />
            </p>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently. We
              supply a series of design principles, practical patterns and high
              quality design resources (Sketch and Axure), to help people create
              their product prototypes beautifully and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="font-bold text-xl my-5">Có thể bạn sẽ thích</h2>
      <div class="grid grid-cols-5 gap-5">
        <div
          class="mt-10 w-full"
          v-for="(book, index) in limitBook"
          :key="book.id || index"
        >
          <NuxtLink :to="`/products/${book?.book?.slug}-${book?.id}`">
            <div class="flex flex-col gap-5 p-3 border rounded-lg">
              <div class="mx-auto">
                <img
                  class="rounded-lg w-[180px] h-[284px]"
                  :src="book?.poster"
                  alt=""
                />
              </div>

              <div class="flex flex-col gap-1">
                <div
                  class="text-xl font-bold hover:text-[#f65d4e] line-clamp-1"
                >
                  {{ book?.book?.title }}
                </div>
                <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                  {{ book?.book_version }}
                </div>
                <div class="flex justify-start">
                  <CommonRating :rating="book?.average_rate" />
                </div>
                <div class="text-sm text-[#999999] hover:text-[#f65d4e]">
                  {{ book?.book?.author?.author }}
                </div>
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
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bookStore = useBookPublicStore();
const route = useRoute();
const slug = route.params.slug;

const limitBook = computed(() => bookStore?.books?.books?.slice(0, 5));

useAsyncData(async () => {
  await bookStore.getAllBooks({});
});

useAsyncData(async () => {
  try {
    await bookStore.getOneBook(slug as string);
  } catch (error) {
    console.error("error", error);
  }
});
</script>
