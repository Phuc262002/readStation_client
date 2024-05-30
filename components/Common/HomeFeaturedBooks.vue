<template>

    <button @click="showModal" class="hover:relative hover:brightness-50 ">
        <img class="rounded-lg "
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
            alt="">
        <div class="flex justify-center items-center">
            <div class="absolute top-1/2 text-white  flex justify-center items-center gap-1 ">
                <UIcon name="i-material-symbols-visibility-outline" class="text-white text-base" />
                <h1>Preview</h1>
            </div>
        </div>

        <a-modal v-model:open="open" title="Xem chi tiết" :footer="null">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>
    </button>

</template>
<script setup>
import { ref } from 'vue';
const open = ref(false);
const showModal = () => {
    open.value = true;
};
</script>
