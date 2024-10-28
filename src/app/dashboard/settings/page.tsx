"use client";

import CreatePopup from "@/components/CreatePopup";
import Loader from "@/components/Loader";
import { useGlobalContext } from "@/context/GlobalContext";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";

const options = [
  {
    id: "1",
    name: "جوجل للأعمال",
  },
  {
    id: "2",
    name: "إنستجرام",
  },
  {
    id: "3",
    name: "اكس (تويتر)",
  },
];

const Settings = () => {
  // const [activeOpt, setActiveOpt] = useState("1");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { showCreate, setShowCreate } = useGlobalContext();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    type: "",
    subtype: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://16.171.196.223:8000/get-business-details/66eb726e1b898c92f06c243f"
        );
        const result = await response.data;

        setData(result?.data);
        setFormData({
          ...formData,
          name: result?.name,
          category: result?.category,
          type: result?.type,
          subtype: result?.subtypes,
          description: result?.description,
        });

        console.log(result, "responsed");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative h-full w-full">
      {showCreate && (
        <CreatePopup key={"123"} setShow={setShowCreate} show={showCreate} />
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="p-[48px] flex flex-col">
          <h2 className="text-[24px] leading-[32px] font-[600] text-black">
            الإعدادات
          </h2>
          <div className="mt-[50px] bg-white shadow-sidebar w-full p-[24px] flex flex-col gap-[16px] rounded-[16px]">
            <div className="flex flex-col gap-[8px] text-[14px] leading-[19px] text-black font-[500] max-w-[320px]">
              <label htmlFor="" className="">
                اسم الشركة
              </label>
              <input
                type="text"
                placeholder="Insight Minds"
                value={formData.name}
                name="name"
                onChange={handleChange}
                className="bg-white border outline-none w-full border-lightGray p-[16px] rounded-[16px] "
              />
            </div>
            <div className="flex flex-col gap-[8px] text-[14px] leading-[19px] text-black font-[500] max-w-[320px]">
              <label htmlFor="" className="">
                الفئة
              </label>
              <div className="flex items-center gap-[16px]">
                <input
                  type="text"
                  placeholder=""
                  value={formData.category}
                  onChange={handleChange}
                  name="category"
                  className="bg-white border outline-none w-full border-lightGray p-[16px] rounded-[16px] "
                />
                {/* {options.map((op, index) => (
                <div
                  key={index}
                  onClick={() => setActiveOpt(op.id)}
                  // onClick={() =>
                  //   setActiveOpt((prevState) =>
                  //     prevState.includes(op.id)
                  //       ? prevState.filter((id) => id !== op.id)
                  //       : [...prevState, op.id]
                  //   )
                  // }
                  className={`h-[44px] flex items-center cursor-pointer gap-[10px] rounded-[16px] py-[8px] px-[16px] border-[1.5px] ${
                    activeOpt.includes(op.id)
                      ? "border-green bg-lightGreen"
                      : "bg-white border-lightGray"
                  }`}
                >
                  {activeOpt.includes(op.id) && (
                    <CheckCircleIcon className="h-[19px] w-[19px] text-green" />
                  )}
                  <span className="text-[16px] leading-[21px] font-[400] text-black">
                    {op.name}
                  </span>
                </div>
              ))} */}
              </div>
            </div>
            <div className="flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] max-w-[320px]">
              <label htmlFor="" className="">
                نوع{" "}
              </label>
              {/* <select className="bg-white border  outline-none appearance-none w-full border-lightGray p-[16px] rounded-[16px] ">
              <option value="1">اسم النوع</option>
              <option value="2">اسم النوع</option>
              <option value="3">اسم النوع</option>
            </select> */}
              <input
                onChange={handleChange}
                type="text"
                value={formData.type}
                name="type"
                placeholder="Insight Minds"
                className="bg-white border outline-none w-full border-lightGray p-[16px] rounded-[16px] "
              />
              {/* <ChevronDownIcon className="h-[20px] w-[20px] text-black absolute bottom-[14px] left-[14px]" /> */}
            </div>
            <div className="flex flex-col gap-[8px] relative text-[14px] leading-[19px] text-black font-[500] max-w-[320px]">
              <label htmlFor="" className="">
                نوع فرعي{" "}
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder=""
                name="subtype"
                value={formData.subtype}
                className="bg-white border outline-none w-full border-lightGray p-[16px] rounded-[16px] "
              />
              {/* <select className="bg-white border  outline-none appearance-none w-full border-lightGray p-[16px] rounded-[16px] ">
              <option value="1">اسم النوع</option>
              <option value="2">اسم النوع</option>
              <option value="3">اسم النوع</option>
            </select>
            <ChevronDownIcon className="h-[20px] w-[20px] text-black absolute bottom-[14px] left-[14px]" /> */}
            </div>
            <div className="flex flex-col gap-[8px] text-[14px] leading-[19px] text-black font-[500] w-full">
              <label htmlFor="" className="">
                اسم الشركة
              </label>
              <textarea
                placeholder="شركة الإبداع التكنولوجي هي شرك"
                value={formData.description}
                name="description"
                onChange={handleChange}
                className="bg-white border outline-none w-full h-[120px] border-lightGray p-[16px] rounded-[16px] "
              ></textarea>
            </div>
            <div className="flex items-center justify-end ">
              <button className="text-[14px] leading-[19px] font-[500] text-white py-[8px] px-[16px] rounded-[48px] h-[44px] bg-main">
                حفظ الكل
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
