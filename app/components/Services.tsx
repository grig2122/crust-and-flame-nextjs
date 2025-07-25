'use client';

import { Users, Calendar, Utensils, Award } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';

export const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedTitle>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Our <span className="text-orange-400">Catering</span> Services
          </h2>
        </AnimatedTitle>
        <AnimatedText delay={100}>
          <p className="text-lg text-center mb-16 text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to large celebrations, we bring the warmth and flavor of wood-fired pizza directly to your event
          </p>
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={Users}
            title="Corporate Events"
            description="Impress your team and clients with authentic wood-fired pizzas at your next corporate gathering."
            features={["Team building events", "Office parties", "Client entertainment", "Product launches"]}
            delay={0}
          />
          <ServiceCard 
            icon={Calendar}
            title="Private Celebrations"
            description="Make your special day unforgettable with our mobile pizza catering service."
            features={["Weddings", "Birthday parties", "Graduations", "Family reunions"]}
            delay={100}
          />
          <ServiceCard 
            icon={Utensils}
            title="Festival Catering"
            description="Bring the authentic Italian experience to festivals and large outdoor events."
            features={["Music festivals", "Food fairs", "Community events", "Farmers markets"]}
            delay={200}
          />
          <ServiceCard 
            icon={Award}
            title="Premium Service"
            description="Our professional team ensures exceptional service from setup to cleanup."
            features={["Full setup included", "Professional staff", "Premium ingredients", "Complete cleanup"]}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};