export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h2 className="text-2xl font-bold text-dark">Glitz Empire</h2>

        <ul className="hidden md:flex gap-8 text-dark font-medium">
          <li><a href="#home" className="hover:text-gold">Home</a></li>
          <li><a href="#services" className="hover:text-gold">Services</a></li>
          <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
          <li><a href="#contact" className="hover:text-gold">Contact</a></li>
        </ul>

        <button className="md:hidden px-4 py-2 border border-dark rounded-lg">
          ☰
        </button>
      </div>
    </nav>
  );
}
