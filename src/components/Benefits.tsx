import { Earth, DollarSign, Shield, Rocket } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Earth,
      title: "Environmental Impact",
      description: "Help reduce greenhouse gas emissions and contribute to global climate goals while protecting our planet for future generations.",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency", 
      description: "Save millions by detecting leaks early, preventing product loss, and avoiding costly emergency repairs and regulatory fines.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Stay ahead of evolving environmental regulations with automated reporting and comprehensive emission monitoring.",
      color: "text-secondary"
    },
    {
      icon: Rocket,
      title: "Future-Proof",
      description: "Built with cutting-edge technology and designed for scalability to grow with your operations and sustainability goals.",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Clear Skies?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your operations with measurable benefits for your business and the environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-6 p-8 bg-card rounded-xl shadow-feature hover:shadow-hover transition-smooth group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;