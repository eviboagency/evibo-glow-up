import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/be69704e-d525-4d31-b5ac-75b2754cbab8.png" 
              alt="Evibo Agency Logo" 
              className="h-20 mx-auto mb-6"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Amplify Your Brand with
            <span className="bg-gradient-brand bg-clip-text text-transparent block mt-2">
              Influencer Marketing
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Connect with the right influencers to reach your target audience and drive real results for your business
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="min-w-[200px]" asChild>
              <Link to="#contact">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-brand" size="lg" className="min-w-[200px]" asChild>
              <Link to="#services">
                Learn More
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;