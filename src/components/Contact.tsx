
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
  Youtube, 
  Linkedin,
  LinkedinIcon
} from "lucide-react";


const email = "madhavi.mandalia.chef@gmail.com";
const links = {
  instagram: "https://www.instagram.com/chefmadhavi",
  facebook: "https://www.facebook.com/madhavi.mandalia.chef/",
  twitter: "https://www.twitter.com/madhavi.mandalia.chef/",
  youtube: "https://youtube.com/@chefmadhavi",
  linkedin: "https://www.linkedin.com/in/trivedi-madhavi/",
}

const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-12 text-center">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
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
                    {email}
                  </a>
                </div>
              </div>
              {/* <div className="flex items-start gap-4">
                <div className="bg-chef-cream p-3 rounded-full text-chef-terracotta">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-chef-charcoal">Phone</h4>
                  <a href="tel:+1234567890" className="text-chef-charcoal/70 hover:text-chef-terracotta">
                    +1 (234) 567-890
                  </a>
                </div>
              </div> */}
              {/* <div className="flex items-start gap-4">
                <div className="bg-chef-cream p-3 rounded-full text-chef-terracotta">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-chef-charcoal">Location</h4>
                  <p className="text-chef-charcoal/70">
                    123 Culinary Street,<br /> Foodville, FC 12345
                  </p>
                </div>
              </div> */}
            </div>
            
            <h3 className="text-xl font-outfit font-semibold mb-4 text-chef-charcoal">
              Follow Me
            </h3>
            <div className="flex gap-4">
            <a 
                href={links.youtube} 
                className="bg-chef-cream p-3 rounded-full text-chef-terracotta hover:bg-chef-terracotta hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href={links.instagram} 
                className="bg-chef-cream p-3 rounded-full text-chef-terracotta hover:bg-chef-terracotta hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={links.linkedin} 
                className="bg-chef-cream p-3 rounded-full text-chef-terracotta hover:bg-chef-terracotta hover:text-white transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a 
                href={links.twitter} 
                className="bg-chef-cream p-3 rounded-full text-chef-terracotta hover:bg-chef-terracotta hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
