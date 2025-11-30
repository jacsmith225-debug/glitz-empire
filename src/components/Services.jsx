import React from "react";
import { FaUsers, FaCrown, FaCalendarCheck } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Professional Ushers",
      description:
        "Highly trained ushers providing top-tier hospitality, guest coordination, and event support.",
      icon: <FaUsers className="text-yellow-600 text-5xl mb-4" />,
    },
    {
      title: "Event Management",
      description:
        "Complete event planning and coordination to ensure stress-free and successful events.",
      icon: <FaCalendarCheck className="text-yellow-600 text-5xl mb-4" />,
    },
    {
      title: "Luxury Brand Ambassadors",
      description:
        "Representing your brand with elegance, confidence, and exceptional communication.",
      icon: <FaCrown className="text-yellow-600 text-5xl mb-4" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Premium Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          At Glitz Empire, we provide top-notch event and marketing solutions
          designed to elevate your event experience and brand image.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
