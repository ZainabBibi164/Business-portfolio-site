import React from 'react';

const Contact = () => {
  return (
    <>
      
      <div className="relative min-h-screen bg-neutral-50 pt-20 overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/contact.jpg"
          alt="Business contact background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Light Overlay for readability */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Content Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-800 mb-16">
            Let's Connect
          </h1>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                Reach Out Today
              </h2>
              <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                We're here to discuss your vision and how we can partner for success. Expect a response within 24 hours.
              </p>
              <div className="space-y-4 text-neutral-600">
                <p className="flex items-center">
                  <strong className="text-neutral-800 mr-2">Email:</strong> info@businessco.com
                </p>
                <p className="flex items-center">
                  <strong className="text-neutral-800 mr-2">Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>

            <form
              className="space-y-6 animate-fadeIn"
              action="https://formspree.io/f/mjkajwgd"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;