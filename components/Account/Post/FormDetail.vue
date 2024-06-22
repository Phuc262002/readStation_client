<template>
  <a-modal
    v-model:open="props.openModal"
    width="70%"
    :onCancel="handleClose"
    :footer="null"
  >
    <div
      v-if="postStore.isLoading"
      class="flex justify-center items-center min-h-[50vh]"
    >
      <a-spin size="large" />
    </div>
    <div class="p-4">
      <h2 class="font-bold text-base border-b border-rtgray-50 pb-5">
        Chi tiết bài viết “ {{ postStore?.post?.title }} “
      </h2>
      <div class="py-5 border-b border-rtgray-50">
        <div>
          <div class="flex">
            <div class="w-1/2 border-r border-rtgray-50 space-y-3">
              <div class="grid grid-cols-4">
                <span class="font-bold col-span-1">Tiêu đề:</span>
                <span class="col-span-3">
                  {{ postStore?.post?.title }}
                </span>
              </div>
              <div class="grid grid-cols-4">
                <span class="font-bold col-span-1">Trạng thái:</span>
                <div class="col-span-3">
                  <a-tag>
                    {{ postStore?.post?.status }}
                  </a-tag>
                </div>
              </div>
            </div>
            <div class="w-1/2 border-r border-rtgray-50 space-y-3 pl-5">
              <div class="grid grid-cols-4">
                <span class="font-bold col-span-1">Danh mục:</span>
                <span class="col-span-3">
                  {{ postStore?.post?.category?.name }}
                </span>
              </div>

              <div class="grid grid-cols-4">
                <span class="font-bold col-span-1">Lượt xem:</span>
                <span class="col-span-3">
                  {{ postStore?.post?.view }}
                </span>
              </div>
              <div class="grid grid-cols-4">
                <span class="font-bold col-span-1">Ngày đăng:</span>
                <span class="col-span-3">
                  {{ $dayjs(postStore?.post?.created_at).format("DD/MM/YYYY") }}
                </span>
              </div>
            </div>
          </div>
          <div class="w-1/2 pt-3 grid grid-cols-4">
            <p class="font-bold text-sm col-span-1">Ảnh bìa:</p>
            <img
              :src="postStore?.post?.image"
              alt=""
              class="w-[350px] h-[160px] rounded-lg col-span-3"
            />
          </div>
        </div>
      </div>

      <div class="py-5 text-sm border-b border-rtgray-50">
        <p class="font-bold pb-2">Mô tả ngắn:</p>
        <p v-html="postStore?.post?.summary"></p>
      </div>
      <div class="py-5 text-sm">
        <p class="font-bold pb-2">Nội dung bài viết:</p>
        <p v-html="postStore?.post?.content"></p>
      </div>
      <div class="flex justify-end gap-2">
        <a-button @click="handleClose" class="h-10 rounded-lg">Đóng</a-button>
        <a-button class="h-10 border-none rounded-lg bg-orange-500 !text-white"
          >Ẩn bài viết</a-button
        >
      </div>
    </div>
  </a-modal>
</template>
<script lang="ts" setup>
const postStore = useGeneralPostStore();
const props = defineProps({
  openModal: Boolean,
  closeModal: Function,
  postDetailId: Number,
});
const open = ref(props.openModal);
const postDetailId = ref(props.postDetailId);
watch(
  () => props.openModal,
  (newValue) => {
    open.value = newValue;
  }
);
watch(
  () => props.postDetailId,
  (newValue) => {
    postDetailId.value = newValue;
  }
);
useAsyncData(
  async () => {
    await postStore.getOnePost(props.postDetailId);
  },
  {
    watch: [postDetailId],
    initialCache: false,
  }
);
const handleClose = async () => {
  props.closeModal();
};
</script>
