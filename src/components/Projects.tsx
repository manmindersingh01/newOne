import { useState } from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, Github, Layers } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/data";

type FilterType = "all" | string;

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  // Extract unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(
      projectsData.flatMap((project) =>
        project.technologies.map((tech) => tech.toLowerCase())
      )
    )
  );

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.technologies.some(
      (tech) => tech.toLowerCase() === filter.toLowerCase()
    );
  });

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <Layers className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary" : ""}
            >
              All
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tech)}
                className={filter === tech ? "bg-primary" : ""}
              >
                {tech}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || `https://source.unsplash.com/random/800x600?tech,${project.title}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.codeLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Code className="h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" /> Live
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Vineet-0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" /> View More on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
