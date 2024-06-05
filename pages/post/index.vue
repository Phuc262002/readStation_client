<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
    <div class="pb-12">
      <BlogBanner :post="postStore.posts?.posts[0]" />
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
      <BlogItem
        v-for="(post, index) in postStore.posts.posts.slice(1)"
        :key="post.id || index"
        :post="post"
      />
    </div>
    <div class="flex justify-center items-center mt-8">
      <div>
        <a-button
         type="primary"
          >Xem thêm</a-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const postStore = usePostStore();

useAsyncData(async () => {
  try {
    const data = await postStore.getPost({});
    postStore.posts = data.data._value?.data;
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
