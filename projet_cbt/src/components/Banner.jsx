import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/banner.css";

const sectionMap = {

  "mot-president": "Découvrir la CBT",
  "notre-histoire": "Découvrir la CBT",
  "mission-valeurs": "Découvrir la CBT",
  "organisation-gouvernance": "Découvrir la CBT",
  "confession-foi": "Découvrir la CBT",

  "actualites": "Actualités et médias",
  "evenements": "Actualités et médias",
  "galerie": "Actualités et médias",
  "videos-predications": "Actualités et médias",
  "newsletters": "Actualités et médias",

  "carte-eglises": "Nos églises et oeuvres",
  "annuaire-region": "Nos églises et oeuvres",
  "zones": "Nos églises et oeuvres",
  "oeuvres-missions": "Nos églises et oeuvres",

  "bibliotheque": "Ressources",
  "telechargement": "Ressources",
  "liens-utiles": "Ressources",

  "don": "S'engager",
  "benevole": "S'engager",
  "partenaire": "S'engager",
  "priere": "S'engager"

};

const Banner = () => {

  const location = useLocation();
  const path = location.pathname;

  const segments = path.split("/").filter(Boolean);
  const page = segments[0];

  if (!page) return null;

  const title = page
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  const section = sectionMap[page];

  return (

    <section className="bannercomponent position-relative overflow-hidden">

      {/* IMAGE */}
      <img
        src="http://localhost:8000/storage/banner-image.jpg"
        className="w-100 h-100 object-fit-cover banner-image"
        alt="Banner"
      />

      {/* OVERLAY */}
      <div className="bannercomponent-overlay">

        <div className="bannercomponent-content">

          <h1 className="bannercomponent-title">{title}</h1>

          <div className="bannercomponent-path">

            {section && (
              <span>{section}</span>
            )}

            {page !== "contact" && (
              <>
                <span className="separator"> &gt; </span>
                <span>{title}</span>
              </>
            )}

          </div>

        </div>

      </div>

    </section>

  );

};

export default Banner;