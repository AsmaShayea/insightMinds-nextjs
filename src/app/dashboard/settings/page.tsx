"use client";

import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const options = [
  {
    id: "1",
    name: "جوجل للأعمال",
  },
  {
    id: "2",
    name: "إنستجرام",
  },
  {
    id: "3",
    name: "اكس (تويتر)",
  },
];

const Settings = () => {
  const [activeOpt, setActiveOpt] = useState("1");

  return (
    <div className="p-[48px] flex flex-col">
      <h2 className="text-[24px] leading-[32px] font-[600] text-black">
        الإعدادات
      </h2>
      <div className="mt-[50px] bg-white shadow-sidebar w-full p-[24px] flex flex-col gap-[16px] rounded-[16px]">
        <div className="flex flex-col gap-[8px] text-[14px] leading-[19px] text-black font-[500] max-w-[320px]">
          <label htmlFor="" className="">
            اسم الشركة
          </label>
          <input
            type="text"
            placeholder="Insight Minds"
            className="bg-white border outline-none w-full border-lightGray p-[16px] rounded-[16px] "
          />
        </div>
        <div className="flex flex-col gap-[8px] text-[14px] leading-[19px] text-black font-[500] max-w-[520px]">
          <label htmlFor="" className="">
            الفئة
          </label>
          <div className="flex items-center gap-[16px]">
            {options.map((op, index) => (
              <div
                key={index}
                onClick={() => setActiveOpt(op.id)}
                className={`h-[44px] flex items-center cursor-pointer gap-[10px] rounded-[16px] py-[8px] px-[16px] border-[1.5px] ${
                  op.id == activeOpt
                    ? "border-green bg-lightGreen"
                    : "bg-white border-lightGray"
                }`}
              >
                {op.id == activeOpt && (
                  <CheckCircleIcon className="h-[19px] w-[19px] text-green" />
                )}
                <span className="text-[16px] leading-[21px] font-[400] text-black">
                  {op.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] max-w-[320px]">
          <label htmlFor="" className="">
            نوع{" "}
          </label>
          <select className="bg-white border  outline-none appearance-none w-full border-lightGray p-[16px] rounded-[16px] ">
            <option value="1">اسم النوع</option>
            <option value="2">اسم النوع</option>
            <option value="3">اسم النوع</option>
          </select>
          <ChevronDownIcon className="h-[20px] w-[20px] text-black absolute bottom-[14px] left-[14px]" />
        </div>
        <div className="flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] max-w-[320px]">
          <label htmlFor="" className="">
            نوع فرعي{" "}
          </label>
          <select className="bg-white border  outline-none appearance-none w-full border-lightGray p-[16px] rounded-[16px] ">
            <option value="1">اسم النوع</option>
            <option value="2">اسم النوع</option>
            <option value="3">اسم النوع</option>
          </select>
          <ChevronDownIcon className="h-[20px] w-[20px] text-black absolute bottom-[14px] left-[14px]" />
        </div>
        <div className="flex flex-col gap-[8px] text-[14px] leading-[19px] text-black font-[500] w-full">
          <label htmlFor="" className="">
            اسم الشركة
          </label>
          <textarea
            placeholder="شركة الإبداع التكنولوجي هي شرك"
            className="bg-white border outline-none w-full h-[120px] border-lightGray p-[16px] rounded-[16px] "
          ></textarea>
        </div>
        <div className="flex items-center justify-end ">
          <button className="text-[14px] leading-[19px] font-[500] text-white py-[8px] px-[16px] rounded-[48px] h-[44px] bg-main">
            حفظ الكل
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
