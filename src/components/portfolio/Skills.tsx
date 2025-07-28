import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiCplusplus
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { 	TbBrandNextjs } from "react-icons/tb";


const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: SiReact, color: "#61DAFB" },
        { name: "Next", level: 80, icon: 	TbBrandNextjs, color: "#61DAFB" },
        { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", level: 88, icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Node.js", level: 85, icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", level: 80, icon: SiExpress, color: "#3776AB" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 82, icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", level: 78, icon: SiPostgresql, color: "#336791" },
      ]
    },
    {
      title: "Language",
      skills: [
        { name: "C++", level: 90, icon: SiCplusplus, color: "#F05032" },
        { name: "JavaScript", level: 80, icon: SiJavascript, color: "#2496ED" },
        { name: "Java", level: 70, icon: FaJava, color: "#FF9900" },
      ]
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-syntax-keyword">const</span>{" "}
              <span className="text-syntax-function">skills</span>{" "}
              <span className="text-foreground">=</span>{" "}
              <span className="text-foreground">{'{'}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies I love working with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="terminal-window"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-muted-foreground font-mono text-xs ml-4">
                    {category.title.toLowerCase()}.ts
                  </span>
                </div>
                <div className="terminal-content space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <skill.icon 
                            className="h-6 w-6 transition-colors duration-300"
                            style={{ 
                              color: hoveredSkill === skill.name ? skill.color : 'hsl(var(--matrix-green))' 
                            }}
                          />
                          <span className="font-mono text-sm">
                            <span className="text-syntax-string">"{skill.name}"</span>
                            <span className="text-foreground">:</span>
                          </span>
                        </div>
                        <span className="text-matrix-green font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Snippet Visualization */}
          <motion.div
            className="terminal-window"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-muted-foreground font-mono text-xs ml-4">
                portfolio.js
              </span>
            </div>
            <div className="terminal-content">
              <pre className="text-sm leading-relaxed">
                <span className="text-syntax-comment">// Always learning, always growing</span>
                <br />
                <span className="text-syntax-keyword">const</span>{" "}
                <span className="text-syntax-function">continuousLearning</span>{" "}
                <span className="text-foreground">=</span>{" "}
                <span className="text-foreground">{'{'}</span>
                <br />
                <span className="ml-4 text-syntax-string">"currentlyExploring"</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-foreground">[</span>
                <br />
                <span className="ml-8 text-syntax-string">"AI/ML Integration"</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="ml-8 text-syntax-string">"WebAssembly"</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="ml-8 text-syntax-string">"Microservices Architecture"</span>
                <br />
                <span className="ml-4 text-foreground">],</span>
                <br />
                <span className="ml-4 text-syntax-string">"nextGoal"</span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-syntax-string">"Master cloud-native development"</span>
                <br />
                <span className="text-foreground">{'}'}</span>
              </pre>
            </div>
          </motion.div>

          {/* Closing Brace */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-4xl text-foreground font-mono">{'}'}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;