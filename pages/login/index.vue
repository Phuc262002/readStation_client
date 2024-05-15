<template>
    <div class="relative md:px-20 px-8 py-8">
        <div
            v-if="isSubmitting"
            class="absolute top-0 left-0 min-w-full min-h-[100vh] bg-black/40 z-[99999] cursor-default"
        >
            <a-spin size="large" class="absolute top-1/2 left-1/2" />
        </div>
        <div class="w-full h-full flex items-center justify-between">
            <div
                class="md:w-1/2 w-full min-h-[90vh] flex flex-col items-center justify-center"
            >
                <div>
                    <div class="w-full">
                        <NuxtLink
                            to="/"
                            class="flex mb-4 items-center w-fit text-gray-400 hover:text-gray-900 gap-2"
                        >
                            <IoIosReturnLeft class="text-2xl" />
                            <span>Trang chủ</span>
                        </NuxtLink>

                        <h2 class="text-3xl font-extrabold text-gray-900">
                            Chào mừng bạn 👋
                        </h2>
                        <p class="mt-2">Đăng nhập để bắt đầu trải nghiệm.</p>
                    </div>

                    <div class="">
                        <div class="bg-white py-8">
                            <form @submit="onSubmit">
                                <div class="space-y-6">
                                    <div>
                                        <a-alert
                                            v-if="resErrors"
                                            v-for="(error, index) in resErrors"
                                            :message="error"
                                            type="error"
                                            show-icon
                                        >
                                            <template #action v-if="error[0] === 'Email is not verified'">
                                              <NuxtLink href="/">
                                                <a-button size="small" type="primary">Xác thực</a-button>
                                              </NuxtLink>
                                            </template>
                                        </a-alert>
                                    </div>
                                    <div>
                                        <label
                                            for="email"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <div class="mt-1">
                                            <a-input
                                                class="w-[388px] h-[45px]"
                                                :status="
                                                    errors.email ? 'error' : ''
                                                "
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
                                                :status="
                                                    errors.password
                                                        ? 'error'
                                                        : ''
                                                "
                                                id="password"
                                                v-bind="password"
                                                name="password"
                                                type="password"
                                                placeholder="Nhập mật khẩu"
                                                class="w-[388px] h-[45px]"
                                            />
                                        </div>

                                        <small class="mt-2 text-red-500">
                                            {{ errors.password }}
                                        </small>
                                    </div>
                                </div>

                                <div
                                    class="float-end font-medium text-indigo-600 mt-3 mb-6"
                                >
                                    <button class="text-sm" type="button">
                                        Bạn quên mật khẩu?
                                    </button>
                                </div>
                                <div>
                                    <a-button
                                        html-type="submit"
                                        class="w-full bg-[#162D3A] h-[45px] text-white hover:bg-slate-600 text-base"
                                        :loading="isSubmitting"
                                    >
                                        <span class="hover:text-white"
                                            >Đăng nhập</span
                                        >
                                    </a-button>
                                    <div
                                        class="relative flex items-center justify-between text-center pt-5"
                                    >
                                        <hr
                                            class="solid w-[169px] border-t-2"
                                        />
                                        <p class="">Or</p>
                                        <hr
                                            class="solid w-[169px] border-t-2"
                                        />
                                    </div>

                                    <div class="pt-5 flex justify-center">
                                        <GoogleSignInButton
                                            width="389px"
                                            style="text-align: center"
                                            @success="handleLoginSuccess"
                                            @error="handleLoginError"
                                            one-tap
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p
                                        class="mt-[25px] text-center text-sm text-gray-600"
                                    >
                                        Bạn không có tài khoản?
                                        <NuxtLink
                                            to="/register"
                                            class="font-medium text-sm text-indigo-600 hover:text-indigo-500"
                                        >
                                            Đăng ký
                                        </NuxtLink>
                                    </p>
                                </div>
                            </form>
                            <div class="max-w-[388px] mt-5 text-center">
                                <span
                                    >Bằng việc đăng nhập, bạn đọc và đồng ý với
                                    <span class="border-b-2"
                                        >điều khoản sử dụng</span
                                    >
                                    và
                                    <span class="border-b-2"
                                        >Chính sách bảo mật thông tin cá nhân
                                        của </span
                                    >ReadStation</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="w-1/2 h-full pr-20 py-8 md:block hidden fixed top-0 right-0"
            >
                <img
                    class="h-full w-full object-cover rounded-2xl"
                    src="/assets/images/backgound-login.jpg"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IoIosReturnLeft } from "vue3-icons/io";
const authStore = useAuthStore();
const isSubmitting = ref(false);
const resErrors = ref({});

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
            .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
    },
});

// Define fields
const email = defineInputBinds("email");
const password = defineInputBinds("password");

// Submit handler
const onSubmit = handleSubmit(async (values) => {
    // Submit to API
    try {
        isSubmitting.value = true;
        const resData = await authStore.login(values);
        console.log("resData", resData);

        if (resData?.data?._rawValue?.status == true) {
            successToast(
                "Đăng nhập thành công",
                "Chào mừng bạn đến với ReadStation",
            );
            navigateTo("/");
        } else {
            resErrors.value = resData.error.value.data.errors;
            errorToast("Đăng nhập không thành công", "Vui lòng thử lại sau");
        }
    } catch (error) {
        errorToast("Đăng nhập không thành công", "Vui lòng thử lại sau");
    } finally {
        isSubmitting.value = false;
    }
});

// handle success event
const handleLoginSuccess = async (response: CredentialResponse) => {
    const { credential } = response;
    try {
        isSubmitting.value = true;
        const resData = await authStore.loginWithGoogle(credential);
        if (resData?.data?._rawValue?.status == true) {
            successToast(
                "Đăng nhập thành công",
                "Chào mừng bạn đến với ReadStation",
            );
            navigateTo("/");
        } else {
            resErrors.value = resData.error.value.data.errors;
            errorToast("Đăng nhập không thành công", "Vui lòng thử lại sau");
        }
    } catch (error) {
        message.error({
            content: "Đăng nhập không thành công",
        });
        errorToast(
            "Đăng nhập không thành công",
            "Vui lòng thử lại bằng cách đăng nhập bên trang đăng nhập",
        );
    } finally {
        isSubmitting.value = false;
    }
};

// handle an error event
const handleLoginError = () => {
    errorToast(
        "Đăng nhập không thành công",
        "Vui lòng thử lại bằng cách nhấn vào nút đăng nhập bên dưới",
    );
};
</script>
