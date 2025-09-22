import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Home, Building2, Factory, Star } from "lucide-react";

const Subscriptions = () => {
  const plans = [
    {
      name: "Individual",
      description: "Perfect for homeowners and small properties",
      price: "$29",
      period: "per month",
      icon: Home,
      popular: false,
      features: [
        "Up to 2 detection points",
        "Basic reporting",
        "Email alerts",
        "Mobile app access",
        "Community support",
        "Monthly compliance reports"
      ],
      buttonText: "Start Individual Plan",
      buttonVariant: "outline" as const
    },
    {
      name: "Business",
      description: "Ideal for small to medium businesses",
      price: "$149",
      period: "per month",
      icon: Building2,
      popular: true,
      features: [
        "Up to 20 detection points",
        "Advanced analytics",
        "Real-time notifications",
        "API integration",
        "Priority support",
        "Custom reporting",
        "Compliance dashboard",
        "Team management"
      ],
      buttonText: "Start Business Plan",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large corporations",
      price: "$499",
      period: "per month",
      icon: Factory,
      popular: false,
      features: [
        "Unlimited detection points",
        "AI-powered insights",
        "24/7 monitoring",
        "Custom integrations",
        "Dedicated support manager",
        "Advanced compliance tools",
        "Multi-site management",
        "Custom training",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect Clear Skies plan for your needs. All plans include our core methane detection technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative border-0 shadow-elegant bg-card/50 backdrop-blur-sm ${
                  plan.popular ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-eco-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary' : ''}`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-3xl mx-auto border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6">
                We offer tailored solutions for unique requirements, government contracts, and special industries.
                Contact our team to discuss your specific needs.
              </p>
              <Button variant="outline" size="lg">
                Contact Our Team
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;