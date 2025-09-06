import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-bg overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Connect <span className="text-primary">Farmers</span> with{" "}
              <span className="text-primary">Customers</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover fresh, local produce directly from farmers in your area. Get real-time prices, 
              locations, and availability right in your pocket.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Smartphone className="w-5 h-5" />
              Download App
            </Button>
            <Button variant="feature" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5" />
              Learn More
            </Button>
          </div>
          
          {/* App Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-harvest-orange rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-sky-blue rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;