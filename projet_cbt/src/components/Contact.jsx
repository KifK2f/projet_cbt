import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import fr from "react-phone-input-2/lang/fr.json";
import "react-phone-input-2/lib/bootstrap.css";

import "../assets/css/contact.css";

const Contact = () => {

  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("228");
  const [countryIso, setCountryIso] = useState("tg");



  const formatTogoNumber = (value) => {

    let numbers = value.replace(/\D/g, "");

    numbers = numbers.slice(0, 8);

    const parts = numbers.match(/.{1,2}/g);

    return parts ? parts.join(" ") : numbers;

  };



  const handlePhoneChange = (e) => {

    let value = e.target.value;

    if (countryIso === "tg") {

      value = formatTogoNumber(value);

    } else {

      value = value.replace(/\D/g, "").slice(0, 15);

    }

    setPhone(value);

  };



  const handleCountryChange = (value, country) => {

    setCountryCode(country.dialCode);
    setCountryIso(country.countryCode);
    setPhone("");

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = {

      indicatif: "+" + countryCode,
      numero: phone.replace(/\s/g, "")

    };

    console.log(formData);

  };



  return (

    <section className="contact-page">

      {/* HERO */}

      <div className="contact-hero">
        <div className="contact-overlay">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="contact-title">
                  Contactez-nous
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* SECTION */}

      <div className="contact-section">

        <div className="container">

          <div className="row g-5">

            {/* INFOS */}

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
                  src="https://maps.google.com/maps?q=lome%20togo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>

              </div>

            </div>



            {/* FORMULAIRE */}

            <div className="col-lg-6">

              <h3 className="contact-form-title">
                Envoyez-nous un message
              </h3>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

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



                {/* PAYS */}

                <div className="mb-5">

                  <label>Pays</label>

                  <PhoneInput
                    country={"tg"}
                    // preferredCountries={["tg", "fr", "bj", "gh", "ci"]}
                    localization={fr}
                    enableSearch={true}
                    value={countryCode}
                    onChange={handleCountryChange}
                    inputStyle={{ display: "none" }}
                    containerClass="country-selector"
                  />

                </div>



                {/* NUMERO */}

                <div className="mb-3">

                  <label>Numéro de téléphone</label>

                  <input
                    type="tel"
                    className="form-control phone-number"
                    // placeholder="90 12 34 56"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />

                </div>



                <div className="mb-3">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                  ></textarea>
                </div>



                <button
                  type="submit"
                  className="contact-btn"
                >
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