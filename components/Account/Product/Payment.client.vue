<template>
  <div class="w-full">
    <div class="bg-white p-4 border border-rtgray-50 rounded-lg">
      <div class="flex flex-col gap-4">
        <div class="text-base flex border-b border-rtgray-50 pb-2">
          <div class="flex items-center gap-4">
            <a-avatar
              class="h-[40px] w-[40px]"
              :src="bookStore?.book?.publishing_company?.logo_company"
            />
            <span>{{ bookStore?.book?.publishing_company?.name }}</span>
          </div>
        </div>
        <div>
          <div class="p-4 bg-orange-50 rounded-lg space-y-1">
            <div>
              <span class="text-sm">Giá sách : </span>
              <span class="text-orange-400 text-sm">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(bookStore?.book?.price)
                }}
              </span>
            </div>
            <div>
              <span class="text-base font-bold">Phí thuê sách : </span>
              <span class="text-orange-600 font-bold text-xl">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(bookStore?.book?.price * (20 / 100))
                }}
              </span>
            </div>
            <p class="text-xs">
              <span class="text-red-600 text-base">* </span> Phí thuê sẽ bằng 20
              % giá sách
            </p>
          </div>

          <!-- <div class="py-4">
            <span>Phân loại:</span>
            <a-button class="w-fit h-10 flex items-center gap-2 text-xs">
              <img :src="bookStore?.book?.poster" class="w-4 h-6" alt="" />
              <span>{{ bookStore?.book?.book_version }}</span>
            </a-button>
            <div></div>
          </div> -->

          <div class="grid gap-2 py-4">
            <a-button
              @click="handleRentNow"
              class="bg-rtprimary border-none border border-lg rounded-lg text-center !text-white text-sm h-10 w-full"
            >
              Thuê ngay
            </a-button>
            <a-button
              @click="addToCart"
              class="border border-lg border-x-rtgray-50 rounded-lg text-center text-rtprimary text-sm h-10"
            >
              Thêm vào danh sách thuê
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const bookStore = useBookPublicStore();
const cartStore = useCartStore();
const handleRentNow = () => {
  const bookToAdd = bookStore?.book;
  if (bookToAdd) {
    cartStore.addToRentNow(bookStore?.book);
    message.success({
      content: "Thêm sản phẩm thành công. Chuyển hướng đến trang thanh toán!",
    });
    navigateTo("/account/order/checkout?type=thue_ngay");
  } else {
    message.error({
      content: "Thêm sản phẩm thất bại.",
    });
  }
};
const addToCart = () => {
  if (cartStore && cartStore?.carts) {
    const bookToAdd = bookStore?.book;
    const isCheck = cartStore?.carts.some((item) => item.id === bookToAdd.id);
    if (isCheck) {
      message.error({
        content: "Thêm sản phẩm thất bại. Sản phẩm đã có trong giỏ hàng",
      });
      return;
    }
    if (cartStore?.carts.length < 3) {
      if (bookToAdd) {
        cartStore.addToCart(bookStore?.book);
        message.success({
          content: "Thêm sản phẩm thành công",
        });
      } else {
        message.error({
          content: "Thêm sản phẩm thất bại.",
        });
      }
    } else {
      message.error({
        content: "Thêm sản phẩm thất bại. Đơn hàng tối đa 3 quyển!",
      });
    }
  }
};
</script>

<style scoped>
:deep(.ant-rate-star):not(:first-child) {
  display: none;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
