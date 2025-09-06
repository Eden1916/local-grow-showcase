import { Button } from "@/components/ui/button";
import { User, Search, ShoppingCart, Truck } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";
import farmersScene from "@/assets/farmers-scene.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Sign Up",
      description: "Create your account as either a farmer listing products or a customer looking for fresh produce."
    },
    {
      icon: Search,
      title: "Browse & Discover",
      description: "Search for products by location, price range, or specific produce types. Filter by distance and availability."
    },
    {
      icon: ShoppingCart,
      title: "Connect & Purchase",
      description: "Contact farmers directly, check availability, and arrange pickup or delivery of your fresh produce."
    },
    {
      icon: Truck,
      title: "Get Fresh Produce",
      description: "Enjoy farm-fresh products delivered to you or pick them up directly from local farms."
    }
  ];

  return (
    <section className="py-20 bg-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Our <span className="text-primary">Platform</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple steps to connect local farmers with customers seeking fresh, quality produce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* App Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={appMockup} 
                alt="Agricultural marketplace app interface"
                className="w-full max-w-md mx-auto rounded-2xl shadow-feature animate-float"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-harvest-orange rounded-full opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-sky-blue rounded-full opacity-20" />
          </div>
        </div>
        
        {/* Farmers Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src={farmersScene} 
              alt="Farmers working with fresh produce"
              className="w-full rounded-2xl shadow-feature"
            />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full opacity-20" />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              For <span className="text-primary">Farmers</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              List your fresh produce with real-time pricing and availability. Reach customers directly 
              in your area and build a sustainable business with fair pricing and direct relationships.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-foreground">Set your own prices and availability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-foreground">Reach customers in your local area</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-foreground">Manage inventory in real-time</span>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Start Selling Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;