<template>
  <a-modal
    v-model:open="props.openModal"
    width="70%"
    :onCancel="handleClose"
    :footer="false"
  >
    <div class="p-4">
      <h2 class="font-bold text-base border-b border-rtgray-50 pb-5">
        Chi tiết bài viết “ 30 phút đọc sách mỗi ngày “
      </h2>
      <div class="py-5 border-b border-rtgray-50">
        <div>
          <div class="flex">
            <div class="w-1/2 flex border-r border-rtgray-50">
              <div class="w-1/3 font-bold text-sm space-y-3">
                <p>Tên bài viết:</p>
                <p>Tiêu đề:</p>
                <p>Trạng thái:</p>
              </div>
              <div class="w-2/3 text-sm space-y-3">
                <p>Đọc sách mỗi ngày</p>
                <p>Tại sao....</p>
                <a-tag color="Green">Công khai</a-tag>
              </div>
            </div>
            <!--  -->
            <div class="w-1/2 flex pl-5">
              <div class="w-1/3 font-bold text-sm space-y-3">
                <p>Danh mục:</p>
                <p>Lượt xem:</p>
                <p>Ngày đăng:</p>
              </div>
              <div class="w-2/3 text-sm space-y-3">
                <p>Đọc sách mỗi ngày</p>
                <p>20 lượt xem</p>
                <p>12/06/2024</p>
              </div>
            </div>
          </div>
          <div class="w-1/2 flex pt-3">
            <div class="w-1/3 font-bold text-sm">
              <p>Ảnh bìa</p>
            </div>
            <p class="w-2/3">
              <img
                src="../../assets/images/backgound-login.jpg"
                alt=""
                class="w-[350px] h-[160px] rounded-lg"
              />
            </p>
          </div>
        </div>
        <!--  -->
      </div>
      <div class="py-5 text-sm">
        <p class="font-bold pb-2">Nội dung bài viết:</p>
        <p>
          Có những việc tưởng chừng như nhỏ mà có lợi ích không ngờ, chỉ cần đầu
          tư chút ít thời gian và nỗ lực mà có thể đem đến sức khoẻ, hạnh phúc
          cùng hiệu quả làm việc trên cả mong đợi. Ví dụ tập yoga chẳng hạn. Chỉ
          với 20 phút sau bữa trưa đã có thể thúc đẩy chức năng hoạt động não bộ
          một cách đáng kể. Hoặc một giấc ngủ trưa trong khoảng một giờ cũng
          giúp cải thiện trí nhớ gấp năm lần. Nghe lời mẹ ăn bữa sáng cũng là
          một cách. Hãy nạp đủ dưỡng chất vào buổi sáng, bạn sẽ thấy tràn đầy
          năng lượng cho cả ngày dài. Còn những thói quen nhỏ dễ thực hiện
          nào mang lại những hiệu quả lớn lao nữa? Nghiên cứu chỉ ra rằng đọc
          sách để thư giãn ít nhất 30 phút mỗi tuần giúp con người ta sống tốt
          hơn cho xã hội. Cầm cuốn sách bestseller mới nhất trên tay, thế là đủ
          cho nửa giờ đồng hồ, tuy ngắn nhưng lợi ích đem lại vượt xa những gì
          ngôn từ có thể diễn tả và biết đâu có thể còn giảm stress nữa. Theo
          một nghiên cứu từ tổ chức Quick Reads của Anh Quốc được triển khai bởi
          Josie Billington thuộc Trung tâm Nghiên cứu Sách báo, Văn học và Xã
          hội Đại học Liverpool, cuộc bỏ phiếu của hơn 4000 người trưởng thành
          đã tiết lộ những sự thật giật mình về tác động của thói quen đọc sách
          thường xuyên lên sức khoẻ và hạnh phúc.
        </p>
      </div>
      <div class="flex justify-end gap-2">
        <a-button class="h-10 rounded-lg">Đóng</a-button>
        <a-button class="h-10 border-none rounded-lg bg-orange-500 !text-white"
          >Ẩn bài viết</a-button
        >
      </div>
    </div>
  </a-modal>
</template>
<script lang="ts" setup>
const props = defineProps({
  openModal: Boolean,
  closeModal: Function,
});
const open = ref(props.openModal);
const handleClose = async () => {
  props.closeModal();
};
</script>
