import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FootnoteRef } from './FootnoteRef';

export default function TrolleyProblem() {
  const [stage, setStage] = useState(0); // 0: intro, 1: switch, 2: push, 3: result

  const handleChoice = () => {
    setStage(stage + 1);
  };

  return (
    <section className="py-32 bg-zinc-100 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-200/50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none mb-6">
            The Setup:<br/>Trolley Problems
          </h2>
          <p className="text-xl md:text-2xl text-zinc-700 font-serif leading-relaxed max-w-2xl">
            Philosophical thought experiments force us to make imaginary choices that usually end in someone getting run over.<FootnoteRef id={1} /> Let's see what you would do.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-zinc-200 relative overflow-hidden min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div
                key="stage0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center w-full max-w-2xl"
              >
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Scenario 1: The Switch</h3>
                <p className="mb-10 text-lg text-zinc-600 font-serif leading-relaxed">
                  Five people are tied to a track. An out-of-control trolley is coming. You can pull a lever to divert it to a side track, saving the five but killing one person tied there.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={handleChoice} className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 hover:scale-105 transition-all shadow-lg shadow-emerald-500/30">
                    Pull the Lever (Kill 1, Save 5)
                  </button>
                  <button onClick={handleChoice} className="px-8 py-4 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 hover:scale-105 transition-all shadow-lg shadow-rose-500/30">
                    Do Nothing (Kill 5)
                  </button>
                </div>
              </motion.div>
            )}

            {stage === 1 && (
              <motion.div
                key="stage1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center w-full max-w-2xl"
              >
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Scenario 2: The Footbridge</h3>
                <p className="mb-10 text-lg text-zinc-600 font-serif leading-relaxed">
                  Same trolley, same five people. But now, you are on a footbridge above the track next to a giant man. If you push him off, his weight will stop the trolley, saving the five, but he will die.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={handleChoice} className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 hover:scale-105 transition-all shadow-lg shadow-emerald-500/30">
                    Push the Giant (Kill 1, Save 5)
                  </button>
                  <button onClick={handleChoice} className="px-8 py-4 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 hover:scale-105 transition-all shadow-lg shadow-rose-500/30">
                    Do Nothing (Kill 5)
                  </button>
                </div>
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="stage2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full max-w-2xl"
              >
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tight text-indigo-600">The Paradox</h3>
                <p className="mb-8 text-xl text-zinc-700 font-serif leading-relaxed">
                  Most people choose to <strong>pull the lever</strong> but refuse to <strong>push the giant</strong>. But in both cases, it's one life versus five! If we only care about the total lives saved, these actions should be morally equivalent.<FootnoteRef id={2} /> Are they?
                </p>
                <p className="text-lg font-bold text-zinc-500 uppercase tracking-widest">
                  Scroll down to explore why.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
