<template>
  <div class="bg-white rounded-md overflow-hidden col-span-2">
    <div class="flex justify-between items-center p-4 font-bold">
      <div class="text-lg">Thống kê đơn hàng doanh thu</div>
      <div>
        <a-tag
          :bordered="false"
          @click="filter = 'all'"
          :class="
            filter === 'all'
              ? 'bg-tag-bg-11 text-tag-text-11'
              : 'bg-tag-bg-07 text-tag-text-07'
          "
          class="cursor-pointer"
        >
          Tất cả
        </a-tag>
        <a-tag
          :bordered="false"
            @click="filter = '1m'"
          :class="
            filter === '1m'
              ? 'bg-tag-bg-11 text-tag-text-11'
              : 'bg-tag-bg-07 text-tag-text-07'
          "
          class="cursor-pointer"
        >
          1M
        </a-tag>
        <a-tag
          :bordered="false"
           @click="filter = '3m'"
          :class="
            filter === '3m'
              ? 'bg-tag-bg-11 text-tag-text-11'
              : 'bg-tag-bg-07 text-tag-text-07'
          "
          class="cursor-pointer"
        >
          3M
        </a-tag>
        <a-tag
          :bordered="false"
           @click="filter = '6m'"
          :class="
            filter === '6m'
              ? 'bg-tag-bg-11 text-tag-text-11'
              : 'bg-tag-bg-07 text-tag-text-07'
          "
          class="cursor-pointer"
        >
          6M
        </a-tag>
        <a-tag
          :bordered="false"
           @click="filter = '9m'"
          :class="
            filter === '9m'
              ? 'bg-tag-bg-11 text-tag-text-11'
              : 'bg-tag-bg-07 text-tag-text-07'
          "
          class="cursor-pointer"
        >
          9M
        </a-tag>
        <a-tag
          :bordered="false"
           @click="filter = '1y'"
          :class="
            filter === '1y'
              ? 'bg-tag-bg-11 text-tag-text-11'
              : 'bg-tag-bg-07 text-tag-text-07'
          "
          class="cursor-pointer"
        >
          1Y
        </a-tag>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 bg-[#f9fbfc] border-dashed border-y">
      <div class="border-dashed border-r p-4">
        <h3 class="text-center">100</h3>
        <p class="text-center">Đơn hàng</p>
      </div>
      <div class="border-dashed border-r p-4">
        <h3 class="text-center">12</h3>
        <p class="text-center">Gia hạn</p>
      </div>
      <div class="border-dashed border-r p-4">
        <h3 class="text-center">12</h3>
        <p class="text-center">Quá hạn</p>
      </div>
      <div class="p-4">
        <h3 class="text-center">1</h3>
        <p class="text-center">1asds</p>
      </div>
    </div>

    <div class="mt-4">
      <highchart :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const dashboardStore = useDashboardStore();
const chartOptions = ref({});
const filter = ref("all");
useAsyncData(
  async () => {
    await dashboardStore.getStaticColumnOrder({
      sort: filter.value,
    });
    chartOptions.value = {
      chart: {
        zooming: {
          type: "x",
        },
      },

      title: {
        text: "",
        align: "left",
      },
      xAxis: {
        categories: dashboardStore.dashboradStaticColumnOrder?.map((item) =>
          dayjs(item.date.split("T")[0]).format("DD/MM/YYYY")
        ),
      },
      yAxis: [
        {
          min: 0,
          title: {
            text: "Đơn hàng",
          },
        },
        {
          title: {
            text: "Doanh thu (Đv:Nghìn Đồng)",
          },
          opposite: true,
        },
      ],
      tooltip: {
        valueSuffix: " đơn",
      },
      plotOptions: {
        series: {
          borderRadius: "25%",
        },
      },
      series: [
        {
          type: "column",
          name: "Tổng đơn",
          data: dashboardStore.dashboradStaticColumnOrder?.map(
            (item) => item.total_orders
          ),
          color: "#007FFF",
        },
        {
          type: "column",
          name: "Hoàn thành",
          data: dashboardStore.dashboradStaticColumnOrder?.map(
            (item) => item.completed_orders
          ),
          color: "#389E0D",
        },
        {
          type: "column",
          name: "Hủy",
          data: dashboardStore.dashboradStaticColumnOrder?.map(
            (item) => item.canceled_orders
          ),
          color: "#F44336",
        },
        {
          type: "spline",
          step: "center",
          name: "Doanh thu",
          data: dashboardStore.dashboradStaticColumnOrder?.map(
            (item) => item.revenue
          ),
          yAxis: 1,
          tooltip: {
            valueSuffix: " đ",
          },
          marker: {
            lineWidth: 2,
            lineColor: "#2196F3",
            fillColor: "white",
          },
        },
      ],
    };
  },
  {
    immediate: true,
    watch: filter,
  }
);
</script>
