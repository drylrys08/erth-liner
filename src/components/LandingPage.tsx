import React from "react";

function LandingPage() {
  return (
    <div className="landing-page-img h-[calc(100vh-100px)] bg-cover bg-no-repeat bg-top shadow">
      <div className="h-full flex justify-end pb-36 flex-col gap-2 pl-2 lg:pl-10">
        <h1 className="text-stroke font-extrabold  text-6xl md:text-8xl   text-[#FFFFFF] animate-fade-right animate-once animate-duration-[2000ms]">
          Custom Solutions
        </h1>
        <h1 className="text-stroke font-extrabold  text-6xl md:text-8xl    text-[#FFFFFF] animate-fade-right animate-once animate-duration-[2000ms]">
          for Every Cargo
        </h1>
        <h2 className="text-stroke font-normal text-white text-xl md:text-2xl   animate-fade-right animate-once animate-duration-[2000ms]">
          Offering personalized customs solutions tailored to the unique <br />
          requirements of your cargo, ensuring a smooth journey from start to
          finish
        </h2>
      </div>
    </div>
  );
}

export default LandingPage;
