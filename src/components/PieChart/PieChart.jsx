import "chartjs-plugin-datalabels";
// import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import useStore from '../../hooks/useStore';

const PieChart = () => {
  const store = useStore();
  const expensesData = store?.expenses || [30, 20, 30, 20];
  const labels = ["Leisure", "Expenses", "Others", "Investment"];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: ["#343C6A", "#FC7900", "#232323", "#396AFF"],
        data: expensesData,
        spacing: 10,
        color: "white",
      },
    ],
  };

  const chartOptions = {
    plugins: {
      datalabels: {
        color: "white",
        font: {
          size: 12,
        },
        textAlign: "center",
        formatter: function (value, context) {
          return value + "% \n" + context.chart.data.labels[context.dataIndex];
        },
      },
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <Pie data={data} options={chartOptions} plugins={[ChartDataLabels]} />
    </div>
  );
};
export default PieChart;
