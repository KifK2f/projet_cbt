import React, { useEffect, useState } from "react";

import ag_26 from "../assets/images/ag-2026.jpeg"; 
import ded1 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_1.jpeg";
import ded2 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_2.jpeg";
import ded3 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_3.jpeg";
import ded4 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_4.jpeg";
import ded5 from "../assets/images/dedicace-temple-Diguéngué/dedicace-Diguéngue_5.jpeg";

import presidentCBT from "../assets/images/bureauCBT/PresidentCBT.jpeg"

import "../assets/css/home.css"

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
          {[2026, 2025].map(a => (
            <button key={a} onClick={() => setAnnee(a)} className={`btn ${a === annee ? "btn-primary" : "btn-outline-primary"}`}>
              {a}
            </button>
          ))}
        </div>
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

// Section Croussel
const HomeCarousel = ({ slides }) => {
  return (
    <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <img
              src={slide.image}
              className="d-block w-100 carousel-img"
              alt={slide.titre}
            />
            <div className="carousel-caption">
              {slide.titre && <h1>{slide.titre}</h1>}
              {slide.description && <p>{slide.description}</p>}
              {slide.lienTexte && slide.lienURL && (
                <a href={slide.lienURL} className="btn btn-lg carousel-btn">
                  {slide.lienTexte}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};


const Home = () => {
  const [slides, setSlides] = useState([]);

// Simule un fetch depuis une API
  useEffect(() => {
    // Ici on pourra remplacer par fetch ou axios pour récupérer les données réelles
    const dataFromAPI = [
      {
        image: ded1,
        titre: "Présentation institutionnelle",
        description: "Découvrez notre mission et notre vision.",
        lienTexte: "Faire un don",
        lienURL: "/don",
      },
      {
        image: ag_26,
        titre: "Actualités à la une",
        description: "Info pour l'assemblé générale de 2026",
        lienTexte: "Actualités",
        lienURL: "/actualites",
      },
      {
        image: ded2,
        titre: "Prochains événements",
        description: "Ne manquez pas nos activités et rencontres à venir.",
        lienTexte: "Voir événements",
        lienURL: "/evenements",
      },
    ];

    setSlides(dataFromAPI);
  }, []);


    return (
      <>
      {/* Section Hero */}

{/* <section className="position-relative">
  <img 
    src={ded1}
    className="w-100"
    alt="CBT"
    style={{height: "600px", objectFit: "cover"}}
  />

  <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
    <h1 className="display-4 fw-bold">
      Construire une communauté forte dans la foi
    </h1>
    <p className="lead">
      Ensemble, portons la vision du Royaume et impactons notre génération.
    </p>
    <div className="mt-4">
      <a href="/don" className="btn btn-primary btn-lg rounded-pill px-4 me-3">
        Faire un don
      </a>
      <a href="/mission-valeurs" className="btn btn-outline-light btn-lg rounded-pill px-4">
        Découvrir notre mission
      </a>
    </div>
  </div>
</section> */}


        {/* <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
          
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={ag_26} className="d-block w-100" alt="Slide 1" style={{height: '32rem', objectFit: 'cover'}} />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Présentation institutionnelle</h1>
                  <p>Découvrez notre mission et notre vision.</p>
                  <p><a className="btn btn-lg" style={{ backgroundColor: '#4b9cde'}} href="/don">Faire un don</a></p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={ded2} className="d-block w-100" alt="Slide 2" style={{height: '32rem', objectFit: 'cover'}} />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Actualités à la une</h1>
                  <p>Restez informé des dernières nouvelles de la CBT.</p>
                  <p><a className="btn btn-lg" style={{ backgroundColor: '#4b9cde'}} href="/actualites">Voir actualités</a></p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={ded3} className="d-block w-100" alt="Slide 3" style={{height: '32rem', objectFit: 'cover'}} />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Prochains événements</h1>
                  <p>Ne manquez pas nos activités et rencontres à venir.</p>
                  <p><a className="btn btn-lg" style={{ backgroundColor: '#4b9cde'}} href="/evenements">Voir événements</a></p>
                </div>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div> */}

      {/* Section Hero */}
    <div>
      <HomeCarousel slides={slides} />
    </div>

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
        src={ded2}
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
                  src={presidentCBT} // Remplace par la photo du président
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
          <img src={ded3} className="card-img-top" style={{height:"250px", objectFit:"cover"}} />
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
          <img src={ded4} className="card-img-top" style={{height:"250px", objectFit:"cover"}} />
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
          <img src={ded5} className="card-img-top" style={{height:"250px", objectFit:"cover"}} />
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