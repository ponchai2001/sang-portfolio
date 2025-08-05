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
  SiCplusplus,
  SiPhp,
  SiMysql,
  SiDotnet,
  SiFlutter,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 90, icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", level: 90, icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
        { name: "React", level: 80, icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", level: 80, icon: TbBrandNextjs, color: "#000000" },
        { name: "JavaScript", level: 80, icon: SiJavascript, color: "#F7DF1E" },
      ]
    },
    {
      title: "Backend", 
      skills: [
        // { name: "Node.js", level: 85, icon: SiNodedotjs, color: "#339933" },
        // { name: "Express.js", level: 80, icon: SiExpress, color: "#000000" },
        { name: "PHP", level: 85, icon: SiPhp, color: "#777BB4" },
        { name: ".NET", level: 50, icon: SiDotnet, color: "#512BD4" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 85, icon: SiMysql, color: "#4479A1" },
        { name: "SQL Server", level: 80, icon: SiPostgresql, color: "#336791" },
        // { name: "MongoDB", level: 75, icon: SiMongodb, color: "#47A248" },
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "TypeScript", level: 80, icon: SiTypescript, color: "#3178C6" },
        // { name: "C++", level: 90, icon: SiCplusplus, color: "#00599C" },
        { name: "Java", level: 50, icon: FaJava, color: "#007396" },
        { name: "Flutter", level: 50, icon: SiFlutter, color: "#02569B" },
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
              Technologies I use in my work and enjoy exploring
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;