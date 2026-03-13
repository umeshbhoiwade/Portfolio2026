export default function Footer() {
  return (
    <footer className="py-12 bg-secondary-beige border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-display font-black text-primary tracking-tighter">
          UMESH.B
        </div>
        
        <div className="flex gap-8">
          <a href="#home" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Contact</a>
        </div>

        <p className="text-xs font-bold text-accent/40 uppercase tracking-widest">
          © 2025 Umesh Bhoiwade. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
