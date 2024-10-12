import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);




const options = {
  responsive: true,
  plugins: {
    //   legend: {
    //     position: "top" as const,
    //   },
    tooltip: {
      // callbacks: {
      //   label: function (tooltipItem: any) {
      //     return `${tooltipItem.raw}%`;
      //   },
      // },
    },
  },
  cutout: "75%",
};
const Donut = ({classN , positiveCnt,negativeCnt}:{classN?:string, negativeCnt:number, positiveCnt:number}) => {
  const data = {
    datasets: [
      {
        data: [positiveCnt, negativeCnt],
        backgroundColor: ["#3DDA67", "#FA2057"],
        borderColor: ["#3DDA67", "#FA2057"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={options}
      className={`${classN} w-full max-w-[150px] m-auto h-full`}
    />
  );
};

export default Donut;
