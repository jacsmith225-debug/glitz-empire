function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gold mb-10">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Event Type</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Wedding, Birthday, Corporate Event..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Tell us about your event..."
            ></textarea>
          </div>

          <button className="w-full bg-gold text-white py-3 rounded-lg shadow hover:opacity-90">
            Submit
          </button>
        </form>

        {/* Contact Details */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Reach Us</h3>

          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +233 000 000 000
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> glitzempire@gmail.com
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Location:</strong> Accra, Ghana
          </p>

          <a
            href="https://wa.me/233000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white text-center py-3 rounded-lg shadow hover:opacity-90 mb-6"
          >
            📲 Chat on WhatsApp
          </a>

          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
              alt="Location"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
