import FormatNumber from "@/lib/FormatNumber";
import React from "react";

interface ChooseUsCardInterface {
  className?: string;
  title: string;
  number?: number;
  content: string;
  invert?: boolean;
}
function ChooseUsCard({
  className,
  title,
  number,
  content,
  invert = false,
}: ChooseUsCardInterface) {
  return (
    <div
      className={`relative ${className} border-b-8 border-r-8 p-6 border-[#FDB827] shadow-2xl ${
        invert ? "bg-[#363636]" : "bg-white"
      } `}
    >
      <div className="absolute top-[-70px] left-5 font-extrabold right-100 text-[100px] text-[#FDB827] ">
        {FormatNumber(number)}
      </div>
      <div className="basis-4 mt-50">
        <h1
          className={`font-bold text-2xl mb-4 mt-10 ${
            invert ? "text-white" : "text-[#363636]"
          }`}
        >
          {title}
        </h1>
        <p className={`${invert ? "text-white" : "text-[#363636]"} `}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default ChooseUsCard;
