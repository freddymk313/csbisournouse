import React, { useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const OptionsSection = (): JSX.Element => {
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
    imageSrc: "https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    imageAlt: "École moderne",
    paragraphs: [
      "Le Complexe Scolaire Les Bisounours est un établissement d'enseignement d'excellence situé à Lubumbashi. Nous offrons un encadrement pédagogique de qualité, dans un environnement sécurisé, dynamique et propice à l'épanouissement des enfants, de la maternelle au secondaire.",
      "Notre mission est de former des élèves responsables, curieux, ouverts sur le monde et enracinés dans des valeurs humaines et chrétiennes solides.",
      "Depuis 1998, nous nous distinguons par notre approche pédagogique innovante, nos infrastructures modernes et notre corps enseignant hautement qualifié.",
      "Nous accompagnons chaque élève dans son parcours éducatif avec un suivi personnalisé, des programmes adaptés et un environnement stimulant qui favorise l'excellence académique et l'épanouissement personnel.",
      "Notre établissement prépare les leaders de demain en cultivant l'esprit critique, la créativité et les valeurs citoyennes essentielles pour réussir dans un monde en constante évolution."
    ],
    buttonText: "Découvrir notre histoire",
  };

  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="about-container container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="about-title font-bold text-4xl lg:text-5xl text-[#333333] font-['Poppins',Helvetica] mb-6 text-center">
            {schoolInfo.title}
          </h2>

          <p className="text-xl text-[#333333] font-['Poppins',Helvetica] text-center mb-16 max-w-4xl leading-relaxed">
            {schoolInfo.subtitle}
          </p>

          <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
            <div className="about-image lg:w-1/2">
              <img
                src={schoolInfo.imageSrc}
                alt={schoolInfo.imageAlt}
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div className="about-content lg:w-1/2">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="text-lg text-[#333333] font-['Poppins',Helvetica] text-justify space-y-6 leading-relaxed">
                    {schoolInfo.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-10 flex justify-start">
                    <Button className="bg-[#0073b7] hover:bg-[#005a8f] text-white rounded-xl px-8 py-4 h-14 text-lg font-semibold group transition-all duration-300">
                      {schoolInfo.buttonText}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};