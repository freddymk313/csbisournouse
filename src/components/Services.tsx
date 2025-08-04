import React, { useEffect } from 'react';
// import { BookOpen, Users, Trophy, Heart, Globe, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdBook } from 'react-icons/md';
import { FaUserSecret } from 'react-icons/fa';
import { BiGlobe, BiHeart, BiTrophy } from 'react-icons/bi';
import { FiZap } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  useEffect(() => {
    // Services animations
    gsap.fromTo('.service-card',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.services-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const services = [
    {
      icon: <MdBook className="text-[#0073b7]" size={40} />,
      title: "Programme Académique Complet",
      description: "De la maternelle au secondaire, nos programmes suivent les standards internationaux tout en respectant le curriculum national congolais."
    },
    {
      icon: <FaUserSecret className="text-[#0073b7]" size={40} />,
      title: "Encadrement Personnalisé",
      description: "Classes à effectif réduit pour un suivi individualisé de chaque élève et un accompagnement adapté à ses besoins spécifiques."
    },
    {
      icon: <BiTrophy className="text-[#0073b7]" size={40} />,
      title: "Excellence Académique",
      description: "98% de taux de réussite aux examens d'État grâce à notre approche pédagogique innovante et notre corps enseignant qualifié."
    },
    {
      icon: <BiHeart className="text-[#0073b7]" size={40} />,
      title: "Éducation aux Valeurs",
      description: "Formation complète intégrant les valeurs humaines, le respect, la tolérance et l'esprit de solidarité dans un cadre bienveillant."
    },
    {
      icon: <BiGlobe className="text-[#0073b7]" size={40} />,
      title: "Ouverture Internationale",
      description: "Apprentissage des langues étrangères, échanges culturels et préparation aux certifications internationales."
    },
    {
      icon: <FiZap className="text-[#0073b7]" size={40} />,
      title: "Innovation Pédagogique",
      description: "Utilisation des nouvelles technologies, laboratoires modernes et méthodes d'enseignement interactives pour un apprentissage dynamique."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Nos <span className="text-[#0073b7]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos services éducatifs conçus pour offrir 
            à votre enfant la meilleure expérience d'apprentissage possible.
          </p>
        </div>

        <div className="services-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0073b7]/20"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0073b7] group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#333333] mb-4 group-hover:text-[#0073b7] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};