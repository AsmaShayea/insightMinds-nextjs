import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const pieLabels = [
  {
    name: "Happy",
    bgClr: "rgba(75, 192, 75, 0.9)",
  },
  {
    name: "Angry",
    bgClr: "rgba(255, 99, 132, 0.9)",
  },
  {
    name: "Satisfied",
    bgClr: "rgba(255, 159, 64, 0.9)",
  },
  {
    name: "Disappointed",
    bgClr: "rgba(54, 162, 235, 0.9)",
  },
  {
    name: "Excited",
    bgClr: "rgba(54, 162, 235, 0.5)",
  },
];


const PieChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: ["Happy", "Angry", "Satisfied", "Disappointed", "Excited"], // Labels in Arabic
    datasets: [
      {
        label: "",
        data: [
          data?.Happy,
          data?.Angry,
          data?.Satisfied,
          data?.Disappointed,
          data?.Excited,
        ], // Values for each label
        backgroundColor: [
          "rgba(75, 192, 75, 0.9)", // Green
          "rgba(255, 99, 132, 0.9)", // Red
          "rgba(255, 159, 64, 0.9)", // Orange
          "rgba(54, 162, 235, 0.9)", // Blue
          "rgba(54, 162, 235, 0.5)", // Blue
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        enabled: true, // Enable tooltips for hover effects
      },
    },
  };

  return (
    <div className="bg-white shadow-sidebar h-[250px] w-full  p-[16px] rounded-[16px] flex flex-col gap-[16px]">
      <div className="text-[16px] leading-[21px] text-black font-[600]">
        المشاعر
      </div>
      <div className="flex items-center justify-between gap-[20px]">
        <div className="flex items-center justify-center relative">
          <div className="w-full max-w-[140px] m-auto">
            <Pie data={chartData} options={options} />
          </div>
        </div>
        <div className="flex flex-col ">
          {pieLabels.map((lable, index) => (
            <div
              key={index}
              className="flex items-center gap-[8px] text-[12px] leading-[110%] mb-[10px] font-semibold"
            >
              <div
                style={{ background: `${lable.bgClr}` }}
                className="w-[10px] h-[10px] rounded-full "
              ></div>
              <div>{lable.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
