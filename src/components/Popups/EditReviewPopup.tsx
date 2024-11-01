"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const EditReviewPopup = ({
  id,
  data,
  show,
  setShow,
}: {
  id: string;
  data: any;
  show: boolean;
  setShow: any;
}) => {
  const [reply, setReply] = useState();
  const [loading, setLoading] = useState(false);
  const [replyText, setReplyText] = useState(data?.owner_reply || "");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://16.171.196.223:8000/get-reply/${id}`
      );
      const result = await response.data;

      setReply(result);
      setReplyText(result?.reply);

      // console.log(reply, "responsed reply");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // fetchData();

  const handleCorrectReply = async () =>{
    try {
      const rs = await axios.post(
        'http://16.171.196.223:8000/correct-reply',
        {
          reply_text: replyText
        }
      )

      setReplyText(rs?.data?.corrected_reply);



    } catch (error) {
      console.error("Error while Correcting Reply:", error);
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center fixed z-[999] p-4 overflow-y-auto inset-0  bg-black/20">
      <div
        className="max-w-[500px] p-[24px] w-full bg-white rounded-[24px] gap-[24px] flex flex-col "
        style={{ boxShadow: "0px 12px 64px 0px #A3B5D433" }}
      >
        <h4 className="text-[20px] leading-[24px] text-[#29292E] font-[600] ">
          رد علي التعليق
        </h4>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="bg-[#EAEAEC80] p-[16px] rounded-[16px] flex flex-col gap-[8px]">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-[14px] leading-[19px] font-[700] text-black">
                {data?.name}
              </h3>
              <div className="flex items-center gap-[2px]">
                {Array(data?.rating)
                  .fill(1)
                  .map((st) => (
                    <StarIcon
                      key={st}
                      className="h-[20px] w-[20px] text-[#FFCF09]"
                    />
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div
                className="text-[14px] leading-[19px] font-[400]"
                dangerouslySetInnerHTML={{ __html: data?.review_text }}
              >
                {/* “تجربة رائعة! الطعام لذيذ جدًا والخدمة ممتازة. جلسنا في الخارج
                والأجواء كانت مريحة وجميلة. بالتأكيد سأعود مرة أخرى!” */}
              </div>
              <div className="text-gray text-[12px] leading-[15px] font-[400]">
                {data?.date}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] text-[14px] w-full leading-[19px] text-black font-[500]">
            <label htmlFor="" className="">
              اكتب الرد
            </label>
            <textarea
              placeholder="اكتب الرد هنا"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="bg-white border outline-none w-full custom_scroll  border-lightGray p-[16px] rounded-[16px] "
            ></textarea>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-[10px]">
            <div
              onClick={() => fetchData()}
              className="bg-[#F4E8FF] hover:border-[#debbff] border border-transparent px-[16px] cursor-pointer py-[12px] gap-[8px] flex items-center rounded-[24px]"
            >
              {loading ? (
                <>
                  {" "}
                  <Image
                    src={"/loader.gif"}
                    alt=""
                    width={100}
                    height={100}
                    className="w-[73px] h-[25px] object-cover"
                  />
                </>
              ) : (
                <>
                  <Image
                    src={"/brain.svg"}
                    alt=""
                    width={100}
                    height={100}
                    className="w-[22px] object-cover"
                  />
                  <span className="text-[15px] font-bold">
                    كتابة الرد بواسطة الذكاء الاصطناعي
                  </span>
                </>
              )}
            </div>
            <button disabled={replyText.length < 1} onClick={handleCorrectReply} className={`bg-[#EFEFF0]  text-[14px] leading-[19px] font-[500] border border-transparent px-[16px] cursor-pointer py-[18px] gap-[8px] flex items-center rounded-[48px] opacity-50 ${replyText.length > 0 && "hover:border-[#dbdbdb] !opacity-100"}`}>
              تصحيح النص
            </button>
          </div>
          <div className="w-full bg-lightGray h-[1px]" />
          <div className="flex items-center justify-end gap-[16px]">
            <button
              onClick={() => setShow(false)}
              className="text-[14px] text-[#29292E] leading-[19px] font-medium"
            >
              الغاء
            </button>
            <button className="text-[14px] leading-[19px] text-white rounded-[48px] px-[16px] py-[8px] bg-[#5A60F6] font-medium">
              رد علي التعليق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReviewPopup;
