import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const TabTwo = ({ data }: { data: any }) => {
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);

  return (
    <div className="w-full flex flex-col gap-[16px] p-[20px] lg:p-[48px]">
      <div className="flex flex-col gap-[16px] ">
        <h3 className="text-[20px] text-black leading-[27px] font-medium">
          مواضيع
        </h3>
        <div className="relative max-w-[320px]">
          <select className="bg-[#F6F6F6] border  outline-none appearance-none w-full border-lightGray p-[16px] rounded-[16px] ">
            <option value="1">اسم النوع</option>
            <option value="2">اسم النوع</option>
            <option value="3">اسم النوع</option>
          </select>
          <ChevronDownIcon className="h-[20px] w-[20px] text-black absolute bottom-[14px] left-[14px]" />
        </div>
      </div>
      <ul className="flex flex-col gap-[16px]">
        <li
          className="flex flex-col bg-white gap-[8px] p-[24px] rounded-[16px]"
          style={{ boxShadow: "0px 12px 64px 0px #A3B5D433" }}
        >
          <h3 className="text-[20px] text-black leading-[27px] font-medium">
            1: ملخص المراجعة{" "}
          </h3>{" "}
          <div
            dangerouslySetInnerHTML={{ __html: data?.summary }}
            className="text-black text-[16px] leading-[28px] font-normal"
          ></div>
        </li>
        <li
          className="flex flex-col bg-white gap-[8px] p-[24px] rounded-[16px]"
          style={{ boxShadow: "0px 12px 64px 0px #A3B5D433" }}
        >
          <h3 className="text-[20px] text-black leading-[27px] font-medium">
            2: اتجاهات تغذية العملاء{" "}
          </h3>{" "}
          <div
            dangerouslySetInnerHTML={{ __html: data?.recommendations }}
            className="text-black text-[16px] leading-[28px] font-normal"
          ></div>
        </li>
        <li
          className="flex flex-col bg-white gap-[8px] p-[24px] rounded-[16px]"
          style={{ boxShadow: "0px 12px 64px 0px #A3B5D433" }}
        >
          <h3 className="text-[20px] text-black leading-[27px] font-medium">
            3: معدل الاستجابة{" "}
          </h3>{" "}
          <div
            dangerouslySetInnerHTML={{ __html: data?.ideas }}
            className="text-black text-[16px] leading-[28px] font-normal"
          ></div>
        </li>
      </ul>
    </div>
  );
};

export default TabTwo;
