import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help amplify your brand through strategic influencer partnerships
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  Have a project in mind? We'd love to hear about it. Send us a message 
                  and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="mailto:contact@eviboagency.com" 
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email Us</div>
                    <div className="text-muted-foreground">contact@eviboagency.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+966548062699" 
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Call Us</div>
                    <div className="text-muted-foreground">+966 54 806 2699</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Quick Response</div>
                    <div className="text-muted-foreground">We typically respond within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-brand rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Start Your Campaign Today
                </h3>
                <p className="mb-6 opacity-90">
                  Be among the first brands to grow your reach through our fresh 
                  approach to influencer marketing.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                    onClick={() => toast({
                      title: "Contact Us",
                      description: "Email: contact@eviboagency.com",
                    })}
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <div className="text-center">
                    <span className="text-sm opacity-80">Free strategy session included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;