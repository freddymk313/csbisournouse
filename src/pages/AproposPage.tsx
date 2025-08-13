import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiAward, BiBookOpen, BiHeart, BiMapPin, BiPhone } from 'react-icons/bi';
import { PiUserSound } from 'react-icons/pi';
import { FiMapPin, FiPhone, FiTarget } from 'react-icons/fi';
import { BsEye, BsSend } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const AproposPage = () => {
  useEffect(() => {
    // Hero animation
    gsap.fromTo('.about-hero-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 }
    );

    gsap.fromTo('.about-hero-subtitle', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6 }
    );

    // Section animations
    gsap.fromTo('.about-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo('.value-card',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top 85%'
        }
      }
    );
  }, []);

  const schoolValues = [
    {
      icon: <BiHeart className="text-[#0073B7]" size={32} />,
      title: "Bienveillance",
      description: "Un environnement chaleureux et sécurisé où chaque enfant se sent valorisé et respecté."
    },
    {
      icon: <BiAward className="text-[#0073B7]" size={32} />,
      title: "Excellence",
      description: "Nous visons l'excellence académique tout en développant le potentiel unique de chaque élève."
    },
    {
      icon: <PiUserSound className="text-[#0073B7]" size={32} />,
      title: "Solidarité",
      description: "Nous cultivons l'esprit d'équipe, l'entraide et le respect mutuel au sein de notre communauté."
    },
    {
      icon: <BiBookOpen className="text-[#0073B7]" size={32} />,
      title: "Innovation",
      description: "Méthodes pédagogiques modernes et technologies éducatives pour un apprentissage efficace."
    },
    {
      icon: <FiTarget className="text-[#0073B7]" size={32} />,
      title: "Intégrité",
      description: "Nous formons des citoyens responsables avec de solides valeurs morales et éthiques."
    },
    {
      icon: <BsEye className="text-[#0073B7]" size={32} />,
      title: "Ouverture",
      description: "Ouverture sur le monde, diversité culturelle et préparation aux défis de demain."
    }
  ];

  const milestones = [
    {
      year: "1998",
      title: "Fondation de l'école",
      description: "Création du Complexe Scolaire Les Bisounours avec une vision d'excellence éducative."
    },
    {
      year: "2005",
      title: "Extension du secondaire",
      description: "Ouverture du cycle secondaire complet avec des programmes académiques renforcés."
    },
    {
      year: "2012",
      title: "Modernisation des infrastructures",
      description: "Rénovation complète des bâtiments et installation d'équipements technologiques modernes."
    },
    {
      year: "2018",
      title: "Certification qualité",
      description: "Obtention de la certification qualité pour l'excellence de nos programmes éducatifs."
    },
  ];

  const leadership = [
    {
      name: "Dr. Marie KABONGO",
      position: "Directrice Générale",
      image: "/gallery/12.jpg",
      description: "25 ans d'expérience en éducation, PhD en Sciences de l'Éducation"
    },
    {
      name: "Prof. Jean MUKENDI",
      position: "Directeur Pédagogique",
      image: "/gallery/13.jpg",
      description: "Expert en pédagogie moderne et développement curriculaire"
    },
    {
      name: "Mme. Grace MWAMBA",
      position: "Directrice Administrative",
      image: "/gallery/1.jpg",
      description: "Spécialiste en gestion éducative et relations communautaires"
    }
  ];

  const socialLinks = [
    {
      icon: <IoLogoWhatsapp size={20} />,
      name: "WhatsApp",
      url: "https://wa.me/243822266004"
    },
    {
      icon: <MdFacebook size={20} />,
      name: "Facebook",
      url: "https://facebook.com/cs-bisounours"
    },
    {
      icon: <AiFillInstagram size={20} />,
      name: "Instagram",
      url: "https://instagram.com/cs-bisounours"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src='/gallery/8.jpg'
            alt="À propos du Complexe Scolaire Les Bisounours"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 md:px-16 lg:px-20 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <h1 className="about-hero-title font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                <span className="block">À Propos de</span>
                <span className="block">Notre École</span>
              </h1>

              <p className="about-hero-subtitle text-base md:text-lg mb-6 text-white/90 leading-relaxed max-w-2xl mx-auto">
                Découvrez l'histoire, la mission et les valeurs qui font du Complexe Scolaire 
                Les Bisounours un établissement d'excellence depuis plus de 25 ans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="text-[#0073B7]" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6">Notre Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Former des élèves responsables, curieux, ouverts sur le monde et enracinés 
                dans des valeurs humaines et chrétiennes solides. Nous nous engageons à 
                offrir une éducation de qualité dans un environnement bienveillant qui 
                favorise l'épanouissement complet de chaque enfant.
              </p>
            </div>

            <div className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <BsEye className="text-[#0073B7]" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6">Notre Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Être l'établissement de référence en matière d'excellence éducative à 
                Lubumbashi, reconnu pour la qualité de son enseignement, l'innovation 
                pédagogique et la formation de citoyens exemplaires prêts à relever 
                les défis du 21ème siècle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire de l'école */}
      <section className="about-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Notre <span className="text-[#0073B7]">Histoire</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plus de 25 ans d'engagement pour l'excellence éducative
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline bar */}
              {/* <div className="absolute *left-5 md:left-10 h-full w-1 bg-gray-200"></div> */}
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-16 md:pl-24 mb-12 last:mb-0">
                  {/* Year circle */}
                  {/* <div className="absolute left-0 w-10 h-10 md:w-12 md:h-12 bg-[#0073B7] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base -ml-1">
                    {milestone.year}
                  </div> */}
                  
                  <div className="bg-gray-50 p-6 *shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="absolute left-0 w-10 h-10 md:w-12 md:h-12 bg-[#0073B7] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base -ml-1">
                    {milestone.year}
                  </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="values-section about-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Nos <span className="text-[#0073B7]">Valeurs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident notre action éducative
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {schoolValues.map((value, index) => (
              <div key={index} className="value-card p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direction */}
      <section className="about-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Notre <span className="text-[#0073B7]">Direction</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une équipe de direction expérimentée et dévouée à l'excellence éducative
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-[#0073B7] font-semibold mb-3">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="about-section py-20 bg-[#0073B7] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="">Chiffres</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Des résultats qui témoignent de notre engagement pour l'excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-4">25+</div>
              <div className="text-lg font-semibold mb-2">Années d'expérience</div>
              <div className="text-gray-200">Depuis 1998</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-4">1500+</div>
              <div className="text-lg font-semibold mb-2">Élèves diplômés</div>
              <div className="text-gray-200">Succès garantis</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-4">98%</div>
              <div className="text-lg font-semibold mb-2">Taux de réussite</div>
              <div className="text-gray-200">Excellence académique</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-4">50+</div>
              <div className="text-lg font-semibold mb-2">Enseignants qualifiés</div>
              <div className="text-gray-200">Équipe dévouée</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="about-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Rejoignez Notre <span className="text-[#0073B7]">Communauté</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez comment nous pouvons accompagner votre enfant vers l'excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0073B7] rounded-full flex items-center justify-center mb-4 mx-auto">
                <FiMapPin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#333333] mb-2 text-center">Adresse</h3>
              <p className="text-gray-600 text-center">
                1098, Av MAMA YEMO<br />
                C/Lubumbashi, Haut-Katanga RDC
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0073B7] rounded-full flex items-center justify-center mb-4 mx-auto">
                <FiPhone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#333333] mb-2 text-center">Téléphone</h3>
              <p className="text-gray-600 text-center">
                +243 822266004<br />
                +243 843387388
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0073B7] rounded-full flex items-center justify-center mb-4 mx-auto">
                <HiOutlineMail className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#333333] mb-2 text-center">Email</h3>
              <p className="text-gray-600 text-center">
                direction@cs-bisounours.com<br />
                info@cs-bisounours.com
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a 
              href="/contact" 
              className="flex items-center justify-center bg-[#0073B7] hover:bg-[#005a8f] text-white px-6 py-3 transition-colors"
            >
              <span>Planifier une visite</span>
              <BsSend className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AproposPage;