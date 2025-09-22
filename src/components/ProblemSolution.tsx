import { AlertTriangle, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* The Challenge */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Methane leaks are one of the most significant contributors to climate change, 
                with the gas being over 25 times more potent than CO₂ in trapping heat in our atmosphere.
              </p>
              
              <p>
                For the gas industry, these leaks represent not only environmental damage but also:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0" />
                  <span>Millions in lost revenue from escaped product</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0" />
                  <span>Increasing regulatory penalties and compliance costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0" />
                  <span>Damage to corporate reputation and sustainability goals</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Our Solution */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Clear Skies uses advanced software algorithms and real-time monitoring 
                to detect methane emissions before they become costly problems.
              </p>
              
              <p>
                Our intelligent system provides:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <span>Instant detection and alerts for potential leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <span>Predictive analytics to prevent future incidents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <span>Seamless integration with existing infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <span>Comprehensive reporting for regulatory compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;