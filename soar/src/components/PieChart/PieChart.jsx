// ./components/PieChart.js
import React from "react";
import "chartjs-plugin-datalabels";
// import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
const labels = ["Entertainment", "Bill Expense", "Others", "Investment"];
const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: ["#343C6A", "#FC7900", "#232323", "#396AFF"],
      data: [30, 20, 30, 20],
      spacing: 10,
      color: 'white'
    },
  ],
};

const chartOptions = {
  plugins: {
    datalabels: {
      color: 'white',
      font: {
        size:12
      },
      textAlign: 'center',
      formatter: function(value, context) {
        return value + "% \n" + context.chart.data.labels[context.dataIndex];
      }
    },
    legend: {
      display: false,
    },
  },
};

const PieChart = () => {
  return (
    <div>
      <Pie data={data} options={chartOptions} plugins={[ChartDataLabels]} />
    </div>
  );
};
export default PieChart;
