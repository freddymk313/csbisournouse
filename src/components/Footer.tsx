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
    <footer className="w-full bg-[#0073b7] text-white">
        <div className="container mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div>
              <h3 className="font-bold text-2xl lg:text-3xl mb-6">
                CS LES BISOUNOURS
              </h3>
              <p className="text-justify leading-relaxed">
                Depuis 1998, nous nous engageons à offrir une éducation de
                qualité dans un environnement bienveillant, préparant nos
                élèves à réussir leur avenir avec excellence et intégrité.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl mb-6">
                Navigation
              </h3>
              <nav>
                <ul className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3"></div>
                      <a 
                        href={`#${link.text.toLowerCase().replace('à propos', 'about').replace('accueil', 'home').replace('galerie', 'gallery')}`}
                        className=" transition-colors duration-300"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-xl mb-6">
                Contact
              </h3>
              <div className="space-y-3 text-base">
                <p>1098, Av MAMA YEMO</p>
                <p>C/Lubumbashi, Haut-Katanga RDC</p>
                <p>+243 822266004</p>
                <p>+243 843387388</p>
                <p>direction@cs-bisounours.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-xl mb-6">
                Newsletter
              </h3>
              <p className="text-justify mb-6">
                Recevez nos actualités et informations importantes directement 
                dans votre boîte mail.
              </p>
              <div className="space-y-4">
                <input 
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-xl" 
                  placeholder="Votre email"
                />
                <button className="w-full h-12 text-[#0073b7] rounded-xl font-semibold">
                  S'abonner
                </button>
              </div>
            </div>
          </div>

          {/* Separator */}

          <div className="text-center text-sm">
            <p>
              © 2025 CS LES BISOUNOURS — Tous droits réservés |{" "}
              <a
                href="#"
                className="underline transition-colors duration-300"
              >
                Mentions légales
              </a>{" "}
              |{" "}
              <a
                href="#"
                className="underline transition-colors duration-300"
              >
                Politique de confidentialité
              </a>
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer