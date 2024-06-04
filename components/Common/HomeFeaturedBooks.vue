<template>

    <button @click="showModal" class="hover:relative hover:brightness-50 ">
        <img class="rounded-lg h-72"
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
const open = ref(false);
const showModal = () => {
    open.value = true;
};
export default {
  props: ["data"],
};
</script>
