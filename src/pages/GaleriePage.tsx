import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const GaleriePage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('Tous');

  useEffect(() => {
    // Animations d'entrée
    gsap.fromTo('.gallery-header',
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.gallery-header',
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo('.gallery-item',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 85%'
        }
      }
    );
  }, []);

  const categories = ['Tous', 'Installations', 'Événements', 'Classes', 'Activités'];

  const galleryImages = [
    {
      src: "/gallery/bus.jpg",
      alt: "Bus scolaire",
      title: "Transport sécurisé",
      category: "Installations",
      description: "Notre flotte de bus modernes assure le transport sécurisé des élèves"
    },
    {
      src: "/gallery/primaire.jpg",
      alt: "Élèves en pause",
      title: "Pause récréative",
      category: "Activités",
      description: "Moments de détente entre les cours dans nos espaces verts"
    },
    {
      src: "/gallery/eleves_pause.jpg",
      alt: "Élèves en pause",
      title: "Échanges entre élèves",
      category: "Activités",
      description: "Nos élèves profitent des pauses pour échanger et se détendre"
    },
    {
      src: "/gallery/eleves.jpg",
      alt: "Photographie de groupe d'élèves",
      title: "Promotion 2023",
      category: "Événements",
      description: "Cérémonie de remise des diplômes de fin d'année"
    },
    {
      src: "/gallery/secondaire.jpg",
      alt: "Eleves du secondaire",
      title: "Laboratoire de sciences",
      category: "Classes",
      description: "Nos élèves du secondaire lors d'une expérience scientifique"
    },
    {
      src: "/gallery/terrain.jpg",
      alt: "Cour de récréation",
      title: "Espaces de détente",
      category: "Installations",
      description: "Nos vastes espaces extérieurs pour les activités récréatives"
    },
    {
      src: "/gallery/bibliotheque.jpg",
      alt: "Bibliothèque scolaire",
      title: "Centre de connaissances",
      category: "Installations",
      description: "Notre bibliothèque richement fournie pour la recherche"
    },
    {
      src: "/gallery/sport.jpg",
      alt: "Activités sportives",
      title: "Compétition sportive",
      category: "Activités",
      description: "Tournoi annuel de football entre les classes"
    },
    {
      src: "/gallery/ceremonie.jpg",
      alt: "Cérémonie scolaire",
      title: "Remise des prix",
      category: "Événements",
      description: "Célébration de l'excellence académique"
    }
  ];

  const filteredImages = activeCategory === 'Tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(prev =>
        prev === 0 ? filteredImages.length - 1 : (prev as number) - 1
      );
    } else {
      setSelectedImage(prev =>
        prev === filteredImages.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src='/gallery/eleves.jpg'
            alt="Contactez le Complexe Scolaire Les Bisounours"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-16 lg:px-20 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <h1 className="contact-hero-title font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                <span className="block">Galerie</span>
                <span className="block">Photos</span>
              </h1>

              <p className="contact-hero-subtitle text-base md:text-lg mb-6 text-white/90 leading-relaxed max-w-2xl mx-auto">
                Explorez la vie scolaire à travers notre collection de moments capturés
              </p>

              <div className="flex flex-col md:flex-row mt-6 justify-center items-center space-y-2 md:space-y-0 md:space-x-6">

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="gallery-header text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Notre <span className="text-[#0073B7]">Environnement</span> Éducatif
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez nos installations modernes et l'atmosphère unique de notre école
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                    ? 'bg-[#0073B7] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Fermer"
          >
            <FiX size={28} />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 md:left-12 text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Image précédente"
          >
            <FiChevronLeft size={32} />
          </button>

          <div className="max-w-4xl w-full mx-12">
            <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
              <p className="text-white/80 mt-1">{filteredImages[selectedImage].description}</p>
              <p className="text-sm text-white/60 mt-2">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 md:right-12 text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Image suivante"
          >
            <FiChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-[#E6F0FA] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Vous souhaitez voir plus de notre école?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Planifiez une visite guidée de nos installations pour découvrir
            personnellement notre environnement éducatif.
          </p>
          <button className="bg-[#0073B7] hover:bg-[#005a9c] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Demander une visite
          </button>
        </div>
      </section>
    </div>
  );
};

export default GaleriePage;