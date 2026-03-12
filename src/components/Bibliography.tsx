export default function Bibliography() {
  return (
    <section className="py-32 bg-zinc-100 text-zinc-900 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-center text-zinc-800">
          Notes & Bibliography
        </h2>
        
        <div className="mb-20 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-zinc-200">
          <h3 className="text-3xl font-black mb-8 border-b-4 border-zinc-900 pb-4 uppercase tracking-widest">Notes</h3>
          <ol className="list-decimal list-outside ml-6 space-y-6 text-lg font-serif text-zinc-700 leading-relaxed marker:font-bold marker:text-zinc-400">
            <li id="fn1" className="pl-4">Andrew Chapman, "Deontology: Kantian Ethics," <em>1000-Word Philosophy: An Introductory Anthology</em>, June 9, 2014, 1.</li>
            <li id="fn2" className="pl-4">Chapman, "Deontology," 1.</li>
            <li id="fn3" className="pl-4">Shane Gronholz, "Consequentialism and Utilitarianism," <em>1000-Word Philosophy: An Introductory Anthology</em>, May 15, 2014, 1.</li>
            <li id="fn4" className="pl-4">Gronholz, "Consequentialism," 1.</li>
            <li id="fn5" className="pl-4">Chapman, "Deontology," 1.</li>
            <li id="fn6" className="pl-4">Chapman, "Deontology," 1-2.</li>
            <li id="fn7" className="pl-4">Marx W. Wartofsky, "Metaphysics as heuristic for science," in <em>Models. Representation and the Scientific Understanding</em> (Dordrecht: D. Reidel, 1979), 40-89, cited in Per Galle, "Philosophy of design: an introduction," (Centre for Design Research, Danmarks Designskole, 2007), 4.</li>
            <li id="fn8" className="pl-4">Peter Kroes, "Design methodology and the nature of technical artefacts," <em>Design Studies</em> 23, no. 3 (2002): 287-302, cited in Galle, "Philosophy of design," 4.</li>
            <li id="fn9" className="pl-4">Galle, "Philosophy of design," 5.</li>
            <li id="fn10" className="pl-4">Karl R. Popper, <em>Objective Knowledge. An Evolutionary Approach</em> (London: Oxford University Press, 1974), 33, cited in Galle, "Philosophy of design," 1.</li>
          </ol>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-zinc-200">
          <h3 className="text-3xl font-black mb-8 border-b-4 border-zinc-900 pb-4 uppercase tracking-widest">Bibliography</h3>
          <ul className="space-y-6 text-lg font-serif text-zinc-700 leading-relaxed pl-8 -indent-8">
            <li>Chapman, Andrew. "Deontology: Kantian Ethics." <em>1000-Word Philosophy: An Introductory Anthology</em>, June 9, 2014.</li>
            <li>Galle, Per. "Philosophy of design: an introduction." Centre for Design Research, Danmarks Designskole, December 6, 2007.</li>
            <li>Gronholz, Shane. "Consequentialism and Utilitarianism." <em>1000-Word Philosophy: An Introductory Anthology</em>, May 15, 2014.</li>
            <li>Purdue Online Writing Lab. "The Chicago Manual of Style (17th Edition): Notes & Bibliography Formatting and Style Guide." Purdue University.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
