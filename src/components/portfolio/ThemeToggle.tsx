import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={toggleTheme}
          size="icon"
          className="rounded-full w-12 h-12 shadow-lg hover-glow"
        >
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;