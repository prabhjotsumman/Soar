// import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "WithDraw",
        backgroundColor: "#232323",
        data: [[450], 300, 290, 460, 120, 390, 350],
        barThickness: 12,
        borderRadius: 50,
        borderSkipped: false
      },
      {
        label: "Deposit",
        backgroundColor: "#396AFF",
        data: [[250], 120, 230, 390, 210, 230, 320],
        barThickness: 12,
        borderRadius: 50,
        borderSkipped: false
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          padding: 10,
          usePointStyle: true,
          font: {
            size:12
          }
        },
      },
    },
  };
  return (
    <div className="bg-white rounded-3xl" >
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default BarChart;
