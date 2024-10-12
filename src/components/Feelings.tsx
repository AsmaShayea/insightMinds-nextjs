import { FaceFrownIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import React from "react";
import { CiFaceMeh } from "react-icons/ci";
import Donut from "./Charts/Donut";

const Feelings = ({data}:{data:any}) => {
  return (
    <div className="p-[16px] rounded-[16px]  gap-[16px] flex flex-col bg-white shadow-sidebar">
      <div className="text-[16px] leading-[21px] text-black font-[600]">
        مشاعر استنادًا إلى المواضيع{" "}
      </div>
      <div className="grid grid-cols-2 gap-[16px] ">
        {data?.map((a:any, i:number) => (
            <div
              key={i}
              className="w-full border border-lightGray rounded-[16px] flex items-center justify-between gap-[8px] p-[16px]"
            >
              <div className="flex gap-[15px] items-center">
                <div className="flex flex-col justify-center items-center gap-[8px]">
                  <FaceSmileIcon className="w-[24px] h-[24px] text-green" />
                  <p className="text-[14px] leading-[19px] font-[700]">{a?.positive}%</p>
                  <p className="text-[14px] leading-[19px] font-[400]">
                    ايجابي
                  </p>
                </div>

                {/* <div className="flex flex-col justify-center items-center gap-[8px]">
                  <CiFaceMeh className="w-[24px] h-[24px] text-gray" />
                  <p className="text-[14px] leading-[19px] font-[700]">10%</p>
                  <p className="text-[14px] leading-[19px] font-[400]">محايد</p>
                </div> */}
                <div className="flex flex-col justify-center items-center gap-[8px]">
                  <FaceFrownIcon className="w-[24px] h-[24px] text-[#FA2057]" />
                  <p className="text-[14px] leading-[19px] font-[700]">{a?.negative}%</p>
                  <p className="text-[14px] leading-[19px] font-[400]">سلبي</p>
                </div>
              </div>
              <div className="relative">
                <div className="text-[12px] leading-[16px] font-[600] text-black absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
                  {a?.category}
                </div>
                <Donut  classN="!w-[80px] !h-[80px] " positiveCnt={a?.positive} negativeCnt={a?.negative} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Feelings;
