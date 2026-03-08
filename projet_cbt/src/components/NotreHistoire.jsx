import React, { useEffect, useRef, useState } from "react";
import "../assets/css/notre-histoire.css";
import HistoireSectionService from "../service/HistoireSectionService";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionItem = ({ section, index, isActive, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isActive && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + "px");
    } else {
      setHeight("0px");
    }
  }, [isActive]);

  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <button
          className={`accordion-header ${isActive ? "active" : ""}`}
          onClick={() => onToggle(index)}
        >
          {index + 1}. {section.title}
          <span className={`accordion-icon ${isActive ? "rotate" : ""}`}>
            <ExpandMoreIcon />
          </span>
        </button>

        <div
          className="accordion-body"
          style={{ maxHeight: height }}
        >
          <div ref={contentRef} style={{ whiteSpace: "pre-line" }}>
            <p>{section.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotreHistoire = () => {
  const [sections, setSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // premier ouvert

  useEffect(() => {
    HistoireSectionService.getAllhistoireSections()
      .then((res) => {
        const sorted = res.data.sort((a, b) => a.order - b.order);
        setSections(sorted);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement :", err);
      });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="history-page">

      {/* HERO */}
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

      {/* TIMELINE */}
      <div className="timeline-section">
        <div className="container">

          <div className="accordion-guide">
            Cliquez sur les titres pour découvrir chaque étape
            <span className="guide-arrow">
              <ExpandMoreIcon />
            </span>
          </div>

          <div className="timeline">
            {sections.map((section, index) => (
              <AccordionItem
                key={section.id}
                section={section}
                index={index}
                isActive={activeIndex === index}
                onToggle={toggleAccordion}
              />
            ))}
          </div>

        </div>
      </div>

      {/* STATISTIQUES */}
      {/* <div className="history-stats">
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
      </div> */}

    </section>
  );
};

export default NotreHistoire;