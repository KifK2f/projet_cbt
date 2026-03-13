import React from "react";
import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";

/* MATERIAL ICONS */

import PersonIcon from "@mui/icons-material/Person";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import FlagIcon from "@mui/icons-material/Flag";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import CampaignIcon from "@mui/icons-material/Campaign";
import EventIcon from "@mui/icons-material/Event";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import ChurchIcon from "@mui/icons-material/Church";
import MapIcon from "@mui/icons-material/Map";
import PublicIcon from "@mui/icons-material/Public";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-custom">

      <div className="container-fluid px-0 mx-3">

        {/* LOGO */}

        <NavLink to="/">
          <img
            src="http://localhost:8000/storage/CBTLogo.png"
            alt="Logo CBT"
            className="logo"
          />
        </NavLink>


        {/* TOGGLER */}

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

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link nav-custom active-link" : "nav-link nav-custom"
                }
              >
                ACCUEIL
                <span className="nav-indicator"></span>
              </NavLink>

            </li>


            {/* DECOUVRIR */}

            <li className="nav-item dropdown">

              <a
                className="nav-link nav-custom"
                href="#"
                data-bs-toggle="dropdown"
              >
                DECOUVRIR LA CBT
                <span className="nav-indicator"></span>
              </a>

              <ul className="dropdown-menu dropdown-custom">

                <li>
                  <NavLink to="/mot-president" className="dropdown-item">
                    <PersonIcon className="menu-icon"/>
                    Mot du Président
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/notre-histoire" className="dropdown-item">
                    <HistoryEduIcon className="menu-icon" />
                    Notre Histoire
                  </NavLink>
                </li>
{/* 
                <li>
                  <NavLink to="/mission-valeurs" className="dropdown-item">
                    <FlagIcon className="menu-icon" />
                    Mission et Valeurs
                  </NavLink>
                </li> */}

                <li>
                  <NavLink to="/organisation-gouvernance" className="dropdown-item">
                    <AccountTreeIcon className="menu-icon" />
                    Organisation et Gouvernance
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/confession-foi" className="dropdown-item">
                    <MenuBookIcon className="menu-icon" />
                    Confession de foi
                  </NavLink>
                </li>

              </ul>

            </li>


            {/* ACTUALITES */}

            <li className="nav-item dropdown">

              <a
                className="nav-link nav-custom"
                href="#"
                data-bs-toggle="dropdown"
              >
                ACTUALITES ET MEDIAS
                <span className="nav-indicator"></span>
              </a>

              <ul className="dropdown-menu dropdown-custom">

                <li>
                  <NavLink to="/actualites" className="dropdown-item">
                    <CampaignIcon className="menu-icon" />
                    Actualités
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/evenements" className="dropdown-item">
                    <EventIcon className="menu-icon" />
                    Évènements
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/galerie" className="dropdown-item">
                    <PhotoLibraryIcon className="menu-icon" />
                    Galerie photos
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/videos-predications" className="dropdown-item">
                    <SmartDisplayIcon className="menu-icon" />
                    Vidéos et prédications
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/newsletters" className="dropdown-item">
                    <NewspaperIcon className="menu-icon" />
                    Newsletters
                  </NavLink>
                </li>

              </ul>

            </li>


            {/* EGLISES */}

            <li className="nav-item dropdown">

              <a
                className="nav-link nav-custom"
                href="#"
                data-bs-toggle="dropdown"
              >
                NOS EGLISES ET ŒUVRES
                <span className="nav-indicator"></span>
              </a>

              <ul className="dropdown-menu dropdown-custom">

                <li>
                  <NavLink to="/carte-eglises" className="dropdown-item">
                    <MapIcon className="menu-icon" />
                    Carte interactive des églises
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/annuaire-region" className="dropdown-item">
                    <PublicIcon className="menu-icon" />
                    Annuaire par région
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/zones" className="dropdown-item">
                    <ChurchIcon className="menu-icon" />
                    Zones
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/oeuvres-missions" className="dropdown-item">
                    <VolunteerActivismIcon className="menu-icon" />
                    Œuvres sociales et missions
                  </NavLink>
                </li>

              </ul>

            </li>


            {/* CONTACT */}

            <li className="nav-item">

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-custom active-link" : "nav-link nav-custom"
                }
              >
                CONTACT
                <span className="nav-indicator"></span>
              </NavLink>

            </li>


          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;