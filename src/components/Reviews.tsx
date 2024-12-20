"use client";

import React, { useMemo, useState } from "react";
import ReviewBox from "./ReviewBox";
import { useSearchParams } from "next/navigation";

const tabs = [
  {
    id: "Positive",
    name: "إيجابي",
  },
  {
    id: "Neutral",
    name: "محايد",
  },
  {
    id: "Negative",
    name: "سلبي",
  },
];

const Reviews = ({ data, loading }: { data: any; loading: boolean }) => {

  const searchParams = useSearchParams();
  const isMyBusiness = searchParams.get("myBusiness");

  const [activeTab, setActiveTab] = useState("Positive");

  // Memoize the reviews based on the active tab
  const reviewsToDisplay = useMemo(() => {
    if (loading) return [];
    switch (activeTab) {
      case "Positive":
        return data?.positive_reviews || [];
      case "Negative":
        return data?.negative_reviews || [];
      case "Neutral":
        return data?.neutral_reviews || [];
      default:
        return [];
    }
  }, [activeTab, data, loading]);

  // console.log(data);

  return (
    <div  className="flex flex-col gap-[16px] w-full lg:w-[42%]">
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[16px] leading-[21px] font-[600] text-black">
        آراء العملاء
        </h2>
        <div className="flex border-b border-lightGray w-full">
          {tabs.map((tab, index) => (
            <div
              onClick={() => setActiveTab(tab.id)}
              className={`px-[16px] cursor-pointer py-[8px] h-[34px] hover:bg-[#ECECFE] transition-all duration-300 ease-in-out border-b ${
                tab.id == activeTab
                  ? "bg-[#ECECFE] border-[#5A60F6] text-main"
                  : "border-transparent text-black"
              } text-[14px] leading-[19px] font-[500] flex items-center justify-center`}
              key={index}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[16px] lg:max-h-[1235px] lg:overflow-y-auto custom_scroll">
        {loading ? (
         <div className="text-[rgb(90_96_246)] text-opacity-75 pt-4">
         جاري تحميل التعليقات ...
       </div>
        ) : (
          reviewsToDisplay.map((review: any,index:number) => (
            <ReviewBox
              key={`${review?.id}-${activeTab.toLowerCase()}-${index}`}
              review={review}
              isMyBusiness={isMyBusiness}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
