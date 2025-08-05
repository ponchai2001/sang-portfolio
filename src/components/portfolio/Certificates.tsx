import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, ExternalLink, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certificates = [
    {
      title: "SET",
      issuer: "Design Thinking",
      date: "2021",
      credentialId: "BMD1001000125641079067",
      description: "",
      skills: ["design", "thinking"],
      verified: true,
      link: "#"
    },
    {
      title: "Voova Group",
      issuer: "Programmer",
      date: "2022",
      skills: ["PHP", "Next.js", "Design"],
      verified: true,
      link: "#"
    },
    {
      title: "มหาวิทยาลัยราชภัฏเลย",
      issuer: "อบรมเสริมทักษะด้านภาษาอังกฤษ Oxford placement test และ English discoveries",
      date: "2023",
      credentialId: "",
      description: "",
      skills: [""],
      verified: true,
      link: "#"
    },
    {
      title: "มหาวิทยาลัยขอนแก่น",
      issuer: "The Ultimate Design Tool for Education & Beyond",
      date: "2025",
      credentialId: "",
      description: "",
      skills: [""],
      verified: true,
      link: "#"
    },
    {
      title: "มหาวิทยาลัยขอนแก่น",
      issuer: "โครงการส่งเสริมการออกกกำลังกายที่หลากหลายของบุคลากร",
      date: "2025",
      credentialId: "",
      description: "",
      skills: [""],
      verified: true,
      link: "#"
    }
  ];

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
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-syntax-comment">// </span>
              <span className="text-matrix-green">Certifications</span>{" "}
              <span className="text-foreground">&</span>{" "}
              <span className="text-syntax-keyword">Achievements</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Continuous learning and professional development milestones
            </motion.p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                className="terminal-window hover-glow group"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Certificate Header */}
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <div className="flex items-center gap-2 ml-4">
                    <Award className="h-4 w-4 text-matrix-green" />
                    <span className="text-muted-foreground font-mono text-xs">
                      certificate.json
                    </span>
                    {cert.verified && (
                      <Verified className="h-3 w-3 text-accent" />
                    )}
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="terminal-content">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-matrix-green mb-2 group-hover:neon-glow transition-all duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-muted-foreground font-mono text-sm mb-2">
                          Issued by: <span className="text-syntax-string">{cert.issuer}</span>
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-matrix-green/10 border border-matrix-green/30 rounded-full text-xs font-mono text-matrix-green"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.8 + index * 0.2 + skillIndex * 0.1 
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Credential ID */}
                    <div className="bg-muted/30 rounded border border-terminal-border p-3 mb-4">
                      <span className="text-xs text-syntax-comment font-mono">
                        Credential ID: 
                      </span>
                      <span className="text-syntax-string font-mono text-sm ml-2">
                        {cert.credentialId}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="group/btn"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                        Verify Certificate
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-matrix-green/0 group-hover:border-matrix-green/50 transition-all duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>

          {/* Achievement Stats */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-card/50 rounded-full border border-terminal-border">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-matrix-green animate-pulse-glow" />
                <span className="text-lg font-bold text-matrix-green">
                  {certificates.length}
                </span>
                <span className="text-muted-foreground">Certificates</span>
              </div>
              <div className="w-px h-6 bg-terminal-border" />
              <div className="flex items-center gap-2">
                <Verified className="h-5 w-5 text-accent animate-pulse-glow" />
                <span className="text-lg font-bold text-accent">100%</span>
                <span className="text-muted-foreground">Verified</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-matrix-green/5 font-mono text-6xl"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              rotate: [-45, 45, -45],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          >
            {'</>'}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;