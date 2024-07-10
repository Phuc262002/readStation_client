<template>
  <div class="space-y-5 pt-4">
    <div class="flex flex-col gap-2 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Thống kê</h5>
      </div>
    </div>

    <!-- Đây là phần code mẫu body -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
    >
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag
              :bordered="false"
              class="flex justify-center items-center bg-tag-bg-03 text-tag-text-03"
            >
              <UIcon class="text-lg w-10 h-10" name="i-grommet-icons-cubes"
            /></a-tag>

            <div class="text-tag-text-03">
              <p class="font-normal text-base">Doanh thu</p>
              <p class="font-bold text-xl">
                10000
                <!-- {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(dashboardStore?.dashboardAdmin?.revenue)
                  }} -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class=" bg-tag-bg-04 text-tag-text-04">
              <UIcon class="text-lg w-8 h-8" name="i-bi-box-arrow-in-down"
            /></a-tag>

            <div class="text-tag-text-04">
              <p class="font-normal text-base">Chuyển khoản</p>
              <p class="font-bold text-xl">đơn hàng</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-01 text-tag-text-01">
              <UIcon class="text-lg w-10 h-10" name="i-iconoir-user"
            /></a-tag>

            <div class="text-tag-text-01">
              <p class="font-normal text-base">Tổng khách hàng</p>
              <p class="font-bold text-xl">khách hàng</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-03 text-tag-text-03">
              <UIcon
                class="text-lg w-10 h-10"
                name="i-ph-user-circle-check-thin"
            /></a-tag>

            <div class="text-tag-text-03">
              <p class="font-normal text-base">Khách hàng đã kích hoạt</p>
              <p class="font-bold text-xl">khách hàng</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-10 text-tag-text-10">
              <UIcon class="text-lg w-10 h-10" name="i-bi-bookshelf"
            /></a-tag>

            <div class="text-tag-text-10">
              <p class="font-normal text-base">Số lượng tủ sách</p>
              <p class="font-bold text-xl">tủ sách</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-11 text-tag-text-11">
              <UIcon
                class="text-lg w-10 h-10"
                name="i-material-symbols-light-book-4-outline"
            /></a-tag>

            <div class="text-tag-text-11">
              <p class="font-normal text-base">Số lượng kệ sách</p>
              <p class="font-bold text-xl">kệ sách</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
      <h5 class="text-xl text-[#1e293b] font-bold">Kết quả bán hàng hôm nay</h5>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
      >
        <div class="flex flex-col">
          <div class="flex items-center gap-2 text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-10 text-tag-text-10">
              <UIcon class="text-lg w-10 h-10" name="i-grommet-icons-cubes"
            /></a-tag>

            <div class="">
              <p class="font-normal text-base">2 hóa đơn</p>
              <p class="font-bold text-xl text-tag-text-10">
                10000
                <!-- {{
                    new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(dashboardStore?.dashboardAdmin?.revenue)
                  }} -->
              </p>
              <p class="font-normal text-base text-tag-text-07">
                Doanh thu thuần
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2 text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-03 text-tag-text-03">
              <UIcon class="text-lg w-10 h-10" name="i-bi-box-arrow-in-down"
            /></a-tag>

            <div class=" ">
              <p class="font-normal text-base">0 phiếu</p>
              <p class="font-bold text-xl text-tag-text-03">0</p>
              <p class="font-normal text-base text-tag-text-07">Trả hàng</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2 text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-06 text-tag-text-06">
              <UIcon class="text-lg w-10 h-10" name="i-iconoir-user"
            /></a-tag>

            <div class=" ">
              <p class="font-normal text-base">.</p>
              <p class="font-bold text-xl text-tag-text-06">-97%</p>
              <p class="font-normal text-base text-tag-text-07">
                So với cùng kỳ tháng trước
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
