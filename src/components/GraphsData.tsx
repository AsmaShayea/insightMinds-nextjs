"use client";

import { FaceFrownIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import React from "react";
import { CiFaceMeh } from "react-icons/ci";

import PieChart from "./Charts/PieChart";
import LineChart from "./Charts/LineChart";
import Table from "./Table";
import Feelings from "./Feelings";
import Donut from "./Charts/Donut";


const barsData = [
  {
    title: "الطعام",
    data: [
      { value: 210, bgCls: "bg-green" },
      { value: 80, bgCls: "bg-red" },
      { value: 140, bgCls: "bg-lightGray" },
    ],
  },
  {
    title: "الخدمة",
    data: [
      { value: 200, bgCls: "bg-green" },
      { value: 60, bgCls: "bg-red" },
      { value: 120, bgCls: "bg-lightGray" },
    ],
  },
  {
    title: "النظافة",
    data: [
      { value: 220, bgCls: "bg-green" },
      { value: 100, bgCls: "bg-red" },
      { value: 150, bgCls: "bg-lightGray" },
    ],
  },
  {
    title: "البيئة",
    data: [
      { value: 220, bgCls: "bg-green" },
      { value: 90, bgCls: "bg-red" },
      { value: 140, bgCls: "bg-lightGray" },
    ],
  },
];

const GraphsData = () => {
 

  return (
    <div className="w-[58%] pr-[24px] flex flex-col gap-[24px]">
      {/* Graphs  */}
      <div className="w-full flex gap-[24px]">
        {/* Left Charts  */}
        <div className="flex flex-col w-[45%] gap-[20px]">
          {/* Donut Chart  */}
          <div className="bg-white shadow-sidebar h-[220px] w-full  p-[16px] rounded-[16px] flex flex-col gap-[16px]">
            <div className="text-[16px] leading-[21px] text-black font-[600]">
              مشاعر التعليقات
            </div>
            <div className="flex items-center w-full gap-[16px]">
              <div className="flex flex-col gap-[16px] w-[40%]">
                <div className="flex items-center gap-[8px]">
                  <FaceSmileIcon className="w-[24px] h-[24px] text-green" />
                  <div className="flex flex-col">
                    <p className="text-[14px] leading-[19px] font-[700]">85%</p>
                    <p className="text-[14px] leading-[19px] font-[400]">
                      ايجابي
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  <FaceFrownIcon className="w-[24px] h-[24px] text-[#FA2057]" />
                  <div className="flex flex-col">
                    <p className="text-[14px] leading-[19px] font-[700]">5%</p>
                    <p className="text-[14px] leading-[19px] font-[400]">
                      سلبي
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  <CiFaceMeh className="w-[24px] h-[24px] text-gray" />
                  <div className="flex flex-col">
                    <p className="text-[14px] leading-[19px] font-[700]">10%</p>
                    <p className="text-[14px] leading-[19px] font-[400]">
                      محايد
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[55%]  relative">
                <div className="text-[12px] leading-[16px] font-[600] text-black absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
                  تقسيم <br />
                  تفصيلي
                </div>
              <Donut />
              </div>
            </div>
          </div>
          {/* Pie Chart  */}
          <div className="bg-white shadow-sidebar h-[250px] w-full  p-[16px] rounded-[16px] flex flex-col gap-[16px]">
            <div className="text-[16px] leading-[21px] text-black font-[600]">
              المشاعر
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center w-full justify-center  relative">
                <PieChart />
              </div>
            </div>
          </div>
        </div>

        {/* Right Charts  */}
        <div className="flex flex-col w-[55%] gap-[20px]">
          {/* Bars Chats  */}
          <div className="bg-white shadow-sidebar h-[220px] w-full p-[16px] rounded-[16px] flex flex-col justify-between gap-[16px]">
            <div className="text-[16px] leading-[21px] text-black font-[600]">
              المشاعر حسب الموضوع{" "}
            </div>
            <div className="flex flex-col items-center gap-[16px]">
              {barsData.map((d, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full relative gap-[10px]"
                >
                  <div className="text-[14px] leading-[19px] text-black">
                    {d.title}
                  </div>
                  <div className="max-w-[240px] w-full flex h-[20px] rounded-full overflow-hidden text-[10px] leading-[14px] font-[500]">
                    {d.data.map((item, index) => {
                      const total = d.data.reduce(
                        (acc, curr) => acc + curr.value,
                        0
                      );
                      const percent = (item.value / total) * 100;
                      return (
                        <div
                          key={index}
                          style={{ width: `${percent}%` }}
                          className={`flex items-center justify-center ${item.bgCls} w-[${percent}%]`}
                        >
                          {item.value}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Line Chart  */}
          <div className="bg-white shadow-sidebar h-[250px] w-full p-[16px] rounded-[16px] flex flex-col justify-between gap-[16px]">
            <div className="flex items-center justify-between gap-[10px]">
              <div className="text-[16px] leading-[21px] text-black font-[600]">
                الاراء
              </div>

              <div className="flex items-center gap-[24px] text-black">
                <div className="flex items-center gap-[5px]">
                  <div className="w-[12px] h-[12px] rounded-full bg-green" />
                  <span className="text-[12px] leading-[16px] font-[400] ">
                    ايجابية
                  </span>
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="w-[12px] h-[12px] rounded-full bg-red" />
                  <span className="text-[12px] leading-[16px] font-[400] ">
                    سلبية
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      {/* Table  */}
      <Table />
      <Feelings />
    </div>
  );
};

export default GraphsData;
