"use client";
import React, { Suspense } from "react";

import MainLayout from "@/components/layout/MainLayout";
import LandingPage from "@/components/LandingPage";
import ChooseUs from "@/components/ChooseUs";
import ShortAbout from "@/components/ShortAbout";
import FacebookMsg from "@/components/FacebookMsg";

function page() {
  return (
    <MainLayout>
      <LandingPage />
      <ChooseUs />
      <ShortAbout />
      {process.env.NODE_ENV === "production" && <FacebookMsg />}
    </MainLayout>
  );
}

export default page;
