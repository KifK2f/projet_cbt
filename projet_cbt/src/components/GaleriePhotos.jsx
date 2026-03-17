import React, { useState, useEffect } from "react";
import "../assets/css/galerie.css";

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const GaleriePhotos = () => {

  // placeholder (sera remplacé par API)
  const [photos] = useState([
    { id: 1, title: "Culte du dimanche", image: "https://picsum.photos/600/400?1" },
    { id: 2, title: "Assemblée générale", image: "https://picsum.photos/600/400?2" },
    { id: 3, title: "Baptême", image: "https://picsum.photos/600/400?3" },
    { id: 4, title: "Conférence mission", image: "https://picsum.photos/600/400?4" },
    { id: 5, title: "Jeunesse CBT", image: "https://picsum.photos/600/400?5" }
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  // navigation clavier
  useEffect(() => {

    const handleKey = (e) => {

      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [selectedIndex]);

  return (

    <section className="gallery-section">

      <div className="container">

        {/* <div className="gallery-header">

          <PhotoLibraryIcon className="gallery-icon" />
          <h2>Galerie Photos</h2>

        </div> */}

        <div className="gallery-grid">

          {photos.map((element, index) => (

            <div
              key={element.id}
              className="gallery-card"
              onClick={() => openLightbox(index)}
            >

              <img
                src={element.image}
                alt={element.title}
              />

              <div className="gallery-overlay">
                <span>{element.title}</span>
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* LIGHTBOX */}

      {selectedIndex !== null && (

        <div className="lightbox-overlay" onClick={closeLightbox}>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* bouton fermer */}
            <button className="lightbox-close" onClick={closeLightbox}>
              <CloseIcon />
            </button>

            {/* compteur */}
            <div className="lightbox-counter">
              {selectedIndex + 1} / {photos.length}
            </div>

            {/* bouton gauche */}
            <button className="lightbox-prev" onClick={prevImage}>
              <NavigateBeforeIcon />
            </button>

            <img
              src={photos[selectedIndex].image}
              alt={photos[selectedIndex].title}
            />

            {/* bouton droite */}
            <button className="lightbox-next" onClick={nextImage}>
              <NavigateNextIcon />
            </button>

            <div className="lightbox-caption">
              {photos[selectedIndex].title}
            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default GaleriePhotos;