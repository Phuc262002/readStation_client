<template>
  <div>
    <div>
      <div
        class="relative h-[450px] w-full bg-[url('../../assets/images/aboutus.svg')] bg-cover bg-center bg-no-repeat rounded-3xl"
      >
        <div class="absolute bottom-12 left-80 font-semibold text-4xl">
          <h1 class="text-4xl font-bold pb-4">Thuê sách không giới hạn</h1>
          <ul class="text-lg pb-6 space-y-2">
            <li>Thuê sách không giới hạn ngày trả</li>
            <li>Tặng 60 ngày thuê cho thành viên mới</li>
            <li>Bảo lưu vĩnh viễn khi không thuê sách</li>
            <li>Không phát sinh phụ phí</li>
          </ul>
          <button
            class="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Tham gia ngay
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white md:px-16 md:py-10 rounded-3xl">
      <div
        class="mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-x-8"
      >
        <div class="flex-shrink-0 md:w-1/2 lg:w-1/3">
          <img
            src="https://via.placeholder.com/800x600"
            alt="Car Image"
            class="w-full"
          />
        </div>
        <div class="p-4">
          <div class="text-3xl font-bold pb-4">Tổng quan về chúng tôi</div>
          <div class="text-lg pb-4">
            Read Station là điểm đến lý tưởng cho những người yêu sách muốn tận
            hưởng sự đa dạng của thế giới văn học mà không cần phải chi tiêu lớn
            cho việc mua sách. Khách hàng có thể đăng ký thành viên và chọn lựa
            từ một kho sách phong phú, bao gồm các thể loại từ tiểu thuyết đến
            sách khoa học, lịch sử và tự truyện. Giá cả cho thuê cũng đa dạng,
            và cửa hàng thường cung cấp dịch vụ khách hàng tốt để hỗ trợ khách
            hàng trong việc chọn sách và đáp ứng nhu cầu đọc sách.
          </div>
          <div class="space-x-4 py-4">
            <a
              href="#"
              class="bg-[#f3f3f3] text-black text-base px-8 py-3 rounded-lg hover:bg-[#40d7ec] hover:text-white hover:shadow-lg"
              >Sản phẩm</a
            >
            <a
              href="#"
              class="bg-[#f3f3f3] text-black text-base px-8 py-3 rounded-lg hover:bg-[#40d7ec] hover:text-white hover:shadow-lg"
              >Sản phẩm</a
            >
            <a
              href="#"
              class="bg-[#f3f3f3] text-black text-base px-8 py-3 rounded-lg hover:bg-[#40d7ec] hover:text-white hover:shadow-lg"
              >Sản phẩm</a
            >
          </div>
          <div class="text-lg py-4">
            Read Station thường xuyên tổ chức các sự kiện văn hóa như các buổi
            đọc sách, câu chuyện kể, hoặc các hội thảo về văn hóa đọc. Điều này
            tạo ra một không gian gặp gỡ, giao lưu và chia sẻ đam mê sách giữa
            các độc giả. Không chỉ là nơi mượn sách, Read Station còn là điểm
            đến tương tác xã hội và văn hóa quan trọng đối với cộng đồng đọc
            sách.
          </div>
          <div class="text-lg py-4">
            <a
              href="#"
              class="text-base px-8 py-3 rounded-lg bg-[#40d7ec] text-black hover:shadow-lg"
              >Tìm hiểu thêm</a
            >
          </div>
        </div>
      </div>
    </div>

    <section class="bg-white rounded-3xl p-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Chức năng gì chưa nhớ nữa</h2>
        <div class="flex justify-center space-x-4">
          <div class="bg-white border rounded-lg p-6 w-1/3">
            <h3 class="font-bold">Chức năng 1</h3>
          </div>
          <div class="bg-white border rounded-lg p-6 w-1/3">
            <h3 class="font-bold">Chức năng 2</h3>
          </div>
          <div class="bg-white border rounded-lg p-6 w-1/3">
            <h3 class="font-bold">Chức năng 3</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="flex p-4">
      <div class="w-1/2">
        <img
          src="https://via.placeholder.com/800x600"
          alt="Car Image"
          class="w-full"
        />
      </div>
      <div class="w-1/2">
        <div class="px-8 py-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 text-center">
              Câu hỏi thường gặp
            </h2>
            <div class="space-y-4">
              <a-collapse
                v-model:activeKey="activeKey"
                :bordered="false"
                style="background: transparent"
              >
                <template #expandIcon="{ isActive }">
                  <caret-right-outlined :rotate="isActive ? 90 : 0" />
                </template>
                <a-collapse-panel
                  key="1"
                  header="#1. Thanh toán khoản đặt cọc"
                  :style="customStyle"
                >
                  <p v-html="text"></p>
                </a-collapse-panel>
                <a-collapse-panel
                  key="2"
                  header="#2. Thuê sách lần đầu"
                  :style="customStyle"
                >
                  <p v-html="text2"></p>
                </a-collapse-panel>
                <a-collapse-panel
                  key="3"
                  header="#3. Mượn, đổi sách tại Read Station như thế nào?"
                  :style="customStyle"
                >
                  <p v-html="text3"></p>
                </a-collapse-panel>
              </a-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const activeKey = ref([]);
const customStyle =
  "background: #fff;border-radius: 4px;margin-bottom: 16px;border: 0;overflow: hidden";
const text = `Khoản đặt cọc này để hỗ trợ Read Station trong các trường hợp hư hỏng hay mất sách, sẽ được hoàn lại cho bạn sau thời gian trải nghiệm miễn phí`;
const text2 = `Tận hưởng 60 ngày thuê sách của Read Station miễn phí, chọn quyển sách bạn ưng ý nhất nhé`;
const text3 = `Khi đã là bạn đọc tại Read Station, bạn có thể:<br/>
- Giữ sách và thưởng thức trọn vẹn nội dung không giới hạn ngày trả.<br/>
- Khi đã đọc xong, bạn có thể đặt mượn quyển tiếp theo, Read Station sẽ chuyển cho bạn quyển mới, đồng thời nhận lại quyển hiện tại. Theo quy định hiện tại, bạn có thể giữ tối đa cùng lúc là 1 quyển.<br/>
- Read Station mong bạn ưu tiên hoàn trả lại sách trong mọi trường hợp.<br/>
- Bạn có thể lưu lại những quyển sách mình thích nhưng chưa đọc ngay thông qua tính năng "Thả tim".<br/>
- Tùy theo gói thành viên, phí thành viên của bạn sẽ giảm theo số năm bạn tham gia liên tục tại Read Station từ 5-10%/ năm.`;
</script>

<style scoped></style>
