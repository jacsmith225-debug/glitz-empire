import React from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Get In Touch
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        For bookings, inquiries, or collaborations, reach out to Glitz Empire.  
        We respond quickly and professionally.
      </p>

      {/* CONTACT CARDS */}
      <div className="grid md:grid-cols-2 gap-10 mb-14">

        {/* Phone */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-4">
            <FaPhone className="text-yellow-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+233 593712986</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-600 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">glitzusherz@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <h3 className="text-center text-xl font-semibold text-gray-800 mb-6">
        Follow Us
      </h3>

      <div className="flex justify-center gap-6">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/glitz_usherzz?igsh=MXNkc2YxdXJudmsyNg=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>

        {/* Facebook (optional, placeholder) */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebook />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/233593712986"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default Contact;
