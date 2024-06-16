<template>
    <button @click="showModal" class="hover:relative hover:brightness-50 ">
        <img class="rounded-lg h-72 w-48"
            :src="data?.book_detail[0]?.poster"
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

<script>
import { ref } from 'vue';

export default {
  props: ["data"],
  setup() {
    const open = ref(false);
    const showModal = () => {
        open.value = true;
    };
    return { open, showModal };
  }
};
</script>
