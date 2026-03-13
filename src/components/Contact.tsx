import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-primary text-white overflow-hidden relative">
      {/* Decorative Circle */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] border border-white/10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-black text-highlight uppercase tracking-[0.3em] mb-6">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-display font-black mb-10 leading-tight">
              Let's build <br />
              <span className="text-highlight">Something Great</span>
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-highlight transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:ubhoiwade@gmail.com" className="text-xl font-bold hover:text-highlight transition-colors">ubhoiwade@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-highlight transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Call Me</p>
                  <a href="tel:+918390114239" className="text-xl font-bold hover:text-highlight transition-colors">+91 8390114239</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-highlight transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[3rem] text-primary"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest opacity-50">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-secondary-beige border-none rounded-2xl p-4 focus:ring-2 focus:ring-highlight outline-none font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest opacity-50">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-secondary-beige border-none rounded-2xl p-4 focus:ring-2 focus:ring-highlight outline-none font-bold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-50">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-secondary-beige border-none rounded-2xl p-4 focus:ring-2 focus:ring-highlight outline-none font-bold resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-highlight transition-all shadow-xl shadow-primary/10"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
