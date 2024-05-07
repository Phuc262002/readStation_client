<template>
  <div class="flex items-center justify-center gap-[30px]">
    <div class="">
      <div class="w-full max-w-[506px] text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Đăng ký</h2>
        <p class="mt-[20px]">
          Bạn vui lòng đăng ký tài khoảnBạn vui lòng đăng ký tài khoảnBạn vui
          lòng đăng ký tài khoảnBạn vui lòng đăng ký tài khoảnBạn vui lòng đăng
          ký tài khoảnBạn vui lòng đăng ký tài khoản
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
                Tên tài khoản
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
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Nhập lại mật khẩu
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
            ></div>

            <div>
              <a-button
                type="primary"
                html-type="submit"
                class="w-full bg-[#162D3A]"
                :loading="isSubmitting"
              >
                Đăng ký
              </a-button>
              <p class="text-center">or</p>
            </div>

            <div>
              <p class="mt-2 text-center text-sm text-gray-600">
                Bạn đã có tài khoản?
                <NuxtLink
                  to="/loginn"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Đăng nhập
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
  console.log("🚀 ~ onSubmit ~ values:", values);
  // Submit to API
  isSubmitting.value = true;
  await authStore.login(values);
  isSubmitting.value = false;
});
</script>
