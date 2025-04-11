
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, ChefHat, ArrowRight, Star, Clock } from "lucide-react";

const BentoGrid = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-chef-lightgray" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-12 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-minmax(100px, auto)">
          {/* About Card - Large */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 bento-card group animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-outfit font-semibold mb-4 text-chef-charcoal flex items-center gap-2">
              <ChefHat className="text-chef-terracotta" />
              My Culinary Journey
            </h3>
            <p className="text-chef-charcoal/80 mb-4">
              I began my culinary career with humble roots, learning family recipes in my grandmother's kitchen. After formal training at Le Cordon Bleu, I worked in Michelin-starred restaurants across Europe before returning home to open my own restaurant focused on seasonal, locally-sourced ingredients.
            </p>
            <p className="text-chef-charcoal/80 mb-4">
              My cooking philosophy centers on respecting ingredients, honoring traditions while embracing innovation, and creating dishes that tell a story and evoke emotions.
            </p>
            <Button className="group-hover:bg-chef-terracotta bg-chef-coral text-white mt-2 transition-all duration-300">
              Read Full Bio <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Instagram Video Preview - Updated to portrait aspect ratio */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 bento-card overflow-hidden group animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full aspect-[9/16] max-w-[400px] mx-auto relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Cooking Preview" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Instagram className="text-white w-5 h-5" />
                    <p className="text-white font-medium">Instagram</p>
                  </div>
                  <h3 className="text-xl font-outfit font-semibold text-white mb-2">
                    Latest Recipe Creation
                  </h3>
                  <p className="text-white/80 text-sm">
                    Watch me create my signature summer salad with homemade vinaigrette
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-chef-terracotta flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white ml-1">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Card - Updated with gradient */}
          <div className="col-span-1 md:col-span-2 row-span-1 bento-card bg-gradient-to-br from-chef-terracotta via-chef-coral to-chef-saffron/80 animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-outfit font-semibold mb-3 text-white">
              Chef Experience
            </h3>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <p className="text-3xl font-bold font-outfit text-white">15+</p>
                <p className="text-white/80 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-outfit text-white">200+</p>
                <p className="text-white/80 text-sm">Recipes Created</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-outfit text-white">50+</p>
                <p className="text-white/80 text-sm">Cooking Classes</p>
              </div>
            </div>
          </div>
          
          {/* Awards Card - Updated with glassmorphism */}
          <div className="col-span-1 md:col-span-2 row-span-1 bento-card backdrop-blur-sm bg-white/60 hover:bg-white/80 animate-scale-in flex flex-col justify-center hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center mb-3">
              <Star className="text-chef-saffron w-8 h-8" />
            </div>
            <h3 className="text-xl font-outfit font-semibold mb-1 text-center text-chef-charcoal">
              Award-Winning Chef
            </h3>
            <p className="text-chef-charcoal/70 text-center">
              James Beard Award Finalist 2023
            </p>
          </div>
          
          {/* Signature Dish Preview */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bento-card group overflow-hidden animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.5s" }}>
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Signature Dish" 
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-outfit font-semibold text-white">
                  Herb-Crusted Salmon
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock className="w-4 h-4" /> 
                  <span>30 minutes</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* YouTube Link - Updated with glassmorphism */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bento-card backdrop-blur-sm bg-chef-sage/20 group hover:bg-chef-sage/30 transition-colors animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.6s" }}>
            <div className="flex flex-col h-full items-center justify-center text-center">
              <Youtube className="text-chef-terracotta w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-outfit font-semibold text-chef-charcoal">
                Subscribe to My Channel
              </h3>
              <p className="text-chef-charcoal/70 text-sm">
                Weekly recipe videos & cooking tips
              </p>
            </div>
          </div>
          
          {/* Cooking Philosophy - Updated with gradient border */}
          <div className="col-span-1 md:col-span-2 row-span-1 bento-card border-2 border-gradient-to-r from-chef-saffron to-chef-terracotta animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.7s", background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #F4B400, #C97C5D) border-box", borderColor: "transparent" }}>
            <h3 className="text-xl font-outfit font-semibold mb-2 text-chef-charcoal">
              Cooking Philosophy
            </h3>
            <p className="text-chef-charcoal/80">
              "I believe food should nourish both body and soul. My cooking celebrates ingredients in their purest form while adding creative touches that surprise and delight."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
