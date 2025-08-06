import { useEffect } from 'react';
// import { Button } from './ui/button';
// import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
    )
    .fromTo('.hero-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo('.hero-buttons',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo('.hero-stats',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Floating animation for hero image
    gsap.to('.hero-image', {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  // const stats = [
  //   { number: "25+", label: "Années d'expérience" },
  //   { number: "1500+", label: "Élèves diplômés" },
  //   { number: "98%", label: "Taux de réussite" },
  //   { number: "50+", label: "Enseignants qualifiés" }
  // ];

  return (
    <section id="home" className="relative h-[60vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src='/hero.jpg'
          alt="School background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mx-auto px-6 py-20">
        <div className="">
          <div className="text-white">
            {/* <h1 className="hero-title font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              Excellence
              <span className="block text-yellow-400">Éducative</span>
              <span className="block">Depuis 1998</span>
            </h1>
            
            <p className="hero-subtitle text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
              Offrez à votre enfant une éducation de qualité dans un environnement 
              bienveillant et moderne. Découvrez l'excellence éducative au 
              Complexe Scolaire Les Bisounours.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-[#0073b7] font-semibold px-8 py-4 rounded-full text-lg group">
                Découvrir nos programmes
              </button>
              <button className="border-white text-white hover:bg-white hover:text-[#0073b7] px-8 py-4 rounded-full text-lg group">
                Visite virtuelle
              </button>
            </div> */}

            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stats text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Hero;