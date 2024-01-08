"use client";
import React from "react";

import MainLayout from "@/components/layout/MainLayout";
import LandingPage from "@/components/LandingPage";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Booking from "@/components/Booking";
import ChooseUs from "@/components/ChooseUs";
import ShortAbout from "@/components/ShortAbout";

function page() {
  return (
    <MainLayout>
      <LandingPage />
      <ChooseUs />
      <ShortAbout />
    </MainLayout>
  );
}

export default page;
