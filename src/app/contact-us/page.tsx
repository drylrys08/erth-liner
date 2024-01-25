"use client";
import MainLayout from "@/components/layout/MainLayout";
import React, { useState } from "react";

function ContactUs() {
  const [first, setfirst] = useState({});
  const handleSendEmail = async (e: any) => {
    e.preventDefault();
    const data = {
      email: "darylreyes.dev@gmail.com",
      firstName: "daryl",
      subject: "test",
      message: "Test12",
    };
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(response);
  };
  return (
    <MainLayout>
      <form action="">
        <button className="bg-gray-600" onClick={handleSendEmail}>
          send
        </button>
      </form>
      {/* <input type="email" name="email" />
      <input name="name" />
      <input name="message" /> */}
    </MainLayout>
  );
}

export default ContactUs;
