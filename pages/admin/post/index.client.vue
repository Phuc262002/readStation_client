<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-bold">Tất cả bài viết</h5>
      </div>
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="w-1/2 flex items-center gap-2">
          <div class="md:block hidden">
            <div class="flex">
              <a-input
                placeholder="Nhập tên bài viết để tìm kiếm"
                class="h-10 w-[400px]"
                v-model:value="valueSearch"
              >
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
            </div>
          </div>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item
                  @click="
                    statusValue({ value: '', label: 'Tất cả trạng thái' })
                  "
                  >Tất cả trạng thái</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'published', label: 'Đang hoạt động' })
                  "
                  >Đang hoạt động</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'wating_approve', label: 'Chờ duyệt' })
                  "
                  >Chờ duyệt</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'approve_canceled', label: 'Từ chối' })
                  "
                  >Từ chối</a-menu-item
                >
                <a-menu-item
                  @click="statusValue({ value: 'draft', label: 'Bản nháp' })"
                  >Bản nháp</a-menu-item
                >
                <a-menu-item
                  @click="statusValue({ value: 'hidden', label: 'Đã ẩn' })"
                  >Đã ẩn</a-menu-item
                >
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ queryStatus.label ? queryStatus.label : "Tất cả trạng thái" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item @click="typeValue({ value: '', label: 'Tất cả' })"
                  >Tất cả</a-menu-item
                >
                <a-menu-item
                  @click="
                    typeValue({
                      value: 'member',
                      label: 'bài viết của thành viên',
                    })
                  "
                  >bài viết của thành viên</a-menu-item
                >
                <a-menu-item
                  @click="
                    typeValue({
                      value: 'manager',
                      label: 'bài viết của thư viện',
                    })
                  "
                  >bài viết của thư viện</a-menu-item
                >
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ queryType.label ? queryType.label : "Tất cả" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <div>
                <a-menu>
                  <a-menu-item>
                    <div
                      @click="
                        categoryValue({ id: null, label: ' Tất cả danh mục' })
                      "
                    >
                      Tất cả danh mục
                    </div>
                  </a-menu-item>
                  <a-menu-item
                    v-for="(items, index) in categoryStore?.categoriesAdmin
                      ?.categories"
                    :key="index"
                  >
                    <div
                      @click="
                        categoryValue({ id: items?.id, label: items?.name })
                      "
                    >
                      {{ items.name }}
                    </div>
                  </a-menu-item>
                </a-menu>
              </div>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{
                categoryQuery.label ? categoryQuery.label : " Tất cả danh mục"
              }}
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </div>
        <NuxtLink to="/admin/post/add-post" class="">
          <a-button size="large" type="primary">Thêm bài viết</a-button>
        </NuxtLink>
      </div>

      <a-table
        :columns="columns"
        :loading="postStore.isLoading"
        :data-source="postStore?.postsAdmin.posts"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.title }}
            </a>
          </template>
          <template v-if="column.key === 'name'">
            <a>
              {{ record.title }}
            </a>
          </template>
          <template v-if="column.key === 'category_id'">
            <span>
              {{ record.category.name }}
            </span>
          </template>
          <template v-if="column.key === 'user_id'">
            <span>
              {{ record.user.fullname }}
            </span>
          </template>
          <template v-if="column.key === 'view'">
            <span> {{ record.view }} lượt xem </span>
          </template>
          <template v-else-if="column.key === 'image'">
            <a-image
              class="rounded-md"
              :width="70"
              :height="70"
              :src="record.image"
            />
          </template>
          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.WATING_APPROVE"
              class="bg-tag-bg-01 text-tag-text-01"
            >
              Chờ duyệt
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.DRAFT"
              class="bg-tag-bg-08 text-tag-text-08"
            >
              Bản nháp
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.PUBLISHED"
              class="bg-tag-bg-09 text-tag-text-09"
            >
              Đang hoạt động
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.HIDDEN"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đã ẩn
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.DELETED"
              class="bg-tag-bg-06 text-tag-text-06"
            >
              Đã xóa
            </a-tag>

            <a-tag
              :bordered="false"
              v-if="record.status === PostStatus.APPROVE_CANCELED"
              class="bg-tag-bg-11 text-tag-text-11"
            >
              Từ chối
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-2">
              <a-tooltip placement="top" color="black">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  @click="showModalDetail(record.id)"
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center cursor-pointer justify-center w-8 h-8 rounded-md"
                >
                  <Icon
                    icon="heroicons:eye"
                    class="group-hover:text-[#212122]"
                  />
                </button>
              </a-tooltip>

              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <Icon
                    icon="humbleicons:dots-horizontal"
                    class="group-hover:text-[#131313]"
                  />
                </button>
                <template #overlay>
                  <a-menu class="space-y-1">
                    <NuxtLink :to="`/admin/post/edit/${record.id}`">
                      <a-menu-item key="2" class="p-4 hover:!bg-tag-bg-02">
                        <span class="flex items-center gap-2">
                          <Icon
                            icon="fluent:edit-48-regular"
                            class="text-lg text-tag-text-02"
                          />
                          <span class="text-tag-text-02 font-bold">Sửa</span>
                        </span>
                      </a-menu-item>
                    </NuxtLink>

                    <a-menu-item key="3" class="p-4 hover:!bg-tag-bg-06">
                      <button
                        @click="showDeleteConfirm(record?.id)"
                        class="flex items-center gap-2"
                      >
                        <Icon
                          icon="hugeicons:delete-01"
                          class="text-lg font-bold text-tag-text-06"
                        />
                        <span class="text-tag-text-06 font-bold">Xóa</span>
                      </button>
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
          :total="postStore?.postsAdmin?.totalResults"
          :pageSize="postStore?.postsAdmin?.pageSize"
          show-less-items
        />
      </div>
    </div>
    <PostAdminDetail
      :openModalDetail="openModalDetail"
      :openModal="CloseModalDetail"
      :postDetailId="postDetailId"
    />
  </div>
