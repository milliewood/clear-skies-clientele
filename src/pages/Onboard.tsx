import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, User, Building2, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  userType: z.enum(["developer", "business", "company"]),
  techUsage: z.string().min(10, "Please describe how you plan to use our technology"),
  benefits: z.string().min(10, "Please describe how this will benefit you"),
});

const Onboard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const userTypes = [
    {
      value: "developer",
      label: "Developer",
      description: "Individual developer or freelancer",
      icon: User,
    },
    {
      value: "business",
      label: "Business Owner",
      description: "Small to medium business owner",
      icon: Building2,
    },
    {
      value: "company",
      label: "Company",
      description: "Large enterprise or corporation",
      icon: Factory,
    },
  ];

  // ✅ Submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/onboarding`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Failed to submit onboarding");
      }

      toast({
        title: "🎉 You have successfully been onboarded",
        description: "We will contact you soon.",
      });

      form.reset();
      setCurrentStep(1);
    } catch (error) {
      console.error("Onboarding error:", error);
      toast({
        title: "❌ Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>

            <h1 className="text-3xl font-bold mb-2">Welcome to Clear Skies</h1>
            <p className="text-muted-foreground">
              Help us understand your needs so we can provide the best experience for you.
            </p>
          </div>

          {/* Progress steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((step) => (
                <div key={step} className={`flex items-center ${step < 3 ? "flex-1" : ""}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        currentStep > step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <Card className="border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Basic Information"}
                {currentStep === 2 && "Your Role"}
                {currentStep === 3 && "Tell Us More"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Let's start with some basic details"}
                {currentStep === 2 && "What best describes your role?"}
                {currentStep === 3 && "Help us understand your specific needs"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1 */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* Step 2 */}
                  {currentStep === 2 && (
                    <div className="animate-fade-in">
                      <FormField
                        control={form.control}
                        name="userType"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 gap-4"
                              >
                                {userTypes.map((type) => {
                                  const Icon = type.icon;
                                  return (
                                    <div key={type.value}>
                                      <RadioGroupItem
                                        value={type.value}
                                        id={type.value}
                                        className="peer sr-only"
                                      />
                                      <Label
                                        htmlFor={type.value}
                                        className="flex items-center space-x-4 rounded-lg border-2 border-muted p-4 hover:bg-accent cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                                      >
                                        <Icon className="w-6 h-6 text-primary" />
                                        <div className="space-y-1">
                                          <p className="font-medium">{type.label}</p>
                                          <p className="text-sm text-muted-foreground">
                                            {type.description}
                                          </p>
                                        </div>
                                      </Label>
                                    </div>
                                  );
                                })}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* Step 3 */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <FormField
                        control={form.control}
                        name="techUsage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How do you plan to use our technology?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe how you plan to integrate Clear Skies into your workflow or operations..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="benefits"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How will Clear Skies benefit you?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about the specific benefits you're looking for, such as cost savings, compliance, environmental impact..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex justify-between pt-6">
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous
                      </Button>
                    )}

                    <div className="ml-auto">
                      {currentStep < 3 ? (
                        <Button type="button" onClick={nextStep}>
                          Next
                        </Button>
                      ) : (
                        <Button type="submit" className="bg-black">
                          Complete Onboarding
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
