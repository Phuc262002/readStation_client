<template>
    <div>
        <div class="p-6 bg-gray-100 min-h-screen">
            <h1 class="text-2xl font-semibold mb-4">Đơn hàng của tôi</h1>
            <div class="bg-white p-6 rounded-lg shadow">
              <div class="flex border-b border-gray-200 mb-4">
                <button
                  v-for="tab in tabs"
                  :key="tab"
                  @click="activeTab = tab"
                  :class="{
                    'border-indigo-500 text-indigo-500': activeTab === tab,
                    'border-transparent text-gray-500': activeTab !== tab
                  }"
                  class="py-4 px-6 border-b-2 font-medium text-sm focus:outline-none"
                >
                  {{ tab }}
                </button>
              </div>
              <div class="relative text-gray-600 mb-4">
                <input
                  type="search"
                  name="search"
                  placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
                  class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
                  v-model="searchQuery"
                />
                <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
                  <svg
                    class="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    xml:space="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path
                      d="M55.146,51.887L41.588,38.329c3.486-4.209,5.585-9.605,5.585-15.434C47.173,10.251,36.922,0,24.586,0   C12.251,0,2,10.251,2,22.586s10.251,22.586,22.586,22.586c5.829,0,11.225-2.099,15.434-5.585l13.559,13.559   c0.789,0.789,2.067,0.789,2.856,0l1.711-1.711C55.934,53.954,55.934,52.675,55.146,51.887z M24.586,40.172   c-9.693,0-17.586-7.893-17.586-17.586S14.893,5,24.586,5s17.586,7.893,17.586,17.586S34.279,40.172,24.586,40.172z"
                    />
                  </svg>
                </button>
              </div>
              <div v-if="orders.length === 0" class="text-center text-gray-500">
                Không có đơn hàng nào
              </div>
              <div v-for="(orderGroup, index) in filteredOrders" :key="index">
                <h2 class="text-lg font-semibold mt-6">{{ orderGroup.status }}</h2>
                <div
                  v-for="order in orderGroup.orders"
                  :key="order.id"
                  class="bg-white p-4 mt-4 rounded-lg shadow-sm"
                >
                  <div class="flex items-center mb-4">
                    <img :src="order.productImage" alt="Product Image" class="w-20 h-20 object-cover rounded-lg" />
                    <div class="ml-4 flex-1">
                      <h3 class="text-lg font-semibold">{{ order.productName }}</h3>
                      <div class="text-gray-500">{{ order.sellerName }}</div>
                    </div>
                    <div class="text-right">
                      <div class="text-gray-900 font-semibold">{{ formatCurrency(order.totalAmount) }} ₫</div>
                      <div class="text-sm text-gray-500">Tổng tiền: {{ formatCurrency(order.totalAmount) }} ₫</div>
                    </div>
                  </div>
                  <div class="flex justify-between items-center">
                    <button
                      class="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600"
                      @click="reorder(order)"
                    >
                      Mua lại
                    </button>
                    <button
                      class="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200"
                      @click="viewDetails(order)"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

interface Order {
  id: number;
  productName: string;
  productImage: string;
  sellerName: string;
  totalAmount: number;
  status: string;
}

const tabs = [
  "Tất cả đơn",
  "Chờ thanh toán",
  "Đang xử lý",
  "Đang vận chuyển",
  "Đã giao",
  "Đã hủy",
];
const activeTab = ref("Tất cả đơn");
const searchQuery = ref("");

const orders = ref<Order[]>([
  {
    id: 1,
    productName:
      "Ổ cắm điện đa năng Hoco DC15 sạc nhanh PD18W hỗ trợ 4 cổng USB - cổng AC tiện dụng - Hàng chính hãng",
    productImage: "path/to/image1.jpg",
    sellerName: "X Game",
    totalAmount: 274000,
    status: "Đã hủy",
  },
  {
    id: 2,
    productName: "Hổ Ly Biết Yêu (Bản Thông Thường)",
    productImage: "path/to/image2.jpg",
    sellerName: "Tiki Trading",
    totalAmount: 71400,
    status: "Giao hàng thành công",
  },
]);

const filteredOrders = computed(() => {
  let filtered = orders.value;
  if (activeTab.value !== "Tất cả đơn") {
    filtered = filtered.filter((order) => order.status === activeTab.value);
  }
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (order) =>
        order.productName.toLowerCase().includes(query) ||
        order.sellerName.toLowerCase().includes(query)
    );
  }
  const groupedOrders: { status: string; orders: Order[] }[] = [];
  const statusMap: { [key: string]: Order[] } = {};

  filtered.forEach((order) => {
    if (!statusMap[order.status]) {
      statusMap[order.status] = [];
    }
    statusMap[order.status].push(order);
  });

  for (const status in statusMap) {
    groupedOrders.push({ status, orders: statusMap[status] });
  }

  return groupedOrders;
});

const formatCurrency = (amount: number) => {
  return amount.toLocaleString("vi-VN");
};

const reorder = (order: Order) => {
  alert(`Reordering: ${order.productName}`);
};

const viewDetails = (order: Order) => {
  alert(`Viewing details for: ${order.productName}`);
};
</script>
