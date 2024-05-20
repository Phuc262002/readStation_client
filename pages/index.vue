<template>
    <div>
        <HomeSliderBig />
        <HomeCategory/>
        <HomeFeaturedBooks />
        <!-- <HomeFeatureAuthor :AuthorFeatured=AuthorFeatured /> -->
        <HomeRecomended/>
        <HomeFourBox/>
    </div>
</template>

<script setup>
const data = ref(null);
const isLoading = ref(false);
const authStore = useAuthStore();

const bookstore = useBookStore();
const AuthorFeatured = ref(null);
useAsyncData(async () => {
    isLoading.value = true;
    try {
        const response = await bookstore.getAuthorFeatured(); //promise
        AuthorFeatured.value = response.data._rawValue?.data[0];
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
});

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
