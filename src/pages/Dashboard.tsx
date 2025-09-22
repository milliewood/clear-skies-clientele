import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, TrendingDown, Shield, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Detectors",
      value: "12",
      change: "+2 this week",
      icon: Activity,
      trend: "up"
    },
    {
      title: "Methane Reduced",
      value: "245 kg",
      change: "↓15% vs last month",
      icon: TrendingDown,
      trend: "down"
    },
    {
      title: "Compliance Score",
      value: "98.5%",
      change: "+2.1% improvement",
      icon: Shield,
      trend: "up"
    },
    {
      title: "Team Members",
      value: "8",
      change: "+1 new member",
      icon: Users,
      trend: "up"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your methane detection systems and environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${
                    stat.trend === 'up' ? 'text-eco-primary' : 'text-primary'
                  }`}>
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Detections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div>
                    <p className="font-medium">Pipeline A - Sector 3</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                  <span className="text-xs bg-orange-500/10 text-orange-600 px-2 py-1 rounded-full">
                    Minor Leak
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div>
                    <p className="font-medium">Facility B - Main Unit</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                  <span className="text-xs bg-eco-primary/10 text-eco-primary px-2 py-1 rounded-full">
                    Resolved
                  </span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Detections
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Environmental Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-6 bg-gradient-primary rounded-lg text-white">
                  <h3 className="text-2xl font-bold">1,250 kg CO₂</h3>
                  <p className="text-sm opacity-90">Equivalent emissions prevented this month</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-eco-primary">15</p>
                    <p className="text-sm text-muted-foreground">Trees Equivalent</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">92%</p>
                    <p className="text-sm text-muted-foreground">Efficiency Rate</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;