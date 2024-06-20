<template>
  <div>
    <h2 class="font-bold pb-5">Chi tiết đơn hàng <span>#0488D7D3C7</span></h2>
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div>
        <h3 class="font-bold border-b border-rtgray-50 pb-5">
          Thông tin của bạn
        </h3>
        <div class="flex py-5 text-sm">
          <div class="w-1/2 flex border-r border-rtgray-50">
            <div class="w-1/2 font-bold space-y-3">
              <p>Tên khách hàng:</p>
              <p>Email:</p>
              <p>Số điện thoại:</p>
            </div>
            <div class="w-1/2 space-y-3">
              <p>Tôn Thất An Khương</p>
              <p>trung.tranquanggg@gmail.com</p>
              <p>0563783914</p>
            </div>
          </div>
          <div class="w-1/2 flex pl-5">
            <div class="w-1/2 font-bold space-y-3">
              <p class="h-10">Địa chỉ nhận sách:</p>
              <p>Phương thức thanh toán:</p>
            </div>
            <div class="w-1/2 space-y-3">
              <p>161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. HCM</p>
              <p>Thanh toán ví</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5 my-5"
    >
      <div>
        <h3 class="font-bold border-b border-rtgray-50 pb-5 flex gap-5">
          Thông tin đơn hàng
          <a-tag color="yellow">Đang xử lý</a-tag>
        </h3>
        <div class="flex py-5 text-sm">
          <div class="w-1/2 flex border-r border-rtgray-50">
            <div class="w-1/2 font-bold space-y-3">
              <p>Số sách thuê:</p>
              <p>Ngày đặt sách:</p>
              <p>Ngày nhận sách:</p>
              <p>Ngày trả dự kiến:</p>
              <p>Ngày trả thực tế:</p>
            </div>
            <div class="w-1/2 space-y-3">
              <p>2</p>
              <p>10/06/2024</p>
              <p>N/A</p>
              <p>N/A</p>
              <p>N/A</p>
            </div>
          </div>
          <div class="w-1/2 flex pl-5">
            <div class="w-1/2 font-bold space-y-3">
              <p>Tiền cọc:</p>
              <p>Phí dịch vụ:</p>
              <p>Phí trễ hạn:</p>
              <p>Số lần gia hạn:</p>
              <p>Phí gia hạn:</p>
              <p>Tổng tiền:</p>
            </div>
            <div class="w-1/2 space-y-3">
              <p>200.000đ</p>
              <p>200.000đ</p>
              <p>200.000đ</p>
              <p>0/3</p>
              <p>200.000đ</p>
              <p>200.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="w-full w-2/3 bg-white rounded-lg shadow-md shadow-gray-300 p-5">
      <div>
        <h3 class="font-bold border-b border-rtgray-50 pb-5">
          Thông tin sách thuê
        </h3>
        <!--  -->
        <div class="">
          <div class="pt-5 pb-8 border-b border-rtgray-50">
            <h3 class="font-bold">
              Cho tôi xin một vé đi tuổi thơ - Phiên bản năm 2024
            </h3>
            <div class="flex gap-5 pt-4">
              <div>
                <img
                  src="../../assets/images/bookshop.jpg"
                  alt=""
                  class="w-[114px] h-[176px] shadow-lg shadow-gray-500"
                />
              </div>
              <div class="flex gap-14 text-sm">
                <div class="w-1/2 font-bold space-y-3">
                  <p>Tác giả:</p>
                  <p>Danh mục:</p>
                  <p>Số lần gia hạn:</p>
                </div>
                <div class="w-1/2 space-y-3">
                  <p class="whitespace-nowrap">Nguyễn Nhật Ánh</p>
                  <p>Văn học</p>
                  <p>0/3</p>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="pt-5 pb-8 border-b border-rtgray-50">
            <h3 class="font-bold">
              Cho tôi xin một vé đi tuổi thơ - Phiên bản năm 2024
            </h3>
            <div class="flex gap-5 pt-4 text-sm">
              <div>
                <img
                  src="../../assets/images/bookshop.jpg"
                  alt=""
                  class="w-[114px] h-[176px] shadow-lg shadow-gray-500"
                />
              </div>
              <div class="flex gap-14">
                <div class="w-1/2 font-bold space-y-3">
                  <p>Tác giả:</p>
                  <p>Danh mục:</p>
                  <p>Số lần gia hạn:</p>
                </div>
                <div class="w-1/2 space-y-3">
                  <p class="whitespace-nowrap">Nguyễn Nhật Ánh</p>
                  <p>Văn học</p>
                  <p>0/3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="flex justify-end pt-4 gap-2">
        <a-button class="h-10">Trở về</a-button>
        <a-button class="h-10 bg-orange-500 !text-white border-none"
          >Hủy đơn</a-button
        >
      </div>
    </div>
  </div>
</template>
