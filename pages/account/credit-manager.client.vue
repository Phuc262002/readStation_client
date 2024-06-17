<template>
  <div>
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 min-w-full min-h-[100vh] bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
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
              v-model:value="depositAmount"
              class="absolute right-0 bottom-16 font-bold text-4xl w-[530px] border-0 outline-none border-b-[1px] border-b-white rounded-none bg-transparent"
              :controls="false"
            />
            <div class="flex pt-6 gap-4">
              <button
                @click="assignAmount(20000)"
                class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer"
              >
                20.000
              </button>
              <button
                @click="assignAmount(50000)"
                class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer"
              >
                50.000
              </button>
              <button
                @click="assignAmount(100000)"
                class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer"
              >
                100.000
              </button>
              <button
                @click="assignAmount(200000)"
                class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer"
              >
                200.000
              </button>
              <button
                @click="assignAmount(500000)"
                class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer"
              >
                500.000
              </button>
              <button
                @click="assignAmount(1000000)"
                class="bg-rtyellow-50 px-3 py-2 rounded-lg cursor-pointer"
              >
                1.000.000
              </button>
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
              <p>
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(depositAmount)
                }}
              </p>
            </div>
          </div>

          <a-button
            type="primary"
            class="mt-[30px] mx-auto block bg-[#FE6411] min-w-[80%]"
            size="large"
            @click="deposit"
            :loading="isSubmitting"
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
        :data-source="walletStore?.transactions?.transactions"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>
              <smile-outlined />
              Name
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'transaction_code'">
            <span>
              {{ record?.transaction_code }}
            </span>
          </template>
          <template v-if="column.key === 'amount'">
            <span>
              {{ record?.amount }}
            </span>
          </template>
          <template v-if="column.key === 'transaction_method'">
            <span>
              {{ record?.transaction_method }}
            </span>
          </template>
          <template v-if="column.key === 'transaction_type'">
            <span v-if="record.transaction_type === 'deposit'"> Nạp tiền </span>
          </template>
          <template v-if="column.key === 'status'">
            <a-tag
              v-if="record.status === 'pending'"
              color="red"
              class="cursor-pointer"
              @click="() => getLinkPayment(record.transaction_code)"
            >
              Đang chờ xử lý
            </a-tag>
          </template>
          <template v-if="column.key === 'created_at'">
            <span>
              {{ $dayjs(record?.created_at).format("DD/MM/YYYY - HH:MM") }}
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const walletStore = useWalletStore();
const isSubmitting = ref(false);
const resErrors = ref({});
const current = ref(1);
const depositAmount = ref(0);

const assignAmount = (amount: number) => {
  depositAmount.value = amount;
};
// Get link Payment
const getLinkPayment = async (id) => {
  const resData = await walletStore.getPaymentLink(id);
  window.location.href =
    "https://pay.payos.vn/web/" + resData?.data?._rawValue?.data.id;
};
// Create Transaction
const deposit = async () => {
  try {
    isSubmitting.value = true;
    const resData = await walletStore.createTransaction({
      amount: depositAmount.value,
      description: "Nạp tiền vào ví",
      transaction_type: "deposit",
    });
    if (resData?.data?._rawValue?.status === true) {
      message.success({
        content: "Thành công, chuyển hướng trang thanh toán!",
      });
      window.location.href = resData?.data?._rawValue?.data.checkoutUrl;
    } else {
      resErrors.value = resData.error.value.data.errors;
      message.error({
        content: "Thất bại, vui lòng thử lại sau!",
      });
    }
  } catch (error) {
    message.error({
      content: "Ops! Vui lòng thử lại sau.",
    });
  } finally {
    isSubmitting.value = false;
  }
};

// render transaction
useAsyncData(
  async () => {
    try {
      await walletStore.getAllTransaction({
        page: current.value,
      });
    } catch (error) {
      console.log(error);
    }
  },
  {
    immediate: true,
    watch: [current],
  }
);

const columns = [
  {
    title: "Mã giao dịch",
    dataIndex: "transaction_code",
    key: "transaction_code",
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Hình thức",
    key: "transaction_method",
    dataIndex: "transaction_method",
  },
  {
    title: "Loại giao dịch",
    key: "transaction_type",
    dataIndex: "transaction_type",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Thời gian",
    key: "created_at",
    dataIndex: "created_at",
  },
];
</script>
