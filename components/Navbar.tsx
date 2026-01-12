import React, { useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      else if (Math.abs(delta) > 10) {
        if (delta > 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId === '' ? 'home' : targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed bottom-0 w-full z-50 transition-transform duration-500 ease-in-out border-t bg-background/95 backdrop-blur-xl border-white/10 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center h-24">
          
          {/* Centered Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center cursor-pointer">
              <span className="font-bold text-xl md:text-2xl tracking-tight">
                artistappz<span className="text-accent">.</span>com
              </span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;