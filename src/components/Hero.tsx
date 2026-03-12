import { motion } from 'motion/react';
import { Train, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-center bg-zinc-900 text-white p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl"
      >
        <motion.div 
          animate={{ x: [-5, 5, -5] }} 
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <Train size={64} className="mb-6 text-emerald-400 md:w-24 md:h-24" />
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 font-sans leading-[0.9]">
          THE <span className="text-emerald-400">GOOD</span>,<br />
          THE <span className="text-rose-500">BAD</span>,<br />
          & THE TROLLEY
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-400 font-serif italic mb-10 px-4">
          An interactive survival guide to Consequentialism, Deontology, and the design of moral choices.
        </p>

        <motion.a
          href="#trolley"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-colors hover:bg-zinc-200"
        >
          Start the Journey <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
