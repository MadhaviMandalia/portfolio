
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube 
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-12 text-center">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-outfit font-semibold mb-6 text-chef-charcoal">
              Send Me a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-chef-charcoal mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-chef-cream focus-visible:ring-chef-terracotta"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-chef-charcoal mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-chef-cream focus-visible:ring-chef-terracotta"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-chef-charcoal mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Message subject" 
                  className="border-chef-cream focus-visible:ring-chef-terracotta"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-chef-charcoal mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5}
                  className="border-chef-cream focus-visible:ring-chef-terracotta resize-none"
                />
              </div>
              <Button className="bg-chef-terracotta hover:bg-chef-coral text-white w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-outfit font-semibold mb-6 text-chef-charcoal">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-chef-cream p-3 rounded-full text-chef-terracotta">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-chef-charcoal">Email</h4>
                  <a href="mailto:chef@example.com" className="text-chef-charcoal/70 hover:text-chef-terracotta">
                    chef@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-chef-cream p-3 rounded-full text-chef-terracotta">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-chef-charcoal">Phone</h4>
                  <a href="tel:+1234567890" className="text-chef-charcoal/70 hover:text-chef-terracotta">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-chef-cream p-3 rounded-full text-chef-terracotta">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-chef-charcoal">Location</h4>
                  <p className="text-chef-charcoal/70">
                    123 Culinary Street,<br /> Foodville, FC 12345
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-outfit font-semibold mb-4 text-chef-charcoal">
              Follow Me
            </h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-chef-cream p-3 rounded-full text-chef-terracotta hover:bg-chef-terracotta hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-chef-cream p-3 rounded-full text-chef-terracotta hover:bg-chef-terracotta hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-chef-cream p-3 rounded-full text-chef-terracotta hover:bg-chef-terracotta hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-chef-cream p-3 rounded-full text-chef-terracotta hover:bg-chef-terracotta hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
