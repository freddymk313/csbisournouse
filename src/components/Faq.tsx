import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiMinus, BiPlus } from 'react-icons/bi';

gsap.registerPlugin(ScrollTrigger);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Animation d'entrée des items
    gsap.fromTo(
      '.faq-item',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const faqs = [
    {
      question: "Quels sont les horaires de l'école ?",
      answer:
        "Nos horaires varient selon le niveau : Maternel (8h00-12h50), Primaire et Secondaire (7h30-12h50). Nous proposons également des activités parascolaires l'après-midi.",
    },
    {
      question: "Comment procéder à l'inscription de mon enfant ?",
      answer:
        "Les inscriptions se font en ligne ou directement à l'école. Vous devez fournir le dossier complet (acte de naissance, bulletins précédents, photos d'identité) et effectuer le paiement des frais d'inscription.",
    },
    {
      question: "Quels sont les frais de scolarité ?",
      answer:
        "Les frais varient selon le niveau d'études. Nous proposons des facilités de paiement et des bourses d'excellence pour les élèves méritants. Contactez-nous pour plus de détails.",
    },
    {
      question: "Proposez-vous des activités extrascolaires ?",
      answer:
        "Oui, nous offrons diverses activités : sport, musique, arts plastiques, informatique, clubs de sciences, et bien d'autres pour l'épanouissement complet de nos élèves.",
    },
    // {
    //   question: "Comment suivre les progrès de mon enfant ?",
    //   answer:
    //     "Nous utilisons un système de suivi en ligne permettant aux parents de consulter les notes, absences et commentaires des enseignants. Des rencontres parents-professeurs sont organisées régulièrement.",
    // },
    {
      question: "L'école dispose-t-elle d'un service de transport ?",
      answer:
        "Oui, nous proposons un service de transport scolaire couvrant plusieurs quartiers de Lubumbashi. Les itinéraires et horaires sont disponibles au secrétariat.",
    },
    {
      question: "Quelle est la taille des classes ?",
      answer:
        "Nous limitons nos classes à 25 élèves maximum pour garantir un suivi personnalisé et une attention particulière à chaque enfant.",
    },
    {
      question: "L'école propose-t-elle des cours de rattrapage ?",
      answer:
        "Oui, nous organisons des cours de soutien et de rattrapage pour les élèves qui en ont besoin, ainsi que des cours d'excellence pour les plus avancés.",
    },
  ];

  const toggleFAQ = (index: number) => {
    const currentRef = answerRefs.current[index];

    if (openIndex === index) {
      // Fermer avec animation
      gsap.to(currentRef, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          setOpenIndex(null);
        },
      });
    } else {
      // Fermer l'ancien ouvert s'il y en a
      if (openIndex !== null && answerRefs.current[openIndex]) {
        gsap.to(answerRefs.current[openIndex], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }

      // Ouvrir le nouveau
      setOpenIndex(index);
      setTimeout(() => {
        if (currentRef) {
          currentRef.style.display = 'block';
          const scrollHeight = currentRef.scrollHeight;
          gsap.fromTo(
            currentRef,
            { height: 0, opacity: 0 },
            {
              height: scrollHeight,
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out',
            }
          );
        }
      }, 10);
    }
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="about-title font-bold text-2xl md:text-3xl lg:text-4xl text-[#333333] mb-6 text-center">
            Questions <span className="text-[#0073b7]">Fréquentes</span>
          </h2>
          <p className="text-gray-800 text-center mb-4 max-w-3xl mx-auto leading-relaxed">
            Trouvez les réponses aux questions les plus courantes concernant notre établissement et nos services.
          </p>
        </div>

        <div className="faq-container max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item mb-4 border border-[#0073b7] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-semibold text-[#333333] pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <BiMinus className="text-[#0073b7] flex-shrink-0" size={18} />
                ) : (
                  <BiPlus className="text-[#0073b7] flex-shrink-0" size={18} />
                )}
              </button>

              <div
                ref={(el) => { answerRefs.current[index] = el; }}
                style={{
                  height: openIndex === index ? 'auto' : 0,
                  overflow: 'hidden',
                  opacity: openIndex === index ? 1 : 0,
                }}
                className="px-8 bg-gray-50"
              >
                <div className="py-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
