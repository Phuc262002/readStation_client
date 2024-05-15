<template>
  <div
    class="md:px-20 px-8 md:container md:mx-auto md:py-10 flex flex-col space-y-8"
  >
    <div class="flex space-x-5">
      <div class="w-1/2 bg-[#f4ebdc] p-4 py-20 pl-20 rounded-2xl">
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
      <div class="w-1/2 bg-white p-4 rounded-2xl ">
        
        <div class="flex">
            <div>
                Read Station có thể giúp đỡ bạn điều gì?
            </div>
          <a-form
            :model="formState"
            v-bind="layout"
            name="nest-messages"
            :validate-messages="validateMessages"
            @finish="onFinish"
          >
            <a-form-item
              :name="['user', 'name']"
              label="Tên"
              :rules="[{ required: true }, { validator: validateName }]"
            >
              <a-input v-model:value="formState.user.name" />
            </a-form-item>
            <a-form-item
              :name="['user', 'email']"
              label="Email"
              :rules="[{ type: 'email' }]"
            >
              <a-input v-model:value="formState.user.email" />
            </a-form-item>
            
            <a-form-item :name="['user', 'introduction']" label="Introduction">
              <a-textarea v-model:value="formState.user.introduction" />
            </a-form-item>
            <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
              <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} chưa được nhập!",
  types: {
    email: "${label} không hợp lệ",
  },
};

const formState = reactive({
  user: {
    name: "",
    email: "",
    introduction: "",
  },
});

const validateName = (rule: any, value: string, callback: Function) => {
  const regex = /^[^\d\W]+$/; // Biểu thức chính quy không cho phép chứa số và ký tự đặc biệt
  if (!regex.test(value)) {
    callback(new Error("Tên không được chứa số và ký tự đặc biệt"));
  } else {
    callback();
  }
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};
</script>
