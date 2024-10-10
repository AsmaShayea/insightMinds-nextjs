import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  datasets: [
    {
      data: [20, 5, 13],
      backgroundColor: ["#3DDA67", "#FA2057", "#EAEAEC"],
      borderColor: ["#3DDA67", "#FA2057", "#EAEAEC"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    //   legend: {
    //     position: "top" as const,
    //   },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `${tooltipItem.raw}%`;
        },
      },
    },
  },
  cutout: "75%",
};
const Donut = ({classN}:{classN?:string}) => {
  return (
    <Doughnut
      data={data}
      options={options}
      className={`${classN} w-full max-w-[150px] m-auto h-full`}
    />
  );
};

export default Donut;
