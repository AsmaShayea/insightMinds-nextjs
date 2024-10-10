"use client";
import { StarIcon } from "@heroicons/react/16/solid";
import {
  ArrowUturnLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

const tabs = [
  {
    id: "1",
    name: "ايجابي",
  },
  {
    id: "2",
    name: "محايد",
  },
  {
    id: "3",
    name: "سلبي",
  },
];

const data = [
  {
    pic: "/review.png",
    name: "",
    stars: 5,
    text: "“تجربة رائعة! الطعام لذيذ جدًا والخدمة ممتازة. جلسنا في الخارج والأجواء كانت مريحة وجميلة. بالتأكيد سأعود مرة أخرى!”",
    date: "10 أغسطس 2024,  1:30 م",
    tags: [
      {
        text: "الخدمة",
        status: "green",
      },
      {
        text: "الطعام",
        status: "green",
      },
    ],
  },
  {
    pic: "/review.png",
    name: "",
    stars: 5,
    text: "“تجربة رائعة! الطعام لذيذ جدًا والخدمة ممتازة. جلسنا في الخارج والأجواء كانت مريحة وجميلة. بالتأكيد سأعود مرة أخرى!”",
    date: "10 أغسطس 2024,  1:30 م",
    tags: [
      {
        text: "الخدمة",
        status: "green",
      },
      {
        text: "الطعام",
        status: "green",
      },
      {
        text: "الطعام",
        status: "red",
      },
    ],
  },
  {
    pic: "/review.png",
    name: "",
    stars: 5,
    text: "“تجربة رائعة! الطعام لذيذ جدًا والخدمة ممتازة. جلسنا في الخارج والأجواء كانت مريحة وجميلة. بالتأكيد سأعود مرة أخرى!”",
    date: "10 أغسطس 2024,  1:30 م",
    tags: [
      {
        text: "الخدمة",
        status: "green",
      },
      {
        text: "الطعام",
        status: "green",
      },
    ],
  },
  {
    pic: "/review.png",
    name: "",
    stars: 5,
    text: "“تجربة رائعة! الطعام لذيذ جدًا والخدمة ممتازة. جلسنا في الخارج والأجواء كانت مريحة وجميلة. بالتأكيد سأعود مرة أخرى!”",
    date: "10 أغسطس 2024,  1:30 م",
    tags: [
      {
        text: "الخدمة",
        status: "green",
      },
      {
        text: "الطعام",
        status: "green",
      },
      {
        text: "الطعام",
        status: "red",
      },
    ],
  },
  {
    pic: "/review.png",
    name: "",
    stars: 5,
    text: "“تجربة رائعة! الطعام لذيذ جدًا والخدمة ممتازة. جلسنا في الخارج والأجواء كانت مريحة وجميلة. بالتأكيد سأعود مرة أخرى!”",
    date: "10 أغسطس 2024,  1:30 م",
    tags: [
      {
        text: "الخدمة",
        status: "green",
      },
      {
        text: "الطعام",
        status: "green",
      },
    ],
  },
];

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="flex flex-col gap-[16px] w-[42%]">
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[16px] leading-[21px] font-[600] text-black">
          اراء العملاء
        </h2>
        <div className="flex border-b border-lightGray w-full">
          {tabs.map((tab, index) => (
            <div
              className={`px-[16px] cursor-pointer py-[8px] h-[34px] border-b ${
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
        {data.map((reviw, index) => (
          <div
            key={index}
            className="bg-white shadow-sidebar p-[16px] rounded-[16px] gap-[10px] flex flex-col "
          >
            <div className="flex gap-[20px] w-full">
              <div className="w-[50px] h-[50px] flex-shrink-0 rounded-full aspect-[1] overflow-hidden">
                <Image
                  src={reviw.pic}
                  width={100}
                  height={100}
                  alt=""
                  className="w-full h-full object-cover aspect-[1] rounded-full"
                />
              </div>
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-[14px] leading-[19px] text-[500] text-black">
                    {reviw.name}
                  </h3>
                  <div className="flex items-center gap-[2px]">
                    {Array(reviw.stars)
                      .fill(1)
                      .map((st) => (
                        <StarIcon
                          key={st}
                          className="h-[20px] w-[20px] text-[#FFCF09]"
                        />
                      ))}
                  </div>
                </div>
                <div
                  className="text-[14px] leading-[19px] font-[400]"
                  dangerouslySetInnerHTML={{ __html: reviw.text }}
                ></div>

                <div className="text-gray text-[12px] leading-[15px] font-[400]">
                  {reviw.date}
                </div>
                <div className="mt-[10px] flex items-center justify-end gap-[8px]">
                  {reviw.tags.map((tag, index) => (
                    <button
                      key={index}
                      className={`text-[12px] leading-[16px] font-[400] ${
                        tag.status == "green"
                          ? "text-black bg-green"
                          : "bg-[#FA2057] text-white"
                      } p-[8px] h-[32px] rounded-[12px]`}
                    >
                      {tag.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full bg-lightGray h-[1px]" />
            <div className="flex items-start gap-[24px]">
              <div className="flex items-center gap-[8px] cursor-pointer">
                <PencilSquareIcon className="w-[20px] h-[20px] text-black" />
                <span className="text-[14px] leading-[19px] text-black">
                  تعديل
                </span>
              </div>
              <div className="flex items-center gap-[8px] cursor-pointer">
                <ArrowUturnLeftIcon className="w-[20px] h-[20px] text-black" />
                <span className="text-[14px] leading-[19px] text-black">
                  رد علي التعليق
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
