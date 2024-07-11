<template>
  <div>
    <highchart :options="chartOptions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        title: {
          text: "Sales of petroleum products March, Norway",
          align: "left",
        },
        xAxis: {
          categories: [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12",
          ],
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
            data: [
              59, 83, 65, 228, 184, 59, 83, 65, 228, 184, 220, 256, 59, 83, 65,
              228, 184, 59, 83, 65, 228, 184, 220, 256, 65, 228,
            ],
            color: "#007FFF",
          },
          {
            type: "column",
            name: "Hoàn thành",
            data: [24, 79, 72, 240, 167],
            color: "#389E0D",
          },
          {
            type: "column",
            name: "Hủy",
            data: [58, 88, 75, 250, 176],
            color: "#F44336",
          },
          {
            type: "spline",
            step: "center",
            name: "Doanh thu",
            data: [47, 83.33, 70.66, 239.33, 175.66],
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
          {
            type: "pie",
            name: "Total",
            data: [
              {
                name: "2020",
                y: 619,
                color: "red",
                dataLabels: {
                  enabled: true,
                  distance: -50,
                  format: "{point.total} M",
                  style: {
                    fontSize: "15px",
                  },
                },
              },
              {
                name: "2021",
                y: 586,
                color: "red", // 2021 color
              },
              {
                name: "2022",
                y: 647,
                color: "red", // 2022 color
              },
            ],
            center: [900, 0],
            size: 100,
            innerSize: "70%",
            showInLegend: false,
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
    };
  },
};
</script>
