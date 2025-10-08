import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Users, PieChart } from "lucide-react";

const financialData = [
  {
    icon: DollarSign,
    label: "Monthly Revenue",
    value: "₨3,150,000",
    change: "+15%",
    color: "text-green-400",
  },
  {
    icon: Users,
    label: "Total Salaries",
    value: "₨1,550,000",
    description: "13 team members",
    color: "text-blue-400",
  },
  {
    icon: PieChart,
    label: "Operating Costs",
    value: "₨280,000",
    description: "Rent, utilities, maintenance",
    color: "text-purple-400",
  },
  {
    icon: TrendingUp,
    label: "Net Profit",
    value: "₨1,320,000",
    change: "+15%",
    color: "text-primary",
  },
];

const investments = [
  { label: "R&D (AI & Cloud)", amount: "₨300,000" },
  { label: "Training & Development", amount: "₨200,000" },
  { label: "Marketing Campaigns", amount: "₨100,000" },
  { label: "Cash Reserves", amount: "₨720,000" },
];

const Transparency = () => {
  return (
    <section id="transparency" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Financial <span className="text-gradient">Transparency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Open books, honest communication, and shared success with our team
          </p>
        </div>

        {/* Financial Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {financialData.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                {item.change && (
                  <span className="text-sm font-medium text-green-400">{item.change}</span>
                )}
              </div>
              <div className="text-2xl font-bold mb-1">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
              {item.description && (
                <div className="text-xs text-muted-foreground mt-2">{item.description}</div>
              )}
            </Card>
          ))}
        </div>

        {/* Investment Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Profit Allocation
            </h3>
            <div className="space-y-4">
              {investments.map((investment, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{investment.label}</span>
                  <span className="font-bold text-foreground">{investment.amount}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                At TechVision, transparency isn't just a buzzword—it's how we operate. 
                Every team member has access to our financial performance.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <div className="font-semibold text-foreground">Quarterly Bonuses</div>
                    <div className="text-sm">₨400,000 bonus pool for Q1 performance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <div className="font-semibold text-foreground">Team Expansion</div>
                    <div className="text-sm">Hiring 2 new engineers next month</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <div className="font-semibold text-foreground">Green Initiative</div>
                    <div className="text-sm">Solar installation to cut costs by 30%</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
