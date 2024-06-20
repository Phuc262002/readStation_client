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
            <div class="w-1/2 flex border-r border-rtgray-50">
              <div class="w-1/3 font-bold text-sm space-y-3">
                <p>Tên bài viết:</p>
                <p>Tiêu đề:</p>
                <p>Trạng thái:</p>
              </div>
              <div class="w-2/3 text-sm space-y-3">
                <p>{{ postStore?.post?.title }}</p>
                <p>{{ postStore?.post?.summary }}</p>
                <a-tag color="Green">{{ postStore?.post?.status }}</a-tag>
              </div>
            </div>
            <!--  -->
            <div class="w-1/2 flex pl-5">
              <div class="w-1/3 font-bold text-sm space-y-3">
                <p>Danh mục:</p>
                <p>Lượt xem:</p>
                <p>Ngày đăng:</p>
              </div>
              <div class="w-2/3 text-sm space-y-3">
                <p>{{ postStore?.post?.category?.name }}</p>
                <p>{{ postStore?.post?.view }} lượt xem</p>
                <p>
                  {{ $dayjs(postStore?.post?.created_at).format("DD/MM/YYYY") }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-1/2 flex pt-3">
            <div class="w-1/3 font-bold text-sm">
              <p>Ảnh bìa</p>
            </div>
            <p class="w-2/3">
              <img
                :src="postStore?.post?.image"
                alt=""
                class="w-[350px] h-[160px] rounded-lg"
              />
            </p>
          </div>
        </div>
        <!--  -->
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
const postStore = usePostStore();
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
    await postStore.getOnePostClient(props.postDetailId);
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
