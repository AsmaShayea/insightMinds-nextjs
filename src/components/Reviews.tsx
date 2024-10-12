"use client";

import React, { useState } from "react";
import ReviewBox from "./ReviewBox";

const tabs = [
  {
    id: "Positive",
    name: "ايجابي",
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
  const [activeTab, setActiveTab] = useState("Positive");

  console.log(data);

  return (
    <div className="flex flex-col gap-[16px] w-[42%]">
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[16px] leading-[21px] font-[600] text-black">
          اراء العملاء
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
      <div className="flex flex-col gap-[16px] ">
        {loading ? (
          <div>Laoding reviews</div>
        ) : (
          <>
            {activeTab === "Positive" &&
              data?.positive_reviews?.map((review: any, index: number) => (
                <ReviewBox review={review} key={index} />
              ))}
            {activeTab === "Negative" &&
              data?.negative_reviews?.map((review: any, index: number) => (
                <ReviewBox review={review} key={index} />
              ))}
            {activeTab === "Neutral" &&
              data?.neutral_reviews?.map((review: any, index: number) => (
                <ReviewBox review={review} key={index} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
