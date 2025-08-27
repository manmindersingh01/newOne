import { motion } from 'framer-motion';

const CodeAnimation = () => {
  const codeLines = [
    `const Portfolio = () => {`,
    `  const [skills, setSkills] = useState([]);`,
    `  const [projects, setProjects] = useState([]);`,
    `  const [isLoading, setIsLoading] = useState(true);`,
    ``,
    `  useEffect(() => {`,
    `    // Fetch data`,
    `    fetchSkills().then(data => setSkills(data));`,
    `    fetchProjects().then(data => setProjects(data));`,
    `    setIsLoading(false);`,
    `  }, []);`,
    ``,
    `  return (`,
    `    <div className="portfolio">`,
    `      <Header />`,
    `      <Hero />`,
    `      <Projects data={projects} />`,
    `      <Skills data={skills} />`,
    `      <Contact />`,
    `    </div>`,
    `  );`,
    `};`,
  ];

  return (
    <div className="bg-surface rounded-lg p-6 shadow-md overflow-hidden relative code-animation">
      <pre className="font-mono text-sm">
        <code>
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="whitespace-pre"
            >
              {line || ' '}
            </motion.div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeAnimation;