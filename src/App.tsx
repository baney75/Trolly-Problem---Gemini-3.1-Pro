/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import TrolleyProblem from './components/TrolleyProblem';
import Consequentialism from './components/Consequentialism';
import Deontology from './components/Deontology';
import DesignPhilosophy from './components/DesignPhilosophy';
import Bibliography from './components/Bibliography';

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-emerald-300 selection:text-emerald-900 bg-zinc-900">
      <Hero />
      <TrolleyProblem />
      <Consequentialism />
      <Deontology />
      <DesignPhilosophy />
      <Bibliography />
    </div>
  );
}
