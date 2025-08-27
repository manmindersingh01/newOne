import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experienceData } from "@/data/data";

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experienceData.map((exp) => (
              <Card key={exp.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                      <CardDescription className="text-lg">
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div
                      className={`transition-all duration-300 ${expandedId === exp.id ? "max-h-[1000px]" : "max-h-24 overflow-hidden"}`}
                    >
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                      {exp.techStack && (
                        <div className="mt-4">
                          <p className="font-medium mb-2">Tech Stack:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.split(", ").map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full flex items-center justify-center gap-1 mt-2"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      {expandedId === exp.id ? (
                        <>
                          Show Less <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Show More <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
