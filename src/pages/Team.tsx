import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Mildred Kigoi",
      role: "CEO",
      bio: "Visionary leader driving Clear Skies’ mission to revolutionize methane detection and create sustainable impact.",
      image: "",
      initials: "MK",
      linkedin: "#",
      email: "mildred@clearskies.com",
      skills: ["Leadership", "Strategy", "Sustainability"],
    },
    {
      name: "Greg Maina",
      role: "CTO",
      bio: "Technology innovator with expertise in building scalable systems and leading product development at Clear Skies.",
      image: "",
      initials: "GM",
      linkedin: "#",
      github: "#",
      email: "greg@clearskies.com",
      skills: ["Software Architecture", "AI/ML", "IoT"],
    },
    {
      name: "Eric Wainana",
      role: "Tech Sales",
      bio: "Focused on bridging technology and customer needs, ensuring Clear Skies delivers impactful solutions to industries worldwide.",
      image: "",
      initials: "EW",
      linkedin: "#",
      email: "eric@clearskies.com",
      skills: ["Sales Strategy", "Client Relations", "Tech Solutions"],
    },
    {
      name: "Rose Wanjiru",
      role: "Software Engineer",
      bio: "Passionate developer building robust applications and contributing to Clear Skies’ advanced methane detection platforms.",
      image: "",
      initials: "RW",
      linkedin: "#",
      github: "#",
      email: "rose@clearskies.com",
      skills: ["Full-Stack Development", "APIs", "System Integration"],
    },
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
              <Card
                key={member.name}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300"
              >
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
                      <p className="text-primary font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {member.bio}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
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
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Pushing the boundaries of detection technology with cutting-edge AI and sensor fusion.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Sustainability
              </h3>
              <p className="text-muted-foreground">
                Committed to reducing environmental impact through advanced methane monitoring solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Partnership
              </h3>
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
