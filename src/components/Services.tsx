import React from "react";

function Services() {
  const servicesData = [
    {
      title: "Freight Forwarding Services",
      description:
        "As a full-service logistics provider, we excel in freight forwarding, ensuring the smooth movement of goods across borders. From documentation to transportation, our end-to-end solutions guarantee a hassle-free shipping experience.",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Our expertise extends to optimizing your supply chain for maximum efficiency. We assess, strategize, and implement solutions to enhance the flow of goods, minimize delays, and reduce operational costs.",
    },
    {
      title: "Warehousing and Distribution",
      description:
        "Benefit from our state-of-the-art warehousing facilities and distribution networks. We provide secure storage, inventory management, and reliable distribution services to keep your supply chain agile.",
    },
    {
      title: "International Shipping Coordination",
      description:
        "Coordinating international shipping requires precision. Our team ensures timely vessel bookings, container management, and documentation to keep your shipments on schedule.",
    },
    {
      title: "Customs Consultancy",
      description:
        "Beyond brokerage, our customs consultancy services offer strategic insights into navigating complex regulatory landscapes. Stay informed, compliant, and ahead of evolving customs regulations.",
    },
    {
      title: "Trade Compliance Audits",
      description:
        "Our proactive approach includes regular trade compliance audits. We review your processes, documentation, and transactions to identify areas for improvement and ensure adherence to regulatory standards.",
    },
    {
      title: "Cross-Border E-commerce Solutions",
      description:
        "Capitalize on the growing e-commerce landscape with our cross-border solutions. We facilitate smooth e-commerce logistics, helping you reach a global customer base with ease.",
    },
    {
      title: "Express Cargo Handling",
      description:
        "Urgent shipments demand swift handling. Our express cargo services prioritize time-sensitive deliveries, ensuring that your critical shipments reach their destination promptly.",
    },
    {
      title: "Project Cargo Management",
      description:
        "Navigate the complexities of project cargo with our specialized management services. We plan, coordinate, and execute the transportation of oversized or specialized shipments with precision.",
    },
    {
      title: "Risk Management Strategies",
      description:
        "Mitigate risks with our comprehensive risk management strategies. We assess potential challenges in your logistics chain and implement strategies to safeguard your shipments and investments.",
    },
  ];
  return (
    <section className="mx-5 lg:mx-20 screen:mx-72 mb-10">
      <div className="300 flex flex-col items-center">
        <div className="mb-10 text-center flex flex-col items-center">
          <h1 className="font-extrabold text-[40px] text-center">
            Our services
          </h1>
          <p className="text-center lg:w-8/12">
            We transcend the ordinary, delivering logistics solutions that
            redefine efficiency and reliability in global trade. Our commitment
            to precision and streamlined operations positions us as your trusted
            partner for effortless solutions in the intricate world of
            international commerce. Trust Earthliner for customs brokerage that
            sets you apart.
          </p>
        </div>

        <div className="grid gap-10 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {servicesData.map((service, index) => {
            return (
              <div key={index} className="shadow-md p-5">
                <h2 className="font-bold text-[20px] mb-5">{service.title}</h2>
                <p className="">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
