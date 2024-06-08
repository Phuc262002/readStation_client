<template>
  <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
    <div
      v-if="!isSubmitting"
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
            <div class="border-t px-4 py-2" v-if="isShow.category">
              <div
                v-if="isLoading"
                class="flex items-center justify-center py-10"
              >
                <a-spin></a-spin>
              </div>
              <ul class="px-4 space-y-1">
                <li
                  class="flex items-center"
                  v-for="(category, index) in categoryStore?.categories
                    ?.categories"
                  :key="index"
                >
                  <a-checkbox> {{ category?.name }}</a-checkbox>
                </li>
              </ul>
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
            <div class="border-t px-4 py-2" v-if="isShow.author">
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
            <div class="border-t px-4 py-2" v-if="isShow.publishing">
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
            <div v-if="isShow.review" class="border-t px-4 py-2">
              <ul class="px-4 space-y-1">
                <li class="flex items-center justify-between">
                  <label for="star5" class="flex items-center justify-between">
                    <input type="checkbox" id="star5" />
                    <CommonStar rating="5" />
                  </label>
                </li>
                <li class="flex items-center justify-between">
                  <label for="star4" class="flex items-center justify-between">
                    <input type="checkbox" id="star4" />
                    <CommonStar rating="4" />
                  </label>
                </li>
                <li class="flex items-center justify-between">
                  <label for="star3" class="flex items-center justify-between">
                    <input type="checkbox" id="star3" />
                    <CommonStar rating="3" />
                  </label>
                </li>
                <li class="flex items-center justify-between">
                  <label for="star2" class="flex items-center justify-between">
                    <input type="checkbox" id="star2" />
                    <CommonStar rating="2" />
                  </label>
                </li>
                <li class="flex items-center justify-between">
                  <label for="star1" class="flex items-center justify-between">
                    <input type="checkbox" id="star1" />
                    <CommonStar rating="1" />
                  </label>
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
                  ref="select"
                  v-model:value="value1"
                  @change="handleChange"
                >
                  <a-select-option value="jack">Jack</a-select-option>
                  <a-select-option value="lucy">Lucy</a-select-option>

                  <a-select-option value="Yiminghe">yiminghe</a-select-option>
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
                v-for="(book, index) in bookstore?.books?.books.slice(1)"
                :key="book.id || index"
                :book="book"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <a-pagination
              v-model:current="current"
              :total="50"
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
const isShow = {
  category: ref(false),
  author: ref(false),
  publishing: ref(false),
  review: ref(false),
};

const handleIsShow = (section) => {
  isShow[section].value = !isShow[section].value;
};

const publishingCompanyStore = usePublishingCompanyStore();
const bookstore = useBookStore();
const categoryStore = useCategoryStore();
const authorStore = useAuthorStore();

const dataAuthor = ref({});
const dataCategory = ref({});
const dataBooks = ref({});
const dataCompanies = ref({});

const isLoading = ref(false);

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
    const response = await bookstore.getAllBooks();
    dataBooks.value = response?.data?._rawValue?.data;
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
const current = ref(1);
</script>
<style scoped>
:deep(.ant-select-selector) {
  border-radius: 200px !important;
}
</style>
