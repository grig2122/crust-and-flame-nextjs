'use client';

import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { Instagram } from 'lucide-react';
import { useState } from 'react';

export function Gallery() {
  const [images] = useState([
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', 
      alt: 'Delicious pizza'
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400', 
      alt: 'Pizza coming out of wood-fired oven' 
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', 
      alt: 'Perfect Margherita pizza' 
    },
    { 
      id: 4, 
      url: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400', 
      alt: 'Fresh salad plate' 
    },
    { 
      id: 5, 
      url: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400', 
      alt: 'Personal pizza with fresh toppings' 
    },
    { 
      id: 6, 
      url: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400', 
      alt: 'Multiple pizzas ready to serve' 
    },
    { 
      id: 7, 
      url: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400', 
      alt: 'Cheese pull shot' 
    },
    { 
      id: 8, 
      url: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400', 
      alt: 'Pizza slice' 
    },
  ]);

  return (
    <section id="gallery" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <AnimatedTitle>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            See Us In <span className="text-orange-400">Action</span>
          </h2>
        </AnimatedTitle>
        
        <AnimatedText delay={200}>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From setup to the first bite, see what makes our wood-fired pizzas and services special
          </p>
        </AnimatedText>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.map((image, index) => (
              <AnimatedText key={image.id} delay={100 + index * 50}>
                <div 
                  className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                >
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
          
          <AnimatedText delay={600}>
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">Follow us for daily pizza inspiration</p>
              <div className="flex justify-center">
                <a 
                  href="https://instagram.com/crustandflame" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}