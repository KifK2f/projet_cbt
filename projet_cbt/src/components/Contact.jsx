import React from "react";
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <section className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-overlay">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="contact-title">Contactez-nous</h1>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CONTACT SECTION */}
      <div className="contact-section">

        <div className="container">

          <div className="row g-5">

            {/* CONTACT INFOS */}

            <div className="col-lg-6">

              <div className="row g-4">

                <div className="col-md-6">
                  <div className="contact-card">
                    <h5>Email</h5>
                    <p>contact@eglise.org</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="contact-card">
                    <h5>Téléphone</h5>
                    <p>+228 90 00 00 00</p>
                  </div>
                </div>

              </div>

              <div className="contact-card mt-4">
                <h5>Adresse</h5>
                <p>
                  Lomé, Togo <br />
                  Quartier Adidogomé
                </p>
              </div>

              <div className="contact-map mt-4">

                <iframe
                  title="map"
                  width="100%"
                  height="330"
                  frameBorder="0"
                  src="https://maps.google.com/maps?q=lome%20togo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>

              </div>

            </div>



            {/* FORMULAIRE */}

            <div className="col-lg-6">

              <h3 className="contact-form-title">
                Envoyez-nous un message
              </h3>

              <form className="contact-form">

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label>Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre prénom"
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label>Téléphone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+228"
                  />
                </div>

                <div className="mb-3">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                  ></textarea>
                </div>

                <button className="contact-btn">
                  Envoyer le message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;