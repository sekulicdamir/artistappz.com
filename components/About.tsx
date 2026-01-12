import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          
          <div className="md:col-span-3">
            <h2 className="font-mono text-base text-accent tracking-widest">03 // PROTOCOL</h2>
          </div>

          <div className="md:col-span-9">
            <p className="text-4xl md:text-6xl font-light text-white leading-tight mb-20">
              "Artificial Intelligence is not a replacement for human intent, but a <span className="text-accent">multiplier</span> for human potential."
            </p>

            <div className="grid md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
              <div>
                <h3 className="font-bold text-2xl mb-6 text-white">The Mission</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  To utilize enterprise-grade AI infrastructure for the emerging needs of our clients. We strip away the complexity to reveal the utility.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-6 text-white">The Methodology</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Rigorous testing, security-first architecture, and a focus on modular, scalable codebases that adapt to evolving models.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;