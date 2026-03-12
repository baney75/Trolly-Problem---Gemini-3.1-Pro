import { motion } from 'motion/react';
import { Train } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div 
          animate={{ x: [-10, 10, -10] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Train size={80} className="mx-auto mb-8 text-emerald-400" />
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 font-sans leading-none">
          THE <span className="text-emerald-400">GOOD</span>,<br />
          THE <span className="text-rose-500">BAD</span>,<br />
          & THE TROLLEY
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-serif italic">
          An interactive exploration of Consequentialism, Deontology, and the design of moral choices.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 animate-bounce"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Scroll to begin</p>
      </motion.div>
    </section>
  );
}
