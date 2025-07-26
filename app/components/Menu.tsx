import { AnimatedTitle } from './AnimatedTitle';
import { MenuCard } from './MenuCard';

const menuCategories = [
  {
    category: "Classic Pizzas",
    items: [
      {
        name: "Margherita",
        description: "Fresh mozzarella, tomato sauce, basil, extra virgin olive oil",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
        isVegetarian: true
      },
      {
        name: "Pepperoni",
        description: "Pepperoni, mozzarella, tomato sauce, oregano",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"
      },
      {
        name: "Classic",
        description: "Italian sausage, mushrooms, bell peppers, onions, mozzarella",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400"
      }
    ]
  },
  {
    category: "Specialty Pizzas",
    items: [
      {
        name: "Fire & Smoke Pizza",
        description: "Smoked mozzarella, spicy salami, roasted peppers, chili flakes",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400",
        isSpicy: true
      },
      {
        name: "White Buffalo Chicken",
        description: "Buffalo chicken, ranch drizzle, celery, blue cheese crumbles",
        image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=400",
        isSpicy: true
      },
      {
        name: "Wild Garden",
        description: "Artichokes, sun-dried tomatoes, spinach, goat cheese, pesto",
        image: "https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?w=400",
        isVegetarian: true
      },
      {
        name: "Truffle Royale",
        description: "Wild mushrooms, truffle oil, fontina, fresh thyme",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
        isVegetarian: true
      },
      {
        name: "Mediterranean Delight",
        description: "Feta, olives, sun-dried tomatoes, spinach, oregano",
        image: "https://images.unsplash.com/photo-1627461985459-51600559fffe?w=400",
        isVegetarian: true
      }
    ]
  },
  {
    category: "International Flavors",
    items: [
      {
        name: "BBQ Brisket",
        description: "Slow-cooked brisket, BBQ sauce, red onions, cilantro",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
      },
      {
        name: "Mexican Fiesta",
        description: "Chorizo, jalapeños, corn, cilantro, lime crema",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        isSpicy: true
      }
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedTitle>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2 text-white">Our Artisan Menu</h2>
            <p className="text-gray-400">Wood-fired pizzas crafted with passion and the finest ingredients</p>
          </div>
        </AnimatedTitle>
        
        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-orange-400 mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {category.items.map((item, index) => (
                <MenuCard 
                  key={index} 
                  {...item} 
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            All pizzas are 12" and serve 1-2 people. Gluten-free crust available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}