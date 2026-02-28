import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteIcon from "@mui/icons-material/Favorite";

class Footer extends React.Component {
  render() {
    return (
        <footer className="text-dark bg-light pb-4">
        <div className="container-fluid px-5">
          <div className="row gy-4">

            {/* CBT Info */}
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Convention Baptiste du Togo</h5>
              <p className="small text-secondary">
                Organisation chrétienne engagée dans l’évangélisation,
                l’éducation spirituelle et les œuvres sociales au Togo.
              </p>

              <div className="d-flex align-items-start mb-2">
                <LocationOnIcon className="me-2" style={{ color: '#4b9cde'}}/>
                <small>Siège : ..., ...</small>
              </div>

              <div className="d-flex align-items-start mb-2">
                <PhoneIcon className="me-2" style={{ color: '#4b9cde'}} />
                <small>(+228) XX XX XX XX / (+228) XX XX XX XX</small>
              </div>

              <div className="d-flex align-items-start mb-2">
                <EmailIcon className="me-2" style={{ color: '#4b9cde'}} />
                <small>....@....</small>
              </div>

              <div className="d-flex align-items-start">
                <LanguageIcon className="me-2" style={{ color: '#4b9cde'}} />
                <small>www......</small>
              </div>
            </div>

            {/* Liens rapides */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Découvrir</h6>
              <ul className="list-unstyled small text-dark">
                <li><a href="/mot-president" className="text-decoration-none text-dark">Mot du Président</a></li>
                <li><a href="/notre-histoire" className="text-decoration-none text-dark">Notre Histoire</a></li>
                <li><a href="/mission-valeurs" className="text-decoration-none text-dark">Mission & Valeurs</a></li>
                <li><a href="/organisation-gouvernance" className="text-decoration-none text-dark">Gouvernance</a></li>
              </ul>
            </div>

            {/* Ressources */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Ressources</h6>
              <ul className="list-unstyled small">
                <li><a href="/actualites" className="text-decoration-none text-dark">Actualités</a></li>
                <li><a href="/bibliotheque" className="text-decoration-none text-dark">Bibliothèque</a></li>
                <li><a href="/telechargement" className="text-decoration-none text-dark">Téléchargements</a></li>
                <li><a href="/contact" className="text-decoration-none text-light">Contact</a></li>
              </ul>
            </div>

            {/* Engagement */}
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">S'engager</h6>
              <p className="small text-secondary">
                Soutenez nos actions missionnaires et sociales.
              </p>

              <a href="/don" className="btn w-100 mb-3 fw-bold text-white" style={{ backgroundColor: '#4b9cde'}}>
                <FavoriteIcon className="me-2" style={{ color: 'white'}} />
                Faire un don
              </a>

              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre email"
                />
                <button className="btn fw-bold text-white" style={{ backgroundColor: '#4b9cde'}} >
                  S'abonner
                </button>
              </div>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;