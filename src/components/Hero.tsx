import { motion } from 'motion/react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import photo from "../photos/photo.jpeg";
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-highlight/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6"
          >
            AVAILABLE FOR OPPORTUNITIES
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-6 text-primary">
            UMESH <br />
            
            BHOIWADE
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Java Full Stack Developer
          </h2>
          
          <p className="text-lg text-accent/70 max-w-lg mb-10 leading-relaxed">
            Building scalable backend systems using Java, Spring Boot and REST APIs. 
            Crafting seamless digital experiences from server to browser.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-highlight transition-colors shadow-lg shadow-primary/20"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
          
              href="/Bhoiwade_Umesh_Resume.pdf"
              download="Bhoiwade_Umesh_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all"
            >
              Resume <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-[350px] md:w-[420px] aspect-square rounded-3xl overflow-hidden bg-secondary-gray relative group mx-auto">
            <img
              src={photo}
              alt="Umesh Bhoiwade"
              className="w-full h-full object-cover  transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[16px] border-secondary-beige/30 pointer-events-none" />
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-primary/5 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-highlight/20 rounded-full flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <a 
  href="mailto:ubhoiwade@gmail.com" 
  className="flex flex-col group cursor-pointer"
>
  <p className="text-xs font-bold text-accent/50 uppercase tracking-wider group-hover:text-highlight transition-colors">
    Contact
  </p>
  <p className="font-bold text-primary group-hover:text-highlight transition-colors">
    ubhoiwade@gmail.com
  </p>
</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
