import React from "react";
import "../assets/css/dons.css";

const Dons = () => {
  const moyensPaiement = [
    {
      nom: "Moov Money",
      numero: "90 00 00 00",
      couleur: "#fcb900",
    },
    {
      nom: "Mixx By Yas",
      numero: "92 00 00 00",
      couleur: "#4b9cde",
    },
  ];

  return (
    <section className="dons-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Soutenez notre mission</h2>
        <p className="text-muted mb-4">
          Vos dons nous aident à soutenir les églises, les programmes sociaux et les activités de la CBT.
        </p>

        <div className="row justify-content-center g-4">
          {moyensPaiement.map((moyen, idx) => (
            <div key={idx} className="col-md-4">
              <div className="don-card h-100 shadow-lg rounded-4 p-4 position-relative">
                <div 
                  className="don-blob"
                  style={{ backgroundColor: moyen.couleur }}
                ></div>

                <h4 className="fw-bold mt-4">{moyen.nom}</h4>
                <p className="mb-2">Envoyez votre contribution au numéro :</p>
                <h5 className="text-primary">{moyen.numero}</h5>

                <p className="text-muted mt-3 small">
                  Pour l'instant, seuls les paiements via Mobile Money sont acceptés.
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted mt-5 small">
          Merci pour votre soutien et pour contribuer à la mission de la CBT.
        </p>
      </div>
    </section>
  );
};

export default Dons;