import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FootnoteRef } from './FootnoteRef';
import { ShieldAlert } from 'lucide-react';

export default function Deontology() {
  const [step, setStep] = useState(0);

  return (
    <section className="py-32 bg-indigo-950 text-indigo-50 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex items-center gap-6 mb-16">
          <div className="p-4 bg-indigo-800 rounded-2xl shadow-lg shadow-indigo-900/50">
            <ShieldAlert size={64} className="text-indigo-300" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-indigo-400">
            Deontology
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-2xl font-serif leading-relaxed text-indigo-100">
              Deontology denies that morality is solely about consequences. Developed by Immanuel Kant, it argues that persons are rational creatures deserving of respect.<FootnoteRef id={5} />
            </p>
            <p className="text-xl leading-relaxed text-indigo-200/80">
              Morality is governed by the <strong>Categorical Imperative</strong>—rules we must follow regardless of our desires.
            </p>
            
            <div className="bg-indigo-900/50 p-8 rounded-3xl border border-indigo-800/50 backdrop-blur-sm shadow-xl">
              <h4 className="text-xl font-black text-indigo-300 mb-4 uppercase tracking-widest">The Solution to the Trolley</h4>
              <p className="text-lg font-serif text-indigo-100/80 leading-relaxed">
                Pulling the lever doesn't <em>use</em> the one person; their death is an unintended consequence. Pushing the giant uses him as a "mere means" to an end (a meat-shield). Kant says we must never treat humanity merely as a means to an end.<FootnoteRef id={6} />
              </p>
            </div>
          </div>

          <div className="bg-indigo-900 p-10 rounded-[3rem] flex flex-col justify-center border border-indigo-700/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/20 to-transparent pointer-events-none"></div>
            
            <h3 className="text-3xl font-black mb-12 text-center uppercase tracking-tight text-indigo-200 z-10">Categorical Imperative Tester</h3>
            
            <div className="space-y-6 z-10">
              <div className="p-8 bg-indigo-950/50 rounded-3xl border border-indigo-700/50 shadow-inner">
                <p className="font-black text-indigo-300 mb-4 uppercase tracking-widest text-sm">Formulation 1: Universalizability</p>
                <p className="text-lg font-serif mb-8 text-indigo-100">Can you will that your action becomes a universal law that everyone follows?</p>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className={`flex-1 py-4 rounded-2xl text-lg font-black transition-all shadow-lg ${step === 1 ? 'bg-rose-500 text-white shadow-rose-500/30 scale-105' : 'bg-indigo-800 text-indigo-300 hover:bg-indigo-700 hover:scale-105'}`}>
                    No (e.g., Lying)
                  </button>
                  <button onClick={() => setStep(2)} className={`flex-1 py-4 rounded-2xl text-lg font-black transition-all shadow-lg ${step === 2 ? 'bg-emerald-500 text-white shadow-emerald-500/30 scale-105' : 'bg-indigo-800 text-indigo-300 hover:bg-indigo-700 hover:scale-105'}`}>
                    Yes
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, scale: 0.9 }}
                    animate={{ opacity: 1, height: 'auto', scale: 1 }}
                    className="p-8 bg-indigo-950/50 rounded-3xl border border-indigo-700/50 shadow-inner overflow-hidden"
                  >
                    <p className="font-black text-indigo-300 mb-4 uppercase tracking-widest text-sm">Formulation 2: Humanity as an End</p>
                    <p className="text-lg font-serif mb-8 text-indigo-100">Are you treating a person merely as a tool to get what you want?</p>
                    <div className="flex gap-4">
                      <button onClick={() => setStep(3)} className={`flex-1 py-4 rounded-2xl text-lg font-black transition-all shadow-lg ${step === 3 ? 'bg-rose-500 text-white shadow-rose-500/30 scale-105' : 'bg-indigo-800 text-indigo-300 hover:bg-indigo-700 hover:scale-105'}`}>
                        Yes (e.g., Pushing Giant)
                      </button>
                      <button onClick={() => setStep(4)} className={`flex-1 py-4 rounded-2xl text-lg font-black transition-all shadow-lg ${step === 4 ? 'bg-emerald-500 text-white shadow-emerald-500/30 scale-105' : 'bg-indigo-800 text-indigo-300 hover:bg-indigo-700 hover:scale-105'}`}>
                        No
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="h-20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {(step === 1 || step === 3) && (
                    <motion.div 
                      key="immoral"
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full p-6 bg-rose-500/20 text-rose-300 rounded-2xl text-center font-black text-2xl uppercase tracking-widest border border-rose-500/30 shadow-lg shadow-rose-500/10"
                    >
                      Action is IMMORAL
                    </motion.div>
                  )}
                  {step === 4 && (
                    <motion.div 
                      key="moral"
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full p-6 bg-emerald-500/20 text-emerald-300 rounded-2xl text-center font-black text-2xl uppercase tracking-widest border border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                    >
                      Action is PERMISSIBLE
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
