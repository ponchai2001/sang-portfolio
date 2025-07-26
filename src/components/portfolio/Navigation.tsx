import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Award, Mail } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "certificates", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="flex flex-col space-y-4">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative group w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                isActive 
                  ? "border-matrix-green bg-matrix-green/20 shadow-[0_0_20px_hsl(var(--matrix-green)/0.5)]" 
                  : "border-terminal-border bg-card/80 hover:border-matrix-green hover:bg-matrix-green/10"
              }`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon 
                className={`w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ${
                  isActive ? "text-matrix-green" : "text-muted-foreground group-hover:text-matrix-green"
                }`} 
              />
              
              {/* Tooltip */}
              <div className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-card border border-terminal-border rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <span className="text-sm font-mono text-foreground">{item.name}</span>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-card border-l border-b border-terminal-border rotate-45"></div>
              </div>

              {/* Active indicator pulse */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-matrix-green"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Progress line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-terminal-border transform -translate-x-1/2 -z-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.nav>
  );
};

export default Navigation;