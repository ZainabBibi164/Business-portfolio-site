import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Scalable, secure applications built with modern frameworks to enhance your digital footprint.",
      img: "/images/web-icon.jpg",
    },
    {
      title: "Digital Marketing",
      description:
        "Targeted campaigns leveraging SEO, content, and analytics to amplify your brand's reach.",
      img: "/images/services-marketing-icon.png.jpg", // ✅ correct filename
    },
    {
      title: "Business Consulting",
      description:
        "Expert guidance on operational efficiency, market expansion, and strategic planning.",
      img: "/images/consulting-icon.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white pt-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-neutral-900 mb-16"
        >
          Our <span className="text-primary-600">Core Services</span>
        </motion.h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center p-8">
                {/* Icon / Image */}
                <div className="w-24 h-24 mb-6 rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center border border-neutral-200 shadow-inner">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-contain rounded-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed text-sm md:text-base max-w-xs">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
