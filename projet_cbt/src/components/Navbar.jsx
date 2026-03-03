import React from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-custom">
          <div className="container-fluid px-0 mx-3">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo CBT" className="logo" />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mx-auto">

              {/* ACCUEIL */}
              <li className="nav-item">
                <Link className="nav-link nav-custom" to="/">ACCUEIL</Link>
              </li>

              {/* DECOUVRIR LA CBT */}
              <li className="nav-item dropdown">
                <a className="nav-link nav-custom" href="#" data-bs-toggle="dropdown">
                  DECOUVRIR LA CBT
                </a>
                <ul className="dropdown-menu dropdown-custom">
                  <li><Link className="dropdown-item" to="/mot-president">Mot du Président</Link></li>
                  <li><Link className="dropdown-item" to="/notre-histoire">Notre Histoire</Link></li>
                  <li><Link className="dropdown-item" to="/mission-valeurs">Mission et Valeurs</Link></li>
                  <li><Link className="dropdown-item" to="/organisation-gouvernance">Organisation et Gouvernance</Link></li>
                  <li><Link className="dropdown-item" to="/confession-foi">Confession de foi</Link></li>
                </ul>
              </li>

              {/* ACTUALITES ET MEDIAS */}
              <li className="nav-item dropdown">
                <a className="nav-link nav-custom" href="#" data-bs-toggle="dropdown">
                  ACTUALITES ET MEDIAS
                </a>
                <ul className="dropdown-menu dropdown-custom">
                  <li><Link className="dropdown-item" to="/actualites">Actualités</Link></li>
                  <li><Link className="dropdown-item" to="/evenements">Evénements</Link></li>
                  <li><Link className="dropdown-item" to="/galerie">Galerie photos</Link></li>
                  <li><Link className="dropdown-item" to="/videos-predications">Vidéos et prédications</Link></li>
                  <li><Link className="dropdown-item" to="/newsletters">Newsletters</Link></li>
                </ul>
              </li>

              {/* NOS EGLISES ET ŒUVRES */}
              <li className="nav-item dropdown">
                <a className="nav-link nav-custom" href="#" data-bs-toggle="dropdown">
                  NOS EGLISES ET ŒUVRES
                </a>
                <ul className="dropdown-menu dropdown-custom">
                  <li><Link className="dropdown-item" to="/carte-eglises">Carte interactive des églises</Link></li>
                  <li><Link className="dropdown-item" to="/annuaire-region">Annuaire par région</Link></li>
                  <li><Link className="dropdown-item" to="/zones">Zones</Link></li>
                  <li><Link className="dropdown-item" to="/oeuvres-missions">Œuvres sociales et missions</Link></li>
                </ul>
              </li>

              {/* RESSOURCES */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link nav-custom" href="#" data-bs-toggle="dropdown">
                  RESSOURCES
                </a>
                <ul className="dropdown-menu dropdown-custom">
                  <li><Link className="dropdown-item" to="/bibliotheque">Bibliothèque numérique</Link></li>
                  <li><Link className="dropdown-item" to="/telechargement">Téléchargements</Link></li>
                  <li><Link className="dropdown-item" to="/liens-utiles">Liens utiles</Link></li>
                </ul>
              </li> */}

              {/* ESPACE MEMBRE */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link nav-custom" href="#" data-bs-toggle="dropdown">
                  ESPACE MEMBRE
                </a>
                <ul className="dropdown-menu dropdown-custom">
                  <li><Link className="dropdown-item" to="/login">Connexion sécurisée</Link></li>
                  <li><Link className="dropdown-item" to="/documents-reserves">Documents réservés</Link></li>
                  <li><Link className="dropdown-item" to="/annuaire-interne">Annuaire interne</Link></li>
                  <li><Link className="dropdown-item" to="/forum">Forum de discussion</Link></li>
                  <li><Link className="dropdown-item" to="/calendrier">Calendrier interne</Link></li>
                </ul>
              </li> */}

              {/* S'ENGAGER */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link nav-custom" href="#" data-bs-toggle="dropdown">
                  S'ENGAGER
                </a>
                <ul className="dropdown-menu dropdown-custom">
                  <li><Link className="dropdown-item" to="/don">Faire un don</Link></li>
                  <li><Link className="dropdown-item" to="/benevole">Devenir bénévole</Link></li>
                  <li><Link className="dropdown-item" to="/partenaire">Devenir partenaire</Link></li>
                  <li><Link className="dropdown-item" to="/priere">Soumettre une demande de prière</Link></li>
                </ul>
              </li> */}

              {/* CONTACT */}
              <li className="nav-item">
                <Link className="nav-link nav-custom" to="/contact">CONTACT</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;