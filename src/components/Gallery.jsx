import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// ⭐⭐ IMPORT ALL IMAGES MANUALLY (VERCEL SAFE) ⭐⭐
import usher1 from "../assets/images/usher1.jpg";
import usher2 from "../assets/images/usher2.jpg";
import usher3 from "../assets/images/usher3.jpg";
import usher4 from "../assets/images/usher4.jpg";
import usher5 from "../assets/images/usher5.jpeg";
import usher6 from "../assets/images/usher6.jpeg";
import usher7 from "../assets/images/usher7.jpeg";
import usher8 from "../assets/images/usher8.jpeg";
import usher9 from "../assets/images/usher9.jpeg";
import usher10 from "../assets/images/usher10.jpeg";
import usher11 from "../assets/images/usher11.jpeg";
import usher12 from "../assets/images/usher12.jpeg";

import brand from "../assets/images/brand.jpeg";
import dowry from "../assets/images/dowry.jpeg";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // Add all imported images to array
  const galleryImages = [
    usher1,
    usher2,
    usher3,
    usher4,
    usher5,
    usher6,
    usher7,
    usher8,
    usher9,
    usher10,
    usher11,
    usher12,
    brand,
    dowry,
  ];

  return (
    <section id="gallery" className="section-container pt-32">
      {/* Premium Title */}
      <h2
        className="text-4xl font-extrabold text-center text-yellow-600 mb-6"
        data-aos="fade-down"
      >
        Event Highlights
      </h2>

      <div
        className="w-32 h-1 bg-yellow-500 mx-auto rounded-full mb-12"
        data-aos="fade-down"
        data-aos-delay="150"
      ></div>

      <PhotoProvider>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white border border-yellow-300 
                       hover:border-yellow-500 transition-all duration-300 cursor-pointer 
                       hover:shadow-[0_0_25px_rgba(255,204,0,0.6)] hover:scale-[1.03]"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <PhotoView src={img}>
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full rounded-xl transition duration-500 hover:brightness-110"
                />
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default Gallery;
