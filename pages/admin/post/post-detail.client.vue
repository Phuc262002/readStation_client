<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Bài viết chi tiết</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <table class="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Tên người đăng</td>
            <td class="border border-gray-300 px-4 py-2">Huỳnh Tuấn Kiệt</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Tên bài viết</td>
            <td class="border border-gray-300 px-4 py-2">Bài viết 1</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Slug</td>
            <td class="border border-gray-300 px-4 py-2">bai-viet-1</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Hình ảnh</td>
            <td class="border border-gray-300 px-4 py-2">
              <img
                width="100px"
                src="https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-white-cartoon-book-illustration-image_1466560.jpg"
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Danh mục</td>
            <td class="border border-gray-300 px-4 py-2">số 1</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Trạng thái</td>
            <td class="border border-gray-300 px-4 py-2">active</td>
          </tr>

          <tr>
            <td class="border border-gray-300 px-4 py-2">Nội dung</td>
            <td class="border border-gray-300 px-4 py-2">
              TÔ BÌNH YÊN VẼ HẠNH PHÚC – KULZSC Sau thành công của cuốn sách đầu
              tay “Phải lòng với cô đơn” chàng họa sĩ nổi tiếng và tài năng
              Kulzsc đã trở lại với một cuốn sách vô cùng đặc biệt mang tên: "Tô
              bình yên - vẽ hạnh phúc” – sắc nét phong cách cá nhân với một chút
              “thơ thẩn, rất hiền”. Không giống với những cuốn sách chỉ để đọc,
              “Tô bình yên – vẽ hạnh phúc” là một cuốn sách mà độc giả vừa tìm
              được “Hạnh phúc to to từ những điều nho nhỏ” vừa được thực hành
              ngay lập tức. Một sự kết hợp mới lạ đầy thú vị giữa thể loại sách
              tản văn và sách tô màu. Lật mở cuốn sách này, bạn sẽ thấy vô vàn
              những điều nhỏ bé dễ thương lan tòa nguồn năng lượng tích cực. Và
              kèm theo một list những điều tuyệt vời khiến bạn không thể bỏ lỡ:
            </td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div class="flex gap-4 pt-4">
        <a-button type="primary" danger>Hủy</a-button>
        <a-button type="primary">Sửa</a-button>
      </div>
    </div>
  </div>
</template>
<script></script>
