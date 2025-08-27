import { ArrowDown as ArrowDownCircle, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Hello, I'm</span>
            <br />
            <span>Vineet Agarwal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Full Stack Engineer
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            I build modern web applications with React, Node.js, and cutting-edge technologies.
            Currently focused on creating responsive, user-friendly interfaces and robust backend systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={scrollToContact} className="bg-primary hover:bg-primary-600">
              Contact Me
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/Vineet-0" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/vineetagarwal2004" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:vineetagarwal.me@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">

          <ArrowDownCircle className="h-10 w-10 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>);

};

export default Hero;