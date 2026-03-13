import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: "B.E – Information Technology",
    institution: "P.E.S. Modern College of Engineering",
    period: "2021 – 2025",
    result: "CGPA: 7.40",
    description: "Focused on Software Engineering, Database Management, and Web Technologies."
  },
  {
    degree: "HSC (Science)",
    institution: "Mohsinbhai Zaweri Junior College",
    period: "2021",
    result: "76.17%",
    description: "Specialized in Physics, Chemistry, and Mathematics."
  },
  {
    degree: "SSC",
    institution: "Mahatma Gandhi High School",
    period: "2019",
    result: "75.20%",
    description: "General secondary education with a focus on science and mathematics."
  }
];

export default function Education() {
  return (
    <section id="education" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-black text-highlight uppercase tracking-[0.3em] mb-4">Journey</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-primary">Academic Background</h3>
          </div>
          <p className="text-accent/60 max-w-md font-medium">
            A solid foundation in Information Technology and a continuous drive for academic excellence.
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <GraduationCap size={18} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-secondary-beige border border-primary/5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-highlight font-bold text-sm uppercase tracking-wider">
                    <Calendar size={16} />
                    {item.period}
                  </div>
                  <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-full">
                    {item.result}
                  </span>
                </div>
                <h4 className="text-2xl font-display font-black text-primary mb-2">{item.degree}</h4>
                <p className="text-accent font-bold mb-4">{item.institution}</p>
                <p className="text-accent/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
