"use client";
import React, { useState } from "react";
import TableMain from "./TableMain";

const tabs = [
  {
    id: "1",
    name: "ايجابي",
  },
  {
    id: "2",
    name: "سلبي",
  },
];

// const data = [
//   {
//     title: "القهوة",
//     data: ["لذيدة", "مضبوطة", "اعجبتني", "لذيدة", "اعجبتني", "مضبوطة"],
//   },
//   {
//     title: "القهوة",
//     data: ["لذيدة", "مضبوطة", "اعجبتني", "لذيدة", "اعجبتني", "مضبوطة"],
//   },
//   {
//     title: "القهوة",
//     data: ["لذيدة", "مضبوطة", "اعجبتني", "لذيدة", "اعجبتني", "مضبوطة"],
//   },
// ];

const Table = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState("p");

  return (
    <div className="p-[16px] rounded-[16px]  gap-[16px] flex flex-col bg-white shadow-sidebar">
      <div className="text-[16px] leading-[21px] text-black font-[600]">
        أشهر المواضيع{" "}
      </div>
      <div className="flex border-b border-lightGray w-full">
      
        <div
          onClick={() => setActiveTab("p")}
          className={`px-[16px] cursor-pointer py-[8px] h-[34px] border-b ${
            "p" == activeTab
              ? "bg-[#EBFEF4] border-green text-black"
              : "border-transparent text-black"
          } text-[14px] leading-[19px] font-[500] flex items-center justify-center`}
        >
          ايجابي
        </div>
        <div
          onClick={() => setActiveTab("n")}
          className={`px-[16px] cursor-pointer py-[8px] h-[34px] border-b ${
            "n" == activeTab
              ? "bg-[#FFE1E7] border-red text-black"
              : "border-transparent text-black"
          } text-[14px] leading-[19px] font-[500] flex items-center justify-center`}
        >
          سلبي
        </div>
      </div>
      {activeTab === "p" && <TableMain data={data?.top_positive_aspects} type="positive" />}
      {activeTab === "n" && <TableMain data={data?.top_negative_aspects} type="negative" />}
    </div>
  );
};

export default Table;
