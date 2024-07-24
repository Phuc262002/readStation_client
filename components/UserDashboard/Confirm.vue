<template>
  <a-modal
    v-model:open="props.openModalConfirm"
    :footer="null"
    :onCancel="handleClose"
  >
    <div>
      <div class="flex flex-col items-center bg-white py-2">
        <div class="py-2 text-center">
          <ExclamationCircleOutlined
            class="text-tag-text-06 mt-10 mb-5"
            style="font-size: 80px"
          />
          <span class="block text-2xl font-medium text-tag-text-06 my-2">
            Xác nhận vô hiệu hóa người dùng
          </span>
          <span class="block text-base font-medium text-tag-text-07 my-2">
            Bạn có chắc chắn muốn vô hiệu hóa người dùng này không?
          </span>

          <span for="email" class="block text-base font-medium mt-5 mb-2">
            <span class="text-tag-text-06">*</span> Lý do vô hiệu hóa
          </span>
          <div class="mt-1">
            <a-textarea v-model:value="banned_reason" class="w-full h-10" />
          </div>
        </div>
      </div>

      <div class="flex justify-end items-end gap-2">
        <a-button @click="handleClose" danger html-type="button" class="mt-4"
          >Hủy</a-button
        >
        <a-button
          @click="handleSubmit"
          type="primary"
          html-type="submit"
          class="mt-4"
          >Xác nhận</a-button
        >
      </div>
    </div>
  </a-modal>
</template>
<script setup>
const banned_reason = ref("");
const userStore = useUserStore();
const props = defineProps({
  openModalConfirm: Boolean,
  openModal: Function,
  status: String,
  id: String,
});
const open = ref(props.openModalConfirm);

watch(
  () => props.openModalConfirm,
  (newVal) => {
    open.value = newVal;
  }
);
const handleClose = () => {
  props.openModal();
  banned_reason.value = "";
};

const handleSubmit = async () => {
  if (banned_reason.value === "") {
    message.error("Vui lòng nhập lý do vô hiệu hóa người dùng");
    return;
  }
  try {
    const res = await userStore.updateUser({
      id: props.id,
      user: { status: "banned", banned_reason: banned_reason.value },
    });
    if (res.data._rawValue?.status == true) {
      message.success("Vô hiệu hóa người dùng thành công");
      await userStore.getUser({});
      handleClose();
    } else {
      message.error(res.error?.value?.data?.message);
    }
  } catch (error) {
    console.log("🚀 ~ handleSubmit ~ error:", error)
    message.error(error.message);
  }
};
</script>
