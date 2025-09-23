import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Clear Skies</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced methane detection software for a cleaner, more sustainable future in the gas industry.
          </p>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 Clear Skies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;