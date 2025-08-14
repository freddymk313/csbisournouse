import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiMinus, BiPlus } from 'react-icons/bi';

gsap.registerPlugin(ScrollTrigger);

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        // Page animations
        gsap.fromTo('.faq-hero',
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
        );

        gsap.fromTo('.faq-item',
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.faq-container',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        gsap.fromTo('.category-section',
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.faq-content',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqCategories = [
        {
            title: "Inscriptions et Admissions",
            icon: "📝",
            questions: [
                {
                    question: "Comment procéder à l'inscription de mon enfant ?",
                    answer: "Les inscriptions se font en ligne via notre site web ou directement à l'école. Vous devez fournir un dossier complet comprenant : l'acte de naissance de l'enfant, les bulletins scolaires des années précédentes, le carnet de vaccination à jour, 4 photos d'identité récentes, et une copie de la carte d'identité des parents. Après validation du dossier, vous devrez effectuer le paiement des frais d'inscription."
                },
                {
                    question: "Quels sont les critères d'admission ?",
                    answer: "L'admission se fait sur étude du dossier scolaire et selon les places disponibles. Pour la maternelle, l'enfant doit être propre et avoir au minimum 2 ans révolus. Pour les autres niveaux, nous évaluons le niveau académique et la motivation de l'élève. Un entretien avec les parents peut être organisé."
                },
                {
                    question: "Y a-t-il une liste d'attente ?",
                    answer: "Oui, si toutes les places sont occupées, nous constituons une liste d'attente par ordre d'arrivée des dossiers complets. Les familles sont contactées dès qu'une place se libère. Nous conseillons de s'inscrire le plus tôt possible."
                },
                {
                    question: "Peut-on inscrire un enfant en cours d'année ?",
                    answer: "Les inscriptions en cours d'année sont possibles selon les places disponibles. L'enfant devra passer un test de niveau pour s'assurer qu'il peut suivre le programme en cours. Les frais de scolarité sont calculés au prorata du temps restant."
                }
            ]
        },
        {
            title: "Frais de Scolarité et Paiements",
            icon: "💰",
            questions: [
                {
                    question: "Quels sont les frais de scolarité ?",
                    answer: "Les frais varient selon le niveau d'études : Maternelle (300 000 FC/trimestre), Primaire (350 000 FC/trimestre), Secondaire (400 000 FC/trimestre). Ces frais incluent les cours, les supports pédagogiques de base, et l'accès aux infrastructures. Des frais supplémentaires s'appliquent pour la cantine, le transport, et les activités extrascolaires."
                },
                {
                    question: "Proposez-vous des facilités de paiement ?",
                    answer: "Oui, nous proposons plusieurs options : paiement trimestriel (standard), paiement mensuel avec légers frais administratifs, et des bourses d'excellence pour les élèves méritants. Des arrangements spéciaux peuvent être discutés avec la direction pour les familles en difficulté temporaire."
                },
                {
                    question: "Que comprennent les frais de scolarité ?",
                    answer: "Les frais incluent : l'enseignement et l'encadrement pédagogique, l'accès à la bibliothèque et aux laboratoires, les activités sportives de base, l'assurance scolaire, et le suivi médical de base. Ne sont pas inclus : la cantine, le transport, les uniformes, les fournitures personnelles, et les sorties pédagogiques."
                },
                {
                    question: "Y a-t-il des bourses disponibles ?",
                    answer: "Nous offrons des bourses d'excellence (réduction de 25% à 50%) pour les élèves avec d'excellents résultats académiques, des bourses sociales pour les familles en difficulté (sur étude de dossier), et des bourses sportives ou artistiques pour les talents exceptionnels. Les demandes se font en début d'année scolaire."
                }
            ]
        },
        {
            title: "Vie Scolaire et Pédagogie",
            icon: "🎓",
            questions: [
                {
                    question: "Quels sont les horaires de l'école ?",
                    answer: "Maternelle : 7h30-12h50 (avec garderie jusqu'à 18h), Primaire et Secondaire : 7h30-12h50 (avec études surveillées jusqu'à 18h). Les cours reprennent à 13h30-16h30 pour certaines classes selon l'emploi du temps. La garderie et les études sont optionnelles et payantes."
                },
                {
                    question: "Quelle est la taille des classes ?",
                    answer: "Nous limitons nos classes à 25 élèves maximum pour garantir un suivi personnalisé. En maternelle, nous avons 20 élèves maximum par classe avec une assistante. Cette politique nous permet d'offrir une attention particulière à chaque enfant et de mieux adapter notre pédagogie."
                },
                {
                    question: "Comment suivre les progrès de mon enfant ?",
                    answer: "Nous utilisons un système de suivi en ligne accessible 24h/24 où vous pouvez consulter : les notes et évaluations, les absences et retards, les commentaires des enseignants, et le cahier de liaison numérique. Des rencontres parents-professeurs sont organisées chaque trimestre, et des rendez-vous individuels peuvent être pris à tout moment."
                },
                {
                    question: "Proposez-vous du soutien scolaire ?",
                    answer: "Oui, nous proposons : des cours de rattrapage gratuits pour les élèves en difficulté, des cours d'excellence pour les plus avancés, du tutorat par les pairs, et un accompagnement personnalisé avec nos psychologues scolaires. Les parents sont informés et impliqués dans tout processus de soutien."
                }
            ]
        },
        {
            title: "Services et Infrastructures",
            icon: "🏫",
            questions: [
                {
                    question: "L'école dispose-t-elle d'un service de transport ?",
                    answer: "Oui, nous proposons un service de transport scolaire couvrant plusieurs quartiers de Lubumbashi : Katuba, Kenya, Kampemba, Annexe, et centre-ville. Les bus sont équipés de ceintures de sécurité et accompagnés d'un surveillant. Les itinéraires et horaires détaillés sont disponibles au secrétariat."
                },
                {
                    question: "Y a-t-il une cantine scolaire ?",
                    answer: "Oui, notre cantine propose des repas équilibrés préparés sur place par une équipe qualifiée. Menu varié avec options végétariennes, respect des normes d'hygiène strictes, et adaptation aux allergies alimentaires. Le coût est de 15 000 FC par repas ou 300 000 FC par trimestre."
                },
                {
                    question: "Quelles sont les infrastructures disponibles ?",
                    answer: "Notre école dispose de : salles de classe climatisées avec tableaux interactifs, laboratoires de sciences équipés, bibliothèque avec plus de 10 000 ouvrages, salle informatique avec 30 postes, terrain de sport multisports, infirmerie avec personnel qualifié, et espaces de détente sécurisés."
                },
                {
                    question: "L'école est-elle sécurisée ?",
                    answer: "La sécurité est notre priorité : enceinte fermée avec gardiennage 24h/24, système de vidéosurveillance, contrôle d'accès strict, personnel de sécurité formé, et protocoles d'urgence établis. Seules les personnes autorisées peuvent entrer dans l'établissement."
                }
            ]
        },
        {
            title: "Activités et Programmes",
            icon: "🎨",
            questions: [
                {
                    question: "Proposez-vous des activités extrascolaires ?",
                    answer: "Oui, nous offrons de nombreuses activités : sports (football, basketball, volleyball, athlétisme), arts (musique, théâtre, danse, arts plastiques), clubs académiques (sciences, mathématiques, lecture, débats), et activités culturelles (chorale, orchestre, journalisme scolaire). La plupart sont incluses dans les frais de scolarité."
                },
                {
                    question: "Y a-t-il des sorties pédagogiques ?",
                    answer: "Oui, nous organisons régulièrement : visites de musées et sites historiques, sorties nature et fermes pédagogiques, visites d'entreprises et institutions, voyages scolaires (pour les plus grands), et participation à des événements culturels. Les parents sont informés à l'avance et leur autorisation est requise."
                },
                {
                    question: "Quelles langues sont enseignées ?",
                    answer: "Nous enseignons : le Français (langue principale d'enseignement), l'Anglais (dès le CP), le Lingala et le Swahili (langues nationales), et l'Espagnol (optionnel au secondaire). Notre approche privilégie la communication orale et écrite avec des méthodes interactives modernes."
                },
                {
                    question: "Y a-t-il des compétitions et concours ?",
                    answer: "Nos élèves participent régulièrement à : concours de mathématiques et sciences, olympiades académiques, compétitions sportives inter-écoles, festivals artistiques et culturels, et concours de lecture et d'écriture. Ces activités développent l'esprit de compétition saine et l'excellence."
                }
            ]
        },
        {
            title: "Santé et Bien-être",
            icon: "🏥",
            questions: [
                {
                    question: "Y a-t-il une infirmerie à l'école ?",
                    answer: "Oui, notre infirmerie est tenue par une infirmière diplômée présente tous les jours. Elle assure les premiers soins, le suivi des traitements médicaux, la gestion des urgences mineures, et la sensibilisation à l'hygiène. Pour les cas graves, nous contactons immédiatement les parents et les services d'urgence."
                },
                {
                    question: "Comment gérez-vous les allergies alimentaires ?",
                    answer: "Nous prenons les allergies très au sérieux : fiche médicale détaillée obligatoire à l'inscription, menus adaptés en collaboration avec les parents, formation du personnel de cantine, et protocole d'urgence en cas de réaction allergique. Les parents doivent fournir les médicaments nécessaires."
                },
                {
                    question: "Que faire si mon enfant tombe malade à l'école ?",
                    answer: "En cas de maladie : l'enfant est pris en charge par l'infirmière, les parents sont contactés immédiatement, l'enfant est isolé si nécessaire pour éviter la contagion, et nous facilitons sa prise en charge médicale. Un certificat médical est requis pour le retour en classe après certaines maladies."
                },
                {
                    question: "Y a-t-il un suivi psychologique ?",
                    answer: "Oui, nous avons une psychologue scolaire qui assure : le suivi du bien-être émotionnel des élèves, l'aide aux difficultés d'apprentissage, la médiation en cas de conflits, et l'orientation scolaire. Les parents sont associés à toute démarche concernant leur enfant."
                }
            ]
        }
    ];

    let questionIndex = 0;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src='/gallery/2.jpg'
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
                                <span className="block">Questions</span>
                                <span className="block">Fréquentes</span>
                            </h1>

                            <p className="contact-hero-subtitle text-base md:text-lg mb-6 text-white/90 leading-relaxed max-w-2xl mx-auto">
                                Trouvez toutes les réponses aux questions que vous vous posez sur
                                notre établissement, nos programmes et nos services.
                            </p>

                            <div className="flex flex-col md:flex-row mt-6 justify-center items-center space-y-2 md:space-y-0 md:space-x-6">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="faq-hero relative bg-gradient-to-r from-[#0073b7] to-[#005a8f] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <BiHelpCircle className="text-[#0073b7]" size={40} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Questions <span className="text-yellow-400">Fréquentes</span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Trouvez toutes les réponses aux questions que vous vous posez sur 
            notre établissement, nos programmes et nos services.
          </p>
        </div>
      </section> */}

            <div className="faq-content">
                {/* FAQ Categories */}
                {faqCategories.map((category, categoryIndex) => (
                    <section key={categoryIndex} className="category-section py-16 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
                                    {category.title}
                                </h2>
                            </div>

                            <div className="faq-container max-w-4xl mx-auto">
                                {category.questions.map((faq, index) => {
                                    const currentIndex = questionIndex++;
                                    return (
                                        <div
                                            key={index}
                                            className="faq-item mb-4 border border-[#0073b7] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(currentIndex)}
                                                className="w-full px-8 py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
                                            >
                                                <h3 className="text-lg font-semibold text-[#333333] pr-4">
                                                    {faq.question}
                                                </h3>
                                                {openIndex === index ? (
                                                    <BiMinus className="text-[#0073b7] flex-shrink-0" size={18} />
                                                ) : (
                                                    <BiPlus className="text-[#0073b7] flex-shrink-0" size={18} />
                                                )}
                                            </button>

                                            {openIndex === currentIndex && (
                                                <div className="px-8 pb-6 bg-gray-50">
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;