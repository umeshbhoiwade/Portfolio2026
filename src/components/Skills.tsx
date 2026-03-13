import { motion } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Settings, 
  BrainCircuit 
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="text-highlight" />,
    skills: ["Java", "JavaScript", "Python"]
  },
  {
    title: "Frontend Technologies",
    icon: <Layout className="text-highlight" />,
    skills: ["HTML5", "CSS3", "ReactJS"]
  },
  {
    title: "Backend Technologies",
    icon: <Server className="text-highlight" />,
    skills: ["Spring Framework", "Spring Boot", "Hibernate"]
  },
  {
    title: "Databases",
    icon: <Database className="text-highlight" />,
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    title: "Tools",
    icon: <Settings className="text-highlight" />,
    skills: ["Git", "Postman", "REST APIs"]
  },
  {
    title: "Concepts",
    icon: <BrainCircuit className="text-highlight" />,
    skills: ["OOP", "Data Structures", "Algorithms"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-spacing bg-secondary-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-highlight uppercase tracking-[0.3em] mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-primary">Technical Skillset</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-primary mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary-beige text-accent text-sm font-bold rounded-full border border-primary/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
