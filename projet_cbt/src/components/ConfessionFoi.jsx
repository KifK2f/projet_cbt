import React, { useEffect, useRef, useState } from "react";
import "../assets/css/confession-foi.css";
import ConfessionFoiService from "../service/ConfessionFoiService";

const ArticleItem = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`foi-article ${visible ? "foi-article--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="foi-article-number">{item.id}</div>

      <div className="foi-article-body">
        <p className="foi-article-content">
          {item.content}
        </p>

        <div className="foi-divider"></div>

        <p className="foi-article-verses">
          {item.verses}
        </p>
      </div>
    </article>
  );
};

const ConfessionFoi = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ConfessionFoiService.getAllconfessionFoi()
      .then((res) => {
        const sorted = res.data.sort((a, b) => a.id - b.id);
        setArticles(sorted);
      })
      .catch((err) => {
        console.error("Erreur chargement confession :", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="foi-page">

      {/* HERO (identique à ton autre page) */}

      <div className="foi-hero">
        <div className="foi-overlay">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="foi-title">
                  Confession de Foi
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ARTICLES */}

      <div className="foi-section">

        <div className="container">

          {loading ? (

            <div className="foi-loading">
              <span></span>
              <span></span>
              <span></span>
            </div>

          ) : (

            <div className="foi-articles">

              {articles.map((item, index) => (
                <ArticleItem
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}

            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default ConfessionFoi;