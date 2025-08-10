import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsSend } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Contact section animations
    gsap.fromTo('.contact-info',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.contact-form',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MdOutlineLocationOn className="text-[#0073b7]" size={26} />,
      title: "Adresse",
      details: ["1098, Av MAMA YEMO", "C/Lubumbashi, Haut-Katanga RDC"]
    },
    {
      icon: <FiPhone className="text-[#0073b7]" size={24} />,
      title: "Téléphone",
      details: ["+243 822266004", "+243 843387388"]
    },
    {
      icon: <IoMailOutline className="text-[#0073b7]" size={24} />,
      title: "Email",
      details: ["direction@cs-bisounours.com", "info@cs-bisounours.com"]
    },
    {
      icon: <FaRegClock className="text-[#0073b7]" size={24} />,
      title: "Horaires",
      details: ["Lun - Ven: 7h00 - 17h00", "Sam: 8h00 - 12h00"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="about-title font-bold text-2xl md:text-3xl lg:text-4xl text-[#333333] mb-6 text-center">
            Contactez-<span className="text-[#0073b7]">nous</span>
          </h2>
          <p className="text-gray-800 text-center mb-4 *max-w-3xl leading-relaxed">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner
            dans le parcours éducatif de votre enfant.
          </p>
        </div>

        <div className="contact-container overflow-hidden grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="text-lg font-bold text-[#333333] mb-6">
              Informations de contact
            </h3>

            <div className="space-y-6 mb-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#333333] mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.1841609656462!2d27.481204699999996!3d-11.6641824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723ec0cdb98177%3A0xc6af1c88bd7b317b!2scs%20bisounours!5e1!3m2!1sfr!2scd!4v1754569684344!5m2!1sfr!2scd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de l'école"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-lg font-bold text-[#333333] mb-6">
              Envoyez-nous un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet <span className='text-[#0073b7]'>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className='text-[#0073b7]'>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet <span className='text-[#0073b7]'>*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                    placeholder="Sujet de votre message"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className='text-[#0073b7]'>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-[#0073b7] hover:bg-[#005a8f] text-white py-4  group"
              >
                <span>Envoyer le message</span>
                <BsSend className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};