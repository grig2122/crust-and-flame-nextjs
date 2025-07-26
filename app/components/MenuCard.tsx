'use client';

import Image from 'next/image';
import { Leaf, Flame } from 'lucide-react';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

interface MenuCardProps {
  image: string;
  name: string;
  description: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPremium?: boolean;
  isDessert?: boolean;
  extraCharge?: boolean;
  price?: string;
  delay?: number;
}

export const MenuCard: React.FC<MenuCardProps> = ({ 
  image, 
  name, 
  description, 
  isVegetarian, 
  isSpicy,
  isPremium,
  isDessert,
  extraCharge,
  price,
  delay = 0 
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-1000 border border-gray-700 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-48 overflow-hidden relative">
        <Image 
          src={image} 
          alt={name} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {name}
          {isPremium && <span className="text-orange-400 text-sm ml-2">**</span>}
          {extraCharge && <span className="text-orange-400 text-sm ml-2">***</span>}
        </h3>
        <p className="text-gray-400 mb-3 text-sm">{description}</p>
        {price && (
          <p className="text-orange-400 font-semibold mb-3">{price}</p>
        )}
        <div className="flex gap-2">
          {isVegetarian && (
            <span className="inline-flex items-center text-green-500 text-sm">
              <Leaf className="w-4 h-4 mr-1" />
              Vegetarian
            </span>
          )}
          {isSpicy && (
            <span className="inline-flex items-center text-red-500 text-sm">
              <Flame className="w-4 h-4 mr-1" />
              Spicy
            </span>
          )}
          {isDessert && (
            <span className="inline-flex items-center text-purple-500 text-sm">
              Dessert
            </span>
          )}
        </div>
      </div>
    </div>
  );
};