function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to{" "}
          <span className="text-gold">
            Glitz Empire Ushering & Marketing Agency
          </span>
        </h1>

        <p className="text-white text-lg md:text-xl mt-4 drop-shadow-lg">
          Professional. Elegant. Reliable. Your event deserves the best.
        </p>

        <button className="mt-8 bg-gold text-white px-6 py-3 text-lg rounded-full shadow-lg hover:opacity-90">
          Book Us Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
