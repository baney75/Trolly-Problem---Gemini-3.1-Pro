import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FootnoteRef } from './FootnoteRef';
import { Users, User, TrainFront, Skull } from 'lucide-react';

export default function TrolleyProblem() {
  const [stage, setStage] = useState(0);

  const handleChoice = () => {
    setStage(stage + 1);
  };

  return (
    <section id="trolley" className="py-20 md:py-32 bg-zinc-100 px-4 min-h-[100svh] flex items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-zinc-200/50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none mb-4">
            The Setup:<br/>Trolley Problems
          </h2>
          <p className="text-lg md:text-2xl text-zinc-700 font-serif leading-relaxed">
            Philosophical thought experiments force us to make imaginary choices that usually end in someone getting run over.<FootnoteRef id={1} /> Let's see what you would do.
          </p>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-[2rem] shadow-2xl border border-zinc-200 relative overflow-hidden min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div
                key="stage0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full max-w-2xl flex flex-col items-center"
              >
                <div className="bg-zinc-900 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">Scenario 1</div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-center uppercase tracking-tight">The Switch</h3>
                <p className="mb-8 text-base md:text-lg text-zinc-600 font-serif text-center">
                  Five people are tied to a track. An out-of-control trolley is coming. You can pull a lever to divert it to a side track, saving the five but killing one person tied there.
                </p>
                
                {/* Visual Representation */}
                <div className="flex flex-col items-center gap-4 mb-10 w-full bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                  <div className="flex items-center justify-between w-full max-w-xs">
                    <TrainFront size={40} className="text-zinc-800 animate-pulse" />
                    <div className="flex-1 h-2 bg-zinc-300 mx-4 relative">
                      <div className="absolute right-0 -top-4 flex gap-1 text-rose-500"><Users size={32} /><User size={32} /></div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-zinc-400">VS</div>
                  <div className="flex items-center justify-end w-full max-w-xs">
                    <div className="w-1/2 h-2 bg-zinc-300 mr-4 relative">
                      <div className="absolute right-0 -top-4 text-rose-500"><User size={32} /></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-3 md:flex-row md:justify-center">
                  <button onClick={handleChoice} className="w-full md:w-auto px-6 py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 active:scale-95 transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2">
                    Pull Lever <span className="text-emerald-200 text-sm">(Save 5, Kill 1)</span>
                  </button>
                  <button onClick={handleChoice} className="w-full md:w-auto px-6 py-4 bg-rose-500 text-white font-bold rounded-2xl hover:bg-rose-600 active:scale-95 transition-all shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2">
                    Do Nothing <span className="text-rose-200 text-sm">(Kill 5)</span>
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
                className="w-full max-w-2xl flex flex-col items-center"
              >
                <div className="bg-zinc-900 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">Scenario 2</div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-center uppercase tracking-tight">The Footbridge</h3>
                <p className="mb-8 text-base md:text-lg text-zinc-600 font-serif text-center">
                  Same trolley, same five people. But now, you are on a footbridge above the track next to a giant man. If you push him off, his weight will stop the trolley, saving the five, but he will die.
                </p>

                {/* Visual Representation */}
                <div className="flex flex-col items-center gap-4 mb-10 w-full bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                  <div className="flex items-center justify-center gap-8 w-full">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-zinc-400 mb-2">BRIDGE</span>
                      <User size={48} className="text-indigo-500" />
                    </div>
                    <ArrowDown size={32} className="text-zinc-300" />
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-zinc-400 mb-2">TRACK</span>
                      <div className="flex text-rose-500"><Users size={32} /><User size={32} /></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-3 md:flex-row md:justify-center">
                  <button onClick={handleChoice} className="w-full md:w-auto px-6 py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 active:scale-95 transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2">
                    Push Giant <span className="text-emerald-200 text-sm">(Save 5, Kill 1)</span>
                  </button>
                  <button onClick={handleChoice} className="w-full md:w-auto px-6 py-4 bg-rose-500 text-white font-bold rounded-2xl hover:bg-rose-600 active:scale-95 transition-all shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2">
                    Do Nothing <span className="text-rose-200 text-sm">(Kill 5)</span>
                  </button>
                </div>
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="stage2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl flex flex-col items-center text-center"
              >
                <Skull size={64} className="text-indigo-500 mb-6" />
                <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-indigo-600">The Paradox</h3>
                <p className="mb-8 text-lg md:text-xl text-zinc-700 font-serif leading-relaxed">
                  Most people choose to <strong>pull the lever</strong> but refuse to <strong>push the giant</strong>. But in both cases, it's one life versus five! If we only care about the total lives saved, these actions should be morally equivalent.<FootnoteRef id={2} /> Are they?
                </p>
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 w-full">
                  <p className="text-sm md:text-base font-bold text-indigo-800 uppercase tracking-widest">
                    Scroll down to explore the two main theories that try to answer this.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
