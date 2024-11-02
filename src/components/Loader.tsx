import Image from "next/image";
import React from "react";
import loader from "../../public/loader.gif"

const Loader = () => {
  return (
    <div className="  z-[9999] bg-[#FFFFFFE5] backdrop-blur-[12px] flex items-center justify-center flex-col gap-[53px] p-[30px] size-full">
      <div className="relative size-full flex items-center justify-center flex-col ">

      <Image
        src={loader}
        alt=""
        className="w-[160px] h-[160px] object-top absolute"
        />
      <div className="text-[24px] leading-[32px] font-[622] text-black mt-32">
        جاري تحديث البيانات
      </div>
        </div>

    </div>
  );
};

export default Loader;
