"use client";
import React from "react";

function LandingPage() {
  const bg =
    process.env.NODE_ENV === "development"
      ? `bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.7)),url("/assets/img/cargo3.jpg")]`
      : `bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.7)),url("https://drylrys08.github.io/erth-liner/assets/img/cargo3.jpg")]`;

  return (
    <div
      className={`lg:h-[calc(100vh-100px)] p-4 ${bg}
        bg-cover bg-no-repeat bg-top `}
    >
      <div className="h-full flex justify-center items-center lg:pb-36 flex-col gap-9 pl-2 lg:pl-10">
        <h1 className="text-stroke font-extrabold text-6xl md:text-8xl lg:text-center text-[#F1F1F1] animate-fade-right animate-once animate-duration-[2000ms]">
          Custom Solutions <br /> for Every Cargo
        </h1>
        <h2 className="text-stroke font-normal text-[#F1F1F1] text-xl md:text-2xl   animate-fade-right animate-once animate-duration-[2000ms]">
          Offering personalized customs solutions tailored to the unique <br />
          requirements of your cargo, ensuring a smooth journey from start to
          finish
        </h2>
        <div className="flex gap-4 lg:gap-7">
          <button className="bg-[#FDB827] w-40 h-14 lg:w-56 lg:h-20 rounded-tl-2xl rounded-br-2xl lg:text-xl  font-bold text-[#F1F1F1] animate-fade-right animate-once animate-duration-[2000ms] ">
            Get a qoute &gt;
          </button>
          <button className="border-4 border-[#F1F1F1]  w-40 h-14 lg:w-56 lg:h-20 rounded-tl-2xl rounded-br-2xl lg:text-xl  font-bold text-[#FDB827] animate-fade-right animate-once animate-duration-[2000ms] ">
            Inquire now &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
