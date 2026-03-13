import React, { useEffect, useState } from "react";

import "../assets/css/home.css"
import HomeCarousel from "./Homecarousel ";

//Section DatesUtilesSection 
const DatesUtilesSection = () => {
  const [datesUtiles, setDatesUtiles] = useState([]);
  const [annee, setAnnee] = useState(2026);

  useEffect(() => {
    setDatesUtiles([
      { id: 1, titre: "Dimanche de la formation théologique", date: "2026-01-25", type: "Spirituel" },
      { id: 2, titre: "Comité Exécutif", date: "2026-02-23", type: "Administratif" },
      { id: 3, titre: "Assemblée Générale", date: "2026-03-16", type: "Administratif" },
      { id: 4, titre: "Dimanche de Pentecôte", date: "2026-05-24", type: "Spirituel" },
      { id: 5, titre: "Mois de la Mission", date: "2026-06-01", type: "Spirituel" },
      { id: 6, titre: "Retraite annuelle", date: "2025-07-15", type: "Spirituel" },
      { id: 7, titre: "Assemblée Extraordinaire", date: "2025-09-10", type: "Administratif" },
    ]);
  }, []);

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    const dateObj = new Date(year, month - 1, day);
    return dateObj.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
  };

  return (
    <section className="dates-utiles-section">
      <div className="text-center mb-4">
        <h2>Dates Utiles {annee}</h2>
        <p>Les prochains rendez-vous institutionnels de la CBT</p>
        <div className="annee-selector mb-4">
          {[2026].map(a => (
            <button key={a} onClick={() => setAnnee(a)} className={`btn ${a === annee ? "btn-primary" : "btn-outline-primary"}`}>
              {a}
            </button>
          ))}
        </div>
        {/* <div className="annee-selector mb-4">
          {[2026, 2025].map(a => (
            <button key={a} onClick={() => setAnnee(a)} className={`btn ${a === annee ? "btn-primary" : "btn-outline-primary"}`}>
              {a}
            </button>
          ))}
        </div> */}
      </div>

      <div className="dates-list">
        {datesUtiles.filter(d => new Date(d.date).getFullYear() === annee).map(d => (
          <div key={d.id} className="date-item">
            <div className="date">{formatDate(d.date)}</div>
            <div className="titre">{d.titre}</div>
            <span className={`badge ${d.type === "Spirituel" ? "badge-spirituel" : "badge-admin"}`}>{d.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const [slides, setSlides] = useState([]);

// // Simule un fetch depuis une API
//   useEffect(() => {
//     // Ici on pourra remplacer par fetch ou axios pour récupérer les données réelles
//     const dataFromAPI = [
//       {
//         image: "http://localhost:8000/storage/slider1.jpeg",
//         titre: "Présentation institutionnelle",
//         description: "Découvrez notre mission et notre vision.",
//         lienTexte: "Faire un don",
//         lienURL: "/don",
//       },
//       {
//         image: "http://localhost:8000/storage/slider2.jpeg",
//         titre: "Actualités à la une",
//         description: "Info pour l'assemblé générale de 2026",
//         lienTexte: "Actualités",
//         lienURL: "/actualites",
//       },
//       {
//         image: "http://localhost:8000/storage/slider3.jpeg",
//         titre: "Prochains événements",
//         description: "Ne manquez pas nos activités et rencontres à venir.",
//         lienTexte: "Voir événements",
//         lienURL: "/evenements",
//       },
//             {
//         image: "http://localhost:8000/storage/AG-2026.jpeg",
//         titre: "Présentation institutionnelle",
//         description: "Découvrez notre mission et notre vision.",
//         lienTexte: "Faire un don",
//         lienURL: "/don",
//       },
//       {
//         image:"http://localhost:8000/storage/slider2.jpeg",
//         titre: "Actualités à la une",
//         description: "Info pour l'assemblé générale de 2026",
//         lienTexte: "Actualités",
//         lienURL: "/actualites",
//       },
//     ];

//     setSlides(dataFromAPI);
//   }, []);


    return (
      <>
      {/* Section Hero */}
      <HomeCarousel/>

    {/* <div>
      <HomeCarousel slides={slides} />
    </div> */}

    {/* Section Date utiles */}
    <DatesUtilesSection />



        {/* ================= SECTION MISSION & VISION ================= */}
        <section className="container py-5">
  <div className="row align-items-center">
    
    <div className="col-md-6">
      <h2 className="fw-bold mb-4">Notre Mission</h2>
      <p className="text-muted">
        La CBT œuvre pour l’édification spirituelle, le soutien social 
        et le développement communautaire. Nous croyons qu’une foi vivante 
        transforme les individus et les nations.
      </p>
      <p className="text-muted">
        À travers nos programmes, formations et événements, nous accompagnons 
        chaque membre dans sa croissance personnelle et spirituelle.
      </p>
    </div>

    <div className="col-md-6">
      <img 
        src={`http://localhost:8000/storage/missions.jpeg`}
        className="img-fluid rounded-4 shadow"
        style={{height: "400px", objectFit: "cover", width:"100%"}}
        alt="Mission"
      />
    </div>

  </div>
</section>

        {/* ================= MOT DU PRÉSIDENT ================= */}
        <section className="container my-5 py-5">
          <div className="row align-items-center g-5">
            
            {/* Colonne Image avec effet de style */}
            <div className="col-md-5">
              <div className="position-relative">
                {/* Cadre décoratif en arrière-plan */}
                <div 
                  className="position-absolute border border-primary rounded-4" 
                  style={{ 
                    top: '20px', 
                    left: '20px', 
                    width: '100%', 
                    height: '100%', 
                    zIndex: -1 
                  }}
                ></div>
                <img 
                  src={`http://localhost:8000/storage/PresidentCBT_1772207850.jpeg`}
                  alt="Président de la CBT" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Colonne Texte */}
            <div className="col-md-7">
              <h6 className="fw-bold text-uppercase mb-2" style={{ color: '#4b9cde'}}>Mot de Bienvenue</h6>
              <h2 className="display-5 fw-bold mb-4">Gagner les peuples pour Christ et perfectionner les saints</h2>
              
              <div className="position-relative">
                <i className="bi bi-quote fs-1 text-primary opacity-25 position-absolute top-0 start-0 translate-middle-y"></i>
                <p className="lead text-dark font-italic mb-4 ps-4">
                  "La Convention Baptiste du Togo est née de la prière et du sacrifice d’hommes et de femmes animés par une seule passion : obéir au Seigneur Jésus-Christ et accomplir Sa mission au Togo."
                </p>
              </div>

              <p className="text-muted mb-4">
                Depuis 1964, la CBT poursuit avec détermination le Grand Mandat, la Grande Commission et le Grand Commandement. Aujourd’hui forte de centaines d’églises réparties à travers le pays, elle œuvre pour le salut, l’édification et l’épanouissement spirituel et social des peuples du Togo.
              </p>

              <div className="d-flex align-items-center mt-5">
                <div className="border-start border-primary border-4 ps-3">
                  <h5 className="fw-bold mb-0">Rev Kokou AYADOME</h5>
                  <p className="text-muted mb-0">Président actuel de la CBT</p>
                </div>
                               
              </div>
              <div className="mt-4">
                <a
                  href="/mot-president"
                  className="btn btn-lg rounded-pill px-4 shadow-sm president-btn"
                  style={{ backgroundColor: '#4b9cde', color: 'white' }}
                >
                  Lire le mot du président au Complet
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* =================  SECTION NOS ACTIVITÉS ================= */}
        <section className="bg-light py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">Nos Activités</h2>

    <div className="row g-4">

      <div className="col-md-4">
        <div className="card border-0 shadow-sm rounded-4 h-100">
          <img 
          src={`http://localhost:8000/storage/formationBibl.jpeg`}
          className="card-img-top" style={{height:"250px", objectFit:"cover"}} />
          <div className="card-body">
            <h5 className="fw-bold">Formations Bibliques</h5>
            <p className="text-muted small">
              Sessions d’enseignement pour approfondir la parole de Dieu.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm rounded-4 h-100">
          <img 
           src={`http://localhost:8000/storage/actionSociale.jpeg`} 
          className="card-img-top" style={{height:"250px", objectFit:"cover"}} />
          <div className="card-body">
            <h5 className="fw-bold">Actions Sociales</h5>
            <p className="text-muted small">
              Soutien aux familles et projets humanitaires.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm rounded-4 h-100">
          <img 
          src={`http://localhost:8000/storage/eveSpritituel.jpeg`}
          className="card-img-top" style={{height:"250px", objectFit:"cover"}} />
          <div className="card-body">
            <h5 className="fw-bold">Événements Spirituels</h5>
            <p className="text-muted small">
              Conférences, cultes spéciaux et rassemblements.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* ================= SECTION CHIFFRES CLÉS================= */}
        <section className="container py-5 text-center">
  <div className="row">
    <div className="col-md-3">
      <h2 className="fw-bold" style={{ color: '#4b9cde'}}>20+</h2>
      <p>Années d’impact</p>
    </div>
    <div className="col-md-3">
      <h2 className="fw-bold" style={{ color: '#4b9cde'}}>5 000+</h2>
      <p>Membres accompagnés</p>
    </div>
    <div className="col-md-3">
      <h2 className="fw-bold" style={{ color: '#4b9cde'}}>150+</h2>
      <p>Événements organisés</p>
    </div>
    <div className="col-md-3">
      <h2 className="fw-bold" style={{ color: '#4b9cde'}}>12+</h2>
      <p>Programmes actifs</p>
    </div>
  </div>
</section>

        {/* ================= SECTION APPEL AU DON ================= */}
        <section className="text-white text-center py-5" style={{ backgroundColor: '#4b9cde'}}>
  <div className="container">
    <h2 className="fw-bold mb-3">
      Soutenez notre mission
    </h2>
    <p className="mb-4">
      Votre contribution nous aide à étendre notre impact 
      et soutenir davantage de familles.
    </p>
    <a href="/don" className="btn btn-light btn-lg rounded-pill px-5">
      Faire un don maintenant
    </a>
  </div>
</section>
      </>
    );
}

export default Home