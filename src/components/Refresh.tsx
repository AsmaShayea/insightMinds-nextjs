import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

const Refresh = () => {
  return (
    <div className="px-[20px] pt-[13px] lg:pt-[20px] lg:px-[48px]">
      <div className="bg-[#FDE3D6] gap-[8px] cursor-pointer rounded-[8px] p-[8px] w-full h-[34px] flex items-center justify-center">
        <FiRefreshCcw className="text-[16px] text-[#1E1E1E]" />
        <span className="text-[14px] leading-[19px] font-[500]">
          جاري جمع البيانات وتحديثها
        </span>
      </div>
    </div>
  );
};

export default Refresh;
