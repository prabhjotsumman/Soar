// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import useStore from "../../hooks/useStore";

function LineChart({ className, ...props }) {
  const store = useStore();
  const balanceHistoryData = store?.balanceHistory || [
    120, 350, 210, 450, 800, 233, 600, 210, 610,
  ];

  const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

  const DATA = {
    labels: labels,
    datasets: [
      {
        data: balanceHistoryData,
        borderColor: "#1814F3",
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
          gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
          return gradient;
        },
        lineTension: 0.44,
      },
    ],
  };

  return (
    <div
      className=" bg-white rounded-3xl w-full sm:h-70 md:h-70 xs:w-160 sm:w-160 md:w-160 xl:w-160 xs:h-70 p-4"
      {...props}
    >
      <Line
        data={DATA}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
