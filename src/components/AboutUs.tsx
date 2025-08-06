import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  useEffect(() => {
    // About section animations
    gsap.fromTo('.about-title',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.about-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.about-image',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.about-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.about-content',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.about-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  // School information data
  const schoolInfo = {
    title: "Qui Sommes\u00A0\u00A0nous ?",
    subtitle:
      "Une école d'excellence à Lubumbashi, engagée à offrir une éducation de qualité, dans un cadre sécurisé, moderne et bienveillant.",
    imageSrc: "/about.jpg",
    imageAlt: "École moderne",
    paragraphs: [
      "Le Complexe Scolaire Les Bisounours est un établissement d'enseignement d'excellence situé à Lubumbashi. Nous offrons un encadrement pédagogique de qualité, dans un environnement sécurisé, dynamique et propice à l'épanouissement des enfants, de la maternelle au secondaire.",
      "Notre mission est de former des élèves responsables, curieux, ouverts sur le monde et enracinés dans des valeurs humaines et chrétiennes solides.",
      "Depuis 1998, nous nous distinguons par notre approche pédagogique innovante, nos infrastructures modernes et notre corps enseignant hautement qualifié.",
      "Nous accompagnons chaque élève dans son parcours éducatif avec un suivi personnalisé, des programmes adaptés et un environnement stimulant qui favorise l'excellence académique et l'épanouissement personnel.",
      "Notre établissement prépare les leaders de demain en cultivant l'esprit critique, la créativité et les valeurs citoyennes essentielles pour réussir dans un monde en constante évolution."
    ],
    buttonText: "Lire plus",
  };

  return (
    <section id="about" className="w-full bg-white py-12 md:py-20">
      <div className="about-container container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="about-title font-bold text-2xl md:text-3xl lg:text-4xl text-[#333333] *font-['Poppins',Helvetica] mb-6 text-center">
            {schoolInfo.title}
          </h2>

          <p className="text-[#333333] *font-['Poppins',Helvetica] text-center mb-4 max-w-4xl leading-relaxed">
            {schoolInfo.subtitle}
          </p>

          <div className="flex flex-col lg:flex-row gap-5 gap-x-12 w-full max-w-6xl">
            <div className="about-image lg:w-1/2">
              <img
                src={schoolInfo.imageSrc}
                alt={schoolInfo.imageAlt}
                className="w-full h-auto max-h-[500px] object-cover *rounded-2xl *shadow-2xl"
              />
            </div>

            <div className="about-content lg:w-1/2">
              <div className="border-none shadow-none">
                <div className="p-0">
                  <div className="text-[#333333] *font-['Poppins',Helvetica] text-justify space-y-1 leading-relaxed">
                    {schoolInfo.paragraphs.map((paragraph, index) => (
                      <p key={index} className="*text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-8 flex justify-start">
            <a href="#" className="flex items-center gap-2.5 border border-[#0073b7] bg-transparent hover:bg-[#0073b7] text-[#0073b7] hover:text-[#ffffff] px-8 py-3 group transition-all duration-300">
              <span>{schoolInfo.buttonText}</span>
              <GoArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};