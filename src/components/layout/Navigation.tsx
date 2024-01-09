"use client";
// import Button from '@/components/Button'
import Icon from "@/components/Icon";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
function LandingPageNavigation({ toggleNav, navToggle }: any) {
  const router = useRouter();

  const handleToggleNav = () => {
    toggleNav();
  };
  return (
    <nav className="pr-6 pl-1 py-2 bg-[#000000] z-40">
      <div className="flex justify-between items-center">
        <div className="flex relative justify-center h-full lg:pl-16 ">
          <a href="/">
            <Icon
              src="/assets/img/ERTH4.png"
              alt="logo"
              height={20}
              width={160}
              className="z-0"
            />
          </a>
        </div>
        <div className="hidden md:block ">
          <ul className="flex md:gap-[10px] lg:gap-[32px] ">
            <li>
              <a
                className="text-[#F1F1F1] hover:text-[#FDB827]  hover:border-b-2 pb-2"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[#F1F1F1] hover:text-[#FDB827]  hover:border-b-2 pb-2"
                href="/about-us"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-[#F1F1F1] hover:text-[#FDB827]  hover:border-b-2 pb-2"
                href="/services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-[#F1F1F1] hover:text-[#FDB827]  hover:border-b-2 pb-2"
                href="/contact-us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="text-[#FDB827] font-bold border border-[#F1F1F1] rounded-lg p-4">
            Call us: +63 987 654 3210
          </h1>
        </div>

        <div className="md:hidden" onClick={handleToggleNav}>
          {!navToggle && (
            <Icon
              src="/assets/svg/hamburger.svg"
              alt="button"
              height={20}
              width={20}
              className=" cursor-pointer fill-[#F1F1F1] z-10"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default LandingPageNavigation;
