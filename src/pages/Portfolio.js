import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const cases = [
    { 
      title: "E-Commerce Overhaul", 
      desc: "Increased sales 300% for retail client.", 
      metrics: "+300% Sales" 
    },
    { 
      title: "Marketing Campaign Launch", 
      desc: "Generated 500+ qualified leads in Q1.", 
      metrics: "+500 Leads" 
    },
    { 
      title: "Consulting for Scale-Up", 
      desc: "Streamlined ops, saving 40% on costs.", 
      metrics: "-40% Costs" 
    },
  ];

  useEffect(() => {
    // Force initial render if observer doesn't trigger
    const timer = setTimeout(() => {
      document.querySelectorAll('.portfolio-item').forEach(el => {
        el.style.opacity = '1';
      });
    }, 100);  // Small delay for mount

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 opacity-100">  {/* Ensure container is visible */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-800 mb-16">Our Success Stories</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => {
            const imagePath = `/images/portfolio-${c.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            return (
              <motion.div 
                key={i} 
                className="group portfolio-item"  // Add class for useEffect
                initial={{ opacity: 0, y: 10 }}  // Subtle slide instead of full fade
                whileInView={{ opacity: 1, y: 0 }}  // Removed 'once: true' to allow re-triggers
                transition={{ delay: i * 0.1 }}  // Stagger without viewport lock
                viewport={{ margin: "-10%" }}  // Wider trigger margin for short pages
              >
                <img 
                  src={imagePath} 
                  alt={`${c.title} project example`} 
                  className="rounded-xl w-full h-32 sm:h-48 object-cover mb-4 group-hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{c.title}</h3>
                <p className="text-neutral-600 mb-4">{c.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-bold">{c.metrics}</span>
                  <Link to="/contact" className="text-primary-600 hover:underline">Learn More →</Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;