
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chef-cream via-white to-chef-sage/20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
            <Button className="bg-chef-terracotta hover:bg-chef-coral text-white text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" className="border-chef-terracotta text-chef-terracotta hover:bg-chef-terracotta/10 text-lg px-8 py-6">
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-chef-saffron rounded-full opacity-20 blur-lg"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-chef-coral rounded-full opacity-20 blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" 
              alt="Chef Portrait" 
              className="w-full h-auto rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce duration-1000 cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle className="w-10 h-10 text-chef-terracotta" />
      </a>
    </section>
  );
};

export default Hero;
