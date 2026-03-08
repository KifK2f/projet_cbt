import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../assets/css/footer.css"


class Footer extends React.Component {
  render() {
    return (
      <footer className="cbt-footer text-white pt-5 pb-4">

        <div className="container-fluid px-5">
          <div className="row gy-4">

            {/* Brand */}
            <div className="col-md-4">

              <div className="d-flex align-items-center mb-3">

                <img
                  src={`http://localhost:8000/storage/CBT Logo.png`}
                  alt="CBT Logo"
                  className="footer-logo me-3"
                />

                <h5 className="fw-bold m-0 footer-title">
                  Convention Baptiste du Togo
                </h5>

              </div>

              <p className="small footer-desc">
                Organisation chrétienne engagée dans l’évangélisation,
                l’éducation spirituelle et les œuvres sociales au Togo.
              </p>


              <div className="d-flex align-items-start mb-2">
                <LocationOnIcon className="me-2 footer-icon"/>
                <small>
                  657 Bd de la Kara, Tokoin Doumasséssé <br/>
                  08 B.P. 80754 Lomé
                </small>
              </div>


              <div className="d-flex align-items-start mb-2">
                <PhoneIcon className="me-2 footer-icon"/>
                <small>
                  (+228) 22 20 85 56 / 22 21 95 26 <br/>
                  (+228) 91 12 72 92 / 97 68 40 25
                </small>
              </div>


              <div className="d-flex align-items-start mb-2">
                <EmailIcon className="me-2 footer-icon"/>
                <small>
                  convention.togo@gmail.com <br/>
                  cbtogo2@yahoo.fr
                </small>
              </div>


              <div className="d-flex align-items-start">
                <LanguageIcon className="me-2 footer-icon"/>
                <small>www.conventionbaptistetogo.org</small>
              </div>

            </div>


            {/* Découvrir */}
            <div className="col-md-2">

              <h6 className="footer-heading">Découvrir</h6>

              <ul className="list-unstyled footer-links">

                <li><a href="/mot-president">Mot du Président</a></li>
                <li><a href="/notre-histoire">Notre Histoire</a></li>
                <li><a href="/mission-valeurs">Mission & Valeurs</a></li>
                <li><a href="/organisation-gouvernance">Gouvernance</a></li>

              </ul>

            </div>


            {/* Ressources */}
            <div className="col-md-2">

              <h6 className="footer-heading">Ressources</h6>

              <ul className="list-unstyled footer-links">

                <li><a href="/actualites">Actualités</a></li>
                <li><a href="/bibliotheque">Bibliothèque</a></li>
                <li><a href="/telechargement">Téléchargements</a></li>
                <li><a href="/contact">Contact</a></li>

              </ul>

            </div>


            {/* Engagement */}
            <div className="col-md-4">

              <h6 className="footer-heading">S'engager</h6>

              <p className="small footer-desc">
                Soutenez nos actions missionnaires et sociales à travers votre don
                ou en restant informé.
              </p>

              <a href="/don" className="btn btn-don w-100 mb-3">

                <FavoriteIcon className="me-2"/>
                Faire un don

              </a>


              <div className="input-group subscribe-box">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                />

                <button className="btn btn-subscribe">
                  S'abonner
                </button>

              </div>

            </div>

          </div>


          <hr className="footer-divider"/>


          <div className="d-flex justify-content-between flex-wrap">

            <small className="footer-copy">
              © 2026 Convention Baptiste du Togo
            </small>

            <div className="footer-bottom-links">

              <a href="/confidentialite">Confidentialité</a>
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/contact">Contact</a>

            </div>

          </div>

        </div>

      </footer>
    );
  }
}

export default Footer;