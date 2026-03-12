import { motion } from 'motion/react';
import { FootnoteRef } from './FootnoteRef';
import { BookOpen } from 'lucide-react';

export default function DesignPhilosophy() {
  return (
    <section className="py-32 bg-zinc-900 text-zinc-100 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="flex items-center justify-center gap-6 mb-20">
          <div className="p-4 bg-amber-500/10 rounded-2xl shadow-lg shadow-amber-500/20 border border-amber-500/30">
            <BookOpen size={64} className="text-amber-400" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-amber-400">
            The Design<br/>of Morality
          </h2>
        </div>
        
        <div className="prose prose-invert prose-xl md:prose-2xl font-serif max-w-none leading-relaxed text-zinc-300">
          <p className="mb-8">
            Why study these abstract theories? Because, much like physical artefacts, our moral frameworks are <em>designed</em>. 
          </p>
          <p className="mb-8">
            In the philosophy of design, there is a crucial distinction between understanding <em>how</em> to do something and understanding <em>what</em> you are doing.<FootnoteRef id={7} /> A consequentialist understands morality as an engineering problem: optimizing the structural-physical world to maximize a specific function (happiness).<FootnoteRef id={8} />
          </p>
          <p className="mb-12">
            A deontologist, however, views morality through a functional-intentional lens that prioritizes the intrinsic value of the components (persons) over the final output. By critically reflecting on these theories, we gain a "conceptual and verbal tool kit useful for thinking about how to improve the practice"<FootnoteRef id={9} /> of our own lives.
          </p>
          
          <motion.blockquote 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-8 border-amber-400 pl-8 py-4 italic text-zinc-400 my-16 bg-zinc-800/30 rounded-r-3xl shadow-inner"
          >
            "We all have our philosophies... But the impact of our philosophies upon our actions and our lives is often devastating. This makes it necessary to try to improve our philosophies by criticism."<FootnoteRef id={10} />
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
