<template>
  <div class="space-y-5">
    <h3 class="font-bold mb-5">Thông tin ví</h3>

    <div
      class="flex items-center text-base h-[90px] bg-white shadow-md rounded-md p-5"
    >
      <div class="flex items-center text-sm font-medium gap-3">
        <a-tag
          :bordered="false"
          class="bg-tag-bg-03 text-tag-text-03 flex items-center p-1"
        >
          <UIcon class="text-lg w-10 h-10" name="i-solar-wallet-outline"
        /></a-tag>

        <div class="text-orange-400">
          <p class="font-normal text-base">Tiền cọc đang thuê sách</p>
          <p class="font-bold text-xl">500.000đ</p>
        </div>
      </div>
    </div>
    <div
      class="flex items-center text-base h-[90px] bg-white shadow-md rounded-md p-5"
    >
      <h1>Lịch sử giao dịch (30 ngày gần nhất)</h1>
    </div>
  </div>
</template>

<script setup></script>
