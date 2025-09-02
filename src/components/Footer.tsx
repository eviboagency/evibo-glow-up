import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/be69704e-d525-4d31-b5ac-75b2754cbab8.png" 
              alt="Evibo Agency Logo" 
              className="h-12 mx-auto brightness-0 invert"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="mailto:contact@eviboagency.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              contact@eviboagency.com
            </a>
            <a 
              href="tel:+966548062699" 
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +966 54 806 2699
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-background/20">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Evibo Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;