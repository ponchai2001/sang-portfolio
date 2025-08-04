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
    title: "ระบบสร้างเว็บไซต์เช่ารถท่องเที่ยว",
    description: "แพลตฟอร์มที่ให้ผู้ไม่มีพื้นฐานการเขียนโค้ดสามารถสร้างเว็บไซต์เช่ารถได้ด้วยตนเอง ฟรี และยืดหยุ่นสูง",
    longDescription:
      "ระบบนี้ถูกพัฒนาระหว่างการฝึกงานที่บริษัท PPCNSEO โดยใช้ PHP, React, Next.js, Tailwind, Bootstrap, HTML, CSS, และ JavaScript ร่วมกับฐานข้อมูล SQL เครื่องมือที่ใช้ ได้แก่ VSCode, HeidiSQL, Git, Jira และ Bitbucket มีระบบหลังบ้านและหน้าบ้านที่สามารถออกแบบได้อย่างอิสระ รองรับผู้ใช้งานที่ไม่ใช่นักพัฒนา",
    tech: [
      "PHP",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "HeidiSQL"
    ],
    category: "fullstack",
    image: "/project-ecmlite.png",
    github: "https://github.com/pornchai123",
    live: "https://uat.ecmlite.ecoachmanager.com/self_register/",
    features: [
      "สร้างเว็บไซต์เช่ารถแบบไม่ต้องเขียนโค้ด",
      "ระบบลากวางและการออกแบบที่ยืดหยุ่น",
      "รองรับหลายภาษา",
      "ระบบจัดการข้อมูลรถและคำสั่งจอง",
      "ออกแบบมาให้เหมาะกับผู้ไม่มีพื้นฐานโปรแกรมมิ่ง"
    ]
  },
  {
    id: 2,
    title: "ระบบจองรถของศูนย์หัวใจสิริกิติ์",
    description: "ระบบจัดการจองรถยนต์ภายในองค์กร รองรับการจอง ตรวจสอบสถานะ และการอนุมัติแบบออนไลน์",
    longDescription:
      "พัฒนาด้วย PHP Framework Kotchasan และฐานข้อมูล MySQL ถูกใช้งานจริงภายในศูนย์หัวใจสิริกิติ์ คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น ช่วยลดขั้นตอนเอกสารและเพิ่มความสะดวกในการบริหารจัดการรถยนต์",
    tech: ["PHP", "Kotchasan", "MySQL", "Tailwind CSS"],
    category: "backend",
    image: "/project-kku-car-booking.png",
    github: "https://github.com/pornchai123",
    features: [
      "ระบบจองรถแบบออนไลน์",
      "รองรับหลายสถานะ (จอง, อนุมัติ, ยกเลิก)",
      "ดูปฏิทินการใช้งานรถได้แบบเรียลไทม์",
      "ส่งแจ้งเตือนผ่านอีเมลภายในองค์กร"
    ]
  },
  {
    id: 3,
    title: "ระบบสร้างสลิปรหัสผ่าน QR Code",
    description: "ระบบสร้างสลิปให้พนักงานพร้อมรหัสผ่านชั่วคราวและ QR Code ที่มีวันหมดอายุ",
    longDescription:
      "ระบบนี้ใช้ React, PHP, และ Tailwind CSS พัฒนาขึ้นเพื่อให้พนักงานสามารถรับสลิปรหัสผ่านแบบ QR ได้ทันที โดยมีการเข้ารหัสและกำหนดวันหมดอายุอย่างปลอดภัย",
    tech: ["React", "PHP", "Tailwind CSS", "QRCode.js", "MySQL"],
    category: "fullstack",
    image: "/project-password-slip.png",
    github: "https://github.com/pornchai123",
    features: [
      "สร้าง QR Code พร้อมวันหมดอายุ",
      "ป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต",
      "ระบบตรวจสอบสิทธิ์ก่อนสร้างสลิป",
      "รองรับหลายรูปแบบของผู้ใช้งาน (แผนก, ตำแหน่ง)"
    ]
  },
  {
    id: 4,
    title: "ระบบวิเคราะห์ธนบัตรไทยด้วย AI สำหรับผู้พิการทางสายตา",
    description: "แอปบนมือถือที่ใช้ AI วิเคราะห์ภาพธนบัตรแบบเรียลไทม์และแจ้งข้อมูลผ่านเสียง",
    longDescription:
      "ระบบนี้พัฒนาโดยใช้ Flutter และโมเดล YOLOv8 เพื่อให้ผู้พิการทางสายตาสามารถวิเคราะห์ธนบัตรไทยได้ด้วยสมาร์ทโฟน พร้อมฟีดแบ็กด้วยเสียงผ่าน Text-to-Speech",
    tech: ["Flutter", "Python", "YOLOv8", "TensorFlow", "TTS"],
    category: "mobile",
    image: "/project-thai-banknote-ai.png",
    github: "https://github.com/pornchai123",
    features: [
      "วิเคราะห์ธนบัตรแบบเรียลไทม์",
      "ใช้งานง่ายด้วยสมาร์ทโฟน",
      "ออกแบบเฉพาะสำหรับผู้พิการทางสายตา",
      "แจ้งชื่อธนบัตรด้วยเสียง (Text-to-Speech)"
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