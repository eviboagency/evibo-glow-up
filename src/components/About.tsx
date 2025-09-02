import { CheckCircle, Award, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Results-Driven Approach",
      description: "Focused on delivering measurable outcomes for every campaign"
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Experienced professionals who understand the influencer landscape"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to influencers across different markets and demographics"
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Innovative approaches tailored to your brand's unique needs"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose
              <span className="bg-gradient-brand bg-clip-text text-transparent block">
                Evibo Agency?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a dedicated influencer marketing agency that specializes in connecting brands 
              with authentic voices to create meaningful engagement and drive real business results.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-full mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Growing Network
                </h3>
                <p className="text-muted-foreground">
                  Building connections with influencers worldwide
                </p>
              </div>
              
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-lg font-semibold text-primary mb-2">Ready to Launch</div>
                <div className="text-sm text-muted-foreground">Your brand's next big campaign</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;