'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Image 
              src="/favicon-32x32.png" 
              alt="Crust & Flame Logo" 
              width={32} 
              height={32} 
              className="mr-2"
            />
            <span className="text-2xl font-bold text-white">
              <span className="text-orange-400">Crust</span> & <span className="text-orange-400">Flame</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-orange-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-orange-400 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-orange-400 transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-orange-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-orange-400 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors"
            >
              Contact Us
            </button>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 rounded-lg shadow-lg p-4 mb-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-white hover:text-orange-400 py-2 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white hover:text-orange-400 py-2 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-white hover:text-orange-400 py-2 transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-orange-400 py-2 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-white hover:text-orange-400 py-2 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors mt-2"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
}