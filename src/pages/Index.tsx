
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import SignatureDishes from "@/components/SignatureDishes";
import RecipeVideos from "@/components/RecipeVideos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MyDishes from "@/components/MyDishes";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-chef-sage opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-chef-terracotta opacity-10 rounded-full blur-3xl"></div>
      </div>
      <Navbar />
      <Hero />
      <BentoGrid />
      <SignatureDishes />
      {/* <MyDishes /> */}
      <RecipeVideos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
