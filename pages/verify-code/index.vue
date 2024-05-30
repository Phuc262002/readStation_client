<template>
  <div
    class="bg-[url('assets/images/bg-404.svg')] w-full h-[100vh] bg-cover bg-no-repeat bg-center"
  >
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 min-w-[100vw] min-h-full bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <div
      class="md:py-10 flex justify-center items-center container min-h-[100vh]"
    >
      <div
        class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8 w-[400px] rounded-lg"
      >
        <div class="text-center pb-4">
          <h2 class="text-2xl text-sky-600 font-bold pb-3">Xác minh 💬</h2>
          <p>
            Chúng tôi đã gửi mã xác minh tới Email của bạn. Nhập mã từ Email vào
            trường bên dưới.
          </p>
        </div>
        <form @submit="onSubmit" class="w-full space-y-6">
          <span>Nhập mã bảo mật gồm 6 chữ số của bạn</span>
          <div class="flex gap-2 h-[50px]">
            <a-input v-bind="code1" />
            <a-input v-bind="code2" />
            <a-input v-bind="code3" />
            <a-input v-bind="code4" />
            <a-input v-bind="code5" />
            <a-input v-bind="code6" />
          </div>
          <a-button
            html-type="submit"
            class="w-full bg-[#162D3A] h-[45px] !text-white hover:bg-slate-600 text-base"
            :loading="isSubmitting"
          >
            <span>Xác nhận</span>
          </a-button>
          <div class="flex items-center gap-1 justify-center">
            <span>Không nhận được thư ?</span>
            <NuxtLink
              to="/verify-code"
              class="text-indigo-400 hover:text-indigo-900"
            >
              Gửi lại</NuxtLink
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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// import { NuxtLink } from "#build/components";

const authStore = useAuthStore();
const isSubmitting = ref(false);
const resErrors = ref({});
const route = useRoute();
const email = ref("");

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: yup.object().shape({
    code: yup
      .array()
      .of(
        yup
          .string()
          .required("Mã không được bỏ trống")
          .length(1, "Mã phải là 1 ký tự")
      )
      .length(6, "Mã bảo mật phải có 6 ký tự"),
  }),
});

onMounted(() => {
  const emailFromQuery = route.query.email;

  if (typeof emailFromQuery === "string") {
    email.value = emailFromQuery;
    console.log(email.value);
  } else {
    email.value = "";
    console.error("Invalid email parameter:", emailFromQuery);
  }
});

// Define fields
const code1 = defineInputBinds("code1");
const code2 = defineInputBinds("code2");
const code3 = defineInputBinds("code3");
const code4 = defineInputBinds("code4");
const code5 = defineInputBinds("code5");
const code6 = defineInputBinds("code6");

// Submit handler
const onSubmit = handleSubmit(async (values) => {
  const otpCode =
    String(code1.value.value) +
    String(code2.value.value) +
    String(code3.value.value) +
    String(code4.value.value) +
    String(code5.value.value) +
    String(code6.value.value);
  console.log("otp", otpCode);
  // Submit to API

  // values = { otpCode, email: email.value };

  try {
    isSubmitting.value = true;
    const resData = await authStore.verifyEmail({
      otpCode,
      email: email.value,
    });

    if (resData?.data?._rawValue?.status == true) {
      successToast(
        "Xác thực mã OTP thành công",
        "Chuyển hướng đến trang đăng nhập"
      );
      navigateTo("/login");
    } else {
      resErrors.value = resData.error.value.data?.errors;
      errorToast("Xác thực mã OTP không thành công", "Vui lòng thử lại");
    }
  } catch (error) {
    errorToast("Xác thực mã OTP không thành công", "Vui lòng thử lại");
  } finally {
    isSubmitting.value = false;
  }
});
</script>
