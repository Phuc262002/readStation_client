<template>
  <div
    class="bg-[url('assets/images/bg-404.svg')] w-full h-[100vh] bg-cover bg-no-repeat bg-center"
  >
    <div
      class="md:py-10 flex justify-center items-center container min-h-[100vh]"
    >
      <div
        v-if="isSubmitting"
        class="absolute top-0 left-0 min-w-[100vw] min-h-full bg-black/40 z-[99999] cursor-default"
      >
        <a-spin size="large" class="absolute top-1/2 left-1/2" />
      </div>
      <div
        class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8 w-[400px] rounded-lg"
      >
        <div class="text-center pb-4">
          <h2 class="text-2xl text-sky-600 font-bold pb-3">
            Đặt lại mật khẩu 🔒
          </h2>
          <p>
            cho tài khoản
            <span class="text-lg font-semibold">nguyenvana@gmail.com</span>
          </p>
        </div>
        <form @submit="onSubmit" class="w-full space-y-6">
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
              for="password"
              class="flex gap-1 text-sm font-medium text-gray-700"
            >
              <span>Mật khẩu</span><span class="text-red-600">*</span>
            </label>
            <div>
              <a-input-password
                placeholder="Nhập mật khẩu mới"
                class="mt-1 h-11"
                :status="errors.password ? 'error' : ''"
                id="password"
                v-bind="password"
                name="password"
                type="password"
              />
            </div>
            <small class="mt-2 text-red-500">
              {{ errors.password }}
            </small>
          </div>
          <div>
            <label
              for="password_confirmation"
              class="flex gap-1 text-sm font-medium text-gray-700"
            >
              <span>Xác nhận lại mật khẩu</span
              ><span class="text-red-600">*</span>
            </label>
            <div>
              <a-input-password
                placeholder="Xác nhận lại mật khẩu mới"
                class="mt-1 h-11"
                :status="errors.password_confirmation ? 'error' : ''"
                id="password_confirmation"
                v-bind="password_confirmation"
                name="password_confirmation"
                type="password"
              />
            </div>
            <small class="mt-2 text-red-500">
              {{ errors.password_confirmation }}
            </small>
          </div>

          <a-button
            html-type="submit"
            class="w-full bg-[#162D3A] h-[45px] !text-white hover:bg-slate-600 text-base"
            :loading="isSubmitting"
          >
            <span>Đặt lại mật khẩu mới</span>
          </a-button>
          <div class="text-center">
            <NuxtLink
              to="/login"
              class="flex items-center gap-1 justify-center text-indigo-400 hover:text-indigo-900"
            >
              <UIcon name="i-ion-return-down-back-outline" />
              Quay lại trang đăng nhập</NuxtLink
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

const authStore = useAuthStore();
const isSubmitting = ref(false);
const resErrors = ref({});

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: yup.object().shape({
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
const password = defineInputBinds("password");
const password_confirmation = defineInputBinds("password_confirmation");

// Submit handler
const onSubmit = handleSubmit(async (values) => {
  // Submit to API
  console.log("object", values);
  // try {
  //   isSubmitting.value = true;
  //   const resData = await authStore.register(values);
  //   if (resData?.data?._rawValue?.status == true) {
  //     successToast("Đăng ký thành công", "Chuyển hướng đến trang đăng nhập");
  //     navigateTo("/login");
  //   } else {
  //     resErrors.value = resData.error.value.data?.errors;
  //     errorToast("Đăng ký không thành công", "Vui lòng thử lại");
  //   }
  // } catch (error) {
  //   // console.log(error);
  //   errorToast("Đăng ký không thành công", "Vui lòng thử lại");
  // } finally {
  //   isSubmitting.value = false;
  // }
});
</script>
