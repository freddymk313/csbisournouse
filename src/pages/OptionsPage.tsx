import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineCalendar } from 'react-icons/hi';
import { GallerySection } from '../components/Gallery';

gsap.registerPlugin(ScrollTrigger);

const MaternellePage = () => {
  const [activeTab, setActiveTab] = useState('presentation');

  useEffect(() => {
    // Animations d'entrée
    gsap.fromTo('.section-header', 
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo('.content-card', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.main-content',
          start: 'top 85%'
        }
      }
    );
  }, []);

  const galleryImages = [
    {
      src: "/gallery/maternelle1.jpg",
      alt: "Salle de classe maternelle",
      title: "Notre salle de classe"
    },
    {
      src: "/gallery/maternelle2.jpg",
      alt: "Activité ludique",
      title: "Atelier éducatif"
    },
    {
      src: "/gallery/maternelle3.jpg",
      alt: "Espace de sieste",
      title: "Coin repos"
    },
    {
      src: "/gallery/maternelle4.jpg",
      alt: "Cour de récréation",
      title: "Espace extérieur"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0073B7] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Section Maternelle</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Un environnement chaleureux et stimulant pour les 2-5 ans
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('presentation')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'presentation' 
                  ? 'border-[#0073B7] text-[#0073B7]' 
                  : 'border-transparent text-gray-600 hover:text-[#0073B7]'
              }`}
            >
              Présentation
            </button>
            <button
              onClick={() => setActiveTab('pedagogie')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'pedagogie' 
                  ? 'border-[#0073B7] text-[#0073B7]' 
                  : 'border-transparent text-gray-600 hover:text-[#0073B7]'
              }`}
            >
              Pédagogie
            </button>
            <button
              onClick={() => setActiveTab('equipe')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'equipe' 
                  ? 'border-[#0073B7] text-[#0073B7]' 
                  : 'border-transparent text-gray-600 hover:text-[#0073B7]'
              }`}
            >
              Équipe
            </button>
            <button
              onClick={() => setActiveTab('infos')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'infos' 
                  ? 'border-[#0073B7] text-[#0073B7]' 
                  : 'border-transparent text-gray-600 hover:text-[#0073B7]'
              }`}
            >
              Infos pratiques
            </button>
            <button
              onClick={() => setActiveTab('galerie')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'galerie' 
                  ? 'border-[#0073B7] text-[#0073B7]' 
                  : 'border-transparent text-gray-600 hover:text-[#0073B7]'
              }`}
            >
              Galerie
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content py-16">
        <div className="container mx-auto px-6">
          {/* Présentation Section */}
          {activeTab === 'presentation' && (
            <section>
              <div className="section-header text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Bienvenue en <span className="text-[#0073B7]">Maternelle</span>
                </h2>
                <div className="w-24 h-1 bg-[#0073B7] mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Un espace conçu pour l'épanouissement des tout-petits
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="content-card">
                  <div className="bg-[#E6F0FA] p-8 rounded-xl h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                      <HiOutlineAcademicCap className="text-[#0073B7] mr-3" size={28} />
                      Notre Mission
                    </h3>
                    <p className="text-gray-600 mb-6">
                      La section Maternelle de notre établissement accueille les enfants de 2 à 5 ans dans un environnement chaleureux, sécurisé et stimulant. Notre mission est de favoriser le développement global de chaque enfant, en respectant son rythme, sa curiosité naturelle et sa personnalité.
                    </p>
                    <p className="text-gray-600">
                      Nos enseignants spécialisés mettent en œuvre une pédagogie active, axée sur le jeu, la découverte, et le vivre-ensemble, afin de préparer en douceur l'entrée en primaire.
                    </p>
                  </div>
                </div>

                <div className="content-card">
                  <div className="bg-[#E6F0FA] p-8 rounded-xl h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                      <HiOutlineUserGroup className="text-[#0073B7] mr-3" size={28} />
                      Niveaux Accueillis
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Petite Section (PS)</h4>
                          <p>Dès 2-3 ans - Première socialisation</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Moyenne Section (MS)</h4>
                          <p>4 ans - Développement de l'autonomie</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Grande Section (GS)</h4>
                          <p>5 ans - Préparation au CP</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Pédagogie Section */}
          {activeTab === 'pedagogie' && (
            <section>
              <div className="section-header text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Notre <span className="text-[#0073B7]">Approche</span> Pédagogique
                </h2>
                <div className="w-24 h-1 bg-[#0073B7] mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Une méthodologie adaptée au développement des tout-petits
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="content-card bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0073B7]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#E6F0FA] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-[#0073B7] text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Objectifs Pédagogiques</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Développement du langage oral
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Éveil sensoriel et moteur
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Autonomie et socialisation
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Découverte des premières notions
                    </li>
                  </ul>
                </div>

                <div className="content-card bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0073B7]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#E6F0FA] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-[#0073B7] text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Méthodologie</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Approche ludique et interactive
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Ateliers par petits groupes
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Projets thématiques mensuels
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Suivi individualisé
                    </li>
                  </ul>
                </div>

                <div className="content-card bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0073B7]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#E6F0FA] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-[#0073B7] text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Activités & Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Espace motricité sécurisé
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Salle de sieste équipée
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Cantine adaptée
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0073B7] mr-2">•</span>
                      Activités extrascolaires
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Equipe Section */}
          {activeTab === 'equipe' && (
            <section>
              <div className="section-header text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Notre <span className="text-[#0073B7]">Équipe</span> Pédagogique
                </h2>
                <div className="w-24 h-1 bg-[#0073B7] mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Des professionnels dévoués à l'épanouissement de votre enfant
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="content-card bg-white p-8 rounded-xl border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Enseignants & Personnel
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Enseignants diplômés</h4>
                        <p>Spécialisés en pédagogie de la petite enfance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Assistantes maternelles</h4>
                        <p>Pour un accompagnement personnalisé</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Psychologue scolaire</h4>
                        <p>Disponible pour un suivi si nécessaire</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="content-card bg-white p-8 rounded-xl border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Engagement Qualité
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Formation continue</h4>
                        <p>Mise à jour régulière des compétences</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Approche bienveillante</h4>
                        <p>Respect du rythme de chaque enfant</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Communication régulière</h4>
                        <p>Échanges quotidiens avec les parents</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Infos Pratiques Section */}
          {activeTab === 'infos' && (
            <section>
              <div className="section-header text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Informations <span className="text-[#0073B7]">Pratiques</span>
                </h2>
                <div className="w-24 h-1 bg-[#0073B7] mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Tout ce que vous devez savoir pour l'inscription de votre enfant
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="content-card">
                  <div className="bg-[#E6F0FA] p-8 rounded-xl h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                      <HiOutlineCalendar className="text-[#0073B7] mr-3" size={28} />
                      Horaires & Inscription
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Âge requis</h4>
                          <p>À partir de 2 ans révolus</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Horaires</h4>
                          <p>7h30 - 16h30 (garderie jusqu'à 18h)</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#0073B7] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Documents à fournir</h4>
                          <p>Extrait de naissance, carnet de vaccination, etc.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="content-card">
                  <div className="bg-white p-8 rounded-xl border border-gray-200 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                      Contact & Visite
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FiMail className="text-[#0073B7] mt-1 mr-3" size={20} />
                        <div>
                          <p className="text-gray-600">Email</p>
                          <a href="mailto:maternelle@cs-bisounours.com" className="text-[#0073B7] hover:underline">
                            maternelle@cs-bisounours.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiPhone className="text-[#0073B7] mt-1 mr-3" size={20} />
                        <div>
                          <p className="text-gray-600">Téléphone</p>
                          <a href="tel:+243822266004" className="text-[#0073B7] hover:underline">
                            +243 822 266 004
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiMapPin className="text-[#0073B7] mt-1 mr-3" size={20} />
                        <div>
                          <p className="text-gray-600">Adresse</p>
                          <p>1098, Av MAMA YEMO, Lubumbashi</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiClock className="text-[#0073B7] mt-1 mr-3" size={20} />
                        <div>
                          <p className="text-gray-600">Heures de visite</p>
                          <p>Lundi - Vendredi, 9h-11h et 14h-16h</p>
                        </div>
                      </div>
                    </div>
                    <button className="mt-6 flex items-center bg-[#0073B7] hover:bg-[#005a9c] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                      Demander une visite
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Galerie Section */}
          {activeTab === 'galerie' && (
            <section>
              <div className="section-header text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Galerie <span className="text-[#0073B7]">Maternelle</span>
                </h2>
                <div className="w-24 h-1 bg-[#0073B7] mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Découvrez notre espace dédié aux tout-petits en images
                </p>
              </div>
              <GallerySection />
            </section>
          )}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-[#E6F0FA] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Prêt à inscrire votre enfant en Maternelle?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Notre équipe est disponible pour répondre à toutes vos questions et vous guider dans le processus d'inscription.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+243822266004" 
              className="flex items-center justify-center bg-white text-[#0073B7] hover:bg-[#0073B7] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md"
            >
              <FiPhone className="mr-2" />
              Nous appeler
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center bg-[#0073B7] hover:bg-[#005a9c] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md"
            >
              <FiMail className="mr-2" />
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaternellePage;