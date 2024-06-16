<template>
  <div>
    <h3 class="font-bold">Quản lý ví</h3>

    <div class="p-5 bg-white mt-5 shadow-lg rounded-xl">
      <p>
        Số dư trong tài khoản:
        <span class="text-orange-400 text-xl">500.000 đ</span>
      </p>
    </div>

    <div class="p-5 bg-white mt-5 shadow-lg rounded-xl">
      <p>Nạp tiền vào tài khoản</p>

      <div class="flex gap-[30px] mt-5">
        <div
          class="flex-[1_1_600px] bg-[url('../../assets/images/bg-credit.png')] p-[30px] rounded-xl min-h-[330px] flex flex-col"
        >
          <p class="font-bold text-xl">Nhập số tiền muốn nạp</p>
          <div class="flex-1 flex flex-col justify-end relative">
            <img
              src="../../assets/images/icon-money.svg"
              class="w-10 h-10"
              alt=""
            />
            <a-input-number
              class="absolute right-0 bottom-16 font-bold text-4xl w-[530px] border-0 outline-none border-b-[1px] border-b-white rounded-none bg-transparent"
              :controls="false"
            />
            <div class="flex pt-6 gap-4">
              <div class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer">
                20.000
              </div>
              <div class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer">
                50.000
              </div>
              <div class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer">
                100.000
              </div>
              <div class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer">
                200.000
              </div>
              <div class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer">
                500.000
              </div>
              <div class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer">
                1.000.000
              </div>
            </div>
          </div>
        </div>

        <div class="w-[1px] bg-rtgray-50" />

        <div class="flex-[1_1_380px]">
          <div>
            <div class="flex justify-between h-10 items-center">
              <p>Phí giao dịch:</p>
              <p>0%</p>
            </div>
            <a-divider class="my-0" />
            <div class="flex justify-between h-10 items-center">
              <p>Số tiền cần thanh toán:</p>
              <p>200.000 đ</p>
            </div>
          </div>

          <a-button
            type="primary"
            class="mt-[30px] mx-auto block bg-[#FE6411] min-w-[80%]"
            size="large"
            >Tiến hành thanh toán</a-button
          >

          <p class="mt-[30px] text-center">
            Tiền được nạp vào tài khoản sau khi thanh toán
          </p>
        </div>
      </div>
    </div>

    <div class="p-5 bg-white mt-5 shadow-lg rounded-xl">
      <div class="flex justify-between">
        <p>Lịch sử giao dịch (30 ngày gần nhất)</p>
        <NuxtLink to="/account/transaction-history">
          <button class="text-blue-600 text-[14px]">Xem chi tiết</button>
        </NuxtLink>
      </div>

      <a-table
        :columns="columns"
        :data-source="data"
        class="mt-5"
        :pagination="false"
      >
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const walletStore = useWalletStore();
const columns = [
  {
    title: "Mã giao dịch",
    dataIndex: "transactionCode",
    key: "transactionCode",
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Hình thức",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "Thời gian",
    key: "time",
    dataIndex: "time",
  },
];
</script>
