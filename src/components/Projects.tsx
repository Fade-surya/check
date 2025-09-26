import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and advanced analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/placeholder-project-1.jpg",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, file sharing, and team communication features.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
      image: "/placeholder-project-2.jpg",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "AI Chat Interface",
      description: "Intelligent chat interface with natural language processing, context awareness, and multi-language support.",
      technologies: ["React", "OpenAI API", "WebSocket", "Python"],
      image: "/placeholder-project-3.jpg",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data visualization with real-time charts, filters, and export capabilities.",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
      image: "/placeholder-project-4.jpg",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from concept to deployment. Each project represents
            a unique challenge and innovative solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`glass-card hover-lift group cursor-pointer animate-scale-in ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-secondary/20 h-64 lg:h-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      🚀
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-accent/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="w-4 h-4 text-accent" fill="currentColor" />
                        <span className="text-sm font-medium text-accent">Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;