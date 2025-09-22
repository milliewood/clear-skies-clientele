import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import DemoVideo from "@/components/DemoVideo";
import Benefits from "@/components/Benefits";
import SoftwareCarousel from "@/components/SoftwareCarousel";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <DemoVideo />
      <Benefits />
      <SoftwareCarousel />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
