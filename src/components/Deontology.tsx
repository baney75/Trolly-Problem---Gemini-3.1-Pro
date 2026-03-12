import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FootnoteRef } from './FootnoteRef';
import { ShieldAlert, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export default function Deontology() {
  const [step, setStep] = useState(0);

  const reset = () => setStep(0);

  return (
    <section className="py-20 md:py-32 bg-indigo-950 text-indigo-50 px-4 min-h-[100svh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-12">
          <div className="p-3 md:p-4 bg-indigo-800 rounded-2xl shadow-lg shadow-indigo-900/50 inline-block">
            <ShieldAlert size={48} className="text-indigo-300" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-indigo-400">
            Deontology
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg md:text-2xl font-serif leading-relaxed text-indigo-100">
              Deontology denies that morality is solely about consequences. Developed by Immanuel Kant, it argues that persons are rational creatures deserving of respect.<FootnoteRef id={5} />
            </p>
            <p className="text-base md:text-xl leading-relaxed text-indigo-200/80">
              Morality is governed by the <strong>Categorical Imperative</strong>—rules we must follow regardless of our desires.
            </p>
            
            <div className="bg-indigo-900/50 p-6 md:p-8 rounded-3xl border border-indigo-800/50 backdrop-blur-sm shadow-xl">
              <h4 className="text-lg md:text-xl font-black text-indigo-300 mb-3 uppercase tracking-widest">The Solution to the Trolley</h4>
              <p className="text-base md:text-lg font-serif text-indigo-100/80 leading-relaxed">
                Pulling the lever doesn't <em>use</em> the one person; their death is an unintended consequence. Pushing the giant uses him as a "mere means" to an end (a meat-shield). Kant says we must never treat humanity merely as a means to an end.<FootnoteRef id={6} />
              </p>
            </div>
          </div>

          <div className="bg-indigo-900 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-center border border-indigo-700/50 shadow-2xl relative overflow-hidden min-h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/20 to-transparent pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-8 text-center uppercase tracking-tight text-indigo-200 z-10">Kant's Checkpoint</h3>
            
            <div className="z-10 relative">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-indigo-950/50 p-6 rounded-3xl border border-indigo-700/50">
                    <p className="text-indigo-300 font-bold mb-2 text-sm uppercase tracking-widest">College Scenario</p>
                    <p className="text-lg font-serif text-indigo-100 mb-6">You want to fake a doctor's note to get an extension on a paper. Is this morally permissible?</p>
                    <button onClick={() => setStep(1)} className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-2">
                      Run the Test <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-indigo-950/50 p-6 rounded-3xl border border-indigo-700/50">
                    <p className="text-indigo-300 font-bold mb-2 text-sm uppercase tracking-widest">Test 1: Universalizability</p>
                    <p className="text-lg font-serif text-indigo-100 mb-6">If <em>everyone</em> faked doctor's notes when they wanted an extension, would the concept of a "doctor's note" still mean anything to professors?</p>
                    <div className="flex flex-col gap-3">
                      <button onClick={() => setStep(2)} className="w-full py-4 bg-rose-500/20 hover:bg-rose-500/40 text-rose-200 font-bold rounded-2xl transition-colors border border-rose-500/30">
                        No, trust would collapse.
                      </button>
                      <button onClick={() => setStep(3)} className="w-full py-4 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-200 font-bold rounded-2xl transition-colors border border-emerald-500/30">
                        Yes, it would be fine.
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-rose-950/50 p-6 rounded-3xl border border-rose-700/50 text-center">
                    <XCircle size={48} className="text-rose-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-black text-rose-400 mb-2 uppercase tracking-tight">Immoral</h4>
                    <p className="text-rose-200/80 font-serif mb-6">Because the rule "lie when it benefits me" destroys the concept of truth if universalized, the action is strictly forbidden.</p>
                    <button onClick={reset} className="text-sm font-bold text-rose-400 hover:text-rose-300 underline underline-offset-4 uppercase tracking-widest">Try Again</button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-indigo-950/50 p-6 rounded-3xl border border-indigo-700/50 text-center">
                    <p className="text-lg font-serif text-indigo-100 mb-6">Kant disagrees! If everyone lied, lying would be impossible because no one would believe anyone. The maxim contradicts itself.</p>
                    <button onClick={() => setStep(1)} className="text-sm font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-4 uppercase tracking-widest">Go Back</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
