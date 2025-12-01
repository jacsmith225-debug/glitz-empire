import React from "react";
import ushering from "../assets/images/ushering.jpeg";
import waiters from "../assets/images/waiters.jpeg";
import dowry from "../assets/images/dowry.jpeg";
import brand from "../assets/images/brand.jpeg";

const Pricing = () => {
  const packages = [
    {
      title: "Ushering Only",
      price: "GHC350",
      image: ushering,
      details: [
        "Usher guests to their rightful seats",
        "Directions & assistance to guests",
        "1-day event coverage",
        "Includes T&T and agency payment",
      ],
    },
    {
      title: "Waiters / Waitresses",
      price: "GHC370",
      image: waiters,
      details: [
        "Serving of guests",
        "Tidy up and clearing",
        "1-day event coverage",
        "Includes T&T and agency payment",
      ],
    },
    {
      title: "Brand Activations / Floats",
      price: "GHC450",
      image: brand,
      details: [
        "Customer interaction & brand marketing",
        "T&T and food included",
        "1-day event within Accra",
        "Outside Accra attracts extra charges",
      ],
    },
    {
      title: "Dowry Carrying",
      price: "GHC250",
      image: dowry,
      details: [
        "Beautifully dressed carriers",
        "Carry bride price items",
        "1-day event coverage",
        "Appearance based on client color theme",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our Pricing Packages
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {packages.map((pkg, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl overflow-hidden shadow-lg 
                hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-200/60 
                transition-all duration-500 cursor-pointer
              "
            >

              {/* Premium Image Block */}
              <div className="w-full h-64 overflow-hidden rounded-t-2xl bg-gray-200 shadow-inner">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="
                    w-full h-full object-cover object-center 
                    transition duration-700 hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {pkg.title}
                </h3>

                <p className="text-2xl font-extrabold text-yellow-600 mb-4">
                  {pkg.price} 
                  <span className="text-sm text-gray-600 font-medium"> per person</span>
                </p>

                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  {pkg.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">✓</span> {detail}
                    </li>
                  ))}
                </ul>

                <button
                  className="
                    w-full py-3 rounded-full 
                    bg-yellow-500 text-white font-semibold text-lg 
                    hover:bg-yellow-600 transition duration-300 shadow-md
                  "
                >
                  Book Now
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;
