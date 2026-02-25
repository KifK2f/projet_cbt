import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'

// Composant générique pour les pages
const Page = ({ title, children }) => (
  <div className="container py-5">
    <h1>{title}</h1>
    {children}
  </div>
)

class AppRouter extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Découvrir la CBT */}
        <Route path="/mot-president" element={<Page title="Mot du Président" />} />
        <Route path="/notre-histoire" element={<Page title="Notre Histoire" />} />
        <Route path="/mission-valeurs" element={<Page title="Mission et Valeurs" />} />
        <Route path="/organisation-gouvernance" element={<Page title="Organisation et Gouvernance" />} />
        <Route path="/textes-fondateurs" element={<Page title="Textes fondateurs" />} />

        {/* Actualités et médias */}
        <Route path="/actualites" element={<Page title="Actualités" />} />
        <Route path="/evenements" element={<Page title="Événements" />} />
        <Route path="/galerie" element={<Page title="Galerie photos" />} />
        <Route path="/videos-predications" element={<Page title="Vidéos et prédications" />} />
        <Route path="/newsletters" element={<Page title="Newsletters" />} />

        {/* Nos églises et œuvres */}
        <Route path="/carte-eglises" element={<Page title="Carte interactive des églises" />} />
        <Route path="/annuaire-region" element={<Page title="Annuaire par région" />} />
        <Route path="/departements" element={<Page title="Départements" />} />
        <Route path="/oeuvres-missions" element={<Page title="Œuvres sociales et missions" />} />

        {/* Ressources */}
        <Route path="/bibliotheque" element={<Page title="Bibliothèque numérique" />} />
        <Route path="/telechargement" element={<Page title="Téléchargements" />} />
        <Route path="/liens-utiles" element={<Page title="Liens utiles" />} />

        {/* Espace membre */}
        <Route path="/login" element={<Page title="Connexion sécurisée" />} />
        <Route path="/documents-reserves" element={<Page title="Documents réservés" />} />
        <Route path="/annuaire-interne" element={<Page title="Annuaire interne" />} />
        <Route path="/forum" element={<Page title="Forum de discussion" />} />
        <Route path="/calendrier" element={<Page title="Calendrier interne" />} />

        {/* S'engager */}
        <Route path="/don" element={<Page title="Faire un don" />} />
        <Route path="/benevole" element={<Page title="Devenir bénévole" />} />
        <Route path="/partenaire" element={<Page title="Devenir partenaire" />} />
        <Route path="/priere" element={<Page title="Soumettre une demande de prière" />} />

        {/* Contact */}
        <Route path="/contact" element={<Page title="Contact" />} />
      </Routes>
    )
  }
}

export default AppRouter
