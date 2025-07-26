import { AnimatedTitle } from './AnimatedTitle';
import { MenuCard } from './MenuCard';

const menuCategories = [
  {
    category: "Pizza",
    items: [
      {
        name: "Margherita",
        description: "Tomato sauce, olive oil, mozzarella, basil",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
        isVegetarian: true
      },
      {
        name: "Pepperoni",
        description: "Tomato sauce, pepperoni, mozzarella, basil",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"
      },
      {
        name: "Cheese",
        description: "Tomato sauce, oregano, our signature blend of cheeses, basil",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400",
        isVegetarian: true
      },
      {
        name: "Quattro Formaggi",
        description: "Olive oil, mozzarella, gorgonzola, ricotta, parmesan, oregano, basil",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
        isVegetarian: true
      },
      {
        name: "Sausage al Fuoco",
        description: "Tomato sauce, homemade spicy sausage, spicy calabrese, chili pepper, mozzarella, parmesan, garlic, oregano, basil",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400",
        isSpicy: true
      },
      {
        name: "Spicy Egg",
        description: "Olive oil, bacon, homemade spicy sausage, egg, mozzarella, parmesan, oregano, garlic, basil",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400",
        isSpicy: true
      },
      {
        name: "Pork & Veggie Fiesta",
        description: "Tomato sauce, pork ham, mushroom, bell pepper, onion, spinach, mozzarella, oregano, basil",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
      },
      {
        name: "Spicy Buffalo Chicken",
        description: "BBQ sauce, mozzarella, chargrilled chicken coated in buffalo sauce, bell pepper, onion",
        image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=400",
        isSpicy: true
      },
      {
        name: "BBQ Chicken",
        description: "BBQ sauce, chargrilled chicken, mozzarella, olive oil, cilantro, onion",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400"
      },
      {
        name: "Flavors of Armenia",
        description: "New pizza every month with traditional Armenian ingredients",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400"
      },
      {
        name: "Chicken Pesto",
        description: "Basil pesto, tomato sauce drizzle, chargrilled chicken, ricotta, mozzarella",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400"
      }
    ]
  },
  {
    category: "Premium Pizzas",
    items: [
      {
        name: "Truffle Butter",
        description: "Truffle butter, mushroom, herbs, mozzarella, parmesan, basil",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
        isVegetarian: true,
        isPremium: true
      },
      {
        name: "Truffle and Prosciutto",
        description: "Truffle butter, truffle oil, mushroom, prosciutto, arugula, mozzarella",
        image: "https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?w=400",
        isPremium: true
      },
      {
        name: "Nashville Hot Chicken",
        description: "BBQ sauce, Nashville style hot chicken, mozzarella, coleslaw, pickles, house sauce",
        image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=400",
        isSpicy: true,
        isPremium: true
      }
    ]
  },
  {
    category: "Dessert Pizzas & More",
    items: [
      {
        name: "Chocolate & Berries Pizza",
        description: "Mixed berry jam topped with nutella, powdered sugar, and balsamic vinegar glaze",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400",
        isDessert: true
      },
      {
        name: "Apple and Cinnamon Pizza",
        description: "Peanut butter topped with apples, cinnamon, brown sugar, and a scoop of vanilla ice cream",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
        isDessert: true
      },
      {
        name: "Dubai Chocolate Pizza",
        description: "Pistachio cream mixed with crispy knafeh and topped with chocolate drizzle",
        image: "https://images.unsplash.com/photo-1606924735276-fbb5b325e933?w=400",
        isDessert: true,
        extraCharge: true
      },
      {
        name: "Round Gata",
        description: "Dough filled with sweet and creamy mixture of butter, sugar, and vanilla served hot and fresh",
        image: "https://images.unsplash.com/photo-1621743478914-cc8a86c7e7b5?w=400",
        isDessert: true,
        extraCharge: true
      }
    ]
  },
  {
    category: "Sides & Salads",
    items: [
      {
        name: "Caesar Salad",
        description: "Fresh lettuce, Herbs de Provence cheese, chicken, croutons, caesar dressing",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400"
      },
      {
        name: "Gorgonzola & Pear Salad",
        description: "Gorgonzola, pear, walnut, parmesan, kale, our signature dressing",
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400",
        isVegetarian: true
      },
      {
        name: "Caprese Salad",
        description: "Mozzarella, cherry tomatoes, basil leaves, olive oil, balsamic vinegar glaze",
        image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=400",
        isVegetarian: true
      },
      {
        name: "Chicken Wings",
        description: "Buffalo, lemon pepper - $7 per person",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400",
        price: "$7 per person"
      },
      {
        name: "Armenian-Style Tomato Omelette",
        description: "Sweet tomatoes, spicy pepper, basil, eggs | $25 per serving",
        image: "https://images.unsplash.com/photo-1604497181015-76590d828b75?w=400",
        price: "$25 per serving",
        isVegetarian: true
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
        
        <div className="mt-12 text-center space-y-2">
          <p className="text-gray-400 italic">
            Gluten free dough available upon request
          </p>
          <p className="text-gray-400 text-sm">
            ** Premium pizza additional $2.50 / person | *** Premium pizza additional $3.50 / person
          </p>
          <p className="text-gray-400 text-sm">
            *** Dubai Chocolate Pizza and Round Gata charged per order
          </p>
        </div>
      </div>
    </section>
  );
}