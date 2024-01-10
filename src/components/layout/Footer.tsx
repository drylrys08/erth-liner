import React from "react";
import Icon from "../Icon";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  // const bg =
  //   process.env.NODE_ENV === "development"
  //     ? `bg-[url("/assets/img/containers1.png")]`
  //     : `bg-[url("https://drylrys08.github.io/erth-liner/assets/img/containers1.png")]`;
  return (
    <div
      className={`bg-[#181818] flex flex-col-reverse lg:flex-row lg:justify-between py-12 md:px-40 bg-no-repeat bg-cover bg-center `}
    >
      <div className="text-[#F1F1F1] flex flex-col p-4">
        <Icon
          src="/assets/svg/logo.svg"
          alt="logo"
          height={20}
          width={100}
          className="z-0"
        />
        <h4 className="text-sm">Erth Liner Cargo Express Co.</h4>
        <h4 className="text-sm">
          © 2024 by Erth Liner Cargo Express Co.. ALL RIGHTS RESERVED.
        </h4>
      </div>

      <div className="text-[#F1F1F1] flex flex-col p-4 gap-4">
        <div>
          <h1 className="font-extrabold">Working Hours</h1>
          <h4 className="text-sm">Mon - Fri: 8am - 5pm</h4>
        </div>
        <div>
          <h1 className="font-extrabold">BUSINESS ADDRESS</h1>
          <h4 className="text-sm">
            Room 611 Equitable Center Building 262 1009 Juan Luna Binondo Manila
            Philippine
          </h4>
        </div>
      </div>

      <div className="text-[#F1F1F1] flex flex-col gap-3 p-4">
        <h1 className="font-extrabold">CONTACT US</h1>
        <div>
          <h4 className="text-sm">Phone Nos:</h4>
          <h4 className="text-sm">+63 987 654 3210 (Globe)</h4>
          <h4 className="text-sm">+63 987 654 3210 (Smart)</h4>
          <h4 className="text-sm">Tel. Nos:</h4>
          <h4 className="text-sm">+632 987 6543</h4>
        </div>
        <div>
          <h1 className="font-extrabold">
            We are available for face-to-face meetings or online meetings.
          </h1>
          <a href="#" className="underline">
            Book A Meeting
          </a>
        </div>
      </div>
      <div className="text-[#F1F1F1] flex flex-col p-4 gap-4">
        <h1 className="font-extrabold">FOLLOW US ON</h1>
        <div className="flex gap-4">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
