import { Button } from "@/components/ui/button";
import { Instagram, Youtube, ChefHat, ArrowRight, Star, Clock } from "lucide-react";
import md1 from "@/assets/md-p1-cf.jpeg";
import md2 from "@/assets/md-p2-cf.jpeg";
import md5 from "@/assets/md-p5-cf.jpeg";

const journey = {
  title: "My Culinary Journey",
  description: "From a software engineer to a student at Le Cordon Bleu Dusit, my culinary journey has been driven by a deep-rooted love for cooking. With over 18 years of home-cooking experience, I've crafted hundreds of vegetarian recipes inspired by Indian festivals, global cuisines, and seasonal ingredients. My passion for food led me to share my creations on Instagram (@chefmadhavi) and YouTube, where I celebrate plant-based flavors with vibrant visuals and step-by-step guides. Now, as I refine my skills at Le Cordon Bleu Dusit, I am excited to bring even more creativity and authenticity to every dish I prepare."
}
const philosophy = {
  title: "Cooking Philosophy",
  description: "I believe food is a celebration of culture, tradition, and innovation. My cooking is rooted in vegetarianism, plant-based living, and flavor balancing. I strive to bridge tradition and modern cuisine, making each dish both meaningful and delicious."
}

const BentoGrid = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-chef-lightgray" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-12 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-minmax(100px, auto)">
          {/* About Card - Large */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-2 bento-card group animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-outfit font-semibold mb-4 text-chef-charcoal flex items-center gap-2">
              <ChefHat className="text-chef-terracotta" />
              {journey.title}
            </h3>
            <p className="text-chef-charcoal/80 mb-4">
              {journey.description}
            </p>
          </div>
          
          {/* Instagram Video Preview - Updated to portrait aspect ratio */}
          {/* <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 bento-card overflow-hidden group animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full aspect-[9/16] max-w-[400px] mx-auto relative overflow-hidden rounded-2xl">
                  <img 
                    src="src/images/ponta_rice.jpg" 
                    alt="Cooking Preview" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div> */}
          
          {/* Stats Card - Updated with gradient */}
          <div className="col-span-1 md:col-span-2 row-span-1 bento-card bg-gradient-to-br from-chef-terracotta via-chef-coral to-chef-saffron/80 animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-outfit font-semibold mb-3 text-white">
              Experience
            </h3>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <p className="text-3xl font-bold font-outfit text-white">18+</p>
                <p className="text-white/80 text-sm">Home Cooking Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-outfit text-white">200+</p>
                <p className="text-white/80 text-sm">Recipes Uploaded</p>
              </div>
            </div>
          </div>
          
          {/* Awards Card - Updated with glassmorphism */}
          <div className="col-span-1 md:col-span-2 row-span-1 bento-card backdrop-blur-sm bg-white/60 hover:bg-white/80 animate-scale-in flex flex-col justify-center hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center mb-3">
              <Star className="text-chef-saffron w-8 h-8" />
            </div>
            <h3 className="text-xl font-outfit font-semibold mb-1 text-center text-chef-charcoal">
              Diploma in Plant-Based Culinary Arts
            </h3>
            <p className="text-chef-charcoal/70 text-center">
              Student at Le Cordon Bleu Dusit
            </p>
          </div>
        
          
          {/* YouTube Link - Updated with glassmorphism */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bento-card backdrop-blur-sm bg-chef-sage/20 group hover:bg-chef-sage/30 transition-colors animate-scale-in hover:shadow-xl transition-all duration-500 h-full w-full p-0" style={{ animationDelay: "0.6s" }}>
            <img 
              src={md1} 
              className="w-full h-full object-cover"
              alt="Chef Madhavi" 
            />
          </div>
          
          {/* Cooking Philosophy - Updated with gradient border */}
          {/* <div className="col-span-1 md:col-span-2 row-span-1 bento-card border-2 from-chef-saffron to-chef-terracotta animate-scale-in hover:shadow-xl transition-all duration-500" style={{ animationDelay: "0.7s", background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #F4B400, #C97C5D) border-box", borderColor: "transparent" }}>
            <h3 className="text-xl font-outfit font-semibold mb-2 text-chef-charcoal">
              {philosophy.title}
            </h3>
            <p className="text-chef-charcoal/80">
              {philosophy.description}
            </p>
          </div> */}

          <div className="col-span-1 md:col-span-2 row-span-1 bento-card border-2 from-chef-saffron to-chef-terracotta animate-scale-in hover:shadow-xl transition-all duration-500 w-full p-0" style={{ animationDelay: "0.7s", background: "linear-gradient(white, white) padding-box border-box", borderColor: "transparent" }}>
          <img 
              src={md5} 
              className="w-full h-full object-cover"
              alt="Chef Madhavi" 
            />
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bento-card backdrop-blur-sm bg-chef-sage/20 group hover:bg-chef-sage/30 transition-colors animate-scale-in hover:shadow-xl transition-all duration-500 h-full w-full p-0" style={{ animationDelay: "0.6s" }}>
            <img 
              src={md2} 
              className="w-full h-full object-cover"
              alt="Chef Madhavi" 
            />
          </div>

          {/* Cooking Philosophy - Updated with gradient border */}
          <div className="col-span-1 md:col-span-3 lg:col-span-6 row-span-2 bento-card group animate-scale-in hover:shadow-xl transition-all duration-500 py-8" style={{ animationDelay: "0.7s", background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #F4B400, #C97C5D) border-box", borderColor: "transparent" }}>
            <h3 className="text-xl font-outfit font-semibold mb-4 text-chef-charcoal">
              {philosophy.title}
            </h3>
            <p className="text-chef-charcoal/80">
              {philosophy.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
