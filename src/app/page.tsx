"use client";
import React from "react";

import MainLayout from "@/components/layout/MainLayout";
import LandingPage from "@/components/LandingPage";
import Image from "next/image";

function page() {
  return (
    <MainLayout>
      <LandingPage />
      <section className="flex flex-col md:flex-row items-center py-16 md:justify-center gap-2 md:gap-3 lg:gap-10">
        <div className="flex md:justify-end w-10/12 md:w-1/2 md:px-4">
          <Image
            className="w-[900px] lg:w-[700px]  rounded-lg"
            src="/assets/img/cargo1.jpg"
            alt="Your Image"
            width={900}
            height={900}
          />
        </div>

        <div className="flex flex-col items-start w-full md:w-1/2 p-10 md:p-1  self-start md:self-center  lg:pr-10">
          <h1 className="text-2xl font-bold mb-4 ">Why Choose Us</h1>
          <p className="text-gray-600">
            YLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo
            est, porttitor id massa quis, consequat interdum purus. Aliquam quis
            odio aliquet, accumsan metus in, eleifend nibh. Sed ut nisl erat.
            Sed ac orci nisl. Nulla facilisi. Fusce laoreet tortor ac diam
            mattis mollis. Etiam at malesuada quam, in scelerisque leo. In eu
            scelerisque magna, vel facilisis tortor. Proin vel volutpat risus.
            Vestibulum fermentum vulputate urna, id congue eros placerat eu.
            Maecenas eu dui tincidunt, rutrum ipsum aliquet, imperdiet diam. In
            efficitur eu arcu sit amet volutpat. Nam sit amet enim scelerisque,
            fermentum quam eu, sodales nisl. Nullam tempus purus sit amet mi
            lacinia venenatis. efficitur eu arcu sit amet volutpat. Nam sit amet
            enim scelerisque, fermentum quam eu, sodales nisl. Nullam tempus
            purus sit amet mi lacinia venenatis. fermentum quam eu, sodales
            nisl. Nullam tempus purus sit amet mi lacinia venenatis. efficitur
            eu arcu sit amet volutpat. Nam sit amet enim scelerisque, fermentum
            quam eu, sodales nisl. Nullam tempus purus sit amet mi lacinia
            venenatis.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default page;
