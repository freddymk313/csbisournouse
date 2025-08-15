import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsSend } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

export default function FormulaireInscriptionPage() {
  const [formData, setFormData] = useState({
    nomEleve: '',
    dateNaissance: '',
    lieuNaissance: '',
    nationalite: '',
    nomParent: '',
    telephone: '',
    email: '',
    niveauScolaire: '',
    piecesJointes: null as FileList | null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    gsap.fromTo(
      '.formulaire-inscription',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.formulaire-inscription',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setMessage(null);

  try {
    const data = new FormData();
    data.append('nom_complet_etudiant', formData.nomEleve);
    data.append('date_de_naissance', formData.dateNaissance);
    data.append('lieu_de_naissance', formData.lieuNaissance);
    data.append('nationalite', formData.nationalite);
    data.append('nom_complet_parent', formData.nomParent);
    data.append('contact_parent', formData.telephone);
    data.append('email_parent', formData.email);
    data.append('niveau_etude', formData.niveauScolaire);
    data.append('classe', '5'); 

    if (formData.piecesJointes) {
      for (let i = 0; i < formData.piecesJointes.length; i++) {
        data.append('fichier', formData.piecesJointes[i]);
      }
    }

    const res = await fetch('http://localhost:3000/admission', {
      method: 'POST',
      body: data,
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || 'Erreur lors de l’envoi');
    }

    setMessage({ type: 'success', text: 'Inscription envoyée avec succès' });
    setFormData({
      nomEleve: '',
      dateNaissance: '',
      lieuNaissance: '',
      nationalite: '',
      nomParent: '',
      telephone: '',
      email: '',
      niveauScolaire: '',
      piecesJointes: null
    });
  } catch (error: any) {
    setMessage({ type: 'error', text: error.message });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-gray-50">
      {/* Formulaire */}
      <section className="py-16 container mx-auto px-6">
        <form
          onSubmit={handleSubmit}
          className="formulaire-inscription bg-white shadow-sm hover:shadow-md p-8 max-w-3xl mx-auto space-y-8 transition-shadow duration-300"
        >
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-2xl md:text-3xl font-bold">Formulaire d’inscription</h1>
            <p className="mt-4 *md:text-lg">
              Remplissez les informations pour finaliser la pré-inscription.
            </p>
          </div>

          <div className="text-center mt-4">
            {message && (
            <p className={message.type === 'success' ? 'text-green-600 p-2 bg-green-600/20' : 'text-red-600 p-2 bg-red-600/20'}>
            {message.text}
            </p>
            )}
          </div>
          
          {/* Infos élève */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#333333]">
              Informations de l'élève
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet <span className="text-[#0073b7]">*</span>
                </label>
                <input
                  type="text"
                  name="nomEleve"
                  required
                  value={formData.nomEleve}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                  placeholder="Nom complet de l’élève"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de naissance <span className="text-[#0073b7]">*</span>
                </label>
                <input
                  type="date"
                  name="dateNaissance"
                  required
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lieu de naissance <span className="text-[#0073b7]">*</span>
                </label>
                <input
                  type="text"
                  name="lieuNaissance"
                  required
                  value={formData.lieuNaissance}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                  placeholder="Ville / Pays"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationalité <span className="text-[#0073b7]">*</span>
                </label>
                <input
                  type="text"
                  name="nationalite"
                  required
                  value={formData.nationalite}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                  placeholder="Ex : Congolaise"
                />
              </div>
            </div>
          </div>

          {/* Infos parent */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#333333]">
              Informations du parent / tuteur
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet <span className="text-[#0073b7]">*</span>
                </label>
                <input
                  type="text"
                  name="nomParent"
                  required
                  value={formData.nomParent}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                  placeholder="Nom du parent / tuteur"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone <span className="text-[#0073b7]">*</span>
                </label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                  placeholder="+243 XXX XXX XXX"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email <span className="text-[#0073b7]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
          </div>

          {/* Niveau scolaire */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#333333]">
              Niveau souhaité
            </h2>
            <select
              name="niveauScolaire"
              required
              value={formData.niveauScolaire}
              onChange={handleChange}
              className="w-full h-12 rounded-md px-4 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
            >
              <option value="">Sélectionnez un niveau</option>
              <option value="maternelle">Maternelle</option>
              <option value="primaire">Primaire</option>
              <option value="secondaire">Secondaire</option>
            </select>
          </div>

          {/* Pièces jointes */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#333333]">
              Pièces jointes
            </h2>
            <p className="text-gray-500 mb-4 text-sm">
              Veuillez télécharger les documents requis (PDF, JPG ou PNG).
            </p>
            <input
              type="file"
              name="piecesJointes"
              multiple
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 text-sm bg-gray-50 focus:border-[#0073B7] focus:ring-2 focus:ring-[#0073B7]/50 outline-none transition"
            />
          </div>

          {/* Bouton */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#0073b7] hover:bg-[#005a8f] text-white py-4 group transition"
            >
              {loading ? 'Envoi...' : 'Envoyer la demande'}
              {!loading && <BsSend className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
