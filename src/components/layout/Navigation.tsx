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
              width={155}
              className="z-0"
            />
          </a>
        </div>
        <div className="hidden md:block ">
          <ul className="flex md:gap-[10px] lg:gap-[32px] ">
            <li>
              <a className="text-white" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Solutions
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleToggleNav}>
          {!navToggle && (
            <Icon
              src="/assets/svg/hamburger.svg"
              alt="button"
              height={20}
              width={20}
              className=" cursor-pointer fill-white z-10"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default LandingPageNavigation;
