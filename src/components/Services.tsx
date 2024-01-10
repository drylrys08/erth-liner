import React from "react";

function Services() {
  const importServices = [
    {
      title: "Accreditation as Importer",
      description:
        "Seamlessly navigate the importer accreditation process with our expert guidance, ensuring every step is meticulously handled for your peace of mind.",
    },
    {
      title: "Import Declaration",
      description:
        "Experience a hassle-free import process as we streamline your declarations, taking care of intricate paperwork and documentation, so you can focus on the core aspects of your business.",
    },
    {
      title: "Classification & Valuation",
      description:
        "Ensure compliance and accuracy in your imports with our detailed classification and valuation services, a meticulous approach to guarantee your goods meet regulatory standards.",
    },
    {
      title: "Computation of Duties & Taxes",
      description:
        "Entrust us with the complexities of duties and taxes, where we provide clarity and transparency, allowing you to plan effectively and optimize your cost structures.",
    },
    {
      title: "Customs Clearance & Processing",
      description:
        "From initial paperwork to final clearance, our efficient team handles the entire customs process, minimizing delays and ensuring your goods move seamlessly through customs.",
    },
    {
      title:
        "Check more of what Erth Liner has to offer and experience the ease of reliable logistics tailored just for you",
      description: "",
      end: true,
    },
    // {
    //   title: "Trucking & Hauling",
    //   description: "Seamless transportation solutions to move your goods safely and on time.",
    // },
  ];
  const bg =
    process.env.NODE_ENV === "development"
      ? `bg-[url("/assets/img/containers1.png")]`
      : `bg-[url("https://drylrys08.github.io/erth-liner/assets/img/containers1.png")]`;
  return (
    <section className={`${bg} bg-cover py-36 px-5 lg:px-20 `}>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="mb-10 flex flex-col lg:items-end ">
          <h1 className="font-extrabold text-[40px] lg:text-end text-[#F1F1F1]">
            Our services
          </h1>
          <p className=" lg:w-8/12 text-[#F1F1F1] lg:text-end">
            We transcend the ordinary, delivering logistics solutions that
            redefine efficiency and reliability in global trade. Our commitment
            to precision and streamlined operations positions us as your trusted
            partner for effortless solutions in the intricate world of
            international commerce. Trust Earthliner for customs brokerage that
            sets you apart.
          </p>
        </div>

        <div className="grid gap-3 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 screen:grid-cols-3 ">
          {importServices.map((service, index) => {
            const isEnd = service?.end;
            console.log(isEnd);
            return (
              <div
                key={index}
                className={`shadow-md p-5 rounded-2xl ${
                  isEnd ? "bg-[#FDB827]" : "bg-[#F1F1F1]"
                }`}
              >
                <h2
                  className={`font-bold text-[20px] mb-5 text-[#363636] $text-[#363636] `}
                >
                  {service.title}
                </h2>
                {isEnd ? (
                  <button className="bg-[#363636] text-[#FDB827] font-bold py-2 px-10 rounded-lg mt-4">
                    Explore Services &gt; &gt;
                  </button>
                ) : (
                  <p className={`text-[#363636]`}>{service.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
