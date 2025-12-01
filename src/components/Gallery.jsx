import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // Auto-load EVERY image inside assets/images
  const importImages = () => {
    const images = require.context(
      "../assets/images",
      false,
      /\.(png|jpe?g|JPG|JPEG)$/i
    );
    return images.keys().map(images);
  };

  const galleryImages = importImages();

  return (
    <section id="gallery" className="section-container pt-32">
      <h2
        data-aos="fade-down"
        className="text-4xl font-extrabold text-center text-yellow-600 mb-6"
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
