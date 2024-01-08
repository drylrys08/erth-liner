"use client";
import React from "react";

function Booking() {
  const bg =
    process.env.NODE_ENV === "development"
      ? `bg-[url("/assets/img/yellow-container.jpg")]`
      : `bg-[url("https://drylrys08.github.io/erth-liner/assets/img/yellow-container.jpg")]`;
  return (
    <section
      className={`md:mx-28 mb-12 px-56 py-20 rounded-2xl shadow-2xl ${bg} cover bg-no-repeat`}
    >
      <div className="flex w-full flex-col items-center gap-10 text-center mb-8">
        <h1 className="text-[#F1F1F1] text-stroke font-bold text-5xl">
          Book a Meeting: Your Convenient Choice
        </h1>
        <p className="text-[#F1F1F1] text-stroke text-center">
          We understand the importance of effective communication. That's why we
          offer you the flexibility to choose how you'd like to connect with us
          – whether it's in person or online. Booking a meeting has never been
          this easy!
        </p>
      </div>
      <div className="flex gap-11 justify-center items-center">
        <h3 className="border-4 p-4 border-[#23120B] text-[#F1F1F1] font-bold text-stroke rounded-md">
          Call us: +63 987 654 3210
        </h3>
        <button className=" bg-[#23120B] text-[#F1F1F1] font-bold px-16 py-5 rounded-md">
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Booking;
