import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-600">Glitz Empire</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><a href="#home" className="hover:text-yellow-600">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-600">Services</a></li>
          <li><a href="#gallery" className="hover:text-yellow-600">Gallery</a></li>
          <li><a href="#pricing" className="hover:text-yellow-600">Pricing</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y
