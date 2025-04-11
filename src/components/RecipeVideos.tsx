
import { Button } from "@/components/ui/button";
import { Play, Clock, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "How to Make Perfect Pasta from Scratch",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    views: "124K"
  },
  {
    id: 2,
    title: "5-Minute Gourmet Breakfast Ideas",
    duration: "8:32",
    thumbnail: "https://images.unsplash.com/photo-1533089860892-a9b9ac6cd6b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    views: "98K"
  },
  {
    id: 3,
    title: "Secret to the Perfect Chocolate Soufflé",
    duration: "15:20",
    thumbnail: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    views: "203K"
  }
];

const RecipeVideos = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-chef-lightgray to-white" id="videos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="px-4 py-1 bg-chef-cream text-chef-terracotta rounded-full text-sm font-medium mb-4 inline-block">Watch & Learn</span>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4">
              <span className="text-gradient">Recipe Videos</span>
            </h2>
            <p className="text-chef-charcoal/80 max-w-xl">
              Step-by-step tutorials of my favorite recipes, cooking techniques, and kitchen tips. Subscribe to stay updated.
            </p>
          </div>
          <Button variant="ghost" className="text-chef-terracotta hover:text-chef-coral mt-4 md:mt-0 self-start md:self-auto group">
            YouTube Channel <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="bento-card group overflow-hidden animate-scale-in hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl mb-5">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-chef-terracotta flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg flex items-center backdrop-blur-sm">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>
              </div>
              <h3 className="text-xl font-outfit font-semibold text-chef-charcoal mb-2 group-hover:text-chef-terracotta transition-colors">
                {video.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="px-2 py-1 rounded-full bg-chef-cream/50 text-chef-charcoal/70 text-xs">
                  {video.views} views
                </span>
                <Button 
                  variant="ghost" 
                  className="text-chef-terracotta hover:text-chef-coral hover:bg-chef-cream/50 p-0 h-auto group"
                >
                  Watch <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeVideos;
