"use client";

import { CheckCircleIcon } from "@heroicons/react/16/solid";
import {
  AdjustmentsHorizontalIcon,
  ArrowTopRightOnSquareIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  PresentationChartBarIcon,
  QueueListIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { FaInstagram, FaPlus } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Logo } from "./Icons";
import { useGlobalContext } from "@/context/GlobalContext";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";

const options = [
  {
    id: "1",
    name: "جوجل",
    icon: <BuildingStorefrontIcon className="h-[22px] w-[22px] text-black" />,
  },
  {
    id: "2",
    name: "انستجرام",
    icon: <FaInstagram className="h-[22px] w-[22px] text-black" />,
  },
  {
    id: "3",
    name: "إكس",
    icon: <FaXTwitter className="h-[22px] w-[22px] text-black" />,
  },
];

const tabs = [
  {
    id: "1",
    name: "نظرة عامة",
    icon: <PresentationChartBarIcon className="h-[22px] w-[22px]" />,
  },
  {
    id: "2",
    name: "تحليلات النصوص",
    icon: <QueueListIcon className="h-[22px] w-[22px]" />,
  },
  {
    id: "٣",
    name: "تقييم الموظفين",
    icon: <UserGroupIcon className="h-[22px] w-[22px]" />,
  },
];
const tabsMob = [
  {
    id: "a1",
    name: "المشاعر",
  },
  {
    id: "b2",
    name: "الموضيع",
  },

  {
    id: "c3",
    name: "آراء العملاء",
  },
];

