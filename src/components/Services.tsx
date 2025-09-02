import { Instagram, Youtube, MessageCircle, BarChart3, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Instagram,
      title: "Instagram Marketing",
      description: "Connect with Instagram influencers to showcase your brand through engaging posts, stories, and reels.",
      color: "text-primary"
    },
    {
      icon: Youtube,
      title: "YouTube Campaigns",
      description: "Partner with YouTube creators for in-depth product reviews, tutorials, and brand storytelling.",
      color: "text-secondary"
    },
    {
      icon: MessageCircle,
      title: "Social Media Strategy",
      description: "Develop comprehensive social media strategies that align with your brand goals and target audience.",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track and measure campaign performance with detailed analytics and ROI reporting.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Influencer Matching",
      description: "Find the perfect influencers that align with your brand values and target demographics.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Campaign Management",
      description: "End-to-end campaign management from planning to execution and optimization.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive influencer marketing solutions to help your brand reach new heights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <service.icon className={`h-12 w-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;