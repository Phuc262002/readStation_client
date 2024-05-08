<template>
  <div
    class="w-full fixed h-full py-[32px] px-[150px] flex items-center justify-between gap-[30px]"
  >
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 w-full min-h-[100vh] bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <div class="w-1/2 flex flex-col items-center justify-center">
      <div>
        <div class="w-full max-w-[506px]">
          <NuxtLink to="/home">
            <IconBack />
          </NuxtLink>

          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Chào mừng bạn 👋
          </h2>
          <p class="mt-[20px]">Đăng nhập để bắt đầu quản lý dự án của bạn.</p>
        </div>

        <div class="max-w-[388px]">
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
                    class="w-[388px] h-[48px]"
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
                    class="w-[388px] h-[48px]"
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

              <div>
                <a-button
                  type=""
                  html-type="submit"
                  class="w-full bg-[#162D3A] w-[388px] h-[48px] text-white hover:bg-slate-600"
                  :loading="isSubmitting"
                >
                  Đăng nhập
                </a-button>
                <p class="text-center pt-[16px] pb-[12px]">Or</p>
                <div class="pt-[30px] text-center">
                  <GoogleSignInButton
                    width="389px"
                    @success="handleLoginSuccess"
                    @error="handleLoginError"
                    one-tap
                  />
                </div>
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
    </div>
    <div class="w-1/2 h-full flex">
      <img
        class="w-full h-full object-cover rounded-2xl"
        src="/assets/images/backgound-login.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
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
  console.log("🚀 ~ onSubmit ~ values:", values);
  // Submit to API
  isSubmitting.value = true;
  await authStore.login(values);
  isSubmitting.value = false;
});

// handle success event
const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
  isSubmitting.value = true;
  await authStore.loginWithGoogle(credential);
  isSubmitting.value = false;
};

// handle an error event
const handleLoginError = () => {
  errorToast(
    "Đăng nhập không thành công",
    "Vui lòng thử lại bằng cách nhấn vào nút đăng nhập bên dưới"
  );
};
</script>
