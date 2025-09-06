import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Everest Base Camp Trek",
      duration: "14 Days",
      difficulty: "Moderate",
      price: "$1,250",
      description: "Experience the legendary trek to Everest Base Camp with stunning mountain views and rich Sherpa culture.",
      features: ["Experienced guide", "Accommodation", "All meals", "Permits included"]
    },
    {
      title: "Island Peak Climbing",
      duration: "18 Days",
      difficulty: "Challenging",
      price: "$2,850",
      description: "Technical climbing experience on one of Nepal's most popular trekking peaks at 6,189m.",
      features: ["Technical training", "Climbing equipment", "Base camp setup", "Summit support"]
    },
    {
      title: "Everest Expedition",
      duration: "65 Days",
      difficulty: "Expert",
      price: "$45,000",
      description: "The ultimate mountaineering challenge - summit the world's highest peak with our expert team.",
      features: ["Sherpa support", "Oxygen supply", "Weather forecasting", "Full logistics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Expeditions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From beginner treks to advanced mountaineering expeditions, 
            we offer carefully crafted adventures for every level of climber.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-mountain hover:shadow-elevation transition-all duration-300 border-0 bg-card overflow-hidden group">
              <CardHeader className="bg-gradient-mountain text-primary-foreground">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <span className="text-2xl font-bold text-accent">{service.price}</span>
                </div>
                <div className="flex gap-4 text-sm text-primary-foreground/80">
                  <span>📅 {service.duration}</span>
                  <span>⛰️ {service.difficulty}</span>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-foreground">
                      <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;