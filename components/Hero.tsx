import React, { useState, useEffect } from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [locationInfo, setLocationInfo] = useState('Acquiring coordinates...');
  const [cityInfo, setCityInfo] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const lat = latitude.toFixed(4);
          const lon = longitude.toFixed(4);
          setLocationInfo(`LAT: ${lat}, LON: ${lon}`);

          try {
            // Using a free, no-key reverse geocoding API
            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCityInfo(data.city || 'Location data unavailable');
          } catch (error) {
            console.error("Error fetching city:", error);
            setCityInfo('City lookup failed');
          }
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setLocationInfo("Location access denied.");
              break;
            case error.POSITION_UNAVAILABLE:
              setLocationInfo("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setLocationInfo("Location request timed out.");
              break;
            default:
              setLocationInfo("An unknown error occurred.");
              break;
          }
        },
        {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 0
        }
      );
    } else {
      setLocationInfo("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-grid pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <div className="mb-10 font-mono text-accent text-base tracking-widest">
          SYSTEM_STATUS: ONLINE
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-white mb-16">
          ENGINEERING <br />
          <span className="text-zinc-600">INTELLIGENCE.</span>
        </h1>
        
        <div className="grid md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
          <div className="md:col-span-6">
            <p className="text-2xl md:text-3xl text-zinc-400 font-light leading-tight">
              We architect high-performance AI solutions for forward-thinking enterprises. Bridging the gap between theoretical models and revenue-generating applications.
            </p>
          </div>
          
          <div className="md:col-span-6 flex flex-col md:flex-row gap-6 md:justify-end md:items-start">
            <a 
              href="#contact" 
              onClick={handleScrollToContact}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black text-lg font-bold hover:bg-accent hover:text-white transition-all duration-300"
            >
              <span>Initialize Project</span>
              <ArrowDownRight className="ml-3 w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>

      </div>
      
      {/* Footer ticker style element */}
      <div className="absolute bottom-0 w-full border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between font-mono text-sm text-zinc-500 uppercase tracking-widest">
          <span>{locationInfo}</span>
          <span>{cityInfo}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;