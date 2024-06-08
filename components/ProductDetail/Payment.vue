<template>
  <div class="w-full">
    <div class="bg-white p-4 border border-rtgray-50 rounded-lg">
      <div class="flex flex-col gap-4">
        <div class="text-base flex border-b border-rtgray-50 pb-2">
          <div class="flex items-center gap-4">
            <a-avatar
              class="h-[40px] w-[40px]"
              src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
            />
            <span>NXB Kim Đồng</span>
          </div>
        </div>
        <div>
          <div class="p-4 bg-orange-50 rounded-lg space-y-1">
            <div>
              <span class="text-sm">Giá sách : </span>
              <span class="text-orange-400 text-sm">200</span>
            </div>
            <div>
              <span class="text-base font-bold">Phí thuê sách : </span>
              <span class="text-orange-600 font-bold text-xl">200</span>
            </div>
            <p class="text-xs">
              <span class="text-red-600 text-base">* </span>Phí thuê sẽ bằng 20%
              giá học sinh
            </p>
          </div>

          <div class="py-4">
            <span>Phân loại:</span>
            <div></div>
          </div>

          <div class="grid gap-2">
            <button
              class="bg-rtprimary border border-lg rounded-lg text-center text-white text-sm h-10"
            >
              Thuê ngay
            </button>
            <button
              class="border border-lg border-x-rtgray-50 rounded-lg text-center text-rtprimary text-sm h-10"
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.ant-rate-star):not(:first-child) {
  display: none;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
