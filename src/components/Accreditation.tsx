"use client";
import React from "react";
import Icon from "./Icon";

function Accreditation() {
  return (
    <div className="bg-gray-200 flex flex-col gap-4 p-6">
      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl text-[#FDB827]">
        Accreditations & Affiliations
      </h1>
      <div className=" flex gap-6 md:gap-10 justify-center">
        <Icon
          src="/assets/img/customs_logo.png"
          alt="logo"
          height={60}
          width={60}
          className="filter grayscale aspect-[3/2] object-contain w-12 sm:w-16 md:w-24"
        />
        <Icon
          src="/assets/img/dti_logo.png"
          className="filter grayscale aspect-[3/2] object-contain w-12 sm:w-16 md:w-24"
          alt="logo"
          height={60}
          width={60}
        />
        <Icon
          src="/assets/img/peza_logo.png"
          className="filter grayscale aspect-[3/2] object-contain w-8 sm:w-12 md:w-24"
          alt="logo"
          height={60}
          width={60}
        />
        <Icon
          src="/assets/img/ppa_logo.png"
          className="filter grayscale aspect-[3/2] object-contain w-32  sm:w-36 md:w-48"
          alt="logo"
          height={60}
          width={60}
        />
      </div>
    </div>
  );
}

export default Accreditation;
