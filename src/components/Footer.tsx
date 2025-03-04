
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium">ThailandTrek</h3>
            <p className="text-gray-400 text-sm">
              Crafting unforgettable luxury journeys through the Land of Smiles since 2008.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Destinations', 'About', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Destinations */}
          <div>
            <h4 className="text-lg font-medium mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              {['Bangkok', 'Phuket', 'Chiang Mai', 'Koh Samui', 'Krabi', 'Ayutthaya'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Get Travel Inspiration</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive travel tips, exclusive offers, and Thailand inspiration.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-thai-turquoise text-sm"
                />
                <button 
                  type="submit" 
                  className="bg-thai-turquoise hover:bg-thai-turquoise/90 text-white px-4 py-2 rounded-r-md transition-colors text-sm"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} ThailandTrek. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-xs">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
