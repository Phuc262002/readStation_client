<template>
  <div>
    <a-modal
      v-model:open="props.openModal"
      title="Basic Modal"
      :onCancel="handleClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  openModal: Boolean,
  closeModal: Function,
});
const open = ref(props.openModal);
watch(
  () => props.openModal,
  (newValue) => {
    open.value = newValue;
  }
);
const handleClose = () => {
  props.closeModal();
};
</script>
