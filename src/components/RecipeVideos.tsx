import { Button } from "@/components/ui/button";
import { Play, Clock, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "High Protein Nutrition Legumes",
    thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    views: "124K",
    youtubeId: "zqZeIk05CiQ"
  },
  {
    id: 2,
    title: "Healthy Nutritious Lentils Pancakes",
    thumbnail: "https://images.unsplash.com/photo-1533089860892-a9b9ac6cd6b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    views: "98K",
    youtubeId: "bZZqNpcMigQ"
  },
  {
    id: 3,
    title: "Fermented Lentils Fritters With Sweet and Sour Sauce",
    thumbnail: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    views: "203K",
    youtubeId: "GOtaCIWu57Q"
  }
];

const yt = "https://youtube.com/@chefmadhavi"

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
          <Button variant="ghost" onClick={() => window.open(yt, "_blank")} className="text-chef-terracotta hover:text-chef-coral mt-4 md:mt-0 self-start md:self-auto group">
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
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                ></iframe>
              </div>
              <h3 className="text-xl font-outfit font-semibold text-chef-charcoal mb-2 group-hover:text-chef-terracotta transition-colors">
                {video.title}
              </h3>
              <div className="flex justify-between items-center">
                <a 
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chef-terracotta hover:text-chef-coral flex items-center text-sm font-medium group"
                >
                  Watch on YouTube <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeVideos;
