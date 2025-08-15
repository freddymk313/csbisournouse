import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function InscriptionPage() {
  return (
    <div className="bg-gray-50 md:pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/gallery/2.jpg"
            alt="Admissions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Admissions</h1>
          <p className="mt-4 text-lg">
            Rejoignez notre école et offrez à votre enfant un avenir prometteur.
          </p>
          {/* <div className="">
            <a
              href="/admissionform"
              className="bg-[#0073b7] hover:bg-[#005a8f] text-white px-6 py-3 mt-4">
              Remplir le formulaire d’inscription
            </a>
          </div> */}
        </div>
      </section>

      {/* Contenu détaillé */}
      <section className="max-w-4xl mx-auto px-8 pb-10 pt-19 space-y-8 bg-white mt-[-60px] relative z-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-[#0073b7]">
          Procédure d’admission
        </h2>
        <ul className="space-y-4">
          {[
            "Remplir le formulaire d’inscription disponible en ligne ou au secrétariat.",
            "Joindre les documents requis (photocopie des diplômes, pièces d’identité, photos d’identité, etc.).",
            "S’acquitter des frais d’inscription auprès de la comptabilité.",
            "Passer, si nécessaire, un test d’admission selon le programme choisi.",
            "Recevoir la confirmation d’admission et l’emploi du temps."
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className="text-[#0073b7] mt-1 mr-3" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Documents requis */}
        <h2 className="text-2xl font-semibold text-[#0073b7] mt-10">
          Documents requis
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start"><FaCheckCircle className="text-[#0073b7] mt-1 mr-3" />
            <span>Photocopie certifiée conforme du diplôme d’État ou équivalent</span></li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#0073b7] mt-1 mr-3" />
            <span>Relevés de notes</span></li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#0073b7] mt-1 mr-3" />
            <span>Photocopie de la carte d’identité ou du passeport</span></li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#0073b7] mt-1 mr-3" />
            <span>4 photos d’identité récentes</span></li>
          <li className="flex items-start">
            <FaCheckCircle className="text-[#0073b7] mt-1 mr-3" />
            <span>Preuve de paiement des frais d’inscription</span>
          </li>
        </ul>

        {/* Informations supplémentaires */}
        <h2 className="text-2xl font-semibold text-[#0073b7] mt-10">
          Informations supplémentaires
        </h2>
        <p>
          Les admissions sont ouvertes pour les sessions de {new Date().getFullYear()} -{" "}
          {new Date().getFullYear() + 1}. Les places étant limitées, nous vous
          recommandons de finaliser votre dossier le plus tôt possible.
        </p>

        {/* Bouton bas de page */}
        <div className="mt-10 flex items-end *justify-self-end *w-full">
          <Link
            to="/admissionform"
            className="bg-[#0073b7] flex items-center justify-center w-full hover:bg-[#005a8f] text-white px-6 py-3">
            <span className="">Remplir le formulaire maintenant</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
