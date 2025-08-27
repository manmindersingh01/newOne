import { motion } from "framer-motion";
import { Code, Database, LayoutDashboard as Layout, Server, Settings, Wrench } from "lucide-react";
import { skillsData } from "@/data/data";

const Skills = () => {
  const categoryIcons = {
    languages: <Code className="h-5 w-5" />,
    frontend: <Layout className="h-5 w-5" />,
    backend: <Server className="h-5 w-5" />,
    database: <Database className="h-5 w-5" />,
    tools: <Wrench className="h-5 w-5" />,
    other: <Settings className="h-5 w-5" />
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>

          <div className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], index) =>
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm border border-border">

                <div className="flex items-center gap-2 mb-4">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                  <h3 className="text-xl font-semibold capitalize">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) =>
                <div
                  key={skill}
                  className="bg-muted text-foreground px-3 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200">

                      {skill}
                    </div>
                )}
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-12">
            <div className="bg-surface p-6 rounded-lg code-animation">
              <pre className="font-mono text-sm overflow-x-auto">
                <code>
                  {`const vineet = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'MongoDB', 'Redis'],
  tools: ['Git', 'Docker', 'AWS', 'Azure', 'CloudFlare'],
  currentlyLearning: 'Advanced System Design',
  passions: ['Building scalable applications', 'Open Source', 'UI/UX']
};`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Skills;