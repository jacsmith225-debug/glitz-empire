import React, { useState, useEffect } from "react";
import Logo from "../assets/logo/glitz-logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <img
          src={Logo}
          alt="Glitz Empire Logo"
          className={`h-12 md:h-14 w-auto object-contain transition duration-300 ${
            scrolled ? "opacity-100" : "opacity-90"
          }`}
        />

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-10 text-lg font-medium transition duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#gallery" className="hover:text-yellow-500">Gallery</a></li>
          <li><a href="#pricing" className="hover:text-yellow-500">Pricing</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-3xl ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-800">
          <a href="#home" onClick={() => setOpen(false)} className="block">Home</a>
          <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
          <a href="#gallery" onClick={() => setOpen(false)} className="block">Gallery</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block">Pricing</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
