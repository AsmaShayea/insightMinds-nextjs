"use client";

import { CheckCircleIcon } from "@heroicons/react/16/solid";
import {
  AdjustmentsHorizontalIcon,
  ArrowTopRightOnSquareIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  PresentationChartBarIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const options = [
  {
    id: "1",
    name: "جوجل للأعمال",
    icon: <BuildingStorefrontIcon className="h-[22px] w-[22px] text-black" />,
  },
  {
    id: "2",
    name: "إنستجرام",
    icon: <FaInstagram className="h-[22px] w-[22px] text-black" />,
  },
  {
    id: "3",
    name: "اكس (تويتر)",
    icon: <FaXTwitter className="h-[22px] w-[22px] text-black" />,
  },
];

const tabs = [
  {
    id: "a",
    name: "نظرة عامة",
    icon: <PresentationChartBarIcon className="h-[22px] w-[22px]" />,
  },
  {
    id: "b",
    name: "تحليلات النصوص",
    icon: <QueueListIcon className="h-[22px] w-[22px]" />,
  },
];

const MainContainer = () => {
  const [activeOpt, setActiveOpt] = useState(['1']);
  const [activeTab, setActiveTab] = useState("a");
  const [startDate, setStartDate] = useState<Date>(null);
  const [endDate, setEndDate] = useState<Date>(null);

  return (
    <div className="bg-white shadow-sidebar p-[48px] pb-[32px] flex flex-col gap-[24px] w-full ">
      <div className="flex items-center w-full justify-between h-[44px] gap-[50px]">
        <div className="flex items-center gap-[16px]">
          {options.map((op, index) => (
            <div
              key={index}
              onClick={() => setActiveOpt(prevState => prevState.includes(op.id) ? prevState.filter(id => id !== op.id) : [...prevState, op.id])}
              className={`h-[44px] flex items-center hover:border-green transition-all duration-300 ease-in-out cursor-pointer gap-[10px] rounded-[16px] py-[8px] px-[16px] border-[1.5px] ${
                activeOpt.includes(op.id)
                  ? "border-green bg-lightGreen"
                  : "bg-white border-lightGray"
              }`}
            >
              {activeOpt.includes(op.id) && (
                <CheckCircleIcon className="h-[21px] w-[21px] text-green" />
              )}
              <span className="text-[16px] leading-[21px] font-[400] text-black">
                {op.name}
              </span>
              {op.icon}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="relative flex items-center  justify-between border hover:border-green transition-all duration-300 ease-in-out text-[14px] leading-[19px] font-[500] text-black border-lightGray bg-white px-[16px] py-[8px] rounded-[8px]  w-full gap-[14px] max-w-[250px] ">
            <DatePicker
              selected={startDate}
              onChange={(dates: [Date | null, Date | null]) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              isClearable
              placeholderText="01/01/2024 - 31/12/2024"
              className="outline-none w-full"
              dateFormat="dd/MM/yyyy"
            />
            <CalendarDaysIcon className="h-[22px] w-[22px] text-black" />
          </div>
          <div
            className={`h-[44px] flex items-center cursor-pointer gap-[10px] hover:border-green transition-all duration-300 ease-in-out rounded-[16px] py-[8px] px-[16px] border-[1.5px] bg-white border-lightGray`}
          >
            <span className="text-[16px] leading-[21px] font-[400] text-black">
              مرشحات
            </span>
            <AdjustmentsHorizontalIcon className="h-[22px] w-[22px] text-black" />
          </div>
          <div
            className={`h-[44px] flex items-center cursor-pointer gap-[10px] hover:border-green transition-all duration-300 ease-in-out rounded-[16px] py-[8px] px-[16px] border-[1.5px] bg-white border-lightGray`}
          >
            <span className="text-[16px] leading-[21px] font-[400] text-black">
              تصدير
            </span>
            <ArrowTopRightOnSquareIcon className="h-[22px] w-[22px] text-black" />
          </div>
        </div>
      </div>
      <div className="w-full bg-lightGray h-[1px] mb-[-8px]" />
      <div className="flex items-center gap-[16px]">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(t.id)}
            className={`h-[44px] flex items-center cursor-pointer hover:border-main border   transition-all duration-300 ease-in-out gap-[8px]  text-[16px] leading-[21px] rounded-[16px] py-[8px] px-[16px] ${
              t.id == activeTab
                ? "bg-main  text-white border-main"
                : "bg-bgClr text-black border-transparent hover:bg-[#ECECFE]"
            }`}
          >
            {t.icon}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
