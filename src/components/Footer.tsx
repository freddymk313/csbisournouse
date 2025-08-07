import { AiFillInstagram } from "react-icons/ai";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdFacebook, MdLocationPin, MdMail, MdMap, MdPhone } from "react-icons/md";

const navigationLinks = [
  { text: "Accueil", icon: "/group-8.png" },
  { text: "Options", icon: "/group-8-1.png" },
  { text: "Services", icon: "/group-8-2.png" },
  { text: "Galerie", icon: "/group-8-3.png" },
  { text: "À propos", icon: "/group-8-4.png" },
  { text: "Contact", icon: "/group-8-5.png" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0073B7] text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* <img 
                src="/logo-white.png" 
                alt="CS Les Bisounours" 
                className="h-12 mr-3"
              /> */}
              <h3 className="font-bold text-2xl">
                CS LES BISOUNOURS
              </h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Depuis 1998, nous nous engageons à offrir une éducation de
              qualité dans un environnement bienveillant, préparant nos
              élèves à réussir leur avenir avec excellence et intégrité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <MdFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <AiFillInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <IoLogoWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/20">
              Navigation
            </h3>
            <nav>
              <ul className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.text.toLowerCase().replace('à propos', 'about').replace('accueil', 'home').replace('galerie', 'gallery')}`}
                      className="flex items-center text-white/90 hover:text-white transition-colors duration-300 group"
                    >
                      <FaChevronRight className="w-3 h-3 text-white mr-3 transition-transform" />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/20">
              Contact
            </h3>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start">
                <MdLocationPin className="w-5 h-5 mt-1 mr-3" />
                <div>
                  <p>1098, Av MAMA YEMO</p>
                  <p>C/Lubumbashi, Haut-Katanga RDC</p>
                </div>
              </div>
              <div className="flex items-center">
                <MdPhone className="w-5 h-5 mr-3" />
                <div>
                  <p>+243 822266004</p>
                  <p>+243 843387388</p>
                </div>
              </div>
              <div className="flex items-center">
                <MdMail className="w-5 h-5 mr-3" />
                <p>direction@cs-bisounours.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/20">
              Newsletter
            </h3>
            <p className="text-white/90 mb-6">
              Recevez nos actualités et informations importantes directement 
              dans votre boîte mail.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/70" 
                placeholder="Votre email"
                required
              />
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-white text-[#0073B7] *rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>© 2025 CS LES BISOUNOURS — Tous droits réservés</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer