import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-gold">Glitz Empire</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <li className="hover:text-gold cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gold cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-gold cursor-pointer">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="hover:text-gold cursor-pointer">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="hover:text-gold cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Book Us button */}
        <button className="hidden md:block bg-gold text-white px-4 py-2 rounded-full shadow hover:opacity-90">
          Book Us
        </button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-3xl text-gold">&#9776;</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-gray-800 font-semibold">
            <li className="hover:text-gold cursor-pointer">
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>

            <button className="bg-gold text-white px-4 py-2 rounded-full shadow hover:opacity-90">
              Book Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
