import { MapPin, DollarSign, Package, Users, Shield, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Location-Based Discovery",
      description: "Find fresh produce from farmers near you with precise location mapping and distance calculations."
    },
    {
      icon: DollarSign,
      title: "Real-Time Pricing",
      description: "Get up-to-date pricing information directly from farmers. No middleman markups."
    },
    {
      icon: Package,
      title: "Stock Availability",
      description: "See real-time quantity availability and reserve your products before visiting the farm."
    },
    {
      icon: Users,
      title: "Direct Connection",
      description: "Connect directly with local farmers and build lasting relationships with your food sources."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Verified farmers and quality ratings ensure you get the freshest, highest quality produce."
    },
    {
      icon: Clock,
      title: "Harvest Timing",
      description: "Know exactly when products are harvested and get notifications for peak freshness."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our <span className="text-primary">Agricultural Marketplace</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of farm-to-table shopping with features designed for both farmers and customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-feature transition-all duration-300 hover:scale-105 border border-border"
            >
              <div className="w-16 h-16 bg-gradient-feature rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;