</template>
<script setup>
import { Modal } from "ant-design-vue";
import { PostStatus } from "~/types/admin/post";
import { Icon } from "@iconify/vue";
const postGeneralStore = useGeneralPostStore();
const postStore = usePostStore();
const categoryStore = useCategoryStore();
const postDetailId = ref();
const openModalDetail = ref(false);
const current = ref(1);
const valueSearch = ref("");
const queryType = ref({
  value: "",
  label: "",
});
const queryStatus = ref({
  value: "",
  label: "",
});
const categoryQuery = ref({
  id: "",
  label: "",
});
const categoryValue = ({ id, label }) => {
  categoryQuery.value.id = id;
  categoryQuery.value.label = label;
};
const typeValue = ({ value, label }) => {
  queryType.value.value = value;
  queryType.value.label = label;
};
const statusValue = ({ value, label }) => {
  queryStatus.value.value = value;
  queryStatus.value.label = label;
};

useAsyncData(
  async () => {
    await postStore.getAllPost({
      page: current.value,
      category_id: categoryQuery.value.id,
      search: valueSearch.value,
      status: queryStatus.value.value,
      type: queryType.value.value,
    });
    console.log("🚀 ~ queryType.value.value:", queryType.value.value);
  },
  {
    immediate: true,
    watch: [
      current,
      valueSearch,
      queryStatus.value,
      categoryQuery.value,
      queryType.value,
    ],
  }
);
useAsyncData(async () => {
  await categoryStore.getAllCategory({
    type: "post",
  });
});
const onDelete = async (id) => {
  await postGeneralStore.deletePost(id);
  await postStore.getAllPost({});
};
const showDeleteConfirm = (id) => {
  Modal.confirm({
    title: "Bạn có chắc chắn muốn xóa bài viết này?",
    okText: "Xóa",
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
const columns = [
  {
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Tên bài viết",
    dataIndex: "title",
    key: "title",
    width: "250px",
  },
  // {
  //   title: "Tiêu đề",
  //   dataIndex: "summary",
  //   key: "summary",
  //   width: "200px",
  // },
  {
    title: "Người đăng",
    dataIndex: "user_id",
    key: "user_id",
  },

  {
    title: "Danh mục",
    dataIndex: "category_id",
    key: "category_id",
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
const CloseModalDetail = () => {
  openModalDetail.value = false;
};
const showModalDetail = (id) => {
  openModalDetail.value = true;
  postDetailId.value = id;
};
const open = ref(false);
const showModal = () => {
  open.value = true;
};
</script>
