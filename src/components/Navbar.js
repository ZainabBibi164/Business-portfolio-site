import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-neutral-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-neutral-800">BusinessCo</Link>
          <ul className="hidden md:flex space-x-6 lg:space-x-10">
            <li><Link to="/" className="text-neutral-600 hover:text-neutral-800 font-medium transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-neutral-600 hover:text-neutral-800 font-medium transition-colors">About</Link></li>
            <li><Link to="/services" className="text-neutral-600 hover:text-neutral-800 font-medium transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="text-neutral-600 hover:text-neutral-800 font-medium transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="text-neutral-600 hover:text-neutral-800 font-medium transition-colors">Contact</Link></li>
          </ul>
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-neutral-600 text-xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
            />
            <motion.ul 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 w-64 h-full bg-white border-l border-neutral-200 py-8 px-4 z-50 shadow-lg"
            >
              <li className="mb-6">
                <Link to="/" className="block text-lg font-medium text-neutral-600 hover:text-neutral-800 py-2" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="mb-6">
                <Link to="/about" className="block text-lg font-medium text-neutral-600 hover:text-neutral-800 py-2" onClick={toggleMenu}>About</Link>
              </li>
              <li className="mb-6">
                <Link to="/services" className="block text-lg font-medium text-neutral-600 hover:text-neutral-800 py-2" onClick={toggleMenu}>Services</Link>
              </li>
              <li className="mb-6">
                <Link to="/portfolio" className="block text-lg font-medium text-neutral-600 hover:text-neutral-800 py-2" onClick={toggleMenu}>Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="block text-lg font-medium text-neutral-600 hover:text-neutral-800 py-2" onClick={toggleMenu}>Contact</Link>
              </li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;