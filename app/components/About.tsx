'use client';

import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { Award, Users, Clock, Sparkles } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: "Passion for Authenticity",
      description: "Traditional Neapolitan techniques with imported Italian ingredients"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Supporting local events and bringing people together through food"
    },
    {
      icon: Clock,
      title: "Time-Honored Tradition",
      description: "Wood-fired ovens reaching 900°F for the perfect crust"
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Only the finest ingredients and meticulous attention to detail"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Our <span className="text-orange-400">Story</span>
            </h2>
          </AnimatedTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <AnimatedText>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Crust & Flame was founded by Robert H, whose journey began in the heart of Los Angeles, working in some of the city's most renowned pizzerias. There, he learned from the best — Italian chefs trained in Napoli — mastering the time-honored techniques of true Neapolitan pizza.
                </p>
              </AnimatedText>
              <AnimatedText delay={200}>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Driven by a passion for wood-fired cooking and authentic flavors, Robert launched Crust & Flame as a way to bring that rich tradition to events across the region.
                </p>
              </AnimatedText>
              <AnimatedText delay={400}>
                <p className="text-gray-600 leading-relaxed">
                  What began as a humble mobile oven setup has grown into a sought-after catering service, known for its artisan pizzas, imported ingredients, and that unmistakable wood-fired taste.
                </p>
              </AnimatedText>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600"
                  alt="Margherita pizza with fresh basil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedText key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-orange-400" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </AnimatedText>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}