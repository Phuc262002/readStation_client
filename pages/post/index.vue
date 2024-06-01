<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
    <div class="pb-12">
      <BlogBanner />
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
    <div class="flex justify-center items-center mt-8">
      <div>
        <a-button
          class="text-base flex justify-center items-center border border-gray-200 rounded-md w-[123px] h-[48px]"
          >Xem thêm</a-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const getPost = usePostStore();
const post = ref({});
console.log("🚀 ~  post ", post);

useAsyncData(async () => {
  try {
    const data = await getPost.getPost({
        
    });
    post.value = data.data;
  } catch (error) {
    console.error(error);
  }
});

useSeoMeta({
  title: "Blog",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
