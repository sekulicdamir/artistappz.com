import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div className="sticky top-32">
            <span className="font-mono text-accent text-sm tracking-widest mb-6 block">02 // METRICS</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-10">
              Optimization is <br/> our currency.
            </h2>
            <p className="text-zinc-400 text-2xl leading-relaxed max-w-lg font-light">
              We don't sell hype. We deploy functional, revenue-generating code that scales with your business needs.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-l-4 border-accent pl-8 py-4">
              <span className="block text-7xl md:text-8xl font-mono font-bold text-white mb-4 tracking-tighter">50+</span>
              <span className="text-zinc-500 text-lg uppercase tracking-widest font-medium">Deployments</span>
            </div>
            
            <div className="border-l-4 border-zinc-800 pl-8 py-4 hover:border-accent transition-colors duration-500">
              <span className="block text-7xl md:text-8xl font-mono font-bold text-white mb-4 tracking-tighter">30%</span>
              <span className="text-zinc-500 text-lg uppercase tracking-widest font-medium">Efficiency Gain</span>
            </div>

            <div className="border-l-4 border-zinc-800 pl-8 py-4 hover:border-accent transition-colors duration-500">
              <span className="block text-7xl md:text-8xl font-mono font-bold text-white mb-4 tracking-tighter">24/7</span>
              <span className="text-zinc-500 text-lg uppercase tracking-widest font-medium">System Uptime</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;