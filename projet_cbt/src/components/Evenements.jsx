import React, { useEffect, useMemo, useState } from "react";
import "../assets/css/evenements.css";

const Evenements = () => {

  const [datesUtiles, setDatesUtiles] = useState([]);
  const [evenements, setEvenements] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {

    // ===== Simulation API Dates Utiles =====
    const datesAPI = [
      {
        id: 1,
        annee: 2026,
        titre: "Assemblée Générale",
        periode: "16-20 Mars",
        type: "Administratif"
      },
      {
        id: 2,
        annee: 2026,
        titre: "Mois de la Mission",
        periode: "Juin",
        type: "Spirituel"
      },
      {
        id: 3,
        annee: 2026,
        titre: "Mois Enfant CBT",
        periode: "Août",
        type: "Spirituel"
      }
    ];

    // ===== Simulation API Événements =====
    const eventsAPI = [
      {
        id: 1,
        titre: "Assemblée Générale Nationale",
        description: "Rencontre annuelle des délégués des églises.",
        date: "2026-03-16",
        lieu: "Lomé",
        dateUtileId: 1
      },
      {
        id: 2,
        titre: "Camp Missionnaire",
        description: "Formation et évangélisation nationale.",
        date: "2026-06-10",
        lieu: "Kara",
        dateUtileId: 2
      },
      {
        id: 3,
        titre: "Camp des Enfants CBT",
        description: "Activités spirituelles et éducatives.",
        date: "2026-08-12",
        lieu: "Atakpamé",
        dateUtileId: 3
      }
    ];

    setDatesUtiles(datesAPI);
    setEvenements(eventsAPI);

  }, []);

  const today = new Date();

  const filteredEvents = useMemo(() => {
    return evenements
      .filter(e => new Date(e.date).getFullYear() === selectedYear)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [evenements, selectedYear]);

  const years = [...new Set(evenements.map(e => new Date(e.date).getFullYear()))];

  return (
    <div className="container py-5">

      <h2 className="text-center fw-bold mb-4">
        Calendrier & Événements CBT
      </h2>

      {/* ===== FILTRE ANNEE ===== */}
      <div className="text-center mb-5">
        {years.map(year => (
          <button
            key={year}
            className={`btn me-2 ${selectedYear === year ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* ===== DATES UTILES ===== */}
      <div className="mb-5">
        <h4 className="section-subtitle">Dates Utiles {selectedYear}</h4>

        <div className="row g-4 mt-3">
          {datesUtiles
            .filter(d => d.annee === selectedYear)
            .map(date => (
              <div key={date.id} className="col-md-4">
                <div className="date-utile-card">

                  <h5>{date.titre}</h5>
                  <p className="periode">{date.periode}</p>
                  <span className="badge bg-secondary">
                    {date.type}
                  </span>

                </div>
              </div>
            ))}
        </div>
      </div>

      {/* ===== EVENEMENTS ===== */}
      <div>
        <h4 className="section-subtitle">Événements détaillés</h4>

        <div className="row g-4 mt-3">
          {filteredEvents.map(event => {

            const isUpcoming = new Date(event.date) >= today;
            const relatedDate = datesUtiles.find(d => d.id === event.dateUtileId);

            return (
              <div key={event.id} className="col-md-6">
                <div className={`event-card p-4 ${isUpcoming ? "upcoming" : "past"}`}>

                  <div className="event-date">
                    {new Date(event.date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "long"
                    })}
                  </div>

                  <h5 className="mt-3">{event.titre}</h5>

                  <p className="text-muted">{event.description}</p>

                  <p><strong>Lieu :</strong> {event.lieu}</p>

                  {relatedDate && (
                    <small className="text-primary">
                      Rattaché à : {relatedDate.titre}
                    </small>
                  )}

                  {isUpcoming && (
                    <div className="badge bg-success mt-2">
                      À venir
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Evenements;