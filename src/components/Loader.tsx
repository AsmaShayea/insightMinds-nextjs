import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 z-[9999] bg-[#FFFFFFE5] backdrop-blur-[12px] flex items-center justify-center flex-col gap-[53px] p-[30px] w-full h-full">
      <Image
        src={"/loader.gif"}
        alt=""
        width={600}
        height={500}
        className="w-[160px] object-cover h-[160px]"
      />
      <div className="text-[24px] leading-[32px] font-[622] text-black">
        جاري تحديث البيانات
      </div>
    </div>
  );
};

export default Loader;
