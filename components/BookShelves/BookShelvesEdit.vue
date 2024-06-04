<template>
    <a-modal v-model:open="props.openModalEdit" tiile="Sửa" :footer="null" :closable="false">
        <div>Hello</div>
    </a-modal>
</template>

<script setup>
  const props = defineProps({
    openModalEdit: Boolean,
    openModal: Function,
    shelvesId: Number,
  });
  const shelvesId = ref(props.shelvesId);
  const open = ref(props.openModalEdit);
</script>