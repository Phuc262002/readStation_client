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
              <!-- <ul class="px-4 space-y-1">
                <li
                  class="flex items-center"
                  v-for="(category, index) in categoryStore?.categories
                    ?.categories"
                  :key="index"
                >
                  <a-checkbox-group > {{ category?.name }}</a-checkbox-group>
                </li>
              </ul> -->
              <a-checkbox-group v-model:value="state.category1">
                <a-checkbox
                  class="flex items-center"
                  v-for="(category, index) in categoryStore?.categories
                    ?.categories"
                  :key="index"
                  :value="category.id"
                >
                  {{ category?.name }}
                </a-checkbox>
              </a-checkbox-group>
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
                <li
                  class="flex items-center"
                  v-for="(author, index) in authorStore?.authorClient?.authors"
                  :key="index"
                >
                  <a-checkbox> {{ author?.author }}</a-checkbox>
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
                <li
                  class="flex items-center"
                  v-for="(company, index) in publishingCompanyStore
                    ?.publishingCompany?.publishing_companies"
                  :key="index"
                >
                  <a-checkbox> {{ company?.name }}</a-checkbox>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div
            class="text-base cursor-pointer rounded-xl border"
            @click="() => handleIsShow('review')"
          >
            <div class="flex justify-between items-center px-4 py-2">
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
            <div v-if="isShow.includes('review')" class="border-t px-4 py-2">
              <div
                v-if="isLoading"
                class="flex items-center justify-center py-10"
              >
                <a-spin></a-spin>
              </div>
              <ul class="px-4 space-y-1">
                <li
                  class="flex items-center"
                  v-for="(review, index) in bookstore?.books"
                  :key="index"
                >
                  <a-checkbox>
                    {{
                      review?.average_rate !== undefined
                        ? review?.average_rate
                        : "null"
                    }}
                  </a-checkbox>
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
                  ref="select"
                  v-model:value="sort"
                  @change="handleChange"
                  style="width: 120px"
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
const checked = ref(false);
const isShow = ref([]);
const sort = ref("asc");
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

  console.log("ishow", isShow.value);
};

const publishingCompanyStore = usePublishingCompanyStore();
const bookstore = useBookStore();
const categoryStore = useCategoryStore();
const authorStore = useAuthorStore();

const dataAuthor = ref({});
const dataCategory = ref({});
const dataBooks = ref({});

const state = reactive({
  category1: [],
  category2: [],
  category3: [],
  category4: [],
});

console.log("a", dataBooks);
const dataCompanies = ref({});
const current = ref(1);

const isLoading = ref(false);

const getAllBooksClient = async () => {
  console.log({ category1: state.category1 });
  try {
    const data: any = await bookstore.getAllBooks({
      page: current.value,
      pageSize: 12,
      sort: sort.value,
      category_id: state.category1,
    });
    console.log({ data });
    return data;
  } catch (error) {
    console.error(error);
  }
};
useAsyncData(
  async () => {
    await getAllBooksClient();
  },
  {
    immediate: true,
    watch: [current, sort, state],
  }
);

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

const categoryOption = categoryStore?.categories?.categories?.map((c) => {
  console.log({ c });

  return {
    lable: c.name,
    value: c.id,
  };
});

console.log({ categoryOption });
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
    console.log("aaabb", dataCompanies);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

const value1 = ref("lucy");
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
</script>
<style scoped>
:deep(.ant-select-selector) {
  border-radius: 200px !important;
}
</style>
