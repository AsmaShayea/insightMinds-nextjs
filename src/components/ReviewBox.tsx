"use client";

import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/16/solid";

import {
  ArrowUturnLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import EditReviewPopup from "./EditReviewPopup";
import ReviewPopup from "./ReviewPopup";

const ReviewBox = ({ review }: { review: any }) => {
  const [showReplyPopup, setShowReplyPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  return (
    <div className="bg-white shadow-sidebar p-[16px] rounded-[16px] gap-[10px] flex flex-col ">
      <div className="flex gap-[20px] w-full">
        <div className="w-[50px] h-[50px] flex-shrink-0 rounded-full aspect-[1] overflow-hidden">
          <Image
            src={review?.image}
            width={100}
            height={100}
            alt=""
            className="w-full h-full object-cover aspect-[1] rounded-full"
          />
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-[14px] leading-[19px] font-[500] text-black">
              {review.name}
            </h3>
            <div className="flex items-center gap-[2px]">
              {Array(review.rating)
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
            dangerouslySetInnerHTML={{ __html: review.review_text }}
          ></div>

          <div className="text-gray text-[12px] leading-[15px] font-[400]">
            {review.date}
          </div>
          <div className="mt-[10px] flex items-center flex-wrap justify-end gap-[8px]">
            {review?.aspects?.map((tag: any, index: number) => (
              <button
                key={index}
                className={`text-[12px] leading-[16px] font-[400] ${
                  tag.polarity == "positive"
                    ? "text-black bg-green"
                    : "bg-[#FA2057] text-white"
                } p-[8px] h-[32px] rounded-[12px]`}
              >
                {tag.aspect}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-lightGray h-[1px]" />
      <div className="flex items-start gap-[24px]">
        <div
          onClick={() => setShowEditPopup(true)}
          className="flex items-center gap-[8px] cursor-pointer"
        >
          <PencilSquareIcon className="w-[20px] h-[20px] text-black" />
          <span className="text-[14px] leading-[19px] text-black">تعديل</span>
        </div>
        <div
          onClick={() => setShowReplyPopup(true)}
          className="flex items-center gap-[8px] cursor-pointer"
        >
          <ArrowUturnLeftIcon className="w-[20px] h-[20px] text-black" />
          <span className="text-[14px] leading-[19px] text-black">
            رد علي التعليق
          </span>
        </div>
      </div>
      {showReplyPopup && (
        <EditReviewPopup
          key={review?.id}
          id={review?.id}
          data={review}
          setShow={setShowReplyPopup}
          show={showReplyPopup}
        />
      )}
      {showEditPopup && (
        <ReviewPopup
          key={`edit-${review?.id}`}
          id={review?.id}
          data={review}
          setShow={setShowEditPopup}
        />
      )}
    </div>
  );
};

export default ReviewBox;
