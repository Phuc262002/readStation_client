<template>
  <a-modal
    v-model:open="open"
    title="Bài viết chi tiết"
    width="70%"
    :footer="null"
    :onCancel="handleClose"
  >
    <div class="flex justify-between gap-4">
      <div class="grow">
        <h1 class="font-bold text-xl">Bài viết số 1</h1>
      </div>
    </div>
    <div class="flex border border-transparent border-b-gray-300">
      <div class="w-1/5">
        <h4 class="font-bold">Tên người viết</h4>
      </div>
      <div class="w-4/5">{{ postStore.post?.user?.fullname }}</div>
    </div>
    <div class="flex border border-transparent border-b-gray-300">
      <div class="w-1/5">
        <h4 class="font-bold">Tên bài viết</h4>
      </div>
      <div class="w-4/5">{{ postStore.post.title }}</div>
    </div>
    <div class="flex border border-transparent border-b-gray-300 pt-2">
      <div class="w-1/5">
        <h4 class="font-bold">Danh mục</h4>
      </div>
      <div class="w-4/5">{{ postStore.post?.category?.name }}</div>
    </div>
    <div class="flex border border-transparent border-b-gray-300 pt-2">
      <div class="w-1/5">
        <h4 class="font-bold">Hình ảnh</h4>
      </div>
      <div class="w-4/5">{{ postStore.post.image }}</div>
    </div>
    <div class="flex border border-transparent border-b-gray-300 pt-2">
      <div class="w-1/5">
        <h4 class="font-bold">Nội dung</h4>
      </div>
      <div class="w-4/5">{{ postStore.post.content }}</div>
    </div>
    <div class="flex border border-transparent border-b-gray-300 pt-2">
      <div class="w-1/5">
        <h4 class="font-bold">Nội dung ngắn</h4>
      </div>
      <div class="w-4/5">{{ postStore.post.summary }}</div>
    </div>
    <div class="flex border border-transparent border-b-gray-300 pt-2">
      <div class="w-1/5">
        <h4 class="font-bold">Slug</h4>
      </div>
      <div class="w-4/5">{{ postStore.post.slug }}</div>
    </div>
    <div class="flex border border-transparent border-b-gray-300 pt-2">
      <div class="w-1/5">
        <h4 class="font-bold">Lượt xem</h4>
      </div>
      <div class="w-4/5">{{ postStore.post.view }}</div>
    </div>
    <div class="flex justify-end items-end gap-2">
      <a-button html-type="submit" class="mt-4">Hủy</a-button>
      <a-button
        type="primary"
        :loading="postStore.isSubmitting"
        html-type="submit"
        class="mt-4"
        >Lưu</a-button
      >
    </div>
  </a-modal>
</template>
<script setup>
const postStore = usePostStore();

const props = defineProps({
  postDetailId: Number,
  openModalDetail: Boolean,
  openModal: Function,
});
const postDetailId = ref(props.postDetailId);
const open = ref(props.openModalDetail);
watch(
  () => props.openModalDetail,
  (newVal) => {
    open.value = newVal;
  }
);
watch(
  () => props.postDetailId,
  (newVal) => {
    postDetailId.value = newVal;
  }
);
useAsyncData(
  async () => {
    await postStore.getOnePostAdmin(props.postDetailId);
  },
  {
    watch: [postDetailId],
    initialCache: false,
  }
);
const handleClose = async () => {
  props.openModal();
};
</script>
