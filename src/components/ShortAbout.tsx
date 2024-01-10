"use client";
import React from "react";

function ShortAbout() {
  const bg =
    process.env.NODE_ENV === "development"
      ? `bg-[linear-gradient(rgba(253,184,39,0.7),rgba(253,184,39,0.7)),url("/assets/img/truck3.png")]`
      : `bg-[linear-gradient(rgba(253,184,39,0.7),rgba(253,184,39,0.7)),url("https://drylrys08.github.io/erth-liner/assets/img/truck3.png")]`;
  return (
    <section
      className={`${bg} max-lg:h-[600px] bg-no-repeat bg-cover bg-bottom`}
    >
      <div className="flex screen:justify-end items-center h-full">
        <div className="flex flex-col gap-2 lg:gap-11 screen:w-1/2 p-4 lg:p-32 ">
          <h1 className="font-bold text-[40px] text-[#F1F1F1]">
            Discover Erth liner Cargo Express Co., Your Trusted Partner in Cargo
            Solutions.
          </h1>
          <p className="text-[#F1F1F1] lg:text-base/[35px]">
            We understand the complexities of international trade and the
            critical role that customs brokerage plays in ensuring the smooth
            flow of goods across borders. Our dedicated team of experts is
            committed to providing you with top-notch customs brokerage services
            tailored to your unique business needs.
          </p>
          <a
            href="/about-us"
            className="underline text-[#F1F1F1] hover:text-[#363636]"
          >
            Know more about us
          </a>
        </div>
      </div>
    </section>
  );
}

export default ShortAbout;
