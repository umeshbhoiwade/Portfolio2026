import { motion } from 'motion/react';
import { Github, ExternalLink, Code } from 'lucide-react';
import aria from "../photos/aria.png";
const projects = [
  {
    title: "ARIA – AI Powered Research Assistant",
    tech: ["Python", "Streamlit", "Gemini AI"],
    description: "AI based system that extracts, analyzes and interprets information from multiple file formats including PDF and text.",
    image: aria,
    github: "#",
    demo: "#"
  },
  {
    title: "AUTOREPLY – Email Reply Generator",
    tech: ["Java", "Spring Boot", "React", "Gemini API"],
    description: "AI powered email reply generator that creates contextual responses using Gemini API for professional communication.",
    image: "https://picsum.photos/seed/autoreply/600/400",
    github: "#",
    demo: "#"
  },
  {
    title: "BOOKNEST – Library Management System",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    description: "Full-featured library system with JWT authentication, role-based access control, and comprehensive REST APIs.",
    image: "https://picsum.photos/seed/booknest/600/400",
    github: "#",
    demo: "#"
  },
  {
    title: "Personal Portfolio Website",
    tech: ["React", "Tailwind CSS", "Motion"],
    description: "A modern, responsive developer portfolio showcasing projects and skills with a clean, creative aesthetic.",
    image: "https://picsum.photos/seed/portfolio/600/400",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-spacing bg-secondary-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-highlight uppercase tracking-[0.3em] mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-primary">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-primary/5 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.github} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-highlight hover:text-white transition-all">
                    <Github size={24} />
                  </a>
                  <a href={project.demo} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-highlight hover:text-white transition-all">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-highlight bg-highlight/10 px-3 py-1 rounded-full">
                      <Code size={10} />
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-display font-black text-primary mb-4 group-hover:text-highlight transition-colors">
                  {project.title}
                </h4>
                <p className="text-accent/70 leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <a href={project.github} className="text-sm font-black text-primary flex items-center gap-2 hover:text-highlight transition-colors">
                    GITHUB REPO <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
