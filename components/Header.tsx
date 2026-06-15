'use client';

import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="font-bold text-xl text-gray-900 dark:text-white">
            <img src="/logo/logowhite.jpg" className='w-32' alt="" />
          </a>

  

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+447480022706" 
              className="hidden md:inline-flex items-center gap-2 rounded-md justify-center px-4 py-2 text-sm font-semibold text-white bg-[#0000ff]  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
                 <Phone size={20} />
             +44 7480-022-706
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
       
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="flex justify-center  w-full items-center gap-2 px-4 py-3 mt-2 text-base font-semibold text-white bg-[#0000ff] rounded-lg hover:bg-blue-700"
            >
            <Phone size={20} />
             +44 7480-022-706
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
