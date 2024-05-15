<template>
  <div class="relative md:px-20 px-8 py-8">
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 min-w-[100vw] min-h-full bg-black/40 z-[99999] cursor-default"
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
              class="flex mb-4 w-fit items-center text-gray-400 hover:text-gray-900 gap-2"
            >
              <IoIosReturnLeft class="text-2xl" />
              <span>Trang chủ</span>
            </NuxtLink>
            <h2 class="text-3xl font-extrabold text-gray-900">
              Đăng ký tài khoản
            </h2>
            <p class="mt-2">Đăng ký để bắt đầu thuê sách.</p>
          </div>
          <div class="">
            <div class="bg-white py-8">
              <form class="space-y-6" @submit="onSubmit">
                <div class="space-y-2">
                  <a-alert
                    v-if="resErrors"
                    v-for="(error, index) in resErrors"
                    :message="error"
                    type="error"
                    show-icon
                  />
                </div>
                <div>
                  <label
                    for="fullname"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Họ tên
                  </label>
                  <div class="mt-1">
                    <a-input
                      class="w-[388px] h-[45px]"
                      :status="errors.name ? 'error' : ''"
                      id="fullname"
                      v-bind="fullname"
                      name="fullname"
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
                      class="w-[388px] h-[45px]"
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
                      class="w-[388px] h-[45px]"
                    />
                  </div>

                  <small class="mt-2 text-red-500">
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
                      class="w-[388px] h-[45px]"
                    />
                  </div>

                  <small class="mt-2 text-red-500">
                    {{ errors.password_confirmation }}
                  </small>
                </div>

                <div>
                  <a-button
                    html-type="submit"
                    class="w-full bg-[#162D3A] h-[45px] text-white hover:bg-slate-600 text-base"
                    :loading="isSubmitting"
                  >
                    Đăng ký
                  </a-button>
                  <div
                    class="relative flex items-center justify-between text-center pt-5"
                  >
                    <hr class="solid w-[169px] border-t-2" />
                    <p class="">Or</p>
                    <hr class="solid w-[169px] border-t-2" />
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
                  <p class="mt-[25px] text-center text-sm text-gray-600">
                    Bạn đã có tài khoản?
                    <NuxtLink
                      to="/login"
                      class="font-medium text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Đăng nhập
                    </NuxtLink>
                  </p>
                </div>
                <div class="max-w-[388px] mt-5">
                  <span
                    >Bằng việc đăng ký, bạn đọc và đồng ý với
                    <span class="border-b-2">điều khoản sử dụng</span> và
                    <span class="border-b-2"
                      >Chính sách bảo mật thông tin cá nhân của </span
                    >ReadStation</span
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-full pr-20 py-8 md:block hidden fixed top-0 right-0">
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

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: yup.object().shape({
    fullname: yup
      .string()
      .required("Trường này không được để trống")
      .min(2, "Tên phải có ít nhất 2 ký tự")
      .max(50, "Tên không được quá 50 ký tự"),
    email: yup
      .string()
      .required("Trường này không được để trống")
      .email("Email không hợp lệ"),
    password: yup
      .string()
      .required("Trường này không được để trống")
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
    password_confirmation: yup
      .string()
      .required("Trường này không để trống")
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp!"),
  }),
});

// Define fields
const fullname = defineInputBinds("fullname");
const email = defineInputBinds("email");
const password = defineInputBinds("password");
const password_confirmation = defineInputBinds("password_confirmation");

// Submit handler
const onSubmit = handleSubmit(async (values) => {
  // Submit to API
  try {
    isSubmitting.value = true;
    const resData = await authStore.register(values);
    if (resData?.data?._rawValue?.status == true) {
      successToast("Đăng ký thành công", "Chuyển hướng đến trang đăng nhập");
      navigateTo("/login");
    } else {
      resErrors.value = resData.error.value.data?.errors;
      errorToast("Đăng ký không thành công", "Vui lòng thử lại");
    }
  } catch (error) {
    // console.log(error);
    errorToast("Đăng ký không thành công", "Vui lòng thử lại");
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
    "Vui lòng thử lại bằng cách nhấn vào nút đăng nhập bên dưới"
  );
};
</script>
