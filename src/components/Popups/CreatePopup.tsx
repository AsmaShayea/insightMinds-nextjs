"use client";

import React, { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/16/solid";
import DatePicker from "react-datepicker";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

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

const CreatePopup = ({ show, setShow }: { show: boolean; setShow: any }) => {
  const [activeOpt, setActiveOpt] = useState(["1"]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDatet, setSelectedDatet] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center fixed z-[9999] p-4 overflow-y-auto inset-0  bg-black/20">
      <div
        className="max-w-[500px] p-[24px] w-full bg-white rounded-[24px] gap-[16px] flex flex-col "
        style={{ boxShadow: "0px 12px 64px 0px #A3B5D433" }}
      >
        <h4 className="text-[20px] leading-[24px] text-[#29292E] font-[600] ">
          موضوع جديد
        </h4>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex flex-col gap-[8px] text-[14px] leading-[19px] text-black font-[500]">
            <label htmlFor="" className="">
              نوع
            </label>
            <div className="flex items-center gap-[16px]">
              {options.map((op, index) => (
                <div
                  key={index}
                  onClick={() => setActiveOpt(op.id)}
                  // onClick={() =>
                  //   setActiveOpt((prevState) =>
                  //     prevState.includes(op.id)
                  //       ? prevState.filter((id) => id !== op.id)
                  //       : [...prevState, op.id]
                  //   )
                  // }
                  className={`h-[42px] flex items-center cursor-pointer gap-[10px] rounded-[16px] py-[8px] px-[16px] border-[1.5px] ${
                    activeOpt.includes(op.id)
                      ? "border-green bg-lightGreen"
                      : "bg-white border-lightGray"
                  }`}
                >
                  {activeOpt.includes(op.id) && (
                    <CheckCircleIcon className="h-[19px] w-[19px] text-green" />
                  )}
                  <span className="text-[16px] leading-[21px] font-[400] text-black">
                    {op.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] w-full">
            <label htmlFor="" className="">
              الرابط{" "}
            </label>
            <input
              // onChange={handleChange}
              type="text"
              // value={formData.type}
              name="type"
              placeholder="الصق الرابط هنا"
              className="bg-white border text-[#29292E] h-[48px] outline-none w-full border-lightGray p-[16px] rounded-[16px] "
            />
          </div>
          <div className="flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] w-full">
            <label htmlFor="" className="">
              من{" "}
            </label>
            <div className="relative flex items-center  h-[48px] justify-between text-[14px] leading-[19px] font-[500] border text-[#29292E] outline-none border-lightGray p-[16px] rounded-[16px]  bg-white w-full gap-[14px]">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                // isClearable
                placeholderText="01/01/2024"
                className="outline-none !w-full "
                dateFormat="dd/MM/yyyy"
              />
              <CalendarDaysIcon className="h-[22px] w-[22px] text-black" />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] w-full">
            <label htmlFor="" className="">
              الي{" "}
            </label>
            <div className="relative flex items-center  h-[48px] justify-between text-[14px] leading-[19px] font-[500] border text-[#29292E] outline-none border-lightGray p-[16px] rounded-[16px]  bg-white w-full gap-[14px]">
              <DatePicker
                selected={selectedDatet}
                onChange={(date) => setSelectedDatet(date)}
                // isClearable
                placeholderText="01/01/2024"
                className="outline-none !w-full"
                dateFormat="dd/MM/yyyy"
              />
              <CalendarDaysIcon className="h-[22px] w-[22px] text-black" />
            </div>
          </div>
          <div className="w-full bg-lightGray h-[1px]" />
          <div className="flex items-center justify-end gap-[16px]">
            <button
              onClick={() => setShow(false)}
              className="text-[14px] text-[#29292E] leading-[19px] font-medium"
            >
              الغاء
            </button>
            <button className="text-[14px] leading-[19px] text-white rounded-[48px] px-[16px] py-[8px] bg-[#5A60F6] font-medium">
              رد علي التعليق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePopup;
