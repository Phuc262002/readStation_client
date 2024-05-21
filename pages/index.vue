<template>
    <div>
        <HomeSliderBig />
        <HomeCategory/>
        <HomeFeaturedBooks />
        <HomeFeatureAuthor/>
        <HomeRecomended/>
        <HomeFourBox/>
    </div>
</template>

<script setup>
const data = ref(null);
const authStore = useAuthStore();
useAsyncData(async () => {
    isLoading.value = true;
    try {
        const response = await authStore.getProfile();
        data.value = response.data._rawValue.data;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
});

useSeoMeta({
    title: "My Amazing Site",
    ogTitle: "My Amazing Site",
    description: "This is my amazing site, let me tell you all about it.",
    ogDescription: "This is my amazing site, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
</script>
