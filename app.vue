<template>
    <div>
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <div>
                <div
                    v-if="isSubmitting"
                    class="fixed top-0 left-0 w-full h-full bg-black/40 z-[99999] cursor-default"
                >
                    <a-spin size="large" class="absolute top-1/2 left-1/2" />
                </div>
                <NuxtPage />
            </div>
        </NuxtLayout>
        <UNotifications />
    </div>
</template>

<script setup lang="ts">
import { useOneTap, type CredentialResponse } from "vue3-google-signin";
const authStore = useAuthStore();
const isSubmitting = ref(false);

useOneTap({
    onSuccess: async (response: CredentialResponse) => {
        const { credential } = response;
        try {
            isSubmitting.value = true;
            await authStore.loginWithGoogle(credential);
        } catch (error) {
            errorToast(
                "Đăng nhập không thành công",
                "Vui lòng thử lại bằng cách đăng nhập bên trang đăng nhập",
            );
        } finally {
            isSubmitting.value = false;
        }
    },
    onError: () => {
        errorToast(
            "Đăng nhập không thành công",
            "Vui lòng thử lại bằng cách đăng nhập bên trang đăng nhập",
        );
    },
    // options
});
</script>