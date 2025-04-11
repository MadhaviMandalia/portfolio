
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import SignatureDishes from "@/components/SignatureDishes";
import RecipeVideos from "@/components/RecipeVideos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BentoGrid />
      <SignatureDishes />
      <RecipeVideos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
