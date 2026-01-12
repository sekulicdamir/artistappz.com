import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col relative z-10">
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;