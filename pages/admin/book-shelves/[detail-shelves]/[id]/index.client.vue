<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-bold uppercase">Chi tiết {{ detailShelves.name }}</h5>
      </div>
    </div>
    <div class="bg-[white] h-24 rounded-lg">
      <div class="p-5 flex justify-between">
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-bold">
            {{ detailShelves.name }}
          </h1>
          <p class="text-orange-400">{{ detailShelves?.bookcase?.description }} - {{ detailShelves.name }} -
            {{ detailShelves?.book_details.length }} cuốn sách</p>
        </div>
        <div>
          <a-button type="primary">Đổi tên kệ</a-button>
        </div>
      </div>
    </div>
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm mt-5">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <a-input v-model:value="filter.search" @pressEnter="handleSearch" placeholder="Nhập mã kệ để tìm kiếm" class="h-10">
              <template #prefix>
                <SearchOutlined />
              </template>
            </a-input>
          </div>
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <div class="">
          <a-button type="primary">Thêm sách</a-button>
        </div>
      </div>
      <a-table :columns="columns" :data-source="detailShelves?.book_details">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'name'">
            <a>{{ record }}</a>
          </template>
          <template v-if="column.key === 'poster'">
            <span class="flex justify-start gap-2">
              <img class="rounded-lg w-20 h-30" :src="record.poster" alt="">
            </span>
          </template>
          <template v-if="column.key === 'title'">
            <span class="flex justify-start gap-2">
              <p>{{ record?.book.title }}</p>
            </span>
          </template>
          <template v-if="column.key === 'author'">
            <span class="flex justify-start gap-2">
              <p>{{ record?.book?.author.author }}</p>
            </span>
          </template>
          <template v-if="column.key === 'category'">
            <span class="flex justify-start gap-2">
              <p>{{ record?.book?.category.name }}</p>
            </span>
          </template>
          <template v-else-if="column.key === 'is_featured'">
            <IconTick v-if="record?.book?.is_featured" />
            <IconMul v-else />
          </template>
          <template v-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                {{ record?.status }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModal"
                  class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <div>
                    <UIcon
                      class="group-hover:text-[#212122]"
                      name="i-icon-park-outline-eyes"
                    />

                    <a-modal v-model:open="open" title="Sửa" width="70%">
                      <div class="flex justify-between gap-4">
                        <div class="grow">
                          <h1 class="font-bold text-xl">Bài viết số 1</h1>
                        </div>
                      </div>
                      <div
                        class="flex border border-transparent border-b-gray-300 pb-2"
                      >
                        <div class="w-1/5">
                          <h4 class="font-bold">Tên người viết</h4>
                        </div>
                        <div class="w-4/5">Huỳnh Tuấn Kiệt</div>
                      </div>
                    </a-modal>
                  </div>
                </button>
              </a-tooltip>

              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#131313]"
                    name="i-solar-menu-dots-bold"
                  />
                </button>
                <template #overlay>
                  <a-menu>
                    <NuxtLink>
                      <a-menu-item key="2" class="p-4">
                        <span class="flex items-center gap-2 text-blue-400">
                          <UIcon
                            class="group-hover:text-[green]"
                            name="i-material-symbols-edit-outline"
                          />
                          <span>Sửa</span>
                        </span>
                      </a-menu-item>
                    </NuxtLink>

                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button
                          class="flex items-center gap-1 text-blue-400"
                        >
                          <UIcon
                            class="group-hover:text-[red] text-lg"
                            name="i-material-symbols-delete-outline"
                          />
                          <span>Xóa</span>
                        </button>
                      </span>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
          
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const bookStore = useBookStore();
const filter = ref({
  search: "",
});
const handleSearch = () => {
  console.log("🚀 ~ handleSearch ~", filter.value.search)
};
const getDatabook = async () => {
  const data = await bookStore.getAdminBooks({
    search: filter.value.search,
  });
  console.log("🚀 ~ getDatabook ~ data", data)
};

const route = useRoute()
const detailShelvesId = route.params.id;
const BookShelves = useShelvesStore();
const detailShelves = ref({});
console.log("🚀 ~ detailShelves:", detailShelves)
const getData = async () => {
  const data = await BookShelves.getOneShelves(detailShelvesId);
  detailShelves.value = data?.data?._rawValue?.data;
};
useAsyncData(async () => {
  await getData();
  await getDatabook();
});



const columns = [
  {
    title: 'Ảnh bìa',
    dataIndex: 'poster',
    key: 'poster',
  },
  {
    title: 'Tên sách',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Tác giả',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Phiên bản',
    dataIndex: 'book_version',
    key: 'book_version',
  },
  {
    title: 'Danh mục',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Nổi bật',
    dataIndex: 'is_featured',
    key: 'is_featured',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

// const data = [
//   {
//     image: "hình ảnh",
//     book: "Sách thiếu nhi",
//     author : "Nguyễn Nhật Ánh",
//     price: "100.000",
//     book_version: "tái bản 2",
//     category: "Danh mục",
//     is_feature: "Nổi bật",
//     status: "Trạng thái",
//   },
// ];
</script>