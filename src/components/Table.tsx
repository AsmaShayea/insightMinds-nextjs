"use client";
import React, { useState } from "react";

const tabs = [
  {
    id: "1",
    name: "ايجابي",
  },
  {
    id: "2",
    name: "محايد",
  },
];

const data = [
  {
    title: "القهوة",
    data: ["لذيدة", "مضبوطة", "اعجبتني", "لذيدة", "اعجبتني", "مضبوطة"],
  },
  {
    title: "القهوة",
    data: ["لذيدة", "مضبوطة", "اعجبتني", "لذيدة", "اعجبتني", "مضبوطة"],
  },
  {
    title: "القهوة",
    data: ["لذيدة", "مضبوطة", "اعجبتني", "لذيدة", "اعجبتني", "مضبوطة"],
  },
];

const Table = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="p-[16px] rounded-[16px]  gap-[16px] flex flex-col bg-white shadow-sidebar">
      <div className="text-[16px] leading-[21px] text-black font-[600]">
        اشهر المواضيع{" "}
      </div>
      <div className="flex border-b border-lightGray w-full">
        {tabs.map((tab, index) => (
          <div
            className={`px-[16px] cursor-pointer py-[8px] h-[34px] border-b ${
              tab.id == activeTab
                ? "bg-[#EBFEF4] border-green text-black"
                : "border-transparent text-black"
            } text-[14px] leading-[19px] font-[500] flex items-center justify-center`}
            key={index}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-3 border border-lightGray rounded-[8px] overflow-hidden">
        {data.map((t, index) => (
          <div key={index} className="flex flex-col w-full">
            <div
              className={`${
                index == data.length - 1 ? "" : "border-l"
              } text-[14px] leading-[19px] font-[600] text-black flex items-center justify-center text-center bg-lightGreen border-lightGray border-b py-[12px] px-[16px] h-[42px]`}
            >
              {t.title}
            </div>
            {t.data.map((d, i) => (
              <div
                key={d}
                className={`"text-[14px] leading-[19px] font-[400] text-black flex items-center justify-center text-center border-lightGray ${
                  i == t.data.length - 1 && "!border-b-0"
                } ${
                  index == data.length - 1 ? "" : "border-l"
                } border-b py-[12px] px-[16px] h-[42px]`}
              >
                {d}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
