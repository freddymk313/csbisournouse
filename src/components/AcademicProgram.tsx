import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiBookOpen, BiCalculator, BiGlobe, BiMusic, BiPalette, BiTrophy } from 'react-icons/bi';
import { FaMicroscope, FaUserSecret } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export const AcademicProgramsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm ] = useState('');
  
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
      description: "Français, Anglais, Lingala et Swahili. Développement des compétences linguistiques et littéraires avec une approche communicative moderne.",
      category: "humanities"
    },
    {
      icon: <BiCalculator className="text-[#0073b7]" size={40} />,
      title: "Mathématiques et Sciences",
      description: "Programme rigoureux en mathématiques, physique, chimie et biologie avec laboratoires équipés pour l'expérimentation pratique.",
      category: "sciences"
    },
    {
      icon: <BiGlobe className="text-[#0073b7]" size={40} />,
      title: "Sciences Humaines",
      description: "Histoire, géographie, éducation civique et morale. Formation citoyenne et ouverture sur le monde contemporain.",
      category: "humanities"
    },
    {
      icon: <BiPalette className="text-[#0073b7]" size={40} />,
      title: "Arts et Créativité",
      description: "Arts plastiques, dessin, travaux manuels et expression artistique pour développer la créativité et l'expression personnelle.",
      category: "arts"
    },
    {
      icon: <BiMusic className="text-[#0073b7]" size={40} />,
      title: "Éducation Musicale",
      description: "Chant, instruments, théorie musicale et spectacles. Développement du sens artistique et l'expression culturelle.",
      category: "arts"
    },
    {
      icon: <FaMicroscope className="text-[#0073b7]" size={40} />,
      title: "Informatique et Technologie",
      description: "Initiation à l'informatique, programmation de base et utilisation des outils numériques pour préparer l'avenir digital.",
      category: "sciences"
    },
    {
      icon: <FaUserSecret className="text-[#0073b7]" size={40} />,
      title: "Éducation Physique",
      description: "Sports collectifs, athlétisme, gymnastique et activités de bien-être pour un développement physique harmonieux.",
      category: "sports"
    },
    {
      icon: <BiTrophy className="text-[#0073b7]" size={40} />,
      title: "Activités Parascolaires",
      description: "Clubs scientifiques, débats, théâtre, journalisme scolaire et compétitions académiques pour l'épanouissement complet.",
      category: "extracurricular"
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les programmes' },
    { id: 'sciences', label: 'Sciences' },
    { id: 'humanities', label: 'Humanités' },
    { id: 'arts', label: 'Arts' },
    { id: 'sports', label: 'Sports' },
    { id: 'extracurricular', label: 'Parascolaire' }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = activeFilter === 'all' || program.category === activeFilter;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto px-4 md:px-16 lg:px-20">
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <h2 className="about-title font-bold text-2xl md:text-3xl lg:text-4xl text-[#333333] mb-6 text-center">
            Nos <span className="text-[#0073b7]">Programmes</span> Académiques
          </h2>
          <p className="text-gray-800 text-center mb-6* max-w-3xl leading-relaxed">
            Découvrez notre offre éducative complète conçue pour développer 
            toutes les compétences de vos enfants et les préparer à un avenir brillant.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-center">
          {/* <div className="relative w-full md:w-96">
            <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un programme..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073b7] focus:border-transparent outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div> */}
          
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id 
                  ? 'bg-[#0073b7] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="programs-container grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program, index) => (
              <div
                key={index}
                className="program-card group p-6 bg-white *rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0073b7]/30 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0073b7] group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                   <span className='group-hover:text-white'>{program.icon}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-[#333333] mb-4 group-hover:text-[#0073b7] transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {program.description}
                </p>
                
                {/* <div className="flex items-center text-[#0073b7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
                  En savoir plus <BiChevronRight size={18} />
                </div> */}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">Aucun programme ne correspond à votre recherche.</p>
            </div>
          )}
        </div>

        {/* Additional Program Features */}
        <div className="mt-16 bg-gradient-to-r from-[#0073b7] to-[#005a8f] p-8 *rounded-2xl text-white">
          <h3 className="text-xl font-bold mb-6 text-center">Pourquoi choisir notre ecole?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4 bg-white/10 *rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-lg font-semibold mb-2">Niveaux d'Enseignement</div>
              <div className="text-sm opacity-90">Maternel, Primaire, Secondaire</div>
            </div>
            <div className="p-4 bg-white/10 *rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-lg font-semibold mb-2">Matières Enseignées</div>
              <div className="text-sm opacity-90">Programme complet et équilibré</div>
            </div>
            <div className="p-4 bg-white/10 *rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">35</div>
              <div className="text-lg font-semibold mb-2">Élèves par Classe</div>
              <div className="text-sm opacity-90">Suivi personnalisé garanti</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12 text-center">
          <button className="bg-[#0073b7] hover:bg-[#005a8f] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Voir tous nos programmes détaillés
          </button>
        </div> */}
      </div>
    </section>
  );
};