import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  // Pexels gas industry image URL
  const gasIndustryImage = "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${gasIndustryImage})` }}
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0" />
      
      {/* Optional: Secondary Gradient to make the bottom fade into the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-0" />

      {/* Floating Elements (kept for atmosphere) */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl float-animation" />
      <div
        className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl float-animation"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/8 rounded-full blur-xl float-animation"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Clear Skies: Smarter Methane Detection for a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Cleaner Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Helping the gas industry reduce emissions, stay compliant, and
            protect the planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/team">
              <Button
                variant="default"
                size="lg"
                className="text-lg px-8 py-4 h-14 bg-white text-black hover:bg-white/90 transition-all"
              >
                Our Team
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-14 border-white text-white hover:bg-white hover:text-black transition-all"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
