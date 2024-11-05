"use client";

import React, { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/16/solid";
import DatePicker from "react-datepicker";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

const options = [
  {
    id: "1",
    name: "جوجل للأعمال",
  },
  {
    id: "2",
    name: "انستجرام",
  },
  {
    id: "3",
    name: "إكس (تويتر)",
  },
];

const CreatePopup = ({ show, setShow }: { show: boolean; setShow: any }) => {
  const [activeOpt, setActiveOpt] = useState(["1"]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDatet, setSelectedDatet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const queryClient = useQueryClient()

  const router = useRouter();

  const handleFetchBusinessId = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const urlValue = form.elements["type"].value;

    try {
      setIsLoading(true);
      const rs = await axios.post(
        "http://13.53.122.23:8000/scrape-extract-aspects",
        {
          url: urlValue,
        }
      );

      setShow(false);

      window.location.replace(`/dashboard/${rs?.data?.business_id}?progressStatus=incomplete`)
 
    } catch (error) {
      console.error("Error while fetching business id : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center fixed z-[9999] p-4 overflow-y-auto inset-0  bg-black/20'>
      <div
        className='max-w-[500px] p-[24px] w-full bg-white rounded-[24px] gap-[16px] flex flex-col '
        style={{ boxShadow: "0px 12px 64px 0px #A3B5D433" }}
      >
        <h4 className='text-[20px] leading-[24px] text-[#29292E] font-[600] '>
          إضافة حساب جديد
        </h4>
        <form
          onSubmit={handleFetchBusinessId}
          className='flex flex-col gap-[16px] w-full'
        >
          <div className='flex flex-col gap-[8px] text-[14px] leading-[19px] text-black font-[500]'>
            <label htmlFor='' className=''>
              نوع
            </label>
            <div className='flex items-center gap-[16px]'>
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
                    <CheckCircleIcon className='h-[19px] w-[19px] text-green' />
                  )}
                  <span className='text-[16px] leading-[21px] font-[400] text-black'>
                    {op.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] w-full'>
            <label htmlFor='' className=''>
              الرابط{" "}
            </label>
            <input
              id='type'
              // onChange={handleChange}
              type='text'
              required
              // value={formData.type}
              name='type'
              placeholder='الصق الرابط هنا'
              className='bg-white border text-[#29292E] h-[48px] outline-none w-full border-lightGray p-[16px] rounded-[16px] '
            />
          </div>
          <div className='flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] w-full'>
            <label htmlFor='' className=''>
              من{" "}
            </label>
            <div className='relative flex items-center  h-[48px] justify-between text-[14px] leading-[19px] font-[500] border text-[#29292E] outline-none border-lightGray p-[16px] rounded-[16px]  bg-white w-full gap-[14px]'>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                // isClearable
                placeholderText='01/01/2024'
                className='outline-none !w-full '
                dateFormat='dd/MM/yyyy'
              />
              <CalendarDaysIcon className='h-[22px] w-[22px] text-black' />
            </div>
          </div>
          <div className='flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] w-full'>
            <label htmlFor='' className=''>
              إلى{" "}
            </label>
            <div className='relative flex items-center  h-[48px] justify-between text-[14px] leading-[19px] font-[500] border text-[#29292E] outline-none border-lightGray p-[16px] rounded-[16px]  bg-white w-full gap-[14px]'>
              <DatePicker
                selected={selectedDatet}
                onChange={(date) => setSelectedDatet(date)}
                // isClearable
                placeholderText='01/01/2024'
                className='outline-none !w-full'
                dateFormat='dd/MM/yyyy'
              />
              <CalendarDaysIcon className='h-[22px] w-[22px] text-black' />
            </div>
          </div>
          <div className='w-full bg-lightGray h-[1px]' />
          <div className='flex items-center justify-end gap-[16px]'>
            <button
              onClick={() => setShow(false)}
              className='text-[14px] text-[#29292E] leading-[19px] font-medium'
            >
              إلغاء
            </button>

            <button
              type='submit'
              className='text-[14px] leading-[19px] text-white rounded-[48px] px-[16px] py-[8px] bg-[#5A60F6] font-medium'
            >
              {isLoading ? (
                <Image
                  src={"/loader.gif"}
                  alt=''
                  width={100}
                  height={20}
                  className='w-[75px] h-[20px]  object-cover'
                />
              ) : (
                <span> تحليل وإضافة </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePopup;
