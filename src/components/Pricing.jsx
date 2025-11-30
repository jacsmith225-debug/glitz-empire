function Pricing() {
  const packages = [
    {
      name: "Basic Package",
      price: "$150",
      features: [
        "2 Professional Ushers",
        "4 Hours Coverage",
        "Standard Uniform",
        "Guest Direction & Coordination",
      ],
    },
    {
      name: "Standard Package",
      price: "$250",
      features: [
        "4 Professional Ushers",
        "6 Hours Coverage",
        "Elegant Uniform",
        "Guest Coordination & Seating",
        "Reception Support",
      ],
      highlighted: true,
    },
    {
      name: "Premium Package",
      price: "$400",
      features: [
        "6–8 Professional Ushers",
        "Full Day Coverage",
        "Luxury Custom Uniform",
        "Protocol Services",
        "VIP Handling",
        "On-site Supervisor",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-gold mb-10">
        Our Pricing Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-lg border ${
              pkg.highlighted ? "border-gold scale-105" : "border-gray-200"
            } hover:shadow-xl transition duration-300 bg-white`}
          >
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
              {pkg.name}
            </h3>

            <p className="text-4xl font-bold text-center text-gold mb-6">
              {pkg.price}
            </p>

            <ul className="text-gray-700 space-y-3 mb-6">
              {pkg.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  ✔️ <span className="ml-2">{f}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button className="bg-gold text-white px-6 py-3 rounded-full hover:opacity-90 shadow">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
