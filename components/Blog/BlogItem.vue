<template>
    <div class="w-full">
        <NuxtLink to="/post/1">
            <div class="p-4 border border-gray-100 rounded-lg bg-white shadow-md">
                <div class="flex justify-center items-center mb-4">
                    <img
                        class="rounded-md"
                        src="/assets/images/VNE-Rainbow-2-3983-1585305448.jpg"
                        alt=""
                    />
                </div>

                <div
                    class="text-[#4B6BFB] bg-[#4B6BFB]/5 text-sm w-fit mb-4 rounded-md px-2 h-7 flex items-center"
                >
                    Technology
                </div>
                <div class="text-black font-semibold text-lg line-clamp-2">
                    The Impact of Technology on the Workplace: How Technology is
                    Changing
                </div>
                <div
                    class="flex items-center text-base text-[#97989F] gap-5 mt-6"
                >
                    <div class="flex items-center gap-5 text-sm font-medium">
                        <a-avatar
                            class=""
                            src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
                        />
                        <p class="">Tracey Wilson</p>
                        <p>August 20, 2022</p>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
<script setup>
import { ref } from "vue";
const getPost = usePostStore(); 
const post = ref({});
console.log("🚀 ~  post ",  post )

useAsyncData(async () => {
    try {
        const response = await getPost.getPost();
        post.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>
