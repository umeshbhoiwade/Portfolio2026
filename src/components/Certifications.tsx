import { motion } from 'motion/react';
import { Award, Trophy } from 'lucide-react';

const certifications = [
  {
    title: "Web Development Bootcamp",
    issuer: "Dr. Angela Yu",
    year: "2024",
    icon: <Award className="text-highlight" size={32} />
  },
  {
    title: "MPulse Ignite Tech Fest Coordinator",
    issuer: "P.E.S. Modern College of Engineering",
    year: "2024",
    icon: <Trophy className="text-highlight" size={32} />
  }
];

export default function Certifications() {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-highlight uppercase tracking-[0.3em] mb-4">Achievements</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-primary">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-8 p-8 bg-secondary-beige rounded-3xl border border-primary/5 hover:border-highlight/30 transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                {cert.icon}
              </div>
              <div>
                <span className="text-xs font-black text-highlight uppercase tracking-widest mb-2 block">{cert.year}</span>
                <h4 className="text-xl font-display font-black text-primary mb-1">{cert.title}</h4>
                <p className="text-accent/60 font-bold">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
