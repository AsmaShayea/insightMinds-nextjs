"use client";

import React, { useEffect, useState } from "react";
import { Logo, LogoS } from "./Icons";
import {
  Cog8ToothIcon,
  PlusIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useGlobalContext } from "@/context/GlobalContext";
import axios from "axios";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";



const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { showSideM, toggleSidebar, setShowCreate } = useGlobalContext();


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

   const activeId = window.location.pathname.split("/").at(-1)
  





  return (
    <>
      <div
        className={`bg-black/60 ${
          showSideM ? "right-0 left-0 top-0 bottom-0" : "right-[-100%]"
        }  overflow-hidden fixed lg:hidden h-full w-full z-[1009] `}
        onClick={() => toggleSidebar()}
      ></div>

      <div
        className={`fixed lg:sticky  z-[9999] ${
          showSideM ? "top-0 right-0 left-0" : "right-[-100%] lg:right-auto"
        } overflow-hidden lg:overflow-visible flex-shrink-0 transition-all duration-300 ease-in-out ${
          showSidebar
            ? "lg:max-w-[280px] max-w-[380px]"
            : "max-w-[380px] lg:max-w-[106px]"
        }  w-full py-[48px] px-[24px] bg-white shadow-sidebar h-[100vh]`}
      >
        <div className="w-full h-full relative z-[999] flex flex-col items-center gap-[88px]">
          <div className="flex items-center lg:justify-center justify-between w-full">
            {showSidebar ? <Logo cl="h-[40px] lg:h-[52px]" /> : <LogoS />}
            <button
              className="w-6 h-6 lg:hidden cursor-pointer transition-all ease duration-300"
              onClick={toggleSidebar}
            >
              <div className="relative">
                <span
                  className="absolute top-0 left-0 inline-block w-full h-0.5 bg-[#0F172A] rounded transition-all ease duration-200"
                  style={{
                    transform: showSideM
                      ? "rotate(-45deg) translateY(0)"
                      : "rotate(0deg) translateY(6px)",
                  }}
                >
                  &nbsp;
                </span>
                <span
                  className="absolute top-0 left-0 inline-block w-full h-0.5 bg-[#0F172A] rounded transition-all ease duration-200"
                  style={{
                    opacity: showSideM ? 0 : 1,
                  }}
                >
                  &nbsp;
                </span>
                <span
                  className="absolute top-0 left-0 inline-block w-full h-0.5 bg-[#0F172A] rounded transition-all ease duration-200"
                  style={{
                    transform: showSideM
                      ? "rotate(45deg) translateY(0)"
                      : "rotate(0deg) translateY(-6px)",
                  }}
                >
                  &nbsp;
                </span>
              </div>
            </button>
          </div>

          <div className="flex flex-col w-full gap-[24px]">
            <Link
              href={"/dashboard"}
              onClick={() => toggleSidebar()}
              className={`w-full flex gap-[8px] items-center ${
                !showSidebar && "justify-center"
              } py-[8px] px-[16px] h-[48px]  text-white cursor-pointer bg-main rounded-full`}
            >
              <RectangleStackIcon className="h-[20px] w-[20px] " />
              <span
                className={`${
                  showSidebar ? "flex" : "hidden"
                } text-[14px] leading-[19px] font-[500] `}
              >
                حسابات عملي
              </span>
            </Link>
            <div className="w-full bg-lightGray h-[1px]" />
            <div
              className={`${
                showSidebar ? "flex" : "hidden"
              } flex-col gap-[16px]`}
            >
              <div className="flex items-center justify-between">
                <div className="text-gray text-[14px] leading-[18px] font-[400]">
                  المواضيع
                </div>
                <div
                  onClick={() => setShowCreate(true)}
                  className="flex gap-[8px]  items-center hover:text-main transition-all duration-300 ease-in-out text-black cursor-pointer"
                >
                  <PlusIcon className="h-[16px] w-[16px] " />
                  <span className="text-[14px] leading-[17px] font-[400]">
                    إضافة
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
              {data?.other_business?.map((link, index) => (
                  <Link
                
                    href={{
                      pathname: `/dashboard/${link?.id}`,
                      query: { myBusiness: link?.is_my_business ? "true" : "false", progressStatus : link?.progress_status == "completed" ? "completed" : "incomplete" },
                    }}
                    onClick={() => toggleSidebar()}
                    key={index}
                    className={`w-full h-[48px] gap-x-2  text-[14px] hover:text-main transition-all duration-300 ease-in-out leading-[19px] text-black py-[4px] flex flex-row items-center ${link?.id == activeId && "bg-bgClr"}`}
                  >
                    <span className="order-2">
                      {link?.name}
                      </span>
                      <Image src={link?.logo.replace('"','')} alt="Insights-Minds" height={500} width={500} className="size-10 order-1"/>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={`${
                showSidebar ? "block" : "hidden"
              } w-full bg-lightGray h-[1px] `}
            />
            <Link
              href={"/dashboard/settings"}
              
              onClick={() => toggleSidebar()}
              className={`px-[16px] py-[8px] hover:text-main transition-all duration-300 ease-in-out  flex gap-[8px] items-center ${
                !showSidebar && "justify-center"
              } cursor-pointer text-black h-[48px]`}
            >
              <Cog8ToothIcon className="h-[20px] w-[20px] " />
              <span
                className={`${
                  showSidebar ? "flex" : "hidden"
                } text-[14px] leading-[19px] font-[500]`}
              >
                الإعدادات
              </span>
            </Link>
          </div>
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="bg-bgClr absolute z-[999] left-[-45px] transition-all duration-300 ease-in-out hover:bg-[#E9ECEF] hover:border-[#CED4DA] hover:shadow-sm shadow-[#7C91B01A] top-[70px] h-[44px] w-[44px] cursor-pointer hidden lg:flex items-center justify-center p-[10px] rounded-full border border-lightGray gap-[10px]"
          >
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[5px]">
              <div
                className={`bg-black transition-all ease-in-out duration-300  ${
                  showSidebar ? "w-[1.7px] h-[4px]" : "w-[2px] h-[14px]"
                } rounded-[10px]`}
              />
              <div
                className={`bg-black transition-all ease-in-out duration-300 h-[14px] w-[2px] ${
                  showSidebar ? "hidden" : "inline-block"
                } rounded-[10px]`}
              />
              <div
                className={`bg-black transition-all ease-in-out duration-300 h-[14px] w-[2px] rounded-[10px]`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
