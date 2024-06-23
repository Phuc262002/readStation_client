<template>
  <div>
    <div
      v-if="isSubmitting"
      class="absolute top-0 left-0 min-w-full min-h-[100vh] bg-black/40 z-[99999] cursor-default"
    >
      <a-spin size="large" class="absolute top-1/2 left-1/2" />
    </div>
    <h3 class="font-bold mb-5">Thông tin ví</h3>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div class="flex flex-col">
        <div
          class="flex items-center text-base h-[90px] cursor-pointer bg-white shadow-md rounded-md"
        >
          <div class="flex items-center text-sm font-medium p-4">
            <a-tag :bordered="false" class="bg-tag-bg-03 text-tag-text-03">
              <UIcon class="text-lg w-10 h-10" name="i-grommet-icons-cubes"
            /></a-tag>

            <div class="text-tag-text-03">
              <p class="font-normal text-base">Số dư ví</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.revenue }} đ
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
            <a-tag :bordered="false" class="bg-tag-bg-04 text-tag-text-04">
              <UIcon class="text-lg w-10 h-10" name="i-bi-box-arrow-in-down"
            /></a-tag>

            <div class="text-tag-text-04">
              <p class="font-normal text-base">Tiền đang thuê sách</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.invoiceEnter }} đơn hàng
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
            <a-tag :bordered="false" class="bg-tag-bg-01 text-tag-text-01">
              <UIcon class="text-lg w-10 h-10" name="i-iconoir-user"
            /></a-tag>

            <div class="text-tag-text-01">
              <p class="font-normal text-base">Số tiền đang xử lý</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.user }} khách hàng
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
            <a-tag :bordered="false" class="bg-tag-bg-03 text-tag-text-03">
              <UIcon
                class="text-lg w-10 h-10"
                name="i-ph-user-circle-check-thin"
            /></a-tag>

            <div class="text-tag-text-03">
              <p class="font-normal text-base">Số tiền đang rút</p>
              <p class="font-bold text-xl">
                {{ dashboardStore?.dashboardAdmin?.user }} khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-5 bg-white mt-5 shadow-lg rounded-xl">
      <p>Nạp tiền vào tài khoản</p>

      <div class="flex gap-[30px] mt-5">
        <div
          class="bg-[url('../../assets/images/bg-credit.png')] p-[30px] rounded-lg min-h-[330px] flex flex-col bg-no-repeat"
        >
          <p class="font-bold text-xl">Nhập số tiền muốn nạp</p>
          <div class="flex-1 flex flex-col justify-end relative">
            <img
              src="../../../assets/images/icon-money.svg"
              class="w-10 h-10 absolute bottom-16"
              alt=""
            />
            <a-input-number
              v-model:value="depositAmount"
              class="absolute right-0 bottom-16 font-bold text-4xl w-[500px] border-0 outline-none border-b-[1px] border-b-white rounded-none bg-transparent"
              :controls="false"
            />
            <div class="flex pt-6 gap-4 text-sm">
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
  </div>
</template>

<script setup lang="ts">
const walletStore = useWalletClientStore();
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
    title: "Thời gian",
    key: "created_at",
    dataIndex: "created_at",
  },
];
</script>
