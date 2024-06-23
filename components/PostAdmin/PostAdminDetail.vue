<template>
  <a-modal
    v-model:open="open"
    title="Bài viết chi tiết"
    width="70%"
    :footer="null"
    :onCancel="handleClose"
  >
    <div
      v-if="postStore.isLoading"
      class="flex justify-center items-center min-h-[50vh]"
    >
      <a-spin size="large" />
    </div>
    <div v-else class="space-y-5">
      <div class="flex justify-between gap-4">
        <div class="grow">
          <h1 class="font-bold text-xl">Bài viết số 1</h1>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <div
          class="md:col-span-1 space-y-3 md:border-r md:border-gray-200 md:pr-5"
        >
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Tiêu đề: </span>
            <span class="text-base col-span-3">{{
              postStore.post?.title
            }}</span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Danh mục: </span>
            <span class="text-base col-span-3">{{
              postStore.post?.category?.name
            }}</span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Trạng thái: </span>
            <span class="text-base col-span-3">
              {{ postStore.post?.status }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Ảnh bìa: </span>
            <span class="text-base col-span-3">
              <a-image
                class="rounded-md !h-[160px] !w-full"
                :src="postStore.post?.image"
                alt="Ảnh đại diện"
              />
            </span>
          </div>
        </div>

        <div class="md:col-span-1 space-y-3">
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Người đăng: </span>
            <span class="text-base col-span-3">
              {{ postStore.post?.user?.fullname }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Lượt xem: </span>
            <span class="text-base col-span-3">
              {{ postStore.post?.view }}
            </span>
          </div>
          <div class="grid grid-cols-4">
            <span class="text-base col-span-1">Ngày đăng: </span>
            <span class="text-base col-span-3">
              {{
                dayjs(postStore.post?.created_at).format(
                  " DD/MM/YYYY HH:mm:ss"
                )
              }}
            </span>
          </div>
        </div>
      </div>
      <div class="md:border-y md:border-gray-200 py-5">
        <h1 class="font-bold text-base">Mô tả ngắn</h1>
        <div>{{ postStore.post?.summary }}</div>
      </div>

      <div>
        <h1 class="font-bold text-base">Mô tả ngắn</h1>
        <div v-html="postStore.post?.content"></div>
      </div>
    </div>

    <div class="flex justify-end items-end gap-2">
      <a-button @click="handleClose" html-type="submit" class="mt-4"
        >Đóng</a-button
      >
    </div>
  </a-modal>
</template>
<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const postStore = useGeneralPostStore();

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
   if (postDetailId.value) {
      await postStore.getOnePost(postDetailId.value);
    }
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
