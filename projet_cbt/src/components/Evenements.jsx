import React, { useEffect, useMemo, useState } from "react";
import "../assets/css/evenements.css";
import DatesUtiles from "./DatesUtiles";

const Evenements = () => {

 

  return (
    <div className="container py-5" style={{ background: "linear-gradient(120deg, #f7fbff 60%, #e3f0fa 100%)" }}>

      <h2 className="text-center fw-bold mb-4">
        Calendrier & Événements CBT
      </h2>

     
      {/* ===== DATES UTILES ===== */}
      <div className="mb-5">
          <DatesUtiles />
        
      </div>

      {/* ===== EVENEMENTS ===== */}
      <div>
        <h4 className="section-subtitle"  >Événements détaillés</h4>

        {/* <div className="row g-4 mt-3">
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
        </div> */}
      </div>

    </div>
  );
};

export default Evenements;