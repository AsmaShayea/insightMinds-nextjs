import { FaceFrownIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import React from "react";
import { CiFaceMeh } from "react-icons/ci";
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

const Chart = ({ d }: { d: any }) => {
  const dataG = {
    datasets: [
      {
        data: [d?.positive, d?.negative],
        backgroundColor: ["#3DDA67", "#FA2057"],
        borderColor: ["#3DDA67", "#FA2057"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Doughnut
      data={dataG}
      options={options}
      className={`!w-[80px] !h-[80px] m-auto`}
    />
  );
};

const Feelings = ({ data }: { data: any }) => {
  return (
    <div className="p-[16px] rounded-[16px]  gap-[16px] flex flex-col bg-white shadow-sidebar">
      <div className="text-[16px] leading-[21px] text-black font-[600]">
       إجمالي المشاعر حسب التصنيفات{" "}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] ">
        {data?.map((a: any, i: number) => (
          <div
            key={i}
            className="w-full border border-lightGray rounded-[16px] flex items-center justify-between gap-[8px] p-[16px]"
          >
            <div className="flex gap-[25px] lg:gap-[15px] items-center">
              <div className="flex flex-col justify-center items-center gap-[8px]">
                <FaceSmileIcon className="w-[24px] h-[24px] text-green" />
                <p className="text-[14px] leading-[19px] font-[700]">
                  {a?.positive}%
                </p>
                <p className="text-[14px] leading-[19px] font-[400]">ايجابي</p>
              </div>

              {/* <div className="flex flex-col justify-center items-center gap-[8px]">
                  <CiFaceMeh className="w-[24px] h-[24px] text-gray" />
                  <p className="text-[14px] leading-[19px] font-[700]">10%</p>
                  <p className="text-[14px] leading-[19px] font-[400]">محايد</p>
                </div> */}
              <div className="flex flex-col justify-center items-center gap-[8px]">
                <FaceFrownIcon className="w-[24px] h-[24px] text-[#FA2057]" />
                <p className="text-[14px] leading-[19px] font-[700]">
                  {a?.negative}%
                </p>
                <p className="text-[14px] leading-[19px] font-[400]">سلبي</p>
              </div>
            </div>
            <div className="relative">
              <div className="text-[12px] leading-[16px] font-[600] text-black absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
                {a?.category}
              </div>
              <Chart d={a} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feelings;
