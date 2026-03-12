import { useState } from 'react';
import { motion } from 'motion/react';
import { FootnoteRef } from './FootnoteRef';
import { Scale } from 'lucide-react';

export default function Consequentialism() {
  const [balance, setBalance] = useState(0);

  return (
    <section className="py-32 bg-emerald-950 text-emerald-50 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex items-center gap-6 mb-16">
          <div className="p-4 bg-emerald-800 rounded-2xl shadow-lg shadow-emerald-900/50">
            <Scale size={64} className="text-emerald-300" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-emerald-400">
            Consequentialism
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-2xl font-serif leading-relaxed text-emerald-100">
              Consequentialism argues that the consequences of an action are <em>all</em> that matter in moral assessment.<FootnoteRef id={3} /> 
            </p>
            <p className="text-xl leading-relaxed text-emerald-200/80">
              The most famous version, <strong>Utilitarianism</strong>, claims we should maximize total happiness and minimize pain. If pulling the lever saves a net of 4 lives, it is the morally obligatory choice.
            </p>
            
            <div className="bg-emerald-900/50 p-8 rounded-3xl border border-emerald-800/50 backdrop-blur-sm shadow-xl">
              <h4 className="text-xl font-black text-emerald-300 mb-4 uppercase tracking-widest">The Problem</h4>
              <p className="text-lg font-serif text-emerald-100/80 leading-relaxed">
                If only consequences matter, then pushing the giant is also obligatory. What if a doctor killed one healthy patient to harvest their organs and save five dying celebrities?<FootnoteRef id={4} /> Consequentialism struggles to explain why this feels profoundly wrong.
              </p>
            </div>
          </div>

          <div className="bg-emerald-900 p-10 rounded-[3rem] flex flex-col items-center justify-center border border-emerald-700/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 to-transparent pointer-events-none"></div>
            
            <h3 className="text-3xl font-black mb-12 text-center uppercase tracking-tight text-emerald-200 z-10">The Moral Scale</h3>
            
            <div className="relative w-full h-64 flex items-center justify-center z-10">
              <motion.div 
                className="w-72 h-3 bg-emerald-600 rounded-full origin-center relative shadow-lg"
                animate={{ rotate: balance * 15 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <div className="absolute -left-6 -top-12 bg-rose-500 text-white text-sm font-black px-4 py-2 rounded-full shadow-lg shadow-rose-500/30">Pain</div>
                <div className="absolute -right-6 -top-12 bg-emerald-400 text-emerald-950 text-sm font-black px-4 py-2 rounded-full shadow-lg shadow-emerald-400/30">Joy</div>
              </motion.div>
              <div className="absolute bottom-0 w-6 h-32 bg-emerald-800 rounded-t-full shadow-inner"></div>
            </div>
            
            <div className="flex gap-4 mt-12 z-10 w-full">
              <button 
                onClick={() => setBalance(b => Math.max(b - 1, -2))} 
                className="flex-1 py-4 bg-rose-500/10 text-rose-300 font-bold rounded-2xl hover:bg-rose-500/20 hover:scale-105 transition-all border border-rose-500/20"
              >
                + Add Pain
              </button>
              <button 
                onClick={() => setBalance(b => Math.min(b + 1, 2))} 
                className="flex-1 py-4 bg-emerald-500/10 text-emerald-300 font-bold rounded-2xl hover:bg-emerald-500/20 hover:scale-105 transition-all border border-emerald-500/20"
              >
                + Add Happiness
              </button>
            </div>
            
            <div className="mt-8 h-8 z-10">
              <motion.p 
                key={balance}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-lg font-black uppercase tracking-widest text-center ${balance > 0 ? 'text-emerald-400' : balance < 0 ? 'text-rose-400' : 'text-emerald-200/50'}`}
              >
                {balance > 0 ? "The action is MORAL" : balance < 0 ? "The action is IMMORAL" : "The action is NEUTRAL"}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
