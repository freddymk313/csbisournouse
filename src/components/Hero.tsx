import { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title',
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    )
    .fromTo('.hero-subtitle',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo('.hero-buttons',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section id="home" className="relative h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src='/hero.jpg'
          alt="École maternelle CS Bisounours - Enfants heureux apprenant et jouant"
          className="hero-image w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-16 lg:px-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white">
            <h1 className="hero-title font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              <span className="block">Bienvenue au</span>
              <span className="block">Complexe Scolaire Les Bisounours</span>
            </h1>
            
            <p className="hero-subtitle text-base md:text-lg mb-6 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Un cadre d'apprentissage chaleureux où chaque enfant s'épanouit 
              à travers des méthodes pédagogiques adaptées.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white border border-white hover:bg-gray-50 text-[#0073B7] px-6 py-3 md:text-base transition-colors duration-300">
                Découvrir notre école
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#0073B7] px-6 py-3 md:text-base transition-colors duration-300">
                Inscription en ligne
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;