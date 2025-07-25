'use client';

import { LucideIcon } from 'lucide-react';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  delay = 0 
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 flex justify-center">
        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
          <Icon className="w-12 h-12 text-orange-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2 text-left inline-block">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};