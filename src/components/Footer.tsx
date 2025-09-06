import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">FarmConnect</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Connecting local farmers with customers for fresh, sustainable, and affordable produce.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* For Users */}
          <div>
            <h4 className="text-lg font-semibold mb-6">For Users</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Download App</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Find Farmers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">hello@farmconnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 FarmConnect. All rights reserved. Built with ❤️ for sustainable agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;