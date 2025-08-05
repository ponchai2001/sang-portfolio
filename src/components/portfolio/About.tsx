import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Coffee, GraduationCap, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Code, value: "4+", label: "โครงการที่พัฒนา" },
    { icon: Coffee, value: "1000+", label: "แก้วกาแฟ" },
    { icon: GraduationCap, value: "3.38", label: "เกรดเฉลี่ยปริญญาตรี" },
    { icon: Rocket, value: "99%", label: "ความพึงพอใจจากผู้ใช้" }
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-syntax-keyword">function</span>{" "}
              <span className="text-syntax-function">aboutMe</span>
              <span className="text-foreground">()</span>{" "}
              <span className="text-foreground">{'{'}</span>
            </h2>
          </div>

          {/* JSON-style About Info */}
          <motion.div
            className="terminal-window mb-12"
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              type: "spring",
              stiffness: 80
            }}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
              boxShadow: "0 25px 50px hsl(var(--matrix-green) / 0.2)"
            }}
          >
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-muted-foreground font-mono text-xs ml-4">
                ponchai.json
              </span>
            </div>
            <div className="terminal-content">
              <pre className="text-sm leading-relaxed whitespace-pre-wrap break-words overflow-x-auto">
                <span className="text-foreground">{'{'}</span>
                <br />
                <span className="ml-4 text-syntax-string">"name"</span>: <span className="text-syntax-string">"พรชัย คำบุ"</span>,
                <br />
                <span className="ml-4 text-syntax-string">"email"</span>: <span className="text-syntax-string">"ponchai.paramee@gmail.com"</span>,
                <br />
                <span className="ml-4 text-syntax-string">"education"</span>: <span className="text-syntax-string">"วิทยาการคอมพิวเตอร์, ม.ราชภัฏเลย (เกรด 3.38)"</span>,
                <br />
                <span className="ml-4 text-syntax-string">"experience"</span>: <span className="text-syntax-string">"ฝึกงานที่ PPCNSEO และทำงานที่ ศูนย์หัวใจสิริกิติ์ คณะแพทย์ มหาวิทยาลัยขอนแก่น"</span>,
                <br />
                <span className="ml-4 text-syntax-string">"skills"</span>: [<br />
                <span className="ml-8 text-syntax-string">"PHP"</span>,
                <span className="text-foreground"> </span>
                <span className="text-syntax-string">"React, Next.js"</span>,
                <span className="text-foreground"> </span>
                <span className="text-syntax-string">"Tailwind, Bootstrap"</span>,
                <span className="text-foreground"> </span>
                <span className="text-syntax-string">"HTML, CSS, JavaScript"</span>,
                <br />
                <span className="ml-8 text-syntax-string">"SQL Server, MySQL"</span>
                <br />
                <span className="ml-4 text-foreground">],</span>
                <br />
                <span className="ml-4 text-syntax-string">"tools"</span>: <span className="text-syntax-string">"VSCode, Git, Jira, Docker, SSMS, FileZilla"</span>,
                <br />
                <span className="ml-4 text-syntax-string">"interest"</span>: <span className="text-syntax-string">"ออกแบบ, โดรน, ออกกำลังกาย, AI"</span>
                <br />
                <span className="text-foreground">{'}'}</span>
              </pre>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-lg border border-terminal-border code-glow"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="h-8 w-8 text-matrix-green mx-auto mb-4 animate-float" />
                <div className="text-2xl font-bold text-matrix-green mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personal Story */}
          <motion.div
            className="bg-card/50 rounded-lg p-8 border border-terminal-border"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              ผมชื่อพรชัย คำบุ สนใจการพัฒนาเว็บแอปพลิเคชันที่สามารถนำไปใช้จริงและแก้ปัญหาให้ผู้ใช้งานได้ เคยพัฒนาโครงการด้วย PHP, React, Next.js, Flutter และใช้งาน AI (YOLOv8) ในการตรวจจับวัตถุบนมือถือ
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ปัจจุบันทำงานที่ศูนย์หัวใจสิริกิติ์ คณะแพทย์ มหาวิทยาลัยขอนแก่น มีหน้าที่พัฒนาโปรแกรม ดูแลระบบ และอุปกรณ์ไอทีต่าง ๆ พร้อมเรียนรู้และทดลองสิ่งใหม่ ๆ เสมอ
            </p>
          </motion.div>

          {/* Closing Brace */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-4xl text-foreground font-mono">{'}'}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
