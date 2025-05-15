import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 md:py-6 px-6 md:px-12 bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-chef-cream">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold font-outfit text-chef-charcoal"><span className="text-chef-terracotta">Madhavi</span></span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-chef-charcoal hover:text-chef-terracotta font-medium transition-colors">
            About
          </a>
          <a href="#dishes" className="text-chef-charcoal hover:text-chef-terracotta font-medium transition-colors">
            Dishes
          </a>
          <a href="#videos" className="text-chef-charcoal hover:text-chef-terracotta font-medium transition-colors">
            Recipe Videos
          </a>
          <a href="#contact" className="text-chef-charcoal hover:text-chef-terracotta font-medium transition-colors">
            Contact
          </a>
          {/* <Button className="bg-chef-terracotta hover:bg-chef-coral text-white">
            Book a Table
          </Button> */}
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-chef-cream shadow-md animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            <a 
              href="#about" 
              className="text-chef-charcoal hover:text-chef-terracotta py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#dishes" 
              className="text-chef-charcoal hover:text-chef-terracotta py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Signature Dishes
            </a>
            <a 
              href="#videos" 
              className="text-chef-charcoal hover:text-chef-terracotta py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipe Videos
            </a>
            <a 
              href="#contact" 
              className="text-chef-charcoal hover:text-chef-terracotta py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-chef-terracotta hover:bg-chef-coral text-white mt-2 w-full">
              Book a Table
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
