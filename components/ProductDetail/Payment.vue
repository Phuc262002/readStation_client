<template>
  <div class="w-full">
    <div class="bg-white p-4 border border-rtgray rounded-lg">
      <div class="flex flex-col gap-4">
        <div class="text-base flex border-b border-rtgray pb-2">
          <div class="flex items-center gap-4">
            <a-avatar
              class="h-[40px] w-[40px]"
              src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
            />
            <span>NXB Kim Đồng</span>
          </div>
        </div>
        <div>
          <div>
            <div>phiên bản A</div>
          </div>
          <div>
            <div class="text-lg font-semibold">Tạm tính</div>
            <div class="text-2xl font-semibold">
              {{ props?.book?.book_detail[0]?.price }}
            </div>
          </div>
          <div class="grid gap-2">
            <div
              class="bg-[#fff] border border-lg border-[#2679ff] rounded-lg text-center text-[#2679ff] text-base"
            >
              <button>Thêm vào giỏ</button>
            </div>
            <div
              class="bg-[#ff424e] border border-lg rounded-lg text-center text-white text-base"
            >
              <button>Thuê ngay</button>
            </div>
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
