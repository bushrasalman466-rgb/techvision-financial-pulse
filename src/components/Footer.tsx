import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">TechVision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional IT company delivering high-quality web apps, mobile solutions, and AI innovations for global clients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#transparency" className="text-muted-foreground hover:text-primary transition-colors">
                  Transparency
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Applications</li>
              <li>Mobile App Development</li>
              <li>AI Solutions</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@techvision.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
            <Button variant="hero" size="sm" className="mt-4">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2024 TechVision Software House. All rights reserved.</p>
          <p className="mt-2">Building the future with innovation, transparency, and excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
