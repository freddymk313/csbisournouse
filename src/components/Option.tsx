import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdBook, MdLockClock, MdSupervisedUserCircle } from "react-icons/md";
import { FaClock, FaUsers } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export const OptionSection = () => {
  useEffect(() => {
    // Options section animations
    gsap.fromTo('.options-title',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.options-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.option-card',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.options-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  // Data for the education level cards
  const educationLevels = [
    {
      id: 1,
      title: "MATERNEL",
      image: "/maternel.jpg",
      ageRange: "3 - 5 ans",
      hours: "8h00 - 12h50",
      icon: <MdSupervisedUserCircle className="text-[#0073b7]" size={24} />,
      description: "Un environnement chaleureux et sécurisé où les tout-petits découvrent le plaisir d'apprendre à travers le jeu, l'éveil artistique et les premières notions académiques."
    },
    {
      id: 2,
      title: "PRIMAIRE",
      image: "/primaire.jpg",
      ageRange: "6 - 11 ans",
      hours: "7h30 - 12h50",
      icon: <MdBook className="text-[#0073b7]" size={24} />,
      description: "Acquisition des fondamentaux avec une pédagogie moderne et interactive. Développement de l'autonomie, de la curiosité et des compétences essentielles pour la suite du parcours."
    },
    {
      id: 3,
      title: "SECONDAIRE",
      image: "/secondaire.jpg",
      ageRange: "12 - 18 ans",
      hours: "7h30 - 12h50",
      icon: <MdLockClock className="text-[#0073b7]" size={24} />,
      description: "Préparation à l'excellence avec des programmes rigoureux, orientation personnalisée et développement des compétences nécessaires pour l'enseignement supérieur."
    },
  ];

  return (
    <section id="options" className="w-full bg-[#0073b7] py-20">
      <div className="options-container container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="about-title font-bold text-2xl md:text-3xl lg:text-4xl text-white *font-['Poppins',Helvetica] mb-6 text-center">
            Options Organisées
          </h2>

          <p className="text-white text-center mb-4 max-w-4xl leading-relaxed">
            De la maternelle au secondaire, nous accompagnons vos enfants dans
            leur épanouissement intellectuel et personnel avec des programmes
            adaptés à chaque âge et des méthodes pédagogiques innovantes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-5">
            {educationLevels.map((level) => (
              <div key={level.id} className="option-card flex flex-col h-full">
                <div className="h-full flex flex-col *hover:bg-white/20 transition-all duration-300 group">
                  <div className="p-0 flex-grow">
                    <div className="relative overflow-hidden *rounded-t-lg">
                      <img
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={`${level.title} students`}
                        src={level.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div className="py-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-['Poppins',Helvetica] font-bold text-white text-2xl">
                          {level.title}
                        </h3>
                      </div>

                      <p className="text-white/90 text-justify text-base mb-4 leading-relaxed">
                        {level.description}
                      </p>

                      <div className="space-y-1">
                        <div className="flex items-center text-white/90">
                          <FaUsers className="mr-3 text-white" size={19} />
                          <span className="font-normal text-base">
                            Âges: {level.ageRange}
                          </span>
                        </div>
                        <div className="flex items-center text-white/90">
                          <FaClock className="mr-3 text-white" size={17} />
                          <span className="font-normal text-base">
                            Horaires: {level.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-6 pt-0">
                    <button 
                type="submit" 
                className="w-full px-6 py-3 bg-white text-[#0073B7] hover:bg-gray-100 transition-colors duration-300"
              >
                En savoir plus
              </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};