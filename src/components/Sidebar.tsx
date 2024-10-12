"use client";

import React, { useState } from "react";
import { Logo, LogoS } from "./Icons";
import {
  Cog8ToothIcon,
  PlusIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    name: "مطعم ضي القمر",
    link: "/",
  },
  {
    name: "كافية الفيروز",
    link: "/",
  },
];

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div
      className={`sticky flex-shrink-0 transition-all duration-300 ease-in-out ${
        showSidebar ? "max-w-[280px]" : "max-w-[106px]"
      }  w-full py-[48px] px-[24px] bg-white shadow-sidebar h-[100vh]`}
    >
      <div className="w-full h-full relative flex flex-col items-center gap-[88px]">
        <div className="flex items-center">
          {showSidebar ? <Logo /> : <LogoS />}
        </div>

        <div className="flex flex-col w-full gap-[24px]">
          <Link
            href={"/dashboard"}
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
            className={`${showSidebar ? "flex" : "hidden"} flex-col gap-[16px]`}
          >
            <div className="flex items-center justify-between">
              <div className="text-gray text-[14px] leading-[18px] font-[400]">
                المواضيع
              </div>
              <div className="flex gap-[8px]  items-center hover:text-main transition-all duration-300 ease-in-out text-black cursor-pointer">
                <PlusIcon className="h-[16px] w-[16px] " />
                <span className="text-[14px] leading-[17px] font-[400]">
                  إضافة
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              {links.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className="w-full h-[48px]  text-[14px] hover:text-main transition-all duration-300 ease-in-out leading-[19px] text-black py-[4px] flex items-center"
                >
                  {link.name}
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
          className="bg-bgClr absolute left-[-45px] transition-all duration-300 ease-in-out hover:bg-[#E9ECEF] hover:border-[#CED4DA] hover:shadow-sm shadow-[#7C91B01A] top-[70px] h-[44px] w-[44px] cursor-pointer flex items-center justify-center p-[10px] rounded-full border border-lightGray gap-[10px]"
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
  );
};

export default Sidebar;
