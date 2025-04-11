
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-chef-charcoal text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold font-outfit">
              Chef<span className="text-chef-terracotta">Portfolio</span>
            </a>
            <p className="text-white/70 mt-2 max-w-sm">
              Crafting culinary experiences that delight the senses and create lasting memories.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-chef-terracotta/20 hover:bg-chef-terracotta/30 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 text-chef-terracotta" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-8 border-t border-white/10">
          <div>
            <h3 className="text-lg font-outfit font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#dishes" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="#videos" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Recipe Videos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-outfit font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Private Dining
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Cooking Classes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Food Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Events & Catering
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Recipe Development
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-outfit font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-chef-terracotta transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} ChefPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
