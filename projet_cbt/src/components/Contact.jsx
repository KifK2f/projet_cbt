import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import fr from "react-phone-input-2/lang/fr.json";
import "react-phone-input-2/lib/bootstrap.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

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
{/* 
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
      </div> */}



      {/* SECTION */}

      <div className="contact-section">

        <div className="container">

          <div className="row g-5">

            {/* INFOS */}

            <div className="col-lg-6">

              <div className="row g-4">

                <div className="col-md-6">
                  <div className="contact-card">
                    <h5><EmailIcon className="me-2 footer-icon"/>Email</h5>
                    convention.togo@gmail.com <br/>
                  cbtogo2@yahoo.fr
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="contact-card">
                    <h5><PhoneIcon className="me-2 footer-icon"/>Téléphone</h5>
                  (+228) 22 20 85 56 / 22 21 95 26 <br/>
                  (+228) 91 12 72 92 / 97 68 40 25
                  </div>
                </div>

              </div>

              <div className="contact-card mt-4">
                <h5><LocationOnIcon className="me-2 footer-icon"/>Adresse</h5>
                657 Bd de la Kara, Tokoin Doumasséssé <br/>
                  08 B.P. 80754 Lomé
              </div>

              <div className="contact-map mt-4">

                <iframe
                  title="map"
                  width="100%"
                  height="330"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.4031303883903!2d1.2115329372903079!3d6.162350254030409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e2087d04cc55%3A0x7bfd2e51baff6cff!2s%C3%89glise%20baptiste%20de%20Tokoin%20Doumass%C3%A9ss%C3%A9!5e1!3m2!1sfr!2stg!4v1773190233030!5m2!1sfr!2stg"
                  // src="https://maps.google.com/maps?q=lome%20togo&t=&z=13&ie=UTF8&iwloc=&output=embed"
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