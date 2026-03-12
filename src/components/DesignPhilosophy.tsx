import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FootnoteRef } from './FootnoteRef';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function DesignPhilosophy() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-zinc-900 text-zinc-100 px-4 min-h-[100svh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-20 text-center md:text-left">
          <div className="p-3 md:p-4 bg-amber-500/10 rounded-2xl shadow-lg shadow-amber-500/20 border border-amber-500/30">
            <BookOpen size={48} className="text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-amber-400">
            The Design<br/>of Morality
          </h2>
        </div>
        
        <div className="prose prose-invert prose-lg md:prose-2xl font-serif max-w-none leading-relaxed text-zinc-300 mb-12">
          <p className="mb-6">
            Why study these abstract theories? Because, much like physical artefacts, our moral frameworks are <em>designed</em>. 
          </p>
          <p>
            In the philosophy of design, there is a crucial distinction between understanding <em>how</em> to do something and understanding <em>what</em> you are doing.<FootnoteRef id={7} /> Let's look at how these two theories "design" morality differently.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {/* Card 1 */}
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl overflow-hidden">
            <button 
              onClick={() => toggleCard(1)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="text-xl md:text-2xl font-black text-emerald-400 uppercase tracking-tight">Morality as Engineering</span>
              {openCard === 1 ? <ChevronUp className="text-zinc-400" /> : <ChevronDown className="text-zinc-400" />}
            </button>
            <AnimatePresence>
              {openCard === 1 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-zinc-300 font-serif text-lg leading-relaxed pt-2 border-t border-zinc-700/50">
                    A consequentialist understands morality as an engineering problem: optimizing the structural-physical world to maximize a specific function (happiness).<FootnoteRef id={8} /> The "design" is successful if the output is maximized, regardless of the internal mechanisms used to get there.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl overflow-hidden">
            <button 
              onClick={() => toggleCard(2)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="text-xl md:text-2xl font-black text-indigo-400 uppercase tracking-tight">Morality as Architecture</span>
              {openCard === 2 ? <ChevronUp className="text-zinc-400" /> : <ChevronDown className="text-zinc-400" />}
            </button>
            <AnimatePresence>
              {openCard === 2 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-zinc-300 font-serif text-lg leading-relaxed pt-2 border-t border-zinc-700/50">
                    A deontologist views morality through a functional-intentional lens that prioritizes the intrinsic value of the components (persons) over the final output. The "design" must respect the structural integrity of human autonomy, even if it means a less "efficient" outcome.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <motion.blockquote 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-4 md:border-l-8 border-amber-400 pl-6 md:pl-8 py-4 md:py-6 italic text-zinc-400 bg-zinc-800/30 rounded-r-2xl md:rounded-r-3xl shadow-inner text-lg md:text-xl font-serif"
        >
          "We all have our philosophies... But the impact of our philosophies upon our actions and our lives is often devastating. This makes it necessary to try to improve our philosophies by criticism."<FootnoteRef id={10} />
          <span className="block mt-4 text-sm font-sans not-italic text-zinc-500 uppercase tracking-widest font-bold">— Karl Popper</span>
        </motion.blockquote>
      </div>
    </section>
  );
}
