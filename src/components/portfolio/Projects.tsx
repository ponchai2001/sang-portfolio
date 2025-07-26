import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Soni Jewellers",
      description: "A real-time, fully responsive e-commerce platform tailored for a jewellery store.",
      longDescription: "A feature-rich jewellery e-commerce platform built with Next.js 14 (App Router), Supabase, and Tailwind CSS. It includes secure authentication, product browsing, wishlist, cart functionality, dynamic pricing based on metal rates, and a powerful admin dashboard for managing products and orders.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "ShadCN UI", "Radix UI", "Lucide React"],
      category: "fullstack",
      image: "/project1.png",
      github: "https://github.com/abheeshakespeare/Soni-Jewellers",
      live: "https://www.soninavratnajewellers.in",
      features: [
        "Authentication with Supabase (Email/Password + Google OAuth)",
        "Premium jewelry catalog with filters and search",
        "Wishlist functionality",
        "Shopping cart with localStorage persistence",
        "Dynamic pricing based on metal rates",
        "Order placement with advance payment",
        "Order tracking and status updates",
        "Responsive design for all devices",
        "Admin panel for managing products, categories, orders, users, and metal rates",
        "Dashboard with analytics"
      ]
    },
    {
      id: 2,
      title: "Arya Bhumi Seva Sansthan",
      description: "A Real-Time Digital platform for a non-profit focused on health, education, and social welfare",
      longDescription: "A web application built for Arya Bhumi Seva Sansthan, a non-profit organization dedicated to delivering community services in healthcare, education, and welfare. Developed using Next.js 13, Supabase, and Tailwind CSS, the platform includes multi-language support, secure authentication, responsive UI, and is deployed on a KVM VPS using PM2 for process management.",
      tech: [
        "Next.js 13",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Supabase Auth",
        "CloudPanel + PM2"
      ],
      category: "fullstack",
      image: "/project2.png",
      github: "https://github.com/abheeshakespeare/AryaBhumiSevaSanathan",
      live: "https://aryabhumisevasansthan.org",
      features: [
        "Healthcare initiative modules",
        "Educational program listings",
        "Social welfare project highlights",
        "Multi-language support for regional accessibility",
        "Secure authentication with Supabase Auth",
        "Responsive design for all devices",
        "Self-hosted deployment on VPS using CloudPanel & PM2"
      ]
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "Motion-rich full-stack developer portfolio website",
      longDescription: "A highly interactive and animated portfolio website showcasing my work as a full-stack web developer. Built with Next.js 14 and Tailwind CSS, it features smooth page transitions, Rive animations, and custom UI interactions. The site includes a terminal-style about section, dynamic project cards, and a coding-inspired design language—all fully responsive and database-free.",
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Rive",
        "ShadCN UI",
        "Lucide React"
      ],
      category: "fullstack",
      image: "/project3.png",
      github: "https://github.com/abheeshakespeare/MyPortfolio",
      live: "/",
      features: [
        "Framer Motion animations for smooth page transitions",
        "Rive animations integrated in UI sections",
        "Terminal-inspired about section with JSON styling",
        "Interactive project showcase with categories",
        "Dark mode support",
        "Fully responsive layout",
        "No backend or database dependencies"
      ]
    },
    {
      id: 4,
      title: "Insight Notes",
      description: "A powerful AI-integrated note-taking and creative writing platform",
      longDescription: "Insight Notes is a feature-rich application designed for both academic organization and     creative expression. It empowers users with AI-driven insights, seamless tag management, full-text search,    and a distraction-free writing experience. Built with Supabase, this app supports real-time sync,   intelligent note retrieval, and smooth categorization. Ideal for students, writers, and knowledge seekers.   ",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Gemini-2.5-Flash",
        "ShadCN UI"
      ],
      category: "fullstack",
      image: "/project4.png", // Make sure to add this image inside /public
      github: "https://github.com/abheeshakespeare/InsightNotesApp",
      live: "https://insight-notes.vercel.app/", // Replace with your actual deployed link
      features: [
        "Academic note organization with rich formatting",
        "Creative writing tools with AI enhancement",
        "AI Assistant for insights, summaries, and suggestions",
        "Custom tag management system",
        "Full-text search across all notes",
        "Supabase-powered backend with UUID support",
        "Responsive design with modern UI components"
      ]
    }

  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "fullstack": return Globe;
      case "frontend": return Code;
      case "data": return Database;
      default: return Code;
    }
  };

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-syntax-keyword">const</span>{" "}
              <span className="text-syntax-function">projects</span>{" "}
              <span className="text-foreground">=</span>{" "}
              <span className="text-foreground">[</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Some things I've built with code, coffee, and creativity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover-glow transition-all duration-300 bg-card/50 border-terminal-border">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CategoryIcon className="h-6 w-6 text-matrix-green" />
                        <div className="flex gap-2">
                          <a 
                            href={project.github}
                            className="text-muted-foreground hover:text-matrix-green transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          <a 
                            href={project.live}
                            className="text-muted-foreground hover:text-matrix-green transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs border-matrix-green/30 text-matrix-green"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full hover-glow"
                            onClick={() => setSelectedProject(project.id)}
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl flex items-center gap-2">
                              <CategoryIcon className="h-6 w-6 text-matrix-green" />
                              {project.title}
                            </DialogTitle>
                            <DialogDescription className="text-lg">
                              {project.longDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-matrix-green">Key Features</h4>
                              <ul className="space-y-2">
                                {project.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-matrix-green mt-1">•</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-matrix-green">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                  <Badge 
                                    key={tech} 
                                    variant="outline" 
                                    className="border-matrix-green/30 text-matrix-green"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex gap-4">
                                <Button asChild className="flex-1">
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                  </a>
                                </Button>
                                <Button asChild variant="outline" className="flex-1">
                                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Demo
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Code Repository Stats */}
          <motion.div
            className="terminal-window"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-muted-foreground font-mono text-xs ml-4">
                git log --oneline
              </span>
            </div>
            <div className="terminal-content">
              <pre className="text-sm leading-relaxed">
                <span className="text-syntax-comment">// Recent contributions</span>
                <br />
                <span className="text-matrix-green">a1b2c3d</span>{" "}
                <span className="text-foreground">feat: implement real-time chat feature</span>
                <br />
                <span className="text-matrix-green">e4f5g6h</span>{" "}
                <span className="text-foreground">refactor: optimize database queries</span>
                <br />
                <span className="text-matrix-green">i7j8k9l</span>{" "}
                <span className="text-foreground">docs: update API documentation</span>
                <br />
                <span className="text-matrix-green">m0n1o2p</span>{" "}
                <span className="text-foreground">fix: resolve cross-browser compatibility</span>
                <br />
                <span className="text-matrix-green">q3r4s5t</span>{" "}
                <span className="text-foreground">style: implement dark mode theme</span>
              </pre>
            </div>
          </motion.div>

          {/* Closing Bracket */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-4xl text-foreground font-mono">]</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;