import React, { useState, useEffect } from "react";
import PresidentService from "../service/PresidentService";
import "../assets/css/mot-president.css";

const MotPresident = () => {
  const [president, setPresident] = useState(null);

  useEffect(() => {
    PresidentService.getAllpresidents()
      .then((res) => {
        if (res.data.length > 0) {
          setPresident(res.data[0]);
        }
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des infos :", err);
      });
  }, []);

  return (
    <section className="mot-president-page">
      {/* HERO SECTION ÉLÉGANTE */}
      <div className="president-hero">
        <div className="hero-overlay">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="hero-title">Mot du Président</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION PRÉSIDENT */}
      <div className="president-section">
        <div className="container">
          {/* PROFIL DU PRÉSIDENT */}
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              {president && (
                <div>
                  <div className="president-image-wrapper">
                    <img
                      src={`http://localhost:8000/storage/${president.url_image}`}
                      alt={`${president.name} - Président CBT`}
                      className="president-image"
                    />
                  </div>
                  <h2 className="president-name">{president?.name}</h2>
                </div>
              )}
            </div>
          </div>

          {/* MESSAGE DU PRÉSIDENT */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="message-container">              
                <div className="message-content">
                  <p className="message-text" style={{ whiteSpace: 'pre-line' }}>
                    {president?.message}
                  </p>
                </div>

                {/* SIGNATURE */}
                <div className="message-signature">
                  <p className="signature-name">{president?.name}</p>
                  <p className="signature-title">Président de la CBT</p>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default MotPresident;