"use client"

import { useGlobalContext } from "@/context/GlobalContext";
import React from "react";
import { Logo } from "./Icons";


const MobileNav = () => {
    const { toggleSidebar } = useGlobalContext();
  return (
    <div className="flex items-center sticky py-[12px] px-[20px] h-[70px] top-0 left-0 right-0 bg-white z-[999] justify-between lg:hidden w-full">
      <div className="flex items-center mt-[10px]">
        <Logo cl="!h-[40px]" />
      </div>
      <button
        className="w-6 h-6 cursor-pointer transition-all ease duration-300"
        onClick={toggleSidebar}
      >
        <div className="relative">
          <span
            className="absolute top-0 left-0 inline-block w-full h-0.5 bg-[#0F172A] rounded transition-all ease duration-200"
            style={{
              transform: false
                ? "rotate(-45deg) translateY(0)"
                : "rotate(0deg) translateY(6px)",
            }}
          >
            &nbsp;
          </span>
          <span
            className="absolute top-0 left-0 inline-block w-full h-0.5 bg-[#0F172A] rounded transition-all ease duration-200"
            style={{
              opacity: false ? 0 : 1,
            }}
          >
            &nbsp;
          </span>
          <span
            className="absolute top-0 left-0 inline-block w-full h-0.5 bg-[#0F172A] rounded transition-all ease duration-200"
            style={{
              transform: false
                ? "rotate(45deg) translateY(0)"
                : "rotate(0deg) translateY(-6px)",
            }}
          >
            &nbsp;
          </span>
        </div>
      </button>
    </div>
  );
};

export default MobileNav;
