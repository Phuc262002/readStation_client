<template>
    <div>
        <HomeSliderBig />
        <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
            <HomeSwiperItemHome />
        </div>
    </div>
</template>

<script setup>
const data = ref(null);
const isLoading = ref(false);

const authStore = useAuthStore();

const getProfile = async () => {
    isLoading.value = true;
    try {
        const response = await authStore.getProfile();
        data.value = response.data._rawValue.data;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};
</script>
