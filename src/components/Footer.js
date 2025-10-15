import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-neutral-800 text-white py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">BusinessCo</h3>
        <p className="text-neutral-400">Driving business success through innovation.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link to="/about" className="text-neutral-400 hover:text-white">About</Link></li>
          <li><Link to="/services" className="text-neutral-400 hover:text-white">Services</Link></li>
          <li><Link to="/portfolio" className="text-neutral-400 hover:text-white">Portfolio</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <p className="text-neutral-400">info@businessco.com<br />+1 (555) 123-4567</p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-neutral-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-neutral-400 hover:text-white">Twitter</a>
        </div>
      </div>
    </div>
    <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
      © 2025 BusinessCo. All rights reserved. | <Link to="/privacy">Privacy Policy</Link>
    </div>
  </footer>
);

export default Footer;