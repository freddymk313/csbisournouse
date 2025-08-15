import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiAward, BiBook, BiBookOpen, BiCalculator, BiGlobe, BiHeart, BiMailSend, BiMapPin, BiMusic, BiPalette, BiPhone } from 'react-icons/bi';
import { FiTarget } from 'react-icons/fi';
import { FaGraduationCap, FaMicroscope } from 'react-icons/fa';
import { FaBook, FaHeart, FaUser, FaUserSecret } from 'react-icons/fa6';
import { CgLock } from 'react-icons/cg';
import { BsAward } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const OptionsPage = () => {
  useEffect(() => {
    // Page animations
    gsap.fromTo('.options-hero',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    gsap.fromTo('.section-card',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.options-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.feature-card',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const maternelleFeatures = [
    {
      icon: <BiHeart className="text-[#0073b7]" size={24} />,
      title: "Développement du langage",
      description: "Communication orale et expression"
    },
    {
      icon: <BiPalette className="text-[#0073b7]" size={24} />,
      title: "Éveil sensoriel",
      description: "Motricité, affectif et cognitif"
    },
    {
      icon: <FaUserSecret className="text[#0073b7]" size={24} />,
      title: "Autonomie et socialisation",
      description: "Vivre ensemble et indépendance"
    },
    {
      icon: <BiBookOpen className="text-[#0073b7]" size={24} />,
      title: "Premières notions",
      description: "Formes, couleurs, chiffres, lettres"
    }
  ];

  const primaireFeatures = [
    {
      icon: <BiBookOpen className="text-[#0073b7]" size={24} />,
      title: "Lecture et écriture",
      description: "Maîtrise des fondamentaux"
    },
    {
      icon: <BiCalculator className="text-[#0073b7]" size={24} />,
      title: "Bases mathématiques",
      description: "Logique et raisonnement"
    },
    {
      icon: <BiGlobe className="text-[#0073b7]" size={24} />,
      title: "Culture générale",
      description: "Sciences, histoire, géographie"
    },
    {
      icon: <FiTarget className="text-[#0073b7]" size={24} />,
      title: "Méthodes de travail",
      description: "Organisation et concentration"
    }
  ];

  const secondaireFeatures = [
    {
      icon: <FaGraduationCap className="text-[#0073b7]" size={24} />,
      title: "Préparation au Brevet",
      description: "Examens officiels et certifications"
    },
    {
      icon: <FaMicroscope className="text-[#0073b7]" size={24} />,
      title: "Pensée critique",
      description: "Analyse et autonomie intellectuelle"
    },
    {
      icon: <BiAward className="text-[#0073b7]" size={24} />,
      title: "Orientation scolaire",
      description: "Construction du projet d'avenir"
    },
    {
      icon: <BiGlobe className="text-[#0073b7]" size={24} />,
      title: "Ouverture sur le monde",
      description: "Langues vivantes et culture"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="options-hero relative bg-gradient-to-r from-[#0073b7] to-[#005a8f] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Nos <span className="text-yellow-400">Options</span> Éducatives
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            De la maternelle au secondaire, découvrez nos programmes éducatifs 
            adaptés à chaque étape du développement de votre enfant.
          </p>
        </div>
      </section> */}

      <section className="relative h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src='/gallery/6.jpg'
                        alt="Contactez le Complexe Scolaire Les Bisounours"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 md:px-16 lg:px-20 z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-white">
                            <h1 className="contact-hero-title font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                                <span className="block">Nos Options</span>
                                <span className="block">Éducatives</span>
                            </h1>

                            <p className="contact-hero-subtitle text-base md:text-lg mb-6 text-white/90 leading-relaxed max-w-2xl mx-auto">
                                De la maternelle au secondaire, découvrez nos programmes éducatifs 
            
                            </p>

                            <div className="flex flex-col md:flex-row mt-6 justify-center items-center space-y-2 md:space-y-0 md:space-x-6">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

      <div className="options-content">
        {/* Maternelle Section */}
        <section className="section-card py-20 bg-gradient-to-br bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#0073b7] rounded-full flex items-center justify-center mr-4">
                    <FaHeart className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Maternelle</h2>
                    <p className="text-[#0073b7] font-semibold md:text-lg">2 à 5 ans</p>
                  </div>
                </div>

                <p className="*text-lg text-gray-700 mb-8 leading-relaxed">
                  La section Maternelle accueille les enfants de 2 à 5 ans dans un environnement 
                  chaleureux, sécurisé et stimulant. Notre mission est de favoriser le développement 
                  global de chaque enfant, en respectant son rythme, sa curiosité naturelle et sa personnalité.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <FaUser className="text-[#0073b7] mr-3" size={18} />
                    <span className="font-semibold">Petite Section (PS) :</span>
                    <span className="ml-2">dès 2-3 ans</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="text-[#0073b7] mr-3" size={18} />
                    <span className="font-semibold">Moyenne Section (MS) :</span>
                    <span className="ml-2">4 ans</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="text-[#0073b7] mr-3" size={18} />
                    <span className="font-semibold">Grande Section (GS) :</span>
                    <span className="ml-2">5 ans</span>
                  </div>
                  <div className="flex items-center">
                    <CgLock className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">Horaires :</span>
                    <span className="ml-2">7h30 – 16h30 (garderie jusqu'à 18h)</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {maternelleFeatures.map((feature, index) => (
                    <div key={index} className="feature-card bg-white p-4 shadow-sm">
                      <div className="flex items-center mb-2 text-[#0073b7]">
                       {feature.icon}
                        <h4 className="font-semibold text-gray-800 ml-2">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <BiPalette className="text-[#0073b7] mr-2" size={20} />
                    Activités et Services
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Espace motricité et cour extérieure sécurisée</li>
                    <li>Salle de sieste équipée</li>
                    <li>Cantine adaptée aux jeunes enfants</li>
                    <li>Activités extrascolaires : éveil musical, théâtre, jardinage</li>
                    <li>Sorties pédagogiques et animations</li>
                  </ul>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                        src='/gallery/9.jpg'
                  alt="Section Maternelle"
                  className="w-full h-[600px] object-cover *rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Primaire Section */}
        <section className="section-card py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <div>
                <img
src="/primaire.jpg"
                  alt="Section Primaire"
                  className="w-full h-[600px] object-cover shadow-2xl"
                />
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#0073b7] rounded-full flex items-center justify-center mr-4">
                    <FaBook className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Primaire</h2>
                    <p className="text-[#0073b7] font-semibold text-lg">6 à 11 ans</p>
                  </div>
                </div>

                <p className="md:text-lg text-gray-700 mb-8 leading-relaxed">
                  La section Primaire accueille les enfants de 6 à 11 ans, correspondant aux classes 
                  du Cours Préparatoire (CP) jusqu'au Cours Moyen 2ᵉ année (CM2). L'objectif principal 
                  est de consolider les fondations scolaires et développer l'esprit critique.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">CP (Cours Préparatoire) :</span>
                    <span className="ml-2">6 ans</span>
                  </div>
                  <div className="flex items-center">
                    <FaGraduationCap className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">CE1-CE2 (Cours Élémentaire) :</span>
                    <span className="ml-2">7-8 ans</span>
                  </div>
                  <div className="flex items-center">
                    <FaGraduationCap className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">CM1-CM2 (Cours Moyen) :</span>
                    <span className="ml-2">9-11 ans</span>
                  </div>
                  <div className="flex items-center">
                    <CgLock className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">Horaires :</span>
                    <span className="ml-2">7h30 – 16h30 (études jusqu'à 18h)</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {primaireFeatures.map((feature, index) => (
                    <div key={index} className="feature-card bg-white p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        {feature.icon}
                        <h4 className="font-semibold text-gray-800 ml-2">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <BiMusic className="text-[#0073b7] mr-2" size={20} />
                    Activités Complémentaires
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Cours d'éducation physique et sportive</li>
                    <li>Ateliers artistiques : musique, théâtre, dessin</li>
                    <li>Sorties pédagogiques (musées, fermes pédagogiques)</li>
                    <li>Clubs extrascolaires : lecture, informatique, échecs</li>
                    <li>Soutien scolaire personnalisé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondaire Section */}
        <section className="section-card py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#0073b7] rounded-full flex items-center justify-center mr-4">
                    <FaGraduationCap className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Secondaire</h2>
                    <p className="text-[#0073b7] font-semibold text-lg">11 à 15 ans</p>
                  </div>
                </div>

                <p className="md:text-lg text-gray-700 mb-8 leading-relaxed">
                  La section Secondaire regroupe les classes de la 6e à la 3e, soit le collège, 
                  une étape charnière dans la scolarité. Notre mission est d'accompagner chaque 
                  adolescent dans son développement intellectuel, personnel et social.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BiAward className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">6ème (11-12 ans) :</span>
                    <span className="ml-2">Transition primaire-secondaire</span>
                  </div>
                  <div className="flex items-center">
                    <BiAward className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">5ème (12-13 ans) :</span>
                    <span className="ml-2">Approfondissements scientifiques</span>
                  </div>
                  <div className="flex items-center">
                    <BsAward className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">4ème-3ème (13-15 ans) :</span>
                    <span className="ml-2">Préparation Brevet et orientation</span>
                  </div>
                  <div className="flex items-center">
                    <CgLock className="text-[#0073b7] mr-3" size={20} />
                    <span className="font-semibold">Horaires :</span>
                    <span className="ml-2">7h30 – 16h45 (clubs jusqu'à 18h)</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {secondaireFeatures.map((feature, index) => (
                    <div key={index} className="feature-card bg-white p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        {feature.icon}
                        <h4 className="font-semibold text-gray-800 ml-2">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <BiGlobe className="text-[#0073b7] mr-2" size={20} />
                    Ouverture et Vie Scolaire
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Langues vivantes (Anglais, Espagnol)</li>
                    <li>Initiation informatique et citoyenneté</li>
                    <li>Clubs sciences, débats, culture générale</li>
                    <li>Sorties pédagogiques et visites d'entreprises</li>
                    <li>Participation aux concours académiques</li>
                  </ul>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                src="/gallery/2.jpg"
                  alt="Section Secondaire"
                  className="w-full h-600px] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Examens et Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Examens et <span className="text-[#0073b7]">Certifications</span>
              </h2>
              <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
                Préparation rigoureuse aux examens officiels et certifications reconnues
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-0 text-center">
                  <div className="w-16 h-16 bg-[#0073b7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHeart className="text-[#0073b7]" size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Maternelle</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Évaluations développementales</li>
                    <li>Bilans de compétences</li>
                    <li>Préparation à l'entrée en CP</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-0 text-center">
                  <div className="w-16 h-16 bg-[#0073b7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBook className="text-[#0073b7]" size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Primaire</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Évaluations nationales CE1</li>
                    <li>Contrôles continus</li>
                    <li>Préparation à l'entrée en 6ème</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-0 text-center">
                  <div className="w-16 h-16 bg-[#0073b7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGraduationCap className="text-[#0073b7]" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Secondaire</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Diplôme National du Brevet</li>
                    <li>Évaluations nationales 6ème</li>
                    <li>Attestations numériques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OptionsPage;