import React, { useEffect, useState } from "react";
import "../assets/css/notre-histoire.css";
import HistoireSectionService from "../service/HistoireSectionService"; // Assure-toi que ce service est créé

const NotreHistoire = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    HistoireSectionService.getAllhistoireSections()
      .then((res) => {
        // On trie par order pour garder l'ordre exact des sections
        const sorted = res.data.sort((a, b) => a.order - b.order);
        setSections(sorted);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des sections :", err);
      });
  }, []);

  return (
    <section className="history-page">
      {/* HERO SECTION - inchangée */}
      <div className="history-hero">
        <div className="history-overlay">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="history-title">Notre Histoire</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ACCORDÉON DES SECTIONS */}
      <div className="timeline-section">
        <div className="container">
          <div className="timeline">
            {sections.map((section, index) => (
              <div className="timeline-item" key={section.id}>
                <div className="timeline-content">
                  <button
                    className="accordion-header"
                    onClick={(e) => {
                      const content = e.target.nextElementSibling;
                      content.style.maxHeight =
                        content.style.maxHeight ? null : content.scrollHeight + "px";
                    }}
                  >
                    {index + 1}. {section.title}
                  </button>
                  <div className="accordion-body" style={{ whiteSpace: 'pre-line' }}>
                    <p>{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATISTIQUES */}
      <div className="history-stats">
        <div className="container stats-grid">
          <div className="stat-box">
            <h3>55 000+</h3>
            <p>Fidèles</p>
          </div>

          <div className="stat-box">
            <h3>629</h3>
            <p>Églises</p>
          </div>

          <div className="stat-box">
            <h3>17</h3>
            <p>Zones</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotreHistoire;