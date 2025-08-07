import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiBookOpen, BiCalculator, BiGlobe, BiMusic, BiPalette, BiTrophy } from 'react-icons/bi';
import { FaMicroscope, FaUserSecret } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export const AcademicProgramsSection = () => {
  useEffect(() => {
    // Programs animations
    gsap.fromTo('.program-card',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.programs-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const programs = [
    {
      icon: <BiBookOpen className="text-[#0073b7]" size={40} />,
      title: "Langues et Littérature",
      description: "Français, Anglais, Lingala et Swahili. Développement des compétences linguistiques et littéraires avec une approche communicative moderne."
    },
    {
      icon: <BiCalculator className="text-[#0073b7]" size={40} />,
      title: "Mathématiques et Sciences",
      description: "Programme rigoureux en mathématiques, physique, chimie et biologie avec laboratoires équipés pour l'expérimentation pratique."
    },
    {
      icon: <BiGlobe className="text-[#0073b7]" size={40} />,
      title: "Sciences Humaines",
      description: "Histoire, géographie, éducation civique et morale. Formation citoyenne et ouverture sur le monde contemporain."
    },
    {
      icon: <BiPalette className="text-[#0073b7]" size={40} />,
      title: "Arts et Créativité",
      description: "Arts plastiques, dessin, travaux manuels et expression artistique pour développer la créativité et l'expression personnelle."
    },
    {
      icon: <BiMusic className="text-[#0073b7]" size={40} />,
      title: "Éducation Musicale",
      description: "Chant, instruments, théorie musicale et spectacles. Développement du sens artistique et de l'expression culturelle."
    },
    {
      icon: <FaMicroscope className="text-[#0073b7]" size={40} />,
      title: "Informatique et Technologie",
      description: "Initiation à l'informatique, programmation de base et utilisation des outils numériques pour préparer l'avenir digital."
    },
    {
      icon: <FaUserSecret className="text-[#0073b7]" size={40} />,
      title: "Éducation Physique",
      description: "Sports collectifs, athlétisme, gymnastique et activités de bien-être pour un développement physique harmonieux."
    },
    {
      icon: <BiTrophy className="text-[#0073b7]" size={40} />,
      title: "Activités Parascolaires",
      description: "Clubs scientifiques, débats, théâtre, journalisme scolaire et compétitions académiques pour l'épanouissement complet."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Nos <span className="text-[#0073b7]">Programmes</span> Académiques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre offre éducative complète conçue pour développer 
            toutes les compétences de vos enfants et les préparer à un avenir brillant.
          </p>
        </div>

        <div className="programs-container grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0073b7]/20"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0073b7] group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {program.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-[#333333] mb-4 group-hover:text-[#0073b7] transition-colors duration-300">
                {program.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Program Features */}
        <div className="mt-16 bg-gradient-to-r from-[#0073b7] to-[#005a8f] rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-lg font-semibold mb-2">Niveaux d'Enseignement</div>
              <div className="text-sm opacity-90">Maternel, Primaire, Secondaire</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-lg font-semibold mb-2">Matières Enseignées</div>
              <div className="text-sm opacity-90">Programme complet et équilibré</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">25</div>
              <div className="text-lg font-semibold mb-2">Élèves par Classe</div>
              <div className="text-sm opacity-90">Suivi personnalisé garanti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};