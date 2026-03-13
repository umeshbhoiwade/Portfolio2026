import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import photo2 from "../photos/photo2.jpeg";
import college from "../photos/college.webp";
const highlights = [
  "Java Developer",
  "Spring Boot Backend Development",
  "REST API Development",
  "React Frontend Development"
];

export default function About() {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-black text-highlight uppercase tracking-[0.3em] mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-primary mb-8 leading-tight">
              Passionate about building <br />
              <span className="text-outline">Scalable Solutions</span>
            </h3>
            <p className="text-lg text-accent/80 leading-relaxed mb-8">
              I am a B.E Information Technology graduate (2025) with a deep passion for backend development. 
              My expertise lies in creating robust server-side logic using Java and Spring Boot, 
              complemented by dynamic frontend experiences with React.
            </p>
            <p className="text-lg text-accent/80 leading-relaxed mb-10">
              With a strong foundation in Object-Oriented Programming and Data Structures, 
              I focus on writing clean, maintainable code that powers scalable web applications. 
              I thrive on solving complex problems and continuously learning new technologies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-highlight" size={20} />
                  <span className="font-bold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-secondary-beige rounded-2xl overflow-hidden">
                  <img src={college} alt="Coding" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-primary rounded-2xl flex items-center justify-center p-8 text-white">
                  <div className="text-center">
                    <p className="text-5xl font-display font-black mb-2">2025</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Graduate</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-highlight rounded-2xl flex items-center justify-center p-8 text-primary">
                  <div className="text-center">
                    <p className="text-5xl font-display font-black mb-2">4+</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Projects</p>
                  </div>
                </div>
                <div className="aspect-[4/5] bg-secondary-beige rounded-2xl overflow-hidden">
                  <img src={photo2} alt="Tech" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
