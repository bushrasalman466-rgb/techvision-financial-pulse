import { Card } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";

const departments = [
  { title: "Leadership", count: 2, roles: ["CEO", "Project Manager"] },
  { title: "Development", count: 6, roles: ["Senior Dev", "Junior Dev", "Frontend", "Backend", "Mobile"] },
  { title: "Design & QA", count: 2, roles: ["UI/UX Designer", "QA Engineer"] },
  { title: "Marketing", count: 2, roles: ["Marketing Manager", "Content Writer"] },
  { title: "Operations", count: 2, roles: ["Accountant", "Admin"] },
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Exploring cutting-edge technologies and methodologies",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaboration across all departments for success",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering quality products that exceed expectations",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            13 talented professionals working together towards shared success
          </p>
        </div>

        {/* Department Overview */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{dept.count}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{dept.title}</h3>
              <div className="text-xs text-muted-foreground space-y-1">
                {dept.roles.map((role, idx) => (
                  <div key={idx}>{role}</div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Culture Statement */}
        <Card className="mt-12 p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
            "At TechVision, we're not just a workplace—we're a family working toward shared success."
          </blockquote>
          <p className="text-muted-foreground">
            Every employee's effort adds value, and we express deep appreciation for their dedication.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Team;
