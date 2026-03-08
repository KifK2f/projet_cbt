import React, { useEffect, useState } from "react";
import "../assets/css/confession-foi.css";

const ConfessionFoi = () => {

  const [articles, setArticles] = useState([]);

  // Simulation API
  useEffect(() => {

    const fakeApiData = [

      {
        id:1,
        number:1,
        title:"La Bible",
        content:"La Bible, composée des soixante-six livres canoniques, est tout entière inspirée de Dieu et constitue la révélation écrite complète de Dieu à l'homme."
      },

      {
        id:2,
        number:2,
        title:"Dieu",
        content:"Dieu est un et éternel, créateur de l’univers, révélé en trois personnes : Père, Fils et Saint-Esprit."
      },

      {
        id:3,
        number:3,
        title:"Le salut",
        content:"Dieu entend nos prières et sauve du péché ceux qui viennent à lui par la foi en Jésus-Christ."
      },

      {
        id:4,
        number:4,
        title:"Jésus-Christ",
        content:"Jésus-Christ est le Fils unique de Dieu, né d’une vierge, qui a vécu sans péché et s’est offert en sacrifice pour les péchés des hommes."
      },

      {
        id:5,
        number:5,
        title:"La résurrection",
        content:"Jésus-Christ est ressuscité et est le seul médiateur entre Dieu et les hommes."
      }

    ];

    // Simulation d'une réponse API
    setTimeout(() => {
      setArticles(fakeApiData);
    }, 500);

  }, []);


  return (
    <section className="confession-page">

      {/* HERO */}
      <div className="confession-hero">
        <div className="confession-overlay">
          <div className="container text-center">
            <h1 className="confession-title">Confession de Foi</h1>
          </div>
        </div>
      </div>


      {/* ARTICLES */}
      <div className="confession-section">

        <div className="container">

          <div className="articles-grid">

            {articles.map((element) => (

              <div className="article-card" key={element.id}>

                <div className="article-number">
                  {element.number}
                </div>

                <h3 className="article-title">
                  {element.title}
                </h3>

                <p className="article-content">
                  {element.content}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ConfessionFoi;