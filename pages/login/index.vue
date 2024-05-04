<template>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                                placeholder="Enter Email"
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
                            Password
                        </label>
                        <div class="mt-1">
                            <a-input-password
                                :status="errors.password ? 'error' : ''"
                                id="password"
                                v-bind="password"
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                            />
                        </div>

                        <small class="my-2 text-red-500">
                            {{ errors.password }}
                        </small>
                    </div>

                    <div>
                        <a-button
                            type="primary"
                            html-type="submit"
                            class="w-full"
                            :loading="isSubmitting"
                        >
                            Sign in
                        </a-button>
                    </div>

                    <div>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            Don't have an account?
                            <NuxtLink
                                to="/register"
                                class="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Register
                            </NuxtLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <FooterComponent />
</template>

<script setup>

const authStore = useAuthStore();
const isSubmitting = ref(false);

import { useForm } from "vee-validate";
import * as yup from "yup";

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
</script>
