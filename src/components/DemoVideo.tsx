import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoVideo = () => {
  const videoUrl = "https://www.youtube.com/watch?v=ESU41Oc4feA";
  const thumbnailUrl = "https://img.youtube.com/vi/ESU41Oc4feA/hqdefault.jpg"; // ✅ guaranteed to exist

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
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elegant">
            {/* YouTube Thumbnail */}
            <img 
              src={thumbnailUrl} 
              alt="Demo video thumbnail" 
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay with Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Button 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                onClick={() => window.open(videoUrl, "_blank")}
              >
                <Play className="w-6 h-6 mr-2" />
                Watch Demo
              </Button>
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
