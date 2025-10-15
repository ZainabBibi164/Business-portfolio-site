import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-800 mb-16">About BusinessCo</h1>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Our Mission</h2>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Established in 2020, BusinessCo empowers enterprises with data-driven insights and agile methodologies to navigate complex markets.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Our multidisciplinary team combines expertise in strategy, technology, and operations to deliver measurable impact.
            </p>
          </div>
          <div className="animate-slide-up">
  <img 
    src="/images/about-team.jpg" 
    alt="Our professional team collaborating" 
    className="rounded-xl shadow-md w-full h-48 sm:h-64 object-cover" 
  />
</div>
        </div>
      </section>
    </div>
  );
};

export default About;