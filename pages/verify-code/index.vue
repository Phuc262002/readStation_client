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
        class="flex space-y-3 flex-col justify-center items-center bg-white shadow-lg shadow-gray-500 p-8 w-[450px] rounded-lg"
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
          <div class="">
            <v-otp-input
              ref="otpInput"
              input-classes="otp-input"
              :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
              inputType="letter-numeric"
              :num-inputs="6"
              v-model:value="bindValue"
              :should-auto-focus="true"
              :should-focus-order="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
              :placeholder="['*', '*', '*', '*', '*', '*']"
            />
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
            <span class="text-indigo-400 hover:text-indigo-900"> Gửi lại</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scope>
.otp-input {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 0 7px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// import { NuxtLink } from "#build/components";
import VOtpInput from "vue3-otp-input";
const authStore = useAuthStore();
const isSubmitting = ref(false);
const resErrors = ref({});
const route = useRoute();
const email = ref("");
const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindValue = ref("");

const handleOnComplete = (value: string) => {
  console.log("OTP completed: ", value);
};

const handleOnChange = (value: string) => {
  console.log("OTP changed: ", value);
};

const fillInput = (value: string) => {
  console.log(value);
  otpInput.value?.fillInput(value);
};
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
const one = defineInputBinds("one");
const two = defineInputBinds("two");
const three = defineInputBinds("three");
const four = defineInputBinds("four");
const five = defineInputBinds("five");
const six = defineInputBinds("six");

// Submit handler
const onSubmit = handleSubmit(async (values) => {
  const otpCode = bindValue.value;
  console.log("otp", otpCode);
  // Submit to API

  values = { otpCode, email: email.value };

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
