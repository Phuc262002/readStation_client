<template>
  <div>
    <div
      v-if="postStore.isLoading"
      class="absolute top-0 left-0 min-w-[100vw] min-h-full bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <h2 class="text-sm font-bold pb-5">Bài viết của bạn</h2>
    <div class="bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div class="relative w-1/4 md:block hidden">
        <a-input
          v-model:value="value"
          placeholder="Nhập tên bài viết để tìm kiếm"
          enter-button
          class="h-10"
          @search="onSearch"
        >
          <template #prefix>
            <SearchOutlined />
          </template>
        </a-input>
      </div>
      <!--  -->
      <div class="flex items-center justify-between py-5">
        <div class="flex gap-2">
          <a-button
            :loading="postStore.isLoading"
            html-type="submit"
            :class="[
              'flex items-center justify-center rounded-lg h-10 border-none shadow-none gap-2',
              filter === null ? 'bg-orange-500 !text-white' : '',
            ]"
            @click="handleCheckStatus(null)"
          >
            <Icon icon="material-symbols:file-copy-outline" />
            <span class="font-bold">Tất cả bài viết</span>
          </a-button>

          <!--  -->
          <a-button
            :class="[
              'flex items-center justify-center rounded-lg h-10 border-none shadow-none gap-2',
              filter === 'published' ? 'bg-orange-500 !text-white' : '',
            ]"
            @click="handleCheckStatus('published')"
          >
            <Icon icon="teenyicons:file-tick-outline" />
            <span class="font-bold">Công khai</span>
          </a-button>

          <!--  -->
          <a-button
            :class="[
              'flex items-center rounded-lg h-10 border-none shadow-none gap-2',
              filter === 'wating_approve' ? 'bg-orange-500 !text-white' : '',
            ]"
            @click="handleCheckStatus('wating_approve')"
          >
            <Icon icon="nonicons:loading-16" />
            <span class="font-bold">Chờ duyệt</span>
          </a-button>

          <!--  -->
          <a-button
            :class="[
              'flex items-center rounded-lg h-10 border-none shadow-none gap-2',
              filter === 'draft' ? 'bg-orange-500 !text-white' : '',
            ]"
            @click="handleCheckStatus('draft')"
          >
            <Icon icon="material-symbols:draft-outline" />
            <span class="font-bold">Nháp</span>
          </a-button>

          <!--  -->
          <a-button
            :class="[
              'flex items-center rounded-lg h-10 border-none shadow-none gap-2',
              filter === 'approve_canceled' ? 'bg-orange-500 !text-white' : '',
            ]"
            @click="handleCheckStatus('approve_canceled')"
          >
            <Icon icon="carbon:rule-cancelled" />
            <span class="font-bold">Bị từ chối</span>
          </a-button>

          <!--  -->
          <a-button
            :class="[
              'flex items-center rounded-lg h-10 border-none shadow-none gap-2',
              filter === 'hidden' ? 'bg-orange-500 !text-white' : '',
            ]"
            @click="handleCheckStatus('hidden')"
          >
            <Icon icon="uil:eye-slash" />
            <span class="font-bold">Đang ẩn</span>
          </a-button>
        </div>
        <NuxtLink to="/account/post/create-post"
          ><a-button
            class="bg-orange-500 border-none !text-white rounded-lg h-10"
          >
            Bài viết mới
          </a-button></NuxtLink
        >
      </div>
      <!--  -->
      <a-table
        :columns="columns"
        :data-source="postStore?.posts?.posts"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <!--  -->
          <template v-if="column.key === 'image'">
            <a-avatar :src="record.image" :size="80" class="rounded-lg" />
          </template>
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
                    <NuxtLink :to="`/account/post/${record?.id}`">
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
                          @click="showDeleteConfirm(record?.id)"
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
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="postStore?.posts?.totalResults"
          :pageSize="postStore?.posts?.pageSize"
          show-less-items
        />
      </div>
    </div>
    <AccountPostFormDetail
      :openModal="openModal"
      :closeModal="closeModal"
      :postDetailId="postDetailId"
    />
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const postStore = usePostClientStore();
const postGeneralStore = useGeneralPostStore();
const current = ref(1);
const openModal = ref(false);
const postDetailId = ref<number>();
const filter = ref(null);
// Modal
const showModal = (id) => {
  openModal.value = true;
  postDetailId.value = id;
  console.log(id);
};

const closeModal = () => {
  openModal.value = false;
};

const getDataPost = async () => {
  try {
    await postStore.getAllPost({
      page: current.value,
      status: filter.value,
    });
  } catch (error) {
    console.error(error);
  }
};
useAsyncData(
  async () => {
    await getDataPost();
  },
  {
    immediate: true,
    watch: [current, filter],
  }
);

// Handle Check Status Post
const handleCheckStatus = (status) => {
  filter.value = status;
  console.log(status);
};

// Delete a Post
const onDelete = async (id: any) => {
  await postGeneralStore.deletePost(id);
  getDataPost();
};
const showDeleteConfirm = (id: any) => {
  Modal.confirm({
    title: "Bạn đang muốn xóa bài viết?",
    content: "Sau khi xóa sẽ không khôi phục lại",
    okText: "Đồng ý",
    okType: "danger",
    cancelText: "Hủy",
    onOk() {
      onDelete(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
const value = ref<string>("");

const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("or use this.value", value.value);
};
const columns = [
  {
    title: "Ảnh bìa",
    dataIndex: "image",
    key: "image",
    width: "50px",
  },
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
<style scoped>
:deep(
    :where(.css-dev-only-do-not-override-1mvo6uw).ant-input-search
      > .ant-input-group
      > .ant-input-group-addon:last-child
      .ant-input-search-button
  ) {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
