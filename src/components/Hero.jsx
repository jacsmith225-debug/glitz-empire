import React from "react";

// UPDATED IMPORT PATHS — all inside src/assets/images/
import usher35 from "../assets/images/usher35.jpeg";
import usher44 from "../assets/images/usher44.jpeg";
import usher29 from "../assets/images/usher29.jpeg";

const Hero = () => {
  return (
    <section className="w-full pt-28 pb-20 px-6 md:px-16 bg-gradient-to-br from-[#ffffff] to-[#faf7ef]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT CONTENT */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-dark">
            Welcome to <span className="text-gold">Glitz Empire</span> <br />
            Ushering & Marketing <br />
            Agency
          </h1>

          <p className="text-lg text-gray-700 max-w-md">
            Professional. Elegant. Reliable. Turning every event into a memorable experience.
          </p>

          {/* CTA BUTTON */}
          <button className="bg-gold text-white font-semibold px-10 py-3 rounded-full shadow-gold hover:bg-[#b8952d] transition duration-300">
            Book Us Now
          </button>

          {/* PREMIUM STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gold">8+</h2>
              <p className="text-sm text-gray-700">Years Experience</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gold">250+</h2>
              <p className="text-sm text-gray-700">Trusted Clients</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gold">1200+</h2>
              <p className="text-sm text-gray-700">Successful Events</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gold">99%</h2>
              <p className="text-sm text-gray-700">Customer Satisfaction</p>
            </div>

          </div>
        </div>

        {/* RIGHT — PREMIUM IMAGE CLUSTER */}
        <div className="relative w-full flex justify-center">

          {/* BACK LEFT IMAGE */}
          <img
            src={usher29}
            alt="Usher Group"
            className="
              absolute -top-6 -left-4 
              w-40 md:w-48 
              rounded-2xl shadow-xl 
              border-4 border-gold 
              animate-float-slow
            "
          />

          {/* MAIN CENTER IMAGE */}
          <img
            src={usher44}
            alt="Main Usher"
            className="
              w-56 md:w-72 lg:w-80 
              rounded-2xl shadow-2xl 
              border-[6px] border-gold 
              z-20 animate-float
            "
          />

          {/* BACK RIGHT IMAGE */}
          <img
            src={usher35}
            alt="Usher Group 2"
            className="
              absolute bottom-0 -right-4 
              w-40 md:w-48 
              rounded-2xl shadow-xl 
              border-4 border-gold 
              animate-float-slow
            "
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;
