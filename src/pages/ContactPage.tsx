import { useState, useEffect } from 'react';
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
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';

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
      icon: <IoLogoWhatsapp size={20} />,
      name: "WhatsApp",
      url: "https://wa.me/243822266004"
    },
    {
      icon: <MdFacebook size={20} />,
      name: "Facebook",
      url: "https://facebook.com/cs-bisounours"
    },
    {
      icon: <AiFillInstagram size={20} />,
      name: "Instagram",
      url: "https://instagram.com/cs-bisounours"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section Contact */}
      <section className="relative h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src='/gallery/eleves.jpg'
            alt="Contactez le Complexe Scolaire Les Bisounours"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-16 lg:px-20 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <h1 className="contact-hero-title font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                <span className="block">Contactez</span>
                <span className="block">Notre Ecole</span>
              </h1>

              <p className="contact-hero-subtitle text-base md:text-lg mb-6 text-white/90 leading-relaxed max-w-2xl mx-auto">
                Nous sommes disponibles pour répondre à toutes vos questions concernant
                l'inscription de votre enfant et notre programme éducatif.
              </p>

              <div className="flex flex-col md:flex-row mt-6 justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                <a
                  href="tel:+243822266004"
                  className="flex items-center bg-white text-[#0073B7] hover:bg-[#0073B7] hover:text-white px-6 py-3 transition-colors duration-300 shadow-md"
                >
                  <FiPhone className="mr-2" size={16} />
                  +243 822 266 004
                </a>
                <span className="text-gray-50">ou</span>
                <a
                  href="tel:+243843387388"
                  className="flex items-center bg-white text-[#0073B7] hover:bg-[#0073B7] hover:text-white px-6 py-3 transition-colors duration-300 shadow-md"
                >
                  <FiPhone className="mr-2" size={16} />
                  +243 843 387 388
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="contact-container grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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

          {/* Map */}
          <div className="container bg-white shadow-sm max-w-6xl mx-auto mt-8">
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
      </section>

      {/* Call to Action */}
      {/* <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
            Vous préférez nous appeler directement?
          </h2>

          
        </div>
      </section> */}
    </div>
  );
}