<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col md:flex-row overflow-hidden space-x-8 md:space-x-8">
      <div class="w-full md:w-1/2 bg-[#f4ebdc] p-8 md:p-20 rounded-3xl">
        <div class="pb-5 border-b-2 border-white">
          <div class="text-5xl font-bold">Read Station</div>
          <div class="text-2xl font-semibold pt-4">ReadStation.com</div>
        </div>
        <div class="text-lg py-4">
          <div class="flex flex-col space-y-3 text-[#99918a]">
            <div>
              Cửa hàng làm việc từ Thứ Hai đến Thứ Bảy, 08:00 sáng - 10:00 tối
            </div>
            <div class="flex items-center">
              <PhoneOutlined />
              <div class="px-2">090 166 0002 – 028 6686 6486</div>
            </div>
            <div class="flex items-center">
              <MailOutlined />
              <div class="px-2">Caodang@fpt.edu.vn</div>
            </div>
            <div class="flex items-center">
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
      <div class="w-full md:w-1/2 p-6 flex flex-col justify-center items-center bg-white rounded-3xl border border-[#e6e6e6]">
        <h1 class="text-4xl font-bold pb-6">
          Read Station có thể giúp đỡ bạn điều gì?
        </h1>
        <form @submit.prevent="validateForm" class="w-full max-w-lg space-y-8">
          <div>
            <input
              type="text"
              v-model="name"
              placeholder="Tên của bạn"
              class="w-full px-4 py-2 border border-[#e6e6e6] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#f65d4e]"
            />
            <p v-if="errors.name" class="text-[#f4402f] text-sm">
              {{ errors.name }}
            </p>
          </div>
          <div>
            <input
              type="email"
              v-model="email"
              placeholder="E-mail của bạn"
              class="w-full px-4 py-2 border border-[#e6e6e6] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#f65d4e]"
            />
            <p v-if="errors.email" class="text-[#f4402f] text-sm">
              {{ errors.email }}
            </p>
          </div>
          <div>
            <textarea
              v-model="message"
              placeholder="Phản hồi  của bạn"
              class="w-full px-4 py-2 border border-[#e6e6e6] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#f65d4e] h-40 resize-none"
            ></textarea>
            <p v-if="errors.message" class="text-[#f4402f] text-sm">
              {{ errors.message }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-[#f65d4e] hover:bg-[#f4402f] text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Gửi phản hồi
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const errors = ref<{ [key: string]: string }>({});

const validateForm = () => {
  errors.value = {};

  if (!name.value) {
    errors.value.name = "Hãy nhập tên của bạn.";
  } else if (/\d/.test(name.value)) {
    errors.value.name = "Tên của bạn không được chứa số.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailPattern.test(email.value)) {
    errors.value.email = "E-mail của bạn chưa hợp lệ.";
  }

  if (!message.value) {
    errors.value.message = "Hãy nhập nội dung của bạn.";
  }

  if (Object.keys(errors.value).length === 0) {
    alert("Chúng tôi đã tiếp nhận ý kiến đóng góp của bạn!");
  }
};
</script>

<style scoped>
.container {
  background-color: #f4f4f4;
}
</style>
