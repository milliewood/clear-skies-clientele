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
import { ArrowLeft, User, Building2, Factory, Loader2 } from "lucide-react"; // Added Loader2
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  userType: z.enum(["developer", "business", "company"], {
    required_error: "Please select a user type",
  }),
  techUsage: z.string().min(10, "Please describe how you plan to use our technology"),
  benefits: z.string().min(10, "Please describe how this will benefit you"),
});

const Onboard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      techUsage: "",
      benefits: "",
    }
  });

  const userTypes = [
    { value: "developer", label: "Developer", description: "Individual developer or freelancer", icon: User },
    { value: "business", label: "Business Owner", description: "Small to medium business owner", icon: Building2 },
    { value: "company", label: "Company", description: "Large enterprise or corporation", icon: Factory },
  ];

  // ✅ Updated Submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/onboarding`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to submit onboarding");

      const data = await res.json();
      const userId = data.user_id; 

      // Save to localStorage so App.tsx knows we are done
      localStorage.setItem("onboardingInfo", JSON.stringify(values));

      toast({
        title: "Success",
        description: "Onboarding complete! Opening your dashboard...",
      });

      // ✅ Use navigate instead of window.location.href for instant speed
      setTimeout(() => {
        navigate(`/${userId}`);
      }, 1500);

    } catch (error) {
      console.error("Onboarding error:", error);
      setIsSubmitting(false);
      toast({
        title: "❌ Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  // ✅ Improved Next Step logic with validation
  const nextStep = async () => {
    const fieldsByStep: any = {
      1: ["name", "email"],
      2: ["userType"],
    };
    
    const isValid = await form.trigger(fieldsByStep[currentStep]);
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
            <h1 className="text-3xl font-bold mb-2">Welcome to Clear Skies</h1>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-between items-center mb-8 px-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className={`flex items-center ${step < 3 ? "flex-1" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {step}
                </div>
                {step < 3 && <div className={`flex-1 h-0.5 mx-4 ${currentStep > step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <Card className="border shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>{currentStep === 1 ? "Basic Info" : currentStep === 2 ? "Your Role" : "Tell Us More"}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                  )}

                  {currentStep === 2 && (
                    <FormField control={form.control} name="userType" render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 gap-4">
                            {userTypes.map((type) => (
                              <div key={type.value} className="relative">
                                <RadioGroupItem value={type.value} id={type.value} className="peer sr-only" />
                                <Label htmlFor={type.value} className="flex items-center space-x-4 rounded-lg border p-4 hover:bg-slate-50 cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-blue-50/50">
                                  <type.icon className="w-6 h-6 text-primary" />
                                  <div><p className="font-medium">{type.label}</p><p className="text-sm text-muted-foreground">{type.description}</p></div>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <FormField control={form.control} name="techUsage" render={({ field }) => (
                        <FormItem><FormLabel>Plan for technology?</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="benefits" render={({ field }) => (
                        <FormItem><FormLabel>Specific benefits?</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                  )}

                  <div className="flex justify-between pt-4">
                    {currentStep > 1 && <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>Previous</Button>}
                    <div className="ml-auto">
                      {currentStep < 3 ? (
                        <Button type="button" onClick={nextStep}>Next</Button>
                      ) : (
                        <Button type="submit" disabled={isSubmitting} className="min-w-[140px]">
                          {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting</> : "Complete"}
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
