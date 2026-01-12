import React from 'react';
import { Cpu, Network, Zap, Lock, Search, Layers } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Strategy",
      desc: "Roadmapping & feasibility analysis for enterprise AI adoption."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Integration",
      desc: "Embedding LLMs into existing web & mobile architectures."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation",
      desc: "Intelligent agents for workflow optimization and reduction."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "RAG Systems",
      desc: "Retrieval-Augmented Generation for proprietary data querying."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "UX/UI Design",
      desc: "Adaptive interfaces that respond to user intent in real-time."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security",
      desc: "Enterprise-grade guardrails and compliance for AI models."
    }
  ];

  return (
    <section id="services" className="py-32 bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">System Capabilities</h2>
          <span className="font-mono text-accent text-base mt-4 md:mt-0">01 // SERVICES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 bg-white/5">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group p-10 border border-white/5 hover:bg-white/5 transition-colors duration-300 hover:border-white/20"
            >
              <div className="text-zinc-500 group-hover:text-accent transition-colors mb-8">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-mono">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;