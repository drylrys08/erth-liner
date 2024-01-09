"use client";
import React from "react";
import Icon from "./Icon";
import ChooseUsCard from "./ChooseUsCard";

function ChooseUs() {
  const contents = [
    {
      title: " Industry Expertise",
      content:
        "With years of industry expertise, our team navigates the complexities of customs regulations with precision. We stay abreast of the latest changes, allowing us to offer informed solutions tailored to your business.",
    },
    {
      title: "Client-Centric Approach",
      content:
        "Your satisfaction is our priority. We take a client-centric approach, working closely with you to understand your unique requirements and providing personalized customs brokerage services that meet and exceed your expectations.",
    },
    {
      title: "Cutting-Edge Technology",
      content:
        "Embracing cutting-edge technology, we integrate innovative solutions into our processes. This not only enhances efficiency but also ensures accuracy in customs documentation and compliance.",
    },
  ];
  return (
    <section className="mx-5 sm:mx-20 my-20 md:mx-[150px] lg:mx-[20px] screen:mx-[350px] 2xl:mx-[250px]">
      <div className="w-full flex flex-col items-center gap-10">
        <div className="flex flex-col items-center lg:px-64 gap-5">
          <h1 className="text-5xl text-center font-bold text-[#FDB827]">
            Why Choose Us?
          </h1>
          <p className="text-sm text-center">
            At Erth liner cargo express co., We pride ourselves on being a
            trusted partner in your global trade journey. Our customs brokerage
            services go beyond the basics, ensuring a seamless and compliant
            experience for your imports and exports.
          </p>
        </div>
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-10 items-stretch h-full mt-20">
          {contents.map((content, index) => {
            return (
              <ChooseUsCard
                key={index}
                title={content.title}
                content={content.content}
                number={index + 1}
                invert={index === 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