const MainContainer = ({
  activeTab,
  setActiveTab,
  setMobTab,
  mobTab,
  showOptionsBar=false,
  isMyBusiness=false,
}: {
  activeTab: string;
  setActiveTab: any;
  setMobTab: any;
  mobTab: string;
  showOptionsBar?: boolean;
  isMyBusiness?: boolean;
}) => {
  const [activeOpt, setActiveOpt] = useState(["1"]);
  const [startDate, setStartDate] = useState<Date>(null);
  const [endDate, setEndDate] = useState<Date>(null);
  const { setShowCreate } = useGlobalContext();

  const pathname = usePathname();

  const fetchLinks = async () => {
    const response = await axios.get(
      "http://16.171.196.223:8000/get-business-data"
    );
    return response?.data?.data;
  };
  
  const { data } = useQuery({
    queryKey: ["fetchSidebarLinks"],
    queryFn: fetchLinks,
    staleTime:0,
    refetchOnWindowFocus:true,
    
  });

  
  const currentSelected = {name:"",logo:""}
  const activeId = pathname?.split("/").at(-1)


  if(isMyBusiness){

    currentSelected.name = data?.my_business[0]?.name
    currentSelected.logo = data?.my_business[0]?.logo
  }else{
    const currentBusiness = data?.other_business.find( (b:any) =>{ return b?.id == activeId});
    currentSelected.name = currentBusiness?.name
    currentSelected.logo = currentBusiness?.logo
  }



  return (
    <>
      <div className="bg-white shadow-sidebar relative z-[10]  p-[24px] px-[20px] lg:p-[48px] lg:pb-[32px] flex flex-col gap-[16px] lg:gap-[24px] w-full ">
        <div className="w-full lg:hidden bg-lightGray h-[1px]" />



<>
  
    <div className="flex sm:flex-nowrap flex-wrap items-center w-full justify-between sm:h-[44px] gap-[20px] sm:gap-[50px]">
    <h4 className="w-full h-[48px] gap-x-2 text-[14px] transition-all duration-300 ease-in-out leading-[19px] text-black py-[4px] flex flex-row items-center">
          <span className="order-2 text-[18px] font-bold">{currentSelected?.name}</span>
          {currentSelected?.logo ? (
            <Image
              src={currentSelected.logo}
              alt="Logo"
              width={64}
              height={64}
              className="w-16 h-16 order-1 shadow-[0px_0px_6px_0px_#5a60f629]"
            />
          ) : null}
        </h4>
   {isMyBusiness && <div className="flex items-center gap-[10px] md:gap-[16px]">
      {options.map((op, index) => (
        <div
          key={index}
          onClick={() =>
            setActiveOpt((prevState) =>
              prevState.includes(op.id)
                ? prevState.filter((id) => id !== op.id)
                : [...prevState, op.id]
            )
          }
          className={`h-[50px] flex items-center hover:border-green transition-all duration-300 ease-in-out cursor-pointer gap-[10px] rounded-[16px] py-[8px] px-[16px] border-[1.5px] ${
            activeOpt.includes(op.id)
              ? "border-green bg-lightGreen"
              : "bg-white border-lightGray"
          }`}
        >
          {activeOpt.includes(op.id) && (
            <CheckCircleIcon className="h-[21px] w-[21px] text-green" />
          )}
          <span className="text-[16px] leading-[21px] lg:inline-flex hidden font-[400] text-black">
            {op.name}
          </span>
          {op.icon}
        </div>
      ))}
                  <div className="flex items-center gap-[10px] md:gap-[16px]">
                  <div
              onClick={() => setShowCreate(true)}
              className="h-[40px] border border-[#29292E] cursor-pointer text-[14px] font-[500] text-[#29292E] py-[8px] px-[16px] rounded-[8px] flex items-center gap-[8px]"
            >
              <GoPlus className="text-[16px]" />
              <span>إضافة</span>
            </div>
            </div>
    </div>}

            </div>
          <div className="w-full bg-lightGray h-[1px] mb-[-8px]" />
</>
          





        {/* Filters  */}
       { showOptionsBar && <div className="flex items-center justify-between gap-[20px] flex-wrap">
          <div className="flex items-center gap-[16px]">
            {tabs.map((t, index) => { 
              if(t.name == "تحليلات النصوص" && isMyBusiness == false){
                return <></>
              }
              return (
                <div
                key={index}
                onClick={() => setActiveTab(t.id)}
                className={`h-[44px] flex items-center cursor-pointer hover:border-main border transition-all duration-300 ease-in-out gap-[8px]  text-[16px] leading-[21px] rounded-[16px] py-[8px] px-[16px] ${
                  t.id == activeTab
                  ? "bg-main  text-white border-main"
                  : "bg-bgClr text-black border-transparent hover:bg-[#ECECFE]"
                }`}
                >
                {t.icon}
                <span className="">{t.name}</span>
              </div>
              )

})}
          </div>
          
          <div className="flex items-center gap-[16px]">
            <div className="relative hidden lg:flex items-center  justify-between border hover:border-green transition-all duration-300 ease-in-out text-[14px] leading-[19px] font-[500] text-black border-lightGray bg-white px-[16px] py-[8px] rounded-[8px]  w-full gap-[14px] max-w-[250px] ">
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
              <span className="text-[16px] hidden lg:inline-flex leading-[21px] font-[400] text-black">
                فلتر
              </span>
              <AdjustmentsHorizontalIcon className="h-[22px] w-[22px] text-black" />
            </div>
            <div
              className={`h-[44px] flex items-center cursor-pointer gap-[10px] hover:border-green transition-all duration-300 ease-in-out rounded-[16px] py-[8px] px-[16px] border-[1.5px] bg-white border-lightGray`}
            >
              <span className="text-[16px] hidden lg:inline-flex leading-[21px] font-[400] text-black">
                تقارير
              </span>
              <ArrowTopRightOnSquareIcon className="h-[22px] w-[22px] text-black" />
            </div>
          </div>
        </div>}
      </div>
      {activeTab == "1" && (
        <div className="flex border-b lg:hidden sticky top-[-2px] z-[999] left-0 right-0 bg-white border-lightGray w-full">
          {tabsMob.map((tab, index) => (
            <div
              onClick={() => setMobTab(tab.id)}
              className={`cursor-pointer p-[20px] h-[44px] hover:bg-[#ECECFE] transition-all duration-300 ease-in-out border-b ${
                tab.id == mobTab
                  ? "bg-[#ECECFE] border-[#5A60F6] text-main"
                  : "border-transparent text-[#606265]"
              } text-[14px] leading-[19px] font-[500] flex items-center justify-center`}
              key={index}
            >
              {tab.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MainContainer;
