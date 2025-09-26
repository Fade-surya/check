import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Coffee, Calendar } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: Calendar, label: "Years Experience", value: "5+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a passionate full-stack developer with a love for creating digital experiences 
                that make a difference. With over 5 years of experience in the industry, I've had 
                the privilege of working with startups and established companies alike.
              </p>
              
              <p>
                My journey began with a curiosity about how websites work, which quickly evolved 
                into a deep fascination with modern web technologies. I believe in writing clean, 
                maintainable code and creating user-centered designs that solve real problems.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                writing and speaking engagements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hover-lift">
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="glass-card hover-lift text-center animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            What I <span className="gradient-text">Believe In</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered Design",
                description: "Every decision should prioritize the user experience and accessibility.",
                icon: "👤"
              },
              {
                title: "Clean Code",
                description: "Maintainable, readable code is the foundation of scalable applications.",
                icon: "✨"
              },
              {
                title: "Continuous Learning",
                description: "Technology evolves rapidly, and so should our skills and knowledge.",
                icon: "📚"
              }
            ].map((value, index) => (
              <Card
                key={value.title}
                className="glass-card hover-lift text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;