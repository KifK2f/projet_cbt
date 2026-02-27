import axios from "axios";
import { AppConstants } from "../util/constant";

// Création d'une instance Axios car 
const api = axios.create({
  baseURL: AppConstants.BACKEND_URL,
});

// const api = axios.create({
//   baseURL: AppConstants.BACKEND_URL,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('token')}`
//   }
// });

class PresidentService {
  // Récupérer toutes les infos de la tables presidents
  getAllpresidents() {
    return api.get('/presidents');
  }

//   // Créer une ligne dans la table presidents
//   createPresident(data) {
//     return api.post('/presidents', data, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       } //application/json → JSON classique
//         // multipart/form-data → formulaire avec fichiers (upload d’images, PDF, etc.)
//         // application/x-www-form-urlencoded → formulaire classique (pas de fichiers)
//     });
//   }

}

export default new PresidentService(); //car PresidentService est une classe et pour l'utiliser on doit créer une instance