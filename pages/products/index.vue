<template>
  <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 min-w-[100vw] min-h-full bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <div class="flex gap-6">
      <div class="w-1/5 rounded-lg h-fit flex flex-col space-y-4">
        <div class="px-3 pb-2 text-xl font-semibold">Khám phá theo:</div>

        <div class="bg-white">
          <div class="text-base cursor-pointer rounded-xl border">
            <div
              class="flex justify-between items-center px-4 py-2"
              @click="() => handleIsShow('category')"
            >
              <span>Danh mục</span>
              <img
                ref="bookIcon2"
                class="rotate-180"
                width="20"
                height="20"
                src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                alt=""
              />
            </div>
            <div class="border-t px-4 py-2" v-if="isShow.includes('category')">
              <div
                v-if="isLoading"
                class="flex items-center justify-center py-10"
              >
                <a-spin></a-spin>
              </div>
              <!--  -->
              <ul class="px-4 space-y-1">
                <li>
                  <a-radio
                    :checked="filter.category_id === null ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'category_id',
                        id: null,
                      })
                    "
                    >Tất cả</a-radio
                  >
                </li>
                <li
                  class="flex items-center"
                  v-for="(category, index) in categoryStore?.categories
                    ?.categories"
                  :key="index"
                >
                  <a-radio
                    :checked="category.id === filter.category_id ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'category_id',
                        id: category.id,
                      })
                    "
                  >
                    {{ category?.name }}</a-radio
                  >
                </li>
              </ul>
              <!--  -->
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="text-base cursor-pointer rounded-xl border">
            <div
              class="flex justify-between items-center px-4 py-2"
              @click="() => handleIsShow('author')"
            >
              <span>Tác giả</span>
              <img
                ref="bookIcon2"
                class="rotate-180"
                width="20"
                height="20"
                src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                alt=""
              />
            </div>
            <div class="border-t px-4 py-2" v-if="isShow.includes('author')">
              <div
                v-if="isLoading"
                class="flex items-center justify-center py-10"
              >
                <a-spin></a-spin>
              </div>
              <ul class="px-4 space-y-1">
                <li>
                  <a-radio
                    :checked="filter.author_id === null ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'author_id',
                        id: null,
                      })
                    "
                    >Tất cả</a-radio
                  >
                </li>
                <li
                  class="flex items-center"
                  v-for="(author, index) in authorStore?.authorClient?.authors"
                  :key="index"
                >
                  <a-radio
                    :checked="author.id === filter.author_id ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'author_id',
                        id: author.id,
                      })
                    "
                  >
                    {{ author?.author }}</a-radio
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="text-base cursor-pointer rounded-xl border">
            <div
              class="flex justify-between items-center px-4 py-2"
              @click="() => handleIsShow('publishing')"
            >
              <span>Nhà xuất bản</span>
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
              class="border-t px-4 py-2"
              v-if="isShow.includes('publishing')"
            >
              <div
                v-if="isLoading"
                class="flex items-center justify-center py-10"
              >
                <a-spin></a-spin>
              </div>
              <ul class="px-4 space-y-1">
                <li>
                  <a-radio
                    :checked="
                      filter.publishing_company_id === null ? true : false
                    "
                    @click="
                      handleCheckbox({
                        type: 'publishing_company_id',
                        id: null,
                      })
                    "
                    >Tất cả</a-radio
                  >
                </li>
                <li
                  class="flex items-center"
                  v-for="(company, index) in publishingCompanyStore
                    ?.publishingCompany?.publishing_companies"
                  :key="index"
                >
                  <a-radio
                    :checked="
                      company.id === filter.publishing_company_id ? true : false
                    "
                    @click="
                      handleCheckbox({
                        type: 'publishing_company_id',
                        id: company.id,
                      })
                    "
                  >
                    {{ company?.name }}</a-radio
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="text-base cursor-pointer rounded-xl border">
            <div
              class="flex justify-between items-center px-4 py-2"
              @click="() => handleIsShow('rating')"
            >
              <span>Đánh giá</span>
              <img
                ref="bookIcon2"
                class="rotate-180"
                width="20"
                height="20"
                src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                alt=""
              />
            </div>
            <div v-if="isShow.includes('rating')" class="border-t px-4 py-2">
              <div
                v-if="isLoading"
                class="flex items-center justify-center py-10"
              >
                <a-spin></a-spin>
              </div>
              <ul class="px-4 space-y-1">
                <li>
                  <a-radio
                    :checked="filter.rating === null ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'rating',
                        id: null,
                      })
                    "
                    >Tất cả</a-radio
                  >
                </li>
                <li>
                  <a-radio
                    class="flex items-center"
                    :checked="filter.rating === 1 ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'rating',
                        id: 1,
                      })
                    "
                  >
                    <CommonRating :rating="1" />
                  </a-radio>
                </li>
                <li>
                  <a-radio
                    class="flex items-center"
                    :checked="filter.rating === 2 ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'rating',
                        id: 2,
                      })
                    "
                  >
                    <CommonRating :rating="2" />
                  </a-radio>
                </li>
                <li>
                  <a-radio
                    class="flex items-center"
                    :checked="filter.rating === 3 ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'rating',
                        id: 3,
                      })
                    "
                  >
                    <CommonRating :rating="3" />
                  </a-radio>
                </li>
                <li>
                  <a-radio
                    class="flex items-center"
                    :checked="filter.rating === 4 ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'rating',
                        id: 4,
                      })
                    "
                  >
                    <CommonRating :rating="4" />
                  </a-radio>
                </li>
                <li>
                  <a-radio
                    class="flex items-center"
                    :checked="filter.rating === 5 ? true : false"
                    @click="
                      handleCheckbox({
                        type: 'rating',
                        id: 5,
                      })
                    "
                  >
                    <CommonRating :rating="5" />
                  </a-radio>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="w-4/5 h-fit">
        <div class="grid gap-y-4">
          <div class="bg-white rounded-lg border">
            <div class="text-xl px-4 py-3">Tất cả sản phẩm</div>
            <div
              class="flex gap-5 justify-between items-center px-4 h-fit border-t"
            >
              <div class="text-base">
                {{ dataBooks?.totalResults }} sản phẩm
              </div>
              <div class="text-base px-4 py-3 text-right flex items-center">
                <div class="px-4 text-[#cac9cd]">Sắp xếp</div>
                <a-select
                  :options="sortOptions"
                  v-model:value="filter.sort"
                  @change="handleSortChange"
                  style="width: 100px"
                >
                </a-select>
              </div>
            </div>
          </div>

          <div>
            <div
              v-if="isLoading"
              class="flex items-center justify-center py-10"
            >
              <a-spin></a-spin>
            </div>
            <div class="grid grid-cols-4">
              <CommonBookShop
                v-for="(book, index) in bookstore?.books?.books"
                :key="book.id || index"
                :book="book"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <a-pagination
              v-model:current="current"
              :total="bookstore?.books?.totalResults"
              :pageSize="bookstore?.books?.pageSize"
              show-less-items
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isShow = ref([]);
const filter = ref({
  sort: "asc",
  category_id: null,
  author_id: null,
  publishing_company_id: null,
  rating: null,
});
const sortOptions = [
  {
    label: "Mới nhất",
    value: "asc",
  },
  {
    label: "Cũ nhất",
    value: "desc",
  },
  {
    label: "Phổ biến",
    value: "popular",
  },
];
const handleIsShow = (section) => {
  if (isShow.value.includes(section)) {
    isShow.value = [...isShow.value].filter((item) => item !== section);
  } else {
    isShow.value = [...isShow.value, section];
  }

  // console.log("ishow", isShow.value);
};

