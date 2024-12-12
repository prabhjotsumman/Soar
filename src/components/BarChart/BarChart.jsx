import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import useStore from "../../hooks/useStore";

const BarChart = () => {
  const store = useStore();
  const weeklyActivityData = store.weeklyActivity;
  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const withDrawData = weeklyActivityData?.withdraw || [
    450, 300, 290, 460, 120, 390, 350,
  ];
  const depositedData = weeklyActivityData?.deposit || [
    250, 120, 230, 390, 210, 230, 320,
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "WithDraw",
        backgroundColor: "#232323",
        data: withDrawData,
        barThickness: 12,
        borderRadius: 50,
        borderSkipped: false,
      },
      {
        label: "Deposit",
        backgroundColor: "#396AFF",
        data: depositedData,
        barThickness: 12,
        borderRadius: 50,
        borderSkipped: false,
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
            size: 12,
          },
        },
      },
    },
  };
  return (
    <div className="bg-white rounded-3xl">
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default BarChart;
