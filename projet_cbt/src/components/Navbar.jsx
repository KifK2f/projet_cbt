import React from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-custom">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand fw-bold text-white" to="/">
            Convention Baptiste du Togo
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

              <li className="nav-item">
                <Link className="nav-link nav-custom" to="/">ACCUEIL</Link>
              </li>

              {/* Dropdown exemple amélioré */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link  nav-custom"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  DÉCOUVRIR
                </a>
                <ul className="dropdown-menu dropdown-custom">
                  <li><Link className="dropdown-item" to="/mot-president">Mot du Président</Link></li>
                  <li><Link className="dropdown-item" to="/notre-histoire">Notre Histoire</Link></li>
                  <li><Link className="dropdown-item" to="/mission-valeurs">Mission & Valeurs</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom" to="/actualites">ACTUALITÉS</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom" to="/contact">CONTACT</Link>
              </li>

            </ul>

            {/* Bouton Don */}
            <Link className="btn btn-primary btn-don" to="/don">
              Faire un don
            </Link>

          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;