const publishingCompanyStore = usePublishingCompanyStore();
const bookstore = useBookPublicStore();
const categoryStore = useCategoryStore();
const authorStore = useAuthorStore();

const dataAuthor = ref({});
const dataCategory = ref({});
const dataBooks = ref({});

// console.log("a", dataBooks);
const dataCompanies = ref({});
const current = ref(1);

const isLoading = ref(false);

useAsyncData(
  async () => {
    try {
      await bookstore.getAllBooks({
        page: current.value,
        pageSize: 12,
        sort: filter.value.sort,
        category_id: filter.value.category_id,
        author_id: filter.value.author_id,
        publishing_company_id: filter.value.publishing_company_id,
        rating: filter.value.rating,
      });
    } catch (error) {
      console.error(error);
    }
  },
  {
    immediate: true,
    watch: [current, filter.value, filter.value.sort],
  }
);

const handleCheckbox = ({ type, id }: any) => {
  switch (type) {
    case "category_id":
      filter.value.category_id = id;
      break;
    case "author_id":
      filter.value.author_id = id;
      break;
    case "publishing_company_id":
      filter.value.publishing_company_id = id;
      break;
    case "rating":
      filter.value.rating = id;
      break;
    default:
      break;
  }
};
const handleSortChange = (value: string) => {
  filter.value.sort = value;
  // console.log("aaa", filter.value);
};

useAsyncData(async () => {
  isLoading.value = true;
  try {
    await authorStore.getAllAuthorClient({});
    console.log("object111", dataAuthor.value);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

useAsyncData(async () => {
  isLoading.value = true;
  try {
    await categoryStore.getAllCategoryClient({
      type: "book",
    });
    console.log("object111", dataCategory.value);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

useAsyncData(async () => {
  isLoading.value = true;
  try {
    const response =
      await publishingCompanyStore.getAllPublishingCompanyClient();
    dataCompanies.value = response?.data?._rawValue?.data;
    // console.log("aaabb", dataCompanies);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
</script>
<style scoped>
:deep(.ant-select-selector) {
  border-radius: 200px !important;
}
</style>
