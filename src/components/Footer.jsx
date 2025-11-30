function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200 mt-20">
      <div className="px-6 md:px-20">
        
        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-gold mb-4">
          Glitz Empire Ushering & Marketing Agency
        </h2>

        {/* Navigation */}
        <ul className="flex flex-wrap gap-6 text-gray-700 mb-6">
          <li className="hover:text-gold cursor-pointer">Home</li>
          <li className="hover:text-gold cursor-pointer">About</li>
          <li className="hover:text-gold cursor-pointer">Services</li>
          <li className="hover:text-gold cursor-pointer">Gallery</li>
          <li className="hover:text-gold cursor-pointer">Pricing</li>
          <li className="hover:text-gold cursor-pointer">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mb-6 text-gray-700">
          <span className="hover:text-gold cursor-pointer">📘</span>
          <span className="hover:text-gold cursor-pointer">📷</span>
          <span className="hover:text-gold cursor-pointer">🐦</span>
          <span className="hover:text-gold cursor-pointer">🎥</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-600">
          © {new Date().getFullYear()} Glitz Empire. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
