'use client';

import { Flame, ChefHat, CalendarCheck, BookOpen, MapPin } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center justify-center text-white">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <div className="relative">
            <Flame className="w-16 h-16 md:w-24 md:h-24 text-orange-400" />
            <ChefHat className="w-8 h-8 text-white absolute -top-2 -right-2" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold ml-4">
            <span className="text-orange-400">Crust</span>
            <span className="text-white mx-2">&</span>
            <span className="text-orange-400">Flame</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in animate-delay-100">
          Artisan wood-fired pizza catering that brings the authentic taste of Italy to your special events
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in animate-delay-200">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book Your Event
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View Menu
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm animate-fade-in animate-delay-300">
          <span className="flex items-center justify-center">
            <Flame className="w-4 h-4 mr-2" />
            Authentic Wood-Fired Ovens
          </span>
          <span className="flex items-center justify-center">
            <MapPin className="w-4 h-4 mr-2" />
            Serving the Greater Los Angeles Area
          </span>
        </div>
      </div>
    </section>
  );
};