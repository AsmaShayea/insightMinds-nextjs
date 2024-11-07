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
      <div className="py-20 sm:py-20 px-4 md:px-0">
        <div className="mx-auto max-w-[612px] bg-white rounded-2xl p-8 shadow-signup">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center gap-2 border-b border-[#000000]/5 pb-5">
              <h3 className="font-bold text-black text-2xl leading-8 text-center">تسجيل دخول</h3>
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
                      value: " المملكة العربية السعودية",
                      label: " المملكة العربية السعودية",
                      flag: "https://catamphetamine.gitlab.io/country-flag-icons/3x2/SA.svg",
                    },
                    {
                      label: "الإمارات العربية المتحدة",
                      value: "الإمارات العربية المتحدة",
                      flag: "https://catamphetamine.gitlab.io/country-flag-icons/3x2/AE.svg",
                    },
                    {
                      label: "مملكة البحرين",
                      value: "مملكة البحرين",
                      flag: "https://catamphetamine.gitlab.io/country-flag-icons/3x2/QA.svg",
                    },
                  ]}
                  defaultValue={{
                    value: " المملكة العربية السعودية",
                    label: " المملكة العربية السعودية",
                    flag: "https://catamphetamine.gitlab.io/country-flag-icons/3x2/SA.svg",
                  }}
                  menuPlacement={"top"}
                  className={
                    "w-full rounded-2xl p-4 border border-lightGray outline-none focus:outline-none items-center"
                  }
                />
              </div>
              {/* <div className="flex flex-col gap-2">
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
                      label: "الخبر",
                      value: "الخبر",
                    },
                    {
                      label: "الدمام",
                      value: "الدمام",
                    },
                    {
                      label: "جدة ",
                      value: "جدة ",
                    },
                    {
                      label: "مكة",
                      value: "مكة ",
                    },
                  ]}
                  defaultValue={{
                    label: "الرياض",
                    value: "الرياض",
                  }}
                  menuPlacement={"top"}
                  className={
                    "w-full rounded-2xl p-4 border border-lightGray outline-none focus:outline-none items-center"
                  }
                />
              </div> */}
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
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
