import React from "react";

const TableMain = ({ data, type }: { data: any; type: string }) => {
  return (
    <div className="w-full grid grid-cols-3 max-h-[360px] custom_scroll h-full overflow-y-auto relative border border-lightGray rounded-[8px] overflow-hidden">
      {data?.map((t: any, index: number) => (
        <div key={index} className="flex flex-col w-full">
          <div
            className={`text-[14px] leading-[19px] font-[600] text-black sticky top-0 left-0 right-0 w-full z-[10] flex items-center justify-center text-center ${
              type == "positive" ? "bg-lightGreen" : "bg-[#FFE1E7]"
            } ${index === data?.length -1 ? "":"border-l"} border-lightGray border-b py-[12px] px-[16px] h-[42px]`}
          >
            {t?.aspect}
          </div>
          {t?.opinions?.map((d, i) => (
            <div
              key={d}
              className={`text-[14px] ${index === data?.length -1 ? "":"border-l"} leading-[19px] line-clamp-1 font-[400] text-black flex items-center justify-center text-center border-lightGray border-b py-[12px] px-[16px] h-[42px]`}
            >
              {d}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableMain;
