import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsSend } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';

gsap.registerPlugin(ScrollTrigger);

export const GallerySection = () => {
  useEffect(() => {
    // Gallery animations
    gsap.fromTo('.gallery-item',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.gallery-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const galleryImages = [
    {
      src: "/gallery/bus.jpg",
      alt: "Bus scolaire",
      title: "Bus scolaire"
    },
    {
      src: "/gallery/primaire.jpg",
      alt: "Élèves en pause",
      title: "Élèves en pause"
    },
    {
      src: "/gallery/eleves_pause.jpg",
      alt: "Élèves en pause",
      title: "Elèves en pause"
    },
    {
      src: "/gallery/eleves.jpg",
      alt: "Photographie de groupe d'élèves",
      title: "Photographie de groupe d'élèves"
    },
    {
      src: "/gallery/secondaire.jpg",
      alt: "Eleves du secondaire",
      title: "Eleves du secondaire"
    },
    {
      src: "/gallery/terrain.jpg",
      alt: "Cour de récréation",
      title: "Espaces de détente"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="mx-auto px-4 md:px-16 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="about-title font-bold text-2xl md:text-3xl lg:text-4xl text-[#333333] mb-6 text-center">
            Notre <span className="text-[#0073b7]">Galerie</span>
          </h2>
          <p className="text-gray-800 text-center mb-4 *max-w-4xl leading-relaxed">
            Découvrez nos installations modernes et l'environnement d'apprentissage
            exceptionnel que nous offrons à nos élèves.
          </p>
        </div>

        <div className="gallery-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center mt-8'>
          <a
          href="/galerie"
          className="flex items-center justify-center bg-[#0073b7] hover:bg-[#005a8f] text-white py-3.5 px-8 group"
        >
          <span>Voir Plus</span>
          <GoArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
        </a>
        </div>
      </div>
    </section>
  );
};