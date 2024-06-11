"use client";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map(account => account.name);
  const accountBalances = accounts.map(account => account.currentBalance);
  const data = {
    datasets: [
      {
        label: "Banks",
        data: accountBalances,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accountNames,
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
