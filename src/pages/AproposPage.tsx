import { useEffect } from 'react';
// import { Button } from '../components/ui/button';
// import { Card, CardContent } from '../components/ui/card';
// import { Users, Award, BookOpen, Heart, Target, Eye, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiAward, BiBookOpen, BiHeart, BiMailSend, BiMapPin, BiPhone } from 'react-icons/bi';
import { PiUserSound } from 'react-icons/pi';
import { FiTarget } from 'react-icons/fi';
import { BsEye } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const AproposPage = () => {
  useEffect(() => {
    // Page animations
    gsap.fromTo('.about-hero',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );

    gsap.fromTo('.about-section',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.value-card',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const schoolValues = [
    {
      icon: <BiHeart className="text-[#0073b7]" size={32} />,
      title: "Bienveillance",
      description: "Un environnement chaleureux et sécurisé où chaque enfant se sent valorisé et respecté."
    },
    {
      icon: <BiAward className="text-[#0073b7]" size={32} />,
      title: "Excellence",
      description: "Nous visons l'excellence académique tout en développant le potentiel unique de chaque élève."
    },
    {
      icon: <PiUserSound className="text-[#0073b7]" size={32} />,
      title: "Solidarité",
      description: "Nous cultivons l'esprit d'équipe, l'entraide et le respect mutuel au sein de notre communauté."
    },
    {
      icon: <BiBookOpen className="text-[#0073b7]" size={32} />,
      title: "Innovation",
      description: "Méthodes pédagogiques modernes et technologies éducatives pour un apprentissage efficace."
    },
    {
      icon: <FiTarget className="text-[#0073b7]" size={32} />,
      title: "Intégrité",
      description: "Nous formons des citoyens responsables avec de solides valeurs morales et éthiques."
    },
    {
      icon: <BsEye className="text-[#0073b7]" size={32} />,
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
    {
      year: "2023",
      title: "Campus numérique",
      description: "Lancement de notre plateforme d'apprentissage numérique et bibliothèque digitale."
    }
  ];

  const leadership = [
    {
      name: "Dr. Marie KABONGO",
      position: "Directrice Générale",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "25 ans d'expérience en éducation, PhD en Sciences de l'Éducation"
    },
    {
      name: "Prof. Jean MUKENDI",
      position: "Directeur Pédagogique",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Expert en pédagogie moderne et développement curriculaire"
    },
    {
      name: "Mme. Grace MWAMBA",
      position: "Directrice Administrative",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Spécialiste en gestion éducative et relations communautaires"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="about-hero relative bg-gradient-to-r from-[#0073b7] to-[#005a8f] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            À Propos de <span className="text-yellow-400">Notre École</span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Découvrez l'histoire, la mission et les valeurs qui font du Complexe Scolaire 
            Les Bisounours un établissement d'excellence depuis plus de 25 ans.
          </p>
        </div>
      </section>

      <div className="about-content">
        {/* Mission & Vision */}
        <section className="about-section py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="p-8 shadow-xl border-0 bg-gradient-to-br from-[#0073b7] to-[#005a8f] text-white">
                <div className="p-0">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                    <FiTarget className="text-[#0073b7]" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
                  <p className="text-lg leading-relaxed">
                    Former des élèves responsables, curieux, ouverts sur le monde et enracinés 
                    dans des valeurs humaines et chrétiennes solides. Nous nous engageons à 
                    offrir une éducation de qualité dans un environnement bienveillant qui 
                    favorise l'épanouissement complet de chaque enfant.
                  </p>
                </div>
              </div>

              <div className="p-8 shadow-xl border-0 bg-gradient-to-br from-yellow-400 to-yellow-500 text-[#0073b7]">
                <div className="p-0">
                  <div className="w-16 h-16 bg-[#0073b7] rounded-full flex items-center justify-center mb-6">
                    <BsEye className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
                  <p className="text-lg leading-relaxed">
                    Être l'établissement de référence en matière d'excellence éducative à 
                    Lubumbashi, reconnu pour la qualité de son enseignement, l'innovation 
                    pédagogique et la formation de citoyens exemplaires prêts à relever 
                    les défis du 21ème siècle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Histoire de l'école */}
        <section className="about-section py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
                Notre <span className="text-[#0073b7]">Histoire</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Plus de 25 ans d'engagement pour l'excellence éducative
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-[#0073b7] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#333333] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
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
        <section className="values-section about-section py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
                Nos <span className="text-[#0073b7]">Valeurs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes fondamentaux qui guident notre action éducative
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {schoolValues.map((value, index) => (
                <div key={index} className="value-card p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <div className="p-0 text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#333333] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direction */}
        <section className="about-section py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
                Notre <span className="text-[#0073b7]">Direction</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une équipe de direction expérimentée et dévouée à l'excellence éducative
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((leader, index) => (
                <div key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                  <div className="p-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#333333] mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-[#0073b7] font-semibold mb-3">
                        {leader.position}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="about-section py-20 bg-[#0073b7] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Nos <span className="text-yellow-400">Chiffres</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Des résultats qui témoignent de notre engagement pour l'excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-4">25+</div>
                <div className="text-xl font-semibold mb-2">Années d'expérience</div>
                <div className="text-gray-200">Depuis 1998</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-4">1500+</div>
                <div className="text-xl font-semibold mb-2">Élèves diplômés</div>
                <div className="text-gray-200">Succès garantis</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-4">98%</div>
                <div className="text-xl font-semibold mb-2">Taux de réussite</div>
                <div className="text-gray-200">Excellence académique</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-4">50+</div>
                <div className="text-xl font-semibold mb-2">Enseignants qualifiés</div>
                <div className="text-gray-200">Équipe dévouée</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact rapide */}
        <section className="about-section py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
                Rejoignez Notre <span className="text-[#0073b7]">Communauté</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Découvrez comment nous pouvons accompagner votre enfant vers l'excellence
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#0073b7] rounded-full flex items-center justify-center mb-4">
                    <BiMapPin className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-[#333333] mb-2">Adresse</h3>
                  <p className="text-gray-600 text-center">
                    1098, Av MAMA YEMO<br />
                    C/Lubumbashi, Haut-Katanga RDC
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#0073b7] rounded-full flex items-center justify-center mb-4">
                    <BiPhone className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-[#333333] mb-2">Téléphone</h3>
                  <p className="text-gray-600 text-center">
                    +243 822266004<br />
                    +243 843387388
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#0073b7] rounded-full flex items-center justify-center mb-4">
                    <BiMailSend className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-[#333333] mb-2">Email</h3>
                  <p className="text-gray-600 text-center">
                    direction@cs-bisounours.com<br />
                    info@cs-bisounours.com
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-[#0073b7] hover:bg-[#005a8f] text-white px-8 py-4 rounded-full text-lg">
                  Planifier une visite
                </div>
                <div className="border-[#0073b7] text-[#0073b7] hover:bg-[#0073b7] hover:text-white px-8 py-4 rounded-full text-lg">
                  Télécharger la brochure
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AproposPage