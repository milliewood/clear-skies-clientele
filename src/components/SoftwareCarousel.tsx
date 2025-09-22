import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Monitor, BarChart3, Shield, Zap, Users, Globe } from "lucide-react";

const SoftwareCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Monitor,
      title: "Real-Time Dashboard",
      description: "Monitor all your detection points from a single, intuitive dashboard. Get instant visibility into methane levels across your entire operation.",
      features: ["Live data visualization", "Custom alerts", "Multi-site overview", "Mobile responsive"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Powerful analytics engine that turns raw data into actionable insights. Track trends, predict issues, and optimize your operations.",
      features: ["Predictive modeling", "Historical analysis", "Custom reports", "Export capabilities"]
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Stay ahead of regulations with automated compliance tracking and reporting. Generate audit-ready reports with just a few clicks.",
      features: ["Automated reporting", "Regulatory updates", "Audit trails", "Certificate generation"]
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Get notified immediately when methane levels exceed safe thresholds. Multiple notification channels ensure you never miss critical events.",
      features: ["SMS notifications", "Email alerts", "Push notifications", "Escalation protocols"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Manage team members, assign responsibilities, and track resolution status. Collaborate effectively across departments and locations.",
      features: ["Role-based access", "Task assignment", "Team messaging", "Activity tracking"]
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Seamlessly integrate with your existing systems. Our robust API allows for custom integrations and automated workflows.",
      features: ["REST API", "Webhook support", "Custom integrations", "Developer tools"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Software Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the comprehensive features that make Clear Skies the industry leader in methane detection software.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  {React.createElement(slides[currentSlide].icon, {
                    className: "w-6 h-6 text-primary"
                  })}
                </div>
                <h3 className="text-2xl font-bold">{slides[currentSlide].title}</h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {slides[currentSlide].description}
              </p>

              <ul className="space-y-2">
                {slides[currentSlide].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex space-x-4">
                <Button variant="outline" size="sm" onClick={prevSlide}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextSlide}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Visual/Card Content */}
            <div className="relative">
              <Card className="border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-primary rounded-lg mb-6 relative overflow-hidden">
                    {/* Simulated Software Screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-eco-primary/20">
                      <div className="absolute top-4 left-4 right-4">
                        <div className="h-2 bg-white/30 rounded-full mb-2"></div>
                        <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 bg-white/20 rounded"></div>
                          <div className="h-12 bg-white/30 rounded"></div>
                          <div className="h-12 bg-white/25 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {React.createElement(slides[currentSlide].icon, {
                          className: "w-16 h-16 text-white/50"
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">{slides[currentSlide].title}</h4>
                    <p className="text-sm text-muted-foreground">
                      Feature {currentSlide + 1} of {slides.length}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-primary w-8" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCarousel;