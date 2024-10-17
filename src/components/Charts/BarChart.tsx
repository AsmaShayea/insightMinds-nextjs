import React from "react";

const BarChart = ({ data }: { data: any }) => {
  return (
    <div className="bg-white shadow-sidebar h-[220px] w-full p-[16px] rounded-[16px] flex flex-col justify-between gap-[16px]">
      <div className="text-[16px] leading-[21px] text-black font-[600]">
        المشاعر حسب الموضوع{" "}
      </div>
      <div className="flex flex-col items-center gap-[16px]">
        {data?.map((d: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between w-full relative gap-[10px]"
          >
            <div className="text-[14px] leading-[19px] font-semibold text-black">
              {d.aspect}
            </div>
            <div className="max-w-[240px] w-full flex h-[20px] rounded-full overflow-hidden text-[10px] leading-[14px] font-[500]">
              <div
                style={{ width: `${d?.positive?.percentage}%` }}
                className={`flex items-center justify-center bg-green w-[${d?.positive?.percentage}%]`}
              >
                {d?.positive?.count}
              </div>
              <div
                style={{ width: `${d?.negative?.percentage}%` }}
                className={`flex items-center justify-center bg-red w-[${d?.negative?.percentage}%]`}
              >
                {d?.negative?.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
