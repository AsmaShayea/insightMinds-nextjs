import { QATARIcon, UAEIcon } from "@/assets/constants";
import CountrySelect from "@/components/PhoneNumberInput";
import SelectInput from "@/components/SelectInput";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="bg-bgClr min-h-dvh">
      <div className="flex items-center justify-center bg-white py-5 shadow-sidebar">
        <Link href={"/"}>
          <Image src="/Logo.svg" alt="brand" width={121.71} height={48} />
        </Link>
      </div>
      <div className="py-28">
        <div className="mx-auto max-w-[612px] bg-white rounded-2xl p-8 shadow-signup">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 border-b border-[#000000]/5 pb-5">
              <h3 className="font-bold text-black text-2xl leading-8 text-center">البيانات الاساسية</h3>
              <p className="font-medium text-black/80 text-base leading-5 text-center">تسجيل حساب جديد</p>
            </div>
            <div className="w-full max-w-[317px] mx-auto flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm leading-[18px] text-right font-medium">
                  اسم الشركة
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="اكتب اسم الشركة"
                  className="w-full rounded-2xl p-4 border border-lightGray outline-none focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm leading-[18px] text-right font-medium">
                  البلد
                </label>
                <SelectInput
                  placeholder={"اكتب اسم الشركة"}
                  options={[
                    {
                      label: (
                        <div className="flex items-center gap-2">
                          <Image src="/flag-one.png" alt="flag-one" width={24} height={20} className="rounded-sm" />
                          <span className="text-sm leading-[18px] font-regular text-right">
                            المملكة العربية السعودية
                          </span>
                        </div>
                      ),
                      value: "المملكة العربية السعودية",
                    },
                    {
                      label: (
                        <div className="flex items-center gap-2">
                          <div className="rounded-sm overflow-hidden h-5 w-6">
                            <UAEIcon />
                          </div>
                          <span className="text-sm leading-[18px] font-regular text-right">لتكتشف</span>
                        </div>
                      ),
                      value: "لتكتشف",
                    },
                    {
                      label: (
                        <div className="flex items-center gap-2">
                          <div className="rounded-sm overflow-hidden h-5 w-6">
                            <QATARIcon />
                          </div>
                          <span className="text-sm leading-[18px] font-regular text-right">البشرية</span>
                        </div>
                      ),
                      value: "البشرية",
                    },
                  ]}
                  menuPlacement={"top"}
                  className={
                    "w-full rounded-2xl p-4 border border-lightGray outline-none focus:outline-none items-center"
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm leading-[18px] text-right font-medium">
                  المدينة
                </label>
                <SelectInput
                  placeholder={"اكتب اسم الشركة"}
                  options={[
                    {
                      label: "الرياض",
                      value: "الرياض",
                    },
                    {
                      label: "لتكتشف",
                      value: "لتكتشف",
                    },
                    {
                      label: "البشرية",
                      value: "البشرية",
                    },
                    {
                      label: "الهائمون ",
                      value: "الهائمون ",
                    },
                    {
                      label: "لتكتشف ",
                      value: "لتكتشف ",
                    },
                  ]}
                  menuPlacement={"top"}
                  className={
                    "w-full rounded-2xl p-4 border border-lightGray outline-none focus:outline-none items-center"
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm leading-[18px] text-right font-medium">
                  رقم الهاتف
                </label>
                <div className="flex border border-lightGray rounded-2xl">
                  <input
                    type="text"
                    id="name"
                    placeholder="05"
                    className="w-full py-4 px-4 text-left outline-none focus:outline-none rounded-2xl"
                  />
                  <CountrySelect
                    className={"w-28 pl-4 py-4  outline-none focus:outline-none items-center flex-row-reverse flex"}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="/dashboard"
                className="py-3.5 px-4 bg-main hover:bg-[#4f54da] text-white rounded-full min-w-[127px] min-h-11 text-sm leading-[18px] text-center font-medium transition-all ease-in-out duration-200"
              >
                التالي
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
