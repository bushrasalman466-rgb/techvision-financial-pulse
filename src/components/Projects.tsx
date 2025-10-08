import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Mobile Banking Application",
    revenue: "₨1,200,000",
    description: "A comprehensive mobile banking solution with secure transactions, real-time updates, and intuitive user interface.",
    tags: ["Mobile", "FinTech", "Security"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Commerce Platform",
    revenue: "₨800,000",
    description: "Full-featured online shopping platform with payment gateway integration, inventory management, and analytics.",
    tags: ["Web", "E-Commerce", "Full-Stack"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Analytics System",
    revenue: "₨950,000",
    description: "Advanced data analytics and visualization system with machine learning predictions and real-time reporting.",
    tags: ["AI", "Analytics", "Dashboard"],
    color: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Delivering exceptional results for clients worldwide
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 group"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white font-bold text-xl">
                    <TrendingUp className="w-5 h-5" />
                    {project.revenue}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₨3.15M</div>
              <div className="text-sm text-muted-foreground">Total Revenue</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₨200K</div>
              <div className="text-sm text-muted-foreground">Maintenance Contracts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Global</div>
              <div className="text-sm text-muted-foreground">Client Reach</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
