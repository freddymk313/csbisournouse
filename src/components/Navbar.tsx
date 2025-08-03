import React, { useState, useEffect } from 'react';
// import { Button } from './ui/button';
// import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { navigationLinks } from '../constants';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate navbar on mount
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate nav links
    gsap.fromTo('.nav-link',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar *fixed *top-0 *left-0 *right-0 *z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`} >
      <div className="mx-auto px-4 md:px-16 lg:px-20 py-4"> 
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a>
            <img src="/logo.jpg" alt="logo" className="h-19 w-19" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`nav-link *font-medium transition-colors duration-300 hover:text-[#0073b7] ${
                  isScrolled ? 'text-gray-700' : 'text-gray-950'
                }`}
              >
                {link.text}
              </a>
            ))}
            <button className="bg-[#0073b7] hover:bg-[#005a8f] text-white px-6 py-2.5 rounded-md">
              Inscription
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-gray-950'
            }`}
          >
            {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
            {isMenuOpen ? "Close" : "Open"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-[#0073b7] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <button className="bg-[#0073b7] hover:bg-[#005a8f] text-white px-6 py-2.5 rounded-lg w-fit">
                Inscription
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};