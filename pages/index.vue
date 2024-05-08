
<template>
    <div>
       <HomeSliderBig/>
       <HomeSwiperItemHome/>
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
