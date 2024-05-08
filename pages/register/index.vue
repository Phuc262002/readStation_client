<template>
  <div
    class="fixed h-full w-full py-[32px] px-[150px] flex items-center justify-between gap-[30px]"
  >
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 w-full min-h-[100vh] bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <div class="w-1/2 flex items-center justify-center flex-col">
      <div>
        <div class="w-full max-w-[506px] items-center">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Đăng ký</h2>
          <p class="mt-[20px]">Đăng ký để bắt đầu quản lý dự án của bạn.</p>
        </div>

        <div class="max-w-[388px]">
          <div class="bg-white py-8">
            <form class="space-y-6" @submit="onSubmit">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Họ tên
                </label>
                <div class="mt-1">
                  <a-input
                    class="w-[388px] h-[48px]"
                    :status="errors.name ? 'error' : ''"
                    id="name"
                    v-bind="name"
                    name="name"
                    type="name"
                    placeholder="Nhập họ tên"
                  />
                </div>
                <small class="my-2 text-red-500">
                  {{ errors.name }}
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
              <div>
                <label
                  for="password_confirmation"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nhập lại mật khẩu
                </label>
                <div class="mt-1">
                  <a-input-password
                    :status="errors.password_confirmation ? 'error' : ''"
                    id="password_confirmation"
                    v-bind="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    class="w-[388px] h-[48px]"
                  />
                </div>

                <small class="my-2 text-red-500">
                  {{ errors.password_confirmation }}
                </small>
              </div>

              <div>
                <a-button
                  type=""
                  html-type="submit"
                  class="w-full bg-[#162D3A] w-[388px] h-[48px] text-white hover:bg-slate-600"
                  :loading="isSubmitting"
                >
                  Đăng ký
                </a-button>
              </div>

              <div>
                <p class="mt-2 text-center text-sm text-gray-600">
                  Bạn đã có tài khoản?
                  <NuxtLink
                    to="/login"
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

const props = defineProps({
  name: String,
});

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .min(8, "Ký tự phải từ 8 -> 50")
      .max(50, "Ký tự phải từ 8 -> 50")
      .required("Trường này không được để trống"),
    email: yup
      .string()
      .required("Trường này không được để trống")
      .email("Email không hợp lệ"),
    password: yup
      .string()
      .required("Trường này không được để trống")
      .min(1, "Mật khẩu phải có ít nhất 1 ký tự"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp!"),
  }),
});

// Define fields
const name = defineInputBinds("name");
const email = defineInputBinds("email");
const password_confirmation = defineInputBinds("password_confirmation");
const password = defineInputBinds("password");
console.log(name);
console.log(email);
console.log(password_confirmation);
console.log(password);

// Submit handler
const onSubmit = handleSubmit(async (values) => {
  console.log("🚀 ~ onSubmit ~ values:", values);
  // Submit to API
  isSubmitting.value = true;
  await authStore.register(values);
  isSubmitting.value = false;
});
</script>
