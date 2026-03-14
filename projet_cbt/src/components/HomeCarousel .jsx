import React, { useEffect, useState, useRef } from "react";
import "../assets/css/homecarousel.css";

const AUTO_SLIDE_DELAY = 3000;
// valeur	vitesse
// 3000	rapide
// 5000	normal
// 8000	lent

const slides = [
  {
    image: "http://localhost:8000/storage/slider1.jpeg",
    titre: "Présentation institutionnelle",
    description: "Découvrez notre mission et notre vision.",
    lienTexte: "Faire un don",
    lienURL: "/don"
  },
  {
    image: "http://localhost:8000/storage/slider2.jpeg",
    titre: "Actualités à la une",
    description: "Assemblée Générale 2026",
    lienTexte: "Actualités",
    lienURL: "/actualites"
  },
  {
    image: "http://localhost:8000/storage/slider3.jpeg",
    titre: "Prochains événements",
    description: "Ne manquez pas nos activités.",
    lienTexte: "Voir événements",
    lienURL: "/evenements"
  },
  {
    image: "http://localhost:8000/storage/slider4.jpeg",
    titre: "Mission",
    description: "Notre engagement pour la communauté.",
    lienTexte: "Découvrir",
    lienURL: "/mission"
  },
  {
    image: "http://localhost:8000/storage/AG-2026.jpeg",
    titre: "Assemblée Générale 2026",
    description: "Découvrez notre mission et notre vision.",
    lienTexte: "Découvrir",
    lienURL: "/actualites",
  },
];

const Homecarousel = () => {

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const total = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, AUTO_SLIDE_DELAY);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (

    <section className="hc-root">

      {/* SLIDE PRINCIPAL */}
      <div className="hc-main">

        {slides.map((slide, index) => (

          <div
            key={index}
            className={`hc-slide ${index === current ? "active" : ""}`}
          >

            <img
              src={slide.image}
              alt={slide.titre}
              className="hc-image"
            />

            <div className="hc-overlay"></div>

            <div className="hc-content">

              <h1 className="hc-title">{slide.titre}</h1>

              <p className="hc-description">
                {slide.description}
              </p>

              <a
                href={slide.lienURL}
                className="hc-button"
              >
                {slide.lienTexte}
              </a>

            </div>

          </div>

        ))}

      </div>

      {/* FLECHE GAUCHE */}
      <button
        className="carousel-control-prev hc-arrow"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      {/* FLECHE DROITE */}
      <button
        className="carousel-control-next hc-arrow"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon"></span>
      </button>

      {/* PREVIEW IMAGES */}
      <div className="hc-preview">

        {slides.map((slide, index) => (

          <div
            key={index}
            className={`hc-thumb ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          >

            <img src={slide.image} alt="" />

          </div>

        ))}

      </div>

    </section>

  );
};

export default Homecarousel;