import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-slide-up');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 text-center">
        {/* Background Image */}
        <img
          src="/images/hero-bg.jpg"
          alt="Abstract business background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 transition-transform duration-1000"
        />

        {/* Gradient Overlay (for elegant readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="animate-fade-in">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-3 sm:px-4 py-2 rounded-xl bg-primary-50 text-primary-700 text-sm font-medium mb-4 sm:mb-6"
            >
              Trusted by 50+ Leading Companies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight"
            >
              Transform Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base sm:text-xl text-neutral-700 mb-6 sm:mb-10 max-w-xs sm:max-w-3xl mx-auto leading-relaxed px-4"
            >
              Expert web development, marketing, and consulting to scale your operations and outpace competitors.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg"
                >
                  Book a Free Consult
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-neutral-800 hover:text-primary-700 font-medium transition-colors w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg"
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: 'Innovation', text: 'Tailored strategies for emerging technologies.' },
            { title: 'Excellence', text: 'Uncompromising quality in every deliverable.' },
            { title: 'Partnership', text: 'Collaborative growth for long-term success.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center animate-slide-up"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                whileHover={{ scale: 1.05, color: '#0d9488' }}
                className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2"
              >
                {feature.title}
              </motion.h3>
              <p className="text-neutral-600 text-sm sm:text-base">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center text-neutral-800 mb-12 sm:mb-16"
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                quote: 'BusinessCo delivered our site 2x faster than expected — game-changer!',
                name: 'Jane Doe',
                title: 'CEO @ TechStartup',
                logo: '/images/t3.jpg',
              },
              {
                quote: 'Their marketing strategy boosted our leads by 150%. Highly recommend!',
                name: 'John Smith',
                title: 'Founder @ GrowthCo',
                logo: '/images/t2.jpg',
              },
              {
                quote: 'Professional, reliable, and results-driven. 10/10 experience!',
                name: 'Emily Chen',
                title: 'Director @ InnovateCorp',
                logo: '/images/t1.jpg',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 mb-5 shadow-md border border-neutral-100">
                    <motion.img
                      src={testimonial.logo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <motion.p
                    className="text-neutral-600 italic text-base sm:text-lg mb-4 leading-relaxed"
                    whileHover={{ scale: 1.02 }}
                  >
                    “{testimonial.quote}”
                  </motion.p>

                  <p className="font-semibold text-neutral-900 text-lg">{testimonial.name}</p>
                  <p className="text-primary-600 text-sm sm:text-base font-medium">
                    {testimonial.title}
                  </p>
                  <div className="mt-4 w-12 h-1 bg-primary-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
