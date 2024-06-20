<template>
  <div>
    <h2 class="text-sm font-bold pb-5">Bài viết của bạn</h2>
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div class="relative w-1/4 md:block hidden pb-2">
        <div class="flex">
          <input
            type="text"
            class="w-full h-10 border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
            placeholder="Tìm kiếm..."
          />
        </div>
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <UIcon class="text-gray-500" name="i-material-symbols-search" />
        </div>
      </div>
      <!--  -->
      <div class="flex items-center justify-between py-5">
        <div class="flex gap-3">
          <a-button
            class="flex items-center gap-2 h-10 bg-orange-500 !text-white border-none"
          >
            <img src="../../assets/images/icon-blog.svg" alt="" />
            <span>Tất cả bài viết</span>
          </a-button>
          <a-button class="flex items-center gap-2 h-10 border-none">
            <img src="../../assets/images/icon-public.svg" alt="" />
            <span>Công khai</span>
          </a-button>
          <a-button class="flex items-center gap-2 h-10 border-none">
            <img src="../../assets/images/icon-wait-accept.svg" alt="" />
            <span>Chờ duyệt</span>
          </a-button>
          <a-button class="flex items-center gap-2 h-10 border-none">
            <img src="../../assets/images/icon-draft.svg" alt="" />
            <span>Nháp</span>
          </a-button>
          <a-button class="flex items-center gap-2 h-10 border-none">
            <img src="../../assets/images/icon-hidden.svg" alt="" />
            <span>Đang ẩn</span>
          </a-button>
        </div>
        <NuxtLink to="/account/create-post"
          ><a-button class="bg-orange-500 border-none !text-white h-10"
            >Bài viết mới</a-button
          ></NuxtLink
        >
      </div>
      <!--  -->
      <a-table
        :columns="columns"
        :data-source="userStore?.posts?.posts"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <!--  -->
          <template v-if="column.key === 'created_at'">
            <span>{{
              $dayjs(record.created_at).format("DD/MM/YYYY - HH:MM")
            }}</span>
          </template>
          <!--  -->
          <template v-if="column.key === 'view'">
            <span>{{ record.view }} lượt xem</span>
          </template>
          <!--  -->
          <template v-if="column.key === 'status'">
            <span>
              <a-tag
                v-if="record.status === 'published'"
                class="text-tag-text-09 bg-tag-bg-09 border-none px-3 py-1"
                >Công khai</a-tag
              >
              <a-tag
                v-else-if="record.status === 'wating_approve'"
                class="text-tag-text-pending bg-tag-bg-pending border-none px-3 py-1"
                >Chờ phê duyệt</a-tag
              >
              <a-tag
                v-else-if="record.status === 'draft'"
                class="text-tag-text-draft bg-tag-bg-draft border-none px-3 py-1"
                >Nháp</a-tag
              >
              <a-tag
                v-else-if="record.status === 'hidden'"
                class="text-tag-text-draft bg-tag-bg-canceled border-none px-3 py-1"
                >Ẩn</a-tag
              >
              <a-tag
                v-else-if="record.status === 'deleted'"
                class="text-tag-text bg-tag-bg border-none"
                >Đã xóa</a-tag
              >
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <span>
                <a-tooltip placement="top">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    @click="showModal(record.id)"
                    class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                  >
                    <div class="flex items-center">
                      <UIcon
                        class="group-hover:text-[#212122]"
                        name="i-icon-park-outline-eyes"
                      />
                    </div>
                  </button>
                </a-tooltip>
              </span>
              <AccountFormPostDetail
                :openModal="openModal"
                :closeModal="closeModal"
                :postDetailId="postDetailId"
              />

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
                    <NuxtLink to="">
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
                        <button class="flex items-center gap-1 text-blue-400">
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
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="userStore?.posts?.totalResults"
          :pageSize="userStore?.posts?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const userStore = useUserStore();
const current = ref(1);
const openModal = ref(false);
const postDetailId = ref<number>();
// Modal
const showModal = (id) => {
  openModal.value = true;
  postDetailId.value = id;
  console.log(id);
};

const closeModal = () => {
  openModal.value = false;
};
useAsyncData(
  async () => {
    try {
      await userStore.getAllPost({
        page: current.value,
        // pageSize: 2,
      });
    } catch (error) {
      console.log(error);
    }
  },
  {
    immediate: true,
    watch: [current],
  }
);
const columns = [
  {
    title: "Bài viết",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Thời gian đăng",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Lượt xem",
    dataIndex: "view",
    key: "view",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];
</script>
