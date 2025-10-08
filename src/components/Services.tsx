import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Brain, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Applications",
    description: "Custom web solutions built with modern technologies, scalable architecture, and stunning user interfaces.",
    features: ["React & TypeScript", "Cloud Integration", "API Development"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: ["iOS & Android", "Cross-Platform", "Push Notifications"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence and machine learning solutions to automate and optimize your business.",
    features: ["Machine Learning", "Data Analytics", "Predictive Models"],
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver solutions that give you a competitive advantage.",
    features: ["Latest Tech Stack", "Best Practices", "Performance"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive software development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
