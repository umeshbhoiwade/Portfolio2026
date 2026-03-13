import { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'motion/react'; // Added AnimatePresence
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "ca513e39-d50a-4d29-81a5-682a11e5e3d5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setShowSuccess(true);
        event.target.reset();
        // Automatically hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submit Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-primary text-white overflow-hidden relative">
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
              {/* Contact Detail items remain the same */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-highlight transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:ubhoiwade@gmail.com" className="text-xl font-bold hover:text-highlight transition-colors">ubhoiwade@gmail.com</a>
                </div>
              </div>
              {/* ... Other Contact Details ... */}
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
              <a href="https://www.linkedin.com/in/umesh-bhoiwade/" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/umeshbhoiwade" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[3rem] text-primary relative overflow-hidden"
          >
            {/* Animated Success Overlay */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle size={80} className="text-green-500 mb-6" />
                  </motion.div>
                  <h4 className="text-3xl font-black mb-2">Message Sent!</h4>
                  <p className="font-bold opacity-60">I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="mt-8 text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-highlight hover:border-highlight transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest opacity-50">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-secondary-beige border-none rounded-2xl p-4 focus:ring-2 focus:ring-highlight outline-none font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest opacity-50">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-secondary-beige border-none rounded-2xl p-4 focus:ring-2 focus:ring-highlight outline-none font-bold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-50">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-secondary-beige border-none rounded-2xl p-4 focus:ring-2 focus:ring-highlight outline-none font-bold resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-highlight transition-all shadow-xl shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}