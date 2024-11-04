import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaceFrownIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

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
const Donut = ({
  classN,
  dataC,
}: {
  classN?: string;
  dataC: any;
}) => {
  const data = {
    datasets: [
      {
        data: [dataC?.positive.count, dataC?.negative.count],
        backgroundColor: ["#3DDA67", "#FA2057"],
        borderColor: ["#3DDA67", "#FA2057"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-white shadow-sidebar h-[220px] w-full  p-[16px] rounded-[16px] flex flex-col gap-[16px]">
      <div className="text-[16px] leading-[21px] text-black font-[600]">
        مشاعر التعليقات
      </div>
      <div className="flex items-center w-full gap-[16px]">
        <div className="flex flex-col gap-[16px] w-[40%]">
          <div className="flex items-center gap-[8px]">
            <FaceSmileIcon className="w-[24px] h-[24px] text-green" />
            <div className="flex flex-col">
              <p className="text-[14px] leading-[19px] font-[700]">
                {dataC?.positive?.percentage}%
              </p>
              <p className="text-[14px] leading-[19px] font-[400]">إيجابي</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <FaceFrownIcon className="w-[24px] h-[24px] text-[#FA2057]" />
            <div className="flex flex-col">
              <p className="text-[14px] leading-[19px] font-[700]">
                {dataC?.negative?.percentage}%
              </p>
              <p className="text-[14px] leading-[19px] font-[400]">سلبي</p>
            </div>
          </div>
          {/* <div className="flex items-center gap-[8px]">
          <CiFaceMeh className="w-[24px] h-[24px] text-gray" />
          <div className="flex flex-col">
            <p className="text-[14px] leading-[19px] font-[700]">10%</p>
            <p className="text-[14px] leading-[19px] font-[400]">
              محايد
            </p>
          </div>
        </div> */}
        </div>
        <div className="flex items-center justify-center w-[55%]  relative">
          <div className="text-[12px] leading-[16px] font-[600] text-black absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
            تقسيم <br />
            تفصيلي
          </div>
          <Doughnut
            data={data}
            options={options}
            className={`${classN} w-full max-w-[150px] m-auto h-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default Donut;
