import { Zap, Settings, BarChart3, Leaf } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Detection",
      description: "Advanced sensors and AI algorithms provide instant methane leak detection across your entire infrastructure network."
    },
    {
      icon: Settings,
      title: "Easy Integration", 
      description: "Seamlessly connects with existing SCADA systems and industrial control networks without disrupting operations."
    },
    {
      icon: BarChart3,
      title: "Data-driven Insights",
      description: "Comprehensive analytics and automated reports ensure regulatory compliance and optimize operational efficiency."
    },
    {
      icon: Leaf,
      title: "Eco-friendly Solution",
      description: "Reduce environmental impact while cutting costs through proactive leak prevention and emission reduction."
    }
  ];

  return (
    <section className="py-24 px-4 gradient-feature">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful technology designed specifically for the gas industry's unique challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-card rounded-xl p-8 shadow-feature hover:shadow-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;