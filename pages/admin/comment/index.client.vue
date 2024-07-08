<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả bình luận</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="w-1/2 flex items-center gap-2">
          <div class="relative w-2/3 md:block hidden">
            <div class="flex">
              <a-input
                placeholder="Nhập tên bài viết để tìm kiếm"
                class="h-10"
                v-model:value="valueSearch"
              >
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
            </div>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <UIcon class="text-gray-500" name="i-material-symbols-search" />
            </div>
          </div>

          <a-dropdown :trigger="['click']">
            <template #overlay>
              <a-menu class="">
                <a-menu-item @click="statusValue({ value: '', label: 'Tất cả' })">Tất cả</a-menu-item>
                <a-menu-item
                  @click="
                    statusValue({ value: 'published', label: 'Công khai' })
                  "
                  >Công khai</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'banned', label: 'Bị chặn' })
                  "
                  >Bị chặn</a-menu-item
                >
                <a-menu-item
                  @click="
                    statusValue({ value: 'hidden', label: 'Đang ẩn' })
                  "
                  >Đang ẩn</a-menu-item
                >
                
              </a-menu>
            </template>
            <a-button size="large" class="flex gap-3 items-center">
              {{ queryStatus.label ? queryStatus.label : "Tất cả" }}
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </div>
        <!-- <NuxtLink to="/admin/book-case/add-bookcase" class="">
          <a-button type="primary">Thêm bình luận</a-button>
        </NuxtLink> -->
      </div>

      <a-table
        :columns="columns"
        :data-source="commentStore?.commentAdmin?.comments"
        :loading="commentStore.isLoading"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'post_id'">
            <span>
              {{ record.post?.title }}
            </span>
          </template>
          <template v-if="column.key === 'user_id'">
            <span>
              {{ record.user?.fullname }}
            </span>
          </template>
          <template v-if="column.key === 'content'">
            <span>
              {{ record.content }}
            </span>
          </template>
          <template v-if="column.key === 'get_parent_comment'">
            <span>
              {{ record.get_parent_comment?.content }}
            </span>
          </template>
          <template v-if="column.key === 'created_at'">
            <span>
              {{ dayjs(record.created_at).format("DD/MM/YYYY HH:mm:ss") }}
            </span>
          </template>
          <template v-else-if="column.key === 'status'">
            <a-tag
              :bordered="false"
              v-if="record.status === CommentStatus.PUBLISHED"
              class="bg-tag-bg-09 text-tag-text-09"
            >
              Công khai
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === CommentStatus.BANNED"
              class="bg-tag-bg-06 text-tag-text-06"
            >
              Bị chặn
            </a-tag>
            <a-tag
              :bordered="false"
              v-if="record.status === CommentStatus.HIDDEN"
              class="bg-tag-bg-07 text-tag-text-07"
            >
              Đang ẩn
            </a-tag>
          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <a-tooltip placement="top" color="black">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center cursor-pointer w-8 h-8 rounded-md"
                >
                  <UIcon class="text-lg" name="i-icon-park-outline-eyes" />
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
                    <a-menu-item key="2" class="p-4">
                      <button
                        @click="showRecoverConfirm(record?.id)"
                        class="flex items-center gap-2"
                      >
                        <UIcon class="text-lg" name="i-mdi-eye-off-outline" />
                        <span>Ẩn</span>
                      </button>
                    </a-menu-item>

                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button
                          @click="showDeleteConfirm(record?.id)"
                          class="flex items-center gap-1"
                        >
                          <UIcon
                            class="text-lg"
                            name="i-material-symbols-close-rounded"
                          />
                          <span>Hủy</span>
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
          :total="commentStore?.commentAdmin?.totalResults"
          :pageSize="commentStore?.commentAdmin?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Modal } from "ant-design-vue";
import { CommentStatus } from "~/types/admin/comment";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const open = ref(false);
const current = ref(1);
const valueSearch = ref("");
const queryStatus = ref({
  value: "",
  label: "",
});
const statusValue = ({ value, label }) => {
  queryStatus.value.value = value;
  queryStatus.value.label = label;
};
const commentStore = useCommentStore();
const commentGeneralStore = useGeneralCommentStore();
useAsyncData(
  async () => {
    await commentStore.getAllComment({
      page: current.value,
      search: valueSearch.value,
      status: queryStatus.value.value,
    });
  },
  {
    immediate: true,
    watch: [current, valueSearch, queryStatus.value],
  }
);
const showDeleteConfirm = (comment_id) => {
  Modal.confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onDelete(comment_id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
const onDelete = async (comment_id) => {
  await commentGeneralStore.deleteComment({ comment_id: comment_id });
  await commentStore.getAllComment({});
};

const onRecover = async (comment_id) => {
  await commentGeneralStore.updateComment({
    comment_id: comment_id,
    status: "hidden",
  });
  await commentStore.getAllComment({});
};
const showRecoverConfirm = (id) => {
  Modal.confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onRecover(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
const columns = [
  {
    title: "Tên bài viết",
    dataIndex: "post_id",
    key: "post_id",
    width: "300px",
  },
  {
    title: "Tên người viết",
    dataIndex: "user_id",
    key: "user_id",
  },

  {
    title: "Nội dung ",
    dataIndex: "get_parent_comment",
    key: "get_parent_comment",
  },
  {
    title: "Nội dung bình luận",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "Thời gian bình luận",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Action",
    key: "action",
  },
];
</script>
