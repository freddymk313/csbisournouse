import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BsSend, 
  BsWhatsapp, 
  BsFacebook, 
  BsInstagram 
} from 'react-icons/bs';
import { 
  FiPhone, 
  FiClock, 
  FiMapPin 
} from 'react-icons/fi';
import { 
  HiOutlineMail, 
  HiCheckCircle 
} from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Animations d'entrée
    gsap.fromTo('.contact-section', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo('.contact-card', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.contact-cards',
          start: 'top 85%'
        }
      }
    );
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Réinitialiser le message de succès après 5 secondes
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-[#0073B7]" size={24} />,
      title: "Adresse",
      details: ["1098, Av MAMA YEMO", "C/Lubumbashi, Haut-Katanga RDC"],
      link: "https://goo.gl/maps/example"
    },
    {
      icon: <FiPhone className="text-[#0073B7]" size={24} />,
      title: "Téléphone",
      details: ["+243 822266004", "+243 843387388"],
      link: "tel:+243822266004"
    },
    {
      icon: <HiOutlineMail className="text-[#0073B7]" size={24} />,
      title: "Email",
      details: ["direction@cs-bisounours.com", "info@cs-bisounours.com"],
      link: "mailto:direction@cs-bisounours.com"
    },
    {
      icon: <FiClock className="text-[#0073B7]" size={24} />,
      title: "Horaires",
      details: ["Lun - Ven: 7h00 - 17h00", "Sam: 8h00 - 12h00"]
    }
  ];

  const socialLinks = [
    {
      icon: <BsWhatsapp size={20} />,
      name: "WhatsApp",
      url: "https://wa.me/243822266004"
    },
    {
      icon: <BsFacebook size={20} />,
      name: "Facebook",
      url: "https://facebook.com/cs-bisounours"
    },
    {
      icon: <BsInstagram size={20} />,
      name: "Instagram",
      url: "https://instagram.com/cs-bisounours"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section Contact */}
      <section className="bg-[#0073B7] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez Notre École</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nous sommes disponibles pour répondre à toutes vos questions concernant 
            l'inscription de votre enfant et notre programme éducatif.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                  Nos Coordonnées
                </h2>
                
                <div className="contact-cards space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="contact-card p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0073B7]/30 transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#E6F0FA] rounded-lg flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {info.link ? (
                                <a 
                                  href={info.link} 
                                  className="hover:text-[#0073B7] hover:underline transition-colors"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Réseaux Sociaux</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 hover:bg-[#0073B7] text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Google Map */}
                <div className="mt-10 rounded-xl overflow-hidden shadow-md border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.1841609656462!2d27.481204699999996!3d-11.6641824"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation CS Les Bisounours"
                    className="filter grayscale hover:grayscale-0 transition-all"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                  Formulaire de Contact
                </h2>
                
                {isSubmitted ? (
                  <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center">
                    <HiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Message envoyé avec succès!
                    </h3>
                    <p className="text-green-600">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet <span className="text-[#0073B7]">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-[#0073B7]">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                          placeholder="+243 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet <span className="text-[#0073B7]">*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition bg-white"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="Inscription">Inscription</option>
                          <option value="Renseignement">Renseignement</option>
                          <option value="Visite">Demande de visite</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-[#0073B7]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                        placeholder="Décrivez votre demande..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center bg-[#0073B7] hover:bg-[#005a9c] text-white py-4 px-6 rounded-lg font-medium transition-colors duration-300"
                    >
                      <span>Envoyer le message</span>
                      <BsSend className="ml-2" size={18} />
                    </button>
                  </form>
                )}

                {/* FAQ Quick Links */}
                <div className="mt-10 bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Questions fréquentes
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="#faq" 
                        className="text-[#0073B7] hover:underline flex items-start"
                      >
                        <span className="mr-2">•</span>
                        Quels sont les documents nécessaires pour l'inscription?
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#faq" 
                        className="text-[#0073B7] hover:underline flex items-start"
                      >
                        <span className="mr-2">•</span>
                        Quels sont les horaires de l'école?
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#faq" 
                        className="text-[#0073B7] hover:underline flex items-start"
                      >
                        <span className="mr-2">•</span>
                        Comment se déroule la procédure d'admission?
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#E6F0FA] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Vous préférez nous appeler directement?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="tel:+243822266004" 
              className="flex items-center bg-white text-[#0073B7] hover:bg-[#0073B7] hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-md"
            >
              <FiPhone className="mr-2" size={20} />
              +243 822 266 004
            </a>
            <span className="text-gray-600">ou</span>
            <a 
              href="tel:+243843387388" 
              className="flex items-center bg-white text-[#0073B7] hover:bg-[#0073B7] hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-md"
            >
              <FiPhone className="mr-2" size={20} />
              +243 843 387 388
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}