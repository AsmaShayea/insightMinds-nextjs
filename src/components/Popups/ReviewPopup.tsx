import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const ReviewPopup = ({
  id,
  data,
  setShow,
}: {
  id: string;
  data: any;
  setShow: any;
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [words, setWords] = useState<{ word: string; sentiment: string }[]>(
    data.aspects.map((aspect:any) => ({
      word: aspect.aspect,
      sentiment: aspect.polarity,
    }))
  ); // Store words with their sentiment

  // Function to handle word click
  const handleWordClick = (word: string) => {
    setSelectedWord(word);
  };

  const removeWordClick = (word: string) => {
    const existingWord = words.find((w) => w.word === word);

    if (existingWord) {
      setWords((prevWords) => prevWords.filter((w) => w.word !== word));
    }
  };

  const handleSentimentSelection = (sentiment: string) => {
    if (selectedWord) {
      setWords((prevWords) => [
        ...prevWords.filter((w) => w.word !== selectedWord), // Remove the word if it already exists to update sentiment
        { word: selectedWord, sentiment },
      ]);
      setSelectedWord(null); // Reset the selected word
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const span = event.target as HTMLElement;
      if (span.tagName === "SPAN") {
        handleWordClick(span.textContent || "");
      }
    };

    // Attach the event listener to the container or document level
    const reviewContainer = document.querySelector(".tokenized-review");

    if (reviewContainer) {
      reviewContainer.addEventListener("click", handleClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (reviewContainer) {
        reviewContainer.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center p-4 justify-center fixed z-[999] overflow-y-auto inset-0 bg-black/20">
      <div
        className="max-w-[500px] p-[24px] w-full bg-white rounded-[24px] gap-[24px] flex flex-col"
        style={{ boxShadow: "0px 12px 64px 0px #A3B5D433" }}
      >
        <h4 className="text-[20px] leading-[24px] text-[#29292E] font-[600] ">
          تعديل التعليق
        </h4>
        <div className="flex flex-col gap-[24px] w-full ">
          <div
            className="bg-[#EAEAEC80] p-[16px] min-h-[120px] text-[14px] leading-[19px] font-[400] rounded-[16px] flex flex-wrap tokenized-review"
            dangerouslySetInnerHTML={{ __html: data?.tokenized_review }}
          ></div>

          {/* Sentiment selection options */}
          {selectedWord ? (
            <>
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[6px] text-[12px] leading-[13px] text-black">
                  <span>
                    اختر الشعور لهذه الكلمة{" "}
                    <span className="font-[700]">
                      &quot;{selectedWord}&quot;
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <button
                    className="flex items-center cursor-pointer border border-green hover:bg-green hover:text-black transition-all duration-300 ease-in-out p-[8px]  rounded-[12px] gap-[4px] text-[12px] leading-[16px] text-green"
                    onClick={() => handleSentimentSelection("positive")} // Positive selection
                  >
                    ايجابي
                  </button>
                  <button
                    className="flex items-center cursor-pointer border border-red hover:bg-red hover:text-white transition-all duration-300 ease-in-out p-[8px]  rounded-[12px] gap-[4px] text-[12px] leading-[16px] text-red"
                    onClick={() => handleSentimentSelection("negative")} // Negative selection
                  >
                    سلبي
                  </button>
                  <button
                    className="flex items-center cursor-pointer p-[8px]  rounded-[12px] gap-[4px] hover:text-opacity-90 transition-all duration-300 ease-in-out text-[12px] leading-[16px] text-black"
                    onClick={() => setSelectedWord(null)} // Cancel selection
                  >
                    الغاء
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-[6px] text-[10px] leading-[13px] text-black">
              <InformationCircleIcon className="h-[18px] w-[18px] text-black" />
              <span>
                اضغط علي الكلمة من النص لاضافتها الي الايجابي او السلبي او
                التعديل عليها
              </span>
            </div>
          )}

          {/* Selected words with sentiments */}
          <div className="flex flex-col gap-[20px]">
            {words.length > 0 && (
              <>
                <div className="flex flex-wrap items-center justify-end gap-[8px]">
                  {words.map((item, index) => (
                    <button
                      key={index}
                      className={`flex items-center ${
                        item.sentiment === "positive"
                          ? "bg-green text-black"
                          : "bg-red text-white"
                      } p-[8px] rounded-[12px] gap-[4px] text-[12px] leading-[16px]`}
                    >
                      <XMarkIcon
                        onClick={() => removeWordClick(item.word)}
                        className="h-[18px] w-[18px]  cursor-pointer"
                      />
                      <span>{item.word}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
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

export default ReviewPopup;
