<template>
    <div>
        <h1>This is the home page</h1>

        <div class="mt-10">
            <h1 class="my-5">Code mẫu xử lý loading dữ liệu</h1>
            <div>
                <a-button @click="getProfile" type="primary">Lấy thông tin user</a-button>
            </div>
            
            <div v-if="isLoading">
                <a-spin />
            </div>
            <div v-else>
                <pre>{{ data }}</pre>
            </div>
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
