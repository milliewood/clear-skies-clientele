import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-cta" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-16 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl float-animation" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Join us in building a{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              cleaner future
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Take the first step towards sustainable operations and environmental responsibility. 
            Your industry leadership starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button 
                variant="hero-outline" 
                size="lg" 
                className="text-lg px-10 py-4 h-16 group"
              >
                Get Clear Skies Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 text-white/70 text-sm">
            <p>Join 500+ companies already reducing their environmental impact</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;