<template>
  <div>
    <div class="flex space-x-5 items-center">
      <div class="w-3/5 bg-[#f4ebdc] p-4 py-20 pl-20 rounded-2xl">
        <div class="pb-5 border-b-2 border-white">
          <div class="text-5xl font-bold">Read Station</div>
          <div class="text-2xl font-semibold pt-4">ReadStation.com</div>
        </div>
        <div class="text-lg py-4">
          <div class="flex flex-col space-y-3 text-[#99918a]">
            <div>
              Cửa hàng làm việc từ Thứ Hai đến Thứ Bảy, 08:00 sáng - 10:00 tối
            </div>
            <div class="flex items-center justify-left">
              <PhoneOutlined />
              <div class="px-2">090 166 0002 – 028 6686 6486</div>
            </div>
            <div class="flex items-center justify-left">
              <MailOutlined />
              <div class="px-2">Caodang@fpt.edu.vn</div>
            </div>
            <div class="flex items-center justify-left">
              <HomeOutlined />
              <div class="px-2">
                Lô 42, đường số 3, Công viên phần mềm Quang Trung, phường Tân
                Chánh Hiệp, quận 12, TP HCM
              </div>
            </div>
            <div>
              <div class="text-xl font-semibold text-[#009245]">Giờ mở cửa</div>
              <div class="text-[#99918a]">
                <div>T2 – T6: 8H sáng — 10H tối</div>
                <div>T7: 9H sáng — 10H tối</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/5 bg-white p-4 rounded-2xl">
        <div class="p-8 w-full max-w-md">
          <h2 class="text-3xl font-bold pb-6">
            Read Station có thể giúp đỡ bạn điều gì?
          </h2>
          <form @submit.prevent="validateForm" class="space-y-4">
            <div>
              <input
                type="text"
                v-model="name"
                placeholder="Tên của bạn"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p v-if="errors.name" class="text-red-500 text-sm">
                {{ errors.name }}
              </p>
            </div>
            <div>
              <input
                type="email"
                v-model="email"
                placeholder="E-mail của bạn"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p v-if="errors.email" class="text-red-500 text-sm">
                {{ errors.email }}
              </p>
            </div>
            <div>
              <input
                type="text"
                v-model="subject"
                placeholder="Tiêu đề"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p v-if="errors.subject" class="text-red-500 text-sm">
                {{ errors.subject }}
              </p>
            </div>
            <div>
              <textarea
                v-model="message"
                placeholder="Ý kiến của bạn"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-40"
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm">
                {{ errors.message }}
              </p>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Gửi phản hồi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const errors = ref<{ [key: string]: string }>({});

const validateForm = () => {
  errors.value = {};

  if (!name.value) {
    errors.value.name = "Tên của bạn là bắt buộc.";
  } else if (/\d/.test(name.value)) {
    errors.value.name = "Tên không được chứa số.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailPattern.test(email.value)) {
    errors.value.email = "E-mail chưa hợp lệ.";
  }

  if (!subject.value) {
    errors.value.subject = "Tiêu đề là bắt buộc.";
  }

  if (!message.value) {
    errors.value.message = "Nội dung là bắt buộc.";
  }

  if (Object.keys(errors.value).length === 0) {
    alert("Form submitted successfully!");
  }
};
</script>
