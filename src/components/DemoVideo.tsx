import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoVideo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Clear Skies in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our advanced methane detection technology works to protect the environment and your business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-primary rounded-2xl overflow-hidden shadow-elegant">
            {/* YouTube Embed Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                onClick={() => {
                  // Replace with actual YouTube embed or modal
                  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                }}
              >
                <Play className="w-6 h-6 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-primary/40 to-primary/60"></div>
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            </div>
            
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
          
          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Learn how Clear Skies helps reduce methane emissions by up to 90% while improving operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;