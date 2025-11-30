function Services() {
  const services = [
    {
      title: "Event Ushering",
      description: "Elegant ushers trained to guide your guests with professionalism and class.",
      icon: "💼",
    },
    {
      title: "Wedding Ushers",
      description: "Beautiful, organized ushers to make your special day flawless.",
      icon: "💍",
    },
    {
      title: "Corporate Event Ushers",
      description: "Trained ushers for conferences, business meetings, and company events.",
      icon: "🏢",
    },
    {
      title: "Brand Promotion",
      description: "Energetic ushers to represent your brand with confidence.",
      icon: "📢",
    },
    {
      title: "Product Activation",
      description: "Professional ushers trained to engage customers and promote products.",
      icon: "🛍️",
    },
    {
      title: "VIP Protocol",
      description: "Highly trained personnel for VIP and high-profile clients.",
      icon: "⭐",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-gold mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
