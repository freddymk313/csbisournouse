const OptionsPage = () => {
  return (
    <div className="options-page">
      <h1>Options et Services Complémentaires</h1>
      
      <section className="section">
        <h2>🕒 Horaires Étendus</h2>
        <p>
          Notre établissement propose des services d'accueil avant et après les heures de classe pour s'adapter aux besoins des familles :
        </p>
        <ul>
          <li><strong>Garderie matinale</strong> : à partir de 7h00</li>
          <li><strong>Études surveillées</strong> : jusqu'à 18h00</li>
          <li><strong>Accueil du mercredi</strong> : journée complète avec activités</li>
        </ul>
      </section>

      <section className="section">
        <h2>🎨 Activités Extrascolaires</h2>
        <p>
          Nous proposons une large gamme d'activités pour développer les talents et passions de chaque enfant :
        </p>
        <div className="activity-grid">
          <div className="activity-category">
            <h3>Maternelle</h3>
            <ul>
              <li>Éveil musical</li>
              <li>Psychomotricité</li>
              <li>Jardinage pédagogique</li>
              <li>Heure du conte</li>
            </ul>
          </div>
          <div className="activity-category">
            <h3>Primaire</h3>
            <ul>
              <li>Théâtre et expression</li>
              <li>Robotique et coding</li>
              <li>Club échecs</li>
              <li>Atelier arts plastiques</li>
            </ul>
          </div>
          <div className="activity-category">
            <h3>Secondaire</h3>
            <ul>
              <li>Club sciences</li>
              <li>Débats et éloquence</li>
              <li>Atelier journal</li>
              <li>Préparation aux examens</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🍎 Services Pratiques</h2>
        <ul>
          <li><strong>Cantine</strong> : repas équilibrés préparés sur place avec options végétariennes</li>
          <li><strong>Transport scolaire</strong> : service de bus avec circuits adaptés</li>
          <li><strong>Uniforme</strong> : vente et location de tenues réglementaires</li>
          <li><strong>Aide aux devoirs</strong> : encadrement par des enseignants</li>
        </ul>
      </section>

      <section className="section">
        <h2>📅 Stages Vacances</h2>
        <p>
          Pendant les vacances scolaires, nous organisons des stages thématiques :
        </p>
        <ul>
          <li>Stage "Découverte scientifique"</li>
          <li>Stage "Expression artistique"</li>
          <li>Stage "Remise à niveau"</li>
          <li>Stage "Préparation à l'entrée en 6ème"</li>
        </ul>
      </section>

      <section className="section">
        <h2>🔗 Liens Utiles</h2>
        <ul className="useful-links">
          <li><a href="/inscription-activites">Formulaire d'inscription aux activités</a></li>
          <li><a href="/tarifs-options">Tarifs des options</a></li>
          <li><a href="/calendrier">Calendrier des activités</a></li>
          <li><a href="/contact">Contactez le service des options</a></li>
        </ul>
      </section>
    </div>
  );
};

export default OptionsPage;