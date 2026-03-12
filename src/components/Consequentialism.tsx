import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FootnoteRef } from './FootnoteRef';
import { Scale, Plus, Minus, Calculator } from 'lucide-react';

export default function Consequentialism() {
  const [utility, setUtility] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-emerald-950 text-emerald-50 px-4 min-h-[100svh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-12">
          <div className="p-3 md:p-4 bg-emerald-800 rounded-2xl shadow-lg shadow-emerald-900/50 inline-block">
            <Scale size={48} className="text-emerald-300" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-emerald-400">
            Consequentialism
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg md:text-2xl font-serif leading-relaxed text-emerald-100">
              Consequentialism argues that the consequences of an action are <em>all</em> that matter in moral assessment.<FootnoteRef id={3} /> 
            </p>
            <p className="text-base md:text-xl leading-relaxed text-emerald-200/80">
              The most famous version, <strong>Utilitarianism</strong>, claims we should maximize total happiness and minimize pain. If pulling the lever saves a net of 4 lives, it is the morally obligatory choice.
            </p>
            
            <div className="bg-emerald-900/50 p-6 md:p-8 rounded-3xl border border-emerald-800/50 backdrop-blur-sm shadow-xl">
              <h4 className="text-lg md:text-xl font-black text-emerald-300 mb-3 uppercase tracking-widest">The Problem</h4>
              <p className="text-base md:text-lg font-serif text-emerald-100/80 leading-relaxed">
                If only consequences matter, then pushing the giant is also obligatory. What if a doctor killed one healthy patient to harvest their organs and save five dying celebrities?<FootnoteRef id={4} /> Consequentialism struggles to explain why this feels profoundly wrong.
              </p>
            </div>
          </div>

          <div className="bg-emerald-900 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col items-center justify-center border border-emerald-700/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-8 z-10">
              <Calculator className="text-emerald-400" />
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-emerald-200">Utility Calculator</h3>
            </div>

            {!showQuiz ? (
              <div className="w-full z-10 flex flex-col items-center">
                <p className="text-center text-emerald-100/80 mb-8 font-serif">
                  College Scenario: You find a lost wallet with $100. Do you keep it to buy textbooks, or return it? Let's calculate the utility.
                </p>
                
                <div className="text-6xl md:text-8xl font-black mb-8 tabular-nums tracking-tighter" style={{ color: utility > 0 ? '#34d399' : utility < 0 ? '#fb7185' : '#a7f3d0' }}>
                  {utility > 0 ? '+' : ''}{utility}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-8">
                  <button onClick={() => setUtility(u => u + 50)} className="p-4 bg-emerald-800/50 hover:bg-emerald-700 rounded-2xl flex items-center justify-between transition-colors border border-emerald-600/30">
                    <span className="text-sm font-bold text-emerald-100">I get textbooks</span>
                    <span className="text-emerald-400 font-black flex items-center"><Plus size={16}/>50</span>
                  </button>
                  <button onClick={() => setUtility(u => u - 80)} className="p-4 bg-rose-900/30 hover:bg-rose-900/50 rounded-2xl flex items-center justify-between transition-colors border border-rose-800/30">
                    <span className="text-sm font-bold text-rose-100">Owner is stressed</span>
                    <span className="text-rose-400 font-black flex items-center"><Minus size={16}/>80</span>
                  </button>
                  <button onClick={() => setUtility(u => u + 100)} className="p-4 bg-emerald-800/50 hover:bg-emerald-700 rounded-2xl flex items-center justify-between transition-colors border border-emerald-600/30">
                    <span className="text-sm font-bold text-emerald-100">Owner gets it back</span>
                    <span className="text-emerald-400 font-black flex items-center"><Plus size={16}/>100</span>
                  </button>
                  <button onClick={() => setUtility(u => u - 20)} className="p-4 bg-rose-900/30 hover:bg-rose-900/50 rounded-2xl flex items-center justify-between transition-colors border border-rose-800/30">
                    <span className="text-sm font-bold text-rose-100">I stay broke</span>
                    <span className="text-rose-400 font-black flex items-center"><Minus size={16}/>20</span>
                  </button>
                </div>

                <button onClick={() => setShowQuiz(true)} className="text-sm font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
                  What's the verdict?
                </button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full z-10 text-center bg-emerald-950/50 p-6 rounded-3xl border border-emerald-800"
              >
                <h4 className="text-xl font-black text-emerald-300 mb-4 uppercase">The Utilitarian Verdict</h4>
                <p className="text-emerald-100 font-serif mb-6">
                  Because returning the wallet generates more total happiness (relief for the owner) than keeping it (temporary relief for you), a consequentialist says <strong>returning it is morally required</strong>.
                </p>
                <button onClick={() => {setShowQuiz(false); setUtility(0);}} className="px-6 py-3 bg-emerald-800 text-emerald-100 font-bold rounded-full hover:bg-emerald-700 transition-colors text-sm uppercase tracking-wider">
                  Reset Calculator
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
