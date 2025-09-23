import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Environmental engineer with 15+ years in methane detection technology. Former NASA researcher specializing in atmospheric gas monitoring.",
      image: "",
      initials: "SC",
      linkedin: "#",
      email: "sarah@clearskies.com",
      skills: ["Leadership", "Environmental Tech", "NASA Research"]
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Software architect and machine learning expert. Previously led AI initiatives at major energy companies for emission detection systems.",
      image: "",
      initials: "MR",
      linkedin: "#",
      github: "#",
      email: "marcus@clearskies.com",
      skills: ["AI/ML", "Software Architecture", "Energy Tech"]
    },
    {
      name: "Dr. Elena Petrov",
      role: "Head of Research",
      bio: "PhD in Atmospheric Chemistry from MIT. Pioneer in real-time gas detection algorithms with 50+ published papers.",
      image: "",
      initials: "EP",
      linkedin: "#",
      email: "elena@clearskies.com",
      skills: ["Atmospheric Chemistry", "Research", "Algorithm Development"]
    },
    {
      name: "James Wilson",
      role: "VP of Engineering",
      bio: "Full-stack developer and systems engineer. Expert in building scalable industrial IoT solutions for energy sector monitoring.",
      image: "",
      initials: "JW",
      linkedin: "#",
      github: "#",
      email: "james@clearskies.com",
      skills: ["Full-Stack Development", "IoT", "System Architecture"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate experts dedicated to creating innovative methane detection solutions 
            for a cleaner, more sustainable future.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex gap-3">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.github && (
                          <a 
                            href={member.github} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        <a 
                          href={`mailto:${member.email}`} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            We believe in the power of technology to create positive environmental impact. 
            Our team combines deep technical expertise with a passion for sustainability, 
            working together to make methane detection more accurate, accessible, and actionable 
            for industries worldwide.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing the boundaries of detection technology with cutting-edge AI and sensor fusion.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">Sustainability</h3>
              <p className="text-muted-foreground">
                Committed to reducing environmental impact through advanced methane monitoring solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">Partnership</h3>
              <p className="text-muted-foreground">
                Working closely with industry leaders to deliver practical, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;