import { Button, type ButtonProps } from "@/components/ui/button";
import chefImage from "@/assets/chef-madhavi.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chef-cream via-white to-chef-sage/20 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-chef-saffron rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-chef-terracotta rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="px-4 py-1 bg-chef-cream text-chef-terracotta rounded-full text-sm font-medium mb-6 inline-block">Award-Winning Chef</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-6 leading-tight">
            <span className="text-gradient">Crafting Culinary</span> <br />
            Magic For Your Palate
          </h1>
          <p className="text-lg md:text-xl text-chef-charcoal/80 mb-8 max-w-xl">
            Award-winning chef specializing in seasonal ingredients 
            and creative flavor combinations. Let's create memorable 
            dining experiences together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-chef-terracotta hover:bg-chef-coral text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              View My Work
            </Button>
            <Button 
              className="border border-chef-terracotta bg-transparent text-chef-terracotta hover:bg-chef-terracotta/10 text-lg px-8 py-6 rounded-xl hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-chef-saffron rounded-full opacity-20 blur-lg"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-chef-coral rounded-full opacity-20 blur-lg"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-chef-terracotta/10 rounded-full blur-3xl"></div>
            <img 
              src={chefImage}
              alt="Chef Portrait" 
              className="w-full h-auto rounded-3xl object-cover shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(201,124,93,0.3)] transition-all duration-700"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce duration-1000 cursor-pointer"
        aria-label="Scroll to About section"
      >
      </a>
    </section>
  );
};

export default Hero;
