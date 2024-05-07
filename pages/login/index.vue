<template>
    <div class="flex items-center justify-center gap-[30px]">
        <div class="">
            <div class="w-full max-w-[506px]">
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                    Chào mừng bạn đã quay trở lại 👋
                </h2>
                <p class="mt-[20px]">
                    Hôm nay là một ngày mới. Đây là ngày của bạn. Bạn định hình
                    nó. Đăng nhập để bắt đầu quản lý dự án của bạn.
                </p>
            </div>

            <div class="mt-8 max-w-[388px]">
                <div class="bg-white py-8">
                    <form class="space-y-6" @submit="onSubmit">
                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <div class="mt-1">
                                <a-input
                                    :status="errors.email ? 'error' : ''"
                                    id="email"
                                    v-bind="email"
                                    name="email"
                                    type="email"
                                    placeholder="Nhập Email"
                                />
                            </div>
                            <small class="my-2 text-red-500">
                                {{ errors.email }}
                            </small>
                        </div>

                        <div>
                            <label
                                for="password"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Mật khẩu
                            </label>
                            <div class="mt-1">
                                <a-input-password
                                    :status="errors.password ? 'error' : ''"
                                    id="password"
                                    v-bind="password"
                                    name="password"
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                />
                            </div>

                            <small class="my-2 text-red-500">
                                {{ errors.password }}
                            </small>
                        </div>
                        <div
                            class="mt-1 float-end font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            <p class="text-sm">Bạn quên mật khẩu?</p>
                        </div>
                        <div class="pt-[30px] text-center px-[40px]">
                            <GoogleSignInButton
                                class="px-5"
                                @success="handleLoginSuccess"
                                @error="handleLoginError"
                                one-tap
                            />
                        </div>

                        <div>
                            <a-button
                                type="primary"
                                html-type="submit"
                                class="w-full bg-[#162D3A]"
                                :loading="isSubmitting"
                            >
                                Đăng nhập
                            </a-button>
                            <p class="text-center">or</p>
                        </div>

                        <div>
                            <p class="mt-2 text-center text-sm text-gray-600">
                                Bạn không có tài khoản?
                                <NuxtLink
                                    to="/register"
                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Đăng ký
                                </NuxtLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="max-w-[500px] max-h-[700px] flex">
            <img src="../../assets/images/backgound-login.jpg" alt="" />
        </div>
    </div>
    <FooterComponent />
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const authStore = useAuthStore();
const isSubmitting = ref(false);

import { useForm } from "vee-validate";
import * as yup from "yup";
import {
    GoogleSignInButton,
    type CredentialResponse,
} from "vue3-google-signin";


const props = defineProps({
    name: String,
});

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
    validationSchema: {
        email: yup
            .string()
            .required("Trường này không được để trống")
            .email("Email không hợp lệ"),
        password: yup
            .string()
            .required("Trường này không được để trống")
            .min(1, "Mật khẩu phải có ít nhất 1 ký tự"),
    },
});

// Define fields
const email = defineInputBinds("email");
const password = defineInputBinds("password");

// Submit handler
const onSubmit = handleSubmit(async (values) => {
    isSubmitting.value = true;
    try {
        await authStore.login(values);
    } catch (error) {
        console.log(error);
        message.error('Login failed! Please try again.');
        errorToast('Login failed!', 'Please try again.');
    }
    isSubmitting.value = false;
});

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
    const { credential } = response;
    console.log("Access Token", credential);
    authStore.loginWithGoogle(credential);
};

// handle an error event
const handleLoginError = () => {
    console.error("Login failed");
};
</script>
