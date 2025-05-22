
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import pantaBhat from "@/assets/panta_bhat.jpg";
import wrap from "@/assets/wrap.jpg";
import falafel from "@/assets/falafel.jpeg";
import gobitahini from "@/assets/gobitahini.jpeg";
import sattu from "@/assets/sattu_img.jpeg";

const dishes = [
  {
    id: 1,
    name: "Panta Bhat",
    description: "Panta Bhat with Tomato, Onion, and Garlic",
    image: pantaBhat,
    categories: ["Plant Based", "French"]
  },
  {
    id: 2,
    name: "Wrap",
    description: "Wrap with Tomato, Onion, and Garlic",
    image: wrap,
    categories: ["Plant Based", "Thai"]
  },
  {
    id: 3,
    name: "Falafel",
    description: "Falafel with Tomato, Onion, and Garlic",
    image: falafel,
    categories: ["Plant Based", "Italian"]
  },
  {
    id: 4,
    name: "Gobitahini",
    description: "Gobitahini with Tomato, Onion, and Garlic",
    image: gobitahini,
    categories: ["Plant Based", "Thai"]
  },
//   {
//     id: 5,
//     name: "Sattu",
//     description: "Sattu with Tomato, Onion, and Garlic",
//     image: sattu,
//     categories: ["Plant Based", "Indian"]
//   }
];

const MyDishes = () => {
  return (
    <section className="py-20 px-6 md:px-12" id="dishes">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="px-4 py-1 bg-chef-cream text-chef-terracotta rounded-full text-sm font-medium mb-4 inline-block">Culinary Creations</span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4">
              <span className="text-gradient">My Dishes</span>
            </h2>
            <p className="text-chef-charcoal/80 max-w-xl">
              Iconic creations that showcase my culinary style and techniques.
            </p>
          </div>
          {/* <Button variant="ghost" className="text-chef-terracotta hover:text-chef-coral mt-4 md:mt-0 self-start md:self-auto group">
            View All Recipes <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={dish.id} 
              className="bento-card group overflow-hidden animate-scale-in hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-56 overflow-hidden rounded-2xl mb-5 relative">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className={`w-full h-full object-cover ${dish.id === 3 ? "scale-110 group-hover:scale-125" : "group-hover:scale-105"} transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* <div className="flex gap-2 mb-3">
                {dish.categories.map((category) => (
                  <span key={category} className="text-xs font-medium px-3 py-1 rounded-full bg-chef-cream text-chef-terracotta">
                    {category}
                  </span>
                ))}
              </div> */}
              <h3 className="text-lg font-outfit font-semibold text-chef-charcoal mb-2 group-hover:text-chef-terracotta transition-colors">
                {dish.name}
              </h3>
              <p className="text-chef-charcoal/70 text-sm mb-2">
                {dish.description}
              </p>
              {/* <Button 
                variant="ghost" 
                className="text-chef-terracotta hover:text-chef-coral hover:bg-chef-cream/50 p-0 h-auto group-hover:-translate-y-1 transition-all duration-300"
              >
                View Recipe <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyDishes;
