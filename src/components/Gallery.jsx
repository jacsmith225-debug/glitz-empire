import React from "react";

// Import your images
import usher1 from "../assets/images/usher1.jpeg";
import usher2 from "../assets/images/usher2.jpeg";
import usher3 from "../assets/images/usher3.jpeg";
import usher4 from "../assets/images/usher4.jpeg";
import usher5 from "../assets/images/usher5.jpeg";
import usher6 from "../assets/images/usher6.jpeg";
import usher7 from "../assets/images/usher7.jpeg";
import usher8 from "../assets/images/usher8.jpeg";
import usher9 from "../assets/images/usher9.jpeg";

const Gallery = () => {
  const images = [
    usher1,
    usher2,
    usher3,
    usher4,
    usher5,
    usher6,
    usher7,
    usher8,
    usher9,
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Our Ushering Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={img}
                alt={`Usher ${index + 1}`}
                className="w-full h-64 object-cover transform transition duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
