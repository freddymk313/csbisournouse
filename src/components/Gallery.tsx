import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const GallerySection = (): JSX.Element => {
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
      src: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Salle de classe moderne",
      title: "Salles de classe modernes"
    },
    {
      src: "https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Élèves en activité",
      title: "Apprentissage interactif"
    },
    {
      src: "https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Laboratoire de sciences",
      title: "Laboratoire de sciences"
    },
    {
      src: "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Bibliothèque",
      title: "Bibliothèque moderne"
    },
    {
      src: "https://images.pexels.com/photos/8613066/pexels-photo-8613066.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Terrain de sport",
      title: "Installations sportives"
    },
    {
      src: "https://images.pexels.com/photos/8613032/pexels-photo-8613032.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Cour de récréation",
      title: "Espaces de détente"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Notre <span className="text-[#0073b7]">Galerie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos installations modernes et l'environnement d'apprentissage 
            exceptionnel que nous offrons à nos élèves.
          </p>
        </div>

        <div className="gallery-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
      </div>
    </section>
  );
};