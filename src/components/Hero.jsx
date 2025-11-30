import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to Glitz Empire Ushering & Marketing Agency
        </h1>
        <p className="text-xl mb-6 drop-shadow-md">
          Professional. Elegant. Reliable. Your event deserves the best.
        </p>

        <a href="#contact" className="btn-primary">
          Book Us Